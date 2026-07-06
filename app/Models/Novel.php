<?php

namespace App\Models;

use Database\Factories\NovelFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property int $author_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 */
#[Fillable(['author_id'])]
#[Hidden()]
class Novel extends Model
{
    /** @use HasFactory<NovelFactory> */
    use HasFactory, Notifiable;

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            // 'email_verified_at' => 'datetime',
            // 'password' => 'hashed',
            // 'two_factor_confirmed_at' => 'datetime',
        ];
    }
}
