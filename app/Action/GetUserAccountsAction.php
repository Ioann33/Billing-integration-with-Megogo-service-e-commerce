<?php

namespace App\Action;

use App\Models\User;

class GetUserAccountsAction
{
    public static function handle($user){
        if ($user->did != 0 ){
            $resArr = [];

            $accounts = User::query()
                ->select()
                ->where('did', '=', $user->did)
                ->where('id_user', '!=', $user->id_user)
                ->get();

            foreach ($accounts as $account) {
                $status = GetUserStatusAction::handle($account->id_user);
                $pass = GetUserPasswordAction::handle($account);
                $ip = str_replace('.','', $account->ip_addr);
                $mac = str_replace(':','', $account->mac_addr);
                $resArr[$account->id_user] =
                    [
                        'id' => $account->id_user,
                        'login' => $account->nic_name,
                        'ip_addr' => $ip,
                        'mac_addr' => $mac,
                        'status' => $status,
                        'pass' => $pass
                    ];
            }
            return $resArr;
        }else{
            return [];
        }
    }
}
