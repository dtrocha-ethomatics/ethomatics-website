import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import { CookieBanner } from "@/components/ui/CookieBanner";
import {
  OrganizationJsonLd,
  LocalBusinessJsonLd,
  WebSiteJsonLd,
} from "@/components/seo/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ethomatics.ai"),
  title: {
    default: "Ethomatics.AI — KI-Automatisierung für den Mittelstand",
    template: "%s — Ethomatics.AI",
  },
  description:
    "Wir helfen Unternehmen aus Handwerk, Industrie und freien Berufen, Prozesse mit KI zu automatisieren — DSGVO-konform, praxiserprobt und messbar wirksam.",
  keywords: [
    "KI-Automatisierung",
    "Mittelstand",
    "DSGVO-konform",
    "Prozessoptimierung",
    "Künstliche Intelligenz",
    "Handwerk",
    "Industrie",
    "KI-Beratung",
  ],
  authors: [{ name: "Ethomatics.AI" }],
  creator: "Ethomatics.AI",
  publisher: "Ethomatics.AI",
  formatDetection: {
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ethomatics.AI — KI-Automatisierung für den Mittelstand",
    description:
      "KI-Automatisierung für den Mittelstand. DSGVO-konform, praxiserprobt, messbar wirksam.",
    type: "website",
    locale: "de_DE",
    url: "https://ethomatics.ai",
    siteName: "Ethomatics.AI",
  },
  twitter: {
    card: "summary",
    title: "Ethomatics.AI — KI-Automatisierung für den Mittelstand",
    description:
      "KI-Automatisierung für den Mittelstand. DSGVO-konform, praxiserprobt, messbar wirksam.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${playfair.variable} ${inter.variable} antialiased`}
      data-theme="light"
      style={{ colorScheme: "light" }}
    >
      <head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light only" />
      </head>
      <body className="min-h-screen flex flex-col">
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
