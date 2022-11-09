<?php

namespace App\Http\Controllers;

use App\Http\Resources\GetAllTagsResource;
use App\Http\Resources\GetCityResource;
use App\Http\Resources\GetHouseListResource;
use App\Http\Resources\GetServiceResource;
use App\Http\Resources\GetSmsResource;
use App\Http\Resources\GetStreetResource;
use App\Http\Resources\GetTariffListResource;
use App\Http\Resources\GetUserListResource;
use App\Http\Resources\GetUserStateListResource;
use App\Models\PriceModel;
use App\Models\ServiceModel;
use App\Models\SmsModel;
use App\Models\StreetModel;
use App\Models\TagModel;
use App\Models\User;
use Illuminate\Http\Request;

class UsmBillingController extends Controller
{
    public function getSystemInformation(){
        return response()->json([
            'date' => date("Y-m-d H:i:s"),
            'os'   => php_uname('s'),
            'billing' => [
                'name' => 'Nyana2',
                'version' => '10000002'
            ]
        ]);
    }
    public function getTariffList(){
        $tariff = PriceModel::all();
        return GetTariffListResource::collection($tariff);
    }

    public function getServicesList(){
        $services = ServiceModel::query()
            ->select()
            ->where('id_service', '>', 1)
            ->get();
        return GetServiceResource::collection($services);
    }

    public function getUserStateList(){
        return GetUserStateListResource::response();
    }

    public function getUserList(){
        set_time_limit(1000);


        $file = 'response.json';

        if (file_exists($file)) {
            header('Content-Description: File Transfer');
            header('Content-Type: application/json');
            header('Content-Disposition: attachment; filename="'.basename($file).'"');
            header('Expires: 0');
            header('Cache-Control: must-revalidate');
            header('Pragma: public');
            header('Content-Length: ' . filesize($file));
            readfile($file);
            exit;
        }

        exit();

        $users = User::query()
            ->select()
            ->where('id_user', '>', 40000)
//            ->where('id_user', '>', 50300)
//                 ->whereIn('id_user', array(48603,48602,48601,48591,48575,48571,48569,48567,48539,48518,48511,48533,48530,48526,48525,48524,48519,48513,48498,48496,48490,48485,48483,48472,48488,48486))
//            ->where('id_user', '<', 49800)
            ->where('code', '!=', 132)
            ->get();
        return GetUserListResource::response($users);

    }

    public function getUserTags(){
        $allTags = TagModel::all();
        return GetAllTagsResource::collection($allTags);
    }

    public function getUserMessages(){
//        $sms = SmsModel::query()
//            ->select()
//            ->where('date_send', '>', '2022-04-28 20:59:41')
//            ->get();
        $sms = [];
        return GetSmsResource::collection($sms);
    }

    public function getCityList(){
        $districts = TagModel::query()
        ->select()
        ->where('type', '=', 3)
            ->get();
        return GetCityResource::collection($districts);
    }

    public function getStreetList(){
        $streets = StreetModel::all();
        return GetStreetResource::collection($streets);
    }

    public function getHouseList(){
//        $street_houses = StreetModel::query()
//            ->select()
//            ->get();
        $user_houses = User::query()
            ->select()
//            ->whereIn('id_user', array(48603,48602,48601,48591,48575,48571,48569,48567,48539,48518,48511,48533,48530,48526,48525,48524,48519,48513,48498,48496,48490,48485,48483,48472,48488,48486))
            ->where('id_user', '>', 40000)
            ->whereIn('id_user', array(49201))
            ->where('code', '!=', 132)
            ->get();

        return GetHouseListResource::collection($user_houses);
    }
}
