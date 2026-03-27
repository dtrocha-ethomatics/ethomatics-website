import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { UnifiedContactForm } from "@/components/sections/UnifiedContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Nehmen Sie Kontakt mit Ethomatics.AI auf. Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
  alternates: {
    canonical: "/kontakt",
  },
};

export default function KontaktPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1 pt-[72px] md:pt-[80px]">
        <UnifiedContactForm />
      </main>
      <Footer />
    </>
  );
}
