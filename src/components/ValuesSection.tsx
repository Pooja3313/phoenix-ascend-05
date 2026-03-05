import { Shield, Award, Users, Heart, Target, Lightbulb } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest standards of honesty and transparency in all our financial dealings.",
  },
  {
    icon: Award,
    title: "Professionalism",
    description: "Our team of certified professionals delivers expert advice with precision and care.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your financial goals are our priority. We tailor every solution to your unique needs.",
  },
  {
    icon: Heart,
    title: "Trust",
    description: "Building lasting relationships through reliable, consistent, and dedicated service.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every interaction, ensuring the best outcomes for our clients.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing modern solutions and technology to provide cutting-edge financial services.",
  },
];

const ValuesSection = () => {
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
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Our Core Values</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="font-handwritten text-4xl md:text-5xl text-primary">Pillars</span> of Our Values
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            At Phoenix Finserv, our values define who we are and how we serve our clients every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group p-8 rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-500 cursor-pointer ${
                visible ? 'animate-float-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-phoenix-green group-hover:scale-110 transition-all duration-300 icon-hover-bounce">
                <value.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
