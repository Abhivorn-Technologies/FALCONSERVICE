"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { useBooking } from "@/components/BookingContext";

export function BookNowButton({ children, className, size, variant }: ButtonProps) {
  const { open } = useBooking();
  return (
    <Button onClick={open} className={className} size={size} variant={variant}>
      {children}
    </Button>
  );
}
