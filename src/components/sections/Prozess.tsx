import { processSteps } from "@/config/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeIn } from "@/components/ui/FadeIn";

export function Prozess() {
  return (
    <SectionWrapper id="vorgehen" background="default">
      <FadeIn>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-6 bg-accent/40" />
            <p className="text-accent font-semibold text-[17px] md:text-[19px] uppercase tracking-[0.2em]">Unser Ansatz</p>
            <div className="h-px w-6 bg-accent/40" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-5">
            Wie wir vorgehen
          </h2>
          <p className="text-base md:text-lg text-primary/50 max-w-xl mx-auto leading-relaxed">
            Vier klare Schritte — von der ersten Analyse bis zur laufenden Betreuung. Transparent, verständlich und immer auf Augenhöhe.
          </p>
        </div>
      </FadeIn>

      {/* Desktop */}
      <div className="hidden md:block">
        <div className="relative flex justify-between items-start">
          <div className="absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
          {processSteps.map((step, idx) => (
            <FadeIn key={step.number} delay={0.1 + idx * 0.12}>
              <div className="group relative flex flex-col items-center text-center w-full px-6">
                <div className="w-20 h-20 rounded-2xl bg-white border border-secondary/40 text-accent flex items-center justify-center font-bold text-2xl z-10 mb-6 shadow-sm group-hover:bg-accent group-hover:text-white group-hover:border-accent group-hover:shadow-xl group-hover:shadow-accent/15 group-hover:scale-105 transition-[background-color,color,border-color,transform,box-shadow] duration-300">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-primary/60">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        {processSteps.map((step, idx) => (
          <FadeIn key={step.number} delay={idx * 0.1}>
            <div className="flex gap-5 min-h-[88px]">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-white border border-secondary/40 text-accent flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-sm">
                  {step.number}
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="w-px flex-1 min-h-[24px] bg-gradient-to-b from-accent/25 to-transparent mt-2" />
                )}
              </div>
              <div className="pt-2.5">
                <h3 className="text-base font-bold text-primary mb-1">{step.title}</h3>
                <p className="text-sm text-primary/60">{step.description}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
