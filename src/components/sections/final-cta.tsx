import Image from "next/image";
import { ArrowRight, MessageCircle, Globe, AtSign } from "lucide-react";
import { CONTACT, WHATSAPP_URL } from "@/lib/site";
import { Reveal } from "../reveal";

const CONTACTS = [
  { icon: MessageCircle, label: `WA: ${CONTACT.whatsappDisplay}`, href: WHATSAPP_URL },
  { icon: Globe, label: CONTACT.linktree, href: CONTACT.linktreeUrl },
  { icon: AtSign, label: `@${CONTACT.instagram}`, href: CONTACT.instagramUrl },
];

export function FinalCta() {
  return (
    <section id="daftar" className="scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-maroon-dark text-paper">
        <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:p-16">
          {/* Copy */}
          <div>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-gold-soft">
                Gabung Sekarang
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 font-serif text-4xl font-bold leading-[1.04] tracking-tight text-paper sm:text-5xl lg:text-6xl">
                Siap jadi Mitra Pangroso?
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 text-lg text-cream-dark/85">Daftar gratis, mulai hari ini.</p>
            </Reveal>

            <Reveal delay={220}>
              <ul className="mt-8 space-y-1">
                {CONTACTS.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 rounded-lg py-2 text-cream-dark transition-colors hover:text-paper"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-gold-soft transition-colors group-hover:bg-white/15">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <span className="text-[15px] font-medium">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={300}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-paper px-8 py-4 text-sm font-bold uppercase tracking-wider text-maroon shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Daftar Sekarang
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          {/* Image */}
          <Reveal delay={160}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src="/images/product-spices.jpg"
                alt="Kemasan Rendang Pangroso di antara rempah-rempah"
                fill
                sizes="(max-width: 1024px) 80vw, 400px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
