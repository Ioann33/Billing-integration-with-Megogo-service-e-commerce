<?php

namespace App\Services\Ipty;

use App\Contracts\DigitalTV;

class Trinity implements DigitalTV
{

    public function getUserInfo()
    {
        return 'Trinity getUserInfo';
    }

    public function connectService()
    {
        return 'Trinity connectService';
    }

    public function makePay()
    {
        return 'Trinity makePay';
    }

    public function getTariffPlans()
    {
        return 'Trinity getTariffPlans';
    }

    public function sendRequest()
    {
        return 'Trinity sendRequest';
    }
}
