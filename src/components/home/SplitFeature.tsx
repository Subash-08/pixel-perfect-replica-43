import { ArrowRight } from "lucide-react";
import cosmetics from "@/assets/cat-cosmetics.jpg";
import jewellery from "@/assets/cat-jewellery.jpg";

const panels = [
  {
    id: "beauty",
    title: "Beauty Essentials",
    copy: "Everyday favourites for your routine.",
    cta: "Shop Beauty",
    image: cosmetics,
    alt: "AVAL beauty essentials flat lay",
  },
  {
    id: "jewellery",
    title: "Jewellery Edit",
    copy: "Add a little sparkle.",
    cta: "Shop Jewellery",
    image: jewellery,
    alt: "AVAL fashion jewellery close-up",
  },
];

export function SplitFeature() {
  return (
    <section className="container-aval py-10 md:py-16">
      <div className="grid gap-4 md:grid-cols-5 md:gap-5">
        {panels.map((panel, i) => (
          <a
            key={panel.id}
            href="#categories"
            className={`group relative overflow-hidden rounded-md bg-ink ${i === 0 ? "md:col-span-3" : "md:col-span-2"}`}
            aria-label={panel.cta}
          >
            <img
              src={panel.image}
              alt={panel.alt}
              loading="lazy"
              width={1200}
              height={900}
              className="h-64 w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.04] md:h-[26rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <h3 className="font-display text-2xl text-ink-foreground md:text-3xl">{panel.title}</h3>
              <p className="mt-1.5 text-sm text-ink-foreground/75">{panel.copy}</p>
              <span className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-sm bg-card px-5 text-sm font-semibold text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                {panel.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
