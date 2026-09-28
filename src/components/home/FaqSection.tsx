import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/mock-offers";
import { SectionHeading } from "@/components/common/SectionHeading";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="container-aval py-10 md:py-16">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="FAQ"
            title="Good to Know"
            subtitle="Quick answers about ordering, wholesale and the AVAL store."
          />
        </div>
        <div className="lg:col-span-8">
          <ul className="divide-y divide-border rounded-md border border-border bg-card">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <li key={faq.q}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-foreground md:px-6"
                  >
                    {faq.q}
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen ? (
                    <p id={`faq-panel-${i}`} className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground md:px-6">
                      {faq.a}
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
