<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addr_houses', function (Blueprint $table) {
            $table->id();
            $table->integer('number');
            $table->string('block', 10);
            $table->string('prefix', 20);
            $table->integer('street_id');
            $table->integer('district_id');
            $table->integer('area_id');
            $table->integer('city_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('addr_houses');
    }
};
