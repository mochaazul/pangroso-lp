import { Container } from "../ui";
import { Reveal } from "../reveal";

export function NoMoq() {
  return (
    <section className="bg-ink py-20 text-paper sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-gold-soft">
              Keunggulan Utama
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-7xl font-black uppercase leading-[0.92] tracking-tight text-paper sm:text-8xl lg:text-9xl">
              No MOQ<span className="text-gold-soft">.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-2xl font-bold uppercase tracking-wide text-cream-dark sm:text-3xl">
              Mulai dari 1 pack
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream-dark/85">
              Tidak perlu stok besar. Tidak perlu modal jutaan. Tidak perlu khawatir
              produk tidak laku. Order sesuai pesanan customer Anda — kami yang masak
              fresh.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 rounded-2xl border-l-4 border-gold-soft bg-white/[0.04] px-6 py-5">
              <p className="font-serif text-2xl font-bold leading-snug text-paper sm:text-3xl">
                Zero capital risk.
                <br className="hidden sm:block" /> Mulai jualan tanpa beban.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
