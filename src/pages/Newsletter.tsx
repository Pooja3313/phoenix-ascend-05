import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import { Send, Mail, Bell, TrendingUp, Shield, BookOpen } from "lucide-react";
import { useState, useEffect, useRef } from "react";

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

const topics = [
  { icon: Shield, title: "Protection Tips", desc: "Expert advice on safeguarding your family's financial future." },
  { icon: TrendingUp, title: "Market Insights", desc: "Stay ahead with latest mortgage rates and market trends." },
  { icon: BookOpen, title: "Planning Guides", desc: "Step-by-step guides for pensions, wills and estate planning." },
  { icon: Bell, title: "Product Updates", desc: "Be the first to know about new financial products and services." },
];

const Newsletter = () => {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing! You'll receive our latest updates soon.");
    setForm({ name: "", email: "" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-br from-phoenix-gray-light via-background to-phoenix-green-light overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08),transparent_60%)]" />
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-accent/5 animate-pound-morph pointer-events-none" />
          <div className="absolute bottom-10 right-20 text-primary/5 text-[150px] font-bold animate-pound-rotate select-none pointer-events-none">£</div>
          <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
            <AnimatedSection>
              <p className="text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-4">Stay Informed</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our <span className="font-handwritten text-5xl md:text-6xl text-primary pen-underline">Newsletter</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Stay informed and inspired as the latest insights and expert updates guide your journey toward <span className="font-handwritten text-xl text-primary highlighter-mark">smarter</span> financial decisions.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Topics */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                What You'll <span className="font-handwritten text-3xl md:text-4xl text-primary highlighter-mark">Receive</span>
              </h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {topics.map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.1}>
                  <div className="group bg-card border border-border rounded-2xl p-6 text-center hover:shadow-xl hover:border-primary/30 transition-all duration-500 h-full">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 icon-hover-bounce">
                      <item.icon size={26} className="text-primary group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe Form */}
        <section className="py-20 bg-gradient-to-br from-phoenix-gray-light/50 via-background to-phoenix-green-light/30">
          <div className="container mx-auto px-4 max-w-2xl">
            <AnimatedSection>
              <div className="bg-card border border-border rounded-3xl p-10 shadow-xl text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Mail size={30} className="text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Subscribe to Our <span className="font-handwritten text-3xl text-primary">Newsletter</span>
                </h2>
                <p className="text-muted-foreground mb-8">Get the latest financial insights delivered straight to your inbox.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" /> Subscribe Now
                  </button>
                </form>
                <p className="text-xs text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-16 bg-background text-center">
          <div className="container mx-auto px-4 max-w-2xl">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Blog & Articles — <span className="font-handwritten text-3xl text-primary">Coming Soon!</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our team is busy crafting fresh tips and insights. Check back soon — good things are coming!
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
      <StickyGetInTouch />
    </div>
  );
};

export default Newsletter;
