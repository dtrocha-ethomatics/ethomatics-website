import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { USPs } from "@/components/sections/USPs";
import { Leistungen } from "@/components/sections/Leistungen";
import { Prozess } from "@/components/sections/Prozess";
import { ReadinessCheck } from "@/components/sections/ReadinessCheck";
import { Team } from "@/components/sections/Team";
import { Referenzen } from "@/components/sections/Referenzen";
import { Kontakt } from "@/components/sections/Kontakt";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <ScrollReveal />
      <main className="flex-1">
        <Hero />
        <About />
        <Leistungen />
        <USPs />
        <Prozess />
        <ReadinessCheck />
        <Team />
        <Referenzen />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
