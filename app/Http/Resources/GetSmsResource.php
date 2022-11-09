<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GetSmsResource
{
    public static function collection($sms){
        $resArr = [];

//        foreach ($sms as $item){
//            $resArr[$item->id] = [
//
//                'id' => $item->id,
//                'user_id' => $item->id_user,
//                'msg_date' => $item->date_send,
//                'subject' => '',
//                'text' => $item->message
//
//            ];
//        }
        return response()->json($resArr);
    }
}
