<?php

namespace App\Enums;

enum BanomName: string
{
    case IPNU = 'ipnu';
    case IPPNU = 'ippnu';
    case GP_ANSOR = 'gp_ansor';
    case BANSER = 'banser';
    case FATAYAT_NU = 'fatayat_nu';
    case MUSLIMAT_NU = 'muslimat_nu';

    public function label(): string
    {
        return match ($this) {
            self::IPNU => 'IPNU',
            self::IPPNU => 'IPPNU',
            self::GP_ANSOR => 'GP Ansor',
            self::BANSER => 'Banser',
            self::FATAYAT_NU => 'Fatayat NU',
            self::MUSLIMAT_NU => 'Muslimat NU',
        };
    }
}
