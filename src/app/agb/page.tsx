import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { agb } from "@/config/site";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen | Ethomatics.AI",
  description:
    "AGB der Ethomatics.AI - Beratung und Dienstleistungen im Bereich KI-Automatisierung und Prozessoptimierung für Unternehmen.",
  alternates: { canonical: "/agb" },
};

function renderInlineMarkdown(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\))/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[2]) {
      parts.push(<strong key={key++}>{match[2]}</strong>);
    } else if (match[3] && match[4]) {
      const isMailto = match[4].startsWith("mailto:");
      parts.push(
        <a
          key={key++}
          href={match[4]}
          className="text-accent hover:underline"
          {...(!isMailto ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {match[3]}
        </a>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}

function getAnchorId(heading: string): string {
  const match = heading.match(/§\s*(\d+)/);
  return match ? `par-${match[1]}` : "";
}

export default function AgbPage() {
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
          <h1 className="text-4xl font-bold text-primary mb-3">
            {agb.title}
          </h1>
          <p className="text-sm text-primary/50 mb-8">{agb.stand}</p>
          <div className="prose prose-lg max-w-none text-primary/80 [&_h2]:text-primary [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:mb-3 [&_p]:leading-relaxed [&_strong]:text-primary [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:list-inside [&_li]:leading-relaxed">
            {agb.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                const heading = block.replace("## ", "");
                const anchorId = getAnchorId(heading);
                return (
                  <h2 key={i} id={anchorId || undefined}>
                    {renderInlineMarkdown(heading)}
                  </h2>
                );
              }
              const lines = block.split("\n");
              if (lines.some((l) => l.startsWith("- "))) {
                return (
                  <ul key={i}>
                    {lines
                      .filter((l) => l.startsWith("- "))
                      .map((l, j) => (
                        <li key={j}>{renderInlineMarkdown(l.slice(2))}</li>
                      ))}
                  </ul>
                );
              }
              return (
                <p key={i}>
                  {lines.map((line, j) => (
                    <span key={j}>
                      {renderInlineMarkdown(line)}
                      {j < lines.length - 1 && <br />}
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
