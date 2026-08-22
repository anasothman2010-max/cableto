'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/constants/products';
import { ShoppingBag, Search, Heart, ShieldCheck, Store, Bolt, Menu } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onSearch: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Announcement Bar */}
      <div className="bg-sky-50 border-b border-sky-100 py-2 text-xs font-semibold text-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bolt className="w-4 h-4 text-sky-500 fill-sky-500" />
            <span>خصم خاص 15% على جميع كابلات Type-C السريعة | استخدم كود: <strong className="text-sky-600">CABLE15</strong></span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sky-600 font-bold">
            <a href="#serial-verify" className="flex items-center gap-1 hover:underline">
              <ShieldCheck className="w-3.5 h-3.5" /> فحص الأصالة
            </a>
            <a href="#dealer" className="flex items-center gap-1 hover:underline">
              <Store className="w-3.5 h-3.5" /> سجّل كتاجر جملة
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-sky-500 shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <img src="/images/logo.jpg" alt="Cableto Logo" className="object-cover w-full h-full" />
          </div>
          <div>
            <span className="font-extrabold text-2xl tracking-wider text-slate-900 font-['Outfit'] block leading-none">
              CABLETO
            </span>
            <span className="text-xs font-bold text-sky-500 tracking-normal block mt-0.5">
              كابليتو
            </span>
          </div>
        </a>

        {/* Search Bar */}
        <div className="hidden sm:flex flex-1 max-w-md relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="ابحث عن باور بانك، كابل 100W، شاحن سريع..."
            className="w-full bg-slate-100 border border-slate-200 rounded-full py-2.5 px-5 pr-4 pl-10 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
          />
          <Search className="w-4 h-4 text-sky-500 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="p-2.5 rounded-full bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-600 transition-colors border border-slate-200">
            <Heart className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-full bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-600 transition-colors border border-slate-200"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-sky-500 text-white font-extrabold text-xs rounded-full flex items-center justify-center shadow-md shadow-sky-500/40">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Categories Links */}
      <div className="border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-6 overflow-x-auto py-2.5 text-sm font-bold text-slate-700 whitespace-nowrap">
          <a href="#" className="text-sky-600 hover:text-sky-700">الرئيسية</a>
          <a href="#catalog" className="hover:text-sky-600 transition-colors">كل المنتجات</a>
          <a href="#powerbanks" className="hover:text-sky-600 transition-colors">باور بانك</a>
          <a href="#chargers" className="hover:text-sky-600 transition-colors">شواحن جدارية</a>
          <a href="#cables" className="hover:text-sky-600 transition-colors">كابلات شحن</a>
          <a href="#earbuds" className="hover:text-sky-600 transition-colors">سماعات وصوتيات</a>
          <a href="#serial-verify" className="hover:text-sky-600 transition-colors">تحقق من الكود</a>
          <a href="#dealer" className="hover:text-sky-600 transition-colors">سجّل كتاجر</a>
        </div>
      </div>
    </header>
  );
};
