<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AddrHouse extends Model
{
    protected $fillable = [
        'number',
        'black',
        'prefix',
        'street_id',
        'district_id',
        'area_id',
        'city_id'
    ];
    public $timestamps = false;
}
