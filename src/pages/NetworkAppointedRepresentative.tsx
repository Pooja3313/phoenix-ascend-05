import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import { ArrowRight, Shield, Briefcase, Handshake, Settings, FileCheck, GraduationCap, PenTool, Rocket, Send, Phone, Mail } from "lucide-react";
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

const advantages = [
  { icon: Briefcase, title: "Freedom To Run Your Business", description: "Freedom in decision-making allows you to retain control over your working model and growth plans, with continued regulatory and compliance support." },
  { icon: Shield, title: "Strategic Support", description: "Personalised guidance from strategizing business plans to building marketing strategies, helping you make confident and well-informed decisions." },
  { icon: Handshake, title: "Collaborative Partnership", description: "We foster collaborative partnerships built on trust, transparency and shared goals. Open communication and joint problem-solving at every stage." },
  { icon: Settings, title: "Access to Established Systems", description: "Benefit from proven systems, efficient software and CRMs that reduce admin and improve consistency, helping you focus on client acquisition." },
];

const steps = [
  { icon: FileCheck, title: "Fill Application Form", description: "Your first step starts with a simple application form, helping us understand your background and experience." },
  { icon: GraduationCap, title: "Document Verification", description: "A document review will be conducted to ensure compliance and regulatory requirements are met." },
  { icon: Briefcase, title: "Attend Induction", description: "Join a structured induction session where we walk you through internal systems, process & software trainings." },
  { icon: PenTool, title: "Complete Required Exams", description: "Complete assessments or qualifications to meet regulatory requirements — we guide you through every step." },
  { icon: Handshake, title: "Sign Agreement", description: "We sign a clear and straightforward agreement to formalise the relationship." },
  { icon: Rocket, title: "Start Doing Business", description: "You're ready to start your financial advisory business with confidence and backing from a trusted firm." },
];

const testimonials = [
  { name: "Kakarlapudi Varma", role: "Financial Adviser", text: "It's been a while since I started working with Phoenix Finserv as a financial analyst. I have nothing but positives to say about the team. Incredibly supportive work culture, and the team is always embracing and encouraging each other." },
  { name: "Geerish Ganesh Mandrekar", role: "Protection & Mortgage Consultant", text: "Best company to deal with. The support and systems available make it easy to focus on what matters most — serving clients." },
  { name: "Larisa Golea-Udvar", role: "Protection & Mortgage Consultant", text: "Great systems to use for my business. As an adviser I have all systems which I can use to quote my clients. I like the weekly trainings and the help from compliance." },
];

const NetworkAppointedRepresentative = () => {
  const [formData, setFormData] = useState({ fullName: "", email: "", contactNumber: "" });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-br from-phoenix-gray-light via-background to-phoenix-green-light overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08),transparent_60%)]" />
          <div className="absolute bottom-10 right-10 text-primary/5 text-[180px] font-bold animate-pound-rotate select-none pointer-events-none">£</div>
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <AnimatedSection>
              <p className="text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-4">Appointed Representative</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Become an <span className="font-handwritten text-5xl md:text-6xl text-primary pen-underline">Appointed Representative</span> with Phoenix Finserv
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                A Network that supports <span className="font-handwritten text-xl text-primary highlighter-mark">growth</span> without getting in your way.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                The Phoenix Finserv <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">Advantage</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Our Appointed Representatives are not just partners — they are the ones building and growing successful financial advisory businesses.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {advantages.map((item, i) => (
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

        {/* Steps */}
        <section className="py-20 bg-gradient-to-br from-phoenix-gray-light/50 via-background to-phoenix-green-light/30">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-14">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Getting Started</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Path to Become an <span className="font-handwritten text-4xl md:text-5xl text-primary pen-underline">AR</span>
              </h2>
            </AnimatedSection>
            <div className="max-w-4xl mx-auto relative">
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-accent/20" />
              <div className="space-y-8">
                {steps.map((step, i) => (
                  <AnimatedSection key={step.title} delay={i * 0.1}>
                    <div className="flex items-start gap-6 group">
                      <div className="hidden md:flex w-16 h-16 rounded-full bg-primary text-primary-foreground items-center justify-center font-bold text-lg shrink-0 z-10 shadow-lg group-hover:scale-110 group-hover:bg-accent transition-all duration-300">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div className="flex-1 bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-500">
                        <div className="flex items-center gap-3 mb-2">
                          <step.icon size={20} className="text-primary" />
                          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                What Our ARs <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">Say</span>
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((t, i) => (
                <AnimatedSection key={t.name} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-500 h-full">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                    <div className="border-t border-border pt-4">
                      <p className="font-bold text-foreground text-sm">{t.name}</p>
                      <p className="text-primary text-xs">{t.role}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + Form */}
        <section className="py-20 bg-gradient-to-r from-primary via-primary to-phoenix-orange-dark text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
              <AnimatedSection>
                <h2 className="text-3xl font-bold mb-4">Become an AR With <span className="font-handwritten text-4xl">Phoenix Finserv</span>?</h2>
                <p className="text-primary-foreground/80 mb-6">Partner with us to grow your financial advisory business under your brand name with the right balance of independence and regulatory support.</p>
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
                  <p className="text-muted-foreground text-sm mb-6">And be part of a lucrative collaboration with Phoenix Finserv.</p>
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

export default NetworkAppointedRepresentative;
