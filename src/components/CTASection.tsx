import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--phoenix-gold)/0.2),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to <span className="font-handwritten text-4xl md:text-5xl">Secure</span> Your Future?
        </h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
          Get in touch today for a free, no-obligation consultation with one of our expert financial advisors.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-lg px-8 py-6 shadow-xl group">
            Book Free Consultation
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-6">
            <Phone className="mr-2" size={20} />
            Call Us Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
