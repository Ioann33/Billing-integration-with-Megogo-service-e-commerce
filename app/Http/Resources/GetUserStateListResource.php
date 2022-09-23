<?php

namespace App\Http\Resources;

class GetUserStateListResource
{
    public static function responce(){
        $resArr = [
            1 => [
                'id' => 1,
                'name' => 'Включен',
                'functional' => 'work'
            ],
            2 => [
                'id' => 2,
                'name' => 'Недостаточно средств',
                'functional' => 'nomoney'
            ],
            3 => [
                'id' => 3,
                'name' => 'Консервация линии',
                'functional' => 'pause'
            ],
            4 => [
                'id' => 4,
                'name' => 'Абонент без включения',
                'functional' => 'new'
            ],
            5 => [
                'id' => 5,
                'name' => 'Отключен',
                'functional' => 'stop'
            ],
        ];

        return response()->json($resArr);
    }
}
