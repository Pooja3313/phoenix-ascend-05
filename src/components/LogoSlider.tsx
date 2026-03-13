import { useEffect, useRef } from "react";

const logos = [
  { name: "TaxCalc", initials: "TC" },
  { name: "QuickBooks", initials: "QB" },
  { name: "FreshBooks", initials: "FB" },
  { name: "Xero", initials: "XR" },
  { name: "Sage", initials: "SG" },
  { name: "HMRC", initials: "HM" },
  { name: "FCA", initials: "FC" },
  { name: "Capium", initials: "CP" },
];

const LogoSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animId: number;
    let pos = 0;
    const speed = 0.5;
    const animate = () => {
      pos += speed;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="py-12 bg-muted/20 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-muted-foreground text-sm">
          Our advisers have experience working with leading platforms
        </p>
      </div>
      <div className="relative overflow-hidden" ref={scrollRef} style={{ scrollbarWidth: 'none' }}>
        <div className="flex items-center gap-12 w-max">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center gap-3 px-6 py-3 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer shrink-0"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <span className="text-sm font-bold text-primary group-hover:text-primary-foreground transition-colors">{logo.initials}</span>
              </div>
              <span className="text-foreground font-semibold text-sm group-hover:text-primary transition-colors">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
