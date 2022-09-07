<?php

namespace App\Http\Controllers;

use App\Contracts\DigitalTV;
use App\Exceptions\ChangeCredentialsProblem;
use App\Exceptions\ChangeTariffStatusProblem;
use App\Exceptions\NotAuthenticate;
use App\Exceptions\NotEnoughMoney;
use Illuminate\Http\Request;

class DigitalTvController extends Controller
{
    public function getUserInfo(DigitalTV $digitalTV){
        $info = $digitalTV->getUserInfo();
        return response()->json($info);
    }

    public function getTariffPlans(DigitalTV $digitalTV){
        $iptv_plan = $digitalTV->getTariffPlans();
        return response()->json($iptv_plan);
    }

    public function changeTariffStatus(Request $request, DigitalTV $digitalTV){
        $this->validate($request,[
            'serviceID'=>'required',
            'action'=>'required',
        ]);
        try {
            $finalAnswer = $digitalTV->changeTariffStatus($request->serviceID, $request->action);
        }catch (NotAuthenticate $e){
            return response()->json(['message'=>$e->resMess()], 401);
        }catch (ChangeTariffStatusProblem $e){
            return response()->json(['message'=>$e->resMess()], 500);
        }
        return response()->json(['message'=>$finalAnswer]);
    }


    public function connectService(Request $request, DigitalTV $digitalTV){
        $this->validate($request,[
            'serviceID'=>'required',
        ]);
        try {
            $finalAnswer = $digitalTV->connectService($request->serviceID);
        }catch (NotAuthenticate $e){
            return response()->json(['message'=>$e->resMess()], 400);
        }catch (NotEnoughMoney $e){
            return response()->json(['message'=>$e->resMess()], 402);
        }catch (ChangeTariffStatusProblem $e){
            return response()->json(['message'=>$e->resMess()], 500);
        }
        return response()->json($finalAnswer);
    }

    public function createUser(Request $request, DigitalTV $digitalTV){
        $this->validate($request,[
            'password'=>'required'
        ]);
        try {
            $digitalTV->createUser($request->password);
        }catch (ChangeCredentialsProblem $e){
            return response()->json(['message'=>$e->resMess(), 400]);
        }
        return response()->json(['message'=>'user created successful'], 201);
    }
}
