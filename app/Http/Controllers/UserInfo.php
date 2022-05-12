<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserInfoResource;
use App\Models\Pay;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserInfo extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //return Auth::id;
        $user =  User::where('id_user', Auth::id())->first();
        $balance = Pay::where('id_user', Auth::id())
            ->where('date', '>=', date("Y-m-01 00:00:00"))
            ->sum('size_pay');


        return [
            "id_user" => $user->id_user,
            'dogovor' => $user->dep.".".$user->id_user,
            'code' => 101,
            'balance' => $balance,
            'history_pay' => [
                [
                    'date' => '1 апреля 2022',
                    'size_pay' => '- ₴ 345',
                    'descript' => 'Тарифный план: 25 мбит',
                    'category' => 'Абонентская плата: Интернет',
                    'type' => 'tariff',
                    'billing_id' => 341324,
                    'bank_id' => 2423
                ],
                [
                    'date' => '2 апреля 2022',
                    'size_pay' => '₴ 120',
                    'descript' => 'Пополнение счета',
                    'category' => 'Терминал: E-pay',
                    'type' => 'charge',
                    'billing_id' => 341324,
                    'bank_id' => 2423
                ],
                [
                    'date' => '3 апреля 2022',
                    'size_pay' => '- ₴ 50',
                    'descript' => 'Списание за сервис Real IP',
                    'category' => 'Сервис: Real IP',
                    'type' => 'real_ip',
                    'billing_id' => 341324,
                    'bank_id' => 2423
                ],
                [
                    'date' => '5 апреля 2022',
                    'size_pay' => '- ₴ 150',
                    'descript' => 'Настройка роутера',
                    'category' => 'Платный вызов',
                    'type' => 'paid_service',
                    'billing_id' => 341324,
                    'bank_id' => 2423
                ],                [
                    'date' => '5 апреля 2022',
                    'size_pay' => '- ₴ 150',
                    'descript' => 'Настройка роутера',
                    'category' => 'Платный вызов',
                    'type' => 'paid_service',
                    'billing_id' => 341324,
                    'bank_id' => 2423
                ],                [
                    'date' => '5 апреля 2022',
                    'size_pay' => '- ₴ 150',
                    'descript' => 'Настройка роутера',
                    'category' => 'Платный вызов',
                    'type' => 'paid_service',
                    'billing_id' => 341324,
                    'bank_id' => 2423
                ],                [
                    'date' => '5 апреля 2022',
                    'size_pay' => '- ₴ 150',
                    'descript' => 'Настройка роутера',
                    'category' => 'Платный вызов',
                    'type' => 'paid_service',
                    'billing_id' => 341324,
                    'bank_id' => 2423
                ],
            ]
        ];
        //return UserInfoResource::collection( User::where('id_user', Auth::id())->get() );
        //return User::where('id_user', Auth::id())->first();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
