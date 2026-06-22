/**
 * Central content & config for the Rendang Pangroso landing page.
 * Edit copy, prices, and contact details here — everything else reads from this.
 */

export const CONTACT = {
  whatsappDisplay: "0821-9777-2864",
  // International format for wa.me links (62 + number without leading 0)
  whatsappIntl: "6282197772864",
  instagram: "rendangpangroso",
  instagramUrl: "https://instagram.com/rendangpangroso",
  linktree: "linktr.ee/rendangpangroso",
  linktreeUrl: "https://linktr.ee/rendangpangroso",
};

const WA_MESSAGE = encodeURIComponent(
  "Halo Pangroso, saya tertarik jadi Mitra Reseller. Boleh info lebih lanjut?",
);

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsappIntl}?text=${WA_MESSAGE}`;

export const SITE = {
  name: "Rendang Pangroso",
  tagline: "Mitra Reseller 2026",
  description:
    "Rendang Pangroso — rendang sapi premium siap saji, dimasak lambat 8 jam, halal MUI & PIRT resmi. Gabung jadi Mitra Reseller: tanpa MOQ, margin enak, mulai dari 1 pack. Cocok untuk pekerja kantoran & keluarga sibuk di Jabodetabek.",
  // Set NEXT_PUBLIC_SITE_URL in Vercel to your real domain (used for OG tags, canonical, sitemap).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rendangpangroso.com",
};

// Used by JSON-LD structured data (helps Google understand the business & product).
export const BUSINESS = {
  productName: "Rendang Pangroso — Rendang Sapi Premium Siap Saji",
  category: "Makanan Halal / Rendang Sapi Siap Saji",
  areaServed: "Jabodetabek, Indonesia",
};

// Aggregate rating for Product structured data (the star snippet in Google results).
// Set `count` to your REAL Shopee review count to switch it on. Leave it null until
// you have a genuine number — fake review data can get a site penalized by Google.
export const RATING: { value: string; count: number | null } = {
  value: "5.0",
  count: null,
};

export const NAV_LINKS = [
  { label: "Kenapa Pangroso", href: "#keunggulan" },
  { label: "Harga & Komisi", href: "#harga" },
  { label: "Potensi", href: "#potensi" },
  { label: "Legalitas", href: "#legalitas" },
];

export const PRICING = {
  rows: [
    { pack: "1 Pack Isi 2 Pcs", size: "100 gr", customer: "Rp 46.000", reseller: "Rp 41.400" },
    { pack: "1 Pack Isi 5 Pcs", size: "250 gr", customer: "Rp 115.100", reseller: "Rp 103.600" },
  ],
  bundles: ["Rp 89.900", "Rp 159.900", "Rp 339.900"],
};

export const INCOME_TIERS = [
  {
    key: "santai",
    label: "Santai",
    volume: "10",
    unit: "pack/bulan",
    income: "~230k",
    note: "Cocok buat side-income",
  },
  {
    key: "aktif",
    label: "Aktif",
    volume: "30",
    unit: "pack/minggu",
    income: "~2.760k",
    note: "Sweet spot",
    featured: true,
  },
  {
    key: "serius",
    label: "Serius",
    volume: "100",
    unit: "pack/minggu",
    income: "~9.200k",
    note: "Full hustle",
  },
];

export const CERTS = [
  { title: "Sertifikasi Halal MUI", code: "ID32110022625970525" },
  { title: "PIRT Resmi", code: "PIRT 8013276011897-30" },
  { title: "Sertifikat Uji Lab", code: "SIG.LHP.III.2025.28162313" },
];
