import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LEGAL_UPDATED, SITE } from "@/lib/site";

const LEGAL_LINKS = [
  { href: "/privacy", label: "Kebijakan Privasi" },
  { href: "/terms", label: "Ketentuan Layanan" },
  { href: "/data-deletion", label: "Penghapusan Data" },
];

export function LegalShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      {/* Slim header */}
      <header className="border-b border-line bg-cream/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Rendang Pangroso">
            <Image
              src="/images/monogram.png"
              alt=""
              width={36}
              height={36}
              className="h-8 w-8 object-contain"
            />
            <span className="font-serif text-base font-bold leading-none tracking-tight text-ink">
              Rendang <span className="text-maroon">Pangroso</span>
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-body transition-colors hover:text-maroon"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Kembali ke beranda</span>
            <span className="sm:hidden">Beranda</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-12 sm:px-8 sm:py-16">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted">Terakhir diperbarui: {LEGAL_UPDATED}</p>
        {intro && <p className="mt-6 text-lg leading-relaxed text-body">{intro}</p>}
        <div className="legal mt-4">{children}</div>
      </main>

      {/* Footer */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-3xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 {SITE.name}. Semua hak dilindungi.</p>
          <nav className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/" className="transition-colors hover:text-maroon">
              Beranda
            </Link>
            {LEGAL_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-maroon">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
