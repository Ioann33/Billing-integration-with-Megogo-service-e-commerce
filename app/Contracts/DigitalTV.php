<?php

namespace App\Contracts;

interface DigitalTV
{
    public function getUserInfo();

    public function connectService($service_id);

    public function changeTariffStatus($service_id, $action);

    public function getTariffPlans();

    public function disConnectService($service_id);

    public function calculateCost($service_id = null, $service = null);

    public function createUser($password);

    public function changeCredentials($email, $password);

    public function getServiceById($id);
}
