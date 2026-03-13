import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    text: "Phoenix Finserv transformed our financial planning. Their expertise in commercial lending helped us secure the perfect funding for our expansion. Truly outstanding service!",
    avatar: "SJ",
  },
  {
    name: "James Mitchell",
    role: "First-Time Buyer",
    text: "The mortgage advice I received was incredible. They walked me through every step and found me a deal I never thought possible. Highly recommend their services.",
    avatar: "JM",
  },
  {
    name: "Emma Thompson",
    role: "Retiree",
    text: "Their pension advisory service gave me complete peace of mind. Professional, caring, and always available to answer my questions. Thank you, Phoenix Finserv!",
    avatar: "ET",
  },
];

const TestimonialSection = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [startAuto]);

  const goTo = (dir: 'left' | 'right') => {
    setActiveIndex(prev => {
      if (dir === 'right') return (prev + 1) % testimonials.length;
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
    startAuto();
  };

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Our <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">Clients</span> Say
          </h2>
        </div>

        <div className={`max-w-3xl mx-auto relative ${visible ? 'animate-float-up' : 'opacity-0'}`}>
          {/* Navigation arrows */}
          <button onClick={() => goTo('left')} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => goTo('right')} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
            <ChevronRight size={18} />
          </button>

          <div className="relative bg-card rounded-3xl p-10 md:p-14 border border-border shadow-lg overflow-hidden">
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Quote size={24} className="text-primary-foreground" />
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {testimonials.map((t) => (
                  <div key={t.name} className="w-full flex-shrink-0">
                    <p className="text-lg md:text-xl text-foreground leading-relaxed italic mb-8 font-handwritten text-2xl md:text-3xl">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                        {t.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-foreground">{t.name}</p>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActiveIndex(i); startAuto(); }}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'bg-primary w-8' : 'bg-border hover:bg-muted-foreground w-3'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
