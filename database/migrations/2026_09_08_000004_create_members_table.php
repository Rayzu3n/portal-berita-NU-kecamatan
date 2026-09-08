<?php

use App\Enums\MemberStatus;
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
        Schema::create('members', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')->unique()->constrained()->cascadeOnDelete();

            // A member's main Banom. Nullable so an admin's profile row
            // (which is not tied to a single Banom) is still representable.
            $table->foreignId('banom_id')->nullable()->constrained()->nullOnDelete();

            // Personal information.
            $table->string('full_name');
            $table->string('photo')->nullable();
            $table->string('nik', 16)->nullable()->unique();
            $table->date('date_of_birth')->nullable();
            $table->string('gender')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();

            // Address.
            $table->text('address')->nullable();
            $table->string('village')->nullable();
            $table->string('district')->nullable();
            $table->string('regency_city')->nullable();
            $table->string('province')->nullable();
            $table->string('postal_code', 10)->nullable();

            // Organization.
            $table->string('position')->nullable();
            $table->string('membership_number')->nullable()->unique();
            $table->string('status')->default(MemberStatus::PENDING->value)->index();
            $table->text('rejection_reason')->nullable();
            $table->foreignId('verified_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamp('verified_at')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('members');
    }
};
