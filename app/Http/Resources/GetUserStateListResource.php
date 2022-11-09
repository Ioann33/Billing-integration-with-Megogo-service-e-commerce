<?php

namespace App\Http\Resources;

class GetUserStateListResource
{
    public static function response(){
        $resArr = [
            0 => [
                'id' => 0,
                'name' => 'Включен',
                'functional' => 'work'
            ],
            1 => [
                'id' => 1,
                'name' => 'Недостаточно средств',
                'functional' => 'nomoney'
            ],
            2 => [
                'id' => 2,
                'name' => 'Консервация линии',
                'functional' => 'pause'
            ],
            3 => [
                'id' => 3,
                'name' => 'Абонент без включения',
                'functional' => 'new'
            ],
            4 => [
                'id' => 4,
                'name' => 'Отключен',
                'functional' => 'stop'
            ],
        ];

        return response()->json($resArr);
    }
}
