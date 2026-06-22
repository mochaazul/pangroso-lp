# Rendang Pangroso — Landing Page

Landing page **Mitra Reseller 2026** untuk Rendang Pangroso, dibangun dari pitch deck
(11 halaman) menjadi satu halaman scroll yang responsif. Siap di-deploy ke Vercel.

Built with **Next.js 16** (App Router) · **TypeScript** · **Tailwind CSS v4** · **lucide-react**.

---

## Quick start (local)

```bash
npm install
npm run dev      # http://localhost:3000
```

Build produksi:

```bash
npm run build
npm run start
```

---

## Struktur

```
src/
├── app/
│   ├── layout.tsx        # Fonts, SEO metadata, OG tags, Facebook verification meta tag
│   ├── page.tsx          # Menyusun semua section
│   ├── globals.css       # Design tokens (warna cream/maroon/gold) + fonts
│   ├── icon.png          # Favicon (monogram R)
│   ├── sitemap.ts        # /sitemap.xml
│   └── robots.ts         # /robots.txt
├── components/
│   ├── site-header.tsx   # Nav sticky + menu mobile
│   ├── site-footer.tsx
│   ├── floating-cta.tsx  # Tombol WhatsApp mengambang
│   ├── ui.tsx            # Container, Eyebrow, Button
│   ├── reveal.tsx        # Animasi fade-up saat scroll
│   └── sections/         # hero, about, positioning, features, pricing,
│                         #   no-moq, income, legality, social-proof,
│                         #   whitelabel, final-cta
└── lib/
    └── site.ts           # ⭐ SEMUA konten: kontak, harga, komisi, tier income, sertifikat
public/
├── images/               # Foto produk + logo (diekstrak dari PDF)
└── og.jpg                # Gambar Open Graph (preview share 1200×630)
```

### Mau ganti teks / harga / kontak?
Edit **`src/lib/site.ts`** — nomor WhatsApp, Instagram, Linktree, tabel harga,
komisi, tier penghasilan, dan nomor sertifikat semuanya ada di sana.

---

## Facebook domain verification ✅

Kode verifikasi kamu **sudah terpasang**. Cek di `src/app/layout.tsx`:

```ts
const FB_DOMAIN_VERIFICATION =
  process.env.FB_DOMAIN_VERIFICATION ?? "u92f8fjp3j7n51udl83gsqsi5pxvz5";
```

Tag yang dirender di `<head>` setiap halaman:

```html
<meta name="facebook-domain-verification" content="u92f8fjp3j7n51udl83gsqsi5pxvz5" />
```

Setelah deploy, buka **Meta Business Suite → Settings → Brand safety → Domains**,
pilih domain kamu, lalu klik **Verify**. (Mau ganti kode? Ubah langsung di file di atas,
atau set env var `FB_DOMAIN_VERIFICATION` di Vercel.)

---

## Deploy ke Vercel

### Cara 1 — lewat dashboard (paling mudah)
1. Push project ini ke GitHub/GitLab/Bitbucket.
2. Buka [vercel.com/new](https://vercel.com/new) → **Import** repo-nya.
3. Vercel otomatis mendeteksi Next.js — klik **Deploy**. Selesai.

### Cara 2 — lewat CLI
```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

### Environment variables (opsional)
Set di **Vercel → Project → Settings → Environment Variables** (lihat `.env.example`):

| Variable | Fungsi |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Domain asli kamu — dipakai untuk OG tag, canonical, & sitemap. Mis. `https://rendangpangroso.com` |
| `FB_DOMAIN_VERIFICATION` | Override kode verifikasi Facebook (opsional, sudah ada default di code). |

> Setelah punya domain final, set `NEXT_PUBLIC_SITE_URL` agar link preview (WhatsApp/Facebook)
> dan sitemap memakai URL yang benar.

---

## Catatan aset
Semua foto produk & logo diekstrak langsung dari PDF pitch deck dan dioptimasi untuk web.
Logo `RENDANG PANGROSO` sudah dibersihkan jadi transparan (PNG).
