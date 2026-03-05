import { useEffect, useRef, useState } from "react";

const PoundAnimation = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-muted/30 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Animated £ */}
          <div className={`flex-1 flex justify-center ${visible ? 'animate-float-up' : 'opacity-0'}`}>
            <div className="relative">
              {/* Background morphing shape */}
              <div className="w-48 h-48 md:w-64 md:h-64 bg-primary/10 animate-pound-morph flex items-center justify-center">
                <span className="text-8xl md:text-9xl font-bold text-primary animate-pound-rotate select-none" style={{ perspective: '600px' }}>
                  £
                </span>
              </div>

              {/* Orbiting dots */}
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 rounded-full bg-primary/40"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 90}deg) translateX(140px)`,
                    animation: `pound-rotate ${8 + i}s linear infinite`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className={`flex-1 ${visible ? 'animate-float-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Financial Excellence</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Money, Our <span className="font-handwritten text-4xl md:text-5xl text-primary">Expertise</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With over 15 years of experience in the financial services industry, Phoenix Finserv
              combines traditional values with modern solutions. We help you navigate complex financial
              landscapes with confidence and clarity.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "£50M+", label: "Funds Managed" },
                { value: "99.5%", label: "Success Rate" },
                { value: "24/7", label: "Support Available" },
                { value: "5★", label: "Client Rating" },
              ].map((stat) => (
                <div key={stat.label} className="p-4 bg-card rounded-xl border border-border">
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoundAnimation;
