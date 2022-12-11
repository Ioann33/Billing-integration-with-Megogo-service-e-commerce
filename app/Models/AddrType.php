<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AddrType extends Model
{
    protected $table = 'addr_types';
    public $timestamps = false;
    protected $fillable = [
        'name',
        'prefix',
    ];
}
