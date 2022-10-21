<?php

namespace App\Http\RefreshDB;

use App\Models\AddrArea;
use App\Models\AddrDistrict;
use App\Models\AddrHouse;
use App\Models\AddrStreet;
use App\Models\StreetModel;
use App\Models\TagModel;
use App\Models\User;
use App\Models\UserTagModel;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class Refresh
{

    public function createStreet($userStreetId,  $districtId = null, $areaId = null){
        $old_street = StreetModel::find($userStreetId);
        if (!$old_street){
            return null;
        }

        $addr_street = AddrStreet::query()

            ->select()
            ->where('name', '=', $old_street->name)
            ->where('prefix', '=', $old_street->prefix);
        if ($districtId){
            $addr_street->where('district_id', '=', $districtId);
        }else if($areaId){
            $addr_street->where('area_id', '=', $areaId);
        }
        $addr_street = $addr_street->get();

        if (count($addr_street) == 0){
            $addr_street = new AddrStreet();
            $addr_street->name = $old_street->name;
            $addr_street->prefix = $old_street->prefix;
            if ($districtId){

                $addr_street->district_id = $districtId;
                $addr_street->area_id = 0;

            }else if ($areaId){

                $addr_street->district_id = 0;
                $addr_street->area_id = $areaId;

            }else{
                $addr_street->district_id = 0;
                $addr_street->area_id = 0;
            }

            $addr_street->city_id = 1;
            $addr_street->save();
            $street_id = $addr_street->id;
            echo " улица создана - $street_id \n";
        }else{
            $street_id = $addr_street[0]['id'];
            echo " улица найдена - $street_id \n";
        }
        return $street_id;
    }

    public function handle(){
        $accordance = Config::get('accordance_table.accord');
        $users = User::query()
            ->select()
            ->where('house_id', '=', null)
            ->where('code', '!=', 132)
            ->limit(1000)
            ->get();



        foreach ($users as $user){
            echo  "user id: ".$user->id_user;

            // select * from users_tag where uid=20433 and tag_id in (select tag_id from tags where type=3 )
//            $user_tags = UserTagModel::query()
//                ->select('tag_id')
//                ->where('uid', '=', $user->id_user)
//                ->get();


            $user_tags = DB::select('select tag_id from users_tag where uid= :id and tag_id in (select tag_id from tags where type=3 )', ['id' => $user->id_user]);
            if (count($user_tags) == 0){
                echo "\n\tне имеет тега с районом\n";
                echo "____________\n";
                continue;
            }


// if row_count()>1 { alarm }
            $addr_tag = [];

            if (count($user_tags)>1){
                echo "у пользователя ".count($user_tags)." локационных тэга \n";
                echo "____________\n";
                continue;
            }



            if (isset($accordance[$user_tags[0]->tag_id])) {

                $addr_tag = [
                    $user_tags[0]->tag_id,
                    $accordance[$user_tags[0]->tag_id]
                ];
            }else{
                $addr_tag = [];
            }
//            foreach ($user_tags as $user_tag) {
//
//                if (isset($accordance[$user_tag->tag_id])) {
//
//                    $addr_tag = [
//                        $user_tag->tag_id,
//                        $accordance[$user_tag->tag_id]
//                    ];
//                    break;
//                }else{
//                    $addr_tag = [];
//                }
//            }

            if (count($addr_tag)>0){
                echo "[";
                echo print_r($addr_tag, true);
                echo  "]";

                $tag_name = TagModel::query()
                    ->select()
                    ->where('tag_id', '=', $addr_tag[0])
                    ->get();


                if ($addr_tag[1] == 1){

//                     No longer in use

//                    $addr_district = AddrDistrict::query()
//                        ->select()
//                        ->where('name', '=', $tag_name[0]['name'])
//                        ->get();
//
//
//                    if (count($addr_district) == 0){
//                        $addr_district = new AddrDistrict();
//                        $addr_district->name = $tag_name[0]['name'];
//                        $addr_district->area_id = 0;
//                        $addr_district->city_id = 1;
//                        $addr_district->save();
//                        $district_id = $addr_district->id;
//                    }else{
//                        $district_id = $addr_district[0]['id'];
//                    }

                    echo "\n\t работа по улице: ";
                    $street_id = $this->createStreet($user->street_id);

                }else{
                    echo "\n\t работа по area: ";
                    $addr_area = AddrArea::query()
                        ->select()
                        ->where('name', '=', $tag_name[0]['name'])
                        ->get();
                    if (count($addr_area) == 0){
                        $addr_area = new AddrArea();
                        $addr_area->name = $tag_name[0]['name'];
                        $addr_area->city_id = 1;
                        $addr_area->save();
                        $area_id = $addr_area->id;
                        echo "area создано - $area_id \n";
                    }else{
                        $area_id = $addr_area[0]['id'];
                        echo "area найдено - $area_id \n";
                    }
                    $street_id = $this->createStreet($user->street_id, null, $area_id);

                }

                if (isset($street_id)){

                    $addr_houses = AddrHouse::query()
                        ->select()
                        ->where('street_id', '=', $street_id)
                        ->where('number', '=', $user->house);
                    if (!empty($user->block)){
                        $addr_houses->where('block', '=', $user->block);
                    }

                    if (count($addr_houses->get()) == 0){
                        $house = new AddrHouse();
                        $house->number = $user->house;
                        if (!empty($user->block)){
                            $house->block = $user->block;
                        }else{
                            $house->block = '';
                        }
                        $house->prefix = '';
                        $house->street_id = $street_id;
                        $house->district_id = 0;
                        $house->area_id = 0;
                        $house->city_id = 0;
                        $house->save();
                        $house_id = $house->id;
                        echo "\thouse_id create successfully, tag_id ".$tag_name[0]['name'].", street_id ".$street_id." \n";
                    }else{
                        $house_id = $addr_houses->first()->id;
                        echo "\thouse_id ".$house_id." already exist \n";
                    }


                    if($house_id){
                        $update_user = User::findOrFail($user->id_user);
                        $update_user->house_id = $house_id;
                        $update_user->save();
                        echo "\tupdate user ".$user->id_user." \n";
                    }else{
                        echo "\tsome problem with house_id \n";
                    }
                }else{
                    echo "\t street_id($user->street_id) не найдена в исходной базе\n";
                }

            }else{
               echo "\n\tне имеет тега с районом\n";
            }
            echo "____________\n";
        } // foreach $users
    }

    public function getOnu(){
        $sub_user = User::query()
            ->select()
            ->where('code', '=', 132)
            ->get();


        $user_tags = DB::select('select uid from users_tag where uid= :id and tag_id in (select tag_id from tags where tag_id=79 )', ['id' => $user->id_user]);
    }
}
