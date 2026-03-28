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
        <Button href="/kontakt" size="lg" className="mx-auto">
          Kontakt aufnehmen
        </Button>
      </FadeIn>
    </SectionWrapper>
  );
}
