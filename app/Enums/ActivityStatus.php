<?php

namespace App\Enums;

enum ActivityStatus: string
{
    case DRAFT = 'draft';
    case UPCOMING = 'upcoming';
    case ONGOING = 'ongoing';
    case COMPLETED = 'completed';
}
