import { Coffee, Briefcase, Rocket, Check } from "lucide-react";
import { INCOME_TIERS } from "@/lib/site";
import { Container, Eyebrow } from "../ui";
import { Reveal } from "../reveal";

const ICONS: Record<string, typeof Coffee> = {
  santai: Coffee,
  aktif: Briefcase,
  serius: Rocket,
};

export function Income() {
  return (
    <section id="potensi" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <Eyebrow className="mb-7">Potensi Penghasilan</Eyebrow>
          <h2 className="max-w-2xl font-serif text-4xl font-bold leading-[1.06] tracking-tight text-ink sm:text-5xl">
            Berapa yang bisa Anda hasilkan?
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {INCOME_TIERS.map((tier, i) => {
            const Icon = ICONS[tier.key] ?? Coffee;
            const featured = "featured" in tier && tier.featured;
            return (
              <Reveal key={tier.key} delay={i * 100}>
                <div
                  className={`relative flex h-full flex-col items-center rounded-2xl border p-8 text-center transition-transform duration-300 ${
                    featured
                      ? "border-maroon/30 bg-maroon text-paper shadow-[0_30px_60px_-30px_rgba(110,42,42,0.7)] md:-translate-y-3"
                      : "border-line bg-cream-light"
                  }`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink">
                      Paling Populer
                    </span>
                  )}
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      featured ? "bg-white/10 text-gold-soft" : "border border-line bg-paper text-gold"
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <p
                    className={`mt-5 text-xs font-bold uppercase tracking-[0.22em] ${
                      featured ? "text-gold-soft" : "text-gold"
                    }`}
                  >
                    {tier.label}
                  </p>
                  <p
                    className={`mt-4 font-serif text-6xl font-bold leading-none ${
                      featured ? "text-paper" : "text-ink"
                    }`}
                  >
                    {tier.volume}
                  </p>
                  <p className={`mt-2 text-sm ${featured ? "text-cream-dark/80" : "text-muted"}`}>
                    {tier.unit}
                  </p>

                  <div
                    className={`my-6 h-px w-full ${featured ? "bg-white/15" : "bg-line"}`}
                  />

                  <p
                    className={`text-xs font-medium uppercase tracking-wider ${
                      featured ? "text-cream-dark/70" : "text-muted"
                    }`}
                  >
                    Penghasilan
                  </p>
                  <p
                    className={`mt-1 text-2xl font-bold ${featured ? "text-paper" : "text-charcoal"}`}
                  >
                    Rp {tier.income}
                    <span className="text-base font-medium">/bulan</span>
                  </p>

                  <div
                    className={`mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold ${
                      featured ? "bg-white/10 text-paper" : "bg-cream-dark text-charcoal"
                    }`}
                  >
                    <Check className="h-3.5 w-3.5 text-gold-soft" strokeWidth={2.5} />
                    {tier.note}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-center text-xs text-muted">
            *Estimasi ilustratif berdasarkan margin reseller. Hasil aktual dapat bervariasi.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
