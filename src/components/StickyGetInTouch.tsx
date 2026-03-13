import { Phone } from "lucide-react";
import { useState } from "react";

const StickyGetInTouch = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="/contact"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex items-center gap-0 group hidden sm:flex"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Expanded content on hover */}
      <div className={`bg-primary text-primary-foreground overflow-hidden transition-all duration-500 ease-out rounded-l-xl flex items-center ${hovered ? 'max-w-[200px] px-4 py-4' : 'max-w-0 px-0 py-4'}`}>
        <div className="whitespace-nowrap flex items-center gap-2">
          <Phone size={16} className="animate-pulse shrink-0" />
          <span className="text-sm font-semibold">Call Us Now</span>
        </div>
      </div>

      {/* Main tab */}
      <div className="bg-primary text-primary-foreground px-2 py-6 lg:px-3 lg:py-8 rounded-l-xl shadow-2xl hover:bg-phoenix-orange-dark transition-all duration-300 relative overflow-hidden"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary-foreground/0 via-primary-foreground/20 to-primary-foreground/0 translate-y-full group-hover:translate-y-[-100%] transition-transform duration-1000" />
        <span className="text-xs lg:text-sm font-bold tracking-[0.15em] uppercase relative z-10">
          Get in Touch
        </span>
      </div>
    </a>
  );
};

export default StickyGetInTouch;
