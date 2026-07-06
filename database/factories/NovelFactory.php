<?php

namespace Database\Factories;

use App\Models\Novel;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Novel>
 */
class NovelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'author_id' => AuthorFactory::new()->create()->id,
        ];
    }
}
