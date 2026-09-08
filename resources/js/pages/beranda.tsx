import { Head } from '@inertiajs/react';

const beritaTerbaru = [
    {
        judul: 'Pengajian Rutin Ahad Pagi Majelis Wakil Cabang Dihadiri Ribuan Jamaah',
        ringkasan: 'Kajian mendalam Kitab Risalah Ahlussunnah wal Jama\'ah karya Hadratussyaikh KH. Hasyim Asy\'ari meneguhkan kerukunan dan keteduhan bermasyarakat.',
        kategori: 'Keagamaan',
        tanggal: 'Ahad, 12 Mei 2025',
        penulis: 'Kader Dakwah',
        icon: '🕌',
        bg: 'bg-surface-tint',
    },
    {
        judul: 'Banser Siagakan Personel Relawan Tanggap Bencana Musim Hujan di 12 Desa',
        ringkasan: 'Posko siaga bencana terpadu didirikan untuk percepatan evakuasi tanggap darurat, bantuan logistik, dan koordinasi dengan Badan Penanggulangan Bencana.',
        kategori: 'Kegiatan',
        tanggal: 'Sabtu, 10 Mei 2025',
        penulis: 'Satkoryon Banser',
        icon: '🛡️',
        bg: 'bg-brand-primary-light',
    },
    {
        judul: 'Pelatihan Digital Marketing bagi Pelaku UMKM Warga Nahdliyin',
        ringkasan: 'Kolaborasi Lembaga Perekonomian NU membekali 60 pengusaha mikro lokal dengan keahlian pemasaran online dan sertifikasi halal gratis.',
        kategori: 'Ekonomi Umat',
        tanggal: 'Kamis, 08 Mei 2025',
        penulis: 'LPNU Kecamatan',
        icon: '🏪',
        bg: 'bg-accent-cyan-subtle',
    },
    {
        judul: 'Fatayat NU Sukseskan Program Pencegahan Stunting Balita di Posyandu Binaan',
        ringkasan: 'Pemberian makanan tambahan bernutrisi tinggi dan edukasi pola asuh higienis digelar serentak di 5 titik posyandu pedesaan.',
        kategori: 'Sosial',
        tanggal: 'Rabu, 07 Mei 2025',
        penulis: 'PAC Fatayat NU',
        icon: '👨‍👩‍👧',
        bg: 'bg-surface-container',
    },
    {
        judul: 'IPNU-IPPNU Gelar Makesta Raya Sambut Pelajar Baru di Tingkat Ranting',
        ringkasan: 'Masa Kesetiaan Anggota (Makesta) diikuti lebih dari 200 kader muda pelajar SMP/SMA sederajat untuk mencetak generasi Aswaja berwawasan kebangsaan.',
        kategori: 'Banom / Kaderisasi',
        tanggal: 'Senin, 05 Mei 2025',
        penulis: 'PAC IPNU-IPPNU',
        icon: '👥',
        bg: 'bg-accent-cyan-subtle',
    },
    {
        judul: 'Lembaga Amil Zakat NU (LAZISNU) Salurkan Beasiswa Santri Berprestasi',
        ringkasan: 'Sebanyak 45 santri dari keluarga prasejahtera menerima beasiswa penuh biaya pondok pesantren dan peralatan penunjang studi kitab kuning.',
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
        deskripsi: 'Diskusi santai dan pelatihan literasi digital kritis khusus pelajar se-Kecamatan dengan narasumber praktisi media.',
        waktu: '08:30 - 12:00 WIB',
        lokasi: 'Aula KH. Hasyim Asy\'ari',
        bgDate: 'bg-brand-primary-light',
        bgDateText: 'text-brand-primary',
    },
    {
        bulan: 'MEI',
        tanggal: '23',
        hari: 'JUM\'AT',
        banom: 'GP Ansor',
        status: 'Terbuka untuk Umum',
        judul: 'Majelis Dzikir dan Sholawat Rijalul Ansor Putaran Ranting Barat',
        deskripsi: 'Silaturahim kebangsaan bulanan yang diisi dengan pembacaan Maulid Simthudduror dan santunan anak yatim.',
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
        judul: 'Pengajian Kubro Muslimat & Fatayat NU Sambut Bulan Dzulqa\'dah',
        deskripsi: 'Mau\'idhoh hasanah oleh Nyai Hj. Pengasuh Pesantren Putri mengenai ketahanan keluarga sakinah mawaddah wa rahmah.',
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
        deskripsi: 'Peningkatan kapasitas teknis Satuan Khusus Balantas dan Bagana menghadapi kontinjensi bencana alam regional.',
        waktu: '07:00 - 15:00 WIB',
        lokasi: 'Lapangan Olahraga Kecamatan',
        bgDate: 'bg-surface-container',
        bgDateText: 'text-text-primary',
    },
];

const banomList = [
    { abbr: 'IPNU', nama: 'Ikatan Pelajar Nahdlatul Ulama', kategori: 'Putra Pelajar', deskripsi: 'Wadah kaderisasi pelajar, santri, dan mahasiswa putra tingkat kecamatan dalam mengawal aqidah Ahlussunnah wal Jama\'ah.', aktivitas: 'Makesta Raya Semester Genap di 14 Ranting', badgeBg: 'bg-accent-cyan-subtle', badgeBorder: 'border-accent-cyan', badgeText: 'text-tertiary' },
    { abbr: 'IPPNU', nama: 'Ikatan Pelajar Putri Nahdlatul Ulama', kategori: 'Putri Pelajar', deskripsi: 'Pusat pergerakan dan pembinaan kepemimpinan pelajar putri, santriwati, dan mahasiswi dengan semangat keilmuan dan akhlak karimah.', aktivitas: 'Workshop Jurnalistik & Literasi Media Santriwati', badgeBg: 'bg-accent-cyan-subtle', badgeBorder: 'border-accent-cyan', badgeText: 'text-tertiary' },
    { abbr: 'GP Ansor', nama: 'Gerakan Pemuda Ansor', kategori: 'Pemuda NU', deskripsi: 'Garda terdepan gerakan kepemudaan, pertahanan nilai kebangsaan, penguatan ekonomi mandiri, dan pengabdian sosial umat.', aktivitas: 'Pelatihan Kepemimpinan Dasar (PKD) Angkatan VIII', badgeBg: 'bg-brand-primary-light', badgeBorder: 'border-brand-secondary', badgeText: 'text-brand-primary' },
    { abbr: 'Banser', nama: 'Barisan Ansor Serbaguna', kategori: 'Tenaga Inti Ansor', deskripsi: 'Tenaga inti paramiliter sukarela untuk pengamanan para kiai, aset umat, tanggap kebencanaan, dan ketertiban masyarakat.', aktivitas: 'Posko Tanggap Bencana Banjir & Pengamanan Rumah Ibadah', badgeBg: 'bg-brand-primary-light', badgeBorder: 'border-brand-secondary', badgeText: 'text-brand-primary' },
    { abbr: 'Fatayat NU', nama: 'Fatayat Nahdlatul Ulama', kategori: 'Pemudi Nahdliyin', deskripsi: 'Organisasi wanita muda Islam yang bergerak aktif dalam kesehatan ibu-anak, advokasi keluarga, dan pendidikan anak usia dini.', aktivitas: 'Penyuluhan Pencegahan Stunting Balita Desa', badgeBg: 'bg-surface-container', badgeBorder: 'border-border-subtle', badgeText: 'text-text-primary' },
    { abbr: 'Muslimat NU', nama: 'Muslimat Nahdlatul Ulama', kategori: 'Wanita & Ibu NU', deskripsi: 'Pilar sosial keagamaan kaum ibu, membina jaringan majelis taklim, panti asuhan, dan lembaga kesejahteraan sosial keluarga.', aktivitas: 'Majelis Dzikir Asmaul Husna Akbar Tingkat Kecamatan', badgeBg: 'bg-surface-container', badgeBorder: 'border-border-subtle', badgeText: 'text-text-primary' },
];

export default function Beranda() {
    return (
        <>
            <Head title="Beranda" />
            <div className="min-h-screen flex flex-col">
                {/* Header */}
                <header className="w-full border-b border-border-subtle bg-surface-card sticky top-0 z-50">
                    <div className="max-w-[1280px] mx-auto flex items-center justify-between h-20 px-4 md:px-8">
                        <a className="flex items-center gap-4 group" href="/beranda">
                            <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center text-white shadow-sm group-hover:bg-brand-primary-hover transition-colors duration-150">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 0 0 0 18M12 3a14 14 0 0 1 0 18" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-title-md font-display font-semibold text-brand-primary tracking-tight leading-none">MWC NU Kecamatan</span>
                                <span className="text-caption text-text-secondary mt-0.5">Nahdlatul Ulama Tingkat Kecamatan</span>
                            </div>
                        </a>

                        <nav className="hidden md:flex items-center gap-8">
                            <a className="text-brand-primary font-semibold border-b-2 border-brand-primary pb-1 text-label-md" href="/beranda">Beranda</a>
                            <a className="text-text-secondary hover:text-text-primary transition-colors duration-150 text-label-md" href="/warta-berita">Berita</a>
                            <a className="text-text-secondary hover:text-text-primary transition-colors duration-150 text-label-md" href="#kegiatan">Kegiatan Banom</a>
                            <a className="text-text-secondary hover:text-text-primary transition-colors duration-150 text-label-md" href="#banom">Badan Otonom</a>
                            <a className="text-text-secondary hover:text-text-primary transition-colors duration-150 text-label-md" href="#tentang">Tentang Kami</a>
                        </nav>

                        <div className="hidden md:flex items-center gap-4">
                            <button className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-brand-primary-light transition-colors duration-150" title="Cari informasi">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            </button>
                            <a className="inline-flex items-center gap-2 px-4 h-10 border border-brand-primary text-brand-primary hover:bg-brand-primary-light rounded-lg text-label-md transition-all duration-200" href="#">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                <span>Portal Anggota</span>
                            </a>
                            <a className="inline-flex items-center gap-2 px-6 h-10 bg-brand-primary text-white hover:bg-brand-primary-hover rounded-lg text-label-md transition-all duration-200 shadow-sm" href="#">
                                <span>Kontak</span>
                            </a>
                        </div>

                        <button className="md:hidden p-2 text-text-primary hover:text-brand-primary rounded-lg" aria-label="Buka Menu">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
                        </button>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 max-w-[1280px] mx-auto w-full px-4 md:px-8 space-y-12 md:space-y-16 py-6 md:py-8">
                    {/* Breaking News Ticker */}
                    <section className="w-full bg-surface-card border border-border-subtle rounded-lg p-2.5 md:p-3 flex items-center gap-4 shadow-sm">
                        <div className="flex items-center gap-2 shrink-0 bg-status-success-bg border border-brand-secondary rounded-full px-4 py-1">
                            <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse"></span>
                            <span className="text-label-sm text-status-success font-semibold tracking-wide uppercase">Warta Terkini</span>
                        </div>
                        <div className="overflow-hidden whitespace-nowrap flex-1">
                            <p className="text-body-sm text-text-primary truncate">
                                Konferensi MWC NU Kecamatan Digelar Akhir Pekan Ini di Gedung Serbaguna Kecamatan — Seluruh Pengurus Ranting Diimbau Hadir Tepat Waktu.
                            </p>
                        </div>
                        <a className="hidden sm:inline-flex items-center gap-1 text-label-sm text-brand-primary hover:text-brand-primary-hover shrink-0 font-semibold" href="/warta-berita">
                            <span>Baca Selengkapnya</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </a>
                    </section>

                    {/* Hero Section */}
                    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="beranda">
                        {/* Primary Feature Card */}
                        <div className="lg:col-span-8 bg-surface-card border border-border-subtle rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200">
                            <div>
                                <div className="w-full h-64 md:h-80 bg-brand-primary-light border border-border-subtle rounded-lg mb-6 flex flex-col items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 via-transparent to-transparent"></div>
                                    <svg className="w-16 h-16 text-brand-primary opacity-40 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5" /></svg>
                                    <div className="absolute bottom-3 right-3 bg-surface-card/90 backdrop-blur-sm px-2.5 py-1 rounded border border-border-subtle text-text-secondary text-caption flex items-center gap-1">
                                        <span>Dokumentasi LTN NU</span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center gap-4 mb-4">
                                    <span className="px-4 py-0.5 rounded-full bg-brand-primary-light text-brand-primary border border-brand-secondary text-label-sm font-medium">Keorganisasian</span>
                                    <span className="text-text-secondary text-body-sm flex items-center gap-1">
                                        <span>14 Mei 2025 • 4 menit membaca</span>
                                    </span>
                                </div>
                                <h1 className="text-headline-md md:text-display-hero font-display text-text-primary mb-4 leading-tight">
                                    MWC NU Kecamatan Perkuat Konsolidasi Ranting dan Pemberdayaan Ekonomi Umat
                                </h1>
                                <p className="text-body-md text-text-secondary mb-6 line-clamp-3">
                                    Rapat pleno gabungan Syuriyah dan Tanfidziyah Majelis Wakil Cabang menetapkan peta jalan strategis untuk memperkokoh akuntabilitas kemandirian ekonomi tingkat desa dan penguatan moderasi beragama di pelosok kecamatan.
                                </p>
                            </div>
                            <div className="pt-6 border-t border-border-light flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-surface-tint flex items-center justify-center border border-border-subtle">
                                        <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-label-md text-text-primary">Lembaga Ta'lif wan Nasyr (LTN) NU</p>
                                        <p className="text-caption text-text-secondary">Pusat Publikasi & Informasi</p>
                                    </div>
                                </div>
                                <a className="inline-flex items-center gap-2 px-6 h-10 bg-brand-primary text-white rounded-lg text-label-md hover:bg-brand-primary-hover transition-colors" href="/warta-berita">
                                    <span>Baca Warta</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                                </a>
                            </div>
                        </div>

                        {/* Secondary Stories */}
                        <div className="lg:col-span-4 flex flex-col gap-6">
                            <article className="bg-surface-card border border-border-subtle rounded-xl p-6 flex-1 flex flex-col justify-between shadow-sm hover:border-brand-primary/40 transition-colors">
                                <div>
                                    <div className="w-full h-36 bg-accent-cyan-subtle border border-border-subtle rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                                        <span className="text-4xl opacity-30">🎓</span>
                                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-surface-card/90 text-label-sm text-tertiary border border-accent-cyan">Pendidikan</span>
                                    </div>
                                    <div className="text-text-secondary text-caption mb-2 flex items-center gap-1">
                                        <span>13 Mei 2025</span>
                                    </div>
                                    <h2 className="text-headline-sm font-display text-text-primary hover:text-brand-primary transition-colors leading-snug mb-2">
                                        Peningkatan Mutu TPQ dan Madin Se-Kecamatan melalui Kurikulum Aswaja Terpadu
                                    </h2>
                                    <p className="text-body-sm text-text-secondary line-clamp-2">
                                        Lembaga Pendidikan Ma'arif NU Kecamatan menggelar lokakarya standardisasi pengajaran kitab kuning dan sejarah kebangsaan bagi para ustadz.
                                    </p>
                                </div>
                                <div className="pt-4 mt-4 border-t border-border-light flex items-center justify-between">
                                    <span className="text-caption text-text-secondary">LP Ma'arif NU</span>
                                    <a className="text-brand-primary text-label-sm font-semibold hover:underline inline-flex items-center gap-1" href="/warta-berita">
                                        Selengkapnya <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                                    </a>
                                </div>
                            </article>

                            <article className="bg-surface-card border border-border-subtle rounded-xl p-6 flex-1 flex flex-col justify-between shadow-sm hover:border-brand-primary/40 transition-colors">
                                <div>
                                    <div className="w-full h-36 bg-surface-container border border-border-subtle rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                                        <span className="text-4xl opacity-30">🤝</span>
                                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-surface-card/90 text-label-sm text-text-primary border border-border-subtle">Sosial Kemasyarakatan</span>
                                    </div>
                                    <div className="text-text-secondary text-caption mb-2 flex items-center gap-1">
                                        <span>11 Mei 2025</span>
                                    </div>
                                    <h2 className="text-headline-sm font-display text-text-primary hover:text-brand-primary transition-colors leading-snug mb-2">
                                        Gerakan Koin NU Peduli Capai Target Tahunan untuk Layanan Mobil Siaga Umat
                                    </h2>
                                    <p className="text-body-sm text-text-secondary line-clamp-2">
                                        Kemandirian filantropi warga berhasil menambah satu unit armada ambulans gratis yang siap melayani pasien darurat 24 jam.
                                    </p>
                                </div>
                                <div className="pt-4 mt-4 border-t border-border-light flex items-center justify-between">
                                    <span className="text-caption text-text-secondary">LAZISNU Kecamatan</span>
                                    <a className="text-brand-primary text-label-sm font-semibold hover:underline inline-flex items-center gap-1" href="/warta-berita">
                                        Selengkapnya <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                                    </a>
                                </div>
                            </article>
                        </div>
                    </section>

                    {/* Berita Terbaru */}
                    <section className="space-y-8" id="berita">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-subtle pb-4">
                            <div>
                                <div className="flex items-center gap-2 text-brand-primary mb-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5" /></svg>
                                    <span className="text-label-sm font-semibold tracking-wider uppercase">Warta & Kabar Nahdliyin</span>
                                </div>
                                <h2 className="text-headline-lg-mobile md:text-headline-lg font-display text-text-primary">Berita Terbaru</h2>
                                <p className="text-body-md text-text-secondary mt-1">Informasi terkini, pengumuman resmi, dan dinamika kegiatan jam'iyyah se-Kecamatan.</p>
                            </div>
                            <a className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary-hover text-label-md font-semibold group self-start md:self-auto" href="/warta-berita">
                                <span>Lihat Semua Berita</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {beritaTerbaru.map((item, i) => (
                                <article key={i} className="bg-surface-card border border-border-subtle rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                                    <div className="p-6">
                                        <div className={`w-full h-44 ${item.bg} border border-border-subtle rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}>
                                            <span className="text-4xl opacity-30">{item.icon}</span>
                                            <span className="absolute top-3 left-3 px-4 py-0.5 rounded-full bg-surface-card/95 text-label-sm text-brand-primary border border-brand-secondary font-medium">{item.kategori}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-text-secondary text-caption mb-2">
                                            <span>{item.tanggal}</span>
                                            <span>{item.penulis}</span>
                                        </div>
                                        <h3 className="text-headline-sm font-display text-text-primary hover:text-brand-primary transition-colors leading-snug mb-2 line-clamp-2">{item.judul}</h3>
                                        <p className="text-body-sm text-text-secondary line-clamp-3">{item.ringkasan}</p>
                                    </div>
                                    <div className="px-6 pb-6 pt-0">
                                        <a className="text-brand-primary text-label-sm font-semibold hover:underline inline-flex items-center gap-1" href="/warta-berita">
                                            Baca Warta Penuh <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Kegiatan Terbaru */}
                    <section className="space-y-8 bg-surface-tint p-6 md:p-10 rounded-2xl border border-border-subtle" id="kegiatan">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2 text-brand-primary mb-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>
                                    <span className="text-label-sm font-semibold tracking-wider uppercase">Agenda Nahdliyin</span>
                                </div>
                                <h2 className="text-headline-lg-mobile md:text-headline-lg font-display text-text-primary">Kegiatan Terbaru & Mendatang</h2>
                                <p className="text-body-md text-text-secondary mt-1">Jadwal pengajian, majelis sholawat, dan pertemuan berkala badan otonom di tingkat kecamatan.</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <button className="px-4 py-1.5 rounded-full bg-brand-primary text-white text-label-sm font-semibold shadow-sm">Semua</button>
                                <button className="px-4 py-1.5 rounded-full bg-surface-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-brand-primary text-label-sm transition-colors">IPNU / IPPNU</button>
                                <button className="px-4 py-1.5 rounded-full bg-surface-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-brand-primary text-label-sm transition-colors">GP Ansor</button>
                                <button className="px-4 py-1.5 rounded-full bg-surface-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-brand-primary text-label-sm transition-colors">Banser</button>
                                <button className="px-4 py-1.5 rounded-full bg-surface-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-brand-primary text-label-sm transition-colors">Fatayat NU</button>
                                <button className="px-4 py-1.5 rounded-full bg-surface-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-brand-primary text-label-sm transition-colors">Muslimat NU</button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {kegiatan.map((item, i) => (
                                <div key={i} className="bg-surface-card border border-border-subtle rounded-xl p-6 flex gap-6 items-start shadow-sm hover:border-brand-primary transition-all">
                                    <div className={`shrink-0 w-16 h-20 ${item.bgDate} border border-border-subtle rounded-lg flex flex-col items-center justify-center text-center`}>
                                        <span className="text-caption uppercase text-text-secondary font-bold">{item.bulan}</span>
                                        <span className={`text-headline-md font-display font-bold leading-none ${item.bgDateText}`}>{item.tanggal}</span>
                                        <span className="text-[10px] text-text-secondary">{item.hari}</span>
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="px-2 py-0.5 rounded-full bg-accent-cyan-subtle border border-accent-cyan text-tertiary text-label-sm">{item.banom}</span>
                                            <span className="px-2 py-0.5 rounded-full bg-status-success-bg border border-brand-secondary text-status-success text-label-sm font-medium">{item.status}</span>
                                        </div>
                                        <h3 className="text-title-lg text-text-primary font-semibold leading-snug">{item.judul}</h3>
                                        <p className="text-body-sm text-text-secondary">{item.deskripsi}</p>
                                        <div className="pt-2 flex items-center gap-4 text-text-secondary text-caption border-t border-border-light">
                                            <span className="flex items-center gap-1">
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>
                                                {item.waktu}
                                            </span>
                                            <span className="flex items-center gap-1 truncate">
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" /></svg>
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
                        <div className="border-b border-border-subtle pb-4">
                            <div className="flex items-center gap-2 text-brand-primary mb-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" /></svg>
                                <span className="text-label-sm font-semibold tracking-wider uppercase">Sayap Pergerakan Jam'iyyah</span>
                            </div>
                            <h2 className="text-headline-lg-mobile md:text-headline-lg font-display text-text-primary">Badan Otonom (Banom) NU</h2>
                            <p className="text-body-md text-text-secondary mt-1">Wadah pengkaderan dan khidmat terarah bagi pelajar, pemuda, pemudi, hingga kaum ibu di tingkat kecamatan.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {banomList.map((item, i) => (
                                <div key={i} className="bg-surface-card border border-border-subtle rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className={`px-4 py-1 rounded-full ${item.badgeBg} border ${item.badgeBorder} ${item.badgeText} text-label-md font-bold`}>{item.abbr}</span>
                                            <span className="text-text-secondary text-caption">{item.kategori}</span>
                                        </div>
                                        <h3 className="text-title-lg text-text-primary mb-2">{item.nama}</h3>
                                        <p className="text-body-sm text-text-secondary mb-4">{item.deskripsi}</p>
                                        <div className="bg-surface-tint p-4 rounded-lg border border-border-light mb-4">
                                            <span className="text-caption text-text-secondary block mb-1">Aktivitas Terkini:</span>
                                            <p className="text-label-sm text-text-primary font-medium truncate">{item.aktivitas}</p>
                                        </div>
                                    </div>
                                    <a className="w-full py-2 border border-brand-primary text-brand-primary hover:bg-brand-primary-light rounded-lg text-center text-label-sm font-semibold transition-colors flex items-center justify-center gap-1" href="#">
                                        <span>Lihat Profil & Agenda</span>
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Tentang MWC NU */}
                    <section className="bg-surface-card border border-border-subtle rounded-2xl p-6 md:p-12 space-y-10 shadow-sm" id="tentang">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <div className="flex items-center gap-2 text-brand-primary">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
                                    <span className="text-label-sm font-semibold tracking-wider uppercase">Khidmat untuk Umat dan Bangsa</span>
                                </div>
                                <h2 className="text-headline-lg-mobile md:text-headline-lg font-display text-text-primary leading-tight">
                                    Menegakkan Ajaran Islam Ahlussunnah wal Jama'ah & Membangun Kemandirian Warga
                                </h2>
                                <p className="text-body-md text-text-secondary leading-relaxed">
                                    Majelis Wakil Cabang Nahdlatul Ulama (MWC NU) Kecamatan merupakan episentrum tata kelola jam'iyyah yang mengayomi seluruh Pengurus Ranting desa. Kami berkhidmat secara ikhlas menghadirkan pelayanan keagamaan yang teduh, pemberdayaan ekonomi riil, serta kepeloporan sosial kemasyarakatan yang berkeadaban.
                                </p>
                                <div className="pt-2 flex flex-wrap gap-4">
                                    <div className="border-l-2 border-brand-primary pl-4">
                                        <p className="text-title-md text-text-primary italic">"Mabadi Khaira Ummah"</p>
                                        <p className="text-caption text-text-secondary">Prinsip Dasar Pembentukan Umat Terbaik</p>
                                    </div>
                                    <div className="border-l-2 border-brand-secondary pl-4">
                                        <p className="text-title-md text-text-primary italic">"Tawassuth & I'tidal"</p>
                                        <p className="text-caption text-text-secondary">Sikap Moderat, Adil, dan Berimbang</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5 bg-surface-tint border border-border-subtle rounded-xl p-6 space-y-4">
                                <div className="flex items-center gap-4 pb-4 border-b border-border-subtle">
                                    <div className="w-12 h-12 rounded-full bg-brand-primary-light flex items-center justify-center text-brand-primary border border-brand-secondary shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-label-md text-text-primary font-bold">K.H. Ahmad Syarifuddin</p>
                                        <p className="text-caption text-text-secondary">Rais Syuriyah MWC NU Kecamatan</p>
                                    </div>
                                </div>
                                <p className="text-body-sm text-text-secondary italic">
                                    "Jam'iyyah ini berdiri di atas berkah para ulama pendiri. Menjaga kerukunan warga dan kemurnian aqidah adalah amanah suci yang wajib kita rawat bersama melalui keterbukaan informasi dan kebersamaan rukun."
                                </p>
                                <div className="pt-2 flex items-center justify-between text-text-secondary text-caption">
                                    <span>Masa Khidmat 2023–2028</span>
                                    <span className="font-semibold text-brand-primary">Tanfidziyah & Syuriyah Terpadu</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8 border-t border-border-subtle">
                            {[
                                { angka: '14', label: 'Pengurus Ranting', sub: 'Aktif di Seluruh Desa' },
                                { angka: '6', label: 'Badan Otonom', sub: 'Kaderisasi Terintegrasi' },
                                { angka: '25+', label: 'Lembaga Khidmat', sub: 'Pendidikan & Filantropi' },
                                { angka: '12.000+', label: 'Warga Nahdliyin', sub: 'Kader Terdata Digital' },
                            ].map((stat, i) => (
                                <div key={i} className="p-6 bg-surface-container rounded-xl border border-border-light text-center flex flex-col items-center justify-center">
                                    <span className="text-headline-md md:text-display-hero font-display text-brand-primary font-bold">{stat.angka}</span>
                                    <span className="text-label-md text-text-primary font-semibold mt-1">{stat.label}</span>
                                    <span className="text-caption text-text-secondary">{stat.sub}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="w-full border-t border-border-subtle bg-surface-container px-4 md:px-8 py-12 mt-16">
                    <div className="max-w-[1280px] mx-auto space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-5 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center text-white">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 0 0 0 18M12 3a14 14 0 0 1 0 18" /></svg>
                                    </div>
                                    <span className="text-headline-md font-display font-semibold text-brand-primary">MWC NU Kecamatan</span>
                                </div>
                                <p className="text-body-sm text-text-secondary max-w-sm">
                                    Gedung Sekretariat Bersama MWC NU Kecamatan, Jl. Raya Santri No. 1926, Jawa Timur, Indonesia. Berkhidmat meneguhkan akidah Aswaja an-Nahdliyyah, merawat ukhuwah, dan memajukan peradaban nusantara.
                                </p>
                                <div className="flex items-center gap-4 text-text-secondary pt-2">
                                    <a className="w-8 h-8 rounded-full bg-surface-card border border-border-subtle flex items-center justify-center hover:text-brand-primary transition-colors" href="#" title="Email">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                                    </a>
                                    <a className="w-8 h-8 rounded-full bg-surface-card border border-border-subtle flex items-center justify-center hover:text-brand-primary transition-colors" href="#" title="Telepon">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" /></svg>
                                    </a>
                                    <a className="w-8 h-8 rounded-full bg-surface-card border border-border-subtle flex items-center justify-center hover:text-brand-primary transition-colors" href="#" title="Lokasi">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" /></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="lg:col-span-3 space-y-4">
                                <h4 className="text-headline-sm font-display text-brand-primary font-semibold">Tautan Kelembagaan</h4>
                                <ul className="space-y-2 text-body-sm">
                                    <li><a className="text-text-secondary hover:text-brand-primary transition-colors duration-150" href="#tentang">Tentang MWC NU</a></li>
                                    <li><a className="text-text-secondary hover:text-brand-primary transition-colors duration-150" href="#">Struktur Pengurus</a></li>
                                    <li><a className="text-text-secondary hover:text-brand-primary transition-colors duration-150" href="#banom">Lembaga & Banom</a></li>
                                    <li><a className="text-text-secondary hover:text-brand-primary transition-colors duration-150" href="/warta-berita">Warta & Berita</a></li>
                                </ul>
                            </div>
                            <div className="lg:col-span-4 space-y-4">
                                <h4 className="text-headline-sm font-display text-brand-primary font-semibold">Layanan & Transparansi</h4>
                                <ul className="space-y-2 text-body-sm">
                                    <li><a className="text-text-secondary hover:text-brand-primary transition-colors duration-150" href="#kegiatan">Agenda Kegiatan</a></li>
                                    <li><a className="text-text-secondary hover:text-brand-primary transition-colors duration-150" href="#">Transparansi Program</a></li>
                                    <li><a className="text-text-secondary hover:text-brand-primary transition-colors duration-150" href="#">Kebijakan Privasi</a></li>
                                    <li><a className="text-text-secondary hover:text-brand-primary transition-colors duration-150" href="#">Kontak Sekretariat</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="pt-6 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4 text-text-secondary text-label-sm">
                            <p>© 2025 Majelis Wakil Cabang Nahdlatul Ulama (MWC NU) Kecamatan. Hak Cipta Dilindungi Undang-Undang.</p>
                            <div className="flex items-center gap-4">
                                <span className="inline-flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-brand-secondary"></span>
                                    Sistem Informasi Resmi Jam'iyyah
                                </span>
                            </div>
                        </div>
                    </div>
                </footer>

                {/* Mobile Bottom Navigation */}
                <aside className="sticky bottom-0 z-40 w-full bg-surface-card/95 backdrop-blur-md border-t border-border-light px-4 py-2 flex items-center justify-around shadow-lg md:hidden">
                    <a className="flex flex-col items-center justify-center w-14 h-11 text-brand-primary font-semibold" href="/beranda">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                        <span className="text-[10px] leading-tight mt-0.5">Beranda</span>
                    </a>
                    <a className="flex flex-col items-center justify-center w-14 h-11 text-text-secondary hover:text-brand-primary transition-colors" href="/warta-berita">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5" /></svg>
                        <span className="text-[10px] leading-tight mt-0.5">Berita</span>
                    </a>
                    <a className="flex flex-col items-center justify-center w-14 h-11 text-text-secondary hover:text-brand-primary transition-colors" href="#kegiatan">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>
                        <span className="text-[10px] leading-tight mt-0.5">Agenda</span>
                    </a>
                    <a className="flex flex-col items-center justify-center w-14 h-11 text-text-secondary hover:text-brand-primary transition-colors" href="#banom">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" /></svg>
                        <span className="text-[10px] leading-tight mt-0.5">Banom</span>
                    </a>
                    <a className="flex flex-col items-center justify-center w-14 h-11 text-text-secondary hover:text-brand-primary transition-colors" href="#">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        <span className="text-[10px] leading-tight mt-0.5">KTA</span>
                    </a>
                </aside>
            </div>
        </>
    );
}
