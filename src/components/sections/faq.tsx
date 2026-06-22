import { Plus } from "lucide-react";
import { FAQ } from "@/lib/site";
import { Container, Eyebrow } from "../ui";
import { Reveal } from "../reveal";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-28">
      <Container className="max-w-3xl">
        <Reveal>
          <Eyebrow align="center" className="mb-7">
            FAQ
          </Eyebrow>
          <h2 className="text-center font-serif text-4xl font-bold leading-[1.06] tracking-tight text-ink sm:text-5xl">
            Pertanyaan yang sering ditanya
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-3">
          {FAQ.map((item, i) => (
            <Reveal key={item.q} delay={i * 60}>
              <details className="group rounded-2xl border border-line bg-cream-light px-5 py-1 transition-colors open:border-gold/40 sm:px-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-bold text-charcoal marker:hidden sm:text-lg">
                  {item.q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-gold transition-transform duration-300 group-open:rotate-45">
                    <Plus className="h-4 w-4" strokeWidth={2} />
                  </span>
                </summary>
                <p className="pb-5 pr-10 text-[15px] leading-relaxed text-body">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
