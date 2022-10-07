<?php

namespace App\Action;

class GetUserPasswordAction
{
    public static function handle($user){
        if (!empty($user->pass)){
            $pass = $user->pass;
        }else{
            $pass = $user->password;
        }
        return $pass;
    }
}
