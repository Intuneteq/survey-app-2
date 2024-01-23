<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        /**
         * Set client url dynamically based on the request origin.
         */
        $client_url = request()->header('origin') ?? 'https://survey-app.tobiolanitori.com';
        config(['app.client_url' => $client_url]);
    }
}
