'use client';

import React from 'react';
import { Product } from '@/constants/products';
import { ShoppingCart, Star, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onBuyNow }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-sky-500 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1 transition-all group flex flex-col justify-between">
      <div>
        {/* Top Badges & Image */}
        <div className="relative h-52 bg-slate-100 overflow-hidden">
          {product.badge && (
            <span className="absolute top-3 right-3 z-10 px-3 py-1 bg-sky-500 text-white font-extrabold text-xs rounded-full shadow-md">
              {product.badge}
            </span>
          )}
          {product.discount && (
            <span className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-rose-500 text-white font-extrabold text-xs rounded-full">
              {product.discount}
            </span>
          )}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <span className="text-xs font-extrabold text-sky-600 tracking-wide block">
            موديل: {product.model}
          </span>
          <h3 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2 h-10">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 text-amber-400 text-xs">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span className="text-slate-500 font-semibold text-xs mr-1">({product.rating})</span>
          </div>

          {/* Prices */}
          <div className="flex items-baseline gap-2 pt-1">
            <span className="text-lg font-black text-sky-600">
              {product.price.toLocaleString()} ج.م
            </span>
            {product.oldPrice && (
              <span className="text-xs text-slate-400 line-through font-semibold">
                {product.oldPrice.toLocaleString()} ج.م
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="p-4 pt-0 grid grid-cols-2 gap-2">
        <button
          onClick={() => onAddToCart(product)}
          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 hover:bg-sky-50 text-slate-800 hover:text-sky-600 border border-slate-200 font-bold text-xs transition-colors"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          للسلة
        </button>

        <button
          onClick={() => onBuyNow(product)}
          className="flex items-center justify-center py-2 px-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-extrabold text-xs shadow-md shadow-sky-500/20 transition-all"
        >
          شراء الآن
        </button>
      </div>
    </div>
  );
};
