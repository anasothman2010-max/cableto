'use client';

import React, { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductCard } from '@/components/ProductCard';
import { CartDrawer, CartItem } from '@/components/CartDrawer';
import { SerialVerify } from '@/components/SerialVerify';
import { DealerForm } from '@/components/DealerForm';
import { Footer } from '@/components/Footer';
import { PRODUCTS_DATA, CATEGORIES_DATA, Product } from '@/constants/products';

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Cart logic
  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleBuyNow = (product: Product) => {
    handleAddToCart(product);
  };

  const handleCheckout = () => {
    alert('شكراً لتسوقك من كابليتو! تم استلام طلبك بنجاح وسيتواصل معك خدمة العملاء للتأكيد والتوصيل.');
    setCart([]);
    setIsCartOpen(false);
  };

  // Filter logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCat = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        !searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.model.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen flex flex-col justify-between">
      <div>
        {/* Header */}
        <Header
          cartCount={cartCount}
          onOpenCart={() => setIsCartOpen(true)}
          onSearch={(q) => setSearchQuery(q)}
        />

        {/* Hero */}
        <Hero />

        {/* Categories Showcase */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                تسوق حسب <span className="text-sky-600">الفئات</span>
              </h2>
              <p className="text-slate-500 text-sm">اختر الفئة للاطلاع على أحدث منتجات كابليتو</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {CATEGORIES_DATA.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center cursor-pointer transition-all hover:border-sky-500 hover:shadow-lg hover:-translate-y-1 ${
                    selectedCategory === cat.id ? 'border-sky-500 ring-2 ring-sky-500/20 bg-sky-50/50' : ''
                  }`}
                >
                  <div className="h-36 rounded-xl overflow-hidden mb-3">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-extrabold text-sm text-slate-900">{cat.name}</h3>
                  <span className="text-xs text-sky-600 font-bold">{cat.count}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Catalog */}
        <section id="catalog" className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                منتجات <span className="text-sky-600">كابليتو الأكثر مبيعاً</span>
              </h2>
              <p className="text-slate-500 text-sm">تصميم متين وأداء يعتمد عليه للأستخدام اليومي</p>
            </div>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-2 mb-10 flex-wrap">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-5 py-2.5 rounded-full font-bold text-xs transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-sky-500'
                }`}
              >
                عرض الكل
              </button>
              <button
                onClick={() => setSelectedCategory('powerbank')}
                className={`px-5 py-2.5 rounded-full font-bold text-xs transition-all ${
                  selectedCategory === 'powerbank'
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-sky-500'
                }`}
              >
                باور بانك
              </button>
              <button
                onClick={() => setSelectedCategory('charger')}
                className={`px-5 py-2.5 rounded-full font-bold text-xs transition-all ${
                  selectedCategory === 'charger'
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-sky-500'
                }`}
              >
                شواحن
              </button>
              <button
                onClick={() => setSelectedCategory('cable')}
                className={`px-5 py-2.5 rounded-full font-bold text-xs transition-all ${
                  selectedCategory === 'cable'
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-sky-500'
                }`}
              >
                كابلات
              </button>
              <button
                onClick={() => setSelectedCategory('earbuds')}
                className={`px-5 py-2.5 rounded-full font-bold text-xs transition-all ${
                  selectedCategory === 'earbuds'
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-sky-500'
                }`}
              >
                سماعات
              </button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onBuyNow={handleBuyNow}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Serial Verify */}
        <SerialVerify />

        {/* B2B Dealer Form */}
        <DealerForm />
      </div>

      {/* Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        cartItems={cart}
        onClose={() => setIsCartOpen(false)}
        onRemove={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
    </main>
  );
}
