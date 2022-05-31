<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddBirthplaceColumnInScholinfos extends Migration
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
            $table->string('birthplace');
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
            //
            $table->dropColumn('birthplace');
        });
    }
}
