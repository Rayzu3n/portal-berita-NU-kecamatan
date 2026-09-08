import { Head } from '@inertiajs/react';

const riwayatKegiatan = [
    { judul: 'Pelatihan Kepemimpinan Dasar (PKD)', tanggal: '15 Apr 2025', status: 'Selesai', skp: '16 JP' },
    { judul: 'Majelis Dzikir Rijalul Ansor', tanggal: '10 Apr 2025', status: 'Selesai', skp: '4 JP' },
    { judul: 'Rapat Koordinasi Pengurus', tanggal: '05 Apr 2025', status: 'Selesai', skp: '8 JP' },
    { judul: 'Workshop Jurnalistik', tanggal: '28 Mar 2025', status: 'Selesai', skp: '12 JP' },
];

export default function MemberProfil() {
    return (
        <>
            <Head title="Profil & KTA Digital" />
            <div className="min-h-screen flex flex-col bg-surface-warm">
                {/* Header */}
                <header className="bg-surface-card w-full shadow-sm sticky top-0 z-50">
                    <div className="flex justify-between items-center w-full px-4 md:px-8 max-w-[1280px] mx-auto h-16">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center text-white shadow-sm ring-1 ring-brand-primary/20">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 0 0 0 18M12 3a14 14 0 0 1 0 18" />
                                </svg>
                            </div>
                            <div>
                                <span className="text-title-lg font-bold text-brand-primary tracking-tight block leading-none">Portal Anggota MWC NU</span>
                                <span className="text-caption text-text-muted mt-1 block">Kecamatan Digital Hub • Pengurus Cabang</span>
                            </div>
                        </div>

                        <nav className="hidden md:flex items-center gap-2 h-full pt-1">
                            <a className="text-text-secondary pb-1 font-normal hover:bg-brand-primary-light hover:text-brand-primary transition-colors duration-150 px-2 py-1 rounded text-label-md" href="/member/dashboard">Dashboard</a>
                            <a className="text-text-secondary pb-1 font-normal hover:bg-brand-primary-light hover:text-brand-primary transition-colors duration-150 px-2 py-1 rounded text-label-md" href="#">Kegiatan Saya</a>
                            <a className="border-b-2 border-brand-primary text-brand-primary pb-1 font-semibold px-2 py-1 flex items-center gap-1.5 text-label-md" href="/member/profil">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5z" /></svg>
                                Profil & KTA Digital
                            </a>
                            <a className="text-text-secondary pb-1 font-normal hover:bg-brand-primary-light hover:text-brand-primary transition-colors duration-150 px-2 py-1 rounded text-label-md" href="#">Layanan Anggota</a>
                        </nav>

                        <div className="flex items-center gap-3">
                            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-status-success-bg border border-brand-secondary text-status-success rounded-full text-label-sm">
                                <span className="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
                                KTA Aktif
                            </div>
                            <button aria-label="Notifikasi" className="relative p-2 text-text-secondary hover:text-brand-primary hover:bg-brand-primary-light rounded-lg transition-colors duration-150" type="button">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>
                                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-primary rounded-full ring-2 ring-white"></span>
                            </button>
                            <div className="h-6 w-[1px] bg-border-subtle hidden sm:block"></div>
                            <div className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-lg border border-border-light bg-surface-tint">
                                <div className="w-8 h-8 rounded-full bg-brand-primary-light border border-brand-primary/20 flex items-center justify-center text-brand-primary font-bold text-xs">AF</div>
                                <div className="hidden lg:block text-left">
                                    <span className="text-label-sm text-text-primary block leading-tight">Ahmad Fauzi</span>
                                    <span className="text-caption text-text-muted block">GP Ansor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 md:px-8 py-8">
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-6 text-caption text-text-muted">
                        <a className="hover:text-brand-primary transition-colors" href="/member/dashboard">Portal MWC NU</a>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                        <a className="hover:text-brand-primary transition-colors" href="/member/dashboard">Anggota Terdaftar</a>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                        <span className="text-text-primary font-medium">Profil & KTA Digital</span>
                    </nav>

                    {/* Profile Header */}
                    <section className="bg-surface-card rounded-xl border border-border-subtle shadow-sm p-6 md:p-8 mb-8 relative overflow-hidden">
                        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-brand-primary-light/50 pointer-events-none blur-2xl"></div>
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                <div className="relative flex-shrink-0">
                                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-surface-tint border-2 border-brand-primary flex items-center justify-center text-brand-primary shadow-sm overflow-hidden">
                                        <svg className="w-16 h-16 text-text-muted" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-status-success text-white p-1 rounded-full shadow-md ring-2 ring-white" title="Terverifikasi Nasional">
                                        <svg className="w-4 h-4 block" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                        <span className="px-3 py-0.5 rounded-full bg-status-success-bg border border-brand-secondary text-status-success text-label-sm flex items-center gap-1">
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>
                                            Terverifikasi Nasional
                                        </span>
                                        <span className="px-3 py-0.5 rounded-full bg-accent-cyan-subtle border border-accent-cyan text-tertiary text-label-sm font-medium">Kader Struktural</span>
                                    </div>
                                    <h1 className="text-headline-md font-display text-text-primary tracking-tight mb-1">Ahmad Fauzi, S.Pd.I</h1>
                                    <p className="text-body-sm text-text-secondary flex flex-wrap items-center gap-2 mb-4">
                                        <span className="font-medium text-brand-primary">NIA NU: 32.04.12.2023.00492</span>
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-tint border border-border-light rounded-full text-text-primary text-label-sm">👥 Banom: <strong>GP Ansor</strong></span>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-tint border border-border-light rounded-full text-text-primary text-label-sm">🎖️ Jabatan: <strong>Ketua PAC</strong></span>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-tint border border-border-light rounded-full text-text-primary text-label-sm">🏙️ Ranting: <strong>Desa Sukamaju</strong></span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button className="h-11 px-6 border border-border-subtle bg-surface-card text-text-primary text-label-md rounded-lg inline-flex items-center gap-2 hover:bg-surface-tint transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931z" /></svg>
                                    Edit Profil
                                </button>
                                <button className="h-11 px-6 bg-brand-primary text-white text-label-md rounded-lg inline-flex items-center gap-2 hover:bg-brand-primary-hover transition-colors shadow-sm">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                                    Unduh KTA
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Digital KTA Card */}
                    <section className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                            <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5z" /></svg>
                            <h2 className="text-title-lg text-text-primary font-semibold">KTA Digital Nahdliyin</h2>
                        </div>

                        {/* KTA Card - ISO ID-1 Proportion */}
                        <div className="max-w-[540px] mx-auto md:mx-0">
                            <div className="bg-gradient-to-br from-brand-primary via-[#1C775A] to-[#165F48] rounded-2xl p-1 shadow-xl">
                                <div className="bg-surface-card rounded-xl p-6 md:p-8 relative overflow-hidden">
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                                        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="40" />
                                            <path d="M50 10a40 40 0 0 0 0 80" />
                                            <path d="M50 10a40 40 0 0 1 0 80" />
                                        </svg>
                                    </div>

                                    {/* Card Header */}
                                    <div className="flex items-start justify-between mb-6 relative z-10">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-lg bg-brand-primary flex items-center justify-center text-white shadow-sm">
                                                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                                    <circle cx="12" cy="12" r="9" />
                                                    <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 0 0 0 18M12 3a14 14 0 0 1 0 18" />
                                                </svg>
                                            </div>
                                            <div>
                                                <span className="text-title-md font-bold text-brand-primary block leading-none">MWC NU Kecamatan</span>
                                                <span className="text-[10px] text-text-muted tracking-wider uppercase">Kartu Tanda Anggota Digital</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-status-success-bg text-status-success text-[10px] font-semibold">
                                                <span className="w-1.5 h-1.5 rounded-full bg-status-success"></span>
                                                AKTIF
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="flex gap-6 relative z-10">
                                        {/* Photo */}
                                        <div className="shrink-0">
                                            <div className="w-24 h-28 rounded-lg bg-surface-tint border-2 border-border-subtle flex items-center justify-center overflow-hidden">
                                                <svg className="w-14 h-14 text-text-muted" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                                            </div>
                                        </div>
                                        {/* Info */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-headline-sm font-display text-text-primary font-semibold mb-1 truncate">Ahmad Fauzi, S.Pd.I</h3>
                                            <p className="text-label-sm text-brand-primary font-semibold mb-3">NU-3204-2023-08492</p>
                                            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-body-sm">
                                                <div>
                                                    <span className="text-text-muted text-caption block">Banom</span>
                                                    <span className="text-text-primary font-medium text-label-sm">GP Ansor</span>
                                                </div>
                                                <div>
                                                    <span className="text-text-muted text-caption block">Jabatan</span>
                                                    <span className="text-text-primary font-medium text-label-sm">Ketua PAC</span>
                                                </div>
                                                <div>
                                                    <span className="text-text-muted text-caption block">Ranting</span>
                                                    <span className="text-text-primary font-medium text-label-sm">Desa Sukamaju</span>
                                                </div>
                                                <div>
                                                    <span className="text-text-muted text-caption block">Berlaku</span>
                                                    <span className="text-text-primary font-medium text-label-sm">31 Des 2028</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* QR Placeholder */}
                                        <div className="shrink-0 flex flex-col items-center gap-1">
                                            <div className="w-20 h-20 bg-surface-tint border border-border-subtle rounded-lg flex items-center justify-center">
                                                <svg className="w-12 h-12 text-text-muted" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" /><path d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75ZM6.75 13.5h.75v.75h-.75v-.75Z" /></svg>
                                            </div>
                                            <span className="text-[10px] text-text-muted">Scan untuk verifikasi</span>
                                        </div>
                                    </div>

                                    {/* Card Footer */}
                                    <div className="mt-6 pt-4 border-t border-border-light flex items-center justify-between relative z-10">
                                        <span className="text-caption text-text-muted">Masa Berlaku: 01 Januari 2024 — 31 Desember 2028</span>
                                        <span className="text-caption text-text-muted flex items-center gap-1">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                                            Dokumen Resmi SISLOG NU
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Riwayat Kegiatan */}
                    <section className="bg-surface-card border border-border-subtle rounded-xl p-6 shadow-sm">
                        <h2 className="text-title-lg text-text-primary font-semibold mb-4">Riwayat Kegiatan</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-border-subtle">
                                        <th className="text-left py-3 px-4 text-label-sm text-text-secondary font-semibold uppercase tracking-wider">Kegiatan</th>
                                        <th className="text-left py-3 px-4 text-label-sm text-text-secondary font-semibold uppercase tracking-wider">Tanggal</th>
                                        <th className="text-left py-3 px-4 text-label-sm text-text-secondary font-semibold uppercase tracking-wider">Status</th>
                                        <th className="text-left py-3 px-4 text-label-sm text-text-secondary font-semibold uppercase tracking-wider">SKP</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {riwayatKegiatan.map((item, i) => (
                                        <tr key={i} className="border-b border-border-light hover:bg-surface-tint transition-colors">
                                            <td className="py-4 px-4 text-body-sm text-text-primary font-medium">{item.judul}</td>
                                            <td className="py-4 px-4 text-body-sm text-text-secondary">{item.tanggal}</td>
                                            <td className="py-4 px-4">
                                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-status-success-bg text-status-success text-label-sm font-medium">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-status-success"></span>
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="py-4 px-4 text-body-sm text-text-secondary">{item.skp}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="w-full border-t border-border-subtle bg-surface-container px-6 md:px-8 py-8 mt-16">
                    <div className="max-w-[1280px] mx-auto text-center text-label-sm text-text-secondary">
                        <p>© 2025 MWC NU Kecamatan. Portal Anggota Digital.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
