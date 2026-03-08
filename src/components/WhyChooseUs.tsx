import { Handshake, GraduationCap, ShieldCheck, BookOpen, CalendarCheck, ClipboardList } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  { icon: Handshake, title: "Our Personal Touch", angle: -60 },
  { icon: GraduationCap, title: "Unlimited Expert Advice", angle: -20 },
  { icon: ShieldCheck, title: "Tax Efficiency Reviews", angle: 20 },
  { icon: BookOpen, title: "Simple Bookkeeping Software", angle: 60 },
  { icon: CalendarCheck, title: "Never Miss a Deadline", angle: 120 },
  { icon: ClipboardList, title: "No Hidden Extras", angle: 180 },
];

const WhyChooseUs = () => {
  const [visible, setVisible] = useState(false);
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
    <section className="py-24 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-3">
            Why Choose Our Services?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            We help over <span className="text-primary font-handwritten text-4xl md:text-5xl highlighter-mark">1,000</span> businesses in the UK
          </h2>
        </div>

        {/* Circular Layout - Desktop */}
        <div className="hidden lg:block relative max-w-3xl mx-auto" style={{ height: '550px' }}>
          {/* Center circle with logo */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-muted border-4 border-border shadow-xl flex items-center justify-center z-10 ${visible ? 'animate-float-up' : 'opacity-0'}`}>
            <div className="text-center">
              <span className="text-3xl font-bold text-primary">Phoenix</span>
              <span className="block text-xs text-muted-foreground uppercase tracking-widest mt-1">Finserv</span>
              <span className="block text-[10px] text-primary font-handwritten text-lg mt-0.5">Helping secure dreams</span>
            </div>
          </div>

          {/* Orbit ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border-2 border-dashed border-border/50" />

          {/* Feature items positioned around the circle */}
          {features.map((feature, index) => {
            const angleRad = (feature.angle * Math.PI) / 180;
            const radius = 220;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;

            return (
              <div
                key={feature.title}
                className={`absolute group ${visible ? 'animate-float-up' : 'opacity-0'}`}
                style={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                {/* Connector dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-border group-hover:bg-primary transition-colors z-0" />

                {/* Icon circle */}
                <div className="relative flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-2 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300 icon-hover-bounce z-10">
                    <feature.icon size={26} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="text-xs font-semibold text-foreground text-center max-w-[120px] leading-tight group-hover:text-primary transition-colors">
                    {feature.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile grid fallback */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group text-center ${visible ? 'animate-float-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300 icon-hover-bounce">
                <feature.icon size={26} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 ${visible ? 'animate-float-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <a href="#contact" className="inline-flex items-center gap-2 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
