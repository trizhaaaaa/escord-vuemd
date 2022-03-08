<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        DB::table('users')->insert([
            'name' =>'jackdaisuki',
            'email' => 'jackdaisuki04@gmail.com',
            'faculty_number' => '20190344',
            'password' => Hash::make('password'),
        ]);
    }
}
