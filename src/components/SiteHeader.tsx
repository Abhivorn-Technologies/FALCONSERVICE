"use client";

import Link from "next/link";
import { Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBooking } from "./BookingContext";
import { usePathname } from "next/navigation";

const PHONE_DISPLAY = "+91 81797 25035";
const PHONE_TEL = "+918179725035";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "BRANDS", href: "/brands" },
  { label: "ACCESSORIES", href: "/accessories" },
  { label: "GALLERY", href: "/gallery" },
  { label: "AMC PLANS", href: "/amc" },
  { label: "ABOUT US", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M2 12l8-2-3-6 7 7 8-2-5 5 5 8-8-5-5 5 2-8z" />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="font-display text-xl font-extrabold tracking-tight text-foreground">
          FALCON
        </div>
        <div className="-mt-1 text-[10px] font-bold tracking-[0.2em] text-primary">SERVICES</div>
      </div>
    </Link>
  );
}

export function SiteHeader() {
  const { open } = useBooking();
  const pathname = usePathname();

  return (
    <>
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:text-sm">
          <span className="font-medium">
            Welcome to Falcon Services 
          </span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> Karimnagar, Telangana
            </span>
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-1.5 font-semibold">
              <Phone className="h-3.5 w-3.5" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm font-semibold tracking-wide lg:flex">
            {navItems.map((n) => (
              <Link
                key={n.label}
                href={n.href}
                data-status={pathname === n.href ? "active" : undefined}
                className="text-foreground transition-colors hover:text-primary data-[status=active]:text-primary"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Button onClick={open} size="lg" className="font-semibold shadow-md">
            <Calendar className="mr-1.5 h-4 w-4" /> BOOK SERVICE
          </Button>
        </div>
      </header>
    </>
  );
}
