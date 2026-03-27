"use client";

import { useState } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50" style={{ backgroundColor: "#1A2A2A" }}>
      <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 mx-auto max-w-screen-xl">
        <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#F5F0EB" }}>
          Diese Website verwendet keine Cookies. Weitere Informationen finden Sie in unserer{" "}
          <Link href="/datenschutz" className="underline hover:no-underline" style={{ color: "#F5F0EB" }}>
            Datenschutzhinweisen
          </Link>
          .
        </p>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            href="/datenschutz"
            className="hidden sm:inline-flex px-4 py-1.5 text-xs sm:text-sm font-medium rounded-lg border transition-colors hover:bg-white/10"
            style={{ color: "#F5F0EB", borderColor: "#F5F0EB" }}
          >
            Datenschutz
          </Link>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-lg text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: "#2C6B70" }}
          >
            Verstanden
          </button>
        </div>
      </div>
    </div>
  );
}
