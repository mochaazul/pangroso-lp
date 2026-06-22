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
  // ⚠️ Replace with a real inbox you monitor — used on the Privacy Policy / Data
  // Deletion pages and is the contact Facebook may verify during app review.
  email: "halo@rendangpangroso.com",
};

// "Last updated" date shown on the legal pages (Privacy, Terms, Data Deletion).
export const LEGAL_UPDATED = "22 Juni 2026";

const WA_MESSAGE = encodeURIComponent(
  "Halo Pangroso, saya tertarik jadi Mitra Reseller. Boleh info lebih lanjut?",
);

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsappIntl}?text=${WA_MESSAGE}`;

export const SITE = {
  name: "Rendang Pangroso",
  tagline: "Mitra Reseller 2026",
  description:
    "Rendang Pangroso — rendang sapi premium siap saji, dimasak lambat 8 jam, halal MUI & PIRT resmi. Gabung jadi Mitra Reseller: tanpa MOQ, margin enak, mulai dari 1 pack. Cocok untuk pekerja kantoran & keluarga sibuk di Jabodetabek.",
  // Canonical domain (www is primary; the bare domain 308-redirects to it).
  // Override via NEXT_PUBLIC_SITE_URL in Vercel if the domain ever changes.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rendangpangroso.com",
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
  { label: "FAQ", href: "#faq" },
];

// FAQ — feeds both the on-page accordion and the FAQPage JSON-LD (rich results).
// Keep questions/answers natural & accurate; edit freely.
export const FAQ = [
  {
    q: "Apa itu Rendang Pangroso?",
    a: "Rendang Pangroso adalah rendang sapi premium siap saji, dimasak lambat 8 jam dengan resep Padang. Tinggal panaskan sekitar 2 menit dan langsung bisa disantap — praktis untuk pekerja kantoran dan keluarga sibuk.",
  },
  {
    q: "Apakah Rendang Pangroso halal dan aman?",
    a: "Ya. Rendang Pangroso sudah bersertifikat Halal MUI, terdaftar PIRT resmi, dan lulus uji lab — jadi produk teruji, terdaftar, dan halal terjamin.",
  },
  {
    q: "Bagaimana cara menyajikan rendang siap saji ini?",
    a: "Cukup panaskan sekitar 2 menit. Bisa dikukus, dipanaskan di microwave, atau pakai teflon — setelah itu langsung siap disantap.",
  },
  {
    q: "Bagaimana cara menyimpan kemasannya?",
    a: "Rendang Pangroso dikemas dalam pouch ziplock food-grade yang re-sealable dan compact, sehingga praktis disimpan. Ikuti petunjuk penyimpanan pada kemasan untuk daya tahan terbaik.",
  },
  {
    q: "Bagaimana cara jadi reseller atau Mitra Pangroso?",
    a: "Daftar gratis lewat WhatsApp 0821-9777-2864. Tidak ada MOQ, bisa mulai dari 1 pack, dengan komisi 10% per pack — bisa sampai 20% kalau aktif lebih dari 30 pcs/bulan.",
  },
  {
    q: "Apakah ada minimum order (MOQ)?",
    a: "Tidak ada MOQ. Anda bisa mulai dari 1 pack tanpa modal besar dan tanpa perlu menyimpan stok — order sesuai pesanan customer, kami yang masak fresh.",
  },
  {
    q: "Apakah bisa dijual pakai merek sendiri (whitelabel)?",
    a: "Bisa. Kami kirim dalam kemasan dalam saja tanpa kemasan luar, jadi Anda bebas mendesain kemasan luar dengan merek sendiri.",
  },
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
