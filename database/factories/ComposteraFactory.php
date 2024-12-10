<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Compostera>
 */
class ComposteraFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $fillable = [
        'nombre',
        'centro'
    ];

    public function definition(): array
    {
        return [
            'nombre' => fake()->name(),
            'centro' => 1
        ];
    }
}
