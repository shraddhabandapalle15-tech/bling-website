import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type WishlistContextValue = {
  items: string[];
  count: number;
  isWishlisted: (slug: string) => boolean;
  toggleItem: (slug: string) => void;
  removeItem: (slug: string) => void;
};

const WishlistContext = createContext<WishlistContextValue | null>(null);
const STORAGE_KEY = "bling-wishlist";

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const isWishlisted = (slug: string) => items.includes(slug);

  const toggleItem = (slug: string) => {
    setItems(prev => (prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]));
  };

  const removeItem = (slug: string) => setItems(prev => prev.filter(s => s !== slug));

  return (
    <WishlistContext.Provider value={{ items, count: items.length, isWishlisted, toggleItem, removeItem }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within a WishlistProvider");
  return ctx;
}
