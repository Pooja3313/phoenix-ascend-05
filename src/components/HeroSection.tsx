import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-phoenix-gray-dark via-foreground to-phoenix-gray-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--phoenix-green)/0.1),transparent_60%)]" />

      {/* Animated pound symbols */}
      <div className="absolute top-20 right-20 text-primary/5 text-[200px] font-bold animate-pound-rotate select-none pointer-events-none">
        £
      </div>
      <div className="absolute bottom-10 left-10 text-primary/5 text-[120px] font-bold animate-pound-rotate select-none pointer-events-none" style={{ animationDelay: '2s' }}>
        £
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-primary/20 animate-bounce" style={{ animationDuration: '3s' }} />
      <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-accent/20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 rounded-full px-4 py-2 mb-6 animate-float-up" style={{ animationDelay: '0.1s' }}>
            <Sparkles size={14} className="text-primary" />
            <span className="text-primary-foreground/80 text-sm font-medium">Phoenix Finserv — Helping Secure Dreams</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-float-up" style={{ animationDelay: '0.3s' }}>
            Best Solution to{" "}
            <span className="highlighter-mark text-primary">Manage</span>{" "}
            Your Finance &{" "}
            <span className="font-handwritten text-5xl md:text-6xl lg:text-7xl text-primary pen-underline">
              Accounting
            </span>
          </h1>

          <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl leading-relaxed animate-float-up" style={{ animationDelay: '0.5s' }}>
            From protection and mortgages to pensions and estate planning — we provide expert
            financial advice to secure your future and your family's dreams.
          </p>

          <div className="flex flex-wrap gap-4 animate-float-up" style={{ animationDelay: '0.7s' }}>
            <a href="#contact" className="inline-flex items-center gap-2 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
              Get a Free Quote
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a href="tel:+442079932737" className="inline-flex items-center gap-2 border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm">
              📞 Talk to Advisor
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60L60 52C120 44 240 28 360 22C480 16 600 20 720 26C840 32 960 40 1080 42C1200 44 1320 40 1380 38L1440 36V60H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
