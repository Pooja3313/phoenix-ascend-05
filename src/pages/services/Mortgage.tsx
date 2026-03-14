import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import { Home, Building, Key, RefreshCw, ArrowRight, Calculator, TrendingUp, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { mortgageServices } from "@/data/mortgageData";

const iconMap: Record<string, React.ElementType> = {
  "buy-to-let-mortgage": Key,
  "first-time-buyer-mortgage": Home,
  "residential-mortgage": Building,
  "remortgage": RefreshCw,
};

const Mortgage = () => {
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
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-accent/10 via-phoenix-green-light/30 to-background overflow-hidden">
          <div className="absolute top-10 right-10 text-accent/[0.04] text-[200px] font-bold animate-pound-rotate select-none pointer-events-none">£</div>
          <div className="container mx-auto px-4 relative z-10">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="font-handwritten text-5xl md:text-6xl lg:text-7xl text-primary highlighter-mark">Mortgage</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Shape a future of stability and comfort with trusted mortgage guidance designed to turn aspirations into lasting reality.
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
                  Why Choose Phoenix Finserv for your <span className="font-handwritten text-4xl md:text-5xl text-primary pen-underline">Mortgage?</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With so many options available, finding the right mortgage can feel overwhelming. At Phoenix Finserv, we provide clear and tailored mortgage advice to help you understand your choices and make informed decisions.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our advisers come from diverse backgrounds and are well-placed to support clients from a range of communities, including those with overseas ties. We take the time to explain the process, highlight potential risks, and guide you through each stage.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We focus on building long-term relationships with our clients and work hard to recommend mortgage products that are suitable for your individual needs and circumstances.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-dashed border-border flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <Home size={40} className="text-accent/40" />
                  </div>
                  <p className="text-muted-foreground/50 text-sm">Image Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mortgage Calculator */}
        <section className="py-16 bg-gradient-to-br from-phoenix-gray-light/40 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Find Your Best <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">Mortgage Deal</span> in Seconds
              </h2>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                Our intelligent tools do the hard work for you — analysing real-time data from trusted lenders to reveal tailored deals that match your goals.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <NavLink to="/services/mortgage/calculator" className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:border-primary/30 group block">
                <Calculator size={40} className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-2">Mortgage Calculator</h3>
                <p className="text-muted-foreground text-sm">Calculate your monthly repayments, compare rates, and find the deal that's right for you.</p>
                <div className="flex items-center justify-center gap-1 mt-4 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Try Now <ChevronRight size={16} />
                </div>
              </NavLink>
              <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:border-accent/30 group">
                <TrendingUp size={40} className="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-2">Rates & Repayments</h3>
                <p className="text-muted-foreground text-sm">Compare mortgage deals and find out what your interest rate and monthly repayments could be.</p>
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
                Our <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">Mortgage</span> Services
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {mortgageServices.map((item, index) => {
                const Icon = iconMap[item.slug] || Home;
                return (
                  <NavLink
                    key={item.slug}
                    to={`/services/mortgage/${item.slug}`}
                    className={`group relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-xl overflow-hidden hover:border-accent/30 block ${
                      visible ? 'animate-float-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.12}s` }}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon size={26} className="text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{item.heroDescription}</p>
                    <div className="flex items-center gap-1 mt-4 text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More <ChevronRight size={16} />
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-accent to-phoenix-green text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking for a Mortgage?</h2>
            <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
              Our advisers are experienced in financing and have access to a wide range of mortgage options. Contact us today to discuss your mortgage requirements and secure the ideal financing solution.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-background text-accent font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
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

export default Mortgage;
