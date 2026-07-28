import Hero from "../components/Hero";
import LogoStrip from "../components/LogoStrip";
import PlatformSection from "../components/PlatformSection";
import WorkflowSection from "../components/WorkflowSection";
import IntelligenceSection from "../components/IntelligenceSection";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <PlatformSection />
      <WorkflowSection />
      <IntelligenceSection />
      <CTASection />
    </>
  );
}