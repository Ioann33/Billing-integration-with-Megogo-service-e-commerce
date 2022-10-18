<?php

namespace App\Services\HelperServices;

use App\Models\Pay;
use Illuminate\Support\Facades\Auth;

class CostCalculation
{

    public function initialCost($price)
    {

        $time = strtotime(date('Y-m-t 23:59'));
        $diff = $time - time();
        $amountDays =  round($diff / 86400);
        $costPerDay = $price/date('t');

        return number_format($amountDays * $costPerDay,2,'.','');
    }

    public function finalCost($service)
    {

        $lastPayment = Pay::where('id_user', '=', Auth::user()->uid)->where('item', '=', 103011)->orderBy('date','desc')->limit(1)->first();

        $statUsing = date($lastPayment->date);
        $during = time() - strtotime($statUsing);
        $daysAmount =  round($during / 86400);


        $costPerMonth = $service->price;
        $costPerDay = $costPerMonth/date('t');
        $actualPayment = number_format($daysAmount * $costPerDay,2,'.','');
        return [
            'daysAmount'=>$daysAmount,
            'actualPayment' => $actualPayment,
            'previousPrice' => $lastPayment->size_pay,
            'id' => $lastPayment->id,
        ];
    }
}
