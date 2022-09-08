<?php

namespace App\Services\Ipty;

use App\Contracts\DigitalTV;
use App\Exceptions\ChangeCredentialsProblem;
use App\Exceptions\ChangeTariffStatusProblem;
use App\Exceptions\NotAuthenticate;
use App\Exceptions\NotEnoughMoney;
use App\Models\IptvPlan;
use App\Models\IptvUser;
use App\Services\HelperServices\CreateMegogoUser;
use App\Services\HelperServices\GetTariffByServiceId;
use App\Services\HelperServices\MakePay;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class Megogo implements DigitalTV
{
    protected $inner_contract;
    protected $uid;

    public function __construct()
    {
        $this->inner_contract = Auth::user()->dep.'.'.Auth::user()->uid;
        $this->uid = Auth::user()->uid;
    }

    public function getUserInfo()
    {

        $iptv_user = IptvUser::where('uid', '=', $this->uid)->get();

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
        $changeStatus = Http::get("https://billing.megogo.net/partners/homenetonlineprod/subscription/$action?userId=$this->inner_contract&serviceId=$serviceID");

        $iptv_user = IptvUser::where('uid', '=', $this->uid)->get();
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
    public function connectService($serviceID)
    {

        $iptv_user = IptvUser::where('uid', '=', $this->uid)->get();

        if (count($iptv_user) == 0){
            throw new NotAuthenticate();
        }
        $tariff = new GetTariffByServiceId();
        $payment = new MakePay();

        if (!$payment($tariff($serviceID))){
            throw new NotEnoughMoney();
        }

        $changeStatus = Http::get("https://billing.megogo.net/partners/homenetonlineprod/subscription/subscribe?userId=$this->inner_contract&serviceId=$serviceID");

        if ($changeStatus['successful']){

            $iptv_user = IptvUser::findOrFail($iptv_user[0]['id']);
            $iptv_user->plan_id = $tariff($serviceID)->id;
            $iptv_user->save();

            return  [
                        'message'=>'tariff '.$tariff($serviceID)->name.' '.$tariff($serviceID)->description.' successfuly connected ',
                        'name' => $tariff($serviceID)->name,
                        'serviceID' => $serviceID,
                        'price' => $tariff($serviceID)->price,
                    ];
        }else{
            throw new ChangeTariffStatusProblem();
        }
    }

    public function getTariffPlans()
    {
        return $iptv_plans = IptvPlan::where('provider', '=', 'megogo')->where('enable', '=', 1)->get();
    }

    public function sendRequest()
    {
        return 'Mogogo sendRequest';
    }


    /**
     * @throws \App\Exceptions\ChangeCredentialsProblem
     */
    public function createUser($password)
    {
        $newIptvUser = new CreateMegogoUser();

        return $newIptvUser($this->inner_contract, $password);
    }
}
