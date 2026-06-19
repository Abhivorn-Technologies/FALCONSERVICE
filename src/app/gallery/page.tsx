import type { Metadata } from "next";
import { BookNowButton } from "@/components/BookNowButton";

export const metadata: Metadata = {
  title: "Gallery — Falcon Services Karimnagar",
  description: "View our gallery of successful appliance repairs and services in Karimnagar.",
};

// Placeholder images for gallery. We'll use the existing amc/hero images for now.
const galleryImages = [
  { src: "/hero-technician.jpg", alt: "Expert technician repairing appliance" },
  { src: "/amc-hero.jpg", alt: "Home appliances" },
  { src: "/hero-technician.jpg", alt: "Appliance service" },
  { src: "/amc-hero.jpg", alt: "Maintenance check" },
];

export default function GalleryPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-accent to-background py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            OUR <span className="text-primary">GALLERY</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            A glimpse into our professional appliance repair and maintenance services.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
             {galleryImages.map((img, index) => (
                <div key={index} className="overflow-hidden rounded-xl border border-border shadow-sm">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105" 
                  />
                </div>
             ))}
          </div>

          <div className="mt-12 text-center">
             <h2 className="font-display text-2xl font-bold mb-4">Need your appliance fixed?</h2>
            <BookNowButton size="lg" className="font-bold">
              Book Service Now
            </BookNowButton>
          </div>
        </div>
      </section>
    </main>
  );
}
