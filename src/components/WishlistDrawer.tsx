import { Heart, Trash2, Plus } from "lucide-react";
import { Drawer } from "./ui/Drawer";
import { useShop } from "../context/ShopContext";
import { useI18n } from "../i18n/I18nContext";

export function WishlistDrawer() {
  const { panel, closePanel, wishlist, toggleWishlist, moveToCart } = useShop();
  const { t } = useI18n();
  const isEmpty = wishlist.length === 0;

  return (
    <Drawer
      open={panel === "wishlist"}
      onClose={closePanel}
      title={t.wishlist.title}
      icon={<Heart className="h-5 w-5 text-orange" aria-hidden="true" />}
    >
      {isEmpty ? (
        <div className="flex h-full flex-col items-center justify-center text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
            <Heart className="h-7 w-7 text-green-dark/50" aria-hidden="true" />
          </span>
          <p className="mt-4 font-serif-display text-xl text-green-dark">
            {t.wishlist.emptyTitle}
          </p>
          <p className="mt-1 text-sm text-gray-600">{t.wishlist.emptyText}</p>
          <button
            type="button"
            onClick={closePanel}
            className="mt-6 rounded-full border border-green-dark px-6 py-2.5 text-sm font-medium text-green-dark transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
          >
            {t.wishlist.browse}
          </button>
        </div>
      ) : (
        <ul className="space-y-4">
          {wishlist.map((product) => {
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
                    onClick={() => toggleWishlist(product)}
                    aria-label={t.wishlist.remove(name)}
                    className="text-gray-400 transition hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                <p className="text-sm text-gray-600">
                  ${product.price.toFixed(2)}
                </p>
                <button
                  type="button"
                  onClick={() => moveToCart(product)}
                  className="mt-auto inline-flex w-max items-center gap-1.5 rounded-full bg-green-dark px-3 py-1.5 text-xs font-medium text-white transition hover:bg-green-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                  {t.wishlist.addToCart}
                </button>
              </div>
            </li>
            );
          })}
        </ul>
      )}
    </Drawer>
  );
}
