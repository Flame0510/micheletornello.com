import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Stack } from "@/components/sections/Stack";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { AcademyPreview } from "@/components/sections/AcademyPreview";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent/30">
      <Navbar />
      <Hero />
      <Metrics />
      <About />
      <Stack />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <AcademyPreview />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
