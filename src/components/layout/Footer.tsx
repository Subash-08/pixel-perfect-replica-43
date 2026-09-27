import { Instagram, MapPin, Phone } from "lucide-react";
import logoAsset from "@/assets/aval-logo.jpg.asset.json";

const columns = [
  { title: "Shop", links: ["Cosmetics", "Jewellery", "Gifts", "New Arrivals", "Best Sellers", "Offers"] },
  { title: "Customer Care", links: ["Contact Us", "FAQ", "Track Order", "Shipping", "Returns"] },
  { title: "Wholesale", links: ["Wholesale Store", "Bulk Enquiry", "WhatsApp"] },
  { title: "Company", links: ["About AVAL", "Instagram", "Contact"] },
];

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-aval py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logoAsset.url} alt="AVAL logo" width={44} height={44} loading="lazy" className="h-11 w-11 rounded-sm object-cover" />
              <span>
                <span className="font-display block text-xl tracking-[0.18em]">AVAL</span>
                <span className="text-[0.5625rem] tracking-[0.26em] text-ink-foreground/60 uppercase">
                  Beauty &amp; Bounty
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm text-ink-foreground/70">
              Cosmetics, fashion jewellery and gifting for every style and celebration — available for both wholesale
              and retail buyers.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink-foreground/70">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Konganapuram, Edappadi Road, Tamil Nadu
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                +91 98846 37102
              </li>
              <li className="flex gap-2">
                <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                @aval_b2b
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-xs font-semibold tracking-[0.16em] uppercase">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#categories" className="text-sm text-ink-foreground/70 transition-colors hover:text-accent">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <form
          className="mt-12 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Newsletter signup"
        >
          <label htmlFor="newsletter" className="sr-only">
            Get offers &amp; new-arrival updates
          </label>
          <input
            id="newsletter"
            type="email"
            placeholder="Get offers & new-arrival updates"
            className="min-h-11 flex-1 rounded-sm border border-ink-foreground/20 bg-transparent px-4 text-sm text-ink-foreground placeholder:text-ink-foreground/50"
          />
          <button
            type="submit"
            className="min-h-11 rounded-sm bg-accent px-5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="container-aval flex flex-col gap-3 py-5 text-xs text-ink-foreground/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} AVAL — Beauty &amp; Bounty. All rights reserved.</p>
          <ul className="flex flex-wrap gap-4">
            {["Privacy Policy", "Terms", "Shipping Policy", "Return Policy"].map((l) => (
              <li key={l}>
                <a href="#policies" className="hover:text-accent">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
