<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AddrStreet extends Model
{
    protected $fillable = [
        'name',
        'prefix',
        'district_id',
        'area_id',
        'city_id'
    ];
    public $timestamps = false;
}
