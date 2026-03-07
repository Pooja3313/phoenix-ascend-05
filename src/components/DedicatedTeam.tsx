import { useEffect, useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Abhijit Jamdar",
    role: "Head of Payroll Department",
    avatar: "AJ",
    color: "bg-primary",
    quote: "I have been working with Phoenix for the last 7 years and still love working here. The culture is transparent and everyone, irrespective of their position, is given a chance to be heard. It is a young organisation with a contemporary, innovative approach that distinguishes it from other firms.",
  },
  {
    name: "Himani Paranjape",
    role: "Senior Accountant",
    avatar: "HP",
    color: "bg-accent",
    quote: "It feels like I have been here for several years even though I only joined Phoenix 1 year ago. The learning is great through practical experiences and well documented processes which provides clarity on how to do things. It provides a very conducive environment to learn, grow and prosper.",
  },
  {
    name: "Brijal Mandaliya",
    role: "Customer Support & Compliance",
    avatar: "BM",
    color: "bg-phoenix-gold",
    quote: "The experiences I have gained along the way are irreplaceable and invaluable. I find the culture open and transparent enough to encourage thinking out loud. Working around like-minded people helps me get outside my comfort zone and enhance my knowledge.",
  },
  {
    name: "Mayuri Patel",
    role: "Co-Founder & Director",
    avatar: "MP",
    color: "bg-primary",
    quote: "At Phoenix, we believe that every client deserves personalised attention and world-class financial advice. Our team is dedicated to building lasting relationships through trust, expertise, and genuine care for our clients' success.",
  },
];

const DedicatedTeam = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (dir: 'left' | 'right') => {
    const next = dir === 'right' 
      ? Math.min(activeIndex + 1, teamMembers.length - 1)
      : Math.max(activeIndex - 1, 0);
    setActiveIndex(next);
  };

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-background" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 30%, 50% 100%, 0 30%)' }} />
      
      <div className="container mx-auto px-4 relative z-10 pt-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Our Dedicated and Friendly Team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            We may not be local, but we are only ever a{" "}
            <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">phone call</span> away
          </h2>
        </div>

        {/* Team Cards Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={() => scrollTo('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-30"
            disabled={activeIndex === 0}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scrollTo('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-30"
            disabled={activeIndex === teamMembers.length - 1}
          >
            <ChevronRight size={20} />
          </button>

          <div className="overflow-hidden" ref={scrollRef}>
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * (100 / 3)}%)` }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div
                    className={`group relative bg-card rounded-3xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 hover:border-primary/30 ${visible ? 'animate-float-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {/* Top colored bar */}
                    <div className={`h-2 ${member.color}`} />
                    
                    {/* Header with avatar */}
                    <div className="relative px-6 pt-6 pb-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-full ${member.color} flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {member.avatar}
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">{member.name}</h3>
                          <p className="text-muted-foreground text-sm">{member.role}</p>
                        </div>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="px-6 pb-6">
                      <div className="relative">
                        <Quote size={20} className="text-primary/20 mb-2" />
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-6">
                          {member.quote}
                        </p>
                      </div>
                    </div>

                    {/* Bottom link */}
                    <div className="px-6 pb-6 flex items-center gap-2">
                      <a href="#" className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 icon-hover-bounce">
                        <Linkedin size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {teamMembers.map((_, i) => (
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
    </section>
  );
};

export default DedicatedTeam;
