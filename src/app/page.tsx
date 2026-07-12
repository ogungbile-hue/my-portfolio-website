import { HeroSection } from "@/components/sections/HeroSection";
import { Ticker } from "@/components/ui/Ticker";
import { StorySection } from "@/components/sections/StorySection";
import { StackSection } from "@/components/sections/StackSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Ticker />
      <StorySection />
      <StackSection />
      <WorkSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
