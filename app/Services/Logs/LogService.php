<?php

namespace App\Services\Logs;

use App\Models\Log;
use Illuminate\Support\Facades\Auth;

class LogService
{
    /**
     * @param $operator
     * @param $event
     * @param $description
     * @return mixed
     */
    public function log($operator,$event, $description){
        $log = new Log();
        $log->date = date('Y-m-d H:i:s');
        $log->operator = $operator;
        $log->id_user = Auth::user()->uid;
        $log->event = $event;
        $log->log = $description;
        $log->save();
        return $log->id;
    }
}
