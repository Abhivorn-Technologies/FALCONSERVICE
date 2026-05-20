import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/components/BookingContext";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us — Falcon Services Karimnagar" },
      {
        name: "description",
        content:
          "Contact Falcon Services in Karimnagar. Call +91 8179725035 or visit us at Ramnagar Signal Center.",
      },
    ],
  }),
});

const PHONE_DISPLAY = "+91 81797 25035";
const PHONE_TEL = "+918179725035";
const WHATSAPP = "918179725035";
const ADDRESS = "Ramnagar Signal Center, Karimnagar, Telangana";

function ContactPage() {
  const { open } = useBooking();
  return (
    <main>
      <section className="bg-gradient-to-br from-accent to-background py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            CONTACT <span className="text-primary">US</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            We're here to help — call, message, or drop by our service centre.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
            >
              <Phone className="mt-1 h-6 w-6 text-primary" />
              <div>
                <div className="font-display text-lg font-bold">Call Us</div>
                <div className="text-sm text-muted-foreground">{PHONE_DISPLAY}</div>
              </div>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-whatsapp"
            >
              <MessageCircle className="mt-1 h-6 w-6 text-whatsapp" />
              <div>
                <div className="font-display text-lg font-bold">WhatsApp</div>
                <div className="text-sm text-muted-foreground">Quick chat on {PHONE_DISPLAY}</div>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
              <Mail className="mt-1 h-6 w-6 text-primary" />
              <div>
                <div className="font-display text-lg font-bold">Email</div>
                <div className="text-sm text-muted-foreground">info@falconservices.in</div>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
              <MapPin className="mt-1 h-6 w-6 text-primary" />
              <div>
                <div className="font-display text-lg font-bold">Service Centre</div>
                <div className="text-sm text-muted-foreground">{ADDRESS}</div>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
              <Clock className="mt-1 h-6 w-6 text-primary" />
              <div>
                <div className="font-display text-lg font-bold">Working Hours</div>
                <div className="text-sm text-muted-foreground">
                  Mon – Sat: 9:00 AM – 7:00 PM
                  <br />
                  Sunday: 10:00 AM – 4:00 PM
                </div>
              </div>
            </div>
            <Button onClick={open} size="lg" className="w-full font-bold">
              Book a Service
            </Button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            <iframe
              title="Falcon Services Location"
              src="https://www.google.com/maps?q=Ramnagar+Karimnagar&output=embed"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
