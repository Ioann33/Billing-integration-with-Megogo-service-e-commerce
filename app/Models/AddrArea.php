<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AddrArea extends Model
{
    protected $fillable = [
        'name',
        'city_id'
    ];
    public $timestamps = false;
}
