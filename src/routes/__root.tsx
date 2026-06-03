import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SmsBanner } from "@/components/SmsBanner";
import { ExitIntentBanner } from "@/components/ExitIntentBanner";
import { BookingProvider } from "@/components/BookingDialog";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-gold">404</h1>
        <h2 className="mt-4 font-display text-2xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          That page doesn't exist. Head home for your next fresh cut.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-gold-foreground hover:bg-gold-soft"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    // Error logged to console
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try again or head home.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-gold-foreground hover:bg-gold-soft"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-sm border border-border px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-foreground hover:border-gold hover:text-gold"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tight N Up Barber Salon | Multicultural Barber Shop in Maryland" },
      {
        name: "description",
        content:
          "Tight N Up Barber Salon — Bowie, Upper Marlboro & Crofton's multicultural barber shop. 20+ years of craftsmanship. Book online in 60 seconds.",
      },
      { name: "author", content: "Tight N Up Barber Salon" },
      { name: "theme-color", content: "#1f1a14" },
      { property: "og:site_name", content: "Tight N Up Barber Salon" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700;900&family=Inter:wght@400;500;600;700&family=Bebas+Neue&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Tight N Up Barber Salon",
          url: "/",
          founder: { "@type": "Person", name: "Clinton Truesdale" },
          foundingDate: "2001",
          sameAs: [
            "https://instagram.com/tightnup_barbersalon",
            "https://facebook.com",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-301-430-5264",
            contactType: "customer service",
            areaServed: "US",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <BookingProvider>
        <SmsBanner />
        <SiteHeader />
        <main id="main">
          <Outlet />
        </main>
        <SiteFooter />
        <ExitIntentBanner />
        <Toaster />
      </BookingProvider>
    </QueryClientProvider>
  );
}
