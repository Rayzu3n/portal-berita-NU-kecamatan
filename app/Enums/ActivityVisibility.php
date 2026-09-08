<?php

namespace App\Enums;

enum ActivityVisibility: string
{
    case PUBLIC_VISIBILITY = 'public';
    case PRIVATE_VISIBILITY = 'private';
}
