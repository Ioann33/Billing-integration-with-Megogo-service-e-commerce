<?php

namespace App\Http\Controllers;

use App\Contracts\DigitalTV;
use App\Exceptions\ChangeCredentialsProblem;
use App\Exceptions\ChangeTariffStatusProblem;
use App\Exceptions\NotAuthenticate;
use App\Exceptions\NotEnoughMoney;
use App\Http\Requests\ServiceIdRequest;
use App\Services\HelperServices\FinancialOperations;
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
            'service_id'=>'required',
            'action'=>'required',
        ]);
        try {
            $finalAnswer = $digitalTV->changeTariffStatus($request->service_id, $request->action);
        }catch (NotAuthenticate $e){
            return response()->json(['message'=>$e->resMess()], 400);
        }catch (ChangeTariffStatusProblem $e){
            return response()->json(['message'=>$e->resMess()], 500);
        }
        return response()->json(['message'=>$finalAnswer]);
    }

    public function calculateCost(ServiceIdRequest $request, DigitalTV $digitalTV){

        $cost = $digitalTV->calculateCost($request->service_id);
        $checkBalance = new FinancialOperations();
        return response()->json(['cost' => $cost, 'stateBalance' => $checkBalance->checkBalance($cost)]);

    }
    public function disConnectService(ServiceIdRequest $request, DigitalTV $digitalTV, LogService $logService){

        try {
            $prolong_time = $digitalTV->disConnectService($request->service_id);
        }catch (ChangeTariffStatusProblem $e){
            return response()->json(['message'=>$e->resMess()], 500);
        }
        $logService->log('iptv', 'disConnectService', 'Отключение подписки id = ('.$request->service_id.')');
        return response()->json($prolong_time);

    }
    public function connectService(ServiceIdRequest $request, DigitalTV $digitalTV, LogService $logService){

        try {
            $result = $digitalTV->connectService($request->service_id);
        }catch (NotAuthenticate $e){
            return response()->json(['message'=>$e->resMess()], 400);
        }catch (NotEnoughMoney $e){
            return response()->json(['message'=>$e->resMess()], 402);
        }catch (ChangeTariffStatusProblem $e){
            return response()->json(['message'=>$e->resMess()], 500);
        }
        $logService->log('iptv', 'connectService', 'Подключена подписка '.$result['service_id'].' , оплачено пользователем '.$result['diff_price'].' грн');
        return response()->json($result);
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

    public function changeCredentials(Request $request, DigitalTV $digitalTV, LogService $logService){

        $this->validate($request, [
            'email'=>'required',
            'password'=>'required|min:6'
        ]);

        try {
            $res = $digitalTV->changeCredentials($request->email, $request->password);
        }catch (ChangeCredentialsProblem $e){
            return response()->json(['message'=>$e->resMess()], 422);
        }
        $logService->log('iptv', 'changeCredentials', 'Изменение пароля IPTV учетки пользователем');
        return response()->json(['message'=>$res]);

    }
}
