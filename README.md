# ⚡ كابليتو | Cableto - E-Commerce Web Application

موقع إلكتروني متكامل وعالي الأداء لمشروع **كابليتو (Cableto)** المتخصص في الكابلات والشواحن السريعة والباور بانك وسماعات الأذن والإلكترونيات.

المشروع مصمم بتقنيات حديثة جداً وبثيم مستقبلي داكن (Obsidian Dark & Cyan Neon Glow)، ومزود بجميع الصور الأصلية التي تم إنشاؤها بالذكاء الاصطناعي، ومجهز للعمل المباشر مع **Cursor IDE** والتكامل مع **GitHub** و **Vercel**.

---

## 📁 هيكل المشروع (Project Directory)

```
cableto/
├── index.html           # الصفحة الرئيسية والهيكل الكامل للمتجر
├── style.css            # نظام التصميم والدعم الكامل للتصفح وسلاسة الحركة
├── app.js               # منطق سلة التسوق، الفلترة، فحص السيريال، ونموذج تجار الجملة
└── images/              # جميع صور المنتجات واللوجو والبنرات عالية الجودة
    ├── logo.jpg         # شعار كابليتو (Cableto Logo)
    ├── hero.jpg         # البنر الرئيسي للموقع
    ├── powerbank.jpg    # صورة باور بانك 20,000mAh
    ├── charger.jpg      # صورة شاحن جداري 100W GaN
    ├── cable.jpg        # صورة كابل مجدول 240W
    └── earbuds.jpg      # صورة سماعات UltraPods ANC
```

---

## 🚀 كيفية فتح المشروع في Cursor ورفعه على GitHub و Vercel

### الخطوة 1: فتح المشروع في كورسير (Cursor IDE)
1. افتح برنامج **Cursor**.
2. اختر **File > Open Folder**.
3. حدد المجلد: `C:\Users\stw\.gemini\antigravity\scratch\cableto`.

### الخطوة 2: رفع الكود على GitHub
1. في كورسير، افتح الـ Terminal (عبر الضغط على `Ctrl + ~` أو `Ctrl + ` ` `).
2. اكتب الأوامر التالية لإنشاء المستودع ورفعه:
```bash
git init
git add .
git commit -m "Initial commit for Cableto website"
```
3. افتح حسابك على [GitHub](https://github.com/)، وأنشئ مستودعاً جديداً (New Repository) باسم `cableto`.
4. انسخ رابط المستودع واكتب في الـ Terminal:
```bash
git remote add origin https://github.com/USERNAME/cableto.git
git branch -M main
git push -u origin main
```

### الخطوة 3: بث الموقع فورياً عبر Vercel
1. سجل الدخول في موقع [Vercel](https://vercel.com/).
2. اضغط على **Add New > Project**.
3. قم بـ **Import** لمستودع `cableto` من GitHub.
4. اضغط **Deploy**.
5. سيعطيك Vercel رابطاً حياً وسريعاً لموقعك (مثال: `cableto.vercel.app`).
6. **ميزة رائعة**: كلما قمت بتعديل أي كود في كورسير وعملت `git push` لـ GitHub، سيقوم Vercel بتحديث موقعك المباشر في أقل من 5 ثوانٍ!

---

## 🤖 أوامر وبرومبتس كورسير الجاهزة (Cursor Composer Prompts)

يمكنك التحدث مع **Cursor Composer** (عبر الضغط على `Ctrl + I` أو `Ctrl + K` في Cursor) واستخدام إحدى البرومبتس التالية لتعديل وتطوير موقعك:

### 1️⃣ برومبت إضافة منتجات جديدة (Add New Product)
> "أريد إضافة منتج جديد باسم 'شاحن سيارة كابليتو TurboDrive بقوة 75W' بسعر 450 جنيه وموديل CB-CAR75، استخدم نفس تصميم بطاقة المنتجات في `index.html` واربطه بسلة التسوق في `app.js`."

### 2️⃣ برومبت تغيير نظام الألوان (Change Color Palette)
> "قم بتغيير لون الإضاءة النيون في `style.css` من Cyan (`#00f0ff`) إلى اللون الذهبي الفاخر (`#gold` / `#ffb700`) واجعل الخلفية أكثر دكناً."

### 3️⃣ برومبت إضافة لغة ثانية إنجليزية (Add English Language Toggle)
> "أضف مفتاح تبديل اللغة (AR / EN) في الهيدر، واجعل جميع النصوص والمنتجات تتغير إلى اللغة الإنجليزية عند الضغط عليه مع تحويل الاتجاه إلى LTR."

### 4️⃣ برومبت ربط السلة بالواتساب لإرسال الطلب (WhatsApp Checkout Integration)
> "عند الضغط على 'إتمام الطلب' في سلة التسوق `app.js`، اجعله يجمع المنتجات المختارة والإجمالي ويفتح رسالة واتساب جاهزة مباشرة إلى رقم المبيعات `01000000000`."

---
© 2026 Cableto. All rights reserved.
