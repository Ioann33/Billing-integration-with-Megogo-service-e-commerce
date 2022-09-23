<?php

namespace App\Http\Controllers;

use App\Http\Resources\GetServiceResource;
use App\Http\Resources\GetTariffListResource;
use App\Models\PriceModel;
use App\Models\ServiceModel;
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

    public function getServicesList(){
        $services = ServiceModel::query()->select()->where('id_service', '>', 1)->get();
        return GetServiceResource::collection($services);
    }
}
