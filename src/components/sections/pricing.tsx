import { Wallet, TrendingUp } from "lucide-react";
import { PRICING } from "@/lib/site";
import { Container, Eyebrow } from "../ui";
import { Reveal } from "../reveal";

export function Pricing() {
  return (
    <section id="harga" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <Eyebrow className="mb-7">Harga & Komisi</Eyebrow>
          <h2 className="max-w-2xl font-serif text-4xl font-bold leading-[1.06] tracking-tight text-ink sm:text-5xl">
            Premium price, easy margin.
          </h2>
        </Reveal>

        {/* Price table */}
        <Reveal delay={120}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-cream-light">
            {/* header */}
            <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-line">
              <div className="p-4 sm:p-5" />
              <div className="p-4 text-center text-xs font-bold uppercase tracking-wider text-muted sm:p-5">
                Customer
              </div>
              <div className="bg-maroon/5 p-4 text-center text-xs font-bold uppercase tracking-wider text-maroon sm:p-5">
                Reseller
              </div>
            </div>
            {/* rows */}
            {PRICING.rows.map((row, i) => (
              <div
                key={row.pack}
                className={`grid grid-cols-[1.4fr_1fr_1fr] items-center ${
                  i > 0 ? "border-t border-line" : ""
                }`}
              >
                <div className="p-4 sm:p-5">
                  <p className="text-sm font-bold text-charcoal sm:text-base">{row.pack}</p>
                  <p className="text-xs text-muted">{row.size}</p>
                </div>
                <div className="p-4 text-center text-base font-semibold text-body sm:p-5 sm:text-lg">
                  {row.customer}
                </div>
                <div className="h-full bg-maroon/5 p-4 text-center text-base font-bold text-maroon sm:p-5 sm:text-lg">
                  {row.reseller}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Commission callout */}
        <Reveal delay={180}>
          <div className="mt-5 flex items-start gap-4 rounded-2xl border border-gold/40 bg-gold/[0.08] p-5 sm:items-center sm:p-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
              <Wallet className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <p className="text-[15px] leading-relaxed text-charcoal sm:text-base">
              Komisi <strong className="font-bold text-maroon">10%</strong> per pack —
              kalau aktif <strong className="font-bold text-charcoal">&gt;30 pcs/bulan</strong>,
              total bisa <strong className="font-bold text-maroon">20%</strong>.
            </p>
          </div>
        </Reveal>

        {/* Bundling */}
        <Reveal delay={220}>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-body">
            <TrendingUp className="h-4 w-4 text-gold" />
            <span className="font-semibold text-charcoal">Tersedia juga Paket Bundling —</span>
            {PRICING.bundles.map((b, i) => (
              <span key={b} className="font-semibold text-charcoal">
                {b}
                {i < PRICING.bundles.length - 1 && (
                  <span className="ml-3 text-muted">/</span>
                )}
              </span>
            ))}
            <span className="text-muted">(untuk customer)</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
