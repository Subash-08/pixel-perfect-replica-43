import { newArrivals } from "@/data/mock-products";
import { ProductCard } from "@/components/common/ProductCard";
import { SectionHeading } from "@/components/common/SectionHeading";

export function NewArrivals() {
  return (
    <section id="new-arrivals" className="container-aval py-10 md:py-16">
      <SectionHeading
        eyebrow="New Arrivals"
        title="Just Landed"
        subtitle="Fresh stock, every week — straight from the AVAL shelves."
      />
      <div className="no-scrollbar -mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-2 md:gap-5">
        {newArrivals.map((p) => (
          <div key={p.id} className="w-[10.5rem] shrink-0 snap-start md:w-[15rem] lg:w-[16.5rem]">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
