import Image from "next/image";
import { MessageCircle, Globe, AtSign } from "lucide-react";
import { CONTACT, NAV_LINKS, WHATSAPP_URL } from "@/lib/site";
import { Container } from "./ui";

const SOCIALS = [
  { icon: MessageCircle, href: WHATSAPP_URL, label: "WhatsApp" },
  { icon: AtSign, href: CONTACT.instagramUrl, label: "Instagram" },
  { icon: Globe, href: CONTACT.linktreeUrl, label: "Linktree" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-cream-dark/60">
      <Container className="py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <Image
              src="/images/logo.png"
              alt="Rendang Pangroso"
              width={150}
              height={142}
              className="h-20 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed text-body">
              Rendang sapi premium siap saji. Otentik, halal, dan praktis untuk hidup
              yang sibuk.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-wider text-muted">Navigasi</p>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-body transition-colors hover:text-maroon"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-wider text-muted">Hubungi Kami</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-body transition-colors hover:text-maroon">
              WA: {CONTACT.whatsappDisplay}
            </a>
            <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-body transition-colors hover:text-maroon">
              @{CONTACT.instagram}
            </a>
            <a href={CONTACT.linktreeUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-body transition-colors hover:text-maroon">
              {CONTACT.linktree}
            </a>
            <div className="mt-2 flex gap-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-paper text-maroon transition-colors hover:bg-maroon hover:text-paper"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Rendang Pangroso. Semua hak dilindungi.</p>
          <p>Halal MUI · PIRT Resmi · Uji Lab Tersertifikasi</p>
        </div>
      </Container>
    </footer>
  );
}
