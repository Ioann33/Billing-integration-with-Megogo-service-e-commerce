<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AddrDistrict extends Model
{
    protected $fillable = [
        'name',
        'area_id',
        'city_id'
    ];
    public $timestamps = false;
}
