import { Head } from "@inertiajs/react";

const statsOverview = [
    {
        label: "Total Anggota",
        value: "12.480",
        change: "+124",
        icon: "👥",
        bg: "bg-brand-primary-light",
    },
    {
        label: "Berita Dipublikasi",
        value: "847",
        change: "+23",
        icon: "📰",
        bg: "bg-accent-cyan-subtle",
    },
    {
        label: "Kegiatan Aktif",
        value: "56",
        change: "+8",
        icon: "📋",
        bg: "bg-status-success-bg",
    },
    {
        label: "KTA Pending",
        value: "8",
        change: "",
        icon: "🪪",
        bg: "bg-status-warning-bg",
    },
];

const beritaTerkini = [
    {
        judul: "Konferensi MWC NU Rampungkan Pembentukan Pengurus Ranting",
        status: "Diterbitkan",
        tanggal: "14 Apr 2025",
    },
    {
        judul: "Program Dakwah Digital: Kanal Youtube Resmi Kajian Kitab Kuning",
        status: "Diterbitkan",
        tanggal: "12 Apr 2025",
    },
    {
        judul: "LAZISNU Distribusikan Zakat Fitrah kepada 850 Mustahik",
        status: "Diterbitkan",
        tanggal: "10 Apr 2025",
    },
    {
        judul: "Pelatihan Digital Marketing bagi Pelaku UMKM",
        status: "Draf",
        tanggal: "08 Apr 2025",
    },
    {
        judul: "IPNU-IPPNU Gelar Makesta Raya",
        status: "Diterbitkan",
        tanggal: "05 Apr 2025",
    },
];

const anggotaTerkini = [
    {
        nama: "Muhammad Rizki",
        banom: "IPNU",
        status: "Terverifikasi",
        foto: "MR",
    },
    {
        nama: "Siti Nurhaliza",
        banom: "IPPNU",
        status: "Menunggu Verifikasi",
        foto: "SN",
    },
    {
        nama: "Abdullah Mansyur",
        banom: "GP Ansor",
        status: "Terverifikasi",
        foto: "AM",
    },
    {
        nama: "Fatimah Azzahra",
        banom: "Fatayat NU",
        status: "Menunggu Verifikasi",
        foto: "FA",
    },
    {
        nama: "Hasanuddin Ali",
        banom: "Banser",
        status: "Terverifikasi",
        foto: "HA",
    },
];

const navSections = [
    {
        title: "Ikhtisar",
        items: [{ label: "Overview", icon: "📊", active: true }],
    },
    {
        title: "Konten & Publikasi",
        items: [
            { label: "Warta & Berita", icon: "📰", active: false },
            { label: "Kegiatan & Agenda", icon: "📅", active: false },
        ],
    },
    {
        title: "Keanggotaan & Kader",
        items: [
            { label: "Anggota & Kader", icon: "👥", active: false, badge: "" },
            { label: "Verifikasi KTA", icon: "✅", active: false, badge: "8" },
        ],
    },
    {
        title: "Struktural",
        items: [{ label: "6 Badan Otonom", icon: "🏢", active: false }],
    },
    {
        title: "Administrasi",
        items: [{ label: "Pengaturan Sekretariat", icon: "⚙️", active: false }],
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
            <div className="min-h-screen flex bg-surface-warm">
                {/* Sidebar */}
                <aside className="fixed top-0 left-0 h-screen w-64 border-r bg-surface-card border-border-subtle shadow-sm flex flex-col justify-between p-4 z-30">
                    <div className="flex flex-col h-full overflow-y-auto pr-1">
                        {/* Brand */}
                        <div className="flex items-center gap-4 pb-4 border-b border-border-light">
                            <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                                <svg
                                    className="w-5 h-5"
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
                                <span className="text-title-lg font-bold text-brand-primary tracking-tight">
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
                                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-brand-primary text-white text-label-md font-semibold hover:bg-brand-primary-hover active:scale-[0.98] transition-all shadow-sm"
                                type="button"
                            >
                                <svg
                                    className="w-4 h-4"
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
                                    <p className="px-2 text-caption text-text-muted tracking-wider uppercase mb-2">
                                        {section.title}
                                    </p>
                                    <nav className="space-y-1">
                                        {section.items.map((item, ii) => (
                                            <a
                                                key={ii}
                                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-body-sm transition-colors duration-150 ${item.active ? "bg-brand-primary-light text-brand-primary font-semibold" : "text-text-secondary hover:text-text-primary hover:bg-brand-primary-light"}`}
                                                href="#"
                                            >
                                                <span className="text-base">
                                                    {item.icon}
                                                </span>
                                                <span className="flex-1">
                                                    {item.label}
                                                </span>
                                                {item.badge && (
                                                    <span className="px-2 py-0.5 rounded-full text-caption bg-status-warning-bg text-status-warning border border-status-warning/30 font-semibold">
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
                        <div className="mt-4 pt-4 border-t border-border-light">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-xs">
                                    AD
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-label-sm text-text-primary font-semibold truncate">
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
                <div className="flex-1 ml-64">
                    {/* Top Bar */}
                    <header className="bg-surface-card border-b border-border-light shadow-sm sticky top-0 z-20 h-16 flex items-center justify-between px-8">
                        <div className="flex items-center gap-4">
                            <h1 className="text-title-lg text-text-primary font-semibold">
                                Overview Dashboard
                            </h1>
                            <span className="text-caption text-text-muted bg-surface-tint px-2 py-0.5 rounded-full">
                                Periode: Mei 2025
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                className="relative p-2 text-text-secondary hover:text-brand-primary hover:bg-brand-primary-light rounded-lg transition-colors"
                                title="Notifikasi"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>
                                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent-lime rounded-full ring-2 ring-surface-card"></span>
                            </button>
                            <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-xs">
                                AD
                            </div>
                        </div>
                    </header>

                    {/* Content */}
                    <main className="p-8">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {statsOverview.map((stat, i) => (
                                <div
                                    key={i}
                                    className="bg-surface-card border border-border-subtle rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div
                                            className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center text-xl`}
                                        >
                                            {stat.icon}
                                        </div>
                                        {stat.change && (
                                            <span className="text-label-sm text-status-success font-medium">
                                                {stat.change}
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-headline-md font-display text-text-primary font-bold block">
                                        {stat.value}
                                    </span>
                                    <span className="text-label-md text-text-secondary mt-1 block">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Warta & Berita */}
                            <section className="lg:col-span-8 bg-surface-card border border-border-subtle rounded-xl p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-6">
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
                                            <tr className="border-b border-border-subtle">
                                                <th className="text-left py-3 px-4 text-label-sm text-text-secondary font-semibold uppercase tracking-wider">
                                                    Judul
                                                </th>
                                                <th className="text-left py-3 px-4 text-label-sm text-text-secondary font-semibold uppercase tracking-wider">
                                                    Status
                                                </th>
                                                <th className="text-left py-3 px-4 text-label-sm text-text-secondary font-semibold uppercase tracking-wider">
                                                    Tanggal
                                                </th>
                                                <th className="text-left py-3 px-4 text-label-sm text-text-secondary font-semibold uppercase tracking-wider">
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {beritaTerkini.map((item, i) => (
                                                <tr
                                                    key={i}
                                                    className="border-b border-border-light hover:bg-surface-tint transition-colors"
                                                >
                                                    <td className="py-4 px-4 text-body-sm text-text-primary font-medium max-w-[300px] truncate">
                                                        {item.judul}
                                                    </td>
                                                    <td className="py-4 px-4">
                                                        <span
                                                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-label-sm font-medium ${item.status === "Diterbitkan" ? "bg-status-success-bg text-status-success border border-brand-secondary" : "bg-status-warning-bg text-status-warning border border-status-warning/30"}`}
                                                        >
                                                            {item.status}
                                                        </span>
                                                    </td>
                                                    <td className="py-4 px-4 text-body-sm text-text-secondary">
                                                        {item.tanggal}
                                                    </td>
                                                    <td className="py-4 px-4">
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
                            <aside className="lg:col-span-4 space-y-6">
                                <div className="bg-surface-card border border-border-subtle rounded-xl p-6 shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-title-lg text-text-primary font-semibold">
                                            Verifikasi KTA
                                        </h3>
                                        <span className="px-2 py-0.5 rounded-full text-caption bg-status-warning-bg text-status-warning border border-status-warning/30 font-semibold">
                                            8 Pending
                                        </span>
                                    </div>
                                    <div className="space-y-3">
                                        {anggotaTerkini.map((item, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-3 p-3 bg-surface-tint border border-border-light rounded-lg"
                                            >
                                                <div className="w-9 h-9 rounded-full bg-brand-primary-light border border-brand-primary/20 flex items-center justify-center text-brand-primary font-bold text-xs shrink-0">
                                                    {item.foto}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-label-sm text-text-primary font-semibold truncate">
                                                        {item.nama}
                                                    </p>
                                                    <p className="text-caption text-text-muted">
                                                        {item.banom}
                                                    </p>
                                                </div>
                                                <span
                                                    className={`text-[10px] px-2 py-0.5 rounded-full font-medium shrink-0 ${item.status === "Terverifikasi" ? "bg-status-success-bg text-status-success" : "bg-status-warning-bg text-status-warning"}`}
                                                >
                                                    {item.status}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <a
                                        className="mt-4 w-full py-2 border border-brand-primary text-brand-primary hover:bg-brand-primary-light rounded-lg text-center text-label-sm font-semibold transition-colors flex items-center justify-center gap-1"
                                        href="#"
                                    >
                                        <span>Lihat Semua</span>
                                        <svg
                                            className="w-3.5 h-3.5"
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
                                <div className="bg-surface-card border border-border-subtle rounded-xl p-6 shadow-sm">
                                    <h3 className="text-title-lg text-text-primary font-semibold mb-4">
                                        Aksi Cepat
                                    </h3>
                                    <div className="space-y-2">
                                        {[
                                            {
                                                label: "Publikasi Berita Baru",
                                                icon: "✏️",
                                            },
                                            {
                                                label: "Kelola Kegiatan",
                                                icon: "📅",
                                            },
                                            {
                                                label: "Verifikasi Anggota",
                                                icon: "✅",
                                            },
                                            {
                                                label: "Export Laporan",
                                                icon: "📊",
                                            },
                                        ].map((item, i) => (
                                            <button
                                                key={i}
                                                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-surface-tint text-body-sm text-text-secondary hover:text-brand-primary transition-colors text-left"
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
