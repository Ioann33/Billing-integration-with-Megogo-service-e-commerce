<?php

namespace App\Services\HelperServices;

use App\Exceptions\ChangeCredentialsProblem;
use App\Models\IptvUser;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class CreateMegogoUser
{
    /**
     * @throws ChangeCredentialsProblem
     */
    public function __invoke($isdn, $password)
    {
        $parent_key = IptvConfig::getPartnerKey('megogo');
        DB::beginTransaction();

        $response = Http::get("https://billing.megogo.net/partners/$parent_key/user/create?identifier=$isdn");
        $create = json_decode($response->body());
        $email = $isdn.'@homenet.online';
        $credentials =
            [
                'isdn' => $isdn,
                'email' => $email,
                'password' => $password,
            ];

        $setPassword = Http::withBody(json_encode($credentials),'application/json')->post("https://billing.megogo.net/partners/$parent_key/user/changeCredentials");
        if (isset($setPassword['result'])){
            throw new ChangeCredentialsProblem();
        }
        $iptv_user = new IptvUser();
        $iptv_user->iptv_contract = $create->uid;
        $iptv_user->uid = Auth::user()->uid;
        $iptv_user->login = $email;
        $iptv_user->provider = 'megogo';
        $iptv_user->inner_contract = $isdn;
        $iptv_user->prolong_time = 3;
        $iptv_user->save();

        DB::commit();
        return $iptv_user->id;
    }
}
