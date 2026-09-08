import { Head } from '@inertiajs/react';

const beritaTerbaru = [
    {
        judul: 'Pengajian Rutin Ahad Pagi Majelis Wakil Cabang Dihadiri Ribuan Jamaah',
        ringkasan:
            "Kajian mendalam Kitab Risalah Ahlussunnah wal Jama'ah karya Hadratussyaikh KH. Hasyim Asy'ari meneguhkan kerukunan dan keteduhan bermasyarakat.",
        kategori: 'Keagamaan',
        tanggal: 'Ahad, 12 Mei 2025',
        penulis: 'Kader Dakwah',
        icon: '🕌',
        bg: 'bg-surface-tint',
    },
    {
        judul: 'Banser Siagakan Personel Relawan Tanggap Bencana Musim Hujan di 12 Desa',
        ringkasan:
            'Posko siaga bencana terpadu didirikan untuk percepatan evakuasi tanggap darurat, bantuan logistik, dan koordinasi dengan Badan Penanggulangan Bencana.',
        kategori: 'Kegiatan',
        tanggal: 'Sabtu, 10 Mei 2025',
        penulis: 'Satkoryon Banser',
        icon: '🛡️',
        bg: 'bg-brand-primary-light',
    },
    {
        judul: 'Pelatihan Digital Marketing bagi Pelaku UMKM Warga Nahdliyin',
        ringkasan:
            'Kolaborasi Lembaga Perekonomian NU membekali 60 pengusaha mikro lokal dengan keahlian pemasaran online dan sertifikasi halal gratis.',
        kategori: 'Ekonomi Umat',
        tanggal: 'Kamis, 08 Mei 2025',
        penulis: 'LPNU Kecamatan',
        icon: '🏪',
        bg: 'bg-accent-cyan-subtle',
    },
    {
        judul: 'Fatayat NU Sukseskan Program Pencegahan Stunting Balita di Posyandu Binaan',
        ringkasan:
            'Pemberian makanan tambahan bernutrisi tinggi dan edukasi pola asuh higienis digelar serentak di 5 titik posyandu pedesaan.',
        kategori: 'Sosial',
        tanggal: 'Rabu, 07 Mei 2025',
        penulis: 'PAC Fatayat NU',
        icon: '👨‍👩‍👧',
        bg: 'bg-surface-container',
    },
    {
        judul: 'IPNU-IPPNU Gelar Makesta Raya Sambut Pelajar Baru di Tingkat Ranting',
        ringkasan:
            'Masa Kesetiaan Anggota (Makesta) diikuti lebih dari 200 kader muda pelajar SMP/SMA sederajat untuk mencetak generasi Aswaja berwawasan kebangsaan.',
        kategori: 'Banom / Kaderisasi',
        tanggal: 'Senin, 05 Mei 2025',
        penulis: 'PAC IPNU-IPPNU',
        icon: '👥',
        bg: 'bg-accent-cyan-subtle',
    },
    {
        judul: 'Lembaga Amil Zakat NU (LAZISNU) Salurkan Beasiswa Santri Berprestasi',
        ringkasan:
            'Sebanyak 45 santri dari keluarga prasejahtera menerima beasiswa penuh biaya pondok pesantren dan peralatan penunjang studi kitab kuning.',
        kategori: 'Pendidikan',
        tanggal: 'Sabtu, 03 Mei 2025',
        penulis: 'Upzis LAZISNU',
        icon: '🎓',
        bg: 'bg-surface-tint',
    },
];

const kegiatan = [
    {
        bulan: 'MEI',
        tanggal: '18',
        hari: 'AHAD',
        banom: 'IPNU / IPPNU',
        status: 'Terbuka untuk Umum',
        judul: 'Kajian Pelajar Aswaja: Menangkal Hoaks dan Radikalisme di Media Sosial',
        deskripsi:
            'Diskusi santai dan pelatihan literasi digital kritis khusus pelajar se-Kecamatan dengan narasumber praktisi media.',
        waktu: '08:30 - 12:00 WIB',
        lokasi: "Aula KH. Hasyim Asy'ari",
        bgDate: 'bg-brand-primary-light',
        bgDateText: 'text-brand-primary',
    },
    {
        bulan: 'MEI',
        tanggal: '23',
        hari: "JUM'AT",
        banom: 'GP Ansor',
        status: 'Terbuka untuk Umum',
        judul: 'Majelis Dzikir dan Sholawat Rijalul Ansor Putaran Ranting Barat',
        deskripsi:
            'Silaturahim kebangsaan bulanan yang diisi dengan pembacaan Maulid Simthudduror dan santunan anak yatim.',
        waktu: '19:30 WIB - Selesai',
        lokasi: 'Masjid Baiturrahim Desa Sukamaju',
        bgDate: 'bg-surface-container',
        bgDateText: 'text-text-primary',
    },
    {
        bulan: 'MEI',
        tanggal: '25',
        hari: 'AHAD',
        banom: 'Muslimat NU',
        status: 'Terbuka untuk Umum',
        judul: "Pengajian Kubro Muslimat & Fatayat NU Sambut Bulan Dzulqa'dah",
        deskripsi:
            "Mau'idhoh hasanah oleh Nyai Hj. Pengasuh Pesantren Putri mengenai ketahanan keluarga sakinah mawaddah wa rahmah.",
        waktu: '08:00 - 11:30 WIB',
        lokasi: 'Gedung IPHI Kecamatan',
        bgDate: 'bg-brand-primary-light',
        bgDateText: 'text-brand-primary',
    },
    {
        bulan: 'JUNI',
        tanggal: '01',
        hari: 'AHAD',
        banom: 'Banser',
        status: 'Internal Satkoryon',
        judul: 'Apel Siaga & Latihan Gabungan Pertolongan Pertama Gawat Darurat (PPGD)',
        deskripsi:
            'Peningkatan kapasitas teknis Satuan Khusus Balantas dan Bagana menghadapi kontinjensi bencana alam regional.',
        waktu: '07:00 - 15:00 WIB',
        lokasi: 'Lapangan Olahraga Kecamatan',
        bgDate: 'bg-surface-container',
        bgDateText: 'text-text-primary',
    },
];

const banomList = [
    {
        abbr: 'IPNU',
        nama: 'Ikatan Pelajar Nahdlatul Ulama',
        kategori: 'Putra Pelajar',
        deskripsi:
            "Wadah kaderisasi pelajar, santri, dan mahasiswa putra tingkat kecamatan dalam mengawal aqidah Ahlussunnah wal Jama'ah.",
        aktivitas: 'Makesta Raya Semester Genap di 14 Ranting',
        badgeBg: 'bg-accent-cyan-subtle',
        badgeBorder: 'border-accent-cyan',
        badgeText: 'text-tertiary',
    },
    {
        abbr: 'IPPNU',
        nama: 'Ikatan Pelajar Putri Nahdlatul Ulama',
        kategori: 'Putri Pelajar',
        deskripsi:
            'Pusat pergerakan dan pembinaan kepemimpinan pelajar putri, santriwati, dan mahasiswi dengan semangat keilmuan dan akhlak karimah.',
        aktivitas: 'Workshop Jurnalistik & Literasi Media Santriwati',
        badgeBg: 'bg-accent-cyan-subtle',
        badgeBorder: 'border-accent-cyan',
        badgeText: 'text-tertiary',
    },
    {
        abbr: 'GP Ansor',
        nama: 'Gerakan Pemuda Ansor',
        kategori: 'Pemuda NU',
        deskripsi:
            'Garda terdepan gerakan kepemudaan, pertahanan nilai kebangsaan, penguatan ekonomi mandiri, dan pengabdian sosial umat.',
        aktivitas: 'Pelatihan Kepemimpinan Dasar (PKD) Angkatan VIII',
        badgeBg: 'bg-brand-primary-light',
        badgeBorder: 'border-brand-secondary',
        badgeText: 'text-brand-primary',
    },
    {
        abbr: 'Banser',
        nama: 'Barisan Ansor Serbaguna',
        kategori: 'Tenaga Inti Ansor',
        deskripsi:
            'Tenaga inti paramiliter sukarela untuk pengamanan para kiai, aset umat, tanggap kebencanaan, dan ketertiban masyarakat.',
        aktivitas: 'Posko Tanggap Bencana Banjir & Pengamanan Rumah Ibadah',
        badgeBg: 'bg-brand-primary-light',
        badgeBorder: 'border-brand-secondary',
        badgeText: 'text-brand-primary',
    },
    {
        abbr: 'Fatayat NU',
        nama: 'Fatayat Nahdlatul Ulama',
        kategori: 'Pemudi Nahdliyin',
        deskripsi:
            'Organisasi wanita muda Islam yang bergerak aktif dalam kesehatan ibu-anak, advokasi keluarga, dan pendidikan anak usia dini.',
        aktivitas: 'Penyuluhan Pencegahan Stunting Balita Desa',
        badgeBg: 'bg-surface-container',
        badgeBorder: 'border-border-subtle',
        badgeText: 'text-text-primary',
    },
    {
        abbr: 'Muslimat NU',
        nama: 'Muslimat Nahdlatul Ulama',
        kategori: 'Wanita & Ibu NU',
        deskripsi:
            'Pilar sosial keagamaan kaum ibu, membina jaringan majelis taklim, panti asuhan, dan lembaga kesejahteraan sosial keluarga.',
        aktivitas: 'Majelis Dzikir Asmaul Husna Akbar Tingkat Kecamatan',
        badgeBg: 'bg-surface-container',
        badgeBorder: 'border-border-subtle',
        badgeText: 'text-text-primary',
    },
];

export default function Beranda() {
    return (
        <>
            <Head title="Beranda" />
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
                                className="text-brand-primary border-brand-primary text-label-md border-b-2 pb-1 font-semibold"
                                href="/beranda"
                            >
                                Beranda
                            </a>
                            <a
                                className="text-text-secondary hover:text-text-primary text-label-md transition-colors duration-150"
                                href="/warta-berita"
                            >
                                Berita
                            </a>
                            <a
                                className="text-text-secondary hover:text-text-primary text-label-md transition-colors duration-150"
                                href="#kegiatan"
                            >
                                Kegiatan Banom
                            </a>
                            <a
                                className="text-text-secondary hover:text-text-primary text-label-md transition-colors duration-150"
                                href="#banom"
                            >
                                Badan Otonom
                            </a>
                            <a
                                className="text-text-secondary hover:text-text-primary text-label-md transition-colors duration-150"
                                href="#tentang"
                            >
                                Tentang Kami
                            </a>
                        </nav>

                        <div className="hidden items-center gap-4 md:flex">
                            <button
                                className="text-text-secondary hover:text-text-primary hover:bg-brand-primary-light rounded-lg p-2 transition-colors duration-150"
                                title="Cari informasi"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                            </button>
                            <a
                                className="border-brand-primary text-brand-primary hover:bg-brand-primary-light text-label-md inline-flex h-10 items-center gap-2 rounded-lg border px-4 transition-all duration-200"
                                href="#"
                            >
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                                <span>Portal Anggota</span>
                            </a>
                            <a
                                className="bg-brand-primary hover:bg-brand-primary-hover text-label-md inline-flex h-10 items-center gap-2 rounded-lg px-6 text-white shadow-sm transition-all duration-200"
                                href="#"
                            >
                                <span>Kontak</span>
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
                <main className="mx-auto w-full max-w-[1280px] flex-1 space-y-12 px-4 py-6 md:space-y-16 md:px-8 md:py-8">
                    {/* Breaking News Ticker */}
                    <section className="bg-surface-card border-border-subtle flex w-full items-center gap-4 rounded-lg border p-2.5 shadow-sm md:p-3">
                        <div className="bg-status-success-bg border-brand-secondary flex shrink-0 items-center gap-2 rounded-full border px-4 py-1">
                            <span className="bg-accent-lime h-2 w-2 animate-pulse rounded-full"></span>
                            <span className="text-label-sm text-status-success font-semibold tracking-wide uppercase">
                                Warta Terkini
                            </span>
                        </div>
                        <div className="flex-1 overflow-hidden whitespace-nowrap">
                            <p className="text-body-sm text-text-primary truncate">
                                Konferensi MWC NU Kecamatan Digelar Akhir Pekan
                                Ini di Gedung Serbaguna Kecamatan — Seluruh
                                Pengurus Ranting Diimbau Hadir Tepat Waktu.
                            </p>
                        </div>
                        <a
                            className="text-label-sm text-brand-primary hover:text-brand-primary-hover hidden shrink-0 items-center gap-1 font-semibold sm:inline-flex"
                            href="/warta-berita"
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
                    </section>

                    {/* Hero Section */}
                    <section
                        className="grid grid-cols-1 gap-8 lg:grid-cols-12"
                        id="beranda"
                    >
                        {/* Primary Feature Card */}
                        <div className="bg-surface-card border-border-subtle flex flex-col justify-between rounded-xl border p-6 shadow-sm transition-all duration-200 hover:shadow-md md:p-8 lg:col-span-8">
                            <div>
                                <div className="bg-brand-primary-light border-border-subtle group relative mb-6 flex h-64 w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:h-80">
                                    <div className="from-brand-primary/20 absolute inset-0 bg-gradient-to-t via-transparent to-transparent"></div>
                                    <svg
                                        className="text-brand-primary h-16 w-16 opacity-40 transition-transform duration-300 group-hover:scale-110"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5" />
                                    </svg>
                                    <div className="bg-surface-card/90 border-border-subtle text-text-secondary text-caption absolute right-3 bottom-3 flex items-center gap-1 rounded border px-2.5 py-1 backdrop-blur-sm">
                                        <span>Dokumentasi LTN NU</span>
                                    </div>
                                </div>
                                <div className="mb-4 flex flex-wrap items-center gap-4">
                                    <span className="bg-brand-primary-light text-brand-primary border-brand-secondary text-label-sm rounded-full border px-4 py-0.5 font-medium">
                                        Keorganisasian
                                    </span>
                                    <span className="text-text-secondary text-body-sm flex items-center gap-1">
                                        <span>
                                            14 Mei 2025 • 4 menit membaca
                                        </span>
                                    </span>
                                </div>
                                <h1 className="text-headline-md md:text-display-hero font-display text-text-primary mb-4 leading-tight">
                                    MWC NU Kecamatan Perkuat Konsolidasi Ranting
                                    dan Pemberdayaan Ekonomi Umat
                                </h1>
                                <p className="text-body-md text-text-secondary mb-6 line-clamp-3">
                                    Rapat pleno gabungan Syuriyah dan
                                    Tanfidziyah Majelis Wakil Cabang menetapkan
                                    peta jalan strategis untuk memperkokoh
                                    akuntabilitas kemandirian ekonomi tingkat
                                    desa dan penguatan moderasi beragama di
                                    pelosok kecamatan.
                                </p>
                            </div>
                            <div className="border-border-light flex items-center justify-between border-t pt-6">
                                <div className="flex items-center gap-4">
                                    <div className="bg-surface-tint border-border-subtle flex h-10 w-10 items-center justify-center rounded-full border">
                                        <svg
                                            className="text-brand-primary h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-label-md text-text-primary">
                                            Lembaga Ta'lif wan Nasyr (LTN) NU
                                        </p>
                                        <p className="text-caption text-text-secondary">
                                            Pusat Publikasi & Informasi
                                        </p>
                                    </div>
                                </div>
                                <a
                                    className="bg-brand-primary text-label-md hover:bg-brand-primary-hover inline-flex h-10 items-center gap-2 rounded-lg px-6 text-white transition-colors"
                                    href="/warta-berita"
                                >
                                    <span>Baca Warta</span>
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Secondary Stories */}
                        <div className="flex flex-col gap-6 lg:col-span-4">
                            <article className="bg-surface-card border-border-subtle hover:border-brand-primary/40 flex flex-1 flex-col justify-between rounded-xl border p-6 shadow-sm transition-colors">
                                <div>
                                    <div className="bg-accent-cyan-subtle border-border-subtle relative mb-4 flex h-36 w-full items-center justify-center overflow-hidden rounded-lg border">
                                        <span className="text-4xl opacity-30">
                                            🎓
                                        </span>
                                        <span className="bg-surface-card/90 text-label-sm text-tertiary border-accent-cyan absolute top-2 left-2 rounded-full border px-2 py-0.5">
                                            Pendidikan
                                        </span>
                                    </div>
                                    <div className="text-text-secondary text-caption mb-2 flex items-center gap-1">
                                        <span>13 Mei 2025</span>
                                    </div>
                                    <h2 className="text-headline-sm font-display text-text-primary hover:text-brand-primary mb-2 leading-snug transition-colors">
                                        Peningkatan Mutu TPQ dan Madin
                                        Se-Kecamatan melalui Kurikulum Aswaja
                                        Terpadu
                                    </h2>
                                    <p className="text-body-sm text-text-secondary line-clamp-2">
                                        Lembaga Pendidikan Ma'arif NU Kecamatan
                                        menggelar lokakarya standardisasi
                                        pengajaran kitab kuning dan sejarah
                                        kebangsaan bagi para ustadz.
                                    </p>
                                </div>
                                <div className="border-border-light mt-4 flex items-center justify-between border-t pt-4">
                                    <span className="text-caption text-text-secondary">
                                        LP Ma'arif NU
                                    </span>
                                    <a
                                        className="text-brand-primary text-label-sm inline-flex items-center gap-1 font-semibold hover:underline"
                                        href="/warta-berita"
                                    >
                                        Selengkapnya{' '}
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
                            </article>

                            <article className="bg-surface-card border-border-subtle hover:border-brand-primary/40 flex flex-1 flex-col justify-between rounded-xl border p-6 shadow-sm transition-colors">
                                <div>
                                    <div className="bg-surface-container border-border-subtle relative mb-4 flex h-36 w-full items-center justify-center overflow-hidden rounded-lg border">
                                        <span className="text-4xl opacity-30">
                                            🤝
                                        </span>
                                        <span className="bg-surface-card/90 text-label-sm text-text-primary border-border-subtle absolute top-2 left-2 rounded-full border px-2 py-0.5">
                                            Sosial Kemasyarakatan
                                        </span>
                                    </div>
                                    <div className="text-text-secondary text-caption mb-2 flex items-center gap-1">
                                        <span>11 Mei 2025</span>
                                    </div>
                                    <h2 className="text-headline-sm font-display text-text-primary hover:text-brand-primary mb-2 leading-snug transition-colors">
                                        Gerakan Koin NU Peduli Capai Target
                                        Tahunan untuk Layanan Mobil Siaga Umat
                                    </h2>
                                    <p className="text-body-sm text-text-secondary line-clamp-2">
                                        Kemandirian filantropi warga berhasil
                                        menambah satu unit armada ambulans
                                        gratis yang siap melayani pasien darurat
                                        24 jam.
                                    </p>
                                </div>
                                <div className="border-border-light mt-4 flex items-center justify-between border-t pt-4">
                                    <span className="text-caption text-text-secondary">
                                        LAZISNU Kecamatan
                                    </span>
                                    <a
                                        className="text-brand-primary text-label-sm inline-flex items-center gap-1 font-semibold hover:underline"
                                        href="/warta-berita"
                                    >
                                        Selengkapnya{' '}
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
                            </article>
                        </div>
                    </section>

                    {/* Berita Terbaru */}
                    <section className="space-y-8" id="berita">
                        <div className="border-border-subtle flex flex-col justify-between gap-4 border-b pb-4 md:flex-row md:items-end">
                            <div>
                                <div className="text-brand-primary mb-1 flex items-center gap-2">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5" />
                                    </svg>
                                    <span className="text-label-sm font-semibold tracking-wider uppercase">
                                        Warta & Kabar Nahdliyin
                                    </span>
                                </div>
                                <h2 className="text-headline-lg-mobile md:text-headline-lg font-display text-text-primary">
                                    Berita Terbaru
                                </h2>
                                <p className="text-body-md text-text-secondary mt-1">
                                    Informasi terkini, pengumuman resmi, dan
                                    dinamika kegiatan jam'iyyah se-Kecamatan.
                                </p>
                            </div>
                            <a
                                className="text-brand-primary hover:text-brand-primary-hover text-label-md group inline-flex items-center gap-2 self-start font-semibold md:self-auto"
                                href="/warta-berita"
                            >
                                <span>Lihat Semua Berita</span>
                                <svg
                                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {beritaTerbaru.map((item, i) => (
                                <article
                                    key={i}
                                    className="bg-surface-card border-border-subtle flex flex-col justify-between overflow-hidden rounded-xl border shadow-sm transition-all duration-200 hover:shadow-md"
                                >
                                    <div className="p-6">
                                        <div
                                            className={`h-44 w-full ${item.bg} border-border-subtle relative mb-4 flex items-center justify-center overflow-hidden rounded-lg border`}
                                        >
                                            <span className="text-4xl opacity-30">
                                                {item.icon}
                                            </span>
                                            <span className="bg-surface-card/95 text-label-sm text-brand-primary border-brand-secondary absolute top-3 left-3 rounded-full border px-4 py-0.5 font-medium">
                                                {item.kategori}
                                            </span>
                                        </div>
                                        <div className="text-text-secondary text-caption mb-2 flex items-center justify-between">
                                            <span>{item.tanggal}</span>
                                            <span>{item.penulis}</span>
                                        </div>
                                        <h3 className="text-headline-sm font-display text-text-primary hover:text-brand-primary mb-2 line-clamp-2 leading-snug transition-colors">
                                            {item.judul}
                                        </h3>
                                        <p className="text-body-sm text-text-secondary line-clamp-3">
                                            {item.ringkasan}
                                        </p>
                                    </div>
                                    <div className="px-6 pt-0 pb-6">
                                        <a
                                            className="text-brand-primary text-label-sm inline-flex items-center gap-1 font-semibold hover:underline"
                                            href="/warta-berita"
                                        >
                                            Baca Warta Penuh{' '}
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
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Kegiatan Terbaru */}
                    <section
                        className="bg-surface-tint border-border-subtle space-y-8 rounded-2xl border p-6 md:p-10"
                        id="kegiatan"
                    >
                        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                            <div>
                                <div className="text-brand-primary mb-1 flex items-center gap-2">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>
                                    <span className="text-label-sm font-semibold tracking-wider uppercase">
                                        Agenda Nahdliyin
                                    </span>
                                </div>
                                <h2 className="text-headline-lg-mobile md:text-headline-lg font-display text-text-primary">
                                    Kegiatan Terbaru & Mendatang
                                </h2>
                                <p className="text-body-md text-text-secondary mt-1">
                                    Jadwal pengajian, majelis sholawat, dan
                                    pertemuan berkala badan otonom di tingkat
                                    kecamatan.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <button className="bg-brand-primary text-label-sm rounded-full px-4 py-1.5 font-semibold text-white shadow-sm">
                                    Semua
                                </button>
                                <button className="bg-surface-card border-border-subtle text-text-secondary hover:text-text-primary hover:border-brand-primary text-label-sm rounded-full border px-4 py-1.5 transition-colors">
                                    IPNU / IPPNU
                                </button>
                                <button className="bg-surface-card border-border-subtle text-text-secondary hover:text-text-primary hover:border-brand-primary text-label-sm rounded-full border px-4 py-1.5 transition-colors">
                                    GP Ansor
                                </button>
                                <button className="bg-surface-card border-border-subtle text-text-secondary hover:text-text-primary hover:border-brand-primary text-label-sm rounded-full border px-4 py-1.5 transition-colors">
                                    Banser
                                </button>
                                <button className="bg-surface-card border-border-subtle text-text-secondary hover:text-text-primary hover:border-brand-primary text-label-sm rounded-full border px-4 py-1.5 transition-colors">
                                    Fatayat NU
                                </button>
                                <button className="bg-surface-card border-border-subtle text-text-secondary hover:text-text-primary hover:border-brand-primary text-label-sm rounded-full border px-4 py-1.5 transition-colors">
                                    Muslimat NU
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {kegiatan.map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-surface-card border-border-subtle hover:border-brand-primary flex items-start gap-6 rounded-xl border p-6 shadow-sm transition-all"
                                >
                                    <div
                                        className={`h-20 w-16 shrink-0 ${item.bgDate} border-border-subtle flex flex-col items-center justify-center rounded-lg border text-center`}
                                    >
                                        <span className="text-caption text-text-secondary font-bold uppercase">
                                            {item.bulan}
                                        </span>
                                        <span
                                            className={`text-headline-md font-display leading-none font-bold ${item.bgDateText}`}
                                        >
                                            {item.tanggal}
                                        </span>
                                        <span className="text-text-secondary text-[10px]">
                                            {item.hari}
                                        </span>
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="bg-accent-cyan-subtle border-accent-cyan text-tertiary text-label-sm rounded-full border px-2 py-0.5">
                                                {item.banom}
                                            </span>
                                            <span className="bg-status-success-bg border-brand-secondary text-status-success text-label-sm rounded-full border px-2 py-0.5 font-medium">
                                                {item.status}
                                            </span>
                                        </div>
                                        <h3 className="text-title-lg text-text-primary leading-snug font-semibold">
                                            {item.judul}
                                        </h3>
                                        <p className="text-body-sm text-text-secondary">
                                            {item.deskripsi}
                                        </p>
                                        <div className="text-text-secondary text-caption border-border-light flex items-center gap-4 border-t pt-2">
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
                                                {item.waktu}
                                            </span>
                                            <span className="flex items-center gap-1 truncate">
                                                <svg
                                                    className="h-3.5 w-3.5"
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
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Banom Directory */}
                    <section className="space-y-8" id="banom">
                        <div className="border-border-subtle border-b pb-4">
                            <div className="text-brand-primary mb-1 flex items-center gap-2">
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" />
                                </svg>
                                <span className="text-label-sm font-semibold tracking-wider uppercase">
                                    Sayap Pergerakan Jam'iyyah
                                </span>
                            </div>
                            <h2 className="text-headline-lg-mobile md:text-headline-lg font-display text-text-primary">
                                Badan Otonom (Banom) NU
                            </h2>
                            <p className="text-body-md text-text-secondary mt-1">
                                Wadah pengkaderan dan khidmat terarah bagi
                                pelajar, pemuda, pemudi, hingga kaum ibu di
                                tingkat kecamatan.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {banomList.map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-surface-card border-border-subtle flex flex-col justify-between rounded-xl border p-6 shadow-sm transition-all hover:shadow-md"
                                >
                                    <div>
                                        <div className="mb-4 flex items-center justify-between">
                                            <span
                                                className={`rounded-full px-4 py-1 ${item.badgeBg} border ${item.badgeBorder} ${item.badgeText} text-label-md font-bold`}
                                            >
                                                {item.abbr}
                                            </span>
                                            <span className="text-text-secondary text-caption">
                                                {item.kategori}
                                            </span>
                                        </div>
                                        <h3 className="text-title-lg text-text-primary mb-2">
                                            {item.nama}
                                        </h3>
                                        <p className="text-body-sm text-text-secondary mb-4">
                                            {item.deskripsi}
                                        </p>
                                        <div className="bg-surface-tint border-border-light mb-4 rounded-lg border p-4">
                                            <span className="text-caption text-text-secondary mb-1 block">
                                                Aktivitas Terkini:
                                            </span>
                                            <p className="text-label-sm text-text-primary truncate font-medium">
                                                {item.aktivitas}
                                            </p>
                                        </div>
                                    </div>
                                    <a
                                        className="border-brand-primary text-brand-primary hover:bg-brand-primary-light text-label-sm flex w-full items-center justify-center gap-1 rounded-lg border py-2 text-center font-semibold transition-colors"
                                        href="#"
                                    >
                                        <span>Lihat Profil & Agenda</span>
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
                            ))}
                        </div>
                    </section>

                    {/* Tentang MWC NU */}
                    <section
                        className="bg-surface-card border-border-subtle space-y-10 rounded-2xl border p-6 shadow-sm md:p-12"
                        id="tentang"
                    >
                        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                            <div className="space-y-4 lg:col-span-7">
                                <div className="text-brand-primary flex items-center gap-2">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                    </svg>
                                    <span className="text-label-sm font-semibold tracking-wider uppercase">
                                        Khidmat untuk Umat dan Bangsa
                                    </span>
                                </div>
                                <h2 className="text-headline-lg-mobile md:text-headline-lg font-display text-text-primary leading-tight">
                                    Menegakkan Ajaran Islam Ahlussunnah wal
                                    Jama'ah & Membangun Kemandirian Warga
                                </h2>
                                <p className="text-body-md text-text-secondary leading-relaxed">
                                    Majelis Wakil Cabang Nahdlatul Ulama (MWC
                                    NU) Kecamatan merupakan episentrum tata
                                    kelola jam'iyyah yang mengayomi seluruh
                                    Pengurus Ranting desa. Kami berkhidmat
                                    secara ikhlas menghadirkan pelayanan
                                    keagamaan yang teduh, pemberdayaan ekonomi
                                    riil, serta kepeloporan sosial
                                    kemasyarakatan yang berkeadaban.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-2">
                                    <div className="border-brand-primary border-l-2 pl-4">
                                        <p className="text-title-md text-text-primary italic">
                                            "Mabadi Khaira Ummah"
                                        </p>
                                        <p className="text-caption text-text-secondary">
                                            Prinsip Dasar Pembentukan Umat
                                            Terbaik
                                        </p>
                                    </div>
                                    <div className="border-brand-secondary border-l-2 pl-4">
                                        <p className="text-title-md text-text-primary italic">
                                            "Tawassuth & I'tidal"
                                        </p>
                                        <p className="text-caption text-text-secondary">
                                            Sikap Moderat, Adil, dan Berimbang
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-surface-tint border-border-subtle space-y-4 rounded-xl border p-6 lg:col-span-5">
                                <div className="border-border-subtle flex items-center gap-4 border-b pb-4">
                                    <div className="bg-brand-primary-light text-brand-primary border-brand-secondary flex h-12 w-12 shrink-0 items-center justify-center rounded-full border">
                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-label-md text-text-primary font-bold">
                                            K.H. Ahmad Syarifuddin
                                        </p>
                                        <p className="text-caption text-text-secondary">
                                            Rais Syuriyah MWC NU Kecamatan
                                        </p>
                                    </div>
                                </div>
                                <p className="text-body-sm text-text-secondary italic">
                                    "Jam'iyyah ini berdiri di atas berkah para
                                    ulama pendiri. Menjaga kerukunan warga dan
                                    kemurnian aqidah adalah amanah suci yang
                                    wajib kita rawat bersama melalui keterbukaan
                                    informasi dan kebersamaan rukun."
                                </p>
                                <div className="text-text-secondary text-caption flex items-center justify-between pt-2">
                                    <span>Masa Khidmat 2023–2028</span>
                                    <span className="text-brand-primary font-semibold">
                                        Tanfidziyah & Syuriyah Terpadu
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="border-border-subtle grid grid-cols-2 gap-4 border-t pt-8 md:grid-cols-4 md:gap-6">
                            {[
                                {
                                    angka: '14',
                                    label: 'Pengurus Ranting',
                                    sub: 'Aktif di Seluruh Desa',
                                },
                                {
                                    angka: '6',
                                    label: 'Badan Otonom',
                                    sub: 'Kaderisasi Terintegrasi',
                                },
                                {
                                    angka: '25+',
                                    label: 'Lembaga Khidmat',
                                    sub: 'Pendidikan & Filantropi',
                                },
                                {
                                    angka: '12.000+',
                                    label: 'Warga Nahdliyin',
                                    sub: 'Kader Terdata Digital',
                                },
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className="bg-surface-container border-border-light flex flex-col items-center justify-center rounded-xl border p-6 text-center"
                                >
                                    <span className="text-headline-md md:text-display-hero font-display text-brand-primary font-bold">
                                        {stat.angka}
                                    </span>
                                    <span className="text-label-md text-text-primary mt-1 font-semibold">
                                        {stat.label}
                                    </span>
                                    <span className="text-caption text-text-secondary">
                                        {stat.sub}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>
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
                                    Indonesia. Berkhidmat meneguhkan akidah
                                    Aswaja an-Nahdliyyah, merawat ukhuwah, dan
                                    memajukan peradaban nusantara.
                                </p>
                                <div className="text-text-secondary flex items-center gap-4 pt-2">
                                    <a
                                        className="bg-surface-card border-border-subtle hover:text-brand-primary flex h-8 w-8 items-center justify-center rounded-full border transition-colors"
                                        href="#"
                                        title="Email"
                                    >
                                        <svg
                                            className="h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </a>
                                    <a
                                        className="bg-surface-card border-border-subtle hover:text-brand-primary flex h-8 w-8 items-center justify-center rounded-full border transition-colors"
                                        href="#"
                                        title="Telepon"
                                    >
                                        <svg
                                            className="h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                                        </svg>
                                    </a>
                                    <a
                                        className="bg-surface-card border-border-subtle hover:text-brand-primary flex h-8 w-8 items-center justify-center rounded-full border transition-colors"
                                        href="#"
                                        title="Lokasi"
                                    >
                                        <svg
                                            className="h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="space-y-4 lg:col-span-3">
                                <h4 className="text-headline-sm font-display text-brand-primary font-semibold">
                                    Tautan Kelembagaan
                                </h4>
                                <ul className="text-body-sm space-y-2">
                                    <li>
                                        <a
                                            className="text-text-secondary hover:text-brand-primary transition-colors duration-150"
                                            href="#tentang"
                                        >
                                            Tentang MWC NU
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-text-secondary hover:text-brand-primary transition-colors duration-150"
                                            href="#"
                                        >
                                            Struktur Pengurus
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-text-secondary hover:text-brand-primary transition-colors duration-150"
                                            href="#banom"
                                        >
                                            Lembaga & Banom
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-text-secondary hover:text-brand-primary transition-colors duration-150"
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
                                            className="text-text-secondary hover:text-brand-primary transition-colors duration-150"
                                            href="#kegiatan"
                                        >
                                            Agenda Kegiatan
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-text-secondary hover:text-brand-primary transition-colors duration-150"
                                            href="#"
                                        >
                                            Transparansi Program
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-text-secondary hover:text-brand-primary transition-colors duration-150"
                                            href="#"
                                        >
                                            Kebijakan Privasi
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-text-secondary hover:text-brand-primary transition-colors duration-150"
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
                                NU) Kecamatan. Hak Cipta Dilindungi
                                Undang-Undang.
                            </p>
                            <div className="flex items-center gap-4">
                                <span className="inline-flex items-center gap-1">
                                    <span className="bg-brand-secondary h-2 w-2 rounded-full"></span>
                                    Sistem Informasi Resmi Jam'iyyah
                                </span>
                            </div>
                        </div>
                    </div>
                </footer>

                {/* Mobile Bottom Navigation */}
                <aside className="bg-surface-card/95 border-border-light sticky bottom-0 z-40 flex w-full items-center justify-around border-t px-4 py-2 shadow-lg backdrop-blur-md md:hidden">
                    <a
                        className="text-brand-primary flex h-11 w-14 flex-col items-center justify-center font-semibold"
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
                        className="text-text-secondary hover:text-brand-primary flex h-11 w-14 flex-col items-center justify-center transition-colors"
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
