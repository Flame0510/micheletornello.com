import { IntroSection } from "@/components/v11/IntroSection";
import { TaglineSection } from "@/components/v11/TaglineSection";
import { ChiSonoSection } from "@/components/v11/ChiSonoSection";
import { PortfolioSection } from "@/components/v11/PortfolioSection";
import { PressSection } from "@/components/v11/PressSection";
import { TimelineSection } from "@/components/v11/TimelineSection";
import { ContactSection } from "@/components/v11/ContactSection";

export default function Home() {
  return (
    <main className="bg-[#0D0D0D]">
      <IntroSection />
      <TaglineSection />
      <ChiSonoSection />
      <PortfolioSection />
      <PressSection />
      <TimelineSection />
      <ContactSection />
    </main>
  );
}
