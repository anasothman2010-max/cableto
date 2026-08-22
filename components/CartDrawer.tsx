'use client';

import React from 'react';
import { Product } from '@/constants/products';
import { ShoppingBag, X, Trash2, ArrowLeft } from 'lucide-react';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  cartItems: CartItem[];
  onClose: () => void;
  onRemove: (productId: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  cartItems,
  onClose,
  onRemove,
  onCheckout
}) => {
  const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 transition-opacity"
      />

      {/* Drawer */}
      <div className="fixed top-0 left-0 bottom-0 w-96 max-w-[90vw] bg-white z-50 shadow-2xl flex flex-col justify-between border-r border-slate-200 animate-in slide-in-from-left duration-300">
        {/* Header */}
        <div className="p-4 bg-sky-50 border-b border-sky-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sky-600 font-black">
            <ShoppingBag className="w-5 h-5" />
            <span>سلة التسوق الخاصة بك</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 text-slate-400 font-semibold space-y-2">
              <ShoppingBag className="w-12 h-12 mx-auto stroke-1 text-slate-300" />
              <p>سلة التسوق فارغة حالياً</p>
            </div>
          ) : (
            cartItems.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-14 object-cover rounded-lg border border-slate-200"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 truncate">
                    {product.name}
                  </h4>
                  <span className="text-xs font-extrabold text-sky-600">
                    {product.price.toLocaleString()} ج.م × {quantity}
                  </span>
                </div>
                <button
                  onClick={() => onRemove(product.id)}
                  className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-white space-y-3">
          <div className="flex justify-between items-center text-lg font-black text-slate-900">
            <span>الإجمالي:</span>
            <span className="text-sky-600">{total.toLocaleString()} ج.م</span>
          </div>

          <button
            onClick={onCheckout}
            disabled={cartItems.length === 0}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <span>إتمام الطلب الآن</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};
