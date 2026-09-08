import { Head } from '@inertiajs/react';

const beritaList = [
    {
        judul: 'Konferensi MWC NU Kecamatan Rampungkan Pembentukan Pengurus Ranting se-Kecamatan',
        ringkasan: 'Sinergi struktural diperkuat hingga tingkat akar rumput desa. Seluruh perwakilan ranting menetapkan kepengurusan baru guna menyongsong amanat khidmat periode 2025-2030.',
        kategori: 'Keorganisasian',
        tanggal: '14 April 2025',
        penulis: 'Humas Tanfidziyah',
        icon: '🔗',
    },
    {
        judul: 'Program Dakwah Digital: MWC NU Luncurkan Kanal Youtube Resmi Kajian Kitab Kuning',
        ringkasan: 'Transformasi dakwah literasi kitab kuning melalui media audio visual berbasis teknologi cloud untuk menjangkau diaspora Nahdliyin di seluruh penjuru nusantara.',
        kategori: 'Keagamaan & Kajian',
        tanggal: '12 April 2025',
        penulis: 'LTN NU Kecamatan',
        icon: '📻',
    },
    {
        judul: 'LAZISNU Distribusikan Zakat Fitrah kepada 850 Mustahik di 14 Desa',
        ringkasan: 'Pendistribusian zakat fitrah terkoordinasi bersama 14 pengurus ranting berhasil menyalurkan beras dan dana tunai kepada keluarga mustahik tepat waktu menjelang Idul Fitri.',
        kategori: 'Sosial & Kemasyarakatan',
        tanggal: '10 April 2025',
        penulis: 'LAZISNU Kecamatan',
        icon: '🤲',
    },
    {
        judul: 'Fatayat NU Sukseskan Program Pencegahan Stunting Balita di Posyandu Binaan',
        ringkasan: 'Pemberian makanan tambahan bernutrisi tinggi dan edukasi pola asuh higienis digelar serentak di 5 titik posyandu pedesaan.',
        kategori: 'Sosial & Kemasyarakatan',
        tanggal: '07 Mei 2025',
        penulis: 'PAC Fatayat NU',
        icon: '👨‍👩‍👧',
    },
    {
        judul: 'IPNU-IPPNU Gelar Makesta Raya Sambut Pelajar Baru di Tingkat Ranting',
        ringkasan: 'Masa Kesetiaan Anggota (Makesta) diikuti lebih dari 200 kader muda pelajar SMP/SMA sederajat untuk mencetak generasi Aswaja berwawasan kebangsaan.',
        kategori: 'Kegiatan Banom',
        tanggal: '05 Mei 2025',
        penulis: 'PAC IPNU-IPPNU',
        icon: '👥',
    },
    {
        judul: 'Pelatihan Digital Marketing bagi Pelaku UMKM Warga Nahdliyin',
        ringkasan: 'Kolaborasi Lembaga Perekonomian NU membekali 60 pengusaha mikro lokal dengan keahlian pemasaran online dan sertifikasi halal gratis.',
        kategori: 'Ekonomi Umat',
        tanggal: '08 Mei 2025',
        penulis: 'LPNU Kecamatan',
        icon: '🏪',
    },
];

const kategoriFilter = ['Semua Kategori', 'Keorganisasian', 'Pendidikan', 'Keagamaan & Kajian', 'Sosial & Kemasyarakatan', 'Kegiatan Banom', 'Ekonomi Umat'];

export default function WartaBerita() {
    return (
        <>
            <Head title="Warta & Berita" />
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
                            <a className="text-text-secondary hover:text-text-primary transition-colors duration-150 text-label-md" href="/beranda">Beranda</a>
                            <a className="text-brand-primary font-semibold border-b-2 border-brand-primary pb-1 text-label-md" href="/warta-berita">Berita</a>
                            <a className="text-text-secondary hover:text-text-primary transition-colors duration-150 text-label-md" href="#">Kegiatan Banom</a>
                            <a className="text-text-secondary hover:text-text-primary transition-colors duration-150 text-label-md" href="#">Badan Otonom</a>
                            <a className="text-text-secondary hover:text-text-primary transition-colors duration-150 text-label-md" href="#">Tentang Kami</a>
                        </nav>

                        <div className="hidden md:flex items-center gap-4">
                            <a className="inline-flex items-center gap-2 px-6 h-10 bg-brand-primary text-white hover:bg-brand-primary-hover rounded-lg text-label-md transition-all duration-200 shadow-sm" href="#">
                                <span>Portal Anggota</span>
                            </a>
                        </div>

                        <button className="md:hidden p-2 text-text-primary hover:text-brand-primary rounded-lg" aria-label="Buka Menu">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
                        </button>
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 w-full">
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-label-sm text-text-secondary mb-4">
                        <a className="hover:text-brand-primary transition-colors duration-150" href="/beranda">Beranda</a>
                        <svg className="w-3.5 h-3.5 text-border-subtle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                        <span className="text-text-primary font-semibold">Warta & Berita</span>
                    </nav>

                    {/* Page Banner */}
                    <section className="bg-surface-card border border-border-subtle rounded-xl p-8 md:p-12 mb-8 relative overflow-hidden shadow-sm">
                        <div className="relative z-10 max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-brand-primary-light border border-brand-primary/20 text-brand-primary text-label-sm mb-4">
                                <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse"></span>
                                <span>Warta Resmi & Publikasi Aswaja</span>
                            </div>
                            <h1 className="text-headline-lg-mobile md:text-display-hero font-display text-text-primary mb-4 leading-tight">
                                Warta & Berita NU Kecamatan
                            </h1>
                            <p className="text-body-lg text-text-secondary max-w-2xl">
                                Kabar resmi, dokumentasi kegiatan dakwah, kajian keagamaan, dan warta organisasi MWC NU beserta Badan Otonom tingkat Kecamatan.
                            </p>
                        </div>
                        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none hidden md:flex items-center justify-end pr-8">
                            <svg className="w-60 h-60 text-brand-primary" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24"><path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
                        </div>
                    </section>

                    {/* Search & Filter */}
                    <section className="bg-surface-card border border-border-subtle rounded-xl p-6 mb-8 shadow-sm">
                        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
                            <div className="relative flex-1 max-w-lg">
                                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                <input className="w-full h-11 pl-11 pr-4 bg-surface-card border border-border-subtle rounded-lg text-text-primary placeholder:text-text-muted text-body-md focus:border-border-focus focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all duration-150" placeholder="Cari artikel, topik, atau kegiatan..." type="text" />
                            </div>
                            <div className="flex items-center gap-3 self-end lg:self-auto w-full sm:w-auto">
                                <label className="text-label-sm text-text-secondary whitespace-nowrap hidden sm:inline-block" htmlFor="sort-select">Urutkan:</label>
                                <div className="relative w-full sm:w-48">
                                    <select className="w-full h-11 pl-4 pr-8 bg-surface-card border border-border-subtle rounded-lg text-text-primary text-label-md appearance-none focus:border-border-focus focus:ring-2 focus:ring-brand-primary/20 outline-none" id="sort-select">
                                        <option>Terbaru</option>
                                        <option>Terpopuler</option>
                                        <option>Agenda Mendatang</option>
                                    </select>
                                    <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-border-light flex items-center gap-2 overflow-x-auto pb-2">
                            {kategoriFilter.map((kat, i) => (
                                <button key={i} className={`h-9 px-4 rounded-full text-label-sm whitespace-nowrap transition-colors duration-150 ${i === 0 ? 'bg-brand-primary text-white shadow-sm' : 'bg-surface-tint border border-border-subtle text-text-secondary hover:text-brand-primary hover:border-brand-primary/40'}`}>
                                    {kat}
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Featured Article */}
                    <article className="bg-surface-card border border-border-subtle rounded-xl overflow-hidden mb-12 shadow-sm hover:shadow-md transition-all duration-200">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                            <div className="lg:col-span-6 bg-brand-primary-light border-b lg:border-b-0 lg:border-r border-border-subtle p-8 flex flex-col justify-between relative min-h-[300px]">
                                <div className="flex items-center justify-between">
                                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-brand-primary text-brand-primary text-label-sm">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09z" /></svg>
                                        Sorotan Utama
                                    </span>
                                    <span className="text-caption text-text-secondary">Warta Khusus Syuriyah</span>
                                </div>
                                <div className="my-auto py-6 text-center">
                                    <div className="w-20 h-20 mx-auto rounded-2xl bg-surface-card border border-border-subtle flex items-center justify-center text-brand-primary shadow-sm mb-4">
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
                                    </div>
                                    <p className="text-headline-sm font-display text-brand-primary font-medium">Kajian Aswaja An-Nahdliyah</p>
                                    <p className="text-caption text-text-muted">Dokumentasi Pemikiran & Risalah Ilmiah</p>
                                </div>
                                <div className="flex items-center justify-between text-text-secondary text-label-sm pt-4 border-t border-brand-primary/10">
                                    <span>Edisi: Syawal 1446 H</span>
                                    <span className="flex items-center gap-1">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>
                                        4 Menit Baca
                                    </span>
                                </div>
                            </div>
                            <div className="lg:col-span-6 p-8 md:p-10 flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <span className="px-3 py-1 rounded-full bg-status-success-bg text-status-success border border-brand-secondary text-label-sm">Keagamaan & Kajian</span>
                                        <span className="text-body-sm text-text-secondary">Rabu, 16 April 2025</span>
                                    </div>
                                    <h2 className="text-headline-md md:text-headline-lg font-display text-text-primary mb-4 hover:text-brand-primary cursor-pointer transition-colors duration-150">
                                        Muktamar Pemikiran Aswaja: Meneguhkan Nilai Moderasi Beragama di Kalangan Generasi Muda Kecamatan
                                    </h2>
                                    <p className="text-body-md text-text-secondary mb-6 line-clamp-4">
                                        Majelis Wakil Cabang Nahdlatul Ulama menggelar forum dialog pemikiran lintas generasi sebagai ikhtiar memperkuat benteng aqidah Ahlussunnah wal Jama'ah an-Nahdliyah. Forum ini menitikberatkan pada penguatan prinsip tawasuth (moderat), tawazun (seimbang), dan tasamuh (toleran) dalam merespons dinamika sosial-kemasyarakatan era digital.
                                    </p>
                                </div>
                                <div className="flex items-center justify-between pt-6 border-t border-border-light">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-surface-tint border border-border-subtle flex items-center justify-center text-brand-primary font-semibold text-label-md">LTN</div>
                                        <div>
                                            <p className="text-label-md text-text-primary">Lembaga Ta'lif wan Nasyr (LTN)</p>
                                            <p className="text-caption text-text-muted">Redaksi Resmi MWC NU</p>
                                        </div>
                                    </div>
                                    <a className="h-11 px-6 bg-brand-primary text-white text-label-md rounded-lg inline-flex items-center justify-center hover:bg-brand-primary-hover transition-all duration-150 gap-2" href="#">
                                        <span>Baca Selengkapnya</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Two Column: News + Sidebar */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <section className="lg:col-span-8">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5" /></svg>
                                    <h2 className="text-headline-sm font-display text-text-primary">Daftar Warta Terbaru</h2>
                                </div>
                                <span className="text-caption text-text-secondary">Halaman 1 dari 6</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {beritaList.map((item, i) => (
                                    <article key={i} className="bg-surface-card border border-border-subtle rounded-xl overflow-hidden flex flex-col hover:border-brand-primary/40 hover:shadow-md transition-all duration-200">
                                        <div className="h-44 bg-surface-tint border-b border-border-subtle flex flex-col justify-center items-center relative p-4">
                                            <span className="text-4xl opacity-30 mb-2">{item.icon}</span>
                                            <span className="text-caption text-text-secondary">{item.kategori}</span>
                                            <span className="absolute top-3 left-3 px-3 py-0.5 rounded-full bg-surface-card border border-border-subtle text-label-sm text-brand-primary">{item.kategori}</span>
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col justify-between">
                                            <div>
                                                <p className="text-caption text-text-secondary mb-2">{item.tanggal} • {item.penulis}</p>
                                                <h3 className="text-headline-sm font-display text-text-primary mb-3 hover:text-brand-primary transition-colors cursor-pointer leading-snug">{item.judul}</h3>
                                                <p className="text-body-sm text-text-secondary line-clamp-3 mb-4">{item.ringkasan}</p>
                                            </div>
                                            <div className="pt-4 border-t border-border-light flex items-center justify-between">
                                                <span className="text-caption text-text-muted">Oleh: {item.penulis}</span>
                                                <a className="text-label-sm text-brand-primary hover:underline inline-flex items-center gap-1" href="#">
                                                    Rincian <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="mt-8 flex items-center justify-center gap-2">
                                <button className="w-10 h-10 rounded-lg border border-border-subtle bg-surface-card text-text-secondary text-label-md flex items-center justify-center hover:border-brand-primary hover:text-brand-primary transition-colors" disabled>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
                                </button>
                                <button className="w-10 h-10 rounded-lg bg-brand-primary text-white text-label-md font-semibold flex items-center justify-center shadow-sm">1</button>
                                <button className="w-10 h-10 rounded-lg border border-border-subtle bg-surface-card text-text-secondary text-label-md flex items-center justify-center hover:border-brand-primary hover:text-brand-primary transition-colors">2</button>
                                <button className="w-10 h-10 rounded-lg border border-border-subtle bg-surface-card text-text-secondary text-label-md flex items-center justify-center hover:border-brand-primary hover:text-brand-primary transition-colors">3</button>
                                <button className="w-10 h-10 rounded-lg border border-border-subtle bg-surface-card text-text-secondary text-label-md flex items-center justify-center hover:border-brand-primary hover:text-brand-primary transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                                </button>
                            </div>
                        </section>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4 space-y-6">
                            {/* Kategori Warta */}
                            <div className="bg-surface-card border border-border-subtle rounded-xl p-6 shadow-sm">
                                <h3 className="text-title-lg text-text-primary font-semibold mb-4">Kategori Warta</h3>
                                <div className="space-y-2">
                                    {['Keorganisasian', 'Pendidikan', 'Keagamaan & Kajian', 'Sosial & Kemasyarakatan', 'Kegiatan Banom', 'Ekonomi Umat'].map((kat, i) => (
                                        <a key={i} className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-surface-tint text-body-sm text-text-secondary hover:text-brand-primary transition-colors" href="#">
                                            <span>{kat}</span>
                                            <span className="text-caption text-text-muted bg-surface-tint px-2 py-0.5 rounded-full">{Math.floor(Math.random() * 15) + 3}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Warta Populer */}
                            <div className="bg-surface-card border border-border-subtle rounded-xl p-6 shadow-sm">
                                <h3 className="text-title-lg text-text-primary font-semibold mb-4">Warta Populer</h3>
                                <div className="space-y-4">
                                    {beritaList.slice(0, 4).map((item, i) => (
                                        <a key={i} className="flex gap-3 group" href="#">
                                            <span className="shrink-0 w-8 h-8 rounded-full bg-brand-primary-light text-brand-primary text-label-md font-bold flex items-center justify-center">{i + 1}</span>
                                            <div>
                                                <p className="text-body-sm text-text-primary group-hover:text-brand-primary transition-colors line-clamp-2 leading-snug">{item.judul}</p>
                                                <p className="text-caption text-text-muted mt-1">{item.tanggal}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
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
                                    Gedung Sekretariat Bersama MWC NU Kecamatan, Jl. Raya Santri No. 1926, Jawa Timur, Indonesia.
                                </p>
                            </div>
                            <div className="lg:col-span-3 space-y-4">
                                <h4 className="text-headline-sm font-display text-brand-primary font-semibold">Tautan Kelembagaan</h4>
                                <ul className="space-y-2 text-body-sm">
                                    <li><a className="text-text-secondary hover:text-brand-primary transition-colors" href="#">Tentang MWC NU</a></li>
                                    <li><a className="text-text-secondary hover:text-brand-primary transition-colors" href="#">Struktur Pengurus</a></li>
                                    <li><a className="text-text-secondary hover:text-brand-primary transition-colors" href="#">Lembaga & Banom</a></li>
                                    <li><a className="text-text-secondary hover:text-brand-primary transition-colors" href="/warta-berita">Warta & Berita</a></li>
                                </ul>
                            </div>
                            <div className="lg:col-span-4 space-y-4">
                                <h4 className="text-headline-sm font-display text-brand-primary font-semibold">Layanan & Transparansi</h4>
                                <ul className="space-y-2 text-body-sm">
                                    <li><a className="text-text-secondary hover:text-brand-primary transition-colors" href="#">Agenda Kegiatan</a></li>
                                    <li><a className="text-text-secondary hover:text-brand-primary transition-colors" href="#">Transparansi Program</a></li>
                                    <li><a className="text-text-secondary hover:text-brand-primary transition-colors" href="#">Kebijakan Privasi</a></li>
                                    <li><a className="text-text-secondary hover:text-brand-primary transition-colors" href="#">Kontak Sekretariat</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="pt-6 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4 text-text-secondary text-label-sm">
                            <p>© 2025 Majelis Wakil Cabang Nahdlatul Ulama (MWC NU) Kecamatan. Hak Cipta Dilindungi.</p>
                        </div>
                    </div>
                </footer>

                {/* Mobile Bottom Navigation */}
                <aside className="sticky bottom-0 z-40 w-full bg-surface-card/95 backdrop-blur-md border-t border-border-light px-4 py-2 flex items-center justify-around shadow-lg md:hidden">
                    <a className="flex flex-col items-center justify-center w-14 h-11 text-text-secondary hover:text-brand-primary transition-colors" href="/beranda">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                        <span className="text-[10px] leading-tight mt-0.5">Beranda</span>
                    </a>
                    <a className="flex flex-col items-center justify-center w-14 h-11 text-brand-primary font-semibold" href="/warta-berita">
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
