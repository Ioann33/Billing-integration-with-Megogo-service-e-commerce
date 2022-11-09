<?php

namespace App\Http\Resources;


use App\Models\User;

class GetHouseListResource
{
    public static function collection($houses){

        $resArr = [];

        foreach ($houses as $house){

            $resArr[$house->id_user] = [
                'id' => $house->id_user,
                'street_id' => $house->street_id,
                'city_id' => 1,
                'number' => $house->house
            ];
        }
        return response()->json($resArr);
    }
}
