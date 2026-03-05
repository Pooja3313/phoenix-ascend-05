import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValuesSection from "@/components/ValuesSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import PoundAnimation from "@/components/PoundAnimation";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WelcomePopup from "@/components/WelcomePopup";
import StickyGetInTouch from "@/components/StickyGetInTouch";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ValuesSection />
        <ServicesSection />
        <PoundAnimation />
        <TestimonialSection />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
      <WelcomePopup />
      <StickyGetInTouch />
    </div>
  );
};

export default Index;
