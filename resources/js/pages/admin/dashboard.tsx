import { Head } from '@inertiajs/react';

const statsOverview = [
    {
        label: 'Total Anggota',
        value: '12.480',
        change: '+124',
        icon: '👥',
        bg: 'bg-brand-primary-light',
    },
    {
        label: 'Berita Dipublikasi',
        value: '847',
        change: '+23',
        icon: '📰',
        bg: 'bg-accent-cyan-subtle',
    },
    {
        label: 'Kegiatan Aktif',
        value: '56',
        change: '+8',
        icon: '📋',
        bg: 'bg-status-success-bg',
    },
    {
        label: 'KTA Pending',
        value: '8',
        change: '',
        icon: '🪪',
        bg: 'bg-status-warning-bg',
    },
];

const beritaTerkini = [
    {
        judul: 'Konferensi MWC NU Rampungkan Pembentukan Pengurus Ranting',
        status: 'Diterbitkan',
        tanggal: '14 Apr 2025',
    },
    {
        judul: 'Program Dakwah Digital: Kanal Youtube Resmi Kajian Kitab Kuning',
        status: 'Diterbitkan',
        tanggal: '12 Apr 2025',
    },
    {
        judul: 'LAZISNU Distribusikan Zakat Fitrah kepada 850 Mustahik',
        status: 'Diterbitkan',
        tanggal: '10 Apr 2025',
    },
    {
        judul: 'Pelatihan Digital Marketing bagi Pelaku UMKM',
        status: 'Draf',
        tanggal: '08 Apr 2025',
    },
    {
        judul: 'IPNU-IPPNU Gelar Makesta Raya',
        status: 'Diterbitkan',
        tanggal: '05 Apr 2025',
    },
];

const anggotaTerkini = [
    {
        nama: 'Muhammad Rizki',
        banom: 'IPNU',
        status: 'Terverifikasi',
        foto: 'MR',
    },
    {
        nama: 'Siti Nurhaliza',
        banom: 'IPPNU',
        status: 'Menunggu Verifikasi',
        foto: 'SN',
    },
    {
        nama: 'Abdullah Mansyur',
        banom: 'GP Ansor',
        status: 'Terverifikasi',
        foto: 'AM',
    },
    {
        nama: 'Fatimah Azzahra',
        banom: 'Fatayat NU',
        status: 'Menunggu Verifikasi',
        foto: 'FA',
    },
    {
        nama: 'Hasanuddin Ali',
        banom: 'Banser',
        status: 'Terverifikasi',
        foto: 'HA',
    },
];

const navSections = [
    {
        title: 'Ikhtisar',
        items: [{ label: 'Overview', icon: '📊', active: true }],
    },
    {
        title: 'Konten & Publikasi',
        items: [
            { label: 'Warta & Berita', icon: '📰', active: false },
            { label: 'Kegiatan & Agenda', icon: '📅', active: false },
        ],
    },
    {
        title: 'Keanggotaan & Kader',
        items: [
            { label: 'Anggota & Kader', icon: '👥', active: false, badge: '' },
            { label: 'Verifikasi KTA', icon: '✅', active: false, badge: '8' },
        ],
    },
    {
        title: 'Struktural',
        items: [{ label: '6 Badan Otonom', icon: '🏢', active: false }],
    },
    {
        title: 'Administrasi',
        items: [{ label: 'Pengaturan Sekretariat', icon: '⚙️', active: false }],
    },
];

type NavigationItem = {
    label: string;
    icon: string;
    active: boolean;
    badge?: string;
};

type NavigationSection = {
    title: string;
    items: NavigationItem[];
};

const typedNavSections: NavigationSection[] = navSections;

export default function AdminDashboard() {
    return (
        <>
            <Head title="Admin Dashboard" />
            <div className="bg-surface-warm flex min-h-screen">
                {/* Sidebar */}
                <aside className="bg-surface-card border-border-subtle fixed top-0 left-0 z-30 flex h-screen w-64 flex-col justify-between border-r p-4 shadow-sm">
                    <div className="flex h-full flex-col overflow-y-auto pr-1">
                        {/* Brand */}
                        <div className="border-border-light flex items-center gap-4 border-b pb-4">
                            <div className="bg-brand-primary flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-white shadow-sm">
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 0 0 0 18M12 3a14 14 0 0 1 0 18" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-title-lg text-brand-primary font-bold tracking-tight">
                                    MWC NU
                                </span>
                                <span className="text-caption text-text-secondary">
                                    Kecamatan Portal Administrasi
                                </span>
                            </div>
                        </div>

                        {/* Quick Action */}
                        <div className="pt-4 pb-2">
                            <button
                                className="bg-brand-primary text-label-md hover:bg-brand-primary-hover flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 font-semibold text-white shadow-sm transition-all active:scale-[0.98]"
                                type="button"
                            >
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                                </svg>
                                <span>Buat Kegiatan</span>
                            </button>
                        </div>

                        {/* Nav Sections */}
                        <div className="mt-2 flex-1">
                            {typedNavSections.map((section, si) => (
                                <div key={si} className="mt-4">
                                    <p className="text-caption text-text-muted mb-2 px-2 tracking-wider uppercase">
                                        {section.title}
                                    </p>
                                    <nav className="space-y-1">
                                        {section.items.map((item, ii) => (
                                            <a
                                                key={ii}
                                                className={`text-body-sm flex items-center gap-2 rounded-lg px-4 py-2 transition-colors duration-150 ${item.active ? 'bg-brand-primary-light text-brand-primary font-semibold' : 'text-text-secondary hover:text-text-primary hover:bg-brand-primary-light'}`}
                                                href="#"
                                            >
                                                <span className="text-base">
                                                    {item.icon}
                                                </span>
                                                <span className="flex-1">
                                                    {item.label}
                                                </span>
                                                {item.badge && (
                                                    <span className="text-caption bg-status-warning-bg text-status-warning border-status-warning/30 rounded-full border px-2 py-0.5 font-semibold">
                                                        {item.badge}
                                                    </span>
                                                )}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            ))}
                        </div>

                        {/* Bottom User */}
                        <div className="border-border-light mt-4 border-t pt-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-brand-primary flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white">
                                    AD
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-label-sm text-text-primary truncate font-semibold">
                                        Admin Sekretariat
                                    </p>
                                    <p className="text-caption text-text-muted">
                                        Pengurus Inti
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Area */}
                <div className="ml-64 flex-1">
                    {/* Top Bar */}
                    <header className="bg-surface-card border-border-light sticky top-0 z-20 flex h-16 items-center justify-between border-b px-8 shadow-sm">
                        <div className="flex items-center gap-4">
                            <h1 className="text-title-lg text-text-primary font-semibold">
                                Overview Dashboard
                            </h1>
                            <span className="text-caption text-text-muted bg-surface-tint rounded-full px-2 py-0.5">
                                Periode: Mei 2025
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                className="text-text-secondary hover:text-brand-primary hover:bg-brand-primary-light relative rounded-lg p-2 transition-colors"
                                title="Notifikasi"
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
                                <span className="bg-accent-lime ring-surface-card absolute top-1.5 right-1.5 h-2 w-2 rounded-full ring-2"></span>
                            </button>
                            <div className="bg-brand-primary flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white">
                                AD
                            </div>
                        </div>
                    </header>

                    {/* Content */}
                    <main className="p-8">
                        {/* Stats Grid */}
                        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {statsOverview.map((stat, i) => (
                                <div
                                    key={i}
                                    className="bg-surface-card border-border-subtle rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md"
                                >
                                    <div className="mb-4 flex items-center justify-between">
                                        <div
                                            className={`h-12 w-12 rounded-xl ${stat.bg} flex items-center justify-center text-xl`}
                                        >
                                            {stat.icon}
                                        </div>
                                        {stat.change && (
                                            <span className="text-label-sm text-status-success font-medium">
                                                {stat.change}
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-headline-md font-display text-text-primary block font-bold">
                                        {stat.value}
                                    </span>
                                    <span className="text-label-md text-text-secondary mt-1 block">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                            {/* Warta & Berita */}
                            <section className="bg-surface-card border-border-subtle rounded-xl border p-6 shadow-sm lg:col-span-8">
                                <div className="mb-6 flex items-center justify-between">
                                    <h2 className="text-title-lg text-text-primary font-semibold">
                                        Warta & Berita Terkini
                                    </h2>
                                    <a
                                        className="text-brand-primary text-label-sm font-semibold hover:underline"
                                        href="#"
                                    >
                                        Lihat Semua
                                    </a>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-border-subtle border-b">
                                                <th className="text-label-sm text-text-secondary px-4 py-3 text-left font-semibold tracking-wider uppercase">
                                                    Judul
                                                </th>
                                                <th className="text-label-sm text-text-secondary px-4 py-3 text-left font-semibold tracking-wider uppercase">
                                                    Status
                                                </th>
                                                <th className="text-label-sm text-text-secondary px-4 py-3 text-left font-semibold tracking-wider uppercase">
                                                    Tanggal
                                                </th>
                                                <th className="text-label-sm text-text-secondary px-4 py-3 text-left font-semibold tracking-wider uppercase">
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {beritaTerkini.map((item, i) => (
                                                <tr
                                                    key={i}
                                                    className="border-border-light hover:bg-surface-tint border-b transition-colors"
                                                >
                                                    <td className="text-body-sm text-text-primary max-w-[300px] truncate px-4 py-4 font-medium">
                                                        {item.judul}
                                                    </td>
                                                    <td className="px-4 py-4">
                                                        <span
                                                            className={`text-label-sm inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-medium ${item.status === 'Diterbitkan' ? 'bg-status-success-bg text-status-success border-brand-secondary border' : 'bg-status-warning-bg text-status-warning border-status-warning/30 border'}`}
                                                        >
                                                            {item.status}
                                                        </span>
                                                    </td>
                                                    <td className="text-body-sm text-text-secondary px-4 py-4">
                                                        {item.tanggal}
                                                    </td>
                                                    <td className="px-4 py-4">
                                                        <button className="text-brand-primary text-label-sm hover:underline">
                                                            Edit
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Verifikasi KTA Pending */}
                            <aside className="space-y-6 lg:col-span-4">
                                <div className="bg-surface-card border-border-subtle rounded-xl border p-6 shadow-sm">
                                    <div className="mb-4 flex items-center justify-between">
                                        <h3 className="text-title-lg text-text-primary font-semibold">
                                            Verifikasi KTA
                                        </h3>
                                        <span className="text-caption bg-status-warning-bg text-status-warning border-status-warning/30 rounded-full border px-2 py-0.5 font-semibold">
                                            8 Pending
                                        </span>
                                    </div>
                                    <div className="space-y-3">
                                        {anggotaTerkini.map((item, i) => (
                                            <div
                                                key={i}
                                                className="bg-surface-tint border-border-light flex items-center gap-3 rounded-lg border p-3"
                                            >
                                                <div className="bg-brand-primary-light border-brand-primary/20 text-brand-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold">
                                                    {item.foto}
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="text-label-sm text-text-primary truncate font-semibold">
                                                        {item.nama}
                                                    </p>
                                                    <p className="text-caption text-text-muted">
                                                        {item.banom}
                                                    </p>
                                                </div>
                                                <span
                                                    className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${item.status === 'Terverifikasi' ? 'bg-status-success-bg text-status-success' : 'bg-status-warning-bg text-status-warning'}`}
                                                >
                                                    {item.status}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <a
                                        className="border-brand-primary text-brand-primary hover:bg-brand-primary-light text-label-sm mt-4 flex w-full items-center justify-center gap-1 rounded-lg border py-2 text-center font-semibold transition-colors"
                                        href="#"
                                    >
                                        <span>Lihat Semua</span>
                                        <svg
                                            className="h-3.5 w-3.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </a>
                                </div>

                                {/* Quick Actions */}
                                <div className="bg-surface-card border-border-subtle rounded-xl border p-6 shadow-sm">
                                    <h3 className="text-title-lg text-text-primary mb-4 font-semibold">
                                        Aksi Cepat
                                    </h3>
                                    <div className="space-y-2">
                                        {[
                                            {
                                                label: 'Publikasi Berita Baru',
                                                icon: '✏️',
                                            },
                                            {
                                                label: 'Kelola Kegiatan',
                                                icon: '📅',
                                            },
                                            {
                                                label: 'Verifikasi Anggota',
                                                icon: '✅',
                                            },
                                            {
                                                label: 'Export Laporan',
                                                icon: '📊',
                                            },
                                        ].map((item, i) => (
                                            <button
                                                key={i}
                                                className="hover:bg-surface-tint text-body-sm text-text-secondary hover:text-brand-primary flex w-full items-center gap-3 rounded-lg p-3 text-left transition-colors"
                                            >
                                                <span className="text-lg">
                                                    {item.icon}
                                                </span>
                                                <span>{item.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
