import { Building2, Users, TrendingUp, Lightbulb, Rocket, Globe } from "lucide-react";
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

const timeline = [
  { year: "2013", title: "Our Beginnings", description: "Manish Shah formed Phoenix Accountancy Service Ltd along with Mayuri Patel, after realising that it is not just the size and scale of a business that determines the level of service delivered to clients but more the ability to meet and manage clients' requirements and expectations.", icon: Building2 },
  { year: "2015", title: "Growing Through Referrals", description: "The accountancy company grew through recommendations and referrals for the world class service given by longstanding loyal staff at Phoenix.", icon: Users },
  { year: "2018", title: "Expanding Services", description: "Phoenix Accountancy focuses on offering hands-on and tailored financial support through proactive tax advice and accountancy services to businesses, individuals, contractors, and SMEs.", icon: TrendingUp },
  { year: "2020", title: "Digital Transformation", description: "Embracing innovative technology and digital solutions to serve our clients better, streamlining processes and improving communication.", icon: Lightbulb },
  { year: "2023", title: "Phoenix Finserv Launch", description: "Expanding into comprehensive financial services including protection, mortgages, pensions, and estate planning — helping secure our clients' dreams.", icon: Rocket },
  { year: "2026", title: "Today & Beyond", description: "Phoenix Accountancy is an accounting firm with a difference that stands out from the crowd. We develop and build a bond with clients by implementing strong business structures and plans to help them save time and money.", icon: Globe },
];

const JourneyTimeline = () => {
  const [activeTimeline, setActiveTimeline] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-phoenix-gray-light via-background to-phoenix-green-light/10">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Milestones</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our <span className="font-handwritten text-4xl md:text-5xl text-primary pen-underline">Timeline</span>
          </h2>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-accent/20 md:-translate-x-px" />

          <div className="space-y-16">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = item.icon;
              const isActive = activeTimeline === index;

              return (
                <AnimatedSection key={item.year} delay={index * 0.15} className="relative flex items-start">
                  <div
                    className={`absolute left-8 md:left-1/2 -translate-x-1/2 z-10 cursor-pointer transition-all duration-500 ${isActive ? 'scale-125' : 'hover:scale-110'}`}
                    onMouseEnter={() => setActiveTimeline(index)}
                    onMouseLeave={() => setActiveTimeline(null)}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${isActive ? 'bg-primary shadow-primary/40' : 'bg-card border-2 border-primary'}`}>
                      <Icon size={18} className={`transition-colors duration-300 ${isActive ? 'text-primary-foreground' : 'text-primary'}`} />
                    </div>
                  </div>

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
  );
};

export default JourneyTimeline;
