import { Container, Eyebrow } from "../ui";
import { Reveal } from "../reveal";

const TRAITS = ["Hangat", "Otentik", "Bisa Diandalkan"];

export function About() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <Eyebrow className="mb-7">Hi, Kami Pangroso 👋</Eyebrow>
          <h2 className="font-serif text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            Rendang siap saji untuk hidup yang sibuk.
          </h2>
        </Reveal>

        <div className="flex flex-col justify-end">
          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-body">
              Kami tim yang passionate membawa kuliner Indonesia asli ke konsumen
              modern. Fokus di kualitas, kemudahan, dan rasa — dibuat untuk para
              profesional, mahasiswa, dan keluarga sibuk di Jabodetabek.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <ul className="mt-8 flex flex-wrap gap-3">
              {TRAITS.map((trait) => (
                <li
                  key={trait}
                  className="rounded-full border border-line-strong px-5 py-2 text-sm font-semibold text-charcoal"
                >
                  {trait}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
