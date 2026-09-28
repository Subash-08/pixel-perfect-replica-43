import { ArrowRight } from "lucide-react";
import { trendingProducts } from "@/data/mock-products";
import { ProductCard } from "@/components/common/ProductCard";
import { SectionHeading } from "@/components/common/SectionHeading";

export function TrendingSection() {
  return (
    <section id="trending" className="container-aval py-10 md:py-16">
      <SectionHeading
        eyebrow="Trending"
        title="Trending Right Now"
        subtitle="What AVAL shoppers are adding to their bags this week."
        action={
          <a
            href="#trending"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground hover:text-coral"
          >
            View all <ArrowRight className="h-4 w-4" />
          </a>
        }
      />
      {/* Mobile rail */}
      <div className="no-scrollbar -mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-2 md:hidden">
        {trendingProducts.map((p) => (
          <div key={p.id} className="w-[10.5rem] shrink-0 snap-start">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
      {/* Desktop grid */}
      <div className="hidden gap-x-5 gap-y-10 md:grid md:grid-cols-3 lg:grid-cols-4">
        {trendingProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
