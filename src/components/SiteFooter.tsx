import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, Mail } from "lucide-react";
import { LOCATIONS, PHONE, PHONE_TEL, EMAIL } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-card/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="font-display text-2xl font-bold text-foreground">
            Tight <span className="text-gold">N</span> Up
          </div>
          <p className="mt-2 font-label text-sm tracking-wider text-muted-foreground">
            GENERATIONS OF CRAFTSMANSHIP
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Multicultural barber salon serving Bowie, Upper Marlboro &amp; Crofton, Maryland since 2001.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://instagram.com/tightnup_barbersalon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground transition hover:text-gold"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground transition hover:text-gold"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-label text-sm tracking-widest text-gold">EXPLORE</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/locations", "Locations"],
              ["/services", "Services"],
              ["/gallery", "Gallery"],
              ["/products", "Products"],
              ["/about", "About"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-muted-foreground hover:text-foreground">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-label text-sm tracking-widest text-gold">LOCATIONS</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {LOCATIONS.map((l) => (
              <li key={l.slug}>
                <div className="text-foreground">{l.name}</div>
                <div>{l.street}, {l.city}, {l.state}</div>
                <a href={`tel:${l.phoneTel}`} className="hover:text-gold">{l.phone}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-label text-sm tracking-widest text-gold">CONTACT</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold">
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold">
                <Mail className="h-4 w-4" /> {EMAIL}
              </a>
            </li>
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">
            Text <span className="text-gold">FRESH</span> to {PHONE} for reminders &amp; specials.
          </p>
        </div>
      </div>
      <div className="border-t border-border py-6">
        <p className="mx-auto max-w-7xl px-4 text-center text-xs text-muted-foreground lg:px-8">
          © {new Date().getFullYear()} Tight N Up Barber Salon · Owned by Clinton Truesdale · Est. 2001
        </p>
      </div>
    </footer>
  );
}
