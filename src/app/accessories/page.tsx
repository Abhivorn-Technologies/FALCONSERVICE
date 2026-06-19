import type { Metadata } from "next";
import { BookNowButton } from "@/components/BookNowButton";

export const metadata: Metadata = {
  title: "Accessories — Falcon Services Karimnagar",
  description: "High-quality genuine accessories for all your home appliances in Karimnagar.",
};

const accessories = [
  { name: "AC Remotes", desc: "Universal and brand-specific remotes for all ACs." },
  { name: "Washing Machine Covers", desc: "Waterproof and dustproof covers." },
  { name: "Refrigerator Stands", desc: "Heavy-duty adjustable stands." },
  { name: "Microwave Safe Utensils", desc: "Durable and safe for microwave use." },
  { name: "Water Filters", desc: "Original RO and water purifier filters." },
  { name: "AC Stabilizers", desc: "Voltage stabilizers to protect your AC." },
];

export default function AccessoriesPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-accent to-background py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            GENUINE <span className="text-primary">ACCESSORIES</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Enhance the life and performance of your appliances with our high-quality, genuine accessories.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {accessories.map((item) => (
              <div
                key={item.name}
                className="group flex flex-col justify-center rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl"
              >
                <div className="font-display text-xl font-bold tracking-wide group-hover:text-primary">
                  {item.name}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
             <p className="mb-4 text-muted-foreground">Looking for a specific accessory?</p>
            <BookNowButton size="lg" className="font-bold">
              Enquire Now
            </BookNowButton>
          </div>
        </div>
      </section>
    </main>
  );
}
