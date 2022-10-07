<?php

namespace App\Action;

class GetUserPhoneAction
{
    public static function handle($user){
        $numbers = [];
//        $flag = 0;
        if (!empty($user->tel_h)){

            $numbers[] = [
                'number' => '+'.$user->tel_h,
                'flag_main' => 1
            ];

        }

        if (!empty($user->tel_w)){

            $numbers[] = [
                'number' => '+'.$user->tel_w,
                'flag_main' => 1
            ];

        }

        if (!empty($user->tel_m)){

//            if ($flag == 0 ){
//                $numbers[] = [
//                    'number' => '+'.$user->tel_m,
//                    'flag_main' => 1
//                ];
//                $flag++;
//            }else{
//
//            }
            $numbers[] = [
                'number' => '+'.$user->tel_m,
                'flag_main' => 1
            ];
        }
        return $numbers;
    }
}
