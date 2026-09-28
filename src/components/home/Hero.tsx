import { ArrowRight, Sparkles } from "lucide-react";
import hero from "@/assets/hero-aval.jpg";
import hoops from "@/assets/p-hoops.jpg";
import giftsets from "@/assets/cat-giftsets.jpg";

export function Hero() {
  return (
    <section className="container-aval pt-6 pb-10 md:pt-10 md:pb-16">
      <div className="grid gap-4 md:grid-cols-12 md:gap-5">
        {/* Main editorial panel */}
        <div className="relative overflow-hidden rounded-md bg-ink md:col-span-8">
          <img
            src={hero}
            alt="AVAL cosmetics, jewellery and gifting flat lay"
            width={1600}
            height={1200}
            className="animate-reveal h-[26rem] w-full object-cover opacity-90 md:h-[34rem] lg:h-[38rem]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 lg:p-12">
            <p className="animate-rise text-[0.6875rem] font-semibold tracking-[0.22em] text-accent uppercase">
              Beauty • Jewellery • Gifts
            </p>
            <h1
              className="font-display animate-rise mt-3 max-w-xl text-4xl leading-[1.05] text-ink-foreground md:text-6xl lg:text-[4rem]"
              style={{ animationDelay: "80ms" }}
            >
              Everything Beautiful, All in One Place.
            </h1>
            <p
              className="animate-rise mt-4 max-w-md text-sm text-ink-foreground/80 md:text-base"
              style={{ animationDelay: "160ms" }}
            >
              Discover trending cosmetics, statement jewellery and thoughtful gifts — handpicked for
              every style and every celebration.
            </p>
            <div className="animate-rise mt-7 flex flex-wrap items-center gap-3" style={{ animationDelay: "240ms" }}>
              <a
                href="#new-arrivals"
                className="inline-flex min-h-12 items-center gap-2 rounded-sm bg-accent px-6 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Shop New Arrivals
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#best-sellers"
                className="inline-flex min-h-12 items-center rounded-sm border border-ink-foreground/40 px-6 text-sm font-semibold text-ink-foreground transition-colors hover:border-ink-foreground hover:bg-ink-foreground/10"
              >
                Explore Best Sellers
              </a>
            </div>
            <p className="animate-rise mt-5 flex items-center gap-2 text-xs text-ink-foreground/70" style={{ animationDelay: "320ms" }}>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Wholesale &amp; Retail Available
            </p>
          </div>
        </div>

        {/* Side stack */}
        <div className="grid grid-cols-2 gap-4 md:col-span-4 md:grid-cols-1 md:gap-5">
          <a href="#categories" className="group relative overflow-hidden rounded-md bg-ink">
            <img
              src={hoops}
              alt="Gold hoop earrings"
              loading="lazy"
              width={800}
              height={1000}
              className="h-44 w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.04] md:h-[18.5rem] lg:h-[21.5rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
              <p className="font-display text-lg text-ink-foreground md:text-xl">The Jewellery Edit</p>
              <p className="mt-1 text-xs font-semibold tracking-[0.1em] text-accent uppercase">Shop sparkle</p>
            </div>
          </a>
          <a href="#moods" className="group relative overflow-hidden rounded-md bg-ink">
            <img
              src={giftsets}
              alt="Curated gift sets"
              loading="lazy"
              width={800}
              height={1000}
              className="h-44 w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.04] md:h-[14.5rem] lg:h-[15.5rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-sm bg-card px-2.5 py-1.5 text-[0.6875rem] font-bold text-foreground shadow-soft">
              <Sparkles className="h-3.5 w-3.5 text-coral" />
              1000+ Styles
            </span>
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
              <p className="font-display text-lg text-ink-foreground md:text-xl">Gifting, Sorted</p>
              <p className="mt-1 text-xs font-semibold tracking-[0.1em] text-accent uppercase">Find the moment</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
