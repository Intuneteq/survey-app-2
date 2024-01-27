set -e
echo "Deploying application"

#Enter maintenance mode

(php artisan down --message 'The website is been quickly updated. Please tey again in minutes.') || true
  #update codebase
  git pull origin main

#exit maintainance mode
composer2 install

composer2 dump-autoload
php artisan optimize
php artisan up
# php artisan migrate --force

echo "Website deployed"

# #!/bin/sh
# set -e
# echo "Deploying application"

#Enter maintenance mode

# (php artisan down --message='The website is been quickly updated. Please tey again in minutes.') || true
#   #update codebase

#     # git pull origin v1
#     git fetch origin master
#     git reset --hard origin/master

#     composer2 install
#     # composer2 install -q --no-ansi --no-interaction --no-scripts --no-progress --prefer-dist --no-dev
#     composer2 dump-autoload

#     php artisan migrate --force

#      # Clear cache
#     php artisan view:clear
#     php artisan cache:clear
#     php artisan route:clear
#     php artisan config:clear
#     php artisan optimize

#     # script permissions
#     chmod -R 777 deploy.sh
# #exit maintainance mode
# php artisan up

# echo "Website deployed"
