<?php

namespace App\Services\Ipty;

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
        $q = ConfigModel::query()->select('value')->where('name', '=', 'iptv')->get();
        $res = json_decode($q[0]['value'],1);
        $this->partner_key = $res['megogo']['partner_key'];
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
                $serviceID = $plan_name->serviceID;
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
    public function changeTariffStatus($serviceID, $action)
    {
        $changeStatus = Http::get("https://billing.megogo.net/partners/".$this->partner_key."/subscription/$action?userId=$this->inner_contract&serviceId=$serviceID");

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
                $iptv_user->plan_id = $tariff($serviceID)->id;
            }
            $iptv_user->save();

            return 'tariff '.$tariff($serviceID)->name.' '.$tariff($serviceID)->description.' successfuly '.$action;
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
    public function connectService($serviceID, $price)
    {

        $iptv_user = IptvUser::where('uid', '=', $this->uid)
            ->where('provider','=','megogo')
            ->get();

        if (count($iptv_user) == 0){
            throw new NotAuthenticate();
        }
        $tariff = new GetTariffByServiceId();
        $payment = new MakePay();

        if (!$payment($tariff($serviceID), $price)){
            throw new NotEnoughMoney();
        }

        $changeStatus = Http::get("https://billing.megogo.net/partners/".$this->partner_key."/subscription/subscribe?userId=$this->inner_contract&serviceId=$serviceID");

        if ($changeStatus['successful']){

            $iptv_user = IptvUser::findOrFail($iptv_user[0]['id']);
            $iptv_user->plan_id = $tariff($serviceID)->id;
            $iptv_user->save();

            return  [
                        'message'=>'tariff '.$tariff($serviceID)->name.' '.$tariff($serviceID)->description.' successfuly connected ',
                        'name' => $tariff($serviceID)->name,
                        'serviceID' => $serviceID,
                        'price' => $tariff($serviceID)->price,
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
    public function disConnectService($serviceID)
    {
        DB::beginTransaction();

        $calculate = new CostCalculation();
        $refund = $calculate($serviceID);

        $transaction = Pay::findOrFail($refund['id']);
        $transaction->size_pay = -1 * abs($refund['actualPayment']);
        $transaction->descript .= '( за пользование в течение '.$refund['daysAmount'].' дней)';
        if($transaction->save()){
            $iptv_user = IptvUser::where('uid', '=', Auth::user()->uid)->get('id');
            $changeProlong = IptvUser::findOrFail($iptv_user[0]['id']);
            $changeProlong->prolong_time -=1;
            $changeProlong->plan_id = null;
            $changeProlong->save();
            $changeStatus = Http::get("https://billing.megogo.net/partners/".$this->partner_key."/subscription/unsubscribe?userId=$this->inner_contract&serviceId=$serviceID");

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
}
