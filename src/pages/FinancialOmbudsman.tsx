import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import { AlertCircle, MapPin, Phone, Mail, Globe, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

const FinancialOmbudsman = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-phoenix-gray-light via-background to-phoenix-green-light overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.08),transparent_60%)]" />
          <div className="absolute top-10 right-20 text-primary/5 text-[120px] font-bold animate-pound-rotate select-none pointer-events-none">£</div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <AnimatedSection>
              <p className="text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-4">Your Rights</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Financial <span className="font-handwritten text-5xl md:text-6xl text-primary pen-underline">Ombudsman</span> Service
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Independent dispute resolution for financial services complaints
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl space-y-10">
            <AnimatedSection>
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow duration-500">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  If we have not issued our final response letter within <span className="font-semibold text-primary highlighter-mark">8 weeks</span> of receipt of the complaint or, if you are dissatisfied with our final response, you have the right to refer your complaint to the Financial Ombudsman Service, free of charge but you must do so within <span className="font-semibold text-primary">six months</span> of the date of our final response letter.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow duration-500">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="text-primary shrink-0 mt-1" size={22} />
                  <h3 className="text-xl font-bold text-foreground">Important <span className="font-handwritten text-2xl text-primary">Notice</span></h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  If you do not refer your complaint in time, the Ombudsman will not have our permission to consider your complaint and so will only be able to do so in very limited circumstances. For example, if the Ombudsman believes that the delay was as a result of exceptional circumstances.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow duration-500">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Financial Ombudsman <span className="font-handwritten text-3xl text-primary highlighter-mark">Service</span> :
                </h3>
                <p className="text-muted-foreground mb-6">The Ombudsman can be contacted at:</p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { icon: MapPin, label: "Postal Address", value: "The Financial Ombudsman Service, Exchange Tower, London E14 9SR" },
                    { icon: Phone, label: "Telephone", value: "08000234567 or 03001239123" },
                    { icon: Globe, label: "Website", value: "www.financial-ombudsman.org.uk", href: "https://www.financial-ombudsman.org.uk" },
                    { icon: Mail, label: "Email", value: "complaint.info@financial-ombudsman.org.uk", href: "mailto:complaint.info@financial-ombudsman.org.uk" },
                  ].map((item, i) => (
                    <div key={item.label} className="group flex items-start gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 icon-hover-bounce">
                        <item.icon size={20} className="text-primary group-hover:text-accent-foreground transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium text-sm">{item.value}</a>
                        ) : (
                          <p className="text-foreground font-medium text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-phoenix-gold/5 border border-border rounded-2xl p-8">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Be assured that we treat all complaints very seriously and we will conduct a <span className="font-semibold text-primary highlighter-mark">full review</span> and conclude all matters to the mutual satisfaction of the parties as quickly as possible maintaining appropriate records at all times.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
      <StickyGetInTouch />
    </div>
  );
};

export default FinancialOmbudsman;
