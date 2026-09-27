import { Heart, Star, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { formatPrice, useStore } from "@/lib/store";
import type { Product } from "@/data/mock-products";

export function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const [hovered, setHovered] = useState(false);
  const wishlisted = isWishlisted(product.id);
  const shownImage = hovered && product.secondaryImage ? product.secondaryImage : product.image;

  return (
    <article
      className="group relative flex h-full flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-md bg-surface">
        <div className="aspect-[4/5] w-full">
          <img
            src={shownImage}
            alt={product.name}
            loading="lazy"
            width={800}
            height={1000}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>

        {product.badge ? (
          <span className="absolute top-3 left-3 rounded-sm bg-ink px-2.5 py-1 text-[0.625rem] font-semibold tracking-[0.12em] text-ink-foreground uppercase">
            {product.badge}
          </span>
        ) : null}

        <button
          type="button"
          onClick={() => toggleWishlist(product.id, product.name)}
          aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          aria-pressed={wishlisted}
          className="absolute top-2 right-2 flex h-11 w-11 items-center justify-center rounded-full bg-card/90 text-foreground transition-colors hover:bg-card"
        >
          <Heart className={`h-[18px] w-[18px] ${wishlisted ? "fill-coral text-coral" : ""}`} />
        </button>

        <div className="absolute inset-x-2 bottom-2 hidden md:block md:translate-y-3 md:opacity-0 md:transition-all md:duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100">
          <button
            type="button"
            onClick={() => addToCart(product.name)}
            className="w-full rounded-sm bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-ink"
          >
            Quick Add
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-3.5">
        <p className="text-[0.6875rem] tracking-[0.12em] text-muted-foreground uppercase">{product.brand}</p>
        <h3 className="line-clamp-2-aval mt-1 min-h-[2.6rem] text-sm leading-snug font-medium text-foreground">
          {product.name}
        </h3>

        <div className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-foreground text-foreground" />
          <span className="font-medium text-foreground">{product.rating}</span>
          <span>({product.reviewCount})</span>
        </div>

        <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="text-base font-bold text-foreground">{formatPrice(product.sellingPrice)}</span>
          <span className="text-xs text-muted-foreground line-through">{formatPrice(product.mrp)}</span>
          <span className="text-xs font-semibold text-coral">{product.discountPercentage}% OFF</span>
        </div>

        {!compact ? (
          <button
            type="button"
            onClick={() => addToCart(product.name)}
            className="mt-3 flex min-h-11 w-full items-center justify-center gap-2 rounded-sm border border-border bg-card text-sm font-semibold text-foreground transition-colors hover:border-foreground md:hidden"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        ) : null}
      </div>
    </article>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-[4/5] w-full rounded-md bg-surface-strong" />
      <div className="mt-3 h-3 w-1/3 rounded bg-surface-strong" />
      <div className="mt-2 h-3 w-4/5 rounded bg-surface-strong" />
      <div className="mt-2 h-3 w-1/2 rounded bg-surface-strong" />
    </div>
  );
}
