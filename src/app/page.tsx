import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { AcademyPreview } from "@/components/sections/AcademyPreview";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent/30">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <AcademyPreview />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
