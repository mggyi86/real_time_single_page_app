<?php

namespace App\Providers;

use App\User;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // $user = User::first();
        // $notis = $user->unreadNotifications()->get();
        // foreach($notis as $noti) {
        //     dd($noti->data);
        // }
        // dd($user->unreadNotifications()->get());
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
