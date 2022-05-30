<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Priveleges extends Model
{
    use HasFactory;

    protected $table = 'priveleges';
    public $timestamps = false;

    protected $fillable = [
        'id_user',
        'enable_internet'
    ];

}
