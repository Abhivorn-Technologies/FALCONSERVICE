import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";

const PHONE = "918179725035";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().trim().email("Invalid email").max(120).optional().or(z.literal("")),
  address: z.string().trim().max(300).optional().or(z.literal("")),
});

export function BookingDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    const msg = `*New Service Booking - Falcon Services*%0A%0A*Name:* ${encodeURIComponent(parsed.data.name)}%0A*Phone:* ${encodeURIComponent(parsed.data.phone)}${parsed.data.email ? `%0A*Email:* ${encodeURIComponent(parsed.data.email)}` : ""}${parsed.data.address ? `%0A*Address:* ${encodeURIComponent(parsed.data.address)}` : ""}`;
    window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
    setSubmitted(true);
    toast.success("Booking request sent! We'll contact you shortly.");
  };

  const reset = () => {
    setForm({ name: "", phone: "", email: "", address: "" });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) setTimeout(reset, 200);
      }}
    >
      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <div className="py-6 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-whatsapp" />
            <h3 className="mt-4 font-display text-xl font-bold">Request Received</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Our team will call you on <span className="font-medium text-foreground">{form.phone}</span> shortly.
            </p>
            <Button className="mt-5" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Book a Service</DialogTitle>
              <DialogDescription>
                Share your details and our technician will reach out.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">
                  Full Name <span className="text-primary">*</span>
                </Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="mt-1.5"
                />
                {errors.name && <p className="mt-1 text-xs text-primary">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="phone">
                  Phone Number <span className="text-primary">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className="mt-1.5"
                />
                {errors.phone && <p className="mt-1 text-xs text-primary">{errors.phone}</p>}
              </div>
              <div>
                <Label htmlFor="email">
                  Email <span className="text-muted-foreground text-xs">(optional)</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="mt-1.5"
                />
                {errors.email && <p className="mt-1 text-xs text-primary">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="address">
                  Address <span className="text-muted-foreground text-xs">(optional)</span>
                </Label>
                <Textarea
                  id="address"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  placeholder="Service location"
                  rows={2}
                  className="mt-1.5"
                />
              </div>
              <Button type="submit" size="lg" className="w-full font-semibold">
                Book Service
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
