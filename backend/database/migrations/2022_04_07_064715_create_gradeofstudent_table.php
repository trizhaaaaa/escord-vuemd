<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGradeofstudentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gradeofstudent', function (Blueprint $table) {
            $table->string('gradesheetid',32)->index();
            $table->string('student_number')->unique();
            $table->string('studentname');
            $table->double('midterm');
            $table->double('finalterm');
            $table->double('finalgrade');

            $table->foreign('gradesheetid')->references('gradesheetid')->on('gradsheetinfo')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('gradeofstudent');
    }
}
