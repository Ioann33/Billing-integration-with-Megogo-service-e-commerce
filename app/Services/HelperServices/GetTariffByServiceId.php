<?php

namespace App\Services\HelperServices;

use App\Models\IptvPlan;

class GetTariffByServiceId
{
    public function __invoke($serviceId)
    {
        $tariff = IptvPlan::where('serviceID', '=', $serviceId)->get();
        return $tariff[0];
    }
}
