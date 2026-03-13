import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import { ShieldCheck, Users, Home, Briefcase, FileCheck, Heart, Shield, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const offerings = [
  {
    icon: Shield,
    title: "Keyman Cover",
    description: "It protects against risks, enhancing company stability amidst critical staff changes. Keyman cover ensures your business can weather the storm if a key individual is unable to work.",
  },
  {
    icon: Users,
    title: "Shareholder Protection",
    description: "Ensures business continuity and financial security in unforeseen events. Shareholder protection provides the means to buy out a deceased or critically ill partner's shares.",
  },
  {
    icon: Briefcase,
    title: "Relevant Life Cover",
    description: "Tax-efficient life insurance for company directors and employees. A cost-effective way for businesses to provide death-in-service benefits outside of a registered group life scheme.",
  },
  {
    icon: FileCheck,
    title: "Business Loan Protection",
    description: "Provides financial protection against losses, ensuring business loans are covered if a key individual passes away or becomes critically ill.",
  },
  {
    icon: Heart,
    title: "Life Cover",
    description: "Protect your family's financial future with comprehensive life insurance that pays out a lump sum or regular income upon death, providing essential support when it matters most.",
  },
  {
    icon: ShieldCheck,
    title: "Critical Illness Cover",
    description: "Receive a tax-free lump sum if you're diagnosed with a specified critical illness, helping you focus on recovery without worrying about finances.",
  },
  {
    icon: Home,
    title: "Income Protection",
    description: "Replace a portion of your income if you're unable to work due to illness or injury, ensuring your financial commitments are met during difficult times.",
  },
];

const Protection = () => {
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
              Protection <span className="font-handwritten text-5xl md:text-6xl lg:text-7xl text-primary highlighter-mark">Planning</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Safeguard your tomorrow with protection plans designed to provide peace of mind, security and strength through life's uncertainties.
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
                  Why Choose Phoenix Finserv for your <span className="font-handwritten text-4xl md:text-5xl text-primary pen-underline">Protection Plan?</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At Phoenix Finserv, we specialise in helping people understand the financial risks they face and protect themselves and their families from the financial impacts of illness, injury and death. We also help our customers buy and protect their homes and business premises and to manage their accumulated wealth.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Illness or injury can occur at any time and the problems that follow can be as unexpected as the illness or the injury itself. We will help you work out what measures you can put in place to protect yourself and the people who rely on you most from the financial consequences that might follow. Having the right cover in place offers great peace of mind in an uncertain world.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center">
                  <ShieldCheck size={80} className="text-primary/30" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Heart size={32} className="text-accent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 bg-gradient-to-br from-phoenix-gray-light/50 via-background to-phoenix-green-light/30" ref={ref}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Comprehensive <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">Protection</span> Solutions
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Protection planning is about creating a financial safety net that ensures you, your family, or your business are supported in the face of life's uncertainties.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {offerings.map((item, index) => (
                <div
                  key={item.title}
                  className={`group relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-xl overflow-hidden cursor-pointer hover:border-primary/30 ${
                    visible ? 'animate-float-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking for a Protection Plan?</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
              Our advisers are experienced in financing and have access to a wide range of protection planning options. Contact us today to discuss your protection requirements and secure the ideal solution.
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

export default Protection;
