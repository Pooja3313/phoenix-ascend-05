import { Building2, Users, TrendingUp, Lightbulb } from "lucide-react";
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

const cards = [
  {
    icon: Building2,
    title: "The Vision",
    description: "Manish Shah formed Phoenix Accountancy Service Ltd in 2013 along with Mayuri Patel, realising that the ability to meet and manage clients' requirements matters more than size and scale.",
    color: "primary" as const,
  },
  {
    icon: Users,
    title: "The Approach",
    description: "Phoenix focuses on offering hands-on and tailored financial support through proactive tax advice and accountancy services to businesses, individuals, contractors, and SMEs.",
    color: "accent" as const,
  },
  {
    icon: TrendingUp,
    title: "The Growth",
    description: "The company has grown over the last decade through recommendations and referrals for the world class service given by longstanding loyal staff at Phoenix.",
    color: "primary" as const,
  },
  {
    icon: Lightbulb,
    title: "The Difference",
    description: "Manish had worked as a CFO for 7 years, helping complete the successful sale of a business. Phoenix is an accounting firm with a difference that stands out from the crowd.",
    color: "accent" as const,
  },
];

const OurBeginnings = () => {
  return (
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
            {cards.map((card, i) => {
              const isPrimary = card.color === "primary";
              return (
                <AnimatedSection key={card.title} delay={(i + 1) * 0.1}>
                  <div className={`bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group h-full ${isPrimary ? 'hover:border-primary/30' : 'hover:border-accent/30'}`}>
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 ${isPrimary ? 'bg-primary/10 group-hover:bg-primary' : 'bg-accent/10 group-hover:bg-accent'}`}>
                      <card.icon size={24} className={`transition-colors ${isPrimary ? 'text-primary group-hover:text-primary-foreground' : 'text-accent group-hover:text-accent-foreground'}`} />
                    </div>
                    <h3 className={`text-xl font-bold text-foreground mb-3 transition-colors ${isPrimary ? 'group-hover:text-primary' : 'group-hover:text-accent'}`}>
                      The <span className="highlighter-mark">{card.title.split('The ')[1]}</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{card.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBeginnings;
