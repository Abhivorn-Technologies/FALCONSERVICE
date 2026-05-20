import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-technician.jpg";
import amcImg from "@/assets/amc-hero.jpg";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/components/BookingContext";
import {
  Phone,
  MapPin,
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
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Falcon Services - Appliance Repair in Karimnagar" },
      {
        name: "description",
        content:
          "Falcon Services Karimnagar - Expert repair for refrigerators, washing machines, AC, microwaves. LG, Samsung, IFB, Whirlpool. Call +91 8179725035.",
      },
    ],
  }),
});

const PHONE_DISPLAY = "+91 81797 25035";
const PHONE_TEL = "+918179725035";
const WHATSAPP = "918179725035";

const services = [
  { icon: Refrigerator, title: "Refrigerator Repair", desc: "Single door, double door, side-by-side & more." },
  { icon: WashingMachine, title: "Washing Machine Repair", desc: "Top load, front load, semi automatic." },
  { icon: AirVent, title: "AC Service & Repair", desc: "Installation, gas filling, cleaning & repairs." },
  { icon: Microwave, title: "Microwave Repair", desc: "All types with 100% genuine spare parts." },
];

const whyUs = [
  { icon: Shield, title: "Authorized Experts", desc: "Trained & certified technicians" },
  { icon: Award, title: "Genuine Parts", desc: "100% original brand spares" },
  { icon: Clock, title: "Quick & Reliable", desc: "Same day service in Karimnagar" },
  { icon: Wallet, title: "Affordable Pricing", desc: "Transparent, no hidden charges" },
];

function Index() {
  const { open: openBooking } = useBooking();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-background">
        <div className="container mx-auto grid items-center gap-8 px-4 py-12 lg:grid-cols-2 lg:py-20">
          <div>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              EXPERT CARE FOR
              <span className="block text-primary">YOUR APPLIANCES</span>
            </h1>
            <p className="mt-3 text-lg font-medium text-muted-foreground">Fast. Reliable. Affordable.</p>
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
              {["Genuine Parts", "Expert Technicians", "Doorstep Service", "Warranty"].map((f) => (
                <li key={f} className="flex items-center gap-1.5 font-medium">
                  <Check className="h-4 w-4 text-primary" /> {f}
                </li>
              ))}
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

      {/* Services teaser */}
      <section className="py-16">
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
                  <Link
                    to="/services"
                    className="mt-4 inline-block text-xs font-bold tracking-widest text-primary hover:underline"
                  >
                    LEARN MORE →
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services">
              <Button size="lg" variant="outline" className="font-semibold">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-dark-bg py-16 text-dark-bg-foreground">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            WHY CHOOSE <span className="text-primary">FALCON SERVICES?</span>
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className="rounded-xl border border-white/10 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-display font-bold">{w.title}</h3>
                  <p className="mt-1 text-sm text-white/65">{w.desc}</p>
                </div>
              );
            })}
          </div>

          {/* AMC banner */}
          <div className="relative mt-12 overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground">
            <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
              <div>
                <h3 className="font-display text-2xl font-extrabold">
                  SAVE MORE WITH OUR <span className="text-yellow-300">AMC PLANS</span>
                </h3>
                <p className="mt-1 text-sm opacity-90">
                  Priority Service • Regular Maintenance • Discounts
                </p>
                <Link to="/amc">
                  <button className="mt-4 rounded-md bg-white px-5 py-2 text-sm font-bold text-primary shadow-md transition-transform hover:scale-105">
                    VIEW AMC PLANS
                  </button>
                </Link>
              </div>
              <img
                src={amcImg}
                alt="Home appliances"
                loading="lazy"
                width={1280}
                height={800}
                className="hidden h-32 w-56 rounded-lg object-cover md:block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Need a Repair Today?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Book a technician in less than 60 seconds.
          </p>
          <Button onClick={openBooking} size="lg" className="mt-6 font-bold">
            BOOK SERVICE NOW
          </Button>
        </div>
      </section>
    </>
  );
}
