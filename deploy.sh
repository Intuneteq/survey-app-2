#!/bin/sh
set -e
echo "Deploying application"

#Enter maintenance mode

    composer2 install

    composer2 dump-autoload

    php artisan migrate --force

     # Clear cache
    php artisan view:clear
    php artisan cache:clear
    php artisan route:clear
    php artisan config:clear
    php artisan optimize

    # script permissions
    chmod -R 777 deploy.sh
#exit maintainance mode

echo "Website deployed"
