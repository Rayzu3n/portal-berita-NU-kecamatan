<?php

namespace Database\Seeders;

use App\Enums\MemberStatus;
use App\Enums\UserRole;
use App\Models\Banom;
use App\Models\Member;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            BanomSeeder::class,
            CategorySeeder::class,
        ]);

        $admin = User::factory()->create([
            'name' => 'Admin Kecamatan',
            'email' => 'admin@example.com',
            'role' => UserRole::ADMIN,
        ]);

        Member::factory()->create([
            'user_id' => $admin->id,
            'banom_id' => null,
            'full_name' => 'Admin Kecamatan',
            'status' => MemberStatus::VERIFIED,
        ]);

        $memberUser = User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'role' => UserRole::MEMBER,
        ]);

        Member::factory()->create([
            'user_id' => $memberUser->id,
            'banom_id' => Banom::query()->inRandomOrder()->value('id'),
            'status' => MemberStatus::VERIFIED,
        ]);
    }
}
