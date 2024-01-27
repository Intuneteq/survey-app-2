<x-mail::message>
# Dear {{$name}}

Kindly Verify Your Email Address

<x-mail::button :url="$url">
Verify Email
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
