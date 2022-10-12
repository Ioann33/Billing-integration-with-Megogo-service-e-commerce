<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AddrCity extends Model
{
    protected $fillable = [
        'name',
    ];
    public $timestamps = false;
}
