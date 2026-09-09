import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "../data/products";

export type CartItem = { product: Product; qty: number };
export type Panel = "search" | "cart" | "wishlist" | null;

export const FREE_SHIPPING_THRESHOLD = 49;

type ShopState = {
  cart: CartItem[];
  wishlist: Product[];
  cartCount: number;
  wishlistCount: number;
  subtotal: number;
  addToCart: (p: Product) => void;
  removeFromCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  inWishlist: (id: string) => boolean;
  toggleWishlist: (p: Product) => void;
  moveToCart: (p: Product) => void;
  panel: Panel;
  openSearch: () => void;
  openCart: () => void;
  openWishlist: () => void;
  closePanel: () => void;
};

const ShopContext = createContext<ShopState | null>(null);

export function ShopProvider({ children }: { children: ReactNode }) {
  // Empty on first visit — like a brand-new shopper (no cart, no favourites).
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [panel, setPanel] = useState<Panel>(null);

  const addToCart = (p: Product) =>
    setCart((c) =>
      c.some((i) => i.product.id === p.id)
        ? c.map((i) =>
            i.product.id === p.id ? { ...i, qty: i.qty + 1 } : i
          )
        : [...c, { product: p, qty: 1 }]
    );

  const removeFromCart = (id: string) =>
    setCart((c) => c.filter((i) => i.product.id !== id));

  const setQty = (id: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((c) => c.map((i) => (i.product.id === id ? { ...i, qty } : i)));
  };

  const inWishlist = (id: string) => wishlist.some((p) => p.id === id);

  const toggleWishlist = (p: Product) =>
    setWishlist((w) =>
      w.some((x) => x.id === p.id)
        ? w.filter((x) => x.id !== p.id)
        : [...w, p]
    );

  const moveToCart = (p: Product) => {
    addToCart(p);
    setWishlist((w) => w.filter((x) => x.id !== p.id));
  };

  const cartCount = cart.reduce((n, i) => n + i.qty, 0);
  const subtotal = cart.reduce((s, i) => s + i.product.price * i.qty, 0);

  const value: ShopState = {
    cart,
    wishlist,
    cartCount,
    wishlistCount: wishlist.length,
    subtotal,
    addToCart,
    removeFromCart,
    setQty,
    inWishlist,
    toggleWishlist,
    moveToCart,
    panel,
    openSearch: () => setPanel("search"),
    openCart: () => setPanel("cart"),
    openWishlist: () => setPanel("wishlist"),
    closePanel: () => setPanel(null),
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used within ShopProvider");
  return ctx;
}
