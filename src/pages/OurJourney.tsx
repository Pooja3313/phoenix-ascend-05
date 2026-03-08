import { ArrowRight, Building2, Users, TrendingUp, Lightbulb, Rocket, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import { useEffect, useRef, useState } from "react";

const timeline = [
  { year: "2013", title: "Our Beginnings", description: "Manish Shah formed Phoenix Accountancy Service Ltd along with Mayuri Patel, after realising that it is not just the size and scale of a business that determines the level of service delivered to clients but more the ability to meet and manage clients' requirements and expectations.", icon: Building2 },
  { year: "2015", title: "Growing Through Referrals", description: "The accountancy company grew through recommendations and referrals for the world class service given by longstanding loyal staff at Phoenix.", icon: Users },
  { year: "2018", title: "Expanding Services", description: "Phoenix Accountancy focuses on offering hands-on and tailored financial support through proactive tax advice and accountancy services to businesses, individuals, contractors, and SMEs.", icon: TrendingUp },
  { year: "2020", title: "Digital Transformation", description: "Embracing innovative technology and digital solutions to serve our clients better, streamlining processes and improving communication.", icon: Lightbulb },
  { year: "2023", title: "Phoenix Finserv Launch", description: "Expanding into comprehensive financial services including protection, mortgages, pensions, and estate planning — helping secure our clients' dreams.", icon: Rocket },
  { year: "2026", title: "Today & Beyond", description: "Phoenix Accountancy is an accounting firm with a difference that stands out from the crowd. We develop and build a bond with clients by implementing strong business structures and plans to help them save time and money.", icon: Globe },
];

const stats = [
  { number: "10+", label: "Years of Excellence" },
  { number: "1000+", label: "Businesses Helped" },
  { number: "50+", label: "Expert Advisors" },
  { number: "98%", label: "Client Satisfaction" },
];

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

const OurJourney = () => {
  const [activeTimeline, setActiveTimeline] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero - Light gradient */}
        <section className="relative py-24 bg-gradient-to-br from-phoenix-gray-light via-background to-phoenix-green-light overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.06),transparent_50%)]" />
          <div className="absolute bottom-20 right-20 text-primary/5 text-[180px] font-bold animate-pound-rotate select-none pointer-events-none">£</div>
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/5 animate-pound-morph pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <AnimatedSection>
              <p className="text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-4">Our Story</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                The Phoenix <span className="font-handwritten text-5xl md:text-6xl text-primary pen-underline">Journey</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                From humble beginnings to a trusted financial services firm — our story of <span className="font-handwritten text-xl text-primary highlighter-mark">growth</span>, <span className="font-handwritten text-xl text-accent highlighter-mark">trust</span>, and excellence.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-8 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary-foreground font-handwritten">{stat.number}</p>
                  <p className="text-primary-foreground/80 text-sm mt-1">{stat.label}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* About Block - Redesigned */}
        <section className="py-20 bg-gradient-to-br from-background via-phoenix-green-light/20 to-phoenix-gray-light">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection>
                <div className="text-center mb-12">
                  <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Where It All Started</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Our <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">Beginnings</span>
                  </h2>
                </div>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Key highlight cards */}
                <AnimatedSection delay={0.1}>
                  <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-500 group h-full">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Building2 size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">The <span className="highlighter-mark">Vision</span></h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Manish Shah formed Phoenix Accountancy Service Ltd in <span className="font-semibold text-primary">2013</span> along with Mayuri Patel, realising that the <span className="font-handwritten text-base text-accent">ability to meet and manage clients' requirements</span> matters more than size and scale.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-accent/30 transition-all duration-500 group h-full">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Users size={24} className="text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">The <span className="highlighter-mark">Approach</span></h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Phoenix focuses on offering <span className="font-handwritten text-base text-primary">hands-on and tailored financial support</span> through proactive tax advice and accountancy services to businesses, individuals, contractors, and SMEs.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                  <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-500 group h-full">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <TrendingUp size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">The <span className="highlighter-mark">Growth</span></h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      The company has grown over the last decade through <span className="font-handwritten text-base text-accent">recommendations and referrals</span> for the world class service given by longstanding loyal staff at Phoenix.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                  <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-accent/30 transition-all duration-500 group h-full">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Lightbulb size={24} className="text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">The <span className="highlighter-mark">Difference</span></h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Manish had worked as a <span className="font-semibold text-primary">CFO for 7 years</span>, helping complete the successful sale of a business. Phoenix is an accounting firm with a difference that <span className="font-handwritten text-base text-primary">stands out from the crowd</span>.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline - Redesigned */}
        <section className="py-20 bg-gradient-to-b from-phoenix-gray-light via-background to-phoenix-green-light/10">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Milestones</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our <span className="font-handwritten text-4xl md:text-5xl text-primary pen-underline">Timeline</span>
              </h2>
            </AnimatedSection>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-accent/20 md:-translate-x-px" />

              <div className="space-y-16">
                {timeline.map((item, index) => {
                  const isLeft = index % 2 === 0;
                  const Icon = item.icon;
                  const isActive = activeTimeline === index;

                  return (
                    <AnimatedSection
                      key={item.year}
                      delay={index * 0.15}
                      className="relative flex items-start"
                    >
                      {/* Dot with icon */}
                      <div
                        className={`absolute left-8 md:left-1/2 -translate-x-1/2 z-10 cursor-pointer transition-all duration-500 ${isActive ? 'scale-125' : 'hover:scale-110'}`}
                        onMouseEnter={() => setActiveTimeline(index)}
                        onMouseLeave={() => setActiveTimeline(null)}
                      >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${isActive ? 'bg-primary shadow-primary/40' : 'bg-card border-2 border-primary'}`}>
                          <Icon size={18} className={`transition-colors duration-300 ${isActive ? 'text-primary-foreground' : 'text-primary'}`} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`ml-20 md:ml-0 md:w-[44%] ${isLeft ? 'md:mr-auto md:pr-16 md:text-right' : 'md:ml-auto md:pl-16'}`}>
                        <div className={`bg-card border border-border rounded-2xl p-6 transition-all duration-500 hover:shadow-xl group ${isActive ? 'shadow-xl border-primary/30' : 'hover:border-primary/20'}`}>
                          <span className="inline-block font-handwritten text-2xl text-primary font-bold mb-1">{item.year}</span>
                          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary via-primary to-phoenix-orange-dark text-primary-foreground text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.15),transparent_50%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your <span className="font-handwritten text-4xl">Journey</span> With Us?</h2>
              <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">Join over 1,000 businesses who trust Phoenix Finserv with their financial future.</p>
              <a href="/contact" className="inline-flex items-center gap-2 bg-card text-foreground hover:bg-background font-semibold px-8 py-4 rounded-xl transition-all duration-300 group mt-2 shadow-lg hover:shadow-xl hover:scale-105">
                Get in Touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
      <StickyGetInTouch />
    </div>
  );
};

export default OurJourney;
