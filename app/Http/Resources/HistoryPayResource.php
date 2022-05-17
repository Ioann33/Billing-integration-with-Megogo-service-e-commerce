<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class HistoryPayResource extends JsonResource
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
        return [
                    'date' => $this->date,
                    'size_pay' => $this->size_pay,
                    'descript' => $this->descript,
                    'category' => 'Абонентская плата: Интернет',
                    'type' => 'tariff',
                    'billing_id' => $this->id,
                    'bank_id' => 2423
            ];
    }
}
