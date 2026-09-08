import { Head } from '@inertiajs/react';

const riwayatKegiatan = [
    {
        judul: 'Pelatihan Kepemimpinan Dasar (PKD)',
        tanggal: '15 Apr 2025',
        status: 'Selesai',
        skp: '16 JP',
    },
    {
        judul: 'Majelis Dzikir Rijalul Ansor',
        tanggal: '10 Apr 2025',
        status: 'Selesai',
        skp: '4 JP',
    },
    {
        judul: 'Rapat Koordinasi Pengurus',
        tanggal: '05 Apr 2025',
        status: 'Selesai',
        skp: '8 JP',
    },
    {
        judul: 'Workshop Jurnalistik',
        tanggal: '28 Mar 2025',
        status: 'Selesai',
        skp: '12 JP',
    },
];

export default function MemberProfil() {
    return (
        <>
            <Head title="Profil & KTA Digital" />
            <div className="bg-surface-warm flex min-h-screen flex-col">
                {/* Header */}
                <header className="bg-surface-card sticky top-0 z-50 w-full shadow-sm">
                    <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-4 md:px-8">
                        <div className="flex items-center gap-3">
                            <div className="bg-brand-primary ring-brand-primary/20 flex h-10 w-10 items-center justify-center rounded-lg text-white shadow-sm ring-1">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 0 0 0 18M12 3a14 14 0 0 1 0 18" />
                                </svg>
                            </div>
                            <div>
                                <span className="text-title-lg text-brand-primary block leading-none font-bold tracking-tight">
                                    Portal Anggota MWC NU
                                </span>
                                <span className="text-caption text-text-muted mt-1 block">
                                    Kecamatan Digital Hub • Pengurus Cabang
                                </span>
                            </div>
                        </div>

                        <nav className="hidden h-full items-center gap-2 pt-1 md:flex">
                            <a
                                className="text-text-secondary hover:bg-brand-primary-light hover:text-brand-primary text-label-md rounded px-2 py-1 pb-1 font-normal transition-colors duration-150"
                                href="/member/dashboard"
                            >
                                Dashboard
                            </a>
                            <a
                                className="text-text-secondary hover:bg-brand-primary-light hover:text-brand-primary text-label-md rounded px-2 py-1 pb-1 font-normal transition-colors duration-150"
                                href="#"
                            >
                                Kegiatan Saya
                            </a>
                            <a
                                className="border-brand-primary text-brand-primary text-label-md flex items-center gap-1.5 border-b-2 px-2 py-1 pb-1 font-semibold"
                                href="/member/profil"
                            >
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5z" />
                                </svg>
                                Profil & KTA Digital
                            </a>
                            <a
                                className="text-text-secondary hover:bg-brand-primary-light hover:text-brand-primary text-label-md rounded px-2 py-1 pb-1 font-normal transition-colors duration-150"
                                href="#"
                            >
                                Layanan Anggota
                            </a>
                        </nav>

                        <div className="flex items-center gap-3">
                            <div className="bg-status-success-bg border-brand-secondary text-status-success text-label-sm hidden items-center gap-1.5 rounded-full border px-3 py-1 sm:inline-flex">
                                <span className="bg-status-success h-2 w-2 animate-pulse rounded-full"></span>
                                KTA Aktif
                            </div>
                            <button
                                aria-label="Notifikasi"
                                className="text-text-secondary hover:text-brand-primary hover:bg-brand-primary-light relative rounded-lg p-2 transition-colors duration-150"
                                type="button"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>
                                <span className="bg-brand-primary absolute top-1.5 right-1.5 h-2 w-2 rounded-full ring-2 ring-white"></span>
                            </button>
                            <div className="bg-border-subtle hidden h-6 w-[1px] sm:block"></div>
                            <div className="border-border-light bg-surface-tint flex items-center gap-2 rounded-lg border py-1 pr-2 pl-1">
                                <div className="bg-brand-primary-light border-brand-primary/20 text-brand-primary flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold">
                                    AF
                                </div>
                                <div className="hidden text-left lg:block">
                                    <span className="text-label-sm text-text-primary block leading-tight">
                                        Ahmad Fauzi
                                    </span>
                                    <span className="text-caption text-text-muted block">
                                        GP Ansor
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="mx-auto w-full max-w-[1280px] flex-1 px-4 py-8 md:px-8">
                    {/* Breadcrumb */}
                    <nav
                        aria-label="Breadcrumb"
                        className="text-caption text-text-muted mb-6 flex items-center gap-2"
                    >
                        <a
                            className="hover:text-brand-primary transition-colors"
                            href="/member/dashboard"
                        >
                            Portal MWC NU
                        </a>
                        <svg
                            className="h-3 w-3"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                        <a
                            className="hover:text-brand-primary transition-colors"
                            href="/member/dashboard"
                        >
                            Anggota Terdaftar
                        </a>
                        <svg
                            className="h-3 w-3"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                        <span className="text-text-primary font-medium">
                            Profil & KTA Digital
                        </span>
                    </nav>

                    {/* Profile Header */}
                    <section className="bg-surface-card border-border-subtle relative mb-8 overflow-hidden rounded-xl border p-6 shadow-sm md:p-8">
                        <div className="bg-brand-primary-light/50 pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full blur-2xl"></div>
                        <div className="relative z-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                                <div className="relative flex-shrink-0">
                                    <div className="bg-surface-tint border-brand-primary text-brand-primary flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl border-2 shadow-sm sm:h-28 sm:w-28">
                                        <svg
                                            className="text-text-muted h-16 w-16"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                        </svg>
                                    </div>
                                    <div
                                        className="bg-status-success absolute -right-2 -bottom-2 rounded-full p-1 text-white shadow-md ring-2 ring-white"
                                        title="Terverifikasi Nasional"
                                    >
                                        <svg
                                            className="block h-4 w-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-1.5 flex flex-wrap items-center gap-2">
                                        <span className="bg-status-success-bg border-brand-secondary text-status-success text-label-sm flex items-center gap-1 rounded-full border px-3 py-0.5">
                                            <svg
                                                className="h-3 w-3"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                                            </svg>
                                            Terverifikasi Nasional
                                        </span>
                                        <span className="bg-accent-cyan-subtle border-accent-cyan text-tertiary text-label-sm rounded-full border px-3 py-0.5 font-medium">
                                            Kader Struktural
                                        </span>
                                    </div>
                                    <h1 className="text-headline-md font-display text-text-primary mb-1 tracking-tight">
                                        Ahmad Fauzi, S.Pd.I
                                    </h1>
                                    <p className="text-body-sm text-text-secondary mb-4 flex flex-wrap items-center gap-2">
                                        <span className="text-brand-primary font-medium">
                                            NIA NU: 32.04.12.2023.00492
                                        </span>
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-surface-tint border-border-light text-text-primary text-label-sm inline-flex items-center gap-1.5 rounded-full border px-3 py-1">
                                            👥 Banom: <strong>GP Ansor</strong>
                                        </span>
                                        <span className="bg-surface-tint border-border-light text-text-primary text-label-sm inline-flex items-center gap-1.5 rounded-full border px-3 py-1">
                                            🎖️ Jabatan:{' '}
                                            <strong>Ketua PAC</strong>
                                        </span>
                                        <span className="bg-surface-tint border-border-light text-text-primary text-label-sm inline-flex items-center gap-1.5 rounded-full border px-3 py-1">
                                            🏙️ Ranting:{' '}
                                            <strong>Desa Sukamaju</strong>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button className="border-border-subtle bg-surface-card text-text-primary text-label-md hover:bg-surface-tint inline-flex h-11 items-center gap-2 rounded-lg border px-6 transition-colors">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931z" />
                                    </svg>
                                    Edit Profil
                                </button>
                                <button className="bg-brand-primary text-label-md hover:bg-brand-primary-hover inline-flex h-11 items-center gap-2 rounded-lg px-6 text-white shadow-sm transition-colors">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                    Unduh KTA
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Digital KTA Card */}
                    <section className="mb-8">
                        <div className="mb-4 flex items-center gap-2">
                            <svg
                                className="text-brand-primary h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5z" />
                            </svg>
                            <h2 className="text-title-lg text-text-primary font-semibold">
                                KTA Digital Nahdliyin
                            </h2>
                        </div>

                        {/* KTA Card - ISO ID-1 Proportion */}
                        <div className="mx-auto max-w-[540px] md:mx-0">
                            <div className="from-brand-primary rounded-2xl bg-gradient-to-br via-[#1C775A] to-[#165F48] p-1 shadow-xl">
                                <div className="bg-surface-card relative overflow-hidden rounded-xl p-6 md:p-8">
                                    {/* Background Pattern */}
                                    <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
                                        <svg
                                            className="h-full w-full"
                                            fill="currentColor"
                                            viewBox="0 0 100 100"
                                        >
                                            <circle cx="50" cy="50" r="40" />
                                            <path d="M50 10a40 40 0 0 0 0 80" />
                                            <path d="M50 10a40 40 0 0 1 0 80" />
                                        </svg>
                                    </div>

                                    {/* Card Header */}
                                    <div className="relative z-10 mb-6 flex items-start justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-brand-primary flex h-12 w-12 items-center justify-center rounded-lg text-white shadow-sm">
                                                <svg
                                                    className="h-7 w-7"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.8"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        r="9"
                                                    />
                                                    <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 0 0 0 18M12 3a14 14 0 0 1 0 18" />
                                                </svg>
                                            </div>
                                            <div>
                                                <span className="text-title-md text-brand-primary block leading-none font-bold">
                                                    MWC NU Kecamatan
                                                </span>
                                                <span className="text-text-muted text-[10px] tracking-wider uppercase">
                                                    Kartu Tanda Anggota Digital
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="bg-status-success-bg text-status-success inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold">
                                                <span className="bg-status-success h-1.5 w-1.5 rounded-full"></span>
                                                AKTIF
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="relative z-10 flex gap-6">
                                        {/* Photo */}
                                        <div className="shrink-0">
                                            <div className="bg-surface-tint border-border-subtle flex h-28 w-24 items-center justify-center overflow-hidden rounded-lg border-2">
                                                <svg
                                                    className="text-text-muted h-14 w-14"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                                </svg>
                                            </div>
                                        </div>
                                        {/* Info */}
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-headline-sm font-display text-text-primary mb-1 truncate font-semibold">
                                                Ahmad Fauzi, S.Pd.I
                                            </h3>
                                            <p className="text-label-sm text-brand-primary mb-3 font-semibold">
                                                NU-3204-2023-08492
                                            </p>
                                            <div className="text-body-sm grid grid-cols-2 gap-x-4 gap-y-2">
                                                <div>
                                                    <span className="text-text-muted text-caption block">
                                                        Banom
                                                    </span>
                                                    <span className="text-text-primary text-label-sm font-medium">
                                                        GP Ansor
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="text-text-muted text-caption block">
                                                        Jabatan
                                                    </span>
                                                    <span className="text-text-primary text-label-sm font-medium">
                                                        Ketua PAC
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="text-text-muted text-caption block">
                                                        Ranting
                                                    </span>
                                                    <span className="text-text-primary text-label-sm font-medium">
                                                        Desa Sukamaju
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="text-text-muted text-caption block">
                                                        Berlaku
                                                    </span>
                                                    <span className="text-text-primary text-label-sm font-medium">
                                                        31 Des 2028
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* QR Placeholder */}
                                        <div className="flex shrink-0 flex-col items-center gap-1">
                                            <div className="bg-surface-tint border-border-subtle flex h-20 w-20 items-center justify-center rounded-lg border">
                                                <svg
                                                    className="text-text-muted h-12 w-12"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                                                    <path d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75ZM6.75 13.5h.75v.75h-.75v-.75Z" />
                                                </svg>
                                            </div>
                                            <span className="text-text-muted text-[10px]">
                                                Scan untuk verifikasi
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card Footer */}
                                    <div className="border-border-light relative z-10 mt-6 flex items-center justify-between border-t pt-4">
                                        <span className="text-caption text-text-muted">
                                            Masa Berlaku: 01 Januari 2024 — 31
                                            Desember 2028
                                        </span>
                                        <span className="text-caption text-text-muted flex items-center gap-1">
                                            <svg
                                                className="h-3 w-3"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                            </svg>
                                            Dokumen Resmi SISLOG NU
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Riwayat Kegiatan */}
                    <section className="bg-surface-card border-border-subtle rounded-xl border p-6 shadow-sm">
                        <h2 className="text-title-lg text-text-primary mb-4 font-semibold">
                            Riwayat Kegiatan
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-border-subtle border-b">
                                        <th className="text-label-sm text-text-secondary px-4 py-3 text-left font-semibold tracking-wider uppercase">
                                            Kegiatan
                                        </th>
                                        <th className="text-label-sm text-text-secondary px-4 py-3 text-left font-semibold tracking-wider uppercase">
                                            Tanggal
                                        </th>
                                        <th className="text-label-sm text-text-secondary px-4 py-3 text-left font-semibold tracking-wider uppercase">
                                            Status
                                        </th>
                                        <th className="text-label-sm text-text-secondary px-4 py-3 text-left font-semibold tracking-wider uppercase">
                                            SKP
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {riwayatKegiatan.map((item, i) => (
                                        <tr
                                            key={i}
                                            className="border-border-light hover:bg-surface-tint border-b transition-colors"
                                        >
                                            <td className="text-body-sm text-text-primary px-4 py-4 font-medium">
                                                {item.judul}
                                            </td>
                                            <td className="text-body-sm text-text-secondary px-4 py-4">
                                                {item.tanggal}
                                            </td>
                                            <td className="px-4 py-4">
                                                <span className="bg-status-success-bg text-status-success text-label-sm inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-medium">
                                                    <span className="bg-status-success h-1.5 w-1.5 rounded-full"></span>
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="text-body-sm text-text-secondary px-4 py-4">
                                                {item.skp}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="border-border-subtle bg-surface-container mt-16 w-full border-t px-6 py-8 md:px-8">
                    <div className="text-label-sm text-text-secondary mx-auto max-w-[1280px] text-center">
                        <p>© 2025 MWC NU Kecamatan. Portal Anggota Digital.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
