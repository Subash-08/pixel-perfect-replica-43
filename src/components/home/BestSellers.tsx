import { Crown } from "lucide-react";
import { bestSellers } from "@/data/mock-products";
import { formatPrice, useStore } from "@/lib/store";
import { ProductCard } from "@/components/common/ProductCard";
import { SectionHeading } from "@/components/common/SectionHeading";

export function BestSellers() {
  const { addToCart } = useStore();
  const [featured, ...rest] = bestSellers;

  return (
    <section id="best-sellers" className="container-aval py-10 md:py-16">
      <SectionHeading
        eyebrow="Best Sellers"
        title="AVAL Best Sellers"
        subtitle="The favourites everyone keeps coming back for."
      />
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Featured pick — editorial treatment */}
        <div className="relative overflow-hidden rounded-md bg-ink lg:col-span-5">
          <img
            src={featured.image}
            alt={featured.name}
            loading="lazy"
            width={800}
            height={1000}
            className="h-80 w-full object-cover opacity-90 lg:h-full lg:min-h-[34rem]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
          <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-sm bg-accent px-2.5 py-1.5 text-[0.6875rem] font-bold tracking-[0.1em] text-accent-foreground uppercase">
            <Crown className="h-3.5 w-3.5" /> No. 1 Best Seller
          </span>
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p className="text-[0.6875rem] tracking-[0.14em] text-ink-foreground/70 uppercase">{featured.brand}</p>
            <h3 className="font-display mt-1.5 text-2xl text-ink-foreground md:text-3xl">{featured.name}</h3>
            <div className="mt-3 flex items-baseline gap-2.5">
              <span className="text-xl font-bold text-ink-foreground">{formatPrice(featured.sellingPrice)}</span>
              <span className="text-sm text-ink-foreground/60 line-through">{formatPrice(featured.mrp)}</span>
              <span className="text-sm font-semibold text-accent">{featured.discountPercentage}% OFF</span>
            </div>
            <button
              type="button"
              onClick={() => addToCart(featured.name)}
              className="mt-5 inline-flex min-h-11 items-center rounded-sm bg-accent px-6 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Add to Cart
            </button>
          </div>
        </div>
        {/* Remaining best sellers */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:col-span-7 lg:grid-cols-3">
          {rest.slice(0, 6).map((p) => (
            <ProductCard key={p.id} product={p} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
