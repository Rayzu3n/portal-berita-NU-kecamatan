<?php

namespace Database\Factories;

use App\Enums\Gender;
use App\Enums\MemberStatus;
use App\Models\Banom;
use App\Models\Member;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Member>
 */
class MemberFactory extends Factory
{
    protected $model = Member::class;

    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'banom_id' => Banom::factory(),
            'full_name' => $this->faker->name(),
            'nik' => $this->faker->unique()->numerify('################'),
            'date_of_birth' => $this->faker->dateTimeBetween('-45 years', '-17 years'),
            'gender' => $this->faker->randomElement(Gender::cases()),
            'phone' => '08'.$this->faker->numerify('##########'),
            'email' => $this->faker->safeEmail(),
            'address' => $this->faker->streetAddress(),
            'village' => $this->faker->citySuffix(),
            'district' => $this->faker->city(),
            'regency_city' => $this->faker->city(),
            'province' => 'Jawa Tengah',
            'postal_code' => $this->faker->numerify('#####'),
            'position' => 'Anggota',
            'membership_number' => $this->faker->unique()->numerify('MWC-####-####'),
            'status' => MemberStatus::PENDING,
        ];
    }
}
