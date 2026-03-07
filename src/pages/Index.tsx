import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import PoundAnimation from "@/components/PoundAnimation";
import WhyChooseUs from "@/components/WhyChooseUs";
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
        <ValuesSection />
        <ServicesSection />
        <PoundAnimation />
        <TestimonialSection />
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
