import { useEffect, useRef, useState } from "react";
import { Calendar, Users, ThumbsUp, Award } from "lucide-react";

const stats = [
  { icon: Calendar, value: 15, suffix: "+", label: "Years Experience", color: "text-primary" },
  { icon: Users, value: 2500, suffix: "+", label: "Happy Clients", color: "text-accent" },
  { icon: ThumbsUp, value: 98, suffix: "%", label: "Client Satisfaction", color: "text-primary" },
  { icon: Award, value: 50, suffix: "M+", prefix: "£", label: "Funds Managed", color: "text-accent" },
];

const useCountUp = (end: number, start: boolean, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, end, duration]);
  return count;
};

const StatItem = ({ stat, visible, index }: { stat: typeof stats[0]; visible: boolean; index: number }) => {
  const count = useCountUp(stat.value, visible);
  return (
    <div
      className={`group text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 ${visible ? 'animate-float-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 icon-hover-bounce">
        <stat.icon size={28} className="text-primary group-hover:text-accent-foreground transition-colors" />
      </div>
      <p className={`text-4xl md:text-5xl font-bold ${stat.color} mb-1 font-handwritten`}>
        {stat.prefix || ""}{count.toLocaleString()}{stat.suffix}
      </p>
      <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
    </div>
  );
};

const StatsCounter = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-phoenix-gray-dark relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)]" />
      <div className="absolute top-10 right-20 text-primary/5 text-[150px] font-bold animate-pound-rotate select-none pointer-events-none">£</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Our Impact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Numbers That <span className="font-handwritten text-4xl md:text-5xl text-primary pen-underline">Speak</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} visible={visible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
