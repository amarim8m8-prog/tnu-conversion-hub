import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { BookButton } from "./BookButton";

const KEY = "tnu-exit-dismissed";

export function ExitIntentBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(KEY)) return;

    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      setShow(true);
    };

    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) trigger();
    };

    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!show) return null;

  const dismiss = () => {
    localStorage.setItem(KEY, "1");
    setShow(false);
  };

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded border border-gold bg-card p-4 shadow-2xl sm:p-5">
      <button
        type="button"
        onClick={dismiss}
        className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
        aria-label="Dismiss"
      >
        <X className="h-4 w-4" />
      </button>
      <div className="pr-6">
        <p className="font-display text-lg text-foreground sm:text-xl">
          Walk-ins welcome — but why wait?
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Book online in 60 seconds and skip the line at any of our 4 Maryland shops.
        </p>
        <BookButton
          onClick={dismiss}
          className="mt-3 rounded-sm bg-gold px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold-foreground hover:bg-gold-soft"
        >
          Reserve Your Chair
        </BookButton>
      </div>
    </div>
  );
}
