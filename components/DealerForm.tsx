'use client';

import React, { useState } from 'react';
import { Store, CheckCircle, Send } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/products';

export const DealerForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="dealer" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Info */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-700 font-extrabold text-xs">
            <Store className="w-4 h-4 text-sky-500" />
            <span>شريك النجاح للجملة</span>
          </div>

          <h2 className="text-3xl font-black text-slate-900 leading-tight">
            سجّل كتاجر أو موزع معتمد لمنتجات <br />
            <span className="text-sky-600">كابليتو Cableto</span>
          </h2>

          <p className="text-slate-600 leading-relaxed text-base">
            هل تملك متجراً للإلكترونيات أو معرضاً للهواتف؟ انضم لشبكة موزعي كابليتو في كافة المحافظات واحصل على أسعار بالجملة خصومات حصرية، وضمان استبدال مباشر.
          </p>

          <ul className="space-y-3 font-bold text-slate-800 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-sky-500 shrink-0" />
              <span>أسعار تنافسية بهامش ربح مرتفع للموزعين</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-sky-500 shrink-0" />
              <span>شحن سريع ومجاني للطلبات والتوريدات الكبيرة</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-sky-500 shrink-0" />
              <span>مواد تسويقية واستاندات عرض مجانية لمتجرك</span>
            </li>
          </ul>
        </div>

        {/* Right Form Box */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
          <h3 className="text-xl font-black text-slate-900 mb-6">طلب الانضمام كتاجر جملة</h3>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-2">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-extrabold text-lg">تم إرسال طلبك بنجاح!</h4>
              <p className="text-xs text-emerald-700">سيتواصل معك مدير مبيعات كابليتو خلال ساعات لمراجعة التوريدات.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">اسم الشركة / المحل</label>
                <input
                  type="text"
                  required
                  placeholder="مثال: شركة النجم للإلكترونيات"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 outline-none focus:border-sky-500 focus:bg-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">رقم الهاتف / الواتساب</label>
                <input
                  type="tel"
                  required
                  placeholder="010XXXXXXXX"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 outline-none focus:border-sky-500 focus:bg-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">المحافظة</label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 outline-none focus:border-sky-500 focus:bg-white text-sm font-bold"
                >
                  <option value="">اختر المحافظة</option>
                  <option value="cairo">القاهرة</option>
                  <option value="giza">الجيزة</option>
                  <option value="alex">الإسكندرية</option>
                  <option value="mansoura">الدقهلية (المنصورة)</option>
                  <option value="other">محافظة أخرى</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 transition-all pt-3"
              >
                <Send className="w-4 h-4" />
                إرسال طلب الانضمام
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
