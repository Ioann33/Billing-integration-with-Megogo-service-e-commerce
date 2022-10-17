<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    protected $table = 'log';
    public $timestamps = false;
    protected $primaryKey = false;
    public $incrementing = false;
    protected $fillable = [
        'date',
        'operator',
        'id_user',
        'event',
        'log',
    ];
}
