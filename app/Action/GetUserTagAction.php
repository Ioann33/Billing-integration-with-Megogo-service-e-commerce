<?php

namespace App\Action;

use App\Models\UserTagModel;

class GetUserTagAction
{
    public  static function handle($id_user){

        $tag_array = [];
        $user_tags = UserTagModel::query()
            ->select('tag_id')
            ->where('uid', '=', $id_user)
            ->get();
        if (count($user_tags)>0){
            foreach ($user_tags as $tag){
                $tag_array[$tag->tag_id] = [
                    'id' => $tag->tag_id
                ];
            }
        }

        return $tag_array;
    }
}
