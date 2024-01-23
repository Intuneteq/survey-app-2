<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Repositories\UserRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function __construct(
        protected UserRepository $userRepository
    ) {
    }

    public function register(RegisterRequest $request)
    {
        $validated = $request->validated();

        $result = DB::transaction(function () use ($validated) {

            $user = $this->userRepository->createUser($validated);

            $token = $user->createToken('access-token')->plainTextToken;

            return ['user' => new UserResource($user), 'token' => $token];
        });

        return new JsonResponse($result, 201);
    }

    public function login()
    {
    }

    public function logout()
    {
    }
}
