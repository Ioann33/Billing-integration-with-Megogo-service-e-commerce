<?php

namespace App\Http\Controllers;

use App\Contracts\DigitalTV;
use App\Exceptions\ChangeCredentialsProblem;
use App\Exceptions\ChangeTariffStatusProblem;
use App\Exceptions\NotAuthenticate;
use App\Exceptions\NotEnoughMoney;
use App\Services\Logs\LogService;
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
            return response()->json(['message'=>$e->resMess()], 400);
        }catch (ChangeTariffStatusProblem $e){
            return response()->json(['message'=>$e->resMess()], 500);
        }
        return response()->json(['message'=>$finalAnswer]);
    }

    public function calculateCost(Request $request, DigitalTV $digitalTV){
        $this->validate($request,[
            'price'=> 'required'
        ]);
        $cost = $digitalTV->calculateCost($request->price);
        return response()->json(['cost' => $cost]);

    }
    public function disConnectService(Request $request, DigitalTV $digitalTV, LogService $logService){
        $this->validate($request,[
            'serviceID'=> 'required',
        ]);
        if (isset($request->double)){
            $double = false;
        }else{
            $double = true;
        }
        try {
            $prolong_time = $digitalTV->disConnectService($request->serviceID, $double);
        }catch (ChangeTariffStatusProblem $e){
            return response()->json(['message'=>$e->resMess()], 500);
        }
        $logService->log('iptv', 'disConnectService', 'Отключение подписки '.$request->serviceID);
        return response()->json($prolong_time);

    }
    public function connectService(Request $request, DigitalTV $digitalTV, LogService $logService){
        $this->validate($request,[
            'serviceID'=>'required',
            'price'=>'required',
        ]);
        try {
            $finalAnswer = $digitalTV->connectService($request->serviceID, $request->price);
        }catch (NotAuthenticate $e){
            return response()->json(['message'=>$e->resMess()], 400);
        }catch (NotEnoughMoney $e){
            return response()->json(['message'=>$e->resMess()], 402);
        }catch (ChangeTariffStatusProblem $e){
            return response()->json(['message'=>$e->resMess()], 500);
        }
        $logService->log('iptv', 'connectService', 'Подключена подписка '.$request->serviceID.' , оплачено пользователем '.$request->price.' грн');
        return response()->json($finalAnswer);
    }

    public function createUser(Request $request, DigitalTV $digitalTV, LogService $logService){
        $this->validate($request,[
            'password'=>'required|min:6'
        ]);
        try {
            $digitalTV->createUser($request->password);
        }catch (ChangeCredentialsProblem $e){
            return response()->json(['message'=>$e->resMess()], 400);
        }
        $logService->log('iptv', 'createUser', 'Создание  IPTV учетки пользователем');
        return response()->json(['message'=>'user created successful'], 201);
    }
}
