<?php

namespace App\Contracts;

interface DigitalTV
{
    public function getUserInfo();

    public function connectService($serviceID);

    public function changeTariffStatus($serviceID, $action);

    public function getTariffPlans();

    public function disConnectService($serviceID);

    public function calculateCost($price);

    public function createUser($password);

    public function changeCredentials($email, $password);
}
