<?php

namespace App\Action;

class GetUserEmailAction
{
    public static function handle($user){
        if (!empty($user->email)){
            return [
                'address' => $user->email,
                'flag_main' => 1,
                'comment' => ''
            ];
        }else{
            return [
                []
            ];
        }
    }
}
