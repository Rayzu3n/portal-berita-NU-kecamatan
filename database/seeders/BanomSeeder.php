<?php

namespace Database\Seeders;

use App\Enums\BanomName;
use App\Models\Banom;
use Illuminate\Database\Seeder;

class BanomSeeder extends Seeder
{
    /**
     * Seed the fixed set of Banom supported by the portal.
     */
    public function run(): void
    {
        foreach (BanomName::cases() as $banom) {
            Banom::query()->updateOrCreate(
                ['slug' => $banom->value],
                ['name' => $banom->label(), 'slug' => $banom->value]
            );
        }
    }
}
