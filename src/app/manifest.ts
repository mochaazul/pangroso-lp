import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — Rendang Sapi Premium Siap Saji`,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f4eee3",
    theme_color: "#f4eee3",
    lang: "id",
    icons: [
      { src: "/images/monogram.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/images/monogram.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
