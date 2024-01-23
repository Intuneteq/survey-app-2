<?php

namespace App\Http\Controllers;

use App\Exceptions\BadRequestException;
use App\Exceptions\UnAuthorizedException;
use App\Exceptions\UnprocessableException;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Mail\EmailVerification;
use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Mail;

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

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);

        if (!Auth::attempt($credentials, $remember)) {
            throw new UnprocessableException('The Provided credentials are not correct');
        }

        $user = Auth::user();

        $token = $user->createToken('access-token')->plainTextToken;

        $result = ['user' => new UserResource($user), 'token' => $token];

        return new JsonResponse($result);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return new JsonResponse(['message' => "Logout Successful"]);
    }

    public function verify(string $user_id, Request $request)
    {

        /**
         * Dont throw an error, render error page instead.
         */
        if (!$request->hasValidSignature()) {
            throw new UnAuthorizedException('Invalid/Expired url provided');
        }

        $user = User::find($user_id);

        if (!$user) {
            throw new UnAuthorizedException('Invalid/Expired url provided');
        }

        if (!$user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
        }

        $redirectUrl = config('app.client_url') . '/dashboard/home';

        return redirect($redirectUrl);
    }

    public function resend()
    {
        if (Auth::user()->hasVerifiedEmail()) {
            throw new BadRequestException("Email already verified.");
        }

        $user = Auth::user();
        Mail::to($user)->send(new EmailVerification($user));

        return response()->json(["msg" => "Email verification link sent on your email id"]);
    }
}
