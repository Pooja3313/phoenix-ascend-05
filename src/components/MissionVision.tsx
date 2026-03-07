import { Target, Eye, Rocket, BarChart3, Lightbulb, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const MissionVision = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What Drives Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">Purpose</span> & Direction
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <div
            className={`group relative bg-card rounded-3xl border border-border p-10 hover:shadow-2xl transition-all duration-700 hover:border-primary/30 overflow-hidden ${visible ? 'animate-float-up' : 'opacity-0'}`}
          >
            {/* Animated corner accent */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-br-[60px] group-hover:w-32 group-hover:h-32 transition-all duration-500" />
            
            {/* Icon cluster */}
            <div className="relative flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 icon-hover-bounce relative z-10">
                <Target size={30} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              {/* Floating mini icons */}
              <div className="absolute left-14 top-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500">
                <Rocket size={14} className="text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">Our Mission</h3>
                <div className="w-12 h-1 bg-primary rounded-full mt-1 group-hover:w-20 transition-all duration-500" />
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-base">
              Phoenix aspires to provide world class professional financial services to meet our clients' needs 
              through mutual trust and communication offered at a competitive price whilst maintaining integrity 
              and honesty in everything we do.
            </p>

            {/* Bottom decorative line */}
            <div className="mt-8 h-0.5 bg-gradient-to-r from-primary/30 via-primary/10 to-transparent rounded-full" />
          </div>

          {/* Vision Card */}
          <div
            className={`group relative bg-card rounded-3xl border border-border p-10 hover:shadow-2xl transition-all duration-700 hover:border-accent/30 overflow-hidden ${visible ? 'animate-float-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            {/* Animated corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-[60px] group-hover:w-32 group-hover:h-32 transition-all duration-500" />
            
            {/* Icon cluster */}
            <div className="relative flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 icon-hover-bounce relative z-10">
                <Eye size={30} className="text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              {/* Floating mini icons */}
              <div className="absolute left-14 top-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500">
                <BarChart3 size={14} className="text-primary" />
              </div>
              <div className="absolute left-10 bottom-0 w-7 h-7 rounded-lg bg-phoenix-gold/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-4 group-hover:translate-y-2 transition-all duration-700">
                <Lightbulb size={12} className="text-phoenix-gold" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">Our Vision</h3>
                <div className="w-12 h-1 bg-accent rounded-full mt-1 group-hover:w-20 transition-all duration-500" />
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-base">
              To be a reputable financial services firm providing comprehensive accounting and advisory services 
              to individuals and small businesses through continuous investment in our teams and the use of 
              innovative technology to help our clients succeed in their business.
            </p>

            {/* Bottom decorative line */}
            <div className="mt-8 h-0.5 bg-gradient-to-r from-accent/30 via-accent/10 to-transparent rounded-full" />
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 ${visible ? 'animate-float-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <a href="#contact" className="inline-flex items-center gap-2 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            Get a Quote
            <Rocket size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
