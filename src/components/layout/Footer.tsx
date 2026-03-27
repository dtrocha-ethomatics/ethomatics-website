import Link from "next/link";
import { footer } from "@/config/site";
import { FadeIn } from "@/components/ui/FadeIn";

export function Footer() {
  return (
    <>
      {/* ── Gradient: Page (#ECEFF4) → Dark (#2E3440) ── */}
      <div
        className="h-24 sm:h-32 md:h-40"
        style={{
          background: "linear-gradient(to bottom, #ECEFF4 0%, #E2E5EB 10%, #D5DAE2 20%, #C5CBD5 30%, #B0B7C3 40%, #8E96A5 50%, #6E7786 60%, #535C6B 65%, #434C5A 75%, #374050 85%, #2E3440 100%)",
        }}
      />
      <footer className="bg-[#2E3440] text-white/70">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 py-16 md:py-20">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
              <div className="max-w-sm">
                <p className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-5" style={{ fontFamily: "var(--font-body)" }}>
                  Ethomatics<span className="text-accent font-bold">.AI</span>
                </p>
                <p className="text-sm leading-relaxed text-white/50">{footer.description}</p>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-1">
                  Rechtliches
                </p>
                {footer.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="border-t border-white/10 pt-8">
              <p className="text-xs text-white/30">{footer.copyright}</p>
            </div>
          </FadeIn>
        </div>
      </footer>
    </>
  );
}
