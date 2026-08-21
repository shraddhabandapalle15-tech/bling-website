import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { PRODUCTS } from "../data/products";

export type CartLine = { slug: string; qty: number };

type CartContextValue = {
  items: CartLine[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  addItem: (slug: string, qty?: number) => void;
  removeItem: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "bling-cart";

function priceNum(price: string) {
  return parseFloat(price.replace("₹", ""));
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartLine[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (slug: string, qty = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.slug === slug);
      if (existing) return prev.map(i => (i.slug === slug ? { ...i, qty: i.qty + qty } : i));
      return [...prev, { slug, qty }];
    });
    setIsOpen(true);
  };

  const removeItem = (slug: string) => setItems(prev => prev.filter(i => i.slug !== slug));

  const setQty = (slug: string, qty: number) => {
    if (qty <= 0) {
      removeItem(slug);
      return;
    }
    setItems(prev => prev.map(i => (i.slug === slug ? { ...i, qty } : i)));
  };

  const clear = () => setItems([]);

  const count = items.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = items.reduce((sum, i) => {
    const p = PRODUCTS.find(pr => pr.slug === i.slug);
    return sum + (p ? priceNum(p.price) * i.qty : 0);
  }, 0);

  return (
    <CartContext.Provider
      value={{ items, count, subtotal, isOpen, addItem, removeItem, setQty, clear, open: () => setIsOpen(true), close: () => setIsOpen(false) }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
