<?php

namespace App\Action;

use App\Models\User;

class GetUserIpMacAction
{
    public static function handle($user){
//            $ip = str_replace('.','', $user->ip_addr);
            $inet_ip = ip2long($user->ip_addr);

            $mac = str_replace(':','', $user->mac_addr);
        return [
            $inet_ip => [
                'ip' => $inet_ip,
                'mac' => $mac
            ]
            ];
//        if ($user->did != 0 ){
//            $resArr = [
//                    $user->ip_addr => [
//                        'ip' => $user->ip_addr,
//                        'mac' => $user->mac_addr
//                    ],
//            ];
//
//            $additional_address = User::query()
//                ->select(['ip_addr', 'mac_addr'])
//                ->where('did', '=', $user->did)
//                ->get();
//
//            foreach ($additional_address as $value) {
//                $resArr[$value->ip_addr] =
//                    [
//                        'ip' => $value->ip_addr,
//                        'mac' => $value->mac_addr,
//                    ];
//            }
//            return $resArr;
//        }else{
//            return [
//                $user->ip_addr => [
//                    'ip' => $user->ip_addr,
//                    'mac' => $user->mac_addr
//                ]
//            ];
//        }
    }
}
