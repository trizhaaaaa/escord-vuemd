<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RenameAndAddNewColumnInManagers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('managers', function (Blueprint $table) {
            $table->renameColumn('name', 'firstname');
            $table->string('middleinitial');
            $table->string('lastname');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('managers', function (Blueprint $table) {

            $table->renameColumn('firstname', 'name');
            $table->dropColumn('middleinitial');
            $table->dropColumn('lastname');
        });
    }
}
