import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919884637102"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with AVAL on WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-ink-foreground shadow-lift transition-transform hover:scale-105 md:right-6 md:bottom-6"
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  );
}
