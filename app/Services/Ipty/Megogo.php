<?php

namespace App\Services\Ipty;

use App\Contracts\DigitalTV;
use App\Models\IptvPlan;
use App\Models\IptvUser;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class Megogo implements DigitalTV
{

    public function getUserInfo()
    {
        $uid =  Auth::user()->uid.'.'.Auth::user()->dep;
        $response = Http::get("https://billing.megogo.net/partners/homenetonlineprod/user/subscriptions?identifier=$uid");
        $iptv_login = IptvUser::where('uid', '=', $uid)->get('login');
        $info =  json_decode($response->body(), true);
        $info['login'] = $iptv_login[0]['login'];
        return $info;
    }

    public function connectService()
    {
        return 'Mogogo connectService';
    }

    public function makePay()
    {
        return 'Mogogo makePay';
    }

    public function getTariffPlans()
    {
        return $iptv_plans = IptvPlan::where('provider', '=', 'megogo')->get();
    }

    public function sendRequest()
    {
        return 'Mogogo sendRequest';
    }
}
