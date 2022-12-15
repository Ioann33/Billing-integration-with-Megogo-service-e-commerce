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

$item = (integer)$this->item;
if($item>101000 && $item<101099){
    $type = 'fresh_account';
    $category = 'Пополнение счета';
}
elseif($item == '103010'){
    $type = 'tariff';
    $category = $this->name;

}elseif($item=='103020'){
    $type = 'real_ip';
    $category = $this->name;

}elseif($item=='103050'){
    $type = 'internet_8888';
    $category = "Начисление за Интернет за ". date("Y-m", strtotime($this->date));

}elseif($item=='901010'){
    $type = 'balance_9999';
    $category = "Баланс на начало месяца";

}elseif($item=='103012'){
    $type = 'iptv';
    $category = "Цифровое ТВ";

}else{
    $type = 'paid_service';
    $category = "категория ". $item;
}

        return [
                    'date' => $this->date,
                    'size_pay' => $this->size_pay,
                    'descript' => $this->descript,
                    //'category' => 'Абонентская плата: Интернет'.$this->item,
                    'category' => $category,
                    'type' => $type,
                    'billing_id' => $this->id,
                    'bank_id' => 2423
            ];
    }
}
