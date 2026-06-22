import Image from "next/image";
import { ArrowRight, BadgeCheck, Star } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import { Button, Container } from "../ui";
import { Reveal } from "../reveal";

const CHIPS = ["Premium", "Ready-to-eat", "Slow-cooked", "Authentic"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      {/* soft warm glow backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-[42rem] w-[42rem] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(197,164,104,0.28), rgba(244,238,227,0) 70%)",
        }}
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Copy */}
        <div className="max-w-xl">
          <Reveal>
            <span className="eyebrow">Mitra Reseller 2026</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-serif text-5xl font-bold leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Rendang <span className="text-maroon">Pangroso</span>
              <span className="sr-only"> — Rendang Sapi Premium Siap Saji</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-body">
              Rendang sapi premium, dimasak lambat 8 jam, siap saji dalam 2 menit.
              Sekarang dibuka — peluang jadi <strong className="font-semibold text-ink">Mitra Reseller</strong> tanpa modal besar.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {CHIPS.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-line-strong bg-cream-light/70 px-4 py-1.5 text-sm font-medium text-charcoal"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={WHATSAPP_URL} external>
                Gabung Jadi Mitra
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#keunggulan" variant="outline">
                Lihat Keunggulan
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Image */}
        <Reveal delay={160} className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-line shadow-[0_40px_80px_-32px_rgba(33,28,23,0.55)]">
            <Image
              src="/images/hero-hands.jpg"
              alt="Kemasan Rendang Pangroso dipegang di atas latar kayu dan rempah"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 460px"
              className="object-cover"
            />
          </div>

          {/* floating badges */}
          <div className="absolute left-3 top-5 flex items-center gap-1.5 rounded-full border border-line bg-paper/90 px-3.5 py-2 shadow-lg backdrop-blur-sm sm:-left-4">
            <BadgeCheck className="h-4 w-4 text-maroon" />
            <span className="text-xs font-bold text-charcoal">Halal MUI</span>
          </div>
          <div className="absolute bottom-5 right-3 flex items-center gap-1.5 rounded-full border border-line bg-paper/90 px-3.5 py-2 shadow-lg backdrop-blur-sm sm:-right-4">
            <Star className="h-4 w-4 fill-gold text-gold" />
            <span className="text-xs font-bold text-charcoal">5.0 di Shopee</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
