<?php

namespace App\Contracts;

interface DigitalTV
{
    public function getUserInfo();

    public function connectService($serviceID);

    public function changeTariffStatus($serviceID, $action);

    public function getTariffPlans();

    public function sendRequest();

    public function createUser($password);
}
