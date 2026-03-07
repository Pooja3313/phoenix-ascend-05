import { ArrowRight, Award, Users, Globe, Briefcase } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const badges = [
  { icon: Award, label: "Living Wage Employer" },
  { icon: Users, label: "Disability Confident" },
  { icon: Globe, label: "Climate Positive Website" },
];

const AboutSection = () => {
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
    <section className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative floating elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/5 animate-pound-morph pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-accent/5 animate-pound-morph pointer-events-none" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 right-10 text-primary/[0.03] text-[180px] font-bold animate-pound-rotate select-none pointer-events-none">£</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className={`flex-1 ${visible ? 'animate-float-up' : 'opacity-0'}`}>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Who are Phoenix Finserv?
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Comprehensive{" "}
              <span className="font-handwritten text-4xl md:text-5xl lg:text-6xl text-primary pen-underline">
                Enterprise
              </span>
              <br />
              Services and Support
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl text-base">
              Phoenix Finserv is a financial services firm with a difference — standing out from the crowd
              of other advisory services. We develop and build lasting bonds with clients, implementing
              strong financial structures and plans to help them save time and money.
            </p>

            <div className={`${visible ? 'animate-float-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-bold text-foreground mb-2 uppercase tracking-wide">Our Beginnings</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl text-sm">
                Manish Shah formed Phoenix Accountancy Service Ltd in 2013 along with Mayuri Patel, after
                realising that it is not just the size and scale of a business that determines the level of
                service delivered to clients but more the ability to meet and manage clients' requirements
                and expectations.
              </p>
            </div>

            <a
              href="#"
              className={`inline-flex items-center gap-2 text-primary font-semibold text-base group hover:gap-3 transition-all duration-300 ${visible ? 'animate-float-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.35s' }}
            >
              Explore more
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Accreditation Badges */}
            <div className={`flex flex-wrap items-center gap-6 mt-10 ${visible ? 'animate-float-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              {badges.map((badge, i) => (
                <div
                  key={badge.label}
                  className="group flex items-center gap-3 px-5 py-3 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-500 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300 icon-hover-bounce">
                    <badge.icon size={20} className="text-primary group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <span className="text-xs font-semibold text-foreground">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className={`flex-1 ${visible ? 'animate-float-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Decorative frame elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-3xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/20 rounded-3xl" />

              {/* Dots pattern */}
              <div className="absolute -top-8 -right-8 grid grid-cols-5 gap-2">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-primary/15" />
                ))}
              </div>

              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-muted aspect-[4/3]">
                {/* Replace src with your team image */}
                <img
                  src="/images/about-team.jpg"
                  alt="Phoenix Finserv Team"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback gradient if image not found
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.classList.add('about-fallback-bg');
                  }}
                />
                {/* Fallback content when no image */}
                <div className="about-fallback-content absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-phoenix-gray-dark via-foreground to-phoenix-gray-dark text-primary-foreground p-8">
                  <Briefcase size={64} className="text-primary mb-4 animate-pound-rotate" style={{ animationDuration: '10s' }} />
                  <p className="font-handwritten text-3xl text-primary text-center">Your Team Photo Here</p>
                  <p className="text-primary-foreground/50 text-sm mt-2">Add image at /public/images/about-team.jpg</p>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl border border-border p-5 animate-float-up" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <Users size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">2013</p>
                    <p className="text-xs text-muted-foreground">Est. Year</p>
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -top-6 -right-6 bg-primary rounded-2xl shadow-xl p-4 animate-float-up" style={{ animationDelay: '1s' }}>
                <p className="text-primary-foreground font-bold text-lg">15+</p>
                <p className="text-primary-foreground/70 text-xs">Years of Trust</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
