import { FloatingNav } from "@/components/sections/FloatingNav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { Portfolio } from "@/components/sections/Portfolio";
import { Press } from "@/components/sections/Press";
import { HowIThink } from "@/components/sections/HowIThink";
import { AcademyPreview } from "@/components/sections/AcademyPreview";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent/30">
      <FloatingNav />
      <Hero />
      <About />
      <Timeline />
      <WhatIBuild />
      <Portfolio />
      <Press />
      <HowIThink />
      <AcademyPreview />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
