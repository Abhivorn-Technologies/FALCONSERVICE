import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const PHONE_DISPLAY = "+91 81797 25035";
const PHONE_TEL = "+918179725035";
const ADDRESS = "Ramnagar Signal Center, Karimnagar, Telangana";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Brands", href: "/brands" },
  { label: "Accessories", href: "/accessories" },
  { label: "Gallery", href: "/gallery" },
  { label: "AMC Plans", href: "/amc" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const ourServices = [
  "Refrigerator Repair",
  "Washing Machine Repair",
  "AC Service & Repair",
  "Microwave Repair",
];

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-dark-bg py-14 text-dark-bg-foreground">
      <div className="container mx-auto grid gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M2 12l8-2-3-6 7 7 8-2-5 5 5 8-8-5-5 5 2-8z" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl font-extrabold tracking-tight">FALCON</div>
              <div className="-mt-1 text-[10px] font-bold tracking-[0.2em] text-primary">
                SERVICES
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/65">
            Falcon Services is a trusted name for home appliance repair and maintenance in
            Karimnagar. We provide doorstep service with genuine parts and warranty.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold tracking-wide">QUICK LINKS</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold tracking-wide">OUR SERVICES</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {ourServices.map((s) => (
              <li key={s}>
                <Link href="/services" className="hover:text-primary">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold tracking-wide">CONTACT US</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {ADDRESS}
            </li>
            <li>
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4 text-primary" /> {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" /> info@falconservices.in
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div>
                Mon – Sat: 9:00 AM – 7:00 PM
                <br />
                Sunday: 10:00 AM – 4:00 PM
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-10 border-t border-white/10 px-4 pt-5 text-center text-xs text-white/55">
        © 2026 Falcon Services. All Rights Reserved.
      </div>
    </footer>
  );
}
