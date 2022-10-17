<?php

namespace App\Exceptions;
use Exception;
class NotAuthenticate extends Exception
{
    public function resMess(){
        return 'You need authentication on the service';
    }
}
