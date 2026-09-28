import { categories } from "@/data/mock-categories";
import { CategoryCard } from "@/components/common/CategoryCard";
import { SectionHeading } from "@/components/common/SectionHeading";

export function CategoryDiscovery() {
  const large = categories.filter((c) => c.size === "large");
  const small = categories.filter((c) => c.size === "small");

  return (
    <section id="categories" className="container-aval py-10 md:py-16">
      <SectionHeading
        eyebrow="Categories"
        title="Shop What You Love"
        subtitle="Beauty, sparkle and gifting — made easy."
      />
      {/* Mobile: horizontal swipe */}
      <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 md:hidden">
        {categories.map((c) => (
          <div key={c.id} className="w-44 shrink-0 snap-start">
            <CategoryCard name={c.name} description={c.description} meta={`${c.productCount}+ styles`} image={c.image} />
          </div>
        ))}
      </div>
      {/* Desktop: two large + four small */}
      <div className="hidden gap-5 md:grid md:grid-cols-2">
        {large.map((c) => (
          <CategoryCard
            key={c.id}
            tall
            name={c.name}
            description={c.description}
            meta={`${c.productCount}+ styles`}
            image={c.image}
          />
        ))}
      </div>
      <div className="mt-5 hidden gap-5 md:grid md:grid-cols-4">
        {small.map((c) => (
          <CategoryCard
            key={c.id}
            name={c.name}
            description={c.description}
            meta={`${c.productCount}+ styles`}
            image={c.image}
          />
        ))}
      </div>
    </section>
  );
}
