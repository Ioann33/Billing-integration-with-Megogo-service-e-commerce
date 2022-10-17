<?php

namespace App\Exceptions;

use Exception;

class ChangeTariffStatusProblem extends Exception
{
    public function resMess(){
        return 'problem with change tariff status';
    }
}
