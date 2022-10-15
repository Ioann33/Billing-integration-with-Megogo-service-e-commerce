<?php

namespace App\Services\HelperServices;

use App\Models\Pay;
use Illuminate\Support\Facades\Auth;

class MakePay
{

    private $restAmount;

    public function __construct()
    {
        $this->restAmount = Pay::where('id_user', Auth::user()->uid)
            ->where('date', '>=', date("Y-m-01 00:00:00"))
            ->sum('size_pay');
    }

    public function checkBalance($price){

        if ($price > $this->restAmount){
            return false;
        }
        return true;
    }
    public function payment($tariff, $price)
    {
        $date_event = date('Y-m-d H:i:s');
        $operator = 'iptv';
        $event = 'iptv_pay';
        $user_id = Auth::user()->uid;

        if ($price > $this->restAmount){
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
