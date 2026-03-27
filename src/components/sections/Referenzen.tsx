import { references, referencesSection } from "@/config/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";

export function Referenzen() {
  // Hide section entirely when no references exist
  if (references.length === 0) return null;

  return (
    <SectionWrapper id="referenzen" background="default">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-5">
            {referencesSection.title}
          </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {references.map((ref, idx) => (
          <FadeIn key={ref.company} delay={0.1 + idx * 0.15}>
            <Card>
              <p className="text-xs uppercase tracking-wide text-accent font-medium mb-2">
                {ref.industry}
              </p>
              <h3 className="text-lg font-bold text-primary mb-2">
                {ref.company}
              </h3>
              <p className="text-sm text-primary/60">{ref.description}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
