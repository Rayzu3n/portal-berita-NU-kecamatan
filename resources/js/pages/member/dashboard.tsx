import { Head } from '@inertiajs/react';

const kegiatanSaya = [
    {
        judul: 'Pelatihan Kepemimpinan Dasar (PKD) Angkatan VIII',
        tanggal: '25 Mei 2025',
        status: 'Terjadwal',
        lokasi: 'Aula MWC NU',
        icon: '📋',
    },
    {
        judul: 'Majelis Dzikir Rijalul Ansor',
        tanggal: '20 Mei 2025',
        status: 'Akan Datang',
        lokasi: 'Masjid Baiturrahim',
        icon: '🕌',
    },
    {
        judul: 'Rapat Koordinasi Pengurus',
        tanggal: '18 Mei 2025',
        status: 'Terjadwal',
        lokasi: 'Ruang Sekretariat',
        icon: '🤝',
    },
];

const notifikasi = [
    {
        judul: 'KTA Anda telah diperpanjang',
        waktu: '2 jam lalu',
        type: 'success',
    },
    {
        judul: 'Undangan Rapat Koordinasi Pengurus',
        waktu: '1 hari lalu',
        type: 'info',
    },
    {
        judul: 'Pembayaran Iuran Bulanan Diterima',
        waktu: '3 hari lalu',
        type: 'success',
    },
];

export default function MemberDashboard() {
    return (
        <>
            <Head title="Dashboard Anggota" />
            <div className="bg-surface-warm flex min-h-screen flex-col">
                {/* Header */}
                <header className="bg-surface-card border-border-light sticky top-0 z-50 border-b shadow-sm">
                    <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 md:px-8">
                        <div className="flex items-center gap-4">
                            <div className="bg-brand-primary flex h-10 w-10 items-center justify-center rounded-lg text-white shadow-sm">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 0 0 0 18M12 3a14 14 0 0 1 0 18" />
                                </svg>
                            </div>
                            <div>
                                <span className="text-title-lg text-brand-primary block font-bold tracking-tight">
                                    Portal Anggota MWC NU
                                </span>
                                <span className="text-caption text-text-secondary -mt-1 block">
                                    Kecamatan Kedungbanteng • Satuan Layanan
                                    Digital
                                </span>
                            </div>
                        </div>

                        <nav
                            aria-label="Navigasi Utama"
                            className="hidden h-full items-center gap-6 pt-1 md:flex"
                        >
                            <a
                                className="border-brand-primary text-brand-primary text-label-md flex items-center gap-1.5 border-b-2 pb-1 font-semibold"
                                href="#"
                            >
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
                                </svg>
                                Dashboard
                            </a>
                            <a
                                className="text-text-secondary hover:text-brand-primary text-label-md flex items-center gap-1.5 pb-1 font-normal transition-colors duration-150"
                                href="#"
                            >
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                </svg>
                                Kegiatan Saya
                            </a>
                            <a
                                className="text-text-secondary hover:text-brand-primary text-label-md flex items-center gap-1.5 pb-1 font-normal transition-colors duration-150"
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
                                className="text-text-secondary hover:text-brand-primary text-label-md flex items-center gap-1.5 pb-1 font-normal transition-colors duration-150"
                                href="#"
                            >
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                </svg>
                                Layanan Anggota
                            </a>
                        </nav>

                        <div className="flex items-center gap-4">
                            <button
                                className="border-border-light hover:bg-surface-tint text-text-primary relative flex h-10 w-10 items-center justify-center rounded-lg border transition-colors"
                                title="Pemberitahuan"
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
                                <span className="bg-accent-lime ring-surface-card absolute top-2 right-2 h-2 w-2 rounded-full ring-2"></span>
                            </button>
                            <div className="bg-surface-tint border-border-subtle flex items-center gap-3 rounded-full border py-1.5 pr-2 pl-3 shadow-sm">
                                <div className="bg-brand-primary flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white">
                                    AF
                                </div>
                                <div className="hidden pr-1 text-left leading-tight lg:block">
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-label-sm text-text-primary font-semibold">
                                            Ahmad Fauzi
                                        </span>
                                        <svg
                                            className="text-status-success h-4 w-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-caption text-text-secondary">
                                        GP Ansor • Terverifikasi
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="mx-auto w-full max-w-[1280px] flex-grow px-6 py-8 md:px-8">
                    {/* Welcome Banner */}
                    <section className="bg-surface-card border-border-subtle relative mb-8 overflow-hidden rounded-xl border p-8 shadow-sm">
                        <div className="text-brand-primary pointer-events-none absolute -right-12 -bottom-16 h-80 w-80 opacity-[0.03]">
                            <svg fill="currentColor" viewBox="0 0 200 200">
                                <circle cx="100" cy="100" r="90" />
                            </svg>
                        </div>
                        <div className="relative z-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                            <div>
                                <div className="mb-2 flex items-center gap-2">
                                    <span className="text-label-sm bg-brand-primary-light text-brand-primary border-brand-secondary rounded-full border px-3 py-0.5 font-semibold">
                                        Kader Tingkat Mujahid
                                    </span>
                                    <span className="bg-border-subtle h-1.5 w-1.5 rounded-full"></span>
                                    <span className="text-caption text-text-secondary">
                                        Sistem Informasi Keanggotaan Terpadu
                                        (SISLOG NU)
                                    </span>
                                </div>
                                <h1 className="text-headline-lg font-display text-text-primary mb-2 tracking-tight">
                                    Selamat Datang, Sahabat Ahmad Fauzi
                                </h1>
                                <p className="text-body-md text-text-secondary mb-4">
                                    Nomor Anggota:{' '}
                                    <strong className="text-text-primary font-semibold">
                                        NU-3204-2023-08492
                                    </strong>
                                    <span className="text-border-subtle mx-2">
                                        |
                                    </span>
                                    Status:{' '}
                                    <span className="text-status-success text-label-sm inline-flex items-center gap-1 font-medium">
                                        <span className="bg-status-success h-2 w-2 rounded-full"></span>{' '}
                                        Aktif & Terverifikasi Nasional
                                    </span>
                                </p>
                                <div className="flex flex-wrap gap-2 pt-1">
                                    <div className="bg-surface-tint border-border-light text-text-primary text-label-sm inline-flex items-center gap-1.5 rounded-full border px-3 py-1">
                                        <span className="text-brand-primary text-sm">
                                            👥
                                        </span>
                                        <span>
                                            Banom: <strong>GP Ansor</strong>
                                        </span>
                                    </div>
                                    <div className="bg-surface-tint border-border-light text-text-primary text-label-sm inline-flex items-center gap-1.5 rounded-full border px-3 py-1">
                                        <span className="text-brand-primary text-sm">
                                            🏙️
                                        </span>
                                        <span>
                                            Ranting:{' '}
                                            <strong>Desa Sukamaju</strong>
                                        </span>
                                    </div>
                                    <div className="bg-surface-tint border-border-light text-text-primary text-label-sm inline-flex items-center gap-1.5 rounded-full border px-3 py-1">
                                        <span className="text-brand-primary text-sm">
                                            🎖️
                                        </span>
                                        <span>
                                            Jabatan: <strong>Ketua PAC</strong>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <a
                                className="bg-brand-primary text-label-md hover:bg-brand-primary-hover inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white shadow-sm transition-all active:scale-[0.98]"
                                href="/member/profil"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5z" />
                                </svg>
                                Lihat KTA Digital
                            </a>
                        </div>
                    </section>

                    {/* Stat Cards */}
                    <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                        {[
                            {
                                angka: '12',
                                label: 'Kegiatan Diikuti',
                                icon: '📋',
                                sub: 'Periode 2025',
                            },
                            {
                                angka: '8',
                                label: 'Sertifikat',
                                icon: '🏅',
                                sub: 'Tercatat Digital',
                            },
                            {
                                angka: '4',
                                label: 'Kontribusi',
                                icon: '📝',
                                sub: 'Laporan Aktivitas',
                            },
                            {
                                angka: '98',
                                label: 'Skor Kehadiran',
                                icon: '✅',
                                sub: 'Persentase %',
                            },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="bg-surface-card border-border-subtle rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md"
                            >
                                <div className="mb-3 flex items-center justify-between">
                                    <span className="text-2xl">
                                        {stat.icon}
                                    </span>
                                    <span className="text-caption text-text-muted">
                                        {stat.sub}
                                    </span>
                                </div>
                                <span className="text-headline-md font-display text-brand-primary block font-bold">
                                    {stat.angka}
                                </span>
                                <span className="text-label-md text-text-primary mt-1 block font-semibold">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                        {/* Kegiatan Mendatang */}
                        <section className="bg-surface-card border-border-subtle rounded-xl border p-6 shadow-sm lg:col-span-8">
                            <div className="mb-6 flex items-center justify-between">
                                <h2 className="text-title-lg text-text-primary font-semibold">
                                    Kegiatan Mendatang
                                </h2>
                                <a
                                    className="text-brand-primary text-label-sm font-semibold hover:underline"
                                    href="#"
                                >
                                    Lihat Semua
                                </a>
                            </div>
                            <div className="space-y-4">
                                {kegiatanSaya.map((item, i) => (
                                    <div
                                        key={i}
                                        className="bg-surface-tint border-border-light hover:border-brand-primary/40 flex items-center gap-4 rounded-lg border p-4 transition-colors"
                                    >
                                        <span className="text-2xl">
                                            {item.icon}
                                        </span>
                                        <div className="flex-1">
                                            <h3 className="text-label-md text-text-primary font-semibold">
                                                {item.judul}
                                            </h3>
                                            <div className="mt-1 flex items-center gap-4">
                                                <span className="text-caption text-text-secondary flex items-center gap-1">
                                                    <svg
                                                        className="h-3 w-3"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                                    </svg>
                                                    {item.tanggal}
                                                </span>
                                                <span className="text-caption text-text-secondary flex items-center gap-1">
                                                    <svg
                                                        className="h-3 w-3"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                                                    </svg>
                                                    {item.lokasi}
                                                </span>
                                            </div>
                                        </div>
                                        <span
                                            className={`text-label-sm rounded-full px-3 py-1 font-medium ${item.status === 'Terjadwal' ? 'bg-status-success-bg text-status-success border-brand-secondary border' : 'bg-status-warning-bg text-status-warning border-status-warning/30 border'}`}
                                        >
                                            {item.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Notifikasi */}
                        <aside className="space-y-6 lg:col-span-4">
                            <div className="bg-surface-card border-border-subtle rounded-xl border p-6 shadow-sm">
                                <h3 className="text-title-lg text-text-primary mb-4 font-semibold">
                                    Notifikasi
                                </h3>
                                <div className="space-y-3">
                                    {notifikasi.map((item, i) => (
                                        <div
                                            key={i}
                                            className="bg-surface-tint border-border-light flex items-start gap-3 rounded-lg border p-3"
                                        >
                                            <div
                                                className={`mt-2 h-2 w-2 shrink-0 rounded-full ${item.type === 'success' ? 'bg-status-success' : 'bg-brand-primary'}`}
                                            ></div>
                                            <div>
                                                <p className="text-body-sm text-text-primary">
                                                    {item.judul}
                                                </p>
                                                <p className="text-caption text-text-muted mt-0.5">
                                                    {item.waktu}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Akses Cepat */}
                            <div className="bg-surface-card border-border-subtle rounded-xl border p-6 shadow-sm">
                                <h3 className="text-title-lg text-text-primary mb-4 font-semibold">
                                    Akses Cepat
                                </h3>
                                <div className="space-y-2">
                                    {[
                                        {
                                            label: 'Lihat KTA Digital',
                                            href: '/member/profil',
                                            icon: '🪪',
                                        },
                                        {
                                            label: 'Riwayat Kegiatan',
                                            href: '#',
                                            icon: '📊',
                                        },
                                        {
                                            label: 'Layanan Pengaduan',
                                            href: '#',
                                            icon: '💬',
                                        },
                                        {
                                            label: 'Panduan Anggota',
                                            href: '#',
                                            icon: '📖',
                                        },
                                    ].map((item, i) => (
                                        <a
                                            key={i}
                                            className="hover:bg-surface-tint text-body-sm text-text-secondary hover:text-brand-primary flex items-center gap-3 rounded-lg p-3 transition-colors"
                                            href={item.href}
                                        >
                                            <span className="text-lg">
                                                {item.icon}
                                            </span>
                                            <span>{item.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
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
