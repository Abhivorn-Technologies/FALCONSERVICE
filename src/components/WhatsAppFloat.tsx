import { MessageCircle } from "lucide-react";

const PHONE = "918179725035";

export function WhatsAppFloat() {
  const msg = encodeURIComponent("Hi Falcon Services, I'd like to book an appliance service.");
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/40 transition-transform hover:scale-110 active:scale-95"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-30" />
      <MessageCircle className="relative h-7 w-7 fill-white" />
    </a>
  );
}
