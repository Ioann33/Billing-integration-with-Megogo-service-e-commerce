<?php

namespace App\Http\Resources;


 use App\Models\PriceZoneModel;

 class GetTariffListResource
{

    public static function collection($collection)
    {
        $resArr = [];
        foreach ($collection as $value){
            if ($value->speed_unlimit == 1){
                $up = 0;
                $down = 0;
            }else{
                $price_zone = PriceZoneModel::query()
                    ->select(['limit_speed_in','limit_speed_out'])
                    ->where('code', '=', $value->code)
                    ->where('zid', '=', 1)
                    ->get();
                if (count($price_zone)>0){
                    $up = $price_zone[0]['limit_speed_in'];
                    $down = $price_zone[0]['limit_speed_out'];
                }else{
                    $up = null;
                    $down = null;
                }

            }
            $resArr[$value->code] = [
                'id' => $value->code,
                'name' => $value->name,
                'payment' => $value->ap,
                'payment_interval' => 30,
                'speed' => [
                    'up' => $up,
                    'down' => $down
                ],
                'traffic' => -1,
                'service_type' => 0
            ];
        }
        return response()->json($resArr);
    }
}
