import { Star, Quote } from "lucide-react";
import { Container, Eyebrow } from "../ui";
import { Reveal } from "../reveal";

const STATS = [
  { value: "5.0", label: "Rating Shopee", stars: true },
  { value: "70%", label: "Repeat Order Rate" },
  { value: "1+", label: "Mitra Aktif (Kota Casablanca)" },
];

export function SocialProof() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <Eyebrow className="mb-7">Social Proof</Eyebrow>
          <h2 className="max-w-2xl font-serif text-4xl font-bold leading-[1.06] tracking-tight text-ink sm:text-5xl">
            Rendang Terenak Se-Indonesia
          </h2>
        </Reveal>

        {/* Stats */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="flex h-full flex-col items-center justify-center bg-cream-light px-6 py-8 text-center">
                <p className="font-serif text-5xl font-bold text-ink">{stat.value}</p>
                {stat.stars && (
                  <div className="mt-2 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                )}
                <p className="mt-3 text-sm font-medium text-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Testimonial */}
        <Reveal delay={140}>
          <figure className="mt-6 rounded-2xl border border-line bg-cream-light p-8 sm:p-12">
            <Quote className="h-10 w-10 fill-gold/20 text-gold" />
            <blockquote className="mt-5 font-serif text-2xl italic leading-relaxed text-charcoal sm:text-3xl">
              “Kolega di kantor saya kecanduan rendang Pangroso. Order mingguan jadi
              rutinitas.”
            </blockquote>
            <figcaption className="mt-6 text-sm font-semibold text-muted">
              — Reseller Pangroso, Prudential Kota Casablanca
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
