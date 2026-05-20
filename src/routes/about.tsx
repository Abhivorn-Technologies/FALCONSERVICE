import { createFileRoute } from "@tanstack/react-router";
import { Award, Users, Wrench, Smile } from "lucide-react";
import teamImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — Falcon Services Karimnagar" },
      {
        name: "description",
        content:
          "Falcon Services is Karimnagar's trusted home appliance repair team — 10+ years of experience and 25,000+ happy customers.",
      },
    ],
  }),
});

const stats = [
  { icon: Award, v: "10+", l: "Years Experience" },
  { icon: Users, v: "25K+", l: "Happy Customers" },
  { icon: Wrench, v: "15+", l: "Technicians" },
  { icon: Smile, v: "4.8★", l: "Google Rating" },
];

function AboutPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-accent to-background py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            ABOUT <span className="text-primary">FALCON SERVICES</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Karimnagar's most trusted name in home appliance repair since 2015.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2">
          <img
            src={teamImg}
            alt="The Falcon Services technician team"
            loading="lazy"
            width={1280}
            height={800}
            className="w-full rounded-2xl object-cover shadow-xl"
          />
          <div>
            <h2 className="font-display text-3xl font-extrabold">Our Story</h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
            <p className="mt-4 text-muted-foreground">
              Founded in 2015 at Ramnagar Signal Center, Karimnagar, Falcon Services started with a
              single technician and a simple promise — honest, on-time appliance repair. A decade
              later, we are a team of 15+ certified engineers serving over 25,000 happy families
              and businesses across the district.
            </p>
            <p className="mt-3 text-muted-foreground">
              We service every major brand, use only genuine spare parts, and back every repair with
              a written service warranty. No hidden charges, no inflated bills — just dependable
              service at your doorstep.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-dark-bg py-14 text-dark-bg-foreground">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.l} className="text-center">
                <Icon className="mx-auto h-8 w-8 text-primary" />
                <div className="mt-3 font-display text-4xl font-extrabold text-primary">{s.v}</div>
                <div className="mt-1 text-sm text-white/70">{s.l}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-3">
          {[
            { t: "Our Mission", d: "Bring honest, fast, affordable appliance care to every home in Karimnagar." },
            { t: "Our Vision", d: "Be the most trusted appliance service brand across Telangana by 2030." },
            { t: "Our Values", d: "Transparency, punctuality, genuine parts and a warm customer experience." },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-xl font-bold text-primary">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
