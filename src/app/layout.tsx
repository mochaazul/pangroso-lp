import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

/**
 * Facebook domain verification.
 * 1. Go to Meta Business Suite → Settings → Brand safety → Domains.
 * 2. Add your domain, choose the "Meta-tag" method, copy the code.
 * 3. Paste it below (or set FB_DOMAIN_VERIFICATION in your Vercel env vars).
 * The tag renders as:  <meta name="facebook-domain-verification" content="..." />
 */
const FB_DOMAIN_VERIFICATION =
  process.env.FB_DOMAIN_VERIFICATION ?? "u92f8fjp3j7n51udl83gsqsi5pxvz5";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Rendang Sapi Premium Siap Saji | Mitra Reseller`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "rendang",
    "rendang sapi",
    "rendang siap saji",
    "reseller rendang",
    "mitra pangroso",
    "rendang premium",
    "rendang padang",
    "frozen food",
  ],
  authors: [{ name: SITE.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Rendang Sapi Premium Siap Saji`,
    description: SITE.description,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Rendang Pangroso — Rendang Sapi Premium Siap Saji",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Rendang Sapi Premium Siap Saji`,
    description: SITE.description,
    images: ["/og.jpg"],
  },
  other: {
    "facebook-domain-verification": FB_DOMAIN_VERIFICATION,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
