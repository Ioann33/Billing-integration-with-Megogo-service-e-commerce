<?php

namespace App\Services\HelperServices;

use App\Models\ConfigModel;

class IptvConfig
{
    /**
     * @param $providerName
     * @return mixed
     */
    public static function getPartnerKey($providerName){
        $q = ConfigModel::query()->select('value')->where('name', '=', 'iptv')->first();
        $res = json_decode($q['value'],1);
        return $res[$providerName]['partner_key'];
    }
}
