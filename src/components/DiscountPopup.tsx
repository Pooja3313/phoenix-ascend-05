import { useState, useEffect } from "react";
import { X, Sparkles, Gift } from "lucide-react";

const DiscountPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => { setIsOpen(false); setIsClosing(false); }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className={`absolute inset-0 bg-foreground/60 backdrop-blur-sm ${isClosing ? "opacity-0 transition-opacity duration-300" : "animate-overlay-in"}`} onClick={handleClose} />

      <div className={`relative w-[90%] max-w-md rounded-3xl overflow-hidden shadow-2xl ${isClosing ? "animate-popup-exit" : "animate-popup-enter"}`}>
        {/* Top gradient bar */}
        <div className="h-2 bg-gradient-to-r from-primary via-accent to-phoenix-gold" />
        
        <div className="bg-card p-8 relative">
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[80px]" />
          
          <button onClick={handleClose} className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground transition-all hover:bg-destructive/10 hover:text-destructive hover:rotate-90 duration-300 z-10">
            <X className="h-5 w-5" />
          </button>

          <div className="text-center relative z-10">
            {/* Gift icon */}
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 animate-bounce" style={{ animationDuration: '2s' }}>
              <Gift className="h-8 w-8 text-primary" />
            </div>

            <div className="flex items-center justify-center gap-2 mb-1">
              <Sparkles className="h-4 w-4 text-phoenix-gold" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Special Offer</span>
              <Sparkles className="h-4 w-4 text-phoenix-gold" />
            </div>

            <h3 className="font-handwritten text-3xl text-foreground mb-1">
              Revitalise Your Finances
            </h3>

            <div className="my-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-2xl" />
              <span className="font-handwritten text-8xl font-bold text-primary inline-block relative">
                30%
                <span className="absolute -top-2 -right-6 text-lg font-sans font-bold text-accent bg-accent/10 px-2 py-1 rounded-lg">OFF</span>
              </span>
            </div>

            <p className="text-muted-foreground mb-6">
              First <span className="font-bold text-accent">3 months</span> of Premium Financial Services
            </p>

            <button
              onClick={handleClose}
              className="w-full rounded-xl bg-primary px-6 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-phoenix-orange-dark hover:shadow-lg hover:shadow-primary/30 uppercase tracking-wider group"
            >
              Claim Your Discount
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <p className="mt-3 text-xs text-muted-foreground">
              *Terms & conditions apply. New clients only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountPopup;
