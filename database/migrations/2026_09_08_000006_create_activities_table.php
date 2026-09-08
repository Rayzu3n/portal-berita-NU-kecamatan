<?php

use App\Enums\ActivityStatus;
use App\Enums\ActivityVisibility;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->longText('content')->nullable();
            $table->string('image')->nullable();
            $table->dateTime('event_at');
            $table->string('location')->nullable();

            // Nullable: a kecamatan-wide public activity may not belong to
            // a single Banom. Required at the application layer whenever
            // visibility is PRIVATE.
            $table->foreignId('banom_id')->nullable()->constrained()->nullOnDelete();

            $table->string('visibility')->default(ActivityVisibility::PUBLIC_VISIBILITY->value)->index();
            $table->string('status')->default(ActivityStatus::DRAFT->value)->index();
            $table->foreignId('created_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('activities');
    }
};
