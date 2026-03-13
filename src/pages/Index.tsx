import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MissionVision from "@/components/MissionVision";
import ValuesSection from "@/components/ValuesSection";
import ServicesSection from "@/components/ServicesSection";
import StatsCounter from "@/components/StatsCounter";
import PoundAnimation from "@/components/PoundAnimation";
import TestimonialSection from "@/components/TestimonialSection";
import DedicatedTeam from "@/components/DedicatedTeam";
import WhyChooseUs from "@/components/WhyChooseUs";
import LogoSlider from "@/components/LogoSlider";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import DiscountPopup from "@/components/DiscountPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionVision />
        <ValuesSection />
        <ServicesSection />
        <StatsCounter />
        <PoundAnimation />
        <TestimonialSection />
        <DedicatedTeam />
        <LogoSlider />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
      <DiscountPopup />
      <StickyGetInTouch />
    </div>
  );
};

export default Index;
