import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import { FileText, Scale, Shield, Users, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const offerings = [
  {
    icon: FileText,
    title: "Will Writing",
    description: "Ensure your assets are distributed according to your wishes with a professionally drafted will that reflects your intentions. A well-prepared will gives you control over your legacy.",
  },
  {
    icon: Shield,
    title: "Trust Planning",
    description: "Safeguard your wealth and secure your family's future with expert trust planning services tailored to your specific needs, financial goals and personal circumstances.",
  },
  {
    icon: Scale,
    title: "Inheritance Tax Planning",
    description: "Reduce potential inheritance tax liabilities through strategic planning, helping your loved ones retain more of your estate. Proper planning can make a significant difference.",
  },
  {
    icon: Users,
    title: "Lasting Power of Attorney",
    description: "Appoint trusted individuals to make decisions on your behalf with lasting power of attorney arrangements tailored to your preferences, covering both health and financial matters.",
  },
];

const WillsEstatePlanning = () => {
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

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 via-phoenix-green-light/30 to-background overflow-hidden">
          <div className="absolute top-10 right-10 text-primary/[0.04] text-[200px] font-bold animate-pound-rotate select-none pointer-events-none">£</div>
          <div className="container mx-auto px-4 relative z-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Wills & Estate <span className="font-handwritten text-5xl md:text-6xl lg:text-7xl text-primary highlighter-mark">Planning</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Shape a legacy that lasts with expert guidance in wills and estate planning, ensuring your assets and intentions are honoured with precision.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 mt-8 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Book a Free Consultation <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Choose Phoenix Finserv for <span className="font-handwritten text-4xl md:text-5xl text-primary pen-underline">Wills & Estate Planning?</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  While no one wants to think about a time when they might not be around, it needs to be considered for the sake of your loved ones. Without having wills or trusts or some kind of estate planning in place, your assets might not be distributed in the way you wish.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Despite this fact, figures show more than 60% of people in the UK don't have a current will — something that puts their beneficiaries at risk. Failing to set up a trust or will and testament can have a major impact on your loved ones, so it's prudent to have a plan. Legal and tax rules may change. Advice should be tailored to your individual circumstances to ensure suitability and compliance.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center">
                  <FileText size={80} className="text-primary/30" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Offerings */}
        <section className="py-20 bg-gradient-to-br from-phoenix-gray-light/50 via-background to-phoenix-green-light/30" ref={ref}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">Estate Planning</span> Services
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                From drafting wills to inheritance planning and trust management, our estate planning services are designed to help protect your legacy and provide peace of mind for your loved ones.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {offerings.map((item, index) => (
                <div
                  key={item.title}
                  className={`group relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-xl overflow-hidden cursor-pointer hover:border-primary/30 ${
                    visible ? 'animate-float-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <item.icon size={26} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-phoenix-orange-dark text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking to Plan your Will & Estate?</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
              Whether you're considering setting up a trust, arranging a lasting power of attorney or using our will writing service, our estate planning team is here to help. We take the time to understand your personal circumstances and provide tailored guidance.
            </p>
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

export default WillsEstatePlanning;
