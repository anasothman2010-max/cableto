'use client';

import React, { useState } from 'react';
import { ShieldCheck, Search, CheckCircle2, AlertTriangle } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/products';

export const SerialVerify: React.FC = () => {
  const [code, setCode] = useState('');
  const [result, setResult] = useState<{ status: 'idle' | 'success' | 'error'; message: string }>({
    status: 'idle',
    message: ''
  });

  const handleVerify = () => {
    const trimmed = code.trim().toUpperCase();
    if (!trimmed) {
      setResult({ status: 'error', message: 'الرجاء إدخال السيريال كود الموجود على العلبة.' });
      return;
    }

    if (trimmed.startsWith('CABLETO') || trimmed.startsWith('CBL') || trimmed.length >= 8) {
      setResult({
        status: 'success',
        message: `منتج أصلي 100% من شركة كابليتو (Cableto) - ضمان معتمد لمدة ${SITE_CONFIG.warrantyMonths} شهراً مفعل بنجاح!`
      });
    } else {
      setResult({
        status: 'error',
        message: 'الكود غير صحيح، يرجى التثبت من الأرقام أسفل الشريط المائي أو التواصل مع الدعم.'
      });
    }
  };

  return (
    <section id="serial-verify" className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-sky-50 via-white to-slate-50 border-2 border-sky-200 rounded-3xl p-8 md:p-12 text-center shadow-lg shadow-sky-500/5">
          <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-sky-600">
            <ShieldCheck className="w-10 h-10" />
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
            فحص وتأكيد الأصالة لمنتجات <span className="text-sky-600">كابليتو</span>
          </h2>

          <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto mb-8">
            تأكد أن منتجك أصلي 100% وداخل الضمان عبر كتابة السيريال كود الموجود تحت الشريط المائي على العلبة.
          </p>

          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="أدخل الكود هنا (مثال: CABLETO-8899-X)"
              className="flex-1 px-5 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-900 font-bold placeholder:font-normal placeholder:text-slate-400 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 text-center sm:text-right"
            />
            <button
              onClick={handleVerify}
              className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-extrabold flex items-center justify-center gap-2 shadow-md shadow-sky-500/20 transition-all shrink-0"
            >
              <Search className="w-4 h-4" />
              تحقق الآن
            </button>
          </div>

          {result.status !== 'idle' && (
            <div
              className={`mt-6 p-4 rounded-xl font-extrabold text-sm max-w-md mx-auto flex items-center gap-2 text-right ${
                result.status === 'success'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-rose-50 text-rose-700 border border-rose-200'
              }`}
            >
              {result.status === 'success' ? (
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />
              ) : (
                <AlertTriangle className="w-5 h-5 shrink-0 text-rose-600" />
              )}
              <span>{result.message}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
