import { Headset, LockKeyhole, MapPin, Sparkles, Store, Tags } from "lucide-react";

const items = [
  { icon: Store, label: "Wholesale & Retail" },
  { icon: Tags, label: "Affordable Pricing" },
  { icon: Sparkles, label: "Fresh New Arrivals" },
  { icon: LockKeyhole, label: "Secure Checkout" },
  { icon: Headset, label: "Easy Support" },
  { icon: MapPin, label: "Local Store in Konganapuram" },
];

export function TrustStrip() {
  return (
    <section aria-label="Why shop with AVAL" className="border-y border-border bg-card">
      <div className="container-aval grid grid-cols-2 gap-x-4 gap-y-6 py-8 sm:grid-cols-3 md:py-10 lg:grid-cols-6">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-2.5 text-center">
            <Icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
            <p className="text-xs font-medium text-foreground">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
