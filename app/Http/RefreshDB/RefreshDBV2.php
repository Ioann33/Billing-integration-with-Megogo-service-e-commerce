<?php

namespace App\Http\RefreshDB;

use App\Models\AddrArea;
use App\Models\Address;
use App\Models\AddrHouse;
use App\Models\House;
use App\Models\StreetModel;
use App\Models\TagModel;
use App\Models\User;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class RefreshDBV2
{

    public function createAddress($name,  $parent_id = null , $type_id = null)
    {
        $check_address = Address::query()
            ->select()
            ->where('name' , '=', $name)
            ->where('parent_id', '=', $parent_id)
            ->where('type_id', '=', $type_id)
            ->get();
        if (count($check_address) == 0){
            $new_address = new Address();
            $new_address->name = $name;
            $new_address->parent_id = $parent_id;
            $new_address->type_id = $type_id;
            $new_address->save();
            $address_id = $new_address->id;
            echo " адрес создан - $address_id \n";
        }else{
            $address_id = $check_address[0]['id'];
            echo " адрес найден - $address_id \n";
        }
        return $address_id;
    }

    public function createHouse($address_id, $number, $block = null){
        $check_house = House::query()
            ->select()
            ->where('address_id' , '=', $address_id)
            ->where('number', '=', $number)
            ->where('block', '=', $block)
            ->get();

        if (count($check_house) == 0){
            $new_house = new House();
            $new_house->address_id = $address_id;
            $new_house->number = $number;
            $new_house->block = $block;
            $new_house->save();
            $house_id = $new_house->id;
            echo " дом создан - $house_id \n";
        }else{
            $house_id = $check_house[0]['id'];
            echo " дом найден - $house_id \n";
        }

        return $house_id;
    }


    public function handle(){
        $accordance = Config::get('accordance_table.accord');
        $users = User::query()
            ->select()
            ->where('house_id', '=', null)
            ->where('code', '!=', 132)
               ->limit(1000)
            ->get();



        foreach ($users as $user) {
            echo "user id: " . $user->id_user;


            $user_tags = DB::select('select tag_id from users_tag where uid= :id and tag_id in (select tag_id from tags where type=3 )', ['id' => $user->id_user]);
            if (count($user_tags) == 0) {
                echo "\n\tне имеет тега с районом\n";
                echo "____________\n";
                continue;
            }


            $addr_tag = [];

            if (count($user_tags) > 1) {
                echo "у пользователя " . count($user_tags) . " локационных тэга \n";
                echo "____________\n";
                continue;
            }


            if (isset($accordance[$user_tags[0]->tag_id])) {

                $addr_tag = [
                    $user_tags[0]->tag_id,
                    $accordance[$user_tags[0]->tag_id]
                ];
            } else {
                $addr_tag = [];
            }

            if (count($addr_tag)>0){

                echo "\n\t работа по улице: ";
                $old_street = StreetModel::find($user->street_id);
                if (!$old_street) {
                    echo "\t street_id($user->street_id) не найдена в исходной базе\n";
                    continue;
                }

                if ($old_street->prefix == 'пр' || $old_street->prefix == 'пр.'){
                    $type = 6;
                }elseif ($old_street->prefix == 'пл' || $old_street->prefix == 'пл.'){
                    $type = 10;
                }elseif ($old_street->prefix == 'Туп.' || $old_street->prefix == 'туп' || $old_street->prefix == 'тупик'){
                    $type = 9;
                }elseif ($old_street->prefix == 'бул'){
                    $type = 7;
                }elseif ($old_street->prefix == 'пер' || $old_street->prefix == 'пер.'){
                    $type = 8;
                }else{
                    $type = 5;
                }

                $address = $this->createAddress($old_street->name, $addr_tag[1], $type);
                $house_id = $this->createHouse($address, $user->house, $user->block);

                if($house_id){
                    $update_user = User::findOrFail($user->id_user);
                    $update_user->house_id = $house_id;
                    $update_user->save();
                    echo "\tupdate user ".$user->id_user." \n";
                }else{
                    echo "\tsome problem with house_id \n";
                }

        }else{
            echo "\n\tне имеет тега с районом\n";
        }
        echo "____________\n";

        }

    }
}
