<?php

namespace App\Http\Controllers;

use App\Contracts\DigitalTV;
use Illuminate\Http\Request;

class DigitalTvController extends Controller
{
    public function getUserInfo(DigitalTV $digitalTV){
        $info = $digitalTV->getUserInfo();
        return response()->json(['data' => $info]);
    }

    public function makePay(DigitalTV $digitalTV){
        return $digitalTV->makePay();
    }

    public function getTariffPlans(DigitalTV $digitalTV){
        $iptv_plan = $digitalTV->getTariffPlans();
        return response()->json(['data' => $iptv_plan]);
    }
}
