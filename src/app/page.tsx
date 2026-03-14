import { Hero } from "@/components/sections/Hero";
import { NowSection } from "@/components/sections/NowSection";
import { About } from "@/components/sections/About";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { Portfolio } from "@/components/sections/Portfolio";
import { HowIThink } from "@/components/sections/HowIThink";
import { AcademyPreview } from "@/components/sections/AcademyPreview";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent/30">
      <Hero />
      <NowSection />
      <About />
      <WhatIBuild />
      <Portfolio />
      <HowIThink />
      <AcademyPreview />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
