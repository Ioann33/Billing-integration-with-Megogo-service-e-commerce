<?php

namespace App\Http\Resources;

use App\Models\Pay;
use Illuminate\Http\Resources\Json\JsonResource;

class UserInfoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        //return parent::toArray($request);

        $balance = Pay::where('id_user',$this->id_user)
            ->where('date', '>=', date("Y-m-01 00:00:00"))
            ->sum('size_pay');

        return [
            'id_user' => $this->id_user,
            'dogovor' => $this->dep.".".$this->id_user,
            'history_pay' => HistoryPayResource::collection($this->history_pay),
            'balance' => number_format($balance,2,'.',' ')
        ];
    }
}
