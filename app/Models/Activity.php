<?php

namespace App\Models;

use App\Enums\ActivityStatus;
use App\Enums\ActivityVisibility;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property string $title
 * @property string $slug
 * @property string|null $content
 * @property string|null $image
 * @property Carbon $event_at
 * @property string|null $location
 * @property int|null $banom_id
 * @property ActivityVisibility $visibility
 * @property ActivityStatus $status
 * @property int|null $created_by
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 */
#[Fillable(['title', 'slug', 'content', 'image', 'event_at', 'location', 'banom_id', 'visibility', 'status', 'created_by'])]
class Activity extends Model
{
    use HasFactory;

    /**
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'event_at' => 'datetime',
            'visibility' => ActivityVisibility::class,
            'status' => ActivityStatus::class,
        ];
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
    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function isPublic(): bool
    {
        return $this->visibility === ActivityVisibility::PUBLIC_VISIBILITY;
    }

    /**
     * Visible to a given member: public activities are visible to everyone,
     * private activities only to members of the same Banom.
     */
    public function isVisibleTo(?Member $member): bool
    {
        if ($this->isPublic()) {
            return true;
        }

        return $member !== null && $member->banom_id === $this->banom_id;
    }

    /**
     * @param  Builder<Activity>  $query
     * @return Builder<Activity>
     */
    public function scopeVisibleTo(Builder $query, ?Member $member): Builder
    {
        return $query->where(function (Builder $q) use ($member) {
            $q->where('visibility', ActivityVisibility::PUBLIC_VISIBILITY);

            if ($member !== null && $member->banom_id !== null) {
                $q->orWhere(function (Builder $q2) use ($member) {
                    $q2->where('visibility', ActivityVisibility::PRIVATE_VISIBILITY)
                        ->where('banom_id', $member->banom_id);
                });
            }
        });
    }
}
