import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ServiceItem } from "@/data/protectionData";

interface ServiceDetailPageProps {
  service: ServiceItem;
}

const ServiceDetailPage = ({ service }: ServiceDetailPageProps) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Reset scroll on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service.slug]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 via-phoenix-green-light/30 to-background overflow-hidden">
          <div className="absolute top-10 right-10 text-primary/[0.04] text-[200px] font-bold animate-pound-rotate select-none pointer-events-none">£</div>
          {/* Floating accent dots */}
          <div className="absolute top-20 left-[10%] w-3 h-3 rounded-full bg-accent/20 animate-bounce" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-20 right-[20%] w-4 h-4 rounded-full bg-primary/15 animate-bounce" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-[5%] w-2 h-2 rounded-full bg-phoenix-gold/30 animate-bounce" style={{ animationDelay: '1.5s' }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
              {service.heroSubtitle}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="font-handwritten text-5xl md:text-6xl lg:text-7xl text-primary highlighter-mark">{service.title}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {service.heroDescription}
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 mt-8 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Get Your Free Quote <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  <span className="font-handwritten text-4xl md:text-5xl text-primary pen-underline">{service.whyTitle}</span>
                </h2>
                {service.whyContent.map((para, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-4">{para}</p>
                ))}
              </div>
              <div className="relative">
                {/* Decorative image placeholder with brand styling */}
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-dashed border-border flex flex-col items-center justify-center gap-4 overflow-hidden group">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Shield size={40} className="text-primary/40" />
                  </div>
                  <p className="text-muted-foreground/50 text-sm font-medium">Image Coming Soon</p>
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary/20 rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-accent/20 rounded-br-2xl" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-accent text-accent-foreground rounded-xl text-sm font-bold shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                  Expert Advice
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features / What We Offer */}
        <section className="py-20 bg-gradient-to-br from-phoenix-gray-light/50 via-background to-phoenix-green-light/30" ref={ref}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">{service.title}</span> Solutions
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {service.features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`group relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-xl overflow-hidden cursor-pointer hover:border-primary/30 ${
                    visible ? 'animate-float-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  {/* Number badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {index + 1}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <CheckCircle size={24} className="text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-phoenix-orange-dark text-primary-foreground relative overflow-hidden">
          {/* Background floating £ */}
          <div className="absolute top-1/2 left-10 -translate-y-1/2 text-primary-foreground/5 text-[120px] font-bold">£</div>
          <div className="absolute top-1/2 right-10 -translate-y-1/2 text-primary-foreground/5 text-[80px] font-bold">£</div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.ctaTitle}</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">{service.ctaDescription}</p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-background text-primary font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Speak to our Advisers <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <StickyGetInTouch />
    </div>
  );
};

export default ServiceDetailPage;
