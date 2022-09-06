<?php

namespace App\Services\HelperServices;

use App\Models\Pay;
use Illuminate\Support\Facades\Auth;

class MakePay
{
    public function __invoke($tariff)
    {
        //TODO check user balance before pay off

        $newPay = new Pay();
        $newPay->date = date('Y-m-d H:i:s');
        $newPay->id_user = Auth::user()->uid;
        $newPay->code = 999999999;
        $newPay->size_pay = -$tariff->price;
        $newPay->descript = $tariff->name.' '.$tariff->description;
        $newPay->operator = 'billing';
        $newPay->item = 99999999;
        if ($newPay->save()){
            return true;
        }else{
            return false;
        }
    }
}
