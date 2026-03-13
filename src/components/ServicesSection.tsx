import { ShieldCheck, Home, Building2, PiggyBank, FileText, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const services = [
  {
    icon: ShieldCheck,
    title: "Protection",
    description: "Comprehensive life insurance, critical illness cover, and income protection to safeguard your family's future.",
    color: "primary" as const,
    href: "/services/protection",
  },
  {
    icon: Home,
    title: "Mortgage",
    description: "Expert mortgage advice for first-time buyers, remortgages, buy-to-let, and commercial properties.",
    color: "accent" as const,
    href: "/services/mortgage",
  },
  {
    icon: Building2,
    title: "Commercial Lending",
    description: "Tailored business loans, asset finance, invoice finance, and property development funding.",
    color: "primary" as const,
    href: "/services/commercial-lending",
  },
  {
    icon: PiggyBank,
    title: "Pensions",
    description: "Personal and workplace pensions, SIPPs, pension drawdown, and transfer services for a secure retirement.",
    color: "accent" as const,
    href: "/services/pensions",
  },
  {
    icon: FileText,
    title: "Wills & Estate Planning",
    description: "Professional will writing, trusts, power of attorney, and inheritance tax planning services.",
    color: "primary" as const,
    href: "/services/wills-estate-planning",
  },
];

const ServicesSection = () => {
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
    <section className="py-20 bg-gradient-to-br from-phoenix-gray-light/50 via-background to-phoenix-green-light/30" ref={ref} id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Customised Financial <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">Solutions</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            It's sometimes not that easy to deal with the complexities involved with personal finances. With a professional financial adviser by your side, it becomes truly easy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const isPrimary = service.color === "primary";
            const isHovered = hoveredIdx === index;
            return (
              <div
                key={service.title}
                className={`group relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-xl overflow-hidden cursor-pointer ${
                  visible ? 'animate-float-up' : 'opacity-0'
                } ${isPrimary ? 'hover:border-primary/30' : 'hover:border-accent/30'}`}
                style={{ animationDelay: `${index * 0.12}s` }}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className={`absolute top-0 left-0 w-full h-1 transform transition-transform duration-500 origin-left ${isHovered ? 'scale-x-100' : 'scale-x-0'} ${isPrimary ? 'bg-primary' : 'bg-accent'}`} />

                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                  isPrimary ? 'bg-primary/10 group-hover:bg-primary' : 'bg-accent/10 group-hover:bg-accent'
                }`}>
                  <service.icon size={28} className={`transition-colors duration-300 ${
                    isPrimary ? 'text-primary group-hover:text-primary-foreground' : 'text-accent group-hover:text-accent-foreground'
                  }`} />
                </div>

                <h3 className={`text-xl font-bold text-foreground mb-3 transition-colors ${
                  isPrimary ? 'group-hover:text-primary' : 'group-hover:text-accent'
                }`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
                <NavLink to={service.href} className={`inline-flex items-center gap-2 font-semibold text-sm hover:gap-3 transition-all ${
                  isPrimary ? 'text-primary' : 'text-accent'
                }`}>
                  Learn More <ArrowRight size={16} />
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
