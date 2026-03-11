import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import { ArrowRight, Award, PoundSterling, Users, Search, Settings, Zap, Send, Phone, Mail } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`${visible ? 'animate-float-up' : 'opacity-0'} ${className}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
};

const benefits = [
  { icon: Zap, title: "Seamless Process", description: "Simple, transparent referral workflow that fits around your business." },
  { icon: Award, title: "Professional Recognition", description: "Partnership with a trusted FCA-regulated firm ensures professionalism and credibility." },
  { icon: PoundSterling, title: "Additional Income Stream", description: "Earn competitive referral fees for every successful introduction." },
  { icon: Users, title: "Network Expansion", description: "Gain access to professionals, advisers, and expand your existing network." },
];

const steps = [
  { num: "01", title: "Identify a Client with Need", description: "Spot clients who may benefit from financial advice and refer them to Phoenix Finserv." },
  { num: "02", title: "We Manage the Process", description: "We manage the whole process from providing regulated advice to handling communication and after-sales compliance." },
  { num: "03", title: "Earn a Referral Fee", description: "Receive your referral fee for every successful introduction, creating additional income without extra workload." },
];

const NetworkIntroducer = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-br from-phoenix-gray-light via-background to-phoenix-green-light overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08),transparent_60%)]" />
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-accent/5 animate-pound-morph pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <AnimatedSection>
              <p className="text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-4">Introducer</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                <span className="font-handwritten text-5xl md:text-6xl text-primary pen-underline">Introducer</span> Opportunities with Phoenix Finserv
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Become an introducer and enjoy a structured referral partnership that allows you to add <span className="font-handwritten text-xl text-primary highlighter-mark">value</span> for your clients and generate additional income.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* About */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <AnimatedSection>
              <div className="bg-card border border-border rounded-2xl p-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Partnership Built Around <span className="font-handwritten text-3xl text-primary highlighter-mark">Your Business</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you are a professional — such as an accountant, Independent Financial Adviser (IFA), mortgage adviser, solicitor or estate agent — Phoenix Finserv has an opportunity for you to become an introducer for financial services. You identify clients who could benefit from financial advice, and we manage the process from start to finish, providing value to your client and generating additional income for you on every successful referral.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-br from-phoenix-gray-light/50 via-background to-phoenix-green-light/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {benefits.map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.1}>
                  <div className="group bg-card border border-border rounded-2xl p-6 text-center hover:shadow-xl hover:border-primary/30 transition-all duration-500 h-full">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <item.icon size={28} className="text-primary group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-14">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Simple & Transparent</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                How the Partnership <span className="font-handwritten text-4xl md:text-5xl text-primary pen-underline">Works</span>
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step, i) => (
                <AnimatedSection key={step.num} delay={i * 0.15}>
                  <div className="group relative bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl hover:border-primary/30 transition-all duration-500 h-full">
                    <span className="font-handwritten text-6xl text-primary/10 absolute top-4 right-4 group-hover:text-primary/30 transition-colors">{step.num}</span>
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary via-primary to-phoenix-orange-dark text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
              <AnimatedSection>
                <h2 className="text-3xl font-bold mb-4">Start an Introducer <span className="font-handwritten text-4xl">Partnership</span></h2>
                <p className="text-primary-foreground/80 mb-6">If you feel a referral partnership could support your business and your clients, we'd be happy to talk.</p>
                <div className="space-y-4">
                  <a href="mailto:accountants@phoenix-accountancy.co.uk" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    <Mail size={18} /> accountants@phoenix-accountancy.co.uk
                  </a>
                  <a href="tel:+442079932737" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    <Phone size={18} /> +44 (0) 2079 932 737
                  </a>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="bg-card text-foreground rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-xl font-bold mb-4">Join Now</h3>
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you! We will contact you soon."); }}>
                    <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-border rounded-xl bg-background focus:border-primary outline-none transition-colors" required />
                    <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-border rounded-xl bg-background focus:border-primary outline-none transition-colors" required />
                    <input type="tel" placeholder="Contact Number" className="w-full px-4 py-3 border border-border rounded-xl bg-background focus:border-primary outline-none transition-colors" required />
                    <button type="submit" className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <Send size={18} /> Submit
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyGetInTouch />
    </div>
  );
};

export default NetworkIntroducer;
