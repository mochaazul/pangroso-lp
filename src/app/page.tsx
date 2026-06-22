import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingCta } from "@/components/floating-cta";
import { StructuredData } from "@/components/structured-data";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Positioning } from "@/components/sections/positioning";
import { Features } from "@/components/sections/features";
import { Legality } from "@/components/sections/legality";
import { Pricing } from "@/components/sections/pricing";
import { NoMoq } from "@/components/sections/no-moq";
import { Income } from "@/components/sections/income";
import { SocialProof } from "@/components/sections/social-proof";
import { Whitelabel } from "@/components/sections/whitelabel";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <StructuredData />
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Positioning />
        <Features />
        <Pricing />
        <NoMoq />
        <Income />
        <Legality />
        <SocialProof />
        <Whitelabel />
        <FinalCta />
      </main>
      <SiteFooter />
      <FloatingCta />
    </>
  );
}
