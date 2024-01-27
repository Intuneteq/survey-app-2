<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\URL;

class EmailVerification extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public User $user)
    {
        // Initialize the $name property here.
        $this->name = $user->name;

        /**
         * Email will only be dispatched after the database transaction is closed.
         */
        $this->afterCommit();
    }

    public $name;

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Email Verification',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        $url = URL::temporarySignedRoute(
            'auth.verification.verify',
            now()->addMinutes(15),
            ['id' => $this->user->getKey()]
        );

        $name = $this->name;

        return new Content(
            markdown: 'mail.email-verification',
            with: [
                'url' => $url,
                'name' => $name
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
