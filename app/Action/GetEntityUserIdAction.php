<?php

namespace App\Action;

use App\Models\UserTagModel;

class GetEntityUserIdAction
{
     public static function handle(){
        $entitys_id = UserTagModel::query()->select('uid')->where('tag_id', '=', 12)->get();
        $filtered_entitys_id = [];
        foreach ($entitys_id as $item){
            $filtered_entitys_id[] = $item->uid;
        }
        return $filtered_entitys_id;
    }
}
