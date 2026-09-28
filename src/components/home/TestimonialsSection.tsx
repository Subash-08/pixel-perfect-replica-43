import { Star } from "lucide-react";
import { testimonials } from "@/data/mock-testimonials";
import { SectionHeading } from "@/components/common/SectionHeading";

export function TestimonialsSection() {
  return (
    <section className="bg-surface py-10 md:py-16">
      <div className="container-aval">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by AVAL Shoppers"
          subtitle="Kind words from shoppers across Tamil Nadu."
        />
        <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure key={t.id} className="flex h-full flex-col rounded-md border border-border bg-card p-6">
              <div className="flex items-center gap-1" aria-label={`Rated ${t.rating} out of 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${i < t.rating ? "fill-coral text-coral" : "text-border"}`}
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-strong text-xs font-bold text-foreground">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">
                    {t.city} • {t.purchasedCategory}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
