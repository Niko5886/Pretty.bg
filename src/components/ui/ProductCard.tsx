import { Heart, ShoppingCart } from "lucide-react";
import { StarRating } from "./StarRating";
import type { Product } from "../../data/products";

export function ProductCard({ product }: { product: Product }) {
  const { name, price, oldPrice, rating, reviews, image, badge } = product;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <img
          src={image}
          alt={name}
          width={600}
          height={600}
          loading="lazy"
          decoding="async"
          className="aspect-square w-full object-cover"
        />
        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-orange px-2.5 py-1 text-[11px] font-semibold text-white">
            {badge}
          </span>
        )}
        <button
          type="button"
          aria-label={`Add ${name} to favorites`}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-green-dark opacity-100 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange md:opacity-0 md:group-hover:opacity-100"
        >
          <Heart className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-medium text-green-dark">{name}</h3>

        <div className="mt-1 flex items-center gap-2">
          <StarRating value={rating} size={14} />
          <span className="text-xs text-gray-500">({reviews})</span>
        </div>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-semibold text-green-dark">
            ${price.toFixed(2)}
          </span>
          {oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${oldPrice.toFixed(2)}
            </span>
          )}
        </div>

        <button
          type="button"
          aria-label={`Add ${name} to cart`}
          className="mt-4 flex items-center justify-center gap-2 rounded-full bg-green-dark px-4 py-2.5 text-sm font-medium text-white transition hover:bg-green-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <ShoppingCart className="h-4 w-4" aria-hidden="true" />
          Add to cart
        </button>
      </div>
    </div>
  );
}
