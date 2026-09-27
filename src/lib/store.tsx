import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { toast } from "sonner";

interface StoreValue {
  cartCount: number;
  wishlist: string[];
  addToCart: (name: string) => void;
  toggleWishlist: (id: string, name: string) => void;
  isWishlisted: (id: string) => boolean;
}

const StoreContext = createContext<StoreValue | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cartCount, setCartCount] = useState(0);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const addToCart = useCallback((name: string) => {
    setCartCount((c) => c + 1);
    toast.success("Added to cart", { description: name });
  }, []);

  const toggleWishlist = useCallback((id: string, name: string) => {
    setWishlist((list) => {
      const exists = list.includes(id);
      toast(exists ? "Removed from wishlist" : "Saved to wishlist", { description: name });
      return exists ? list.filter((i) => i !== id) : [...list, id];
    });
  }, []);

  const value = useMemo<StoreValue>(
    () => ({
      cartCount,
      wishlist,
      addToCart,
      toggleWishlist,
      isWishlisted: (id: string) => wishlist.includes(id),
    }),
    [cartCount, wishlist, addToCart, toggleWishlist],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}

export const formatPrice = (value: number) => `₹${value.toLocaleString("en-IN")}`;
