import { Briefcase, MapPin, Clock, ArrowRight, Users, Award, Heart, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import { useEffect, useRef, useState } from "react";

const perks = [
  { icon: TrendingUp, title: "Career Growth", description: "Continuous learning and development opportunities to advance your career." },
  { icon: Users, title: "Collaborative Culture", description: "Work alongside talented professionals in a supportive team environment." },
  { icon: Heart, title: "Work-Life Balance", description: "Flexible working arrangements and competitive holiday allowance." },
  { icon: Award, title: "Competitive Package", description: "Attractive salary, pension contributions, and performance bonuses." },
];

const openings = [
  { title: "Financial Adviser", location: "London", type: "Full-time", description: "Provide expert financial advice to clients on protection, mortgages, and pensions." },
  { title: "Mortgage Specialist", location: "London", type: "Full-time", description: "Help clients find the best mortgage solutions for residential and commercial properties." },
  { title: "Compliance Officer", location: "London / Remote", type: "Full-time", description: "Ensure regulatory compliance across all our financial services operations." },
  { title: "Client Relationship Manager", location: "London", type: "Full-time", description: "Build and maintain strong relationships with our growing client base." },
];

const Careers = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-phoenix-gray-dark text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--accent)/0.08),transparent_60%)]" />
          <div className="absolute top-20 left-20 text-primary/5 text-[150px] font-bold animate-pound-rotate select-none pointer-events-none">£</div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-4">Careers</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join the <span className="font-handwritten text-5xl md:text-6xl text-primary pen-underline">Phoenix</span> Team
            </h1>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">
              Be part of a growing team dedicated to helping people secure their financial futures.
            </p>
          </div>
        </section>

        {/* Perks */}
        <section className="py-20 bg-background" ref={ref}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Why Work With Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                The Phoenix <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">Experience</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {perks.map((perk, i) => (
                <div key={perk.title} className={`group text-center p-6 rounded-2xl border border-border bg-card hover:shadow-xl hover:border-primary/30 transition-all duration-500 ${visible ? 'animate-float-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 0.12}s` }}>
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 icon-hover-bounce">
                    <perk.icon size={28} className="text-primary group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{perk.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{perk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Open Positions</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Current <span className="font-handwritten text-4xl md:text-5xl text-primary">Openings</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-5">
              {openings.map((job, i) => (
                <div key={job.title} className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-500 animate-float-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">{job.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{job.description}</p>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground"><MapPin size={12} />{job.location}</span>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground"><Clock size={12} />{job.type}</span>
                      </div>
                    </div>
                    <a href="#contact" className="inline-flex items-center gap-2 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 whitespace-nowrap shrink-0 text-sm group/btn">
                      Apply Now <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyGetInTouch />
    </div>
  );
};

export default Careers;
