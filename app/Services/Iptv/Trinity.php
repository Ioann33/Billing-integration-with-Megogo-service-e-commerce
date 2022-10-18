<?php

namespace App\Services\Iptv;

use App\Contracts\DigitalTV;

class Trinity implements DigitalTV
{

    public function getUserInfo()
    {
        return 'Trinity getUserInfo';
    }

    public function connectService($service_id)
    {
        // TODO: Implement connectService() method.
    }

    public function changeTariffStatus($service_id, $action)
    {
        return 'Trinity connectService';
    }

    public function getTariffPlans()
    {
        return 'Trinity getTariffPlans';
    }

    public function calculateCost($service_id = null, $service = null)
    {
        return 'Trinity sendRequest';
    }


    public function createUser($password)
    {
        // TODO: Implement createUser() method.
    }

    public function disConnectService($service_id)
    {
        // TODO: Implement disConnectService() method.
    }

    public function changeCredentials($email, $password)
    {
        // TODO: Implement changeCredentials() method.
    }

    public function getServiceById($id)
    {
        // TODO: Implement getServiceById() method.
    }
}
