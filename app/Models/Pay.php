<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pay extends Model
{
    use HasFactory;
    protected $table = 'pay';

    protected $fillable = [
        'date',
        'id_user',
        'code',
        'size_pay',
        'descript',
        'operator',
        'item',
        'note'
    ];


}
