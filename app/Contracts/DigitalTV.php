<?php

namespace App\Contracts;

interface DigitalTV
{
    public function getUserInfo();

    public function connectService($serviceID, $price);

    public function changeTariffStatus($serviceID, $action);

    public function getTariffPlans();

    public function disConnectService($serviceID, $double);

    public function calculateCost($price);

    public function createUser($password);
}
