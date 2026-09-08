<?php

namespace Database\Factories;

use App\Enums\BanomName;
use App\Models\Banom;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Banom>
 */
class BanomFactory extends Factory
{
    protected $model = Banom::class;

    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $banom = $this->faker->randomElement(BanomName::cases());

        return [
            'name' => $banom->label(),
            'slug' => $banom->value,
            'description' => null,
        ];
    }
}
