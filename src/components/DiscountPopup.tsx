import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";

const DiscountPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-foreground/60 backdrop-blur-sm ${
          isClosing ? "opacity-0 transition-opacity duration-300" : "animate-overlay-in"
        }`}
        onClick={handleClose}
      />

      {/* Popup - perfectly centered */}
      <div
        className={`relative w-[90%] max-w-md rounded-2xl border border-phoenix-gray-dark/30 bg-[#f4f6f8] p-8 text-phoenix-gray-dark shadow-2xl ${
          isClosing ? "animate-popup-exit" : "animate-popup-enter"
        }`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="mb-2 flex items-center justify-center gap-2">
            <Sparkles className="h-5 w-5 text-phoenix-green" />
            <span className="font-body text-sm font-semibold uppercase tracking-widest text-primary">
              Limited Offer
            </span>
            <Sparkles className="h-5 w-5 text-phoenix-green" />
          </div>

          <h3 className="font-display text-2xl font-bold text-phoenix-gray-dark">
            Revitalise Your Finances
          </h3>

          {/* Big 30% OFF */}
          <div className="my-6">
            <span className="font-display text-7xl font-black text-phoenix-green animate-glow-pulse inline-block">
              30%
            </span>
            <span className="ml-2 font-display text-4xl font-bold text-phoenix-green">
              OFF
            </span>
          </div>

          <p className="mb-6 font-body text-base text-phoenix-gray-dark/80">
            First <span className="font-semibold text-phoenix-green">3 months</span> of Premium Financial Services
          </p>

          <button
            onClick={handleClose}
            className="w-full rounded-xl bg-phoenix-green px-6 py-3.5 font-body text-sm font-semibold text-white transition-all hover:brightness-110 hover:shadow-lg hover:shadow-phoenix-green/30"
          >
            Claim Your Discount
          </button>

          <p className="mt-3 font-body text-xs text-phoenix-gray-dark/70">
            *Terms & conditions apply. Offer valid for new clients only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscountPopup;