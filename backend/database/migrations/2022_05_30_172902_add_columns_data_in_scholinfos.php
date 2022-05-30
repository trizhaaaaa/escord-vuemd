<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsDataInScholinfos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('scholinfos', function (Blueprint $table) {
            //
            $table->integer('semester')->nullable();
            $table->integer('sem_startyear')->nullable();
            $table->integer('sem_endyeaer')->nullable();
            $table->string('total_gwa')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('scholinfos', function (Blueprint $table) {
             $table->dropColumn('semester')->nullable();
             $table->dropColumn('sem_startyear')->nullable();
             $table->dropColumn('sem_endyeaer')->nullable();
             $table->dropColumn('total_gwa')->nullable();
        });
    }
}
