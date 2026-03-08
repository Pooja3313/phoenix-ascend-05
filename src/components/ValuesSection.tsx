import { useEffect, useRef, useState } from "react";
import { Star, Heart, Shield, Zap, Award } from "lucide-react";

const prideValues = [
  {
    letter: "P",
    title: "Professional",
    subtitle: "Be Competent\nResourceful and Effective",
    quote: "\"We value our excellent reputation and are committed to maintaining the highest professional and ethical standards in our business affairs\"",
    icon: Star,
    slideFrom: "top",
  },
  {
    letter: "R",
    title: "Respect",
    subtitle: "Be Courteous\nBe Considerate and\nPromote a Collaborative\nWork Environment",
    quote: "\"We emphasise everyone's contribution regardless of race, gender, religion, national origin, age, disability, gender identity, and sexual orientation\"",
    icon: Heart,
    slideFrom: "bottom",
  },
  {
    letter: "I",
    title: "Integrity",
    subtitle: "We Do What is Right\nand Create Trust\nAmong Peers and\nStakeholders",
    quote: "\"We believe in being honest and transparent in our work from the outset\"",
    icon: Shield,
    slideFrom: "top",
  },
  {
    letter: "D",
    title: "Driven",
    subtitle: "We Meet and Exceed\nServices Expectations\nwe Assume\nA 'Can do' Attitude",
    quote: "\"Our success is based on the quality and commitment of our colleagues\"",
    icon: Zap,
    slideFrom: "bottom",
  },
  {
    letter: "E",
    title: "Excellence",
    subtitle: "We Hold ourselves\nto the highest Standards\nof Performance",
    quote: "\"We continuously invest in talented accountants and innovative technology\"",
    icon: Award,
    slideFrom: "top",
  },
];

const ValuesSection = () => {
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

  return (
    <section className="py-24 bg-gradient-to-br from-phoenix-gray-light via-background to-accent/5 relative overflow-hidden" ref={ref}>
      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-primary/5 animate-pound-morph pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-accent/5 animate-pound-morph pointer-events-none" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/[0.03] text-[300px] font-bold select-none pointer-events-none animate-pound-rotate">£</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-3">Our Core Values</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            We Take{" "}
            <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">P.R.I.D.E.</span>
            {" "}In Our Work
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {prideValues.map((value, index) => {
            const Icon = value.icon;
            const isHovered = hoveredIdx === index;
            const slideClass = visible
              ? value.slideFrom === 'top'
                ? 'animate-pride-slide-down'
                : 'animate-pride-slide-up'
              : 'opacity-0';

            return (
              <div
                key={value.letter}
                className={`group relative ${slideClass}`}
                style={{ animationDelay: `${index * 0.15}s` }}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className={`relative bg-card border border-border rounded-2xl p-6 transition-all duration-500 h-full flex flex-col overflow-hidden
                  ${isHovered ? 'shadow-2xl border-primary/40 scale-[1.03]' : 'shadow-md hover:shadow-xl'}
                `}>
                  {/* Hover background color change */}
                  <div className={`absolute inset-0 transition-all duration-500 rounded-2xl ${isHovered ? 'bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10' : 'bg-transparent'}`} />
                  
                  {/* Background letter watermark */}
                  <span className={`absolute top-2 right-3 text-[120px] font-bold leading-none transition-all duration-500 select-none pointer-events-none
                    ${isHovered ? 'text-primary/15 scale-110' : 'text-foreground/[0.04]'}
                  `}>
                    {value.letter}
                  </span>

                  {/* Floating icon on hover */}
                  <div className={`absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 z-10
                    ${isHovered ? 'bg-primary scale-110 rotate-12 opacity-100' : 'bg-primary/10 opacity-0 scale-75'}
                  `}>
                    <Icon size={18} className={`transition-colors duration-300 ${isHovered ? 'text-primary-foreground' : 'text-primary'}`} />
                  </div>

                  {/* Big letter */}
                  <div className="relative mb-4 z-10">
                    <span className={`text-7xl md:text-8xl font-bold transition-all duration-500 inline-block leading-none
                      ${isHovered ? 'text-primary scale-110 -translate-y-1' : 'text-primary/70'}
                    `}>
                      {value.letter}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg font-bold mb-3 transition-colors duration-300 relative z-10
                    ${isHovered ? 'text-primary' : 'text-foreground'}
                  `}>
                    {value.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line mb-4 flex-1 relative z-10">
                    {value.subtitle}
                  </p>

                  {/* Divider with animation */}
                  <div className={`h-px mb-4 transition-all duration-500 relative z-10 ${isHovered ? 'bg-gradient-to-r from-primary via-accent to-primary' : 'bg-gradient-to-r from-border via-border/50 to-transparent'}`} />

                  {/* Quote */}
                  <p className={`text-xs italic leading-relaxed transition-colors duration-300 relative z-10
                    ${isHovered ? 'text-muted-foreground' : 'text-muted-foreground/60'}
                  `}>
                    {value.quote}
                  </p>

                  {/* Bottom accent bar on hover */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transition-all duration-500
                    ${isHovered ? 'opacity-100' : 'opacity-0'}
                  `} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
