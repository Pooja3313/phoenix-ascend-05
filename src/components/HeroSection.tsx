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

          {/* Right side - Detailed Team SVG Illustration matching reference */}
          <div className="flex-1 hidden lg:flex justify-center animate-float-up" style={{ animationDelay: '0.5s' }}>
            <svg viewBox="0 0 700 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xl">
              {/* Background elements - wall decorations */}
              <rect x="50" y="60" width="40" height="55" rx="4" stroke="hsl(var(--phoenix-gray)/0.3)" strokeWidth="2" fill="none" />
              <rect x="55" y="65" width="30" height="20" rx="2" fill="hsl(var(--phoenix-gray-light))" />
              <rect x="55" y="90" width="30" height="20" rx="2" fill="hsl(var(--phoenix-gray-light))" />
              
              {/* Clock on wall */}
              <circle cx="620" cy="80" r="22" stroke="hsl(var(--phoenix-gray)/0.4)" strokeWidth="2" fill="hsl(var(--background))" />
              <line x1="620" y1="80" x2="620" y2="65" stroke="hsl(var(--phoenix-gray))" strokeWidth="2" strokeLinecap="round" />
              <line x1="620" y1="80" x2="632" y2="80" stroke="hsl(var(--phoenix-gray))" strokeWidth="2" strokeLinecap="round" />
              <circle cx="620" cy="80" r="2" fill="hsl(var(--phoenix-gray))" />

              {/* === Person 1 - Man sitting left (orange shirt) === */}
              <g>
                {/* Chair */}
                <rect x="72" y="340" width="8" height="50" rx="2" fill="hsl(var(--phoenix-gray))" />
                <rect x="60" y="330" width="70" height="8" rx="3" fill="hsl(var(--phoenix-gray))" />
                <path d="M65 330 L65 280 Q65 270 75 270 L75 330" fill="none" stroke="hsl(var(--phoenix-gray))" strokeWidth="3" />
                
                {/* Body - orange shirt */}
                <rect x="72" y="240" width="50" height="60" rx="10" fill="hsl(var(--primary))" />
                {/* Arms */}
                <rect x="60" y="255" width="15" height="8" rx="4" fill="hsl(var(--primary))" />
                <rect x="120" y="252" width="30" height="8" rx="4" fill="hsl(var(--primary))" transform="rotate(-10 120 252)" />
                {/* Hands */}
                <circle cx="148" cy="248" r="5" fill="hsl(var(--phoenix-gray-light))" />
                <circle cx="58" cy="259" r="5" fill="hsl(var(--phoenix-gray-light))" />
                
                {/* Head */}
                <circle cx="97" cy="210" r="24" fill="hsl(var(--phoenix-gray-light))" />
                {/* Hair */}
                <path d="M73 205 Q73 185 97 180 Q121 185 121 205" fill="hsl(var(--foreground))" />
                {/* Beard */}
                <path d="M82 218 Q97 235 112 218" fill="hsl(var(--foreground)/0.7)" />
                {/* Eyes */}
                <circle cx="88" cy="210" r="2.5" fill="hsl(var(--foreground))" />
                <circle cx="106" cy="210" r="2.5" fill="hsl(var(--foreground))" />
                {/* Glasses */}
                <rect x="82" y="205" width="14" height="12" rx="6" stroke="hsl(var(--foreground))" strokeWidth="1.5" fill="none" />
                <rect x="100" y="205" width="14" height="12" rx="6" stroke="hsl(var(--foreground))" strokeWidth="1.5" fill="none" />
                <line x1="96" y1="211" x2="100" y2="211" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
                
                {/* Laptop on desk */}
                <rect x="70" y="310" width="55" height="5" rx="2" fill="hsl(var(--phoenix-gray))" />
                <rect x="75" y="290" width="45" height="22" rx="3" fill="hsl(var(--phoenix-gray))" />
                <rect x="78" y="293" width="39" height="16" rx="2" fill="hsl(var(--accent)/0.3)" />
              </g>

              {/* === Person 2 - Man standing (green shirt) === */}
              <g>
                {/* Legs */}
                <rect x="218" y="340" width="12" height="55" rx="4" fill="hsl(var(--foreground)/0.8)" />
                <rect x="240" y="340" width="12" height="55" rx="4" fill="hsl(var(--foreground)/0.8)" />
                {/* Shoes */}
                <rect x="214" y="390" width="20" height="8" rx="4" fill="hsl(var(--foreground))" />
                <rect x="236" y="390" width="20" height="8" rx="4" fill="hsl(var(--foreground))" />
                
                {/* Body - green shirt */}
                <rect x="210" y="250" width="55" height="65" rx="12" fill="hsl(var(--accent))" />
                {/* Collar */}
                <path d="M225 250 L237 265 L249 250" fill="hsl(var(--accent))" stroke="hsl(var(--background))" strokeWidth="1.5" />
                {/* Arms */}
                <rect x="198" y="258" width="15" height="8" rx="4" fill="hsl(var(--accent))" />
                <path d="M265 260 L290 240 L295 245 L270 265" fill="hsl(var(--accent))" />
                {/* Hands */}
                <circle cx="196" cy="262" r="5" fill="hsl(var(--phoenix-gray-light))" />
                <circle cx="295" cy="242" r="5" fill="hsl(var(--phoenix-gray-light))" />
                
                {/* Head */}
                <circle cx="237" cy="218" r="26" fill="hsl(var(--phoenix-gray-light))" />
                {/* Hair - short */}
                <path d="M211 212 Q211 190 237 185 Q263 190 263 212" fill="hsl(var(--foreground))" />
                {/* Eyes */}
                <circle cx="228" cy="218" r="2.5" fill="hsl(var(--foreground))" />
                <circle cx="246" cy="218" r="2.5" fill="hsl(var(--foreground))" />
                {/* Smile */}
                <path d="M228 228 Q237 235 246 228" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.5" strokeLinecap="round" />
                
                {/* Laptop on desk */}
                <rect x="205" y="310" width="55" height="5" rx="2" fill="hsl(var(--phoenix-gray))" />
                <rect x="210" y="290" width="45" height="22" rx="3" fill="hsl(var(--phoenix-gray))" />
                <rect x="213" y="293" width="39" height="16" rx="2" fill="hsl(var(--primary)/0.2)" />
              </g>

              {/* === Chat bubbles between person 2 and 3 === */}
              <g className="animate-bounce" style={{ animationDuration: '4s' }}>
                <rect x="310" y="170" width="50" height="30" rx="10" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="1.5" />
                <circle cx="322" cy="185" r="4" fill="hsl(var(--primary))" />
                <circle cx="335" cy="185" r="4" fill="hsl(var(--accent))" />
                <circle cx="348" cy="185" r="4" fill="hsl(var(--phoenix-gold))" />
                <path d="M320 200 L315 210 L330 200" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="1.5" />
              </g>

              {/* === Person 3 - Woman standing (teal/green outfit) === */}
              <g>
                {/* Legs */}
                <rect x="360" y="340" width="11" height="55" rx="4" fill="hsl(var(--accent)/0.7)" />
                <rect x="382" y="340" width="11" height="55" rx="4" fill="hsl(var(--accent)/0.7)" />
                {/* Shoes - heels */}
                <rect x="356" y="390" width="18" height="8" rx="3" fill="hsl(var(--foreground))" />
                <rect x="378" y="390" width="18" height="8" rx="3" fill="hsl(var(--foreground))" />
                
                {/* Body - teal top */}
                <rect x="348" y="250" width="55" height="45" rx="10" fill="hsl(var(--accent)/0.8)" />
                {/* Skirt / lower body */}
                <path d="M348 295 L340 340 L410 340 L405 295" fill="hsl(var(--accent)/0.6)" />
                {/* Arms */}
                <path d="M348 260 L330 280 L335 285 L350 268" fill="hsl(var(--accent)/0.8)" />
                <path d="M403 258 L425 240" stroke="hsl(var(--accent)/0.8)" strokeWidth="8" strokeLinecap="round" />
                {/* Hands */}
                <circle cx="328" cy="282" r="5" fill="hsl(var(--phoenix-gray-light))" />
                <circle cx="428" cy="237" r="5" fill="hsl(var(--phoenix-gray-light))" />
                {/* Handbag */}
                <rect x="325" y="282" width="12" height="18" rx="3" fill="hsl(var(--foreground)/0.8)" />
                
                {/* Head */}
                <circle cx="375" cy="218" r="24" fill="hsl(var(--phoenix-gray-light))" />
                {/* Long hair */}
                <path d="M351 215 Q350 190 375 182 Q400 190 399 215" fill="hsl(var(--foreground))" />
                <path d="M351 215 L348 255" stroke="hsl(var(--foreground))" strokeWidth="6" strokeLinecap="round" />
                <path d="M399 215 L402 255" stroke="hsl(var(--foreground))" strokeWidth="6" strokeLinecap="round" />
                {/* Glasses */}
                <rect x="362" y="213" width="12" height="10" rx="5" stroke="hsl(var(--foreground))" strokeWidth="1.5" fill="none" />
                <rect x="378" y="213" width="12" height="10" rx="5" stroke="hsl(var(--foreground))" strokeWidth="1.5" fill="none" />
                <line x1="374" y1="218" x2="378" y2="218" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
                {/* Eyes */}
                <circle cx="368" cy="218" r="2" fill="hsl(var(--foreground))" />
                <circle cx="384" cy="218" r="2" fill="hsl(var(--foreground))" />
                {/* Smile */}
                <path d="M368 228 Q375 233 382 228" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.5" strokeLinecap="round" />
              </g>

              {/* === Person 4 - Woman sitting right (coral/orange outfit) === */}
              <g>
                {/* Chair */}
                <rect x="520" y="340" width="8" height="50" rx="2" fill="hsl(var(--phoenix-gray))" />
                <rect x="505" y="330" width="70" height="8" rx="3" fill="hsl(var(--phoenix-gray))" />
                <path d="M570 330 L570 280 Q570 270 560 270 L560 330" fill="none" stroke="hsl(var(--phoenix-gray))" strokeWidth="3" />
                
                {/* Body - coral/orange dress */}
                <rect x="510" y="248" width="50" height="55" rx="10" fill="hsl(var(--primary)/0.85)" />
                {/* Arms */}
                <rect x="498" y="260" width="15" height="8" rx="4" fill="hsl(var(--primary)/0.85)" />
                <rect x="558" y="258" width="25" height="8" rx="4" fill="hsl(var(--primary)/0.85)" />
                {/* Hands */}
                <circle cx="496" cy="264" r="5" fill="hsl(var(--phoenix-gray-light))" />
                <circle cx="585" cy="260" r="5" fill="hsl(var(--phoenix-gray-light))" />
                
                {/* Head */}
                <circle cx="535" cy="216" r="24" fill="hsl(var(--phoenix-gray-light))" />
                {/* Hair - updo */}
                <path d="M511 212 Q510 188 535 180 Q560 188 559 212" fill="hsl(var(--foreground))" />
                <circle cx="535" cy="178" r="8" fill="hsl(var(--foreground))" />
                {/* Eyes */}
                <circle cx="526" cy="216" r="2.5" fill="hsl(var(--foreground))" />
                <circle cx="544" cy="216" r="2.5" fill="hsl(var(--foreground))" />
                {/* Smile */}
                <path d="M526 226 Q535 232 544 226" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.5" strokeLinecap="round" />
                
                {/* Coffee cup in hand */}
                <rect x="580" y="248" width="14" height="18" rx="4" fill="hsl(var(--phoenix-gold))" />
                <rect x="578" y="245" width="18" height="4" rx="2" fill="hsl(var(--phoenix-gold))" />
                {/* Steam */}
                <path d="M585 240 Q588 232 585 225" stroke="hsl(var(--phoenix-gray)/0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <path d="M590 238 Q593 230 590 222" stroke="hsl(var(--phoenix-gray)/0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                
                {/* Laptop on desk */}
                <rect x="510" y="310" width="55" height="5" rx="2" fill="hsl(var(--phoenix-gray))" />
                <rect x="515" y="290" width="45" height="22" rx="3" fill="hsl(var(--phoenix-gray))" />
                <rect x="518" y="293" width="39" height="16" rx="2" fill="hsl(var(--accent)/0.3)" />
              </g>

              {/* === Desk === */}
              <rect x="50" y="325" width="600" height="10" rx="5" fill="hsl(var(--phoenix-gray-light))" />
              <rect x="50" y="335" width="600" height="4" rx="2" fill="hsl(var(--phoenix-gray)/0.3)" />

              {/* Desk legs */}
              <rect x="80" y="335" width="8" height="60" rx="2" fill="hsl(var(--phoenix-gray))" />
              <rect x="612" y="335" width="8" height="60" rx="2" fill="hsl(var(--phoenix-gray))" />

              {/* Trash can */}
              <rect x="42" y="360" width="20" height="30" rx="3" fill="hsl(var(--phoenix-gray)/0.4)" />
              <rect x="40" y="356" width="24" height="5" rx="2" fill="hsl(var(--phoenix-gray)/0.5)" />

              {/* Plant on right */}
              <rect x="640" y="350" width="14" height="40" rx="4" fill="hsl(var(--phoenix-gray)/0.5)" />
              <ellipse cx="647" cy="345" rx="18" ry="22" fill="hsl(var(--accent)/0.3)" />
              <ellipse cx="640" cy="340" rx="10" ry="15" fill="hsl(var(--accent)/0.25)" />
              <ellipse cx="655" cy="338" rx="10" ry="14" fill="hsl(var(--accent)/0.2)" />
              <line x1="647" y1="345" x2="647" y2="320" stroke="hsl(var(--accent)/0.4)" strokeWidth="2" />

              {/* Floor line */}
              <line x1="20" y1="398" x2="680" y2="398" stroke="hsl(var(--border))" strokeWidth="1.5" />
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
