import { Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Our <span className="font-handwritten text-4xl md:text-5xl text-primary">Clients</span> Say
          </h2>
        </div>

        <div className={`max-w-3xl mx-auto ${visible ? 'animate-float-up' : 'opacity-0'}`}>
          <div className="relative bg-card rounded-3xl p-10 md:p-14 border border-border shadow-lg">
            {/* Large quote mark */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Quote size={24} className="text-primary-foreground" />
              </div>
            </div>

            {/* Testimonial content */}
            <div className="transition-all duration-500">
              <p className="text-lg md:text-xl text-foreground leading-relaxed italic mb-8 font-handwritten text-2xl md:text-3xl">
                "{testimonials[activeIndex].text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonials[activeIndex].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'bg-primary w-8' : 'bg-border hover:bg-muted-foreground'
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
