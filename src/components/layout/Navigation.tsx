"use client";

import { useState, useEffect, useCallback } from "react";
import { navigation } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const isHomepage = window.location.pathname === "/";
    if (!isHomepage) {
      setScrolled(true);
      return;
    }
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || window.location.pathname !== "/") return;
    const ids = navigation.filter((l) => l.href.startsWith("/#")).map((l) => l.href.replace("/#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a[href]");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href?.startsWith("/#")) return;
      const el = document.getElementById(href.slice(2));
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      }
    };
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 will-change-[background-color]",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_12px_rgba(46,52,64,0.08)] border-b border-secondary/20"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto max-w-[1100px] px-6 md:px-10 flex items-center justify-between h-18 md:h-[80px]">
          <a href="/" className="flex-shrink-0 relative z-10 group">
            <span
              className={cn(
                "text-2xl sm:text-3xl font-semibold tracking-tight transition-colors duration-500",
                scrolled ? "text-primary" : "text-white"
              )}
              style={{ fontFamily: "var(--font-body)" }}
            >
              Ethomatics<span className="text-accent font-bold">.AI</span>
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-7">
            {navigation.map((link) => {
              const isActive = activeSection === link.href.replace("/#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-200 relative py-1",
                    scrolled
                      ? isActive ? "text-accent" : "text-primary/60 hover:text-primary"
                      : isActive ? "text-white" : "text-white/60 hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-accent rounded-full" />
                  )}
                </a>
              );
            })}
            <Button href="/kontakt" size="sm">
              Erstgespräch vereinbaren
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="lg:hidden relative z-10 p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={cn(
                "block w-6 h-0.5 transition-all duration-300 origin-center",
                scrolled ? "bg-primary" : "bg-white",
                mobileOpen && "translate-y-[9px] rotate-45 !bg-primary"
              )} />
              <span className={cn(
                "block w-6 h-0.5 transition-all duration-300",
                scrolled ? "bg-primary" : "bg-white",
                mobileOpen && "opacity-0 scale-x-0"
              )} />
              <span className={cn(
                "block w-6 h-0.5 transition-all duration-300 origin-center",
                scrolled ? "bg-primary" : "bg-white",
                mobileOpen && "-translate-y-[9px] -rotate-45 !bg-primary"
              )} />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 z-[55] bg-primary/30 backdrop-blur-sm"
            onClick={closeMobile}
            aria-hidden="true"
          />
          <div className="lg:hidden fixed inset-x-0 top-16 z-[60] mx-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-[0_12px_48px_rgba(46,52,64,0.15)] border border-secondary/30 overflow-hidden">
            <div className="flex flex-col items-center gap-5 py-8 px-6">
              {navigation.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-primary hover:text-accent transition-colors"
                  onClick={closeMobile}
                >
                  {link.label}
                </a>
              ))}
              <div className="w-12 h-px bg-secondary/50 my-1" />
              <Button href="/kontakt" size="md" className="w-full" onClick={closeMobile}>
                Erstgespräch vereinbaren
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
