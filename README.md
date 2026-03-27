# Ethomatics.AI — Homepage

Offizielle Website von Ethomatics.AI. Next.js Applikation mit Tailwind CSS, KI-Readiness-Check und Kontaktformular.

## Lokales Setup

```bash
# Dependencies installieren
npm install

# Umgebungsvariablen konfigurieren
cp .env.example .env.local
# .env.local mit echten Werten befüllen

# Dev-Server starten
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000).

## Umgebungsvariablen

| Variable | Beschreibung |
|----------|-------------|
| `NEXT_PUBLIC_CALENDLY_URL` | Calendly-Buchungslink für "Erstgespräch buchen" |
| `NEXT_PUBLIC_N8N_WEBHOOK_URL` | n8n Webhook für KI-Readiness-Check Ergebnisse |
| `NEXT_PUBLIC_N8N_CONTACT_WEBHOOK_URL` | n8n Webhook für Kontaktformular |

## Texte anpassen

Alle Texte, Labels und Beschreibungen befinden sich zentral in:

```
src/config/site.ts
```

Hier lassen sich Headlines, Leistungsbeschreibungen, Readiness-Check-Fragen, Team-Infos und rechtliche Texte direkt editieren.

## Platzhalter

Folgende Platzhalter im Code müssen noch ersetzt werden:

- `[CALENDLY-URL]` — Calendly-Link (in `.env.local`)
- `[N8N-WEBHOOK-URL-READINESS]` — n8n Webhook KI-Check (in `.env.local`)
- `[N8N-WEBHOOK-URL-KONTAKT]` — n8n Webhook Kontakt (in `.env.local`)
- `[FOTO-DENNIS]` — Profilfoto unter `public/images/dennis-trocha.jpg`
- `[FOTO-SASCHA]` — Profilfoto unter `public/images/sascha-schned.jpg`
- `[FIRMENNAME]`, `[ADRESSE]`, `[HANDELSREGISTER]`, `[UST-ID]` — In `src/config/site.ts` (Impressum/Datenschutz)

## Fotos ersetzen

1. Fotos als JPG unter `public/images/dennis-trocha.jpg` und `public/images/sascha-schned.jpg` ablegen
2. In `src/components/sections/Team.tsx` die `.svg`-Endung entfernen (Zeile mit `member.image.replace(...)`)

## Deployment (Coolify / Docker)

```bash
# Docker Image bauen
docker build -t ethomatics .

# Mit docker-compose starten
docker compose up -d
```

In Coolify: Repository verbinden, Dockerfile-Modus auswählen, Umgebungsvariablen setzen.

## Tech Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS
- Zod (Formular-Validierung)
- Docker (Standalone Build)
