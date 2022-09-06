<?php

namespace App\Exceptions;

use Exception;

class NotEnoughMoney extends Exception
{
    public function resMess(){
        return 'Not enough money on your count';
    }
}
