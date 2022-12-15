<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class House extends Model
{
    protected $table = 'houses';
    public $timestamps = false;

    protected $fillable = [
        'address_id',
        'number',
        'block',
    ];
}
