<?php

namespace App\Http\Controllers;

use App\Events\ChatEvent;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function test()
    {
        $test = 'test';
        event(new ChatEvent($test));
        dd($test);
    }
}
