interface PromoBannerProps {
  eyebrow: string;
  title: string;
  copy: string;
  cta: string;
  image: string;
}

export function PromoBanner({ eyebrow, title, copy, cta, image }: PromoBannerProps) {
  return (
    <section className="container-aval py-10 md:py-16">
      <div className="relative overflow-hidden rounded-md bg-ink">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-[22rem] w-full object-cover opacity-70 md:h-[26rem]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-xl px-6 md:px-14">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">{eyebrow}</p>
            <h2 className="font-display mt-3 text-3xl text-ink-foreground md:text-5xl">{title}</h2>
            <p className="mt-3 max-w-md text-sm text-ink-foreground/75 md:text-base">{copy}</p>
            <a
              href="#new-arrivals"
              className="mt-6 inline-flex min-h-11 items-center rounded-sm bg-accent px-6 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              {cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
