import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import { Building2, Landmark, Briefcase, Truck, Home, HardHat, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const offerings = [
  {
    icon: Landmark,
    title: "Bridging Loans",
    description: "Explore bridging loans with Phoenix Finserv for quick access to capital for property purchases, renovations or investments. Short-term financing to bridge the gap between transactions.",
  },
  {
    icon: Building2,
    title: "Commercial Mortgage",
    description: "Unlock growth opportunities with commercial mortgages. Access financing for business premises, whether owner-occupied or investment properties, with competitive rates and flexible terms.",
  },
  {
    icon: Briefcase,
    title: "Business Finance",
    description: "Secure tailored business loans for your needs, ideal for growth and expansion. Unlock capital for your business today with flexible repayment options suited to your cash flow.",
  },
  {
    icon: Truck,
    title: "Asset Finance",
    description: "Access asset finance solutions for your business needs, from equipment purchases to vehicle leasing. Drive your business forward with ease and preserve your working capital.",
  },
  {
    icon: Home,
    title: "Buy to Let Finance",
    description: "Discover buy-to-let finance options for property investments. Secure financing tailored to your unique rental property goals and portfolio expansion plans.",
  },
  {
    icon: HardHat,
    title: "Property Development Finance",
    description: "Explore property development finance options tailored to your projects. Secure funding for your development plans effortlessly, from ground-up builds to conversions.",
  },
];

const CommercialLending = () => {
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
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 via-phoenix-gray-light/40 to-background overflow-hidden">
          <div className="absolute top-10 right-10 text-primary/[0.04] text-[200px] font-bold animate-pound-rotate select-none pointer-events-none">£</div>
          <div className="container mx-auto px-4 relative z-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Commercial <span className="font-handwritten text-5xl md:text-6xl lg:text-7xl text-primary highlighter-mark">Lending</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Drive your business forward with strategic lending designed to unlock opportunities, strengthen growth and build financial resilience.
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
                  Why Choose Phoenix Finserv for <span className="font-handwritten text-4xl md:text-5xl text-primary pen-underline">Commercial Lending?</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Commercial financing can be used for the full spectrum of needs, empowering businesses to get ahead in a competitive marketplace. Our team of financial advisers helps clients obtain the funding they require for an array of reasons:
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {["Expansion into new locations or markets", "Acquiring new machinery and upgrading equipment", "Managing cash flow during seasonal fluctuations", "Renovating or expanding existing premises", "Covering unexpected emergency expenses", "Bridging and auction purchases", "Property purchase — both owner occupied and investments", "Property development finance"].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <ArrowRight size={14} className="text-primary mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center">
                  <Building2 size={80} className="text-primary/30" />
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
                Our <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">Commercial</span> Solutions
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Commercial financing is suitable for a wide range of individuals and organisations, whether SMEs, property developers, non-profit organisations or large corporations.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking for Commercial Lending Solutions?</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
              Our brokers are experienced in financing and have access to a wide range of options. Contact us today to discuss your requirements and secure the ideal financing solution.
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

export default CommercialLending;
