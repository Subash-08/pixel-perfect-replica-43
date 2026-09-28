import { moods } from "@/data/mock-categories";
import { SectionHeading } from "@/components/common/SectionHeading";

export function MoodSection() {
  return (
    <section id="moods" className="container-aval py-10 md:py-16">
      <SectionHeading
        eyebrow="Shop by Mood"
        title="Find Something for Every Moment"
        subtitle="Everyday glow-ups to once-in-a-lifetime celebrations."
        align="center"
      />
      <div className="no-scrollbar -mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:grid-cols-6">
        {moods.map((mood) => (
          <a
            key={mood.id}
            href="#moods"
            className="group w-40 shrink-0 snap-start text-center md:w-auto"
            aria-label={`Shop ${mood.name}`}
          >
            <div className="overflow-hidden rounded-full bg-surface">
              <img
                src={mood.image}
                alt={mood.name}
                loading="lazy"
                width={400}
                height={400}
                className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
            </div>
            <p className="mt-3.5 text-sm font-semibold text-foreground group-hover:text-coral">{mood.name}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{mood.copy}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
