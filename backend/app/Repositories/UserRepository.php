<?php

namespace App\Repositories;

use App\Exceptions\BadRequestException;
use App\Models\User;

class UserRepository
{
    public function createUser(array $credentials): User
    {
        $user = new User();

        if (!isset($credentials['email'])) {
            throw new BadRequestException('No Email Provided');
        }

        foreach ($credentials as $column => $value) {
            $user->$column = $value;
        }

        $user->save();

        // event(new Registered($user));

        return $user;
    }
}
