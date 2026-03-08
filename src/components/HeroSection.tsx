import { ArrowRight, Sparkles, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-background">
      {/* Light background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-phoenix-green-light/30 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--phoenix-green)/0.06),transparent_50%)]" />

      {/* Animated pound symbols */}
      <div className="absolute top-20 right-20 text-primary/10 text-[200px] font-bold animate-pound-rotate select-none pointer-events-none">
        £
      </div>
      <div className="absolute bottom-10 left-10 text-primary/10 text-[120px] font-bold animate-pound-rotate select-none pointer-events-none" style={{ animationDelay: '2s' }}>
        £
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-primary/20 animate-bounce" style={{ animationDuration: '3s' }} />
      <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-accent/20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="max-w-3xl flex-1">
            <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-6 animate-float-up" style={{ animationDelay: '0.1s' }}>
              <Sparkles size={14} className="text-accent" />
              <span className="text-foreground text-sm font-medium">Phoenix Finserv — Helping Secure Dreams</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-float-up" style={{ animationDelay: '0.3s' }}>
              Best Solution to{" "}
              <span className="highlighter-mark text-foreground">Manage</span>{" "}
              Your Finance &{" "}
              <span className="font-handwritten text-5xl md:text-6xl lg:text-7xl text-foreground pen-underline">
                Accounting
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed animate-float-up" style={{ animationDelay: '0.5s' }}>
              From protection and mortgages to pensions and estate planning — we provide expert
              financial advice to secure your future and your family's dreams.
            </p>

            <div className="flex flex-wrap gap-4 animate-float-up" style={{ animationDelay: '0.7s' }}>
              <a href="#contact" className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-primary-foreground font-semibold text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
                Get a Free Quote
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a href="tel:+442079932737" className="inline-flex items-center gap-2 border-2 border-foreground/20 text-foreground hover:bg-accent/10 hover:border-accent hover:text-accent font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm group">
                <Phone size={20} className="text-accent" />
                Talk to Advisor
              </a>
            </div>
          </div>

          {/* Right side SVG illustration */}
          <div className="flex-1 hidden lg:flex justify-center animate-float-up" style={{ animationDelay: '0.5s' }}>
            <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
              {/* Desk */}
              <rect x="60" y="260" width="480" height="8" rx="4" fill="hsl(var(--phoenix-gray-light))" />
              <rect x="120" y="268" width="8" height="80" rx="2" fill="hsl(var(--phoenix-gray))" />
              <rect x="472" y="268" width="8" height="80" rx="2" fill="hsl(var(--phoenix-gray))" />

              {/* Person 1 - sitting left */}
              <g>
                <circle cx="140" cy="200" r="20" fill="hsl(var(--primary))" />
                <rect x="125" y="222" width="30" height="38" rx="6" fill="hsl(var(--primary))" />
                {/* Laptop */}
                <rect x="110" y="245" width="50" height="15" rx="3" fill="hsl(var(--phoenix-gray))" />
                <rect x="115" y="235" width="40" height="12" rx="2" fill="hsl(var(--accent))" opacity="0.3" />
              </g>

              {/* Person 2 - standing left-center */}
              <g>
                <circle cx="240" cy="185" r="22" fill="hsl(var(--accent))" />
                <rect x="222" y="210" width="36" height="50" rx="7" fill="hsl(var(--accent))" />
                {/* Laptop */}
                <rect x="215" y="245" width="50" height="15" rx="3" fill="hsl(var(--phoenix-gray))" />
                <rect x="220" y="235" width="40" height="12" rx="2" fill="hsl(var(--primary))" opacity="0.2" />
              </g>

              {/* Person 3 - center standing */}
              <g>
                <circle cx="340" cy="182" r="22" fill="hsl(var(--accent))" opacity="0.8" />
                <rect x="322" y="207" width="36" height="53" rx="7" fill="hsl(var(--accent))" opacity="0.7" />
                {/* Gesturing hand */}
                <rect x="358" y="215" width="20" height="5" rx="2" fill="hsl(var(--accent))" opacity="0.6" transform="rotate(-20 358 215)" />
              </g>

              {/* Person 4 - sitting right */}
              <g>
                <circle cx="460" cy="200" r="20" fill="hsl(var(--primary))" opacity="0.85" />
                <rect x="445" y="222" width="30" height="38" rx="6" fill="hsl(var(--primary))" opacity="0.85" />
                {/* Laptop */}
                <rect x="430" y="245" width="50" height="15" rx="3" fill="hsl(var(--phoenix-gray))" />
                <rect x="435" y="235" width="40" height="12" rx="2" fill="hsl(var(--accent))" opacity="0.3" />
                {/* Coffee cup */}
                <rect x="490" y="248" width="10" height="12" rx="3" fill="hsl(var(--phoenix-gold))" />
              </g>

              {/* Chat bubble */}
              <rect x="280" y="145" width="40" height="25" rx="8" fill="hsl(var(--primary))" opacity="0.2" />
              <circle cx="290" cy="157" r="3" fill="hsl(var(--primary))" opacity="0.4" />
              <circle cx="300" cy="157" r="3" fill="hsl(var(--accent))" opacity="0.4" />
              <circle cx="310" cy="157" r="3" fill="hsl(var(--phoenix-gold))" opacity="0.4" />

              {/* Wall decorations */}
              <rect x="50" y="100" width="30" height="40" rx="4" fill="hsl(var(--phoenix-gray-light))" opacity="0.5" />
              <circle cx="530" cy="120" r="18" fill="hsl(var(--phoenix-gray-light))" opacity="0.3" />

              {/* Plant */}
              <rect x="530" y="290" width="12" height="25" rx="3" fill="hsl(var(--phoenix-gray))" opacity="0.4" />
              <circle cx="536" cy="285" r="15" fill="hsl(var(--accent))" opacity="0.25" />

              {/* Floor */}
              <line x1="40" y1="348" x2="560" y2="348" stroke="hsl(var(--border))" strokeWidth="1" />
            </svg>
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
