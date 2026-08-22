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
  // Powerbanks (4)
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
    specs: ["سعة 20,000mAh", "مخرج 65W Type-C", "شاشة LED رقمية", "حماية ضدد السخونة"],
    inStock: true
  },
  {
    id: "cb-pb10k",
    model: "CB-PB10K",
    name: "باور بانك كابليتو SlimMag 10,000mAh لاسلكي مدمج مغناطيسي للآيفون",
    nameEn: "Cableto SlimMag 10,000mAh Wireless Power Bank",
    category: "powerbank",
    price: 890,
    oldPrice: 1100,
    badge: "Magsafe",
    rating: 4.8,
    image: "/images/powerbank.jpg",
    description: "باور بانك لاسلكي مغناطيسي رفيع بقوة 15W شحن سريع بدون أسلاك مع شاحن سلكي إضافي.",
    specs: ["سعة 10,000mAh", "شحن لاسلكي Magsafe", "حجم رفيع مدمج"],
    inStock: true
  },
  {
    id: "cb-pb30k",
    model: "CB-PB30K",
    name: "باور بانك كابليتو MaxVolt 30,000mAh بقوة 100W لشحن اللابتوب والهواتف",
    nameEn: "Cableto MaxVolt 30,000mAh 100W Power Bank",
    category: "powerbank",
    price: 1850,
    oldPrice: 2200,
    badge: "سعة ضخمة",
    rating: 5.0,
    image: "/images/powerbank.jpg",
    description: "عملاق الطاقة بقوة 100 واط وسعة 30,000 مللي أمبير لشحن اللابتوب حتى 3 مرات متتالية.",
    specs: ["سعة 30,000mAh", "مخرج 100W PD", "شاشة عرض البيانات"],
    inStock: true
  },
  {
    id: "cb-pb-mini",
    model: "CB-PB-MINI",
    name: "باور بانك كابليتو PocketGo 5,000mAh كبسولة شحن سريع للجيب",
    nameEn: "Cableto PocketGo 5,000mAh Mini Power Bank",
    category: "powerbank",
    price: 490,
    oldPrice: 600,
    badge: "حجم صغير",
    rating: 4.7,
    image: "/images/powerbank.jpg",
    description: "باور بانك كبسولة خفيف جداً يركب في الهاتف مباشرة للطوارئ والتنقل السريع.",
    specs: ["سعة 5,000mAh", "منفذ مدمج مباشر", "وزن خفيف 100g"],
    inStock: true
  },

  // Chargers (4)
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
    description: "شاحن ذكي فائق الصغر بقوة 100 واط لشحن 3 أجهزة في وقت واحد بأعلى أمان.",
    specs: ["قوة 100W", "منفذين PD 3.0", "تقنية GaN"],
    inStock: true
  },
  {
    id: "cb-ch65w",
    model: "CB-CH65W",
    name: "شاحن جداري كابليتو DuoCharge 65W مزدوج المنافذ Type-C للسامسونج والآيفون",
    nameEn: "Cableto DuoCharge 65W Charger",
    category: "charger",
    price: 580,
    oldPrice: 720,
    badge: "شاحن 65W",
    rating: 4.9,
    image: "/images/charger.jpg",
    description: "شاحن مزدوج بقوة 65W يدعم الشحن الفائق للهواتف الذكية وأجهزة التابلت.",
    specs: ["قوة 65W", "منفذين Type-C", "حماية ذكية"],
    inStock: true
  },
  {
    id: "cb-ch35w",
    model: "CB-CH35W",
    name: "شاحن جداري كابليتو MiniGaN 35W سريع جداً للهواتف الذكية",
    nameEn: "Cableto MiniGaN 35W Charger",
    category: "charger",
    price: 390,
    oldPrice: 480,
    badge: "شاحن 35W",
    rating: 4.8,
    image: "/images/charger.jpg",
    description: "شاحن مدمج 35W مثالي لهواتف آيفون وسامسونج وشحن سريع في نصف ساعة.",
    specs: ["قوة 35W", "حجم مدمج صغر", "تقنية GaN"],
    inStock: true
  },
  {
    id: "cb-ch-car",
    model: "CB-CH-CAR",
    name: "شاحن سيارة كابليتو TurboDrive 75W معدني مخرجين شحن فائق للسيارة",
    nameEn: "Cableto TurboDrive 75W Car Charger",
    category: "charger",
    price: 450,
    oldPrice: 550,
    badge: "شاحن سيارة",
    rating: 4.9,
    image: "/images/charger.jpg",
    description: "شاحن سيارة سبائك معدنية مقاوم للحرارة بقوة 75W مخرجين Type-C و USB-A.",
    specs: ["قوة 75W", "جسم سبائك ألومنيوم", "مخرجين سريعين"],
    inStock: true
  },

  // Cables (4)
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
    description: "كابل نايلون مجدول مقوى بالألياف فائقة التحمل مع شاشة إلكترونية واط.",
    specs: ["طول 1.2 متر", "حتى 240W", "شاشة إلكترونية"],
    inStock: true
  },
  {
    id: "cb-cb-pd27w",
    model: "CB-CB-PD27W",
    name: "كابل كابليتو Type-C إلى Lightning بقوة 27W شحن سريع للآيفون",
    nameEn: "Cableto Type-C to Lightning 27W Cable",
    category: "cable",
    price: 220,
    oldPrice: 280,
    badge: "كابل آيفون",
    rating: 4.9,
    image: "/images/cable.jpg",
    description: "كابل آيفون مجدول متين جداً شحن سريع 27W معتمد الأمان للآيفون والآيباد.",
    specs: ["طول 1 متر", "قوة 27W", "مجدول بالنايلون"],
    inStock: true
  },
  {
    id: "cb-cb-usb3a",
    model: "CB-CB-USB3A",
    name: "كابل كابليتو SmartCharge من USB-A إلى Type-C بقوة 100W مجدول",
    nameEn: "Cableto SmartCharge USB-A to Type-C 100W Cable",
    category: "cable",
    price: 170,
    oldPrice: 220,
    badge: "كابل USB-A",
    rating: 4.8,
    image: "/images/cable.jpg",
    description: "كابل شحن ونقل بيانات سريع 100W مخرج USB-A إلى Type-C.",
    specs: ["طول 1.2m", "تيار 6A فائق", "مجدول"],
    inStock: true
  },
  {
    id: "cb-cb-aux",
    model: "CB-CB-AUX",
    name: "كابل كابليتو SoundLine Type-C إلى AUX 3.5mm للصوت عالي النقاوة",
    nameEn: "Cableto SoundLine Type-C to AUX 3.5mm Cable",
    category: "cable",
    price: 190,
    oldPrice: 250,
    badge: "كابل صوتيات",
    rating: 4.7,
    image: "/images/cable.jpg",
    description: "كابل تحويل صوتيات عالي الدقة HiFi لمكبرات الصوت وتوصيل السيارة.",
    specs: ["مقبس ذهبي 3.5mm", "شريحة DAC مدمجة", "طول 1m"],
    inStock: true
  },

  // Earbuds & Audio (4)
  {
    id: "cb-pods-anc",
    model: "CB-PODS-ANC",
    name: "سماعات لاسلكية كابليتو UltraPods مع عزل ضوضاء نشط ANC وحافظة شفافة",
    nameEn: "Cableto UltraPods ANC Wireless Earbuds",
    category: "earbuds",
    price: 1350,
    oldPrice: 1800,
    badge: "عزل ضوضاء",
    discount: "-25%",
    rating: 4.9,
    image: "/images/earbuds.jpg",
    description: "سماعات بلوتوث 5.3 بصوت استريو HIFI وتصميم شفاف وميكروفونات مزدوجة.",
    specs: ["عزل ضوضاء ANC", "30 ساعة تشغيل", "بلوتوث 5.3"],
    inStock: true
  },
  {
    id: "cb-spk-360",
    model: "CB-SPK-360",
    name: "مكبر صوت كابليتو BassBlast بلوتوث محمول مع إضاءة RGB 360 درجة",
    nameEn: "Cableto BassBlast 360 Speaker",
    category: "earbuds",
    price: 650,
    oldPrice: 850,
    badge: "RGB",
    rating: 4.8,
    image: "/images/earbuds.jpg",
    description: "مكبر صوت استريو محمول بجهير قوي وصوت نقي مع حلقة إضاءة متفاعلة مع الموسيقى.",
    specs: ["صوت 360 درجة", "إضاءة RGB", "مقاوم للماء IPX6"],
    inStock: true
  },
  {
    id: "cb-pods-pro",
    model: "CB-PODS-PRO",
    name: "سماعات كابليتو AirPro 3 لاسلكية مع ميكروفون مزدوج للمكالمات النقية",
    nameEn: "Cableto AirPro 3 Earbuds",
    category: "earbuds",
    price: 990,
    oldPrice: 1250,
    badge: "صوت سينمائي",
    rating: 4.9,
    image: "/images/earbuds.jpg",
    description: "سماعات أذن لاسلكية مريحة جداً بصوت سينمائي وميكروفون نقي للمكالمات.",
    specs: ["بلوتوث 5.3", "شحن سريع للحافظة", "تحكم باللمس"],
    inStock: true
  },
  {
    id: "cb-ear-wired",
    model: "CB-EAR-WIRED",
    name: "سماعات أذن سلكية كابليتو HiFi DeepBass مع ميكروفون مخرج Type-C",
    nameEn: "Cableto HiFi DeepBass Type-C Earphones",
    category: "earbuds",
    price: 190,
    oldPrice: 250,
    badge: "سماعة سلكية",
    rating: 4.7,
    image: "/images/earbuds.jpg",
    description: "سماعات سلكية بصوت قوي جداً وميكروفون مدمج مخرج Type-C مباشر للهواتف.",
    specs: ["منفذ Type-C", "صوت DeepBass", "ميكروفون نقي"],
    inStock: true
  }
];

export const CATEGORIES_DATA = [
  { id: 'powerbank', name: 'باور بانك', count: '4 منتجات سعات ضخمة', image: '/images/powerbank.jpg' },
  { id: 'charger', name: 'شواحن جدارية', count: '4 شواحن GaN فائقة السرعة', image: '/images/charger.jpg' },
  { id: 'cable', name: 'كابلات شحن', count: '4 كابلات شحن ونقل بيانات', image: '/images/cable.jpg' },
  { id: 'earbuds', name: 'سماعات وصوتيات', count: '4 سماعات ومكبرات صوت', image: '/images/earbuds.jpg' },
];
