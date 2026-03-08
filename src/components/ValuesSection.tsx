import { useEffect, useRef, useState } from "react";

const prideValues = [
  {
    letter: "P",
    title: "Professional",
    subtitle: "Be Competent\nResourceful and Effective",
    quote: "\"We value our excellent reputation and are committed to maintaining the highest professional and ethical standards in our business affairs\"",
  },
  {
    letter: "R",
    title: "Respect",
    subtitle: "Be Courteous\nBe Considerate and\nPromote a Collaborative\nWork Environment",
    quote: "\"We emphasise everyone's contribution regardless of race, gender, religion, national origin, age, disability, gender identity, and sexual orientation\"",
  },
  {
    letter: "I",
    title: "Integrity",
    subtitle: "We Do What is Right\nand Create Trust\nAmong Peers and\nStakeholders",
    quote: "\"We believe in being honest and transparent in our work from the outset\"",
  },
  {
    letter: "D",
    title: "Driven",
    subtitle: "We Meet and Exceed\nServices Expectations\nwe Assume\nA 'Can do' Attitude",
    quote: "\"Our success is based on the quality and commitment of our colleagues\"",
  },
  {
    letter: "E",
    title: "Excellence",
    subtitle: "We Hold ourselves\nto the highest Standards\nof Performance",
    quote: "\"We continuously invest in talented accountants and innovative technology\"",
  },
];

const ValuesSection = () => {
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
    <section className="py-24 bg-phoenix-gray-dark text-primary-foreground relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-3">Our Core Values</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            We Take <span className="text-primary font-handwritten text-4xl md:text-5xl">P.R.I.D.E.</span> In Our Work
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {prideValues.map((value, index) => (
            <div
              key={value.letter}
              className={`group relative ${visible ? 'animate-float-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {/* Main card */}
              <div className="relative bg-primary-foreground/[0.04] border border-primary-foreground/10 rounded-2xl p-6 hover:border-primary/40 hover:bg-primary-foreground/[0.08] transition-all duration-500 h-full flex flex-col">
                {/* Big letter */}
                <div className="relative mb-4">
                  <span className="text-7xl md:text-8xl font-bold text-primary/80 group-hover:text-primary group-hover:scale-110 transition-all duration-500 inline-block leading-none">
                    {value.letter}
                  </span>
                  {/* Glow effect behind letter on hover */}
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3 text-primary-foreground group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-primary-foreground/60 leading-relaxed whitespace-pre-line mb-4 flex-1">
                  {value.subtitle}
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-primary/40 via-primary/20 to-transparent mb-4" />

                {/* Quote */}
                <p className="text-xs text-primary-foreground/40 italic leading-relaxed group-hover:text-primary-foreground/60 transition-colors duration-300">
                  {value.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
