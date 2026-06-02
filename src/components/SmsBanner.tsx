import { MessageSquare } from "lucide-react";
import { PHONE, PHONE_TEL } from "@/lib/site-data";

export function SmsBanner() {
  return (
    <div className="bg-gold text-gold-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wider md:text-sm">
        <MessageSquare className="h-4 w-4" aria-hidden />
        <span>
          Text <span className="font-bold">FRESH</span> to{" "}
          <a href={`sms:${PHONE_TEL}`} className="underline underline-offset-2">
            {PHONE}
          </a>{" "}
          for appointment reminders &amp; specials
        </span>
      </div>
    </div>
  );
}
