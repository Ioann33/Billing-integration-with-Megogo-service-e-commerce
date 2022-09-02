<?php

namespace App\Contracts;

interface DigitalTV
{
    public function getUserInfo();

    public function connectService();

    public function makePay();

    public function getTariffPlans();

    public function sendRequest();
}
