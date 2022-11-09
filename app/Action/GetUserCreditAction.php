<?php

namespace App\Action;

use App\Models\ConfigModel;
use App\Models\PrivilegeModel;

class GetUserCreditAction
{
    public static function handle($user_id){
        $defaultCredit = ConfigModel::query()
            ->select('value')
            ->where('name', '=', 'credit')
            ->get();
        $privilege = PrivilegeModel::query()
            ->where('id_user', '=', $user_id)
            ->select('credit')
            ->get();
        if (count($privilege)>0){
            if ($privilege[0]["credit"] != 0){
                return $privilege[0]['credit'];
            }
        }
        return $defaultCredit[0]['value'];
    }
}
