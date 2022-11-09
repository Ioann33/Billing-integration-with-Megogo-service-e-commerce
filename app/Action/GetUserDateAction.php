<?php

namespace App\Action;

use App\Models\Log;

class GetUserDateAction
{
    public static function handle($user_id){
        $resArr = [];
        $date_registered = Log::query()
            ->select('date')
            ->where('id_user', '=', $user_id)
            ->where('event', '=', 'user_registered')
            ->get();

        $date_activate = Log::query()
            ->select('date')
            ->where('id_user', '=', $user_id)
            ->where('event', '=', 'user_activate')
            ->get();

        if (count($date_registered)>0){
            $resArr['register'] = $date_registered[0]['date'];
        }else{
            $resArr['register'] = null;
        }
        if (count($date_activate)>0){
            $resArr['active'] = $date_activate[0]['date'];
        }else{
            $resArr['active'] = null;
        }
        return $resArr;
    }
}
