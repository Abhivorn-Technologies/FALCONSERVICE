import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-technician.jpg";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { BookingDialog } from "@/components/BookingDialog";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import {
  Phone,
  MapPin,
  Calendar,
  Check,
  Shield,
  Award,
  Clock,
  Wallet,
  Refrigerator,
  WashingMachine,
  AirVent,
  Microwave,
  Star,
  Mail,
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Falcon Services - Appliance Repair in Karimnagar | LG, Samsung, IFB, Whirlpool" },
      {
        name: "description",
        content:
          "Falcon Services Karimnagar - Expert repair for refrigerators, washing machines, AC, microwaves. Authorized service for LG, Samsung, IFB, Whirlpool. Call +91 8179725035.",
      },
    ],
  }),
});

const PHONE_DISPLAY = "+91 81797 25035";
const PHONE_TEL = "+918179725035";
const WHATSAPP = "918179725035";
const ADDRESS = "Ramnagar Signal Center, Karimnagar, Telangana";

const services = [
  {
    icon: Refrigerator,
    title: "Refrigerator Repair",
    desc: "Expert repair for all types of refrigerators. Single door, Double door, Side by side & more.",
  },
  {
    icon: WashingMachine,
    title: "Washing Machine Repair",
    desc: "Top load, Front load, Semi automatic - we repair all brands and models with genuine parts.",
  },
  {
    icon: AirVent,
    title: "AC Service & Repair",
    desc: "AC installation, Gas filling, Cleaning, Maintenance & General repairs - all types of AC.",
  },
  {
    icon: Microwave,
    title: "Microwave Repair",
    desc: "We repair all types of Microwaves with 100% genuine spare parts and warranty.",
  },
];

const brands = ["LG", "SAMSUNG", "IFB", "WHIRLPOOL", "HAIER", "VOLTAS", "& More"];

const whyUs = [
  { icon: Shield, title: "Authorized Service Experts", desc: "Trained & certified technicians" },
  { icon: Award, title: "Genuine Parts 100% Original", desc: "Use of genuine brand parts" },
  { icon: Clock, title: "Quick & Reliable Service", desc: "Same day service in Karimnagar" },
  { icon: Wallet, title: "Affordable Pricing", desc: "Transparent pricing, no hidden charges" },
];

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
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
    </div>
  );
}

function Index() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Toaster position="top-center" richColors />

      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:text-sm">
          <span className="font-medium">
            Welcome to Falcon Services – Authorized Appliance Service Center
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

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm font-semibold tracking-wide lg:flex">
            {["HOME", "SERVICES", "BRANDS", "AMC PLANS", "ABOUT US", "CONTACT"].map((n, i) => (
              <a
                key={n}
                href={`#${n.toLowerCase().replace(" ", "-")}`}
                className={`transition-colors hover:text-primary ${i === 0 ? "text-primary" : "text-foreground"}`}
              >
                {n}
              </a>
            ))}
          </nav>
          <Button onClick={openBooking} size="lg" className="font-semibold shadow-md">
            <Calendar className="mr-1.5 h-4 w-4" /> BOOK SERVICE
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-background">
        <div className="container mx-auto grid items-center gap-8 px-4 py-12 lg:grid-cols-2 lg:py-20">
          <div>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              EXPERT CARE FOR
              <span className="block text-primary">YOUR APPLIANCES</span>
            </h1>
            <p className="mt-3 text-lg font-medium text-muted-foreground">
              Fast. Reliable. Affordable.
            </p>
            <div className="mt-6">
              <p className="font-semibold">Authorized Service Center for</p>
              <p className="mt-1 text-lg font-bold text-primary">
                LG <span className="text-muted-foreground">|</span> Samsung{" "}
                <span className="text-muted-foreground">|</span> IFB{" "}
                <span className="text-muted-foreground">|</span> Whirlpool{" "}
                <span className="text-foreground">& More</span>
              </p>
            </div>
            <ul className="mt-5 grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
              {["Genuine Parts", "Expert Technicians", "Doorstep Service", "Warranty on Service"].map(
                (f) => (
                  <li key={f} className="flex items-center gap-1.5 font-medium">
                    <Check className="h-4 w-4 text-primary" /> {f}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-3 rounded-lg bg-primary px-6 py-3 text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-xs font-semibold opacity-90">CALL NOW</div>
                  <div className="font-display text-lg font-bold">{PHONE_DISPLAY}</div>
                </div>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border-2 border-border bg-card px-6 py-3 font-semibold transition-colors hover:border-whatsapp hover:text-whatsapp"
              >
                <MessageCircle className="h-5 w-5 text-whatsapp" /> WHATSAPP US
              </a>
            </div>
            <p className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary">
              <MapPin className="h-4 w-4" /> Same Day Service Available in Karimnagar
            </p>
          </div>

          <div className="relative">
            <img
              src={heroImg}
              alt="Falcon Services expert appliance technician"
              width={1280}
              height={896}
              className="w-full rounded-2xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-2 rounded-xl bg-card px-5 py-4 shadow-xl ring-1 ring-border sm:-right-4">
              <div className="font-display text-3xl font-extrabold text-primary">100%</div>
              <div className="text-xs font-bold uppercase tracking-wide">Customer Satisfaction</div>
              <div className="mt-1 flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            OUR <span className="text-primary">SERVICES</span>
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-primary" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="group relative rounded-xl border border-border bg-card p-6 pt-12 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <button
                    onClick={openBooking}
                    className="mt-4 text-xs font-bold tracking-widest text-primary transition-colors hover:underline"
                  >
                    BOOK NOW →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section id="brands" className="border-y border-border bg-muted/40 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-display text-2xl font-extrabold sm:text-3xl">
            BRANDS <span className="text-primary">WE SERVICE</span>
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-primary" />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {brands.map((b) => (
              <div
                key={b}
                className="flex h-16 items-center justify-center rounded-lg border border-border bg-card font-display text-base font-extrabold tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us + Book panel */}
      <section className="bg-dark-bg py-16 text-dark-bg-foreground">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              WHY CHOOSE <span className="text-primary">FALCON SERVICES?</span>
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {whyUs.map((w) => {
                const Icon = w.icon;
                return (
                  <div key={w.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold">{w.title}</h3>
                      <p className="mt-1 text-sm text-white/65">{w.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* AMC banner */}
            <div className="relative mt-10 overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-extrabold">
                    SAVE MORE WITH OUR <span className="text-yellow-300">AMC PLANS</span>
                  </h3>
                  <p className="mt-1 text-sm opacity-90">
                    Priority Service • Regular Maintenance • Discounts
                  </p>
                  <button
                    onClick={openBooking}
                    className="mt-4 rounded-md bg-white px-5 py-2 text-sm font-bold text-primary shadow-md transition-transform hover:scale-105"
                  >
                    VIEW AMC PLANS
                  </button>
                </div>
                <div className="rounded-full bg-yellow-300 px-4 py-3 text-center font-display font-extrabold text-foreground">
                  <div className="text-xs">UP TO</div>
                  <div className="text-2xl leading-none">20%</div>
                  <div className="text-xs">OFF</div>
                </div>
              </div>
            </div>
          </div>

          {/* Book panel */}
          <div className="rounded-xl bg-card p-6 text-card-foreground shadow-2xl">
            <h3 className="font-display text-xl font-extrabold tracking-tight">BOOK A SERVICE</h3>
            <div className="mt-4 space-y-3">
              <input
                placeholder="Full Name"
                className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
                onFocus={openBooking}
                readOnly
              />
              <input
                placeholder="Mobile Number"
                className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
                onFocus={openBooking}
                readOnly
              />
              <select
                className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
                onFocus={openBooking}
                defaultValue=""
              >
                <option value="" disabled>
                  Select Service
                </option>
              </select>
              <input
                placeholder="Your Location"
                className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
                onFocus={openBooking}
                readOnly
              />
              <Button onClick={openBooking} size="lg" className="w-full font-bold">
                BOOK NOW
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats + Testimonial */}
      <section className="py-16">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2">
            {[
              { v: "10+", l: "Years of Experience" },
              { v: "25K+", l: "Happy Customers" },
              { v: "15+", l: "Expert Technicians" },
              { v: "4.8", l: "Google Ratings", stars: true },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-4xl font-extrabold text-primary">{s.v}</div>
                {s.stars && (
                  <div className="mt-1 flex justify-center gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                )}
                <div className="mt-1 text-sm font-semibold text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
            <h3 className="font-display text-sm font-bold tracking-widest text-muted-foreground">
              WHAT OUR CUSTOMERS SAY
            </h3>
            <p className="mt-3 font-display text-lg italic leading-relaxed">
              "Excellent service! Technician came on time and repaired my LG refrigerator perfectly.
              Very professional and affordable."
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-display font-bold text-primary-foreground">
                RK
              </div>
              <div>
                <div className="font-bold">– Ramesh Kumar</div>
                <div className="text-xs text-muted-foreground">Karimnagar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-dark-bg py-14 text-dark-bg-foreground">
        <div className="container mx-auto grid gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-white/65">
              Falcon Services is a trusted name for home appliance repair and maintenance in
              Karimnagar. We provide doorstep service with genuine parts and warranty.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold tracking-wide">QUICK LINKS</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {["Home", "Services", "Brands", "AMC Plans", "About Us", "Contact Us"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-primary">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold tracking-wide">OUR SERVICES</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {services.map((s) => (
                <li key={s.title}>{s.title}</li>
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
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-2 hover:text-primary"
                >
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

      <WhatsAppFloat />
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
}
