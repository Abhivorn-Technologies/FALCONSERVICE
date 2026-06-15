import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { BookingProvider } from "@/components/BookingContext";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Falcon Services - Appliance Repair in Karimnagar",
  description: "Falcon Services Karimnagar - Expert repair for refrigerators, washing machines, AC, microwaves. LG, Samsung, IFB, Whirlpool. Call +91 8179725035.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BookingProvider>
          <div className="min-h-screen bg-background font-sans text-foreground">
            <Toaster position="top-center" richColors />
            <SiteHeader />
            {children}
            <SiteFooter />
            <WhatsAppFloat />
          </div>
        </BookingProvider>
      </body>
    </html>
  );
}
