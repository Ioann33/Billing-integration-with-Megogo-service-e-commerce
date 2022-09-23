<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GetServiceResource
{
    public static function collection($collection){
        $resArr = [];
        foreach ($collection as $item){
            $resArr[$item->id_service] =
                 [
                    'id' => $item->id_service,
                    'name' => $item->name,
                    'cost' => $item->cost,
                ]
            ;
        }
        return response()->json($resArr);
    }
}
