<?php

namespace App\Services\Iptv;

use App\Contracts\DigitalTV;
use App\Exceptions\ChangeCredentialsProblem;
use App\Exceptions\ChangeTariffStatusProblem;
use App\Exceptions\NotAuthenticate;
use App\Exceptions\NotEnoughMoney;
use App\Models\ConfigModel;
use App\Models\IptvPlan;
use App\Models\IptvUser;
use App\Models\Pay;
use App\Services\HelperServices\CostCalculation;
use App\Services\HelperServices\CreateMegogoUser;
use App\Services\HelperServices\GetTariffByServiceId;
use App\Services\HelperServices\IptvConfig;
use App\Services\HelperServices\MakePay;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class Megogo implements DigitalTV
{
    protected $inner_contract;
    protected $uid;
    protected $partner_key;

    public function __construct()
    {
        $this->inner_contract = Auth::user()->dep.'.'.Auth::user()->uid;
        $this->uid = Auth::user()->uid;
        $this->partner_key = IptvConfig::getPartnerKey('megogo');
    }

    public function getUserInfo()
    {

        $iptv_user = IptvUser::where('uid', '=', $this->uid)
            ->where('provider','=','megogo')
            ->get();

        if (count($iptv_user)>0){
            $plan_name = IptvPlan::find($iptv_user[0]['plan_id']);
            if ($plan_name){
                $name = $plan_name->name;
                $serviceID = $plan_name->id;
            }else{
                $name = null;
                $serviceID = null;
            }
            $iptv_user[0]['plan_name'] = $name;
            $iptv_user[0]['plan_serviceID'] = $serviceID;
            return $iptv_user[0];
        }
        return [];
    }

    /**
     * @throws ChangeTariffStatusProblem
     * @throws NotAuthenticate
     */
    public function changeTariffStatus($service_id, $action)
    {
        $service = $this->getServiceById($service_id);
        $changeStatus = Http::get("https://billing.megogo.net/partners/".$this->partner_key."/subscription/$action?userId=$this->inner_contract&serviceId=$service->serviceID");

        $iptv_user = IptvUser::where('uid', '=', $this->uid)
            ->where('provider','=','megogo')
            ->get();

        if (count($iptv_user) == 0){
            throw new NotAuthenticate();
        }

        if ($changeStatus['successful']){
            $tariff = new GetTariffByServiceId();
            $iptv_user = IptvUser::findOrFail($iptv_user[0]['id']);
            if ($action == 'unsubscribe'){
                $iptv_user->plan_id = null;
            }elseif ($action == 'suspend'){
                $iptv_user->plan_id = null;
            }elseif ($action == 'resume'){
                $iptv_user->plan_id = $service_id;
            }
            $iptv_user->save();

            return 'tariff '.$service->name.' '.$service->description.' successfuly '.$action;
        }else{
            throw new ChangeTariffStatusProblem();
        }
    }

    /**
     * @throws NotEnoughMoney
     * @throws NotAuthenticate
     * @throws ChangeTariffStatusProblem
     * @return mixed
     */
    public function connectService($service_id)
    {
        $service = $this->getServiceById($service_id);
        $iptv_user = IptvUser::where('uid', '=', $this->uid)
            ->where('provider','=','megogo')
            ->get();

        if (count($iptv_user) == 0){
            throw new NotAuthenticate();
        }

        $payment = new MakePay();
        $price = $this->calculateCost($service->price);
        if (!$payment->checkBalance($price)){
            throw new NotEnoughMoney();
        }

        $changeStatus = Http::get("https://billing.megogo.net/partners/".$this->partner_key."/subscription/subscribe?userId=$this->inner_contract&serviceId=$service->serviceID");
        if ($changeStatus['successful']){
            DB::beginTransaction();
            if (!$payment->payment($service, $price)){
                DB::rollBack();
                Http::get("https://billing.megogo.net/partners/".$this->partner_key."/subscription/unsubscribe?userId=$this->inner_contract&serviceId=$service->serviceID");
                throw new NotEnoughMoney();
            }

            $iptv_user = IptvUser::findOrFail($iptv_user[0]['id']);
            $iptv_user->plan_id = $service->id;
            if(!$iptv_user->save()){
                DB::rollBack();
                throw new ChangeTariffStatusProblem();
            }

            DB::commit();
            return  [
                'message'=>'tariff '.$service->name.' '.$service->description.' successfuly connected ',
                'name' => $service->name,
                'serviceID' => $service->id,
                'price' => $service->price,
                'diff_price' => $price,
                'prolong_time' => $iptv_user->prolong_time,
            ];
        }else{
            throw new ChangeTariffStatusProblem();
        }
    }

    public function getTariffPlans()
    {
        return $iptv_plans = IptvPlan::where('provider', '=', 'megogo')
            ->where('enable', '=', 1)
            ->get();
    }

    public function calculateCost($price)
    {

        $time = strtotime(date('Y-m-t 23:59'));
        $diff = $time - time();
        $amountDays =  round($diff / 86400);
        $costPerDay = $price/date('t');

        return number_format($amountDays * $costPerDay,2,'.','');
    }


    /**
     * @throws \App\Exceptions\ChangeCredentialsProblem
     */
    public function createUser($password)
    {
        $newIptvUser = new CreateMegogoUser();

        return $newIptvUser($this->inner_contract, $password);
    }

    /**
     * @throws ChangeTariffStatusProblem
     */
    public function disConnectService($service_id)
    {
        DB::beginTransaction();
        $service = $this->getServiceById($service_id);
        $calculate = new CostCalculation();
        $refund = $calculate($service);

        $transaction = Pay::findOrFail($refund['id']);
        $transaction->size_pay = -1 * abs($refund['actualPayment']);
        $transaction->descript .= '( за використання протягом '.$refund['daysAmount'].' дн)';
        if($transaction->save()){
            $iptv_user = IptvUser::where('uid', '=', Auth::user()->uid)
                ->where('provider','megogo')
                ->first();
            $changeProlong = IptvUser::findOrFail($iptv_user->id);
            $changeProlong->prolong_time -=1;
            $changeProlong->plan_id = null;
            $changeProlong->save();
            $changeStatus = Http::get("https://billing.megogo.net/partners/".$this->partner_key."/subscription/unsubscribe?userId=$this->inner_contract&serviceId=$service->serviceID");

            if ($changeStatus['successful']){
                DB::commit();
                return $changeProlong->prolong_time;
            }else{
                DB::rollBack();
                throw new ChangeTariffStatusProblem();
            }
        }else{
            DB::rollBack();
            throw new ChangeTariffStatusProblem();
        }

    }

    /**
     * @throws ChangeCredentialsProblem
     */
    public function changeCredentials($email, $password)
    {
        $credentials =
            [
                'isdn' => $this->inner_contract,
                'email' => $email,
                'password' => $password,
            ];

        $setPassword = Http::withBody(json_encode($credentials),'application/json')->post("https://billing.megogo.net/partners/testprod_ua/user/changeCredentials");
        if (isset($setPassword['result'])){
            throw new ChangeCredentialsProblem();
        }
        return 'success change';
    }

    public function getServiceById($id)
    {
        $service = IptvPlan::find($id);

        if (!$service){
            return [];
        }

        return $service;
    }
}
