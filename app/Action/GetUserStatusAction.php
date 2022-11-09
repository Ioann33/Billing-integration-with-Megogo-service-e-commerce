<?php

namespace App\Action;

use App\Models\Log;
use App\Models\User;

class GetUserStatusAction
{
    public static function handle($user_id){
        $user_registered = Log::query()
            ->select()
            ->where('id_user', '=', $user_id)
            ->where('event', '=', 'user_registered')
            ->get();

        $user_activate = Log::query()
            ->select()
            ->where('id_user', '=', $user_id)
            ->where('event', '=', 'user_activate')
            ->get();

        if (count($user_activate)>0 && count($user_registered)>0){

            $stop_code = User::query()
                ->select()
                ->where(function($query) {
                    $query->where('code', '=', 122)
                        ->orWhere('code', '=', 120);
                        })
                ->where('id_user', '=', $user_id)
                ->get();

            $paused_code = User::query()
                ->select()
                ->where('code', '=', 123)
                ->where('id_user', '=', $user_id)
                ->get();

            $user_balance = GetUserBalanceAction::handle($user_id);
            $user_credit = GetUserCreditAction::handle($user_id);

            if (count($stop_code)>0){
                return 4;
            }else if (count($paused_code)>0){
                return 2;
            }else if ($user_balance<$user_credit){
                return 1;
            }else{
                return 0;
            }

        }else{
            return 3;
        }
    }
}
