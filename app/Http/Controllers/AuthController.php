<?php

namespace App\Http\Controllers;

use App\Enums\OAuthEnum;
use App\Exceptions\BadRequestException;
use App\Exceptions\UnAuthorizedException;
use App\Exceptions\UnprocessableException;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\OAuthRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Mail\EmailVerification;
use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Enum;
use Laravel\Socialite\Facades\Socialite;
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

    public function oAuthRedirect(Request $request)
    {
        $provider = $request->query('provider');

        $validator = Validator::make(['provider' => $provider], [
            'provider' => ['required', new Enum(OAuthEnum::class)]
        ]);

        if ($validator->fails()) {
            throw new UnprocessableException($validator->errors()->first());
        }

        $redirect_url = Socialite::driver($provider)->stateless()->redirect()->getTargetUrl();

        return response(['provider' => $provider, 'redirect_url' => $redirect_url], 200)
            ->header('Content-Type', 'application/json')
            ->header('Access-Control-Allow-Origin', '*');
    }

    public function oAuthCallback(OAuthRequest $request)
    {
        $validated = $request->validated();

        $oauthUser = null;
        try {
            $oauthUser = Socialite::driver($validated['provider'])->stateless()->user();
        } catch (\Throwable $th) {
            throw new BadRequestException($th->getMessage());
        }

        $user = User::firstWhere('email', $oauthUser->email);

        if (!$user) {
            $credentials = [
                'name' => $oauthUser->name,
                'email' => $oauthUser->email,
            ];
            // Sign up user
            $user = $this->userRepository->createUser($credentials);
        } else {
            // Login user
            Auth::login($user);

            $user = Auth::user();
        }

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
