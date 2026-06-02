
## Tight N Up Barber Salon — Build Plan

A 7-page, SEO-optimized, conversion-focused marketing site using the project's TanStack Start + Tailwind stack (the brief mentions React Router/react-helmet, but TanStack Start's native `head()` per route is the equivalent and what this template supports — no new router needed).

### Design system
Update `src/styles.css` tokens for a premium barbershop look:
- Background: near-black (`oklch(0.14 0 0)`), surface: `oklch(0.18 0 0)`
- Primary/accent: warm gold (`oklch(0.78 0.14 80)`) for CTAs, dividers, highlights
- Foreground: off-white; muted: warm gray
- Typography: Playfair Display (editorial serif) for H1/H2, Inter for body, Bebas Neue for trust-bar labels — loaded via Google Fonts
- Add reusable `gold` button variant; sharp edges + thin gold underlines for editorial feel
- Generate 2 hero/section images via imagegen (dark editorial barbershop interior + barber close-up) saved to `src/assets/`

### Shared components (`src/components/`)
- `SiteHeader.tsx` — sticky dark navbar, logo wordmark "TNU", nav links, `tel:` call button, gold "Book Your Cut" button opening location-selector dialog
- `BookingDialog.tsx` — Radix dialog listing the 4 locations with their Booker URLs (opens in new tab)
- `SiteFooter.tsx` — 4-location quick info, social (IG/FB), tagline, sitemap links
- `TrustBar.tsx` — 4 trust icons row
- `SmsBanner.tsx` — "Text FRESH to (301) 430-5264" strip
- `ExitIntentBanner.tsx` — bottom-anchored "Walk-ins Welcome — But Why Wait?" with dismiss + Book CTA (mouseleave trigger on desktop, scroll-depth on mobile, localStorage-dismissed)
- `Testimonial.tsx` + rotating testimonials carousel (using provided real quotes: John O., Donna F., Eric J., Que D., Shatungwa, Derrick C., Marion)
- `CtaSection.tsx` — reusable bottom-of-section CTA block with urgency copy variants

### Routes (`src/routes/`)
Each route has its own `head()` with title, description, og:title/description/url, canonical link. JSON-LD inlined via `scripts` array.

- `__root.tsx` — keep shell; add `SiteHeader`, `SiteFooter`, `SmsBanner`, `ExitIntentBanner` wrappers; sitewide WebSite + Organization JSON-LD; Google Fonts links; default og:type=website. No og:image at root.
- `index.tsx` — Home. H1, hero with generated image + dual CTA + trust signal, TrustBar, 4 location cards (linking to /locations and direct Booker), "Why TNU?" 4-up, testimonials carousel, products teaser (links /products), 25-year anniversary banner with YouTube embed (`_PTrWKFJZpM`), FAQ accordion (shadcn Accordion: hours, walk-ins, services, kids cuts, women welcome — `FAQPage` JSON-LD), final CTA. LocalBusiness JSON-LD.
- `locations.tsx` — H1, 4 location cards with full address (from message), phone (tel:), hours placeholder ("Mon–Sat 9a–7p, Sun 10a–4p — call to confirm"), embedded Google Maps iframe (search-by-address URL, no API key needed), "Book at This Location" button to the correct Booker URL in new tab. Each location renders its own `BarberShop` JSON-LD with address + geo + telephone.
  - Collington Plaza — 3532 Crain Hwy, Bowie, MD 20716 — (301) 430-5264 — TIGHTNUPWORKSCRAIN
  - Mount Oak Plaza — 15708 Mount Oak Rd, Bowie, MD 20716 — (301) 430-5100 — TIGHTNUPWORKSLLC
  - Upper Marlboro — 5747 Crain Hwy, Upper Marlboro, MD 20772 — (240) 339-1148 — TNUUpperMarlboro
  - Crofton Center — 1659 Crofton Center, Crofton, MD 21114 — (443) 292-4444 — TIGHTNUPWORKSCROFTON
- `services.tsx` — H1, service grid (Haircuts, Fades, Lineups, Shaves, Kids Cuts, Women's Cuts, Natural Hair, Locs) each with description + "Book This Service" CTA opening BookingDialog. Pricing/walk-in FAQ. Service JSON-LD.
- `gallery.tsx` — H1, filter chips (All, Fades, Lineups, Locs, Natural, Salon), responsive masonry (CSS columns) of generated barbershop cut images (10–12 tiles), hover overlay "Want this look? Book now →" triggering BookingDialog.
- `products.tsx` — H1, 4 product cards (Hair & Scalp Shampoo, Bump B Gone, Nappi Curl Twisting Creme, Hair & Scalp Antiseptic) with description, benefits bullets, "Available In-Store" badge + "Visit a Location" CTA.
- `about.tsx` — H1, Clinton Truesdale bio, brand story (est. 2001, Bowie Chamber Small Biz of the Year), 25-year timeline (2001 founding → today), staff culture section, embedded 25-Year Anniversary YouTube video, CTA.
- `contact.tsx` — H1, contact form (Name, Email, Phone, Message, Location dropdown) — client-side validation with zod + sonner toast on submit + `mailto:cbtruesdale1@gmail.com` fallback (no backend wired). All 4 addresses + phones + click-to-call button prominently displayed.
- `sitemap[.]xml.ts` — server route generating sitemap with all 7 routes.

### Public files
- `public/robots.txt` — `User-agent: *` / `Allow: /`
- Favicon left as-is.

### SEO specifics
- One H1 per page using exact headings from brief
- Target keywords woven into hero copy, intro paragraphs, location cards, FAQ answers (Bowie MD, Upper Marlboro MD, Crofton MD, multicultural barber salon Maryland, Black-owned barber shop Maryland, men's haircut Prince George's County)
- All images get descriptive alt text including location/service
- Canonical and og:url use relative paths (project URL not yet set)
- og:image: home + about + gallery use generated hero asset URL; others omit per template rules
- JSON-LD: LocalBusiness (home), 4× BarberShop (locations page), FAQPage (home + services), VideoObject (about, anniversary embed)
- Lazy-load all `<img>` with `loading="lazy"` except hero

### Conversion specifics
- Every page ends with a CTA section
- All Booker links open in new tab with `rel="noopener noreferrer"`
- Phone numbers always `tel:` links
- Trust bar reused below hero on home + top of locations/services
- Testimonial quotes inserted near major CTAs
- Exit-intent banner dismiss persists in localStorage so it doesn't nag

### Tech / packages
No new packages needed — shadcn Dialog/Accordion/Form/Sonner are already in the template. Google Fonts loaded via `<link>` tags in `__root.tsx` head().

### Out of scope (will note in final reply)
- Real hours per location (used "call to confirm" placeholder — easy to swap once provided)
- Contact form backend (mailto fallback; can wire Lovable Cloud + Resend later)
- Real gallery photos (using AI-generated editorial barbershop images; swap when real photos arrive)
- Booker booking widget remains external (per spec, links out in new tab)
