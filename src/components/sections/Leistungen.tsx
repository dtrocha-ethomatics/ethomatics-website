import { services } from "@/config/site";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";

export function Leistungen() {
  return (
    <section id="leistungen" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-6 bg-accent/40" />
              <p className="text-accent font-semibold text-[17px] md:text-[19px] uppercase tracking-[0.2em]">Was wir tun</p>
              <div className="h-px w-6 bg-accent/40" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-5">
              Unsere Leistungen
            </h2>
            <p className="text-base md:text-lg text-primary/50 max-w-xl mx-auto leading-relaxed">
              Von der ersten Analyse bis zur laufenden Betreuung — wir begleiten den gesamten Weg.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {services.map((service, idx) => (
            <FadeIn key={service.title} delay={0.1 + idx * 0.15}>
              <Card className="group text-center h-full flex flex-col items-center p-8 md:p-10 hover:border-accent/30">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:shadow-lg group-hover:shadow-accent/10 group-hover:scale-105 transition-[background-color,transform,box-shadow] duration-300">
                  <span className="text-2xl font-bold text-accent">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-primary/60 flex-1">
                  {service.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
