import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/components/BookingContext";
import { Check, Star } from "lucide-react";
import amcImg from "@/assets/amc-hero.jpg";

export const Route = createFileRoute("/amc")({
  component: AmcPage,
  head: () => ({
    meta: [
      { title: "AMC Plans — Falcon Services Karimnagar" },
      {
        name: "description",
        content:
          "Annual Maintenance Contract plans for refrigerators, washing machines, AC and microwaves. Priority service and discounts up to 20%.",
      },
    ],
  }),
});

const plans = [
  {
    name: "Basic",
    price: "₹1,499",
    period: "per appliance / year",
    features: ["2 service visits", "Priority booking", "10% off on spares", "Labour charges included"],
  },
  {
    name: "Premium",
    price: "₹2,499",
    period: "per appliance / year",
    features: [
      "4 service visits",
      "Priority booking",
      "20% off on spares",
      "Free gas top-up (AC)",
      "Labour & visit charges included",
    ],
    featured: true,
  },
  {
    name: "Home Combo",
    price: "₹5,999",
    period: "up to 4 appliances / year",
    features: [
      "Covers Fridge, WM, AC, MW",
      "Unlimited breakdown visits",
      "20% off on spares",
      "Priority slot booking",
    ],
  },
];

function AmcPage() {
  const { open } = useBooking();
  return (
    <main>
      <section className="bg-gradient-to-br from-accent to-background py-14">
        <div className="container mx-auto grid items-center gap-8 px-4 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
              AMC <span className="text-primary">PLANS</span>
            </h1>
            <p className="mt-3 text-muted-foreground">
              Annual Maintenance Contracts that keep your appliances running smoothly all year —
              priority service, regular check-ups and exclusive discounts.
            </p>
            <Button onClick={open} size="lg" className="mt-6 font-semibold">
              Enquire Now
            </Button>
          </div>
          <img
            src={amcImg}
            alt="Home appliances covered under AMC"
            loading="lazy"
            width={1280}
            height={800}
            className="w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${
                  p.featured ? "border-primary ring-2 ring-primary/40" : "border-border"
                }`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    <Star className="mr-1 inline h-3 w-3 fill-current" /> MOST POPULAR
                  </div>
                )}
                <h3 className="font-display text-2xl font-extrabold">{p.name}</h3>
                <div className="mt-3">
                  <span className="font-display text-4xl font-extrabold text-primary">{p.price}</span>
                  <div className="text-xs text-muted-foreground">{p.period}</div>
                </div>
                <ul className="mt-5 space-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <Button onClick={open} className="mt-6 w-full font-semibold" variant={p.featured ? "default" : "outline"}>
                  Choose Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
