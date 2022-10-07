<?php

namespace App\Services\HelperServices;

use App\Action\GetUserBalanceAction;
use App\Models\Pay;
use Illuminate\Support\Facades\Auth;

class MakePay
{
    public function __invoke($tariff, $price)
    {
        $date_event = date('Y-m-d H:i:s');
        $operator = 'iptv';
        $event = 'iptv_pay';
        $user_id = Auth::user()->uid;

        $checkBalance = GetUserBalanceAction::handle($user_id);
        if ($price > $checkBalance){
            return false;
        }

        $newPay = new Pay();
        $newPay->date = $date_event;
        $newPay->id_user = $user_id;
        $newPay->code = $tariff->id;
        $newPay->size_pay = -1 * abs($price);
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
