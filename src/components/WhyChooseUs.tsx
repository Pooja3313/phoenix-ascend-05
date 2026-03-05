import { CheckCircle, TrendingUp, Clock, Headphones } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    icon: CheckCircle,
    title: "FCA Regulated",
    description: "Fully authorised and regulated by the Financial Conduct Authority for your peace of mind.",
  },
  {
    icon: TrendingUp,
    title: "Expert Advisors",
    description: "Our team of certified financial advisors bring decades of combined experience.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Fast processing and approvals to ensure you never miss an opportunity.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal account manager and ongoing support throughout your financial journey.",
  },
];

const WhyChooseUs = () => {
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
    <section className="py-20 bg-phoenix-gray-dark text-primary-foreground relative overflow-hidden" ref={ref}>
      {/* Decorative bg elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-phoenix-green/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            The Phoenix <span className="font-handwritten text-4xl md:text-5xl text-primary">Advantage</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`text-center group ${visible ? 'animate-float-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-phoenix-green group-hover:scale-110 transition-all duration-300 icon-hover-bounce">
                <reason.icon size={32} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
