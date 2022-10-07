<?php

namespace App\Http\Resources;


class GetCityResource
{
    public static function collection($cites){
        $resArr[1] = [
            'id' => 1,
            'name' => 'г. Днепр',
        ];
        foreach ($cites as $city){
            $resArr[$city->tag_id] = [
                'id' => $city->tag_id,
                'name' => $city->name,
            ];

        }
        return response()->json($resArr);
    }
}
