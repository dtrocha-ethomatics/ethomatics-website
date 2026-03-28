import type {
  NavLink,
  USP,
  Service,
  ProcessStep,
  ReadinessQuestion,
  ReadinessCategory,
  TeamMember,
  Reference,
} from "@/types";

export const siteConfig = {
  name: "Ethomatics.AI",
  tagline: "Built to simplify.",
  url: "https://ethomatics.ai",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "#",
  webhookReadinessUrl: process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || "",
  webhookContactUrl: process.env.NEXT_PUBLIC_N8N_CONTACT_WEBHOOK_URL || "",
};

export const navigation: NavLink[] = [
  { label: "Über uns", href: "/#about" },
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Vorgehen", href: "/#vorgehen" },
  { label: "KI-Check", href: "/#ki-check" },
  { label: "Team", href: "/#team" },
  { label: "Kontakt", href: "/kontakt" },
];

export const hero = {
  headline: "KI-Automatisierung für den Mittelstand",
  subline:
    "Wir helfen Unternehmen aus Handwerk, Industrie und freien Berufen, wiederkehrende Prozesse mit KI zu automatisieren — DSGVO-konform, praxiserprobt und messbar wirksam.",
  primaryCta: "Erstgespräch vereinbaren",
  secondaryCta: "KI-Readiness-Check starten",
  quote: "Ihr Team verliert jeden Tag Zeit durch Tätigkeiten, die niemand vermisst, wenn sie wegfallen.",
};

export const about = {
  hero: {
    headline: "Ihr Team verliert jeden Tag Zeit durch Tätigkeiten, die",
    headlineHighlight: "niemand vermisst",
    headlineSuffix: ", wenn sie wegfallen.",
    subline:
      "Das Organisieren, Verwalten und Dokumentieren beansprucht wertvolle Stunden, die in Wertschöpfung fließen sollten. Wir holen diese Zeit zurück. Dauerhaft.",
  },
  mission: {
    label: "Was uns antreibt",
    text: "Weniger Aufwand für das, was niemand vermisst.\nMehr Kapazität für das, was Ihr Unternehmen voranbringt.\nDass Sie sich und Ihr bestehendes Team auf das konzentrieren kann, was wirklich zählt.",
    quote:
      "Unsere Mission ist nicht, KI zu verkaufen.\nUnsere Mission ist, dass Ihr Unternehmen zu den Gewinnern dieser Veränderung gehört.",
  },
  ethos: {
    label: "Was Ethomatics.AI bedeutet",
    sublabel: "Unser Name vereint drei Überzeugungen.",
    cards: [
      {
        label: "Ethos",
        title: "Verantwortung und Haltung",
        text: "Entlastung, nicht Ersetzung. Wir empfehlen nur, was sich lohnt, und sagen offen, wenn etwas keinen Sinn ergibt. Ihr Team arbeitet selbstständig mit der Lösung — und wir bleiben als Partner an Ihrer Seite.",
      },
      {
        label: "Automatics",
        title: "Systematik und Verlässlichkeit",
        text: "Angebote schreiben um 21 Uhr. Rechnungen am Wochenende. Termine, die durchrutschen, weil jemand krank ist. Das muss nicht sein — Systeme übernehmen das zuverlässig, jeden Tag, ohne Überstunden.",
      },
      {
        label: "AI",
        title: "Intelligente Transformation",
        text: "Die Frage ist nicht ob, sondern wann. Und vor allem: mit wem. Wir bringen die Kombination aus Prozessverständnis und KI-Kompetenz mit, die den Unterschied zwischen Spielerei und Ergebnis macht.",
      },
    ],
    summary:
      "Verantwortung als Fundament. Automatisierung mit System. KI mit Wirkung.",
  },
  process: {
    label: "Wie wir arbeiten",
    intro:
      "Wir entwickeln Lösungen und implementieren KI-Systeme, die Unternehmen real entlasten — wirtschaftlich messbar, technisch nahtlos integriert und rechtlich voll verantwortbar.",
    values: [
      "Keine Standardantworten. Keine Black Box. Keine versteckten Abhängigkeiten.",
      "Wir hören zu, bevor wir Lösungen bauen. Wir entwickeln aus dem Problem heraus, nicht umgekehrt.",
      "Wir sagen Nein, wenn es richtig ist - auch wenn es Umsatz kostet.",
    ],
  },
  impact: {
    label: "Wirkung, die sich belegen lässt",
    text: "Wenn wir in Ihrem Unternehmen einen klar abgegrenzten Kernprozess mit DSGVO-konformer KI umsetzen, erzielen Sie eine dauerhafte Einsparung von mindestens",
    highlight: "20 %",
    textSuffix: "in Zeit- oder Prozesskosten.",
    bullets: ["24/7 wirksam", "Schwarz auf weiß belegt", "Ihre realen Prozessdaten"],
    closing:
      "Wir messen unseren Erfolg nicht an verkauften Projekten, sondern an der wertschöpfenden Zeit, die bei Ihnen zurückkommt.",
  },
};

export const usps: USP[] = [
  {
    title: "DSGVO-konform",
    description:
      "Datenschutz nach europäischem Standard — von Anfang an berücksichtigt.",
    icon: "shield",
  },
  {
    title: "30+ Jahre Erfahrung",
    description:
      "Automotive & Industrie Know-how aus erster Hand.",
    icon: "industry",
  },
  {
    title: "Messbar wirksam",
    description:
      "Keine leeren Versprechen — jede Lösung zeigt konkrete Ergebnisse.",
    icon: "chart",
  },
  {
    title: "Mittelstand-Fokus",
    description:
      "Lösungen für Handwerk, Industrie und freie Berufe.",
    icon: "building",
  },
];

export const services: Service[] = [
  {
    title: "KI-Beratung & Strategie",
    description:
      "Wo steht Ihr Unternehmen auf dem Weg zur KI? Unser Readiness-Check zeigt Potenziale, unser Strategie-Workshop liefert die Roadmap — pragmatisch, ohne Buzzwords.",
    icon: "consulting",
  },
  {
    title: "Prozessoptimierung",
    description:
      "Bevor Technologie greift, analysieren wir Ihre bestehenden Abläufe. Wir finden Engpässe, beseitigen Verschwendung und schaffen eine solide Basis für skalierbare Automatisierung.",
    icon: "process",
  },
  {
    title: "KI-Automatisierung",
    description:
      "Wir identifizieren repetitive Aufgaben in Ihrem Unternehmen und automatisieren diese mit KI-gestützten Assistenten-Systemen. Von der Dokumentenverarbeitung bis zur Kundenkommunikation — spürbare Entlastung ab Tag eins.",
    icon: "automation",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Readiness-Check",
    description: "Potenziale finden, Hebel priorisieren",
  },
  {
    number: 2,
    title: "Strategie",
    description: "Skalierbare Flexibilität",
  },
  {
    number: 3,
    title: "Lösung",
    description: "Assistenten-Systeme & Automatisierung",
  },
  {
    number: 4,
    title: "Betreuung",
    description: "Schulung & Erweiterungen",
  },
];

export const readinessQuestions: ReadinessQuestion[] = [
  {
    question: "Wie digital läuft das Tagesgeschäft in Ihrem Unternehmen?",
    options: [
      { label: "Überwiegend manuell — Papier, Telefon und Tabellen", value: 2 },
      { label: "Einzelne digitale Tools, aber viel bleibt manuell", value: 5 },
      { label: "Kernprozesse laufen in Software", value: 8 },
      { label: "Weitgehend digital und vernetzt", value: 11 },
    ],
  },
  {
    question: "Welche Bereiche laufen in Ihrem Unternehmen bereits effizient? (Mehrfachauswahl möglich)",
    multiSelect: true,
    options: [
      { label: "Dokumentenerstellung und -verwaltung", value: 3 },
      { label: "Informationsablage und Wissensmanagement", value: 3 },
      { label: "Interne Abstimmung und Kommunikation", value: 3 },
      { label: "Routineaufgaben und wiederkehrende Abläufe", value: 3 },
    ],
  },
  {
    question: "Wie gut sind die wichtigsten Abläufe in Ihrem Unternehmen festgehalten?",
    options: [
      { label: "Gar nicht — alle arbeiten etwas unterschiedlich", value: 2 },
      { label: "Die Abläufe sind bekannt, aber nicht schriftlich erfasst", value: 5 },
      { label: "Es gibt Checklisten oder grobe Anleitungen", value: 8 },
      { label: "Abläufe sind dokumentiert und werden regelmäßig geprüft", value: 11 },
    ],
  },
  {
    question: "Wie schnell finden Sie wichtige Informationen, wenn Sie diese brauchen?",
    options: [
      { label: "Oft dauert es lange oder es muss nachgefragt werden", value: 2 },
      { label: "Unterschiedlich — je nach Thema und Zuständigkeit", value: 5 },
      { label: "Die meisten Informationen sind zentral abrufbar", value: 8 },
      { label: "Alles ist klar strukturiert und schnell auffindbar", value: 11 },
    ],
  },
  {
    question: "Wie weit sind wiederkehrende Aufgaben in Ihrem Unternehmen bereits automatisiert?",
    options: [
      { label: "Gar nicht — alles läuft manuell und wiederholt sich täglich", value: 2 },
      { label: "Wenig — einzelne Schritte sind vereinfacht, aber das meiste bleibt manuell", value: 5 },
      { label: "Teilweise — einige Routinen laufen bereits automatisch", value: 8 },
      { label: "Weitgehend — die meisten Wiederholungen sind automatisiert", value: 11 },
    ],
  },
  {
    question: "Wie offen ist Ihr Unternehmen für neue digitale Lösungen?",
    options: [
      { label: "Eher zurückhaltend — Veränderung fällt schwer", value: 2 },
      { label: "Gemischt — manche sind offen, andere skeptisch", value: 5 },
      { label: "Grundsätzlich offen, wenn der Nutzen erkennbar ist", value: 8 },
      { label: "Sehr offen — neue Werkzeuge werden gerne ausprobiert", value: 11 },
    ],
  },
  {
    question: "Welche Erfahrung besteht bereits mit KI-Tools?",
    options: [
      { label: "Keine — das Thema ist noch neu", value: 2 },
      { label: "Erste Berührungspunkte, z.\u00A0B. ChatGPT ausprobiert", value: 5 },
      { label: "Regelmäßige Nutzung im Arbeitsalltag", value: 8 },
      { label: "KI ist bereits fester Bestandteil von Arbeitsabläufen", value: 11 },
    ],
  },
  {
    question: "Wie konkret ist das Interesse an KI-Automatisierung?",
    options: [
      { label: "Erst mal informieren, was überhaupt möglich ist", value: 2 },
      { label: "Es gibt Potenzial, aber der Einstieg fehlt noch", value: 5 },
      { label: "Es wird aktiv nach einer Lösung für ein konkretes Thema gesucht", value: 8 },
      { label: "Der Start soll zeitnah erfolgen", value: 11 },
    ],
  },
  {
    question: "Gibt es Bereitschaft, in Digitalisierung und Automatisierung zu investieren?",
    options: [
      { label: "Aktuell nicht vorgesehen", value: 2 },
      { label: "Grundsätzlich ja, wenn sich die Investition schnell auszahlt", value: 5 },
      { label: "Investitionen sind in den nächsten Monaten geplant", value: 8 },
      { label: "Budget ist vorhanden und eingeplant", value: 11 },
    ],
  },
];

export const readinessCategories: ReadinessCategory[] = [
  {
    key: "einsteiger",
    title: "Am Anfang der Reise",
    description:
      "Ihr Unternehmen steht am Anfang — und genau das ist ein guter Startpunkt. Oft stecken die größten Potenziale dort, wo sie noch niemand gesucht hat.",
    recommendation:
      "Lassen Sie uns gemeinsam herausfinden, wo in Ihrem Arbeitsalltag die größten Hebel liegen. Ein erstes Gespräch zeigt oft mehr als erwartet.",
    minScore: 0,
    maxScore: 35,
  },
  {
    key: "fortgeschritten",
    title: "Gute Basis vorhanden",
    description:
      "Es besteht bereits eine solide Grundlage. Jetzt geht es darum, die Prozesse zu identifizieren, bei denen KI den spürbarsten Effekt bringt — messbar und schnell.",
    recommendation:
      "Lassen Sie uns Ihre Potenziale gemeinsam bewerten. In einem kurzen Austausch finden wir heraus, wo der größte Hebel liegt.",
    minScore: 36,
    maxScore: 65,
  },
  {
    key: "bereit",
    title: "Bereit für den nächsten Schritt",
    description:
      "Die Grundlagen stehen, die Offenheit ist da, die Infrastruktur trägt. Was jetzt zählt, ist der richtige Partner für die Umsetzung.",
    recommendation:
      "Lassen Sie uns kennenlernen und herausfinden, ob wir zueinander passen. Wir zeigen Ihnen, was in kurzer Zeit realistisch umsetzbar ist.",
    minScore: 66,
    maxScore: 100,
  },
];

export const readinessCheck = {
  title: "KI-Readiness-Check",
  subtitle:
    "9 Fragen, 2 Minuten — finden Sie heraus, wie bereit Ihr Unternehmen für KI-Automatisierung ist.",
  leadFormTitle: "Ergebnis sichern und Kontakt aufnehmen",
  leadFormSubtitle:
    "Wir senden Ihnen Ihre Auswertung und melden uns für eine individuelle Beratung.",
  dsgvoLabel:
    "Mit dem Absenden erkläre ich mich einverstanden, dass meine Kontaktdaten sowie meine Angaben und Ergebnisse aus dem KI-Readiness-Check von Ethomatics.AI zur Kontaktaufnahme und individuellen Beratungsvorbereitung verarbeitet werden. Weitere Informationen finde ich in der",
  dsgvoLinkText: "Datenschutzerklärung",
  dsgvoLabelSuffix: ". Die Einwilligung kann ich jederzeit widerrufen.",
  submitLabel: "Ergebnis sichern und Kontakt aufnehmen",
  restartLabel: "Nochmal starten",
  leadSuccessMessage:
    "Vielen Dank!\nWir melden uns in 2–3 Tagen bei Ihnen.",
  leadErrorMessage:
    "Beim Senden ist ein Fehler aufgetreten. Bitte kontaktieren Sie uns direkt unter d.trocha@ethomatics.ai",
};

export const team: TeamMember[] = [
  {
    name: "Dennis Trocha",
    role: "Strategie & Prozesse",
    description: "Gründer Ethomatics.AI, Standort Pleidelsheim",
    credentials: [
      "15+ Jahre Qualitätsmanagement",
      "Automobil & Industrie Standards",
      "ISO 9001 / IATF 16949",
    ],
    image: "/images/dennis-trocha.png",
    email: "d.trocha@ethomatics.ai",
    linkedin: "https://www.linkedin.com/in/dennis-trocha",
  },
  {
    name: "Sascha Schned",
    role: "Systeme & Integration",
    description: "Gründer Ethomatics.AI",
    credentials: [
      "15+ Jahre Produktion & Systemintegration",
      "Automobil & Industrie Standards",
      "ERP | DMS | CRM",
    ],
    image: "/images/sascha-schned.png",
    email: "s.schned@ethomatics.ai",
    linkedin: "https://www.linkedin.com/in/sascha-schned",
  },
];

export const teamSection = {
  title: "Gründerteam aus Baden-Württemberg",
  subtitle:
    "Zwei Gründer, 30+ Jahre Erfahrung aus Automotive und Industrie — jetzt für den Mittelstand.",
};

export const references: Reference[] = [];

export const referencesSection = {
  title: "Referenzen",
  placeholder: "Referenzen folgen in Kürze.",
};

export const contact = {
  title: "Lassen Sie uns herausfinden, wo wir ansetzen können.",
  subtitle:
    "Kein Verkaufsgespräch. Ein Realitätscheck. Es geht nichts über echte Beziehungen. Deshalb melden wir uns selbst und kein KI-Mitarbeiter bei dir.",
  nameLabel: "Name",
  namePlaceholder: "Ihr vollständiger Name",
  emailLabel: "E-Mail",
  emailPlaceholder: "ihre@email.de",
  companyLabel: "Unternehmen (optional)",
  companyPlaceholder: "Firmenname",
  messageLabel: "Nachricht",
  messagePlaceholder: "Wie können wir Ihnen helfen?",
  dsgvoLabel:
    "Ich stimme der Verarbeitung meiner Daten zur Kontaktaufnahme zu.",
  dsgvoLinkText: "Datenschutzhinweise",
  submitLabel: "Nachricht senden",
  successMessage:
    "Vielen Dank für Ihre Nachricht. Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
  errorMessage:
    "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.",
};

export const kontaktPage = {
  title: "Kontakt aufnehmen",
  subtitle:
    "Kein Verkaufsgespräch. Ein Realitätscheck. Es geht nichts über echte Beziehungen.\nDeshalb melden wir uns selbst und kein KI-Mitarbeiter.",
  consentTextLead:
    "Mit dem Absenden erkläre ich mich einverstanden, dass meine Kontaktdaten sowie meine Angaben und Ergebnisse aus dem KI-Readiness-Check von Ethomatics.AI zur Kontaktaufnahme und individuellen Beratungsvorbereitung verarbeitet werden. Weitere Informationen finde ich in der Datenschutzerklärung. Die Einwilligung kann ich jederzeit widerrufen.",
  consentTextLeadPrefix:
    "Mit dem Absenden erkläre ich mich einverstanden, dass meine Kontaktdaten sowie meine Angaben und Ergebnisse aus dem KI-Readiness-Check von Ethomatics.AI zur Kontaktaufnahme und individuellen Beratungsvorbereitung verarbeitet werden. Weitere Informationen finde ich in der",
  consentTextLeadSuffix: ". Die Einwilligung kann ich jederzeit widerrufen.",
  consentTextKontakt:
    "Ich stimme der Verarbeitung meiner Daten zur Kontaktaufnahme zu. Datenschutzhinweise",
  successMessageLead:
    "Vielen Dank!\nWir melden uns in 2–3 Tagen bei Ihnen.",
  successMessageKontakt:
    "Vielen Dank für Ihre Nachricht.\nWir melden uns bei Ihnen.",
  errorMessage:
    "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.",
};

export const footer = {
  description:
    "KI-Automatisierung für den Mittelstand. DSGVO-konform, praxiserprobt, messbar wirksam.",
  copyright: `© ${new Date().getFullYear()} Ethomatics.AI. Alle Rechte vorbehalten.`,
  links: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
  ],
};

export const agb = {
  title: "Allgemeine Geschäftsbedingungen",
  stand: "Stand: 26.03.2026",
  content: `
## § 1 Geltungsbereich

(1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für alle Verträge zwischen Dennis Trocha, Ethomatics.AI, Friedrichstraße 33, 74385 Pleidelsheim (nachfolgend „Auftragnehmer"), und dem Kunden (nachfolgend „Auftraggeber") über die Erbringung von Beratungs- und Dienstleistungen im Bereich KI-Automatisierung und Prozessoptimierung.

(2) Die Leistungen des Auftragnehmers richten sich ausschließlich an Unternehmer im Sinne von § 14 BGB. Mit Vertragsschluss bestätigt der Auftraggeber, in Ausübung seiner gewerblichen oder selbständigen beruflichen Tätigkeit zu handeln.

(3) Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Auftraggebers werden nur dann Vertragsbestandteil, wenn und soweit der Auftragnehmer ihrer Geltung ausdrücklich schriftlich zugestimmt hat.

(4) Maßgeblich ist die jeweils bei Vertragsschluss gültige Fassung dieser AGB.

## § 2 Vertragsgegenstand

(1) Der Auftragnehmer erbringt für den Auftraggeber Dienstleistungen in den Bereichen:

- **KI-Automatisierung und KI-Implementierung**
- **Geschäftsprozessoptimierung**
- **Beratung zu digitaler Transformation und Automatisierung**
- **Konzeption, Einrichtung und Betreuung von KI-gestützten Workflows und Systemen**

Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen Angebot oder der individuellen Vereinbarung.

(2) Soweit nicht ausdrücklich schriftlich abweichend vereinbart, schuldet der Auftragnehmer eine Dienstleistung, nicht die Herstellung eines bestimmten Werks. Ein konkreter wirtschaftlicher Erfolg wird nicht geschuldet.

(3) Der Auftraggeber ist zur Mitwirkung verpflichtet. Insbesondere hat er die für die Leistungserbringung erforderlichen Informationen, Daten und Zugänge rechtzeitig und vollständig bereitzustellen.

(4) Der Auftragnehmer ist berechtigt, zur Leistungserbringung qualifizierte Dritte (Subunternehmer) einzusetzen. Die Verantwortlichkeit des Auftragnehmers gegenüber dem Auftraggeber bleibt davon unberührt.

## § 3 Vertragsschluss

(1) Die Darstellung von Leistungen auf der Webseite des Auftragnehmers, in Broschüren oder sonstigen Werbemitteln stellt kein verbindliches Angebot dar, sondern eine Aufforderung zur Abgabe eines Angebots.

(2) Der Vertrag kommt durch Angebot und Annahme zustande. Die Annahme kann schriftlich, in Textform oder fernmündlich erfolgen. Maßgeblich ist der Zugang der unbedingten Annahmeerklärung.

(3) Der Auftraggeber erhält auf Wunsch eine Auftragsbestätigung in Textform.

## § 4 Preise und Zahlungsbedingungen

(1) Sämtliche Preisangaben des Auftragnehmers verstehen sich als Nettopreise zuzüglich der jeweils geltenden gesetzlichen Umsatzsteuer.

(2) Soweit nicht anders vereinbart, ist die Vergütung innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig.

(3) Die Rechnungsstellung erfolgt nach Maßgabe der im Angebot vereinbarten Modalitäten (z. B. nach Leistungserbringung, nach Meilensteinen oder in monatlichen Abschlägen).

(4) Kommt der Auftraggeber mit der Zahlung in Verzug, ist der Auftragnehmer berechtigt, Verzugszinsen in Höhe von 9 Prozentpunkten über dem jeweiligen Basiszinssatz (§ 288 Abs. 2 BGB) zu verlangen. Die Geltendmachung eines weitergehenden Verzugsschadens bleibt vorbehalten.

(5) Die Aufrechnung mit Gegenansprüchen des Auftraggebers ist nur zulässig, wenn diese unbestritten oder rechtskräftig festgestellt sind. Ein Zurückbehaltungsrecht kann der Auftraggeber nur geltend machen, soweit es auf demselben Vertragsverhältnis beruht.

## § 5 Leistungserbringung und Fristen

(1) Der Auftragnehmer erbringt die vereinbarten Leistungen mit der Sorgfalt eines ordentlichen Kaufmanns.

(2) Leistungstermine und Fristen sind nur dann verbindlich, wenn sie ausdrücklich schriftlich als verbindlich vereinbart wurden.

(3) Ist der Auftragnehmer an der rechtzeitigen Leistungserbringung durch Umstände gehindert, die er nicht zu vertreten hat (höhere Gewalt, Krankheit, behördliche Maßnahmen, Störungen der IT-Infrastruktur Dritter), verlängern sich die vereinbarten Fristen um die Dauer der Behinderung. Der Auftragnehmer wird den Auftraggeber über solche Umstände unverzüglich informieren.

(4) Ist der Auftragnehmer an der Leistungserbringung gehindert und liegen die Hinderungsgründe in der Sphäre des Auftraggebers (z. B. fehlende Mitwirkung, fehlende Daten oder Zugänge), bleibt der Vergütungsanspruch des Auftragnehmers unberührt.

## § 6 Abnahme und Mitwirkungspflichten

(1) Der Auftraggeber hat jede vom Auftragnehmer gelieferte Teilleistung (Beratungsergebnisse, Konzepte, Konfigurationen, Dokumentationen u. Ä.) unverzüglich, spätestens jedoch innerhalb von zehn Werktagen nach Zugang zu prüfen und etwaige Mängel schriftlich und substantiiert zu rügen.

(2) Unterbleibt eine fristgerechte Rüge, gilt die jeweilige Teilleistung als abgenommen. Rechte wegen versteckter Mängel sowie bei Vorsatz oder grober Fahrlässigkeit bleiben unberührt.

(3) Verzögert sich die Leistungserbringung aufgrund fehlender oder verspäteter Mitwirkung des Auftraggebers, hat der Auftragnehmer Anspruch auf angemessene Fristverlängerung und gegebenenfalls auf Ersatz der dadurch entstandenen Mehraufwände.

## § 7 Vertragslaufzeit und Kündigung

(1) Der Vertrag wird für die im jeweiligen Angebot vereinbarte Laufzeit geschlossen.

(2) Bei Verträgen ohne feste Laufzeit kann jede Partei den Vertrag mit einer Frist von vier Wochen zum Monatsende ordentlich kündigen, sofern nicht anders vereinbart.

(3) Das Recht beider Parteien zur fristlosen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund liegt insbesondere vor, wenn:

- **der Auftraggeber mit fälligen Zahlungen trotz Mahnung und angemessener Nachfristsetzung in Verzug gerät,**
- **eine Partei ihre wesentlichen vertraglichen Pflichten trotz schriftlicher Abmahnung wiederholt oder schwerwiegend verletzt,**
- **über das Vermögen einer Partei ein Insolvenzverfahren eröffnet oder die Eröffnung mangels Masse abgelehnt wird.**

(4) Im Fall der Kündigung hat der Auftraggeber die bis zum Wirksamwerden der Kündigung erbrachten Leistungen zu vergüten.

(5) Kündigungen bedürfen der Textform.

## § 8 Einsatz von KI-Tools

(1) Der Auftraggeber erklärt sich ausdrücklich damit einverstanden, dass der Auftragnehmer im Rahmen der Erbringung der vereinbarten Leistungen KI-gestützte Werkzeuge und automatisierte Verfahren (nachfolgend „KI-Tools") einsetzt. Dies umfasst insbesondere:

- **Analyse und Optimierung von Geschäftsprozessen mittels KI**
- **Zusammenfassung und Auswertung von Besprechungen und Dokumenten**
- **Erstellung von Konzepten, Texten und Automatisierungen unter Einsatz von KI-Modellen**
- **Einrichtung und Konfiguration von KI-Agenten und Workflows**

(2) Dem Auftraggeber ist bekannt, dass KI-Tools auf probabilistischen Modellen basieren und die Ergebnisse eine fachliche Prüfung durch den Auftragnehmer und/oder den Auftraggeber erfordern können. Der Auftragnehmer übernimmt keine Gewähr für die sachliche Richtigkeit und Vollständigkeit von KI-generierten Zwischenergebnissen, wohl aber für die Qualität des finalen, von ihm freigegebenen Arbeitsergebnisses.

(3) Soweit im Rahmen des KI-Einsatzes personenbezogene Daten verarbeitet werden, gelten die Regelungen gemäß § 12 dieser AGB sowie ggf. eine gesonderte Vereinbarung zur Auftragsverarbeitung (Art. 28 DSGVO).

(4) Der Auftraggeber ist verpflichtet, Personen aus seinem Verantwortungsbereich, deren personenbezogene Daten im Rahmen der Zusammenarbeit unter Einsatz von KI-Tools verarbeitet werden, vorab in geeigneter Weise hierüber zu informieren.

## § 9 Nutzungsrechte und geistiges Eigentum

(1) Der Auftragnehmer räumt dem Auftraggeber nach vollständiger Bezahlung der vereinbarten Vergütung ein einfaches, zeitlich unbeschränktes Nutzungsrecht an den im Rahmen des Vertrags erstellten Arbeitsergebnissen ein, soweit diese für den vertraglich vereinbarten Zweck bestimmt sind.

(2) Methoden, Frameworks, Tools, Vorlagen und sonstiges Know-how des Auftragnehmers, das vor oder unabhängig vom Vertrag entwickelt wurde, verbleiben im alleinigen Eigentum des Auftragnehmers. Dem Auftraggeber wird insoweit kein Nutzungsrecht eingeräumt, es sei denn, dies ist ausdrücklich schriftlich vereinbart.

(3) Eine Weitergabe von Arbeitsergebnissen an Dritte ist nur mit vorheriger schriftlicher Zustimmung des Auftragnehmers gestattet, es sei denn, die Weitergabe ist für den vertraglich vereinbarten Nutzungszweck erforderlich.

## § 10 Vertraulichkeit

(1) Beide Parteien verpflichten sich, sämtliche im Rahmen der Zusammenarbeit erlangten vertraulichen Informationen der jeweils anderen Partei vertraulich zu behandeln und nur für die Zwecke der Vertragsdurchführung zu verwenden.

(2) Vertrauliche Informationen sind insbesondere Geschäftsgeheimnisse, technische Konzepte, Kundendaten, Strategiepapiere und alle als vertraulich gekennzeichneten Unterlagen.

(3) Die Vertraulichkeitspflicht besteht über die Beendigung des Vertrags hinaus fort und endet erst, wenn die betreffenden Informationen allgemein bekannt geworden sind, ohne dass die empfangende Partei dafür verantwortlich ist.

(4) Die Vertraulichkeitspflicht gilt nicht, soweit eine Partei zur Offenlegung gesetzlich oder behördlich verpflichtet ist.

## § 11 Haftung

(1) Der Auftragnehmer haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer fahrlässigen oder vorsätzlichen Pflichtverletzung des Auftragnehmers oder eines seiner Erfüllungsgehilfen beruhen.

(2) Der Auftragnehmer haftet ferner unbeschränkt für Schäden, die durch Vorsatz oder grobe Fahrlässigkeit des Auftragnehmers oder eines seiner Erfüllungsgehilfen verursacht wurden.

(3) Bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) durch leichte Fahrlässigkeit ist die Haftung der Höhe nach auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden begrenzt. Wesentliche Vertragspflichten sind solche, deren Erfüllung die ordnungsgemäße Durchführung des Vertrages überhaupt erst ermöglicht und auf deren Einhaltung der Auftraggeber regelmäßig vertrauen darf.

(4) Im Übrigen ist die Haftung des Auftragnehmers für Schäden aus leichter Fahrlässigkeit ausgeschlossen.

(5) Die vorstehenden Haftungsbeschränkungen gelten auch zugunsten der Erfüllungsgehilfen des Auftragnehmers.

(6) Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.

(7) Der Auftraggeber hat Schäden unverzüglich schriftlich anzuzeigen, um dem Auftragnehmer die Möglichkeit zur Schadensbegrenzung zu geben.

## § 12 Datenschutz

(1) Der Auftragnehmer verarbeitet personenbezogene Daten des Auftraggebers ausschließlich im Rahmen der geltenden datenschutzrechtlichen Bestimmungen, insbesondere der DSGVO und des BDSG.

(2) Soweit der Auftragnehmer im Rahmen der Leistungserbringung personenbezogene Daten im Auftrag des Auftraggebers verarbeitet, schließen die Parteien eine gesonderte Vereinbarung zur Auftragsverarbeitung gemäß Art. 28 DSGVO ab.

(3) Einzelheiten zur Datenverarbeitung sind in der Datenschutzerklärung des Auftragnehmers unter [Datenschutzerklärung](https://ethomatics.ai/datenschutz) dargestellt.

## § 13 Referenznennung

(1) Der Auftragnehmer ist berechtigt, den Auftraggeber nach Abschluss des Projekts als Referenzkunden zu nennen (Firmenname und Branche), sofern der Auftraggeber dem nicht widerspricht.

(2) Der Widerspruch kann jederzeit formlos erfolgen und wird unverzüglich berücksichtigt.

(3) Darüber hinausgehende Veröffentlichungen (z. B. Case Studies, Testimonials, detaillierte Projektbeschreibungen) bedürfen der vorherigen schriftlichen Zustimmung des Auftraggebers.

## § 14 Schlussbestimmungen

(1) Änderungen und Ergänzungen dieses Vertrages bedürfen der Textform. Dies gilt auch für die Aufhebung dieses Textformerfordernisses.

(2) Es gilt ausschließlich das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).

(3) Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist Ludwigsburg, soweit der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.

(4) Sollte eine Bestimmung dieser AGB ganz oder teilweise unwirksam oder undurchführbar sein oder werden, so wird die Wirksamkeit der übrigen Bestimmungen davon nicht berührt. An die Stelle der unwirksamen oder undurchführbaren Bestimmung tritt diejenige wirksame und durchführbare Regelung, deren Wirkungen der wirtschaftlichen Zielsetzung am nächsten kommen, die die Parteien mit der unwirksamen bzw. undurchführbaren Bestimmung verfolgt haben (salvatorische Klausel).

(5) Die Vertragssprache ist Deutsch.
  `.trim(),
};

export const impressum = {
  title: "Impressum",
  content: `
Ethomatics.AI
Dennis Trocha (Inhaber)

Friedrichstr. 33
74385 Pleidelsheim

## Kontakt

Telefon: +49 (0) 176 244 920 25
E-Mail: d.trocha@ethomatics.ai

## Verantwortlich für redaktionelle Inhalte

Dennis Trocha
Friedrichstr. 33
74385 Pleidelsheim

## Verbraucherstreitbeilegung

Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.

## Haftung für Inhalte

Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Eine Verpflichtung zur Überwachung übermittelter oder gespeicherter fremder Informationen besteht nicht. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben unberührt. Eine Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von Rechtsverletzungen werden wir die betreffenden Inhalte umgehend entfernen.

## Haftung für Links

Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.

## Urheberrecht

Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
  `.trim(),
};

export const datenschutz = {
  title: "Datenschutzhinweise",
  content: `
## 1. Datenschutz auf einen Blick

### Allgemeine Hinweise

Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie den nachfolgenden Datenschutzhinweisen.

### Datenerfassung auf dieser Website

**Wer ist verantwortlich für die Datenerfassung auf dieser Website?**

Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in diesen Datenschutzhinweisen entnehmen.

**Wie erfassen wir Ihre Daten?**

Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.\u00A0B. um Daten handeln, die Sie in ein Kontaktformular oder den KI-Readiness-Check eingeben.

Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.\u00A0B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.

**Wofür nutzen wir Ihre Daten?**

Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten werden zur Bearbeitung Ihrer Anfragen oder zur Auswertung des KI-Readiness-Checks verwendet.

**Welche Rechte haben Sie bezüglich Ihrer Daten?**

Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.

Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.

## 2. Hosting

Wir hosten die Inhalte unserer Website bei folgendem Anbieter:

### Hetzner

Anbieter ist die Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Deutschland (nachfolgend Hetzner).

Wenn Sie unsere Website besuchen, erfasst der Server automatisch Logdateien (sog. Server-Logfiles), die Ihr Browser automatisch übermittelt. Dazu gehören: Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners und Uhrzeit der Serveranfrage.

Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren und effizienten Bereitstellung dieser Website. Die Server-Logfiles werden nach 14 Tagen automatisch gelöscht.

Wir haben mit Hetzner einen Vertrag zur Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO geschlossen, der den Schutz Ihrer Daten gewährleistet. Der Serverstandort befindet sich in Deutschland.

## 3. Allgemeine Hinweise und Pflichtinformationen

### Datenschutz

Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie diesen Datenschutzhinweisen.

Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegenden Datenschutzhinweise erläutern, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutern auch, wie und zu welchem Zweck das geschieht.

Wir weisen darauf hin, dass die Datenübertragung im Internet (z.\u00A0B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.

### Hinweis zur verantwortlichen Stelle

Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:

Ethomatics.AI
Dennis Trocha
Friedrichstr. 33
74385 Pleidelsheim

E-Mail: [d.trocha@ethomatics.ai](mailto:d.trocha@ethomatics.ai)

Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.\u00A0B. Namen, E-Mail-Adressen o.\u00A0Ä.) entscheidet.

### Speicherdauer

Soweit innerhalb dieser Datenschutzhinweise keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z.\u00A0B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.

### Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website

Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind, auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzhinweise informiert.

### Empfänger von personenbezogenen Daten

Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z.\u00A0B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter.

### Widerruf Ihrer Einwilligung zur Datenverarbeitung

Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.

### Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)

**WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DER EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESEN DATENSCHUTZHINWEISEN. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).**

**WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).**

### Beschwerderecht bei der zuständigen Aufsichtsbehörde

Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.

Die für uns zuständige Aufsichtsbehörde ist:

Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg
Lautenschlagerstraße 20
70173 Stuttgart
Telefon: +49 711 6155 41-0
E-Mail: [poststelle@lfdi.bwl.de](mailto:poststelle@lfdi.bwl.de)
Website: [https://www.baden-wuerttemberg.datenschutz.de](https://www.baden-wuerttemberg.datenschutz.de)

### Recht auf Datenübertragbarkeit

Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.

### Auskunft, Berichtigung und Löschung

Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.

### Recht auf Einschränkung der Verarbeitung

Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:

- Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
- Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
- Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
- Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.

Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten - von ihrer Speicherung abgesehen - nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.

### SSL- bzw. TLS-Verschlüsselung

Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.

Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.

### Widerspruch gegen Werbe-E-Mails

Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.

## 4. Datenerfassung auf dieser Website

### Cookies

Diese Website verwendet keine Cookies. Wir setzen weder technisch notwendige noch optionale Cookies oder vergleichbare Wiedererkennungstechnologien (z.\u00A0B. Device-Fingerprinting) ein.

### Server-Logfiles

Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser automatisch an uns übermittelt. Dies sind:

- Browsertyp und Browserversion
- Verwendetes Betriebssystem
- Referrer URL
- Hostname des zugreifenden Rechners
- Uhrzeit der Serveranfrage
- IP-Adresse

Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.

Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website - hierzu müssen die Server-Logfiles erfasst werden.

Die Server-Logfiles werden nach 14 Tagen automatisch gelöscht.

### Kontaktformular

Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.

Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.

Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.\u00A0B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen - insbesondere Aufbewahrungsfristen - bleiben unberührt.

### Anfrage per E-Mail

Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.

Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.

Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.\u00A0B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen - insbesondere gesetzliche Aufbewahrungsfristen - bleiben unberührt.

### KI-Readiness-Check

Auf unserer Webseite bieten wir einen KI-Readiness-Check an. Wenn Sie diesen nutzen, werden Ihre Angaben auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) verarbeitet.

**Verarbeitete Daten:**

- Ihre Antworten im Quiz (Auswahl und Freitextangaben)
- Der errechnete Score und die zugehörige Kategorie
- Zeitstempel der Einwilligung

**Verarbeitung:** Die Daten werden ausschließlich auf unserem eigenen Server (Hetzner Online GmbH, Deutschland) verarbeitet und gespeichert. Eine Übermittlung an Dritte findet nicht statt.

**Speicherdauer:** Ihre Daten werden für die Dauer der Geschäftsanbahnung gespeichert und spätestens 12 Monate nach dem letzten Kontakt gelöscht, sofern keine anderweitige Rechtsgrundlage besteht.

**Widerruf:** Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Senden Sie dazu eine E-Mail an [datenschutz@ethomatics.ai](mailto:datenschutz@ethomatics.ai).

### Calendly

Auf unserer Webseite verlinken wir auf den externen Terminbuchungsdienst Calendly. Anbieter ist die Calendly LLC, 271 17th St NW, 10th Floor, Atlanta, Georgia 30363, USA.

Wenn Sie einen Termin über Calendly buchen, werden Ihre eingegebenen Daten (z.\u00A0B. Name, E-Mail-Adresse, Wunschtermin) auf den Servern von Calendly verarbeitet. Es gelten die Datenschutzbestimmungen von Calendly: [https://calendly.com/privacy](https://calendly.com/privacy).

Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer unkomplizierten Terminvereinbarung mit Interessenten und Kunden. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.

Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: [https://calendly.com/pages/dpa](https://calendly.com/pages/dpa).

## 5. Ihre Rechte im Überblick

Als betroffene Person haben Sie folgende Rechte:

- **Auskunftsrecht (Art. 15 DSGVO):** Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.
- **Recht auf Berichtigung (Art. 16 DSGVO):** Sie können die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.
- **Recht auf Löschung (Art. 17 DSGVO):** Sie können die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen, soweit die Verarbeitung nicht zur Ausübung des Rechts auf freie Meinungsäußerung, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.
- **Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):** Sie können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.
- **Recht auf Datenübertragbarkeit (Art. 20 DSGVO):** Sie können verlangen, dass wir Ihnen Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format übermitteln.
- **Widerspruchsrecht (Art. 21 DSGVO):** Sie können der Verarbeitung Ihrer personenbezogenen Daten jederzeit widersprechen.

Zur Ausübung Ihrer Rechte wenden Sie sich an die oben genannte verantwortliche Stelle oder an [datenschutz@ethomatics.ai](mailto:datenschutz@ethomatics.ai).
  `.trim(),
};
