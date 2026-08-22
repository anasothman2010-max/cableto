'use client';

import React from 'react';
import { SITE_CONFIG } from '@/constants/products';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
        {/* Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src="/images/logo.jpg" alt="Cableto Logo" className="w-10 h-10 rounded-xl border border-sky-500" />
            <span className="font-extrabold text-xl text-slate-900 font-['Outfit']">CABLETO</span>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed">
            كابليتو العلامة المصرية الرائدة في صناعة وتوزيع كابلات الشحن السريع، الشواحن الجدارية الذكية، والباور بانك بأعلى معايير الأمان الدولية.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-extrabold text-slate-900 text-sm mb-4 text-sky-600">روابط سريعة</h4>
          <ul className="space-y-2.5 text-xs font-bold text-slate-600">
            <li><a href="#" className="hover:text-sky-600">الرئيسية</a></li>
            <li><a href="#catalog" className="hover:text-sky-600">المتجر والمنتجات</a></li>
            <li><a href="#serial-verify" className="hover:text-sky-600">فحص أصالة المنتج</a></li>
            <li><a href="#dealer" className="hover:text-sky-600">التسجيل كتاجر بالجملة</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="font-extrabold text-slate-900 text-sm mb-4 text-sky-600">خدمة العملاء</h4>
          <ul className="space-y-2.5 text-xs font-bold text-slate-600">
            <li><a href="#" className="hover:text-sky-600">سياسة الضمان والاستبدال</a></li>
            <li><a href="#" className="hover:text-sky-600">الشحن والتوصيل للمحافظات</a></li>
            <li><a href="#" className="hover:text-sky-600">الشروط والأحكام</a></li>
            <li><a href="#" className="hover:text-sky-600">الأسئلة الشائعة</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h4 className="font-extrabold text-slate-900 text-sm mb-4 text-sky-600">تواصل معنا</h4>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
            <MapPin className="w-4 h-4 text-sky-500 shrink-0" />
            <span>{SITE_CONFIG.address}</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
            <Phone className="w-4 h-4 text-sky-500 shrink-0" />
            <span>{SITE_CONFIG.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
            <Mail className="w-4 h-4 text-sky-500 shrink-0" />
            <span>{SITE_CONFIG.email}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 bg-slate-50 py-4 text-center text-xs font-bold text-slate-500">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2026 جميع الحقوق محفوظة لـ <strong>كابليتو (Cableto)</strong> | هيكلية Next.js + React المعتمدة.</p>
        </div>
      </div>
    </footer>
  );
};
