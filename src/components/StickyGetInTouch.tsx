const StickyGetInTouch = () => {
  return (
    <a
      href="#contact"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-primary text-primary-foreground px-3 py-6 rounded-l-lg shadow-xl hover:bg-phoenix-orange-dark transition-all duration-300 hover:pr-5 group"
      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
    >
      <span className="text-sm font-bold tracking-widest uppercase group-hover:tracking-[0.2em] transition-all">
        Get in Touch
      </span>
    </a>
  );
};

export default StickyGetInTouch;
