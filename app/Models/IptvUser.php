<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IptvUser extends Model
{
    protected $table = 'iptv_users';
    public $timestamps = false;
    protected $fillable = [
        'iptv_contract',
        'uid',
        'login',
        'provider',
        'inner_contract',
        'plan_id',
        'prolong',
        'prolong_time',
    ];

    public function plan(){
        return $this->belongsTo(IptvPlan::class, 'plan_id');
    }
}
