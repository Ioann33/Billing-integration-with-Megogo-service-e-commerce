<?php

namespace App\Services\Ipty;

use App\Contracts\DigitalTV;

class Trinity implements DigitalTV
{

    public function getUserInfo()
    {
        return 'Trinity getUserInfo';
    }

    public function connectService($serviceID)
    {
        // TODO: Implement connectService() method.
    }

    public function changeTariffStatus($serviceID, $action)
    {
        return 'Trinity connectService';
    }

    public function getTariffPlans()
    {
        return 'Trinity getTariffPlans';
    }

    public function sendRequest()
    {
        return 'Trinity sendRequest';
    }


    public function createUser($password)
    {
        // TODO: Implement createUser() method.
    }
}
