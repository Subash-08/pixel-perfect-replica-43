import { Clock, Search, Tag, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { categorySuggestions, products, recentSearches, searchSuggestions } from "@/data/mock-products";
import { formatPrice } from "@/lib/store";

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const matches = useMemo(() => {
    if (!query.trim()) return products.slice(0, 4);
    const q = query.toLowerCase();
    return products.filter((p) => `${p.name} ${p.category} ${p.brand}`.toLowerCase().includes(q)).slice(0, 5);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-60" role="dialog" aria-modal="true" aria-label="Search products">
      <button type="button" aria-label="Close search" className="absolute inset-0 bg-ink/45" onClick={onClose} />
      <div className="relative mx-auto mt-0 max-h-[85vh] w-full overflow-y-auto bg-background shadow-lift md:mt-16 md:max-w-3xl md:rounded-md">
        <div className="flex items-center gap-3 border-b border-border px-4 py-4 md:px-6">
          <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search makeup, jewellery, gifts..."
            aria-label="Search makeup, jewellery, gifts"
            className="w-full bg-transparent text-base outline-none placeholder:text-muted-foreground"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground hover:bg-surface"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-6 px-4 py-5 md:grid-cols-[0.8fr_1.2fr] md:px-6">
          <div className="space-y-5">
            <div>
              <p className="mb-2 text-[0.6875rem] tracking-[0.14em] text-muted-foreground uppercase">Recent searches</p>
              <ul className="space-y-1">
                {recentSearches.map((s) => (
                  <li key={s}>
                    <button
                      type="button"
                      onClick={() => setQuery(s)}
                      className="flex min-h-9 w-full items-center gap-2 text-left text-sm text-foreground hover:text-coral"
                    >
                      <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 text-[0.6875rem] tracking-[0.14em] text-muted-foreground uppercase">Popular</p>
              <div className="flex flex-wrap gap-2">
                {searchSuggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setQuery(s)}
                    className="rounded-sm border border-border px-3 py-1.5 text-xs text-foreground hover:border-foreground"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-[0.6875rem] tracking-[0.14em] text-muted-foreground uppercase">Categories</p>
              <div className="flex flex-wrap gap-2">
                {categorySuggestions.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 rounded-sm bg-surface px-3 py-1.5 text-xs text-foreground"
                  >
                    <Tag className="h-3 w-3 text-muted-foreground" />
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="mb-2 text-[0.6875rem] tracking-[0.14em] text-muted-foreground uppercase">
              {query ? "Matching products" : "Trending products"}
            </p>
            <ul className="space-y-2">
              {matches.map((p) => (
                <li key={p.id}>
                  <a href="#trending" className="flex items-center gap-3 rounded-sm p-2 hover:bg-surface">
                    <img src={p.image} alt="" aria-hidden="true" loading="lazy" className="h-14 w-12 rounded-sm object-cover" />
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-medium text-foreground">{p.name}</span>
                      <span className="block text-xs text-muted-foreground">
                        {p.category} · {formatPrice(p.sellingPrice)}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
              {matches.length === 0 ? (
                <li className="p-2 text-sm text-muted-foreground">No products match "{query}".</li>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
