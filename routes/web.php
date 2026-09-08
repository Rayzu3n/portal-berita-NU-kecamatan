<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'beranda')->name('home');
Route::inertia('/beranda', 'beranda')->name('beranda');
Route::inertia('/warta-berita', 'warta-berita')->name('warta-berita');
Route::inertia('/member/dashboard', 'member/dashboard')->name('member.dashboard');
Route::inertia('/member/profil', 'member/profil')->name('member.profil');
Route::inertia('/admin/dashboard', 'admin/dashboard')->name('admin.dashboard');
