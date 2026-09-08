<?php

namespace App\Models;

use App\Enums\Gender;
use App\Enums\MemberStatus;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property int $user_id
 * @property int|null $banom_id
 * @property string $full_name
 * @property string|null $photo
 * @property string|null $nik
 * @property Carbon|null $date_of_birth
 * @property Gender|null $gender
 * @property string|null $phone
 * @property string|null $email
 * @property string|null $address
 * @property string|null $village
 * @property string|null $district
 * @property string|null $regency_city
 * @property string|null $province
 * @property string|null $postal_code
 * @property string|null $position
 * @property string|null $membership_number
 * @property MemberStatus $status
 * @property string|null $rejection_reason
 * @property int|null $verified_by
 * @property Carbon|null $verified_at
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 */
#[Fillable([
    'user_id', 'banom_id', 'full_name', 'photo', 'nik', 'date_of_birth', 'gender',
    'phone', 'email', 'address', 'village', 'district', 'regency_city', 'province',
    'postal_code', 'position', 'membership_number', 'status', 'rejection_reason',
    'verified_by', 'verified_at',
])]
class Member extends Model
{
    use HasFactory;

    /**
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'date_of_birth' => 'date',
            'gender' => Gender::class,
            'status' => MemberStatus::class,
            'verified_at' => 'datetime',
        ];
    }

    /**
     * @return BelongsTo<User, $this>
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return BelongsTo<Banom, $this>
     */
    public function banom(): BelongsTo
    {
        return $this->belongsTo(Banom::class);
    }

    /**
     * @return BelongsTo<User, $this>
     */
    public function verifiedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'verified_by');
    }

    public function isVerified(): bool
    {
        return $this->status === MemberStatus::VERIFIED;
    }
}
