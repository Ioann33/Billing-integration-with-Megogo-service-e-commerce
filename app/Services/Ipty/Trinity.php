<?php

namespace App\Services\Ipty;

use App\Contracts\DigitalTV;

class Trinity implements DigitalTV
{

    public function getUserInfo()
    {
        return 'Trinity getUserInfo';
    }

    public function connectService($serviceID, $price)
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

    public function calculateCost($price)
    {
        return 'Trinity sendRequest';
    }


    public function createUser($password)
    {
        // TODO: Implement createUser() method.
    }

    public function disConnectService($serviceID)
    {
        // TODO: Implement disConnectService() method.
    }
}
