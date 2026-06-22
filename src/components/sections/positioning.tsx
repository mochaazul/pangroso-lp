import { Laptop, Briefcase, Package } from "lucide-react";
import { Container, Eyebrow } from "../ui";
import { Reveal } from "../reveal";

const USE_CASES = [
  { icon: Laptop, label: "Simpan di laci" },
  { icon: Briefcase, label: "Bawa ke meeting" },
  { icon: Package, label: "Share ke kolega" },
];

export function Positioning() {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-line bg-cream-light px-6 py-12 sm:px-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow className="mb-7">Positioning</Eyebrow>
                <h2 className="font-serif text-4xl font-bold leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                  Rendang Kantoran<span className="text-gold">.</span>
                </h2>
                <p className="mt-4 font-serif text-2xl italic text-gold sm:text-3xl">
                  Bukan rendang biasa.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-body">
                  Didesain khusus untuk pekerja kantoran Jabodetabek. Compact,
                  re-sealable, siap santap 2 menit. Simpan di laci, bawa ke meeting,
                  share ke kolega — tanpa ribet.
                </p>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <ul className="grid grid-cols-3 gap-3 sm:gap-4">
                {USE_CASES.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-paper px-3 py-6 text-center"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </span>
                    <span className="text-xs font-semibold leading-tight text-charcoal">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
