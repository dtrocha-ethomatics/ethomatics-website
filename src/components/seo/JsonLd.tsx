export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ethomatics.AI",
    url: "https://ethomatics.ai",
    logo: "https://ethomatics.ai/images/logo.svg",
    description:
      "KI-Automatisierung für den Mittelstand — DSGVO-konform, praxiserprobt und messbar wirksam.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Friedrichstr. 33",
      addressLocality: "Pleidelsheim",
      postalCode: "74385",
      addressCountry: "DE",
    },
    email: "d.trocha@ethomatics.ai",
    sameAs: [
      "https://www.linkedin.com/in/dennis-trocha",
      "https://www.linkedin.com/in/sascha-schned",
    ],
    founder: [
      {
        "@type": "Person",
        name: "Dennis Trocha",
        jobTitle: "Gründer & Geschäftsführer",
      },
      {
        "@type": "Person",
        name: "Sascha Schned",
        jobTitle: "Co-Founder & CTO",
      },
    ],
    knowsAbout: [
      "KI-Automatisierung",
      "Prozessoptimierung",
      "DSGVO-konforme KI",
      "Künstliche Intelligenz für den Mittelstand",
    ],
  };

  // Static JSON-LD — no user input, safe to inject
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ethomatics.AI",
    url: "https://ethomatics.ai",
    logo: "https://ethomatics.ai/images/logo.svg",
    image: "https://ethomatics.ai/images/logo.svg",
    description:
      "Wir helfen Unternehmen aus Handwerk, Industrie und freien Berufen, wiederkehrende Prozesse mit KI zu automatisieren.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Friedrichstr. 33",
      addressLocality: "Pleidelsheim",
      postalCode: "74385",
      addressRegion: "Baden-Württemberg",
      addressCountry: "DE",
    },
    email: "d.trocha@ethomatics.ai",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Deutschland",
    },
    serviceType: [
      "KI-Beratung",
      "KI-Strategie",
      "Prozessoptimierung",
      "KI-Implementierung",
    ],
  };

  // Static JSON-LD — no user input, safe to inject
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ethomatics.AI",
    url: "https://ethomatics.ai",
    description:
      "KI-Automatisierung für den Mittelstand — DSGVO-konform, praxiserprobt und messbar wirksam.",
    inLanguage: "de-DE",
    publisher: {
      "@type": "Organization",
      name: "Ethomatics.AI",
    },
  };

  // Static JSON-LD — no user input, safe to inject
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
