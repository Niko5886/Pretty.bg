import { useEffect, useRef, useState } from "react";
import { LogIn, Package, Heart, Settings } from "lucide-react";
import { ASSETS } from "../lib/assets";
import { useShop } from "../context/ShopContext";

export function AccountMenu() {
  const { openWishlist } = useShop();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const itemClass =
    "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-green-dark transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Account menu"
        className="block rounded-full outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <img
          src={ASSETS.avatar}
          alt=""
          className="h-10 w-10 rounded-full object-cover"
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-12 z-50 w-56 rounded-2xl border border-green-dark/10 bg-white p-2 shadow-xl"
        >
          <div className="px-3 py-2">
            <p className="font-semibold text-green-dark">Hi there 👋</p>
            <p className="text-xs text-gray-500">
              Sign in for a faster checkout
            </p>
          </div>

          <a href="#" role="menuitem" className={itemClass}>
            <LogIn className="h-4 w-4 text-orange" aria-hidden="true" />
            Sign in
          </a>

          <div className="my-1 h-px bg-green-dark/10" />

          <a href="#" role="menuitem" className={itemClass}>
            <Package className="h-4 w-4 text-green-dark/60" aria-hidden="true" />
            My orders
          </a>
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setOpen(false);
              openWishlist();
            }}
            className={itemClass}
          >
            <Heart className="h-4 w-4 text-green-dark/60" aria-hidden="true" />
            Wishlist
          </button>
          <a href="#" role="menuitem" className={itemClass}>
            <Settings className="h-4 w-4 text-green-dark/60" aria-hidden="true" />
            Settings
          </a>
        </div>
      )}
    </div>
  );
}
