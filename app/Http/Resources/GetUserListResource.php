<?php

namespace App\Http\Resources;

use App\Action\GetEntityUserIdAction;
use App\Action\GetUserAccountsAction;
use App\Action\GetUserAddressAction;
use App\Action\GetUserBalanceAction;
use App\Action\GetUserCreditAction;
use App\Action\GetUserDateAction;
use App\Action\GetUserEmailAction;
use App\Action\GetUserIpMacAction;
use App\Action\GetUserPasswordAction;
use App\Action\GetUserPhoneAction;
use App\Action\GetUserServiceAction;
use App\Action\GetUserStatusAction;
use App\Action\GetUserTagAction;
use App\Models\Pay;
use App\Models\StreetModel;
use App\Models\User;
use App\Models\UserTagModel;
use Illuminate\Http\Resources\Json\JsonResource;

class GetUserListResource
{
    public static function response($users)
    {



        /* select * from street
         * $steet[id]="ул. Карла Маркса"
         */
        $entitys_id = GetEntityUserIdAction::handle();

        $street = StreetModel::query()
            ->select(['id','prefix', 'name'])
            ->get();

        $resArr = [];
        $time = strtotime('first day of next month 00:00');
        $first_day_next_month = date('Y-m-d H:i:s', $time);
        foreach ($users as $user){
            if (in_array($user->id_user, $entitys_id)){
                $flag = 1;
            }else{
                $flag = 0;
            }
            $tag_array = GetUserTagAction::handle($user->id_user);
            $balance = GetUserBalanceAction::handle($user->id_user);
            $credit = GetUserCreditAction::handle($user->id_user);
            $user_status = GetUserStatusAction::handle($user->id_user);
            $date_activity = GetUserDateAction::handle($user->id_user);
            $address = GetUserAddressAction::handle($user, $street);
            $phones = GetUserPhoneAction::handle($user);
            $email = GetUserEmailAction::handle($user);
            $ip_mac = GetUserIpMacAction::handle($user);
            $user_accounts = GetUserAccountsAction::handle($user);
            $user_pass = GetUserPasswordAction::handle($user);
            $user_services = GetUserServiceAction::handle($user->id_user);

            if (isset($date_activity['register'])){
                $date_create = $date_activity['register'];
            }else{
                $date_create = '';
            }

            if (isset($date_activity['active'])){
                $date_connect = $date_activity['active'];
            }else{
                $date_connect = '';
            }

            $resArr[$user->id_user] = [
                'id' => $user->id_user,
                'login' => $user->nic_name,
                'full_name' => trim($user->first_n).' '.trim($user->last_n).' '.trim($user->otch_n),
                'flag_corporate' => $flag,
                'tariff' => [
                    'current' =>  [[
                        'id' => $user->code,
                        'date_finish' => date('Y-m-t 23:59'),
                    ]],
                    'new' => [
                        [
                            'id' => $user->next_code,
                            'date_start' => $first_day_next_month,
                        ]
                    ]
                ],
                'agreement' => [
                    [
                        'number' => $user->dep.'.'.$user->uid,
                        'date' => $user->porting
                    ]
                ],
                'account_number' => $user->dep.'.'.$user->uid,
                'group' => $tag_array,
                'comment' => '',
                'balance' => $balance,
                'credit' => $credit,
                'state_id' => $user_status,
                'date_create'=> $date_create,
                'date_connect' => $date_connect,
                'date_activity' => '',
                'traffic' => [
                    'month' => [
                        'up' => 0,
                        'down' => 0,
                    ]
                ],
                'discount' => '',
                'address' => [
                    [
                        'full_name' => $address,
                        'type' => 'connect',
                        'house_id' => $user->id_user,
                        'apartment' => [
                            'number' => $user->flat
                    ]
                ]
                ],
                'entrance' => '',
                'floor' => $user->floor,
                'phone' => $phones,
                'email' => $email,
                'ip_mac' => $ip_mac,
                'additional_data' => [

                ],
                'account' => $user_accounts,
                'tag'=> $tag_array,
                'service' => $user_services,
                'mark' => [
                    []
                ],
                'password' => $user_pass,
            ];
        }

        return response()->json($resArr);
    }
}
