import { Handshake, GraduationCap, ShieldCheck, BookOpen, CalendarCheck, ClipboardList } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  { icon: Handshake, title: "Our Personal Touch", color: "primary" },
  { icon: GraduationCap, title: "Unlimited Expert Advice", color: "accent" },
  { icon: ShieldCheck, title: "Tax Efficiency Reviews", color: "primary" },
  { icon: BookOpen, title: "Simple Bookkeeping Software", color: "accent" },
  { icon: CalendarCheck, title: "Never Miss a Deadline", color: "primary" },
  { icon: ClipboardList, title: "No Hidden Extras", color: "accent" },
];

const WhyChooseUs = () => {
  const [visible, setVisible] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Calculate positions using trigonometry for perfect centering
  const getPosition = (index: number, total: number, radius: number) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2; // Start from top
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  return (
    <section className="py-24 bg-gradient-to-br from-phoenix-gray-light/30 via-background to-phoenix-green-light/20 relative overflow-hidden" ref={ref}>
      <div className="absolute top-20 right-20 text-primary/[0.03] text-[180px] font-bold animate-pound-rotate select-none pointer-events-none">£</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-3">
            Why Choose Our Services?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            We help over <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">1,000</span> businesses in the UK
          </h2>
        </div>

        {/* Circular Layout - Desktop */}
        <div className="hidden lg:flex justify-center items-center relative" style={{ height: '560px' }}>
          <div className="relative" style={{ width: '560px', height: '560px' }}>
            {/* Orbit ring - centered */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-2 border-dashed border-border/40 ${visible ? 'animate-float-up' : 'opacity-0'}`} />

            {/* Center circle - perfectly centered */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-card border-4 border-border shadow-2xl flex items-center justify-center z-20 ${visible ? 'animate-float-up' : 'opacity-0'}`}>
              <div className="text-center">
                <span className="text-2xl font-bold text-primary">Phoenix</span>
                <span className="block text-[10px] text-muted-foreground uppercase tracking-[0.2em] mt-0.5">Finserv</span>
                <span className="block font-handwritten text-primary text-base mt-1">Helping secure dreams</span>
              </div>
            </div>

            {/* Feature items positioned using trigonometry */}
            {features.map((feature, index) => {
              const pos = getPosition(index, features.length, 230);
              const isHovered = hoveredIdx === index;
              const isPrimary = feature.color === 'primary';

              return (
                <div
                  key={feature.title}
                  className={`absolute ${visible ? 'animate-float-up' : 'opacity-0'}`}
                  style={{
                    top: `calc(50% + ${pos.y}px)`,
                    left: `calc(50% + ${pos.x}px)`,
                    transform: 'translate(-50%, -50%)',
                    animationDelay: `${index * 0.15 + 0.3}s`,
                  }}
                  onMouseEnter={() => setHoveredIdx(index)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg
                      ${isHovered
                        ? isPrimary ? 'bg-primary scale-125 shadow-primary/30' : 'bg-accent scale-125 shadow-accent/30'
                        : isPrimary ? 'bg-primary/10 border-2 border-primary/20' : 'bg-accent/10 border-2 border-accent/20'
                      }
                    `}>
                      <feature.icon
                        size={26}
                        className={`transition-all duration-300 ${isHovered
                          ? 'text-primary-foreground scale-110'
                          : isPrimary ? 'text-primary' : 'text-accent'
                        }`}
                      />
                    </div>
                    <span className={`mt-3 text-xs font-semibold text-center max-w-[120px] leading-tight transition-colors duration-300
                      ${isHovered ? 'text-primary' : 'text-foreground'}
                    `}>
                      {feature.title}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Connector lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {features.map((_, i) => {
                const pos = getPosition(i, features.length, 230);
                return (
                  <line
                    key={i}
                    x1="280" y1="280"
                    x2={280 + pos.x} y2={280 + pos.y}
                    stroke="hsl(var(--border))"
                    strokeWidth="1"
                    strokeDasharray="4,4"
                    opacity="0.4"
                  />
                );
              })}
            </svg>
          </div>
        </div>

        {/* Mobile grid */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const isPrimary = feature.color === 'primary';
            return (
              <div
                key={feature.title}
                className={`group text-center ${visible ? 'animate-float-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg
                  ${isPrimary
                    ? 'bg-primary/10 border-2 border-primary/20 group-hover:bg-primary group-hover:border-primary'
                    : 'bg-accent/10 border-2 border-accent/20 group-hover:bg-accent group-hover:border-accent'
                  }
                `}>
                  <feature.icon size={26} className={`transition-colors ${isPrimary ? 'text-primary group-hover:text-primary-foreground' : 'text-accent group-hover:text-accent-foreground'}`} />
                </div>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`text-center mt-14 ${visible ? 'animate-float-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
          <a href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
