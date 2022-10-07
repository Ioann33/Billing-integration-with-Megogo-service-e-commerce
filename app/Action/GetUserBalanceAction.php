<?php

namespace App\Action;

use App\Models\Pay;

class GetUserBalanceAction
{
    public static function handle($user_id){
        return Pay::where('id_user', $user_id)
            ->where('date', '>=', date("Y-m-01 00:00:00"))
            ->sum('size_pay');
    }
}
