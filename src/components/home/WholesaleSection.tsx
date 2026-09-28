import { BadgeIndianRupee, Layers, MessageCircle } from "lucide-react";
import wholesale from "@/assets/wholesale.jpg";

const benefits = [
  { icon: BadgeIndianRupee, label: "Competitive wholesale pricing" },
  { icon: Layers, label: "Wide product selection" },
  { icon: MessageCircle, label: "Easy WhatsApp ordering" },
];

export function WholesaleSection() {
  return (
    <section id="wholesale" className="bg-ink py-12 md:py-20">
      <div className="container-aval grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">AVAL Wholesale</p>
          <h2 className="font-display mt-3 text-3xl text-ink-foreground md:text-5xl">Buying for Your Store?</h2>
          <p className="mt-4 max-w-md text-sm text-ink-foreground/75 md:text-base">
            Explore bulk deals across cosmetics, fashion jewellery and gifting products.
          </p>
          <ul className="mt-7 space-y-3.5">
            {benefits.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm text-ink-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-ink-foreground/20">
                  <Icon className="h-4 w-4 text-accent" />
                </span>
                {label}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#wholesale"
              className="inline-flex min-h-12 items-center rounded-sm bg-accent px-6 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Explore Wholesale
            </a>
            <a
              href="https://wa.me/919884637102"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-sm border border-ink-foreground/30 px-6 text-sm font-semibold text-ink-foreground transition-colors hover:border-ink-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
          <p className="mt-4 text-xs text-ink-foreground/50">Minimum order quantity may apply.</p>
        </div>
        <div className="overflow-hidden rounded-md">
          <img
            src={wholesale}
            alt="AVAL wholesale stock — cosmetics and jewellery in bulk"
            loading="lazy"
            width={1200}
            height={900}
            className="h-72 w-full object-cover md:h-96 lg:h-[30rem]"
          />
        </div>
      </div>
    </section>
  );
}
