import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  name: string;
  description: string;
  meta?: string;
  image: string;
  tall?: boolean;
}

export function CategoryCard({ name, description, meta, image, tall = false }: CategoryCardProps) {
  return (
    <a
      href="#categories"
      className="group relative block h-full overflow-hidden rounded-md bg-ink"
      aria-label={`Explore ${name}`}
    >
      <div className={tall ? "aspect-[4/5] md:h-full md:min-h-[26rem]" : "aspect-[4/3] md:h-full md:min-h-[12.5rem]"}>
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover opacity-95 transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <h3 className="font-display text-xl text-ink-foreground md:text-2xl">{name}</h3>
        <p className="mt-1 text-xs text-ink-foreground/75 md:text-sm">{description}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.1em] text-accent uppercase">
          Explore
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </span>
        {meta ? <p className="mt-1 text-[0.6875rem] text-ink-foreground/60">{meta}</p> : null}
      </div>
    </a>
  );
}
