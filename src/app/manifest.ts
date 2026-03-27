import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ethomatics.AI — KI-Automatisierung für den Mittelstand",
    short_name: "Ethomatics.AI",
    description:
      "KI-Automatisierung für den Mittelstand. DSGVO-konform, praxiserprobt, messbar wirksam.",
    start_url: "/",
    display: "standalone",
    background_color: "#ECEFF4",
    theme_color: "#2C6B70",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
