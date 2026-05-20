import { createContext, useContext, useState, ReactNode } from "react";
import { BookingDialog } from "./BookingDialog";

const Ctx = createContext<{ open: () => void }>({ open: () => {} });

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <Ctx.Provider value={{ open: () => setOpen(true) }}>
      {children}
      <BookingDialog open={isOpen} onOpenChange={setOpen} />
    </Ctx.Provider>
  );
}

export const useBooking = () => useContext(Ctx);
