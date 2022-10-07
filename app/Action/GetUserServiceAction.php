<?php

namespace App\Action;

use App\Models\UserServiceModel;

class GetUserServiceAction
{
    public static function handle($user_id){
        $resArr = [];
        $user_services = UserServiceModel::query()
            ->select()
            ->where('id_user', '=', $user_id)
            ->get();
        $time = strtotime('first day of next month 00:00');
        $first_day_next_month = date('Y.m.d H:i:s', $time);

        foreach ($user_services as $service){
            $resArr[$service->id_service] = [
                [
                    'cost' => $service->cost,
                    'date_add' => $first_day_next_month,
                    'comment' => ''
                ]
            ];
        }
        return $resArr;
    }
}
