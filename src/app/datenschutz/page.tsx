import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { datenschutz } from "@/config/site";

export const metadata: Metadata = {
  title: "Datenschutzhinweise | Ethomatics.AI",
  description: "Datenschutzhinweise von Ethomatics.AI — Informationen zur Verarbeitung Ihrer personenbezogenen Daten.",
  alternates: { canonical: "/datenschutz" },
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

export default function DatenschutzPage() {
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
            {datenschutz.title}
          </h1>
          <div className="prose prose-lg max-w-none text-primary/80 [&_h2]:text-primary [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-primary [&_h3]:font-bold [&_h3]:text-xl [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-3 [&_p]:leading-relaxed [&_strong]:text-primary [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:list-inside [&_li]:leading-relaxed">
            {datenschutz.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i}>{block.replace(/^##\s+\d+\.\s*/, "").replace("## ", "")}</h2>
                );
              }
              if (block.startsWith("### ")) {
                return (
                  <h3 key={i}>{renderInlineMarkdown(block.replace("### ", ""))}</h3>
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
                  {lines.map((line, j) => {
                    if (line.startsWith("**") && line.endsWith("**")) {
                      return (
                        <strong key={j}>
                          {line.replace(/\*\*/g, "")}
                          <br />
                        </strong>
                      );
                    }
                    return (
                      <span key={j}>
                        {renderInlineMarkdown(line)}
                        {j < lines.length - 1 && <br />}
                      </span>
                    );
                  })}
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
