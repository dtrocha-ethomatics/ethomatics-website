import { contact } from "@/config/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function Kontakt() {
  return (
    <SectionWrapper id="kontakt" background="white">
      <FadeIn className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-5">
          {contact.title}
        </h2>
        <p className="text-lg text-primary/60 mb-10">{contact.subtitle}</p>

        <Button href="/kontakt" size="lg" className="mx-auto">
          Kontakt aufnehmen
        </Button>

        <p className="text-sm text-primary/40 mt-6">
          Oder schreiben Sie uns direkt:{" "}
          <a
            href="mailto:d.trocha@ethomatics.ai"
            className="text-accent hover:underline"
          >
            d.trocha@ethomatics.ai
          </a>
        </p>
      </FadeIn>
    </SectionWrapper>
  );
}
