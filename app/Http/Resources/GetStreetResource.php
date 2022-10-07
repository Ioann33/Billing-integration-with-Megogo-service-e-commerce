<?php

namespace App\Http\Resources;


class GetStreetResource
{
    public static function collection($streets)
    {
        $resArr = [];

        foreach ($streets as $street) {

            $resArr[$street->id] = [
                'id' => $street->id,
                'city_id' => 1,
                'name' => $street->name,
                'type_name' => $street->prefix,
                'full_name' => $street->prefix.' '.$street->name
            ];

        }
        return response()->json($resArr);
    }
}
