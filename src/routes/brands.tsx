import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/components/BookingContext";
import { Shield, Award } from "lucide-react";

export const Route = createFileRoute("/brands")({
  component: BrandsPage,
  head: () => ({
    meta: [
      { title: "Brands We Service — Falcon Services Karimnagar" },
      {
        name: "description",
        content:
          "Authorized appliance service for LG, Samsung, IFB, Whirlpool, Haier, Voltas, Bosch, Godrej, Panasonic and more in Karimnagar.",
      },
    ],
  }),
});

const brands = [
  { name: "LG", note: "Refrigerators, ACs, Washing Machines" },
  { name: "SAMSUNG", note: "Refrigerators, Microwaves, ACs" },
  { name: "IFB", note: "Washing Machines, Microwaves" },
  { name: "WHIRLPOOL", note: "Refrigerators, Washing Machines" },
  { name: "HAIER", note: "Refrigerators, ACs" },
  { name: "VOLTAS", note: "Air Conditioners" },
  { name: "BOSCH", note: "Washing Machines, Dishwashers" },
  { name: "GODREJ", note: "Refrigerators, Washing Machines" },
  { name: "PANASONIC", note: "Microwaves, ACs" },
  { name: "DAIKIN", note: "Air Conditioners" },
  { name: "BLUE STAR", note: "Air Conditioners" },
  { name: "ONIDA", note: "Microwaves, ACs" },
];

function BrandsPage() {
  const { open } = useBooking();
  return (
    <main>
      <section className="bg-gradient-to-br from-accent to-background py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            BRANDS WE <span className="text-primary">SERVICE</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Authorized technicians trained on every major Indian and international appliance brand.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {brands.map((b) => (
              <div
                key={b.name}
                className="group flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl"
              >
                <div className="font-display text-xl font-extrabold tracking-wide group-hover:text-primary">
                  {b.name}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{b.note}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 rounded-2xl border border-border bg-card p-8 md:grid-cols-2">
            <div className="flex gap-4">
              <Shield className="h-10 w-10 shrink-0 text-primary" />
              <div>
                <h3 className="font-display text-lg font-bold">Genuine Spare Parts</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Every repair uses original brand spares with bill & warranty.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Award className="h-10 w-10 shrink-0 text-primary" />
              <div>
                <h3 className="font-display text-lg font-bold">Trained Technicians</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Brand-certified engineers with 5+ years of field experience.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button onClick={open} size="lg" className="font-bold">
              Book Service for Your Brand
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
