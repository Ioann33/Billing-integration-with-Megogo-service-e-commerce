<?php

namespace App\Http\Controllers;

use App\Models\Priveleges;
use Illuminate\Http\Request;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;


class EnableInternetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return 'enable_internet - INDEX';
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {


        return 'enable_internet - create';
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        DB::beginTransaction();
        DB::update('update priveleges set enable_internet=1 where id_user=?',[Auth::id()]);
        DB::update('update users set update_user=4 where id_user=?',[Auth::id()]);
        DB::insert('insert into log ("date", operator, id_user, event, log) values (?,?,?,?,?)',[date("Y-m-d H:i:s"), Auth::id(), Auth::id(), 'iEnable', 'Продление на 1 день и Включение Интернета через мобильное приложение']);
        DB::commit();
        return true;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return 'enable_internet - show: $id';
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return 'enable_internet - edit: $id';
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
        return 'enable_internet - update: $id, $request';

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return 'enable_internet - destroy: $id';
    }
}
