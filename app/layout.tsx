import type { Metadata } from 'next';
import { Cairo, Outfit } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/constants/products';
import { Analytics } from '@vercel/analytics/react';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-cairo',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.nameEn} | ${SITE_CONFIG.name}`,
  description: 'تسوق أحدث الشواحن السريعة، الباور بانك والكابلات المجدولة الأصلية مع ضمان 12 شهراً وشحن لكل المحافظات.',
  verification: {
    google: 'lufdPjx7Ntupfd4U8_RQUz_YaMTLpSAqahYxTB7Oo8w',
  },
  openGraph: {
    title: `${SITE_CONFIG.nameEn} | ${SITE_CONFIG.name}`,
    description: 'تسوق أحدث الشواحن السريعة، الباور بانك والكابلات المجدولة الأصلية مع ضمان 12 شهراً وشحن لكل المحافظات.',
    url: 'https://cableto.vercel.app',
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: 'https://cableto.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
    locale: 'ar_EG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.nameEn} | ${SITE_CONFIG.name}`,
    description: 'تسوق أحدث الشواحن السريعة، الباور بانك والكابلات المجدولة الأصلية مع ضمان 12 شهراً وشحن لكل المحافظات.',
    images: ['https://cableto.vercel.app/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${outfit.variable}`}>
      <body className="font-sans bg-slate-50 text-slate-900 min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}