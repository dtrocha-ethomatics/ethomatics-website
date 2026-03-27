"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import { about } from "@/config/site";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, isVisible] as const;
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function EthosCard({
  label,
  title,
  text,
  index,
}: {
  label: string;
  title: string;
  text: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const delay = 0.1 + index * 0.15;

  const direction: "up" | "left" | "right" = index === 0 ? "left" : index === 2 ? "right" : "up";

  return (
    <FadeIn delay={delay} direction={direction}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative overflow-hidden rounded-sm h-full cursor-default"
        style={{
          background: hovered ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)",
          border: `1px solid ${hovered ? "#2C6B70" : "#DAD1C4"}`,
          padding: "36px 32px",
          transition: "background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
          boxShadow: hovered
            ? "0 12px 40px rgba(44,107,112,0.12)"
            : "0 2px 12px rgba(46,52,64,0.06)",
        }}
      >
        {/* Animated top line */}
        <div
          className="absolute top-0 h-[2px] bg-[#2C6B70]"
          style={{
            width: hovered ? "100%" : "0%",
            transition: "width 0.5s ease",
            ...(index === 0
              ? { left: 0 }
              : index === 2
                ? { right: 0 }
                : { left: "50%", transform: "translateX(-50%)" }),
          }}
        />
        <span className="block mb-3.5 font-body text-[11px] font-semibold tracking-[2.5px] uppercase text-[#2C6B70]">
          {label}
        </span>
        <h3 className="font-heading text-[22px] font-bold text-[#1A2A2A] mb-3.5 leading-[1.3]">
          {title}
        </h3>
        <p className="font-body text-[15px] leading-[1.7] text-primary/60 m-0">
          {text}
        </p>
      </div>
    </FadeIn>
  );
}

function ValueItem({ text, index }: { text: string; index: number }) {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      className="flex items-start gap-4"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(-20px)",
        transition: `all 0.7s ease ${index * 0.1}s`,
      }}
    >
      <div className="w-2 h-2 rounded-full bg-[#D8C3A5] shrink-0 mt-2" />
      <p className="font-body text-base leading-[1.7] text-primary/60 m-0">
        {text}
      </p>
    </div>
  );
}

function QuoteBox({ children }: { children: ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-xl px-7 py-5 cursor-default overflow-hidden inline-block"
      style={{
        background: hovered
          ? "linear-gradient(135deg, rgba(44,107,112,0.06) 0%, rgba(44,107,112,0.02) 100%)"
          : "transparent",
        boxShadow: hovered
          ? "0 0 30px rgba(44,107,112,0.12), 0 0 60px rgba(44,107,112,0.05)"
          : "none",
        transition: "all 0.5s ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      <p className="font-heading text-[clamp(18px,2.5vw,22px)] italic text-accent/80 m-0 leading-[1.7] whitespace-pre-line">
        {children}
      </p>
    </div>
  );
}

/* Smooth gradients between Page (#ECEFF4) ↔ Warm (#F5F0EB) */
const GRAD = {
  pageToWarm: "linear-gradient(to bottom, #ECEFF4 0%, #ECEEF3 11%, #EDEEF2 22%, #EEEEF1 33%, #EFEFF1 44%, #F0F0F0 55%, #F1F1EF 66%, #F2F1EE 77%, #F4F1ED 88%, #F5F0EB 100%)",
  warmToPage: "linear-gradient(to bottom, #F5F0EB 0%, #F4F1ED 11%, #F2F1EE 22%, #F1F1EF 33%, #F0F0F0 44%, #EFEFF1 55%, #EEEEF1 66%, #EDEEF2 77%, #ECEEF3 88%, #ECEFF4 100%)",
};

function SectionLabel({ children, variant = "dark" }: { children: ReactNode; variant?: "dark" | "light" }) {
  const color = variant === "light" ? "#D8C3A5" : "#2C6B70";
  return (
    <FadeIn>
      <div className="flex justify-center mb-4">
        <div className="inline-flex items-center gap-3">
          <div className="h-px w-6 opacity-40" style={{ background: color }} />
          <span
            className="font-body text-[17px] md:text-[19px] font-semibold tracking-[0.2em] uppercase"
            style={{ color }}
          >
            {children}
          </span>
          <div className="h-px w-6 opacity-40" style={{ background: color }} />
        </div>
      </div>
    </FadeIn>
  );
}

export function About() {
  return (
    <div>
      {/* ── MISSION ── */}
      <section id="about" className="bg-[#ECEFF4]">
        <div className="max-w-[1440px] mx-auto px-8 py-20 md:py-28">
          <SectionLabel>{about.mission.label}</SectionLabel>

          <FadeIn delay={0.1}>
            <p className="font-heading text-[clamp(20px,3vw,26px)] leading-[1.6] text-[#1A2A2A] mb-12 font-normal whitespace-pre-line">
              {about.mission.text}
            </p>
          </FadeIn>

          <FadeIn delay={0.2} direction="left">
            <QuoteBox>{about.mission.quote}</QuoteBox>
          </FadeIn>
        </div>
      </section>

      {/* ── ETHOS / AUTOMATICS / AI ── */}
      <section className="bg-[#ECEFF4]">
        <div className="max-w-[1440px] mx-auto px-8 py-20 md:py-28">
          <SectionLabel>{about.ethos.label}</SectionLabel>
          <FadeIn delay={0.05}>
            <p className="font-heading text-[clamp(18px,2.5vw,22px)] text-[#1A2A2A]/70 mb-12 leading-[1.6] text-center">
              {about.ethos.sublabel}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {about.ethos.cards.map((card, i) => (
              <EthosCard
                key={card.label}
                index={i}
                label={card.label}
                title={card.title}
                text={card.text}
              />
            ))}
          </div>

          <FadeIn delay={0.6}>
            <p className="font-heading text-[clamp(18px,2.5vw,22px)] italic text-accent/80 text-center mt-12">
              {about.ethos.summary}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── WIE WIR ARBEITEN ── */}
      <section className="bg-[#ECEFF4]">
        <div className="max-w-[1440px] mx-auto px-8 py-20 md:py-28">
          <SectionLabel>{about.process.label}</SectionLabel>

          <FadeIn delay={0.1}>
            <p className="font-heading text-[clamp(18px,2.5vw,24px)] leading-[1.65] text-[#1A2A2A] mb-10 font-normal">
              {about.process.intro}
            </p>
          </FadeIn>

          <div className="flex flex-col gap-5">
            {about.process.values.map((value, i) => (
              <ValueItem key={i} index={i} text={value} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WIRKUNG ── */}
      <section className="bg-[#ECEFF4]">
        <div className="max-w-[1440px] mx-auto px-8 py-20 md:py-28">
          <SectionLabel>{about.impact.label}</SectionLabel>

          <FadeIn delay={0.1}>
            <p className="font-heading text-[clamp(18px,2.5vw,24px)] leading-[1.65] text-[#1A2A2A] mb-9 font-normal">
              {about.impact.text}{" "}
              <span className="text-accent font-semibold">
                {about.impact.highlight}
              </span>{" "}
              {about.impact.textSuffix}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-8 mb-10">
              {about.impact.bullets.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                  <span className="font-body text-sm font-medium text-primary/60/65 tracking-[0.3px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="border-t border-primary/[0.08] pt-7">
              <p className="font-body text-base text-primary/50 m-0 leading-[1.7] font-light">
                {about.impact.closing}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
