"use client";

import { hero } from "@/config/site";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <>
      <section className="relative min-h-[85svh] flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-[#2E3440]" />
          {/* Mesh gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(44,107,112,0.35) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(218,209,196,0.1) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 80% 90%, rgba(44,107,112,0.15) 0%, transparent 50%)",
            }}
          />
          {/* Animated orbs */}
          <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-accent/8 blur-[120px] animate-[pulse_10s_ease-in-out_infinite] will-change-transform" style={{ transform: 'translateZ(0)' }} />
          <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-secondary/6 blur-[100px] animate-[pulse_14s_ease-in-out_infinite_2s] will-change-transform" style={{ transform: 'translateZ(0)' }} />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          {/* Bottom gradient fade — very tall and gradual */}
          <div className="absolute bottom-0 left-0 right-0 h-[50%]" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(236,239,244,0.15) 30%, rgba(236,239,244,0.5) 60%, rgba(236,239,244,0.85) 80%, #ECEFF4 100%)" }} />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-[1100px] px-6 md:px-10 pt-[80px] pb-20 sm:pb-24 md:pb-32 w-full">
          <div className="max-w-3xl mx-auto text-center">
            {/* Tagline */}
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-px w-10 bg-white/40" />
                <p className="text-secondary font-semibold text-base sm:text-lg md:text-xl tracking-[0.25em] uppercase">
                  Built to simplify.
                </p>
                <div className="h-px w-10 bg-white/40" />
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-accent mb-8">
                {hero.headline}
              </h1>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/60 max-w-2xl mx-auto">
                {hero.subline}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Floating Quote — elevated with 3D depth */}
      <FadeIn delay={0.7}>
        <div className="relative -mt-20 sm:-mt-32 md:-mt-44 z-10 mx-auto max-w-[880px] px-6 md:px-10" style={{ perspective: "1200px" }}>
          <div
            className="bg-white rounded-3xl p-8 sm:p-10 md:p-14 text-center animate-[floatQuote_5s_ease-in-out_infinite] border border-secondary/20 will-change-transform"
            style={{
              boxShadow: "0 30px 100px rgba(46,52,64,0.18), 0 12px 40px rgba(46,52,64,0.08)",
              transform: "translateZ(0)",
            }}
          >
            <p className="text-lg sm:text-2xl md:text-3xl font-bold text-primary/70 leading-snug italic">
              {hero.quote.split("niemand vermisst").map((part, i) =>
                i === 0 ? (
                  <span key={i}>
                    {part}
                    <span className="text-accent not-italic relative">
                      niemand vermisst
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent/30 rounded-full" />
                    </span>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </p>
          </div>
        </div>
      </FadeIn>
    </>
  );
}
