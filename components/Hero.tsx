'use client';

import React from 'react';
import { Bolt, ShieldCheck, ShoppingCart, Award, Truck, Headset } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/products';

export const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white via-sky-50/40 to-slate-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Hero Left Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-700 font-extrabold text-xs">
            <Bolt className="w-4 h-4 text-sky-500 fill-sky-500" />
            <span>تقنيات الشحن الفائق 2026</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            طاقة فائقة وأمان دائم مع <br />
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              كابليتو Cableto
            </span>
          </h1>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            استكشف التشكيلة الجديدة كلياً من الكابلات المجدولة، الباور بانك عالي السعة، والشواحن الذكية بقوة تصل إلى 140W مع ضمان معتمد لمدة {SITE_CONFIG.warrantyMonths} شهراً وشحن سريع لكل المحافظات.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#catalog"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-extrabold shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all"
            >
              <ShoppingCart className="w-5 h-5" />
              تسوق التشكيلة الجديدة
            </a>
            <a
              href="#serial-verify"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border-2 border-sky-500 text-sky-600 font-extrabold hover:bg-sky-50 hover:-translate-y-0.5 transition-all"
            >
              <ShieldCheck className="w-5 h-5" />
              فحص أصالة المنتج
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
            <div>
              <span className="block text-2xl font-black text-sky-600">+50K</span>
              <span className="text-xs font-semibold text-slate-500">عميل يثق بنا</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-sky-600">100%</span>
              <span className="text-xs font-semibold text-slate-500">ضمان استبدال</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-sky-600">24h</span>
              <span className="text-xs font-semibold text-slate-500">توصيل للمحافظات</span>
            </div>
          </div>
        </div>

        {/* Hero Image Showcase */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-sky-500/15">
            <img src="/images/hero.jpg" alt="Cableto Products Showcase" className="w-full h-auto object-cover" />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl border border-sky-100 shadow-xl flex items-center gap-3">
            <div className="p-3 bg-sky-50 rounded-xl text-sky-500">
              <Bolt className="w-6 h-6 fill-sky-500" />
            </div>
            <div>
              <strong className="block text-sm font-extrabold text-slate-900">HyperCharge 140W</strong>
              <span className="text-xs font-semibold text-sky-600">شحن آمن وفائق السرعة</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Badges Bar */}
      <div className="max-w-7xl mx-auto px-4 pt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center gap-3.5 shadow-sm">
          <Award className="w-7 h-7 text-sky-500 shrink-0" />
          <div>
            <h4 className="font-extrabold text-sm text-slate-900">ضمان {SITE_CONFIG.warrantyMonths} شهراً</h4>
            <p className="text-xs text-slate-500">استبدال فوري عند وجود عيب</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center gap-3.5 shadow-sm">
          <Truck className="w-7 h-7 text-sky-500 shrink-0" />
          <div>
            <h4 className="font-extrabold text-sm text-slate-900">شحن لكافة المحافظات</h4>
            <p className="text-xs text-slate-500">التوصيل خلال 24 - 48 ساعة</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center gap-3.5 shadow-sm">
          <ShieldCheck className="w-7 h-7 text-sky-500 shrink-0" />
          <div>
            <h4 className="font-extrabold text-sm text-slate-900">منتجات أصلية 100%</h4>
            <p className="text-xs text-slate-500">مزودة بكود تحقق مائي</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center gap-3.5 shadow-sm">
          <Headset className="w-7 h-7 text-sky-500 shrink-0" />
          <div>
            <h4 className="font-extrabold text-sm text-slate-900">دعم متاح 24/7</h4>
            <p className="text-xs text-slate-500">فريق متخصص لخدمتك</p>
          </div>
        </div>
      </div>
    </section>
  );
};
