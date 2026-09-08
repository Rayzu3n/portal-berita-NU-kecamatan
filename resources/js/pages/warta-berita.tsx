import { Head } from '@inertiajs/react';

const beritaList = [
    {
        judul: 'Konferensi MWC NU Kecamatan Rampungkan Pembentukan Pengurus Ranting se-Kecamatan',
        ringkasan:
            'Sinergi struktural diperkuat hingga tingkat akar rumput desa. Seluruh perwakilan ranting menetapkan kepengurusan baru guna menyongsong amanat khidmat periode 2025-2030.',
        kategori: 'Keorganisasian',
        tanggal: '14 April 2025',
        penulis: 'Humas Tanfidziyah',
        icon: '🔗',
    },
    {
        judul: 'Program Dakwah Digital: MWC NU Luncurkan Kanal Youtube Resmi Kajian Kitab Kuning',
        ringkasan:
            'Transformasi dakwah literasi kitab kuning melalui media audio visual berbasis teknologi cloud untuk menjangkau diaspora Nahdliyin di seluruh penjuru nusantara.',
        kategori: 'Keagamaan & Kajian',
        tanggal: '12 April 2025',
        penulis: 'LTN NU Kecamatan',
        icon: '📻',
    },
    {
        judul: 'LAZISNU Distribusikan Zakat Fitrah kepada 850 Mustahik di 14 Desa',
        ringkasan:
            'Pendistribusian zakat fitrah terkoordinasi bersama 14 pengurus ranting berhasil menyalurkan beras dan dana tunai kepada keluarga mustahik tepat waktu menjelang Idul Fitri.',
        kategori: 'Sosial & Kemasyarakatan',
        tanggal: '10 April 2025',
        penulis: 'LAZISNU Kecamatan',
        icon: '🤲',
    },
    {
        judul: 'Fatayat NU Sukseskan Program Pencegahan Stunting Balita di Posyandu Binaan',
        ringkasan:
            'Pemberian makanan tambahan bernutrisi tinggi dan edukasi pola asuh higienis digelar serentak di 5 titik posyandu pedesaan.',
        kategori: 'Sosial & Kemasyarakatan',
        tanggal: '07 Mei 2025',
        penulis: 'PAC Fatayat NU',
        icon: '👨‍👩‍👧',
    },
    {
        judul: 'IPNU-IPPNU Gelar Makesta Raya Sambut Pelajar Baru di Tingkat Ranting',
        ringkasan:
            'Masa Kesetiaan Anggota (Makesta) diikuti lebih dari 200 kader muda pelajar SMP/SMA sederajat untuk mencetak generasi Aswaja berwawasan kebangsaan.',
        kategori: 'Kegiatan Banom',
        tanggal: '05 Mei 2025',
        penulis: 'PAC IPNU-IPPNU',
        icon: '👥',
    },
    {
        judul: 'Pelatihan Digital Marketing bagi Pelaku UMKM Warga Nahdliyin',
        ringkasan:
            'Kolaborasi Lembaga Perekonomian NU membekali 60 pengusaha mikro lokal dengan keahlian pemasaran online dan sertifikasi halal gratis.',
        kategori: 'Ekonomi Umat',
        tanggal: '08 Mei 2025',
        penulis: 'LPNU Kecamatan',
        icon: '🏪',
    },
];

const kategoriFilter = [
    'Semua Kategori',
    'Keorganisasian',
    'Pendidikan',
    'Keagamaan & Kajian',
    'Sosial & Kemasyarakatan',
    'Kegiatan Banom',
    'Ekonomi Umat',
];

export default function WartaBerita() {
    return (
        <>
            <Head title="Warta & Berita" />
            <div className="flex min-h-screen flex-col">
                {/* Header */}
                <header className="border-border-subtle bg-surface-card sticky top-0 z-50 w-full border-b">
                    <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-4 md:px-8">
                        <a
                            className="group flex items-center gap-4"
                            href="/beranda"
                        >
                            <div className="bg-brand-primary group-hover:bg-brand-primary-hover flex h-10 w-10 items-center justify-center rounded-lg text-white shadow-sm transition-colors duration-150">
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
                            <div className="flex flex-col">
                                <span className="text-title-md font-display text-brand-primary leading-none font-semibold tracking-tight">
                                    MWC NU Kecamatan
                                </span>
                                <span className="text-caption text-text-secondary mt-0.5">
                                    Nahdlatul Ulama Tingkat Kecamatan
                                </span>
                            </div>
                        </a>

                        <nav className="hidden items-center gap-8 md:flex">
                            <a
                                className="text-text-secondary hover:text-text-primary text-label-md transition-colors duration-150"
                                href="/beranda"
                            >
                                Beranda
                            </a>
                            <a
                                className="text-brand-primary border-brand-primary text-label-md border-b-2 pb-1 font-semibold"
                                href="/warta-berita"
                            >
                                Berita
                            </a>
                            <a
                                className="text-text-secondary hover:text-text-primary text-label-md transition-colors duration-150"
                                href="#"
                            >
                                Kegiatan Banom
                            </a>
                            <a
                                className="text-text-secondary hover:text-text-primary text-label-md transition-colors duration-150"
                                href="#"
                            >
                                Badan Otonom
                            </a>
                            <a
                                className="text-text-secondary hover:text-text-primary text-label-md transition-colors duration-150"
                                href="#"
                            >
                                Tentang Kami
                            </a>
                        </nav>

                        <div className="hidden items-center gap-4 md:flex">
                            <a
                                className="bg-brand-primary hover:bg-brand-primary-hover text-label-md inline-flex h-10 items-center gap-2 rounded-lg px-6 text-white shadow-sm transition-all duration-200"
                                href="#"
                            >
                                <span>Portal Anggota</span>
                            </a>
                        </div>

                        <button
                            className="text-text-primary hover:text-brand-primary rounded-lg p-2 md:hidden"
                            aria-label="Buka Menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M3 12h18M3 6h18M3 18h18" />
                            </svg>
                        </button>
                    </div>
                </header>

                {/* Main Content */}
                <main className="mx-auto w-full max-w-[1280px] px-4 py-8 md:px-8">
                    {/* Breadcrumb */}
                    <nav
                        aria-label="Breadcrumb"
                        className="text-label-sm text-text-secondary mb-4 flex items-center gap-2"
                    >
                        <a
                            className="hover:text-brand-primary transition-colors duration-150"
                            href="/beranda"
                        >
                            Beranda
                        </a>
                        <svg
                            className="text-border-subtle h-3.5 w-3.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                        <span className="text-text-primary font-semibold">
                            Warta & Berita
                        </span>
                    </nav>

                    {/* Page Banner */}
                    <section className="bg-surface-card border-border-subtle relative mb-8 overflow-hidden rounded-xl border p-8 shadow-sm md:p-12">
                        <div className="relative z-10 max-w-3xl">
                            <div className="bg-brand-primary-light border-brand-primary/20 text-brand-primary text-label-sm mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-2">
                                <span className="bg-accent-lime h-2 w-2 animate-pulse rounded-full"></span>
                                <span>Warta Resmi & Publikasi Aswaja</span>
                            </div>
                            <h1 className="text-headline-lg-mobile md:text-display-hero font-display text-text-primary mb-4 leading-tight">
                                Warta & Berita NU Kecamatan
                            </h1>
                            <p className="text-body-lg text-text-secondary max-w-2xl">
                                Kabar resmi, dokumentasi kegiatan dakwah, kajian
                                keagamaan, dan warta organisasi MWC NU beserta
                                Badan Otonom tingkat Kecamatan.
                            </p>
                        </div>
                        <div className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/3 items-center justify-end pr-8 opacity-5 md:flex">
                            <svg
                                className="text-brand-primary h-60 w-60"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                        </div>
                    </section>

                    {/* Search & Filter */}
                    <section className="bg-surface-card border-border-subtle mb-8 rounded-xl border p-6 shadow-sm">
                        <div className="flex flex-col items-stretch justify-between gap-4 lg:flex-row lg:items-center">
                            <div className="relative max-w-lg flex-1">
                                <svg
                                    className="text-text-muted absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                                <input
                                    className="bg-surface-card border-border-subtle text-text-primary placeholder:text-text-muted text-body-md focus:border-border-focus focus:ring-brand-primary/20 h-11 w-full rounded-lg border pr-4 pl-11 transition-all duration-150 outline-none focus:ring-2"
                                    placeholder="Cari artikel, topik, atau kegiatan..."
                                    type="text"
                                />
                            </div>
                            <div className="flex w-full items-center gap-3 self-end sm:w-auto lg:self-auto">
                                <label
                                    className="text-label-sm text-text-secondary hidden whitespace-nowrap sm:inline-block"
                                    htmlFor="sort-select"
                                >
                                    Urutkan:
                                </label>
                                <div className="relative w-full sm:w-48">
                                    <select
                                        className="bg-surface-card border-border-subtle text-text-primary text-label-md focus:border-border-focus focus:ring-brand-primary/20 h-11 w-full appearance-none rounded-lg border pr-8 pl-4 outline-none focus:ring-2"
                                        id="sort-select"
                                    >
                                        <option>Terbaru</option>
                                        <option>Terpopuler</option>
                                        <option>Agenda Mendatang</option>
                                    </select>
                                    <svg
                                        className="text-text-muted pointer-events-none absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="border-border-light mt-6 flex items-center gap-2 overflow-x-auto border-t pt-4 pb-2">
                            {kategoriFilter.map((kat, i) => (
                                <button
                                    key={i}
                                    className={`text-label-sm h-9 rounded-full px-4 whitespace-nowrap transition-colors duration-150 ${i === 0 ? 'bg-brand-primary text-white shadow-sm' : 'bg-surface-tint border-border-subtle text-text-secondary hover:text-brand-primary hover:border-brand-primary/40 border'}`}
                                >
                                    {kat}
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Featured Article */}
                    <article className="bg-surface-card border-border-subtle mb-12 overflow-hidden rounded-xl border shadow-sm transition-all duration-200 hover:shadow-md">
                        <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
                            <div className="bg-brand-primary-light border-border-subtle relative flex min-h-[300px] flex-col justify-between border-b p-8 lg:col-span-6 lg:border-r lg:border-b-0">
                                <div className="flex items-center justify-between">
                                    <span className="bg-surface-card border-brand-primary text-brand-primary text-label-sm inline-flex items-center gap-2 rounded-full border px-3 py-1">
                                        <svg
                                            className="h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09z" />
                                        </svg>
                                        Sorotan Utama
                                    </span>
                                    <span className="text-caption text-text-secondary">
                                        Warta Khusus Syuriyah
                                    </span>
                                </div>
                                <div className="my-auto py-6 text-center">
                                    <div className="bg-surface-card border-border-subtle text-brand-primary mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border shadow-sm">
                                        <svg
                                            className="h-10 w-10"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                        </svg>
                                    </div>
                                    <p className="text-headline-sm font-display text-brand-primary font-medium">
                                        Kajian Aswaja An-Nahdliyah
                                    </p>
                                    <p className="text-caption text-text-muted">
                                        Dokumentasi Pemikiran & Risalah Ilmiah
                                    </p>
                                </div>
                                <div className="text-text-secondary text-label-sm border-brand-primary/10 flex items-center justify-between border-t pt-4">
                                    <span>Edisi: Syawal 1446 H</span>
                                    <span className="flex items-center gap-1">
                                        <svg
                                            className="h-3.5 w-3.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                                        </svg>
                                        4 Menit Baca
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between p-8 md:p-10 lg:col-span-6">
                                <div>
                                    <div className="mb-4 flex flex-wrap items-center gap-3">
                                        <span className="bg-status-success-bg text-status-success border-brand-secondary text-label-sm rounded-full border px-3 py-1">
                                            Keagamaan & Kajian
                                        </span>
                                        <span className="text-body-sm text-text-secondary">
                                            Rabu, 16 April 2025
                                        </span>
                                    </div>
                                    <h2 className="text-headline-md md:text-headline-lg font-display text-text-primary hover:text-brand-primary mb-4 cursor-pointer transition-colors duration-150">
                                        Muktamar Pemikiran Aswaja: Meneguhkan
                                        Nilai Moderasi Beragama di Kalangan
                                        Generasi Muda Kecamatan
                                    </h2>
                                    <p className="text-body-md text-text-secondary mb-6 line-clamp-4">
                                        Majelis Wakil Cabang Nahdlatul Ulama
                                        menggelar forum dialog pemikiran lintas
                                        generasi sebagai ikhtiar memperkuat
                                        benteng aqidah Ahlussunnah wal Jama'ah
                                        an-Nahdliyah. Forum ini menitikberatkan
                                        pada penguatan prinsip tawasuth
                                        (moderat), tawazun (seimbang), dan
                                        tasamuh (toleran) dalam merespons
                                        dinamika sosial-kemasyarakatan era
                                        digital.
                                    </p>
                                </div>
                                <div className="border-border-light flex items-center justify-between border-t pt-6">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-surface-tint border-border-subtle text-brand-primary text-label-md flex h-10 w-10 items-center justify-center rounded-full border font-semibold">
                                            LTN
                                        </div>
                                        <div>
                                            <p className="text-label-md text-text-primary">
                                                Lembaga Ta'lif wan Nasyr (LTN)
                                            </p>
                                            <p className="text-caption text-text-muted">
                                                Redaksi Resmi MWC NU
                                            </p>
                                        </div>
                                    </div>
                                    <a
                                        className="bg-brand-primary text-label-md hover:bg-brand-primary-hover inline-flex h-11 items-center justify-center gap-2 rounded-lg px-6 text-white transition-all duration-150"
                                        href="#"
                                    >
                                        <span>Baca Selengkapnya</span>
                                        <svg
                                            className="h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Two Column: News + Sidebar */}
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                        <section className="lg:col-span-8">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="text-brand-primary h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5" />
                                    </svg>
                                    <h2 className="text-headline-sm font-display text-text-primary">
                                        Daftar Warta Terbaru
                                    </h2>
                                </div>
                                <span className="text-caption text-text-secondary">
                                    Halaman 1 dari 6
                                </span>
                            </div>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {beritaList.map((item, i) => (
                                    <article
                                        key={i}
                                        className="bg-surface-card border-border-subtle hover:border-brand-primary/40 flex flex-col overflow-hidden rounded-xl border transition-all duration-200 hover:shadow-md"
                                    >
                                        <div className="bg-surface-tint border-border-subtle relative flex h-44 flex-col items-center justify-center border-b p-4">
                                            <span className="mb-2 text-4xl opacity-30">
                                                {item.icon}
                                            </span>
                                            <span className="text-caption text-text-secondary">
                                                {item.kategori}
                                            </span>
                                            <span className="bg-surface-card border-border-subtle text-label-sm text-brand-primary absolute top-3 left-3 rounded-full border px-3 py-0.5">
                                                {item.kategori}
                                            </span>
                                        </div>
                                        <div className="flex flex-1 flex-col justify-between p-6">
                                            <div>
                                                <p className="text-caption text-text-secondary mb-2">
                                                    {item.tanggal} •{' '}
                                                    {item.penulis}
                                                </p>
                                                <h3 className="text-headline-sm font-display text-text-primary hover:text-brand-primary mb-3 cursor-pointer leading-snug transition-colors">
                                                    {item.judul}
                                                </h3>
                                                <p className="text-body-sm text-text-secondary mb-4 line-clamp-3">
                                                    {item.ringkasan}
                                                </p>
                                            </div>
                                            <div className="border-border-light flex items-center justify-between border-t pt-4">
                                                <span className="text-caption text-text-muted">
                                                    Oleh: {item.penulis}
                                                </span>
                                                <a
                                                    className="text-label-sm text-brand-primary inline-flex items-center gap-1 hover:underline"
                                                    href="#"
                                                >
                                                    Rincian{' '}
                                                    <svg
                                                        className="h-3.5 w-3.5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="mt-8 flex items-center justify-center gap-2">
                                <button
                                    className="border-border-subtle bg-surface-card text-text-secondary text-label-md hover:border-brand-primary hover:text-brand-primary flex h-10 w-10 items-center justify-center rounded-lg border transition-colors"
                                    disabled
                                >
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M15.75 19.5 8.25 12l7.5-7.5" />
                                    </svg>
                                </button>
                                <button className="bg-brand-primary text-label-md flex h-10 w-10 items-center justify-center rounded-lg font-semibold text-white shadow-sm">
                                    1
                                </button>
                                <button className="border-border-subtle bg-surface-card text-text-secondary text-label-md hover:border-brand-primary hover:text-brand-primary flex h-10 w-10 items-center justify-center rounded-lg border transition-colors">
                                    2
                                </button>
                                <button className="border-border-subtle bg-surface-card text-text-secondary text-label-md hover:border-brand-primary hover:text-brand-primary flex h-10 w-10 items-center justify-center rounded-lg border transition-colors">
                                    3
                                </button>
                                <button className="border-border-subtle bg-surface-card text-text-secondary text-label-md hover:border-brand-primary hover:text-brand-primary flex h-10 w-10 items-center justify-center rounded-lg border transition-colors">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </section>

                        {/* Sidebar */}
                        <aside className="space-y-6 lg:col-span-4">
                            {/* Kategori Warta */}
                            <div className="bg-surface-card border-border-subtle rounded-xl border p-6 shadow-sm">
                                <h3 className="text-title-lg text-text-primary mb-4 font-semibold">
                                    Kategori Warta
                                </h3>
                                <div className="space-y-2">
                                    {[
                                        'Keorganisasian',
                                        'Pendidikan',
                                        'Keagamaan & Kajian',
                                        'Sosial & Kemasyarakatan',
                                        'Kegiatan Banom',
                                        'Ekonomi Umat',
                                    ].map((kat, i) => (
                                        <a
                                            key={i}
                                            className="hover:bg-surface-tint text-body-sm text-text-secondary hover:text-brand-primary flex items-center justify-between rounded-lg px-3 py-2 transition-colors"
                                            href="#"
                                        >
                                            <span>{kat}</span>
                                            <span className="text-caption text-text-muted bg-surface-tint rounded-full px-2 py-0.5">
                                                {Math.floor(
                                                    Math.random() * 15,
                                                ) + 3}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Warta Populer */}
                            <div className="bg-surface-card border-border-subtle rounded-xl border p-6 shadow-sm">
                                <h3 className="text-title-lg text-text-primary mb-4 font-semibold">
                                    Warta Populer
                                </h3>
                                <div className="space-y-4">
                                    {beritaList.slice(0, 4).map((item, i) => (
                                        <a
                                            key={i}
                                            className="group flex gap-3"
                                            href="#"
                                        >
                                            <span className="bg-brand-primary-light text-brand-primary text-label-md flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold">
                                                {i + 1}
                                            </span>
                                            <div>
                                                <p className="text-body-sm text-text-primary group-hover:text-brand-primary line-clamp-2 leading-snug transition-colors">
                                                    {item.judul}
                                                </p>
                                                <p className="text-caption text-text-muted mt-1">
                                                    {item.tanggal}
                                                </p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </main>

                {/* Footer */}
                <footer className="border-border-subtle bg-surface-container mt-16 w-full border-t px-4 py-12 md:px-8">
                    <div className="mx-auto max-w-[1280px] space-y-10">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
                            <div className="space-y-4 lg:col-span-5">
                                <div className="flex items-center gap-4">
                                    <div className="bg-brand-primary flex h-10 w-10 items-center justify-center rounded-lg text-white">
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
                                    <span className="text-headline-md font-display text-brand-primary font-semibold">
                                        MWC NU Kecamatan
                                    </span>
                                </div>
                                <p className="text-body-sm text-text-secondary max-w-sm">
                                    Gedung Sekretariat Bersama MWC NU Kecamatan,
                                    Jl. Raya Santri No. 1926, Jawa Timur,
                                    Indonesia.
                                </p>
                            </div>
                            <div className="space-y-4 lg:col-span-3">
                                <h4 className="text-headline-sm font-display text-brand-primary font-semibold">
                                    Tautan Kelembagaan
                                </h4>
                                <ul className="text-body-sm space-y-2">
                                    <li>
                                        <a
                                            className="text-text-secondary hover:text-brand-primary transition-colors"
                                            href="#"
                                        >
                                            Tentang MWC NU
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-text-secondary hover:text-brand-primary transition-colors"
                                            href="#"
                                        >
                                            Struktur Pengurus
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-text-secondary hover:text-brand-primary transition-colors"
                                            href="#"
                                        >
                                            Lembaga & Banom
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-text-secondary hover:text-brand-primary transition-colors"
                                            href="/warta-berita"
                                        >
                                            Warta & Berita
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4 lg:col-span-4">
                                <h4 className="text-headline-sm font-display text-brand-primary font-semibold">
                                    Layanan & Transparansi
                                </h4>
                                <ul className="text-body-sm space-y-2">
                                    <li>
                                        <a
                                            className="text-text-secondary hover:text-brand-primary transition-colors"
                                            href="#"
                                        >
                                            Agenda Kegiatan
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-text-secondary hover:text-brand-primary transition-colors"
                                            href="#"
                                        >
                                            Transparansi Program
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-text-secondary hover:text-brand-primary transition-colors"
                                            href="#"
                                        >
                                            Kebijakan Privasi
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-text-secondary hover:text-brand-primary transition-colors"
                                            href="#"
                                        >
                                            Kontak Sekretariat
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-border-subtle text-text-secondary text-label-sm flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row">
                            <p>
                                © 2025 Majelis Wakil Cabang Nahdlatul Ulama (MWC
                                NU) Kecamatan. Hak Cipta Dilindungi.
                            </p>
                        </div>
                    </div>
                </footer>

                {/* Mobile Bottom Navigation */}
                <aside className="bg-surface-card/95 border-border-light sticky bottom-0 z-40 flex w-full items-center justify-around border-t px-4 py-2 shadow-lg backdrop-blur-md md:hidden">
                    <a
                        className="text-text-secondary hover:text-brand-primary flex h-11 w-14 flex-col items-center justify-center transition-colors"
                        href="/beranda"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <span className="mt-0.5 text-[10px] leading-tight">
                            Beranda
                        </span>
                    </a>
                    <a
                        className="text-brand-primary flex h-11 w-14 flex-col items-center justify-center font-semibold"
                        href="/warta-berita"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5" />
                        </svg>
                        <span className="mt-0.5 text-[10px] leading-tight">
                            Berita
                        </span>
                    </a>
                    <a
                        className="text-text-secondary hover:text-brand-primary flex h-11 w-14 flex-col items-center justify-center transition-colors"
                        href="#kegiatan"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                        <span className="mt-0.5 text-[10px] leading-tight">
                            Agenda
                        </span>
                    </a>
                    <a
                        className="text-text-secondary hover:text-brand-primary flex h-11 w-14 flex-col items-center justify-center transition-colors"
                        href="#banom"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" />
                        </svg>
                        <span className="mt-0.5 text-[10px] leading-tight">
                            Banom
                        </span>
                    </a>
                    <a
                        className="text-text-secondary hover:text-brand-primary flex h-11 w-14 flex-col items-center justify-center transition-colors"
                        href="#"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                        <span className="mt-0.5 text-[10px] leading-tight">
                            KTA
                        </span>
                    </a>
                </aside>
            </div>
        </>
    );
}
