import Image from "next/image";
import { PackageOpen } from "lucide-react";
import { Container, Eyebrow } from "../ui";
import { Reveal } from "../reveal";

export function Whitelabel() {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-line bg-cream-light">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-0">
            {/* Image */}
            <Reveal className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/whitelabel-pack.jpg"
                  alt="Kemasan dalam (inner pack) Rendang Pangroso tanpa kemasan luar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-contain p-6"
                />
              </div>
            </Reveal>

            {/* Copy */}
            <div className="order-1 px-6 pt-10 lg:order-2 lg:px-12 lg:py-16">
              <Reveal>
                <Eyebrow className="mb-7">Whitelabel? Bisa!</Eyebrow>
                <h2 className="font-serif text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
                  Bisa Jual Pake Merek Sendiri{" "}
                  <span className="text-gold">(Kalau Mau)</span>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <div className="mt-7 flex items-start gap-4 rounded-2xl border border-line bg-paper p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <PackageOpen className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <p className="text-[15px] leading-relaxed text-body">
                    Kami kirim dengan kemasan dalam saja, tanpa kemasan luar.
                    Kemasan luar bisa <strong className="font-semibold text-charcoal">desain sendiri</strong>.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
