import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { BookButton } from "./BookButton";
import { PHONE, PHONE_TEL } from "@/lib/site-data";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/locations", label: "Locations" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Tight N Up Barber Salon home">
          <img src="/images/logo.png" alt="" className="h-10 w-10 object-contain" width={40} height={40} />
          <span className="font-display text-2xl font-bold tracking-tight text-foreground">
            Tight <span className="text-gold">N</span> Up
          </span>
          <span className="hidden font-label text-xs text-muted-foreground sm:inline">
            BARBER · SALON
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-muted-foreground transition hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden items-center gap-2 text-sm font-medium text-foreground transition hover:text-gold md:inline-flex"
            aria-label={`Call ${PHONE}`}
          >
            <Phone className="h-4 w-4" />
            <span className="font-label tracking-wider">{PHONE}</span>
          </a>
          <BookButton className="hidden rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-gold-foreground transition hover:bg-gold-soft md:inline-flex">
            Book Your Cut
          </BookButton>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center text-foreground lg:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4" aria-label="Mobile">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setMenuOpen(false)}
                className="py-2 text-base font-medium text-foreground hover:text-gold"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-2 inline-flex items-center gap-2 py-2 text-foreground"
            >
              <Phone className="h-4 w-4 text-gold" /> {PHONE}
            </a>
            <BookButton
              onClick={() => setMenuOpen(false)}
              className="mt-2 w-full rounded-sm bg-gold px-5 py-3 text-sm font-semibold uppercase tracking-wider text-gold-foreground"
            >
              Book Your Cut
            </BookButton>
          </nav>
        </div>
      )}
    </header>
  );
}
