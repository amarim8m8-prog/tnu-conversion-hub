import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LOCATIONS } from "@/lib/site-data";
import { MapPin, ExternalLink } from "lucide-react";

type Ctx = { open: () => void };
const BookingCtx = createContext<Ctx>({ open: () => {} });

export function useBooking() {
  return useContext(BookingCtx);
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);

  return (
    <BookingCtx.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-lg bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-foreground">
              Choose Your Location
            </DialogTitle>
            <DialogDescription>
              Pick the shop nearest you — booking opens in a new tab.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-2 grid gap-2">
            {LOCATIONS.map((loc) => (
              <a
                key={loc.slug}
                href={loc.bookerUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between gap-4 rounded border border-border bg-secondary/40 p-4 transition hover:border-gold hover:bg-secondary"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-gold" />
                  <div>
                    <div className="font-display text-lg text-foreground">{loc.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {loc.street}, {loc.city}, {loc.state} {loc.zip}
                    </div>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground transition group-hover:text-gold" />
              </a>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </BookingCtx.Provider>
  );
}
