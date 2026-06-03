import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useBooking } from "./BookingDialog";

type BookButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function BookButton({ children, onClick, type = "button", ...props }: BookButtonProps) {
  const { open } = useBooking();

  return (
    <button
      type={type}
      {...props}
      onClick={(e) => {
        onClick?.(e);
        if (!e.defaultPrevented) open();
      }}
    >
      {children}
    </button>
  );
}
