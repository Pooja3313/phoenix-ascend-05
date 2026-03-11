import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import { ArrowRight, Shield, Compass, Users, Wrench, TrendingUp, Send, Phone, Mail } from "lucide-react";
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

const features = [
  { icon: Shield, title: "Keeping the Day-to-Day Simple", description: "We handle all the compliance and regulatory operations, so you can focus on growing your business as an independent financial adviser." },
  { icon: Compass, title: "Guidance, Without Pressure", description: "Guidance is always optional, not imposed. You stay in control of every decision you make, with experienced support available whenever you need it." },
  { icon: Users, title: "A Network You Can Trust", description: "A network shaped by people who understand the challenges faced by financial advisers. Support comes from advisers experienced in financial planning." },
  { icon: Wrench, title: "Resources to Grow, Your Way", description: "Growth looks different for every adviser; our role is to empower you with the right resources and tools, helping you build a strong career." },
];

const careerPath = [
  "Start as a Self-Employed Adviser",
  "Build your client base with our support",
  "Grow into a Senior Adviser role",
  "Lead and mentor new advisers",
  "Expand into your own advisory firm",
];

const NetworkSelfEmployedAdviser = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-br from-phoenix-gray-light via-background to-phoenix-green-light overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08),transparent_60%)]" />
          <div className="absolute bottom-20 left-20 text-primary/5 text-[180px] font-bold animate-pound-rotate select-none pointer-events-none">£</div>
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <AnimatedSection>
              <p className="text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-4">Self Employed Adviser</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Self Employed <span className="font-handwritten text-5xl md:text-6xl text-primary pen-underline">Adviser</span> Opportunities
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                For individuals who prefer <span className="font-handwritten text-xl text-primary highlighter-mark">independence</span> but also value the importance of a functional framework.
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
                  A Network Built to <span className="font-handwritten text-3xl text-primary highlighter-mark">Support</span>, Not Control
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Building your career should feel purposeful, not constrained. With Phoenix Finserv, you join a network where your independence is respected, ambitions are supported, and the structure is in place to help you build a strong career in financial services as a self-employed adviser.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gradient-to-br from-phoenix-gray-light/50 via-background to-phoenix-green-light/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.1}>
                  <div className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-500 h-full">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <item.icon size={26} className="text-primary group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Career Path */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                A Career That <span className="font-handwritten text-4xl md:text-5xl text-primary pen-underline">Grows</span> With You
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                At Phoenix Finserv, you are supported in building a career that's aligned with your aspirations and values.
              </p>
            </AnimatedSection>
            <div className="max-w-2xl mx-auto">
              {careerPath.map((step, i) => (
                <AnimatedSection key={step} delay={i * 0.1}>
                  <div className="flex items-center gap-4 mb-4 group">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0 group-hover:scale-110 group-hover:bg-accent transition-all duration-300">
                      {i + 1}
                    </div>
                    <div className="flex-1 bg-card border border-border rounded-xl px-6 py-4 group-hover:border-primary/30 group-hover:shadow-lg transition-all duration-300">
                      <p className="text-foreground font-medium text-sm">{step}</p>
                    </div>
                    {i < careerPath.length - 1 && (
                      <TrendingUp size={16} className="text-primary shrink-0" />
                    )}
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
                <h2 className="text-3xl font-bold mb-4">Become a Financial Adviser with <span className="font-handwritten text-4xl">Phoenix Finserv</span></h2>
                <p className="text-primary-foreground/80 mb-6">Step into the role of financial adviser and enjoy the independence of running your business your way, supported by a framework that gives you access to regulatory expertise and powerful tools.</p>
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
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Do you have experience in financial services?</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="experience" value="yes" className="accent-primary" /> <span className="text-sm">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="experience" value="no" className="accent-primary" /> <span className="text-sm">No</span>
                        </label>
                      </div>
                    </div>
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

export default NetworkSelfEmployedAdviser;
