import type { Metadata } from "next";
import { BookNowButton } from "@/components/BookNowButton";
import { Check } from "lucide-react";

const fridge = "/service-fridge.jpg";
const washing = "/service-washing.jpg";
const ac = "/service-ac.jpg";
const microwave = "/service-microwave.jpg";

export const metadata: Metadata = {
  title: "Services — Falcon Services Karimnagar",
  description: "Refrigerator, Washing Machine, AC and Microwave repair services at your doorstep in Karimnagar.",
};

const services = [
  {
    img: fridge,
    title: "Refrigerator Repair",
    desc: "Cooling issues, compressor faults, gas refilling, water leakage, ice maker problems and more — for single door, double door, side-by-side and French door models.",
    points: ["No cooling", "Gas refilling", "Compressor repair"],
  },
  {
    img: washing,
    title: "Washing Machine Repair",
    desc: "We service top load, front load and semi-automatic machines from every major brand with genuine spare parts and on-the-spot diagnostics.",
    points: ["Drum not spinning", "Water not draining", "Door lock issues", "Motor & PCB repair"],
  },
  {
    img: ac,
    title: "AC Service & Repair",
    desc: "Split & window AC installation, uninstallation, gas charging, deep cleaning, AMC and breakdown repairs by certified technicians.",
    points: ["Gas charging", "Deep cleaning", "Installation"],
  },
  {
    img: microwave,
    title: "Microwave Repair",
    desc: "Solo, grill and convection microwaves — heating failures, magnetron, fuse, turntable and display board repairs.",
    points: ["Not heating", "Magnetron replacement", "Display board", "Door switch"],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-accent to-background py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            OUR <span className="text-primary">SERVICES</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            End-to-end appliance care from a team you can trust. Same-day doorstep service across
            Karimnagar.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto space-y-16 px-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid items-center gap-8 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                width={1024}
                height={768}
                className="w-full rounded-2xl object-cover shadow-xl"
              />
              <div>
                <h2 className="font-display text-3xl font-extrabold">{s.title}</h2>
                <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
                <p className="mt-4 text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 font-medium">
                      <Check className="h-4 w-4 text-primary" /> {p}
                    </li>
                  ))}
                </ul>
                <BookNowButton size="lg" className="mt-6 font-semibold">
                  Book this service
                </BookNowButton>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
