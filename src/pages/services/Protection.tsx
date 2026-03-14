import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import { ShieldCheck, Users, Home, Briefcase, FileCheck, Heart, Shield, ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { personalProtectionServices, businessProtectionServices, homeInsuranceServices } from "@/data/protectionData";

const tabs = [
  { name: "Personal Protection", services: personalProtectionServices, color: "primary" },
  { name: "Business Protection", services: businessProtectionServices, color: "accent" },
  { name: "Home Insurance", services: homeInsuranceServices, color: "primary" },
];

const iconMap: Record<string, React.ElementType> = {
  "life-cover": Heart,
  "critical-illness": ShieldCheck,
  "income-protection": Shield,
  "keyman-cover": Briefcase,
  "shareholder-protection": Users,
  "relevant-life-cover": FileCheck,
  "business-loan-protection": Briefcase,
  "buildings-and-contents": Home,
};

const Protection = () => {
  const [activeTab, setActiveTab] = useState(0);
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
          <div className="absolute bottom-10 left-10 w-4 h-4 rounded-full bg-accent/20 animate-bounce" style={{ animationDelay: '0.5s' }} />
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
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-dashed border-border flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <ShieldCheck size={40} className="text-primary/40" />
                  </div>
                  <p className="text-muted-foreground/50 text-sm">Image Coming Soon</p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Heart size={32} className="text-accent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer - Tabbed */}
        <section className="py-20 bg-gradient-to-br from-phoenix-gray-light/50 via-background to-phoenix-green-light/30" ref={ref}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Comprehensive <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">Protection</span> Solutions
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Protection planning is about creating a financial safety net that ensures you, your family, or your business are supported in the face of life's uncertainties.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {tabs.map((tab, i) => (
                <button
                  key={tab.name}
                  onClick={() => { setActiveTab(i); setVisible(true); }}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === i
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'bg-card border border-border text-foreground hover:border-primary/30 hover:text-primary'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto" key={activeTab}>
              {tabs[activeTab].services.map((item, index) => {
                const Icon = iconMap[item.slug] || Shield;
                return (
                  <NavLink
                    key={item.slug}
                    to={`/services/protection/${item.slug}`}
                    className={`group relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-xl overflow-hidden hover:border-primary/30 block ${
                      visible ? 'animate-float-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon size={26} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{item.heroDescription}</p>
                    <div className="flex items-center gap-1 mt-4 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More <ChevronRight size={16} />
                    </div>
                  </NavLink>
                );
              })}
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
