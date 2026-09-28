import { ArrowUpRight } from "lucide-react";
import { budgetOffers } from "@/data/mock-offers";
import { SectionHeading } from "@/components/common/SectionHeading";

export function BudgetSection() {
  return (
    <section id="offers" className="bg-surface py-10 md:py-16">
      <div className="container-aval">
        <SectionHeading
          eyebrow="Budget Finds"
          title="Little Luxuries for Every Budget"
          subtitle="Beautiful things don't have to be expensive. Start here."
        />
        <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
          {budgetOffers.map((offer, i) => (
            <a
              key={offer.id}
              href="#offers"
              className={`group flex flex-col justify-between rounded-md border p-5 transition-all hover:shadow-lift md:p-7 ${
                i === 0
                  ? "border-transparent bg-ink text-ink-foreground"
                  : "border-border bg-card text-foreground"
              }`}
            >
              <div>
                <p className={`font-display text-2xl md:text-3xl ${i === 0 ? "text-accent" : "text-foreground"}`}>
                  {offer.label}
                </p>
                <p className={`mt-2 text-xs md:text-sm ${i === 0 ? "text-ink-foreground/70" : "text-muted-foreground"}`}>
                  {offer.copy}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className={`text-[0.6875rem] font-semibold tracking-[0.12em] uppercase ${i === 0 ? "text-ink-foreground/60" : "text-muted-foreground"}`}>
                  {offer.items}
                </span>
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    i === 0 ? "bg-accent text-accent-foreground" : "bg-surface text-foreground"
                  }`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
