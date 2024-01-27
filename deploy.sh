#!/bin/sh
set -e
echo "Deploying application"

#Enter maintenance mode
 #update codebase

    # git pull origin v1
    git fetch origin master
    git reset --hard origin/master

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
