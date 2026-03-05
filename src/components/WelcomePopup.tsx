import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-foreground/60 z-[80] backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[90] w-full max-w-md animate-fade-in">
        <div className="bg-background rounded-2xl shadow-2xl overflow-hidden border border-border">
          {/* Orange top strip */}
          <div className="bg-primary h-2" />

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-1 hover:bg-muted rounded-full transition-colors z-10"
          >
            <X size={20} className="text-muted-foreground" />
          </button>

          <div className="p-8 text-center">
            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="text-primary" size={28} />
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-2">
              <span className="font-handwritten text-3xl text-primary">Revitalise</span>
              <br />Your Finances
            </h2>

            <div className="my-5 py-4 px-6 bg-primary/5 rounded-xl border border-primary/10">
              <p className="text-4xl font-bold text-primary">30% OFF</p>
              <p className="text-sm text-muted-foreground mt-1">First 3 months of Premium Financial Services</p>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Expert protection, mortgage, and pension advice tailored to your needs.
            </p>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-phoenix-orange-dark transition-colors shadow-lg text-lg"
            >
              Claim Your Offer
            </button>

            <p className="text-xs text-muted-foreground mt-4">
              *Terms and conditions apply. Limited time offer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePopup;
