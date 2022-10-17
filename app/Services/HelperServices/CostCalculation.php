<?php

namespace App\Services\HelperServices;

use App\Models\Pay;
use Illuminate\Support\Facades\Auth;

class CostCalculation
{
    public function __invoke($service)
    {

        $lastPayment = Pay::where('id_user', '=', Auth::user()->uid)->where('item', '=', 103011)->orderBy('date','desc')->limit(1)->get();

        $statUsing = date($lastPayment[0]['date']);
        $during = time() - strtotime($statUsing);
        $daysAmount =  round($during / 86400);


        $costPerMonth = $service->price;
        $costPerDay = $costPerMonth/date('t');
        $actualPayment = number_format($daysAmount * $costPerDay,2,'.','');
        return [
            'daysAmount'=>$daysAmount,
            'actualPayment' => $actualPayment,
            'previousPrice' => $lastPayment[0]['size_pay'],
            'id' => $lastPayment[0]['id'],
        ];
    }
}
