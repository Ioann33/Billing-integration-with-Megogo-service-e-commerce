<?php

namespace App\Http\Resources;


use App\Models\TagModel;

class GetAllTagsResource
{
    public static function collection($allTags){
        $resArr = [];
            foreach ($allTags as $tag){
                $resArr[$tag->tag_id] = [
                    'id' => $tag->tag_id,
                    'name' => $tag->name,
                ];
            }
            return response()->json($resArr);
    }
}
