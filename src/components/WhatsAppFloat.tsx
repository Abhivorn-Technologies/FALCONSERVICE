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
      <svg
        viewBox="0 0 32 32"
        className="relative h-8 w-8"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.187-.7.187-1.06 0-.5-2.378-1.633-2.65-1.633zm-2.96 7.593c-1.86 0-3.68-.53-5.244-1.535L7.182 24.34l1.117-3.612a9.503 9.503 0 0 1-1.836-5.626c0-5.317 4.382-9.7 9.7-9.7 5.317 0 9.7 4.382 9.7 9.7-.002 5.317-4.384 9.696-9.703 9.696zm0-21.42c-6.46 0-11.72 5.26-11.72 11.72 0 2.21.61 4.35 1.77 6.22l-2.23 6.66 6.51-2.06a11.66 11.66 0 0 0 5.67 1.477c6.46 0 11.72-5.26 11.72-11.72S22.612 3.378 16.15 3.378z" />
      </svg>
    </a>
  );
}
