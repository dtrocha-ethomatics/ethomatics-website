import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  description: "Die angeforderte Seite konnte nicht gefunden werden.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="flex-1 flex items-center justify-center pt-24 pb-16">
        <div className="text-center px-6">
          <p className="text-6xl font-bold text-accent mb-4">404</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
            Seite nicht gefunden
          </h1>
          <p className="text-primary/60 mb-8 max-w-md mx-auto">
            Die angeforderte Seite existiert nicht oder wurde verschoben.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Zur Startseite
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
