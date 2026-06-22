import { Beef, Flame, Package, Zap } from "lucide-react";
import { Container, Eyebrow } from "../ui";
import { Reveal } from "../reveal";

const FEATURES = [
  {
    icon: Beef,
    title: "Daging Sapi Premium",
    desc: "Lean cuts pilihan, rendah lemak, empuk di setiap suapan.",
  },
  {
    icon: Flame,
    title: "Slow-Cooked 8 Jam",
    desc: "Tradisi Padang, bumbu meresap sampai serat daging.",
  },
  {
    icon: Package,
    title: "Pouch Ziplock Compact",
    desc: "Re-sealable, food-grade, mudah disimpan.",
  },
  {
    icon: Zap,
    title: "Ready 2 Menit",
    desc: "Kukus, microwave, atau teflon — langsung santap.",
  },
];

export function Features() {
  return (
    <section id="keunggulan" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <Eyebrow className="mb-7">Kenapa Pangroso</Eyebrow>
          <h2 className="max-w-2xl font-serif text-4xl font-bold leading-[1.06] tracking-tight text-ink sm:text-5xl">
            Premium dari setiap detailnya.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="group flex h-full items-start gap-5 rounded-2xl border border-line bg-cream-light p-6 transition-colors duration-300 hover:border-gold/50 sm:p-7">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line bg-paper text-maroon transition-colors duration-300 group-hover:bg-maroon group-hover:text-paper">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wide text-charcoal">
                    {title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-body">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
