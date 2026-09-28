import { Heart, Menu, Search, ShoppingBag, User, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/aval-logo.jpg.asset.json";
import { megaMenu } from "@/data/mock-categories";
import { useStore } from "@/lib/store";
import { SearchOverlay } from "./SearchOverlay";

const navItems = ["Home", "Cosmetics", "Jewellery", "Gifts", "New Arrivals", "Best Sellers", "Offers"];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="/" className="flex items-center gap-3" aria-label="AVAL — Beauty & Bounty, home">
      <img
        src={logoAsset.url}
        alt="AVAL logo"
        width={44}
        height={44}
        className={`rounded-sm object-cover ${compact ? "h-9 w-9" : "h-11 w-11"}`}
      />
      <span className="leading-none">
        <span className="font-display block text-xl tracking-[0.18em] text-foreground">AVAL</span>
        <span className="mt-0.5 block text-[0.5625rem] tracking-[0.26em] text-muted-foreground uppercase">
          Beauty &amp; Bounty
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const { cartCount, wishlist } = useStore();
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = drawerOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen, searchOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      {/* Desktop */}
      <div className="container-aval hidden items-center gap-8 py-4 lg:flex">
        <Logo />
        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          className="flex h-11 flex-1 items-center gap-3 rounded-sm border border-border bg-surface px-4 text-left text-sm text-muted-foreground transition-colors hover:border-foreground/40"
        >
          <Search className="h-4 w-4" />
          Search makeup, jewellery, gifts...
        </button>
        <div className="flex items-center gap-1">
          <IconButton label="Account" icon={<User className="h-5 w-5" />} />
          <IconButton label="Wishlist" icon={<Heart className="h-5 w-5" />} count={wishlist.length} />
          <IconButton label="Cart" icon={<ShoppingBag className="h-5 w-5" />} count={cartCount} />
        </div>
      </div>

      <nav aria-label="Main" className="hidden border-t border-border lg:block" onMouseLeave={() => setOpenMenu(null)}>
        <div className="container-aval flex items-center gap-7">
          {navItems.map((item) => {
            const hasMenu = item in megaMenu;
            return (
              <div key={item} className="relative" onMouseEnter={() => setOpenMenu(hasMenu ? item : null)}>
                <a
                  href="#categories"
                  onFocus={() => setOpenMenu(hasMenu ? item : null)}
                  className="flex h-12 items-center gap-1 text-[0.8125rem] font-medium tracking-wide text-foreground transition-colors hover:text-coral"
                >
                  {item}
                  {hasMenu ? <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" /> : null}
                </a>
                {hasMenu && openMenu === item ? (
                  <div className="absolute top-full left-0 z-50 w-[30rem] rounded-b-md border border-border bg-card p-6 shadow-lift">
                    <p className="mb-4 text-[0.6875rem] tracking-[0.16em] text-muted-foreground uppercase">
                      Shop {item}
                    </p>
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                      {(megaMenu[item] ?? []).map((sub) => (
                        <li key={sub}>
                          <a href="#categories" className="text-sm text-foreground hover:text-coral">
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            );
          })}
          <a
            href="#wholesale"
            className="ml-auto flex h-12 items-center gap-2 text-[0.8125rem] font-semibold tracking-wide text-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Wholesale
          </a>
        </div>
      </nav>

      {/* Mobile */}
      <div className="container-aval flex items-center justify-between gap-3 py-3 lg:hidden">
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
          className="flex h-11 w-11 items-center justify-center rounded-sm text-foreground"
        >
          <Menu className="h-5 w-5" />
        </button>
        <Logo compact />
        <div className="flex items-center">
          <IconButton label="Search" icon={<Search className="h-5 w-5" />} onClick={() => setSearchOpen(true)} />
          <IconButton label="Cart" icon={<ShoppingBag className="h-5 w-5" />} count={cartCount} />
        </div>
      </div>

      {drawerOpen ? (
        <div className="fixed inset-0 z-60 lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <button type="button" aria-label="Close menu" className="absolute inset-0 bg-ink/50" onClick={() => setDrawerOpen(false)} />
          <div className="animate-rise absolute inset-y-0 left-0 flex w-[88%] max-w-sm flex-col bg-background">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <Logo compact />
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-sm text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="space-y-1">
                {navItems.map((item) => {
                  const hasMenu = item in megaMenu;
                  const open = openMobileGroup === item;
                  return (
                    <li key={item} className="border-b border-border/70">
                      {hasMenu ? (
                        <>
                          <button
                            type="button"
                            aria-expanded={open}
                            onClick={() => setOpenMobileGroup(open ? null : item)}
                            className="flex min-h-12 w-full items-center justify-between text-sm font-medium text-foreground"
                          >
                            {item}
                            <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
                          </button>
                          {open ? (
                            <ul className="grid grid-cols-2 gap-y-2 pb-4">
                              {(megaMenu[item] ?? []).map((sub) => (
                                <li key={sub}>
                                  <a href="#categories" className="block py-1 text-sm text-muted-foreground">
                                    {sub}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </>
                      ) : (
                        <a href="#categories" className="flex min-h-12 items-center text-sm font-medium text-foreground">
                          {item}
                        </a>
                      )}
                    </li>
                  );
                })}
                <li>
                  <a href="#wholesale" className="mt-3 flex min-h-12 items-center gap-2 text-sm font-semibold text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Wholesale
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-4 border-t border-border px-5 py-4">
              <a href="#account" className="flex min-h-11 items-center gap-2 text-sm text-foreground">
                <User className="h-4 w-4" /> Account
              </a>
              <a href="#wishlist" className="flex min-h-11 items-center gap-2 text-sm text-foreground">
                <Heart className="h-4 w-4" /> Wishlist ({wishlist.length})
              </a>
            </div>
          </div>
        </div>
      ) : null}

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}

function IconButton({
  label,
  icon,
  count,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  count?: number;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={count ? `${label}, ${count} items` : label}
      className="relative flex h-11 w-11 items-center justify-center rounded-sm text-foreground transition-colors hover:text-coral"
    >
      {icon}
      {count ? (
        <span className="absolute top-1.5 right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-coral px-1 text-[0.625rem] font-bold text-coral-foreground">
          {count}
        </span>
      ) : null}
    </button>
  );
}
