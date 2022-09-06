<?php

namespace App\Exceptions;

use Exception;

class ChangeCredentialsProblem extends Exception
{
    public function resMess(){
        return 'problem with ChangeCredentials';
    }
}
