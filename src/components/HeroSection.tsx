import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 animate-float-up" style={{ animationDelay: '0.1s' }}>
            Phoenix Finserv — Helping Secure Dreams
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-float-up" style={{ animationDelay: '0.3s' }}>
            Best Solution to{" "}
            <span className="highlighter-mark text-primary">Manage</span>{" "}
            Your Finance &{" "}
            <span className="font-handwritten text-5xl md:text-6xl lg:text-7xl text-primary pen-underline">
              Accounting
            </span>
          </h1>

          <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl leading-relaxed animate-float-up" style={{ animationDelay: '0.5s' }}>
            From protection and mortgages to pensions and estate planning — we provide expert
            financial advice to secure your future and your family's dreams.
          </p>

          <div className="flex flex-wrap gap-4 animate-float-up" style={{ animationDelay: '0.7s' }}>
            <Button size="lg" className="bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all group">
              Contact Us
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-6">
              Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-14 animate-float-up" style={{ animationDelay: '0.9s' }}>
            {[
              { number: "15+", label: "Years Experience" },
              { number: "2,500+", label: "Happy Clients" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-primary">{stat.number}</p>
                <p className="text-sm text-primary-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
