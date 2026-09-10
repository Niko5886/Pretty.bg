import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  Truck,
} from "lucide-react";
import { Drawer } from "./ui/Drawer";
import { useShop, FREE_SHIPPING_THRESHOLD } from "../context/ShopContext";
import { useI18n } from "../i18n/I18nContext";

export function CartDrawer() {
  const { panel, closePanel, cart, cartCount, subtotal, setQty, removeFromCart } =
    useShop();
  const { t, formatPrice } = useI18n();

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const pct = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const isEmpty = cart.length === 0;

  return (
    <Drawer
      open={panel === "cart"}
      onClose={closePanel}
      title={t.cart.title}
      icon={<ShoppingCart className="h-5 w-5 text-orange" aria-hidden="true" />}
      footer={
        isEmpty ? undefined : (
          <div>
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm text-gray-600">
                {t.cart.subtotal(cartCount)}
              </span>
              <span className="text-lg font-semibold text-green-dark">
                {formatPrice(subtotal)}
              </span>
            </div>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-orange px-6 py-3 font-medium text-white transition hover:bg-orange-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {t.cart.checkout}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )
      }
    >
      {isEmpty ? (
        <div className="flex h-full flex-col items-center justify-center text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
            <ShoppingCart className="h-7 w-7 text-green-dark/50" aria-hidden="true" />
          </span>
          <p className="mt-4 font-serif-display text-xl text-green-dark">
            {t.cart.emptyTitle}
          </p>
          <p className="mt-1 text-sm text-gray-600">{t.cart.emptyText}</p>
          <button
            type="button"
            onClick={closePanel}
            className="mt-6 rounded-full border border-green-dark px-6 py-2.5 text-sm font-medium text-green-dark transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
          >
            {t.cart.continue}
          </button>
        </div>
      ) : (
        <>
          {/* Free shipping progress */}
          <div className="mb-4 rounded-xl bg-white p-3">
            <p className="mb-2 flex items-center gap-2 text-sm text-green-dark">
              <Truck className="h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
              {remaining > 0 ? (
                <span>
                  {t.cart.awayPre}{" "}
                  <strong className="font-semibold">{formatPrice(remaining)}</strong>{" "}
                  {t.cart.awayPost}
                </span>
              ) : (
                <span className="font-medium">{t.cart.unlocked}</span>
              )}
            </p>
            <div className="h-2 overflow-hidden rounded-full bg-background">
              <div
                className="h-full rounded-full bg-orange transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          <ul className="space-y-4">
            {cart.map(({ product, qty }) => {
              const name = t.product.names[product.id];
              return (
              <li key={product.id} className="flex gap-3">
                <img
                  src={product.image}
                  alt=""
                  width={80}
                  height={80}
                  loading="lazy"
                  className="h-20 w-20 shrink-0 rounded-xl object-cover"
                />
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium text-green-dark">{name}</p>
                    <button
                      type="button"
                      onClick={() => removeFromCart(product.id)}
                      aria-label={t.cart.remove(name)}
                      className="text-gray-400 transition hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                    >
                      <Trash2 className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    {formatPrice(product.price)}
                  </p>
                  <div className="mt-auto flex items-center gap-2">
                    <div className="flex items-center rounded-full border border-green-dark/15">
                      <button
                        type="button"
                        onClick={() => setQty(product.id, qty - 1)}
                        aria-label={t.cart.decrease(name)}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-green-dark transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                      >
                        <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                      <span className="w-6 text-center text-sm font-medium text-green-dark">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQty(product.id, qty + 1)}
                        aria-label={t.cart.increase(name)}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-green-dark transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                      >
                        <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              );
            })}
          </ul>
        </>
      )}
    </Drawer>
  );
}
