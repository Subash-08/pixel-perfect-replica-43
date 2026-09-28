import { Instagram } from "lucide-react";
import lipstick from "@/assets/p-lipstick.jpg";
import hoops from "@/assets/p-hoops.jpg";
import necklace from "@/assets/p-necklace.jpg";
import hair from "@/assets/cat-hair.jpg";
import gifts from "@/assets/cat-gifts.jpg";
import brushes from "@/assets/p-brushes.jpg";
import { SectionHeading } from "@/components/common/SectionHeading";

const posts = [
  { src: lipstick, alt: "Matte lipstick shades" },
  { src: hoops, alt: "Gold hoop earrings styling" },
  { src: necklace, alt: "American diamond necklace set" },
  { src: hair, alt: "Pearl hair accessories" },
  { src: gifts, alt: "Birthday gift hamper" },
  { src: brushes, alt: "Makeup brush set" },
];

export function InstagramSection() {
  return (
    <section className="container-aval py-10 md:py-16">
      <SectionHeading
        eyebrow="Instagram"
        title="Seen on @aval_b2b"
        subtitle="Follow our latest arrivals, offers and styling finds."
        align="center"
      />
      <div className="grid grid-cols-3 gap-2.5 md:grid-cols-6 md:gap-4">
        {posts.map((post) => (
          <a
            key={post.alt}
            href="https://www.instagram.com/aval_b2b"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-md bg-surface"
            aria-label={`${post.alt} — open AVAL on Instagram`}
          >
            <img
              src={post.src}
              alt={post.alt}
              loading="lazy"
              width={400}
              height={400}
              className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-ink/45 opacity-0 transition-opacity group-hover:opacity-100">
              <Instagram className="h-6 w-6 text-ink-foreground" />
            </span>
          </a>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="https://www.instagram.com/aval_b2b"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center gap-2 rounded-sm border border-foreground px-6 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          <Instagram className="h-4 w-4" />
          Follow @aval_b2b
        </a>
      </div>
    </section>
  );
}
