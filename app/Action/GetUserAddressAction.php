<?php

namespace App\Action;

use App\Models\StreetModel;

class GetUserAddressAction
{
    public static function handle($user, $street){

//        $street = StreetModel::query()
//            ->select(['prefix', 'name'])
//            ->where('id', '=', $user->street_id)
//            ->get();
        $streetInfo = [];
        if (isset($user->street_id)){
            foreach ($street as $item){
                if ($item->id === $user->street_id){
                    $streetInfo = $item;
                    break;
                }
            }
        }else{
            return '';
        }

        if ($streetInfo['prefix'] != ''){
            return $streetInfo['prefix'].'.'.$streetInfo['name'].', '.$user->house.$user->block;
        }else {
            return $streetInfo['name'].', '.$user->house;
        }

    }
}
