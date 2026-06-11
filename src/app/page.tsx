import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MetricsSection } from "@/components/sections/metrics-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { TimelineSection } from "@/components/sections/timeline-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MetricsSection />
      <TechStackSection />
      <ProjectsSection />
      <TimelineSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
