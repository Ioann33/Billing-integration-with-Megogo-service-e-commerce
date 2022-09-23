<?php

namespace App\Http\Controllers;

use App\Http\Resources\GetTariffListResource;
use App\Models\PriceModel;
use Illuminate\Http\Request;

class UsmBillingController extends Controller
{
    public function getSystemInformation(){
        return response()->json([
            'date' => date("Y-m-d H:i:s"),
            'os'   => php_uname('s'),
            'billing' => [
                'name' => 'Nyana',
                'version' => 'v2'
            ]
        ]);
    }
    public function getTariffList(){
        $tariff = PriceModel::all();
        return GetTariffListResource::collection($tariff);
    }
}
