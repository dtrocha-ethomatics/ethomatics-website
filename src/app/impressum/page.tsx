import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { impressum } from "@/config/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Ethomatics.AI — Dennis Trocha (Inhaber), Friedrichstr. 33, 74385 Pleidelsheim.",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <div className="mx-auto max-w-[960px] px-6 md:px-10">
          <Link
            href="/"
            className="text-sm text-accent hover:underline mb-6 inline-block"
          >
            &larr; Zurück zur Startseite
          </Link>
          <h1 className="text-4xl font-bold text-primary mb-8">
            {impressum.title}
          </h1>
          <div className="prose prose-lg max-w-none text-primary/80 [&_h2]:text-primary [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-primary [&_h3]:font-bold [&_h3]:text-xl [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-3 [&_p]:leading-relaxed">
            {impressum.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i}>{block.replace("## ", "")}</h2>
                );
              }
              if (block.startsWith("### ")) {
                return (
                  <h3 key={i}>{block.replace("### ", "")}</h3>
                );
              }
              return (
                <p key={i}>
                  {block.split("\n").map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < block.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </p>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
