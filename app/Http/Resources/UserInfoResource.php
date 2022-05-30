<?php

namespace App\Http\Resources;

use App\Models\Pay;
use App\Models\Priveleges;
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

        $priveleges = Priveleges::where('id_user',$this->id_user)->first();

        return [
            'id_user' => $this->id_user,
            'dogovor' => $this->dep.".".$this->id_user,
            'enable_internet' => $priveleges->enable_internet,
            'balance' => number_format($balance,2,'.',' '),
            'history_pay' => HistoryPayResource::collection($this->history_pay),
        ];
    }
}
