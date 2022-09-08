<?php

namespace App\Services\HelperServices;

use App\Models\Pay;
use Illuminate\Support\Facades\Auth;

class MakePay
{
    public function __invoke($tariff)
    {
        $date_event = date('Y-m-d H:i:s');
        $operator = 'iptv';
        $event = 'iptv_pay';
        $user_id = Auth::user()->uid;

        $checkBalance = Pay::where('id_user', $user_id)
            ->where('date', '>=', date("Y-m-01 00:00:00"))
            ->sum('size_pay');
        if ($tariff->price > $checkBalance){
            return false;
        }

        $newPay = new Pay();
        $newPay->date = $date_event;
        $newPay->id_user = $user_id;
        $newPay->code = $tariff->id;
        $newPay->size_pay = -1 * abs($tariff->price);
        $newPay->descript = $tariff->name.' '.$tariff->description;
        $newPay->operator = $operator;
        $newPay->item = 103011;
        if ($newPay->save()){
            // add log event
            return true;
        }else{
            return false;
        }
    }
}
