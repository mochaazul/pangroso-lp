import { ShieldCheck, Stamp, FlaskConical } from "lucide-react";
import { CERTS } from "@/lib/site";
import { Container, Eyebrow } from "../ui";
import { Reveal } from "../reveal";

const ICONS = [ShieldCheck, Stamp, FlaskConical];

export function Legality() {
  return (
    <section id="legalitas" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <Eyebrow className="mb-7">Legalitas Resmi</Eyebrow>
          <h2 className="max-w-2xl font-serif text-4xl font-bold leading-[1.06] tracking-tight text-ink sm:text-5xl">
            Tenang, semua sudah lengkap.
          </h2>
          <p className="mt-5 text-lg text-body">
            Pangroso bisa dijual dengan rasa percaya diri penuh.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {CERTS.map((cert, i) => {
            const Icon = ICONS[i] ?? ShieldCheck;
            return (
              <Reveal key={cert.title} delay={i * 100}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-line bg-cream-light p-8 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-line bg-paper text-gold">
                    <Icon className="h-7 w-7" strokeWidth={1.4} />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-charcoal">{cert.title}</h3>
                  <p className="mt-2 font-mono text-xs tracking-wide text-muted">{cert.code}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 text-center text-sm font-medium tracking-wide text-muted">
            Produk teruji, terdaftar, dan halal terjamin.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
