import { MessageCircle } from "lucide-react";

export function WhatsAppCta() {
  return (
    <section className="container-aval py-10 md:py-16">
      <div className="rounded-md border border-border bg-surface px-6 py-10 text-center md:px-12 md:py-14">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent">
          <MessageCircle className="h-5 w-5 text-accent-foreground" />
        </span>
        <h2 className="font-display mt-5 text-3xl text-foreground md:text-4xl">
          Want New Arrival &amp; Offer Updates?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground md:text-base">
          Join AVAL on WhatsApp and never miss what's new.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://wa.me/919884637102"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-primary px-7 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            Join WhatsApp Updates
          </a>
          <a
            href="tel:+919884637102"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-sm border border-border bg-card px-7 text-sm font-semibold text-foreground transition-colors hover:border-foreground sm:w-auto"
          >
            +91 98846 37102
          </a>
        </div>
      </div>
    </section>
  );
}
