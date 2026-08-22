export interface Product {
  id: string;
  model: string;
  name: string;
  nameEn: string;
  category: 'powerbank' | 'charger' | 'cable' | 'earbuds';
  price: number;
  oldPrice?: number;
  badge?: string;
  discount?: string;
  rating: number;
  image: string;
  description: string;
  specs: string[];
  inStock: boolean;
}

export interface SiteConfig {
  name: string;
  nameEn: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  warrantyMonths: number;
}

export const SITE_CONFIG: SiteConfig = {
  name: "كابليتو",
  nameEn: "Cableto",
  tagline: "الموقع الرسمي للشواحن والكابلات السريعة والباور بانك",
  phone: "01000000000",
  whatsapp: "201000000000",
  email: "info@cableto.eg",
  address: "القاهرة، جمهورية مصر العربية",
  warrantyMonths: 12
};

export const PRODUCTS_DATA: Product[] = [
  {
    id: "cb-pb20k",
    model: "CB-PB20K",
    name: "باور بانك كابليتو TitanPower 20,000mAh بقوة 65W مع شاشة LED الرقمية",
    nameEn: "Cableto TitanPower 20,000mAh 65W Power Bank",
    category: "powerbank",
    price: 1250,
    oldPrice: 1550,
    badge: "الأكثر مبيعاً",
    discount: "-20%",
    rating: 4.9,
    image: "/images/powerbank.jpg",
    description: "باور بانك فائق السرعة بسعة 20,000 مللي أمبير وشحن لابتوب وهواتف آيفون وأندرويد بقوة 65 واط.",
    specs: ["سعة 20,000mAh", "مخرج شحن سريع 65W Type-C", "شاشة LED رقمية لقياس النسبة", "حماية ضدد السخونة والتيار الزائد"],
    inStock: true
  },
  {
    id: "cb-ch100w",
    model: "CB-CH100W",
    name: "شاحن جداري كابليتو GaNPro بقوة 100W ثلاثي المنافذ (2x Type-C + USB-A)",
    nameEn: "Cableto GaNPro 100W Fast Charger",
    category: "charger",
    price: 790,
    oldPrice: 990,
    badge: "تكنولوجيا GaN",
    discount: "-20%",
    rating: 5.0,
    image: "/images/charger.jpg",
    description: "شاحن ذكي فائق الصغر بقوة 100 واط مع تقنية النيتريد جاليومGaN لشحن 3 أجهزة في وقت واحد بأعلى أمان.",
    specs: ["قوة إجمالية 100W", "منفذين PD 3.0 Type-C", "منفذ USB-A QC4.0", "تصميم مدمج للمكتب والسفر"],
    inStock: true
  },
  {
    id: "cb-cb240w",
    model: "CB-CB240W",
    name: "كابل شحن كابليتو ArmorFlex مجدول بقوة 240W مع شاشة قياس الواط",
    nameEn: "Cableto ArmorFlex 240W Braided Cable",
    category: "cable",
    price: 290,
    oldPrice: 350,
    badge: "جديد",
    rating: 4.8,
    image: "/images/cable.jpg",
    description: "كابل نايلون مجدول مقوى بالألياف فائقة التحمل شحن حتى 240W مع شاشة إلكترونية لعرض سرعة الشحن اللحظية.",
    specs: ["طول 1.2 متر", "يدعم شحن حتى 240W (48V/5A)", "نايلون مجدول عالي الكثافة", "شاشة إلكترونية واط مدمجة"],
    inStock: true
  },
  {
    id: "cb-pods-anc",
    model: "CB-PODS-ANC",
    name: "سماعات لاسلكية كابليتو UltraPods مع عزل ضوضاء نشط ANC حافظة شفافة",
    nameEn: "Cableto UltraPods ANC Wireless Earbuds",
    category: "earbuds",
    price: 1350,
    oldPrice: 1800,
    badge: "عزل ضوضاء",
    discount: "-25%",
    rating: 4.9,
    image: "/images/earbuds.jpg",
    description: "سماعات أذن بلوتوث 5.3 بصوت استريو HIFI وتصميم حافظة شفاف وميكروفونات مزدوجة للمكالمات النقية.",
    specs: ["عزل ضوضاء ANC -35dB", "بطارية تعمل حتى 30 ساعة", "بلوتوث Bluetooth 5.3", "مقاومة للماء والعرَق IPX5"],
    inStock: true
  }
];

export const CATEGORIES_DATA = [
  { id: 'powerbank', name: 'باور بانك', count: '10k - 30k mAh', image: '/images/powerbank.jpg' },
  { id: 'charger', name: 'شواحن جدارية', count: 'GaN 65W - 140W', image: '/images/charger.jpg' },
  { id: 'cable', name: 'كابلات شحن', count: 'Type-C, Lightning', image: '/images/cable.jpg' },
  { id: 'earbuds', name: 'سماعات وصوتيات', count: 'ANC & Bass Speakers', image: '/images/earbuds.jpg' },
];
