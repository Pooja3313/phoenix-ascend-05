import { ShieldCheck, Home, Building2, PiggyBank, FileText, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: ShieldCheck,
    title: "Protection",
    description: "Comprehensive life insurance, critical illness cover, and income protection to safeguard your family's future.",
    step: "01",
  },
  {
    icon: Home,
    title: "Mortgage",
    description: "Expert mortgage advice for first-time buyers, remortgages, buy-to-let, and commercial properties.",
    step: "02",
  },
  {
    icon: Building2,
    title: "Commercial Lending",
    description: "Tailored business loans, asset finance, invoice finance, and property development funding.",
    step: "03",
  },
  {
    icon: PiggyBank,
    title: "Pensions",
    description: "Personal and workplace pensions, SIPPs, pension drawdown, and transfer services for a secure retirement.",
    step: "04",
  },
  {
    icon: FileText,
    title: "Wills & Estate Planning",
    description: "Professional will writing, trusts, power of attorney, and inheritance tax planning services.",
    step: "05",
  },
];

const ServicesSection = () => {
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
    <section className="py-20 bg-muted/50" ref={ref} id="journey">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our <span className="font-handwritten text-4xl md:text-5xl text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Step by step, we guide you through every stage of your financial journey.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20" />

          <div className="space-y-12 lg:space-y-0">
            {services.map((service, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={service.title}
                  className={`relative lg:flex items-center ${isLeft ? '' : 'lg:flex-row-reverse'} ${
                    visible ? 'animate-float-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Content */}
                  <div className={`lg:w-1/2 ${isLeft ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                    <div className="group bg-card p-8 rounded-2xl border border-border hover:shadow-xl transition-all duration-500 hover:border-primary/30">
                      <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-phoenix-green group-hover:scale-110 transition-all duration-300 icon-hover-bounce shrink-0">
                          <service.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                      <a href="#" className={`inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                        Learn More <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Step number (center) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground items-center justify-center font-bold text-sm shadow-lg z-10">
                    {service.step}
                  </div>

                  {/* Empty space for other side */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
