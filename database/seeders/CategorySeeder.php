<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Seed a starting set of news categories. Admins can add more later
     * since categories are a normal manageable table, not a fixed enum.
     */
    public function run(): void
    {
        $categories = ['Kegiatan', 'Pengumuman', 'Keagamaan', 'Sosial', 'Pendidikan'];

        foreach ($categories as $name) {
            Category::query()->updateOrCreate(
                ['slug' => Str::slug($name)],
                ['name' => $name, 'slug' => Str::slug($name)]
            );
        }
    }
}
