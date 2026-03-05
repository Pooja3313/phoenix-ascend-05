import { X, Mail, Phone, MapPin, Clock, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

interface RightSidebarProps {
  open: boolean;
  onClose: () => void;
}

const RightSidebar = ({ open, onClose }: RightSidebarProps) => {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-foreground/50 z-[60] transition-opacity" onClick={onClose} />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full max-w-sm bg-background z-[70] shadow-2xl animate-slide-in-right overflow-y-auto">
        <div className="p-6">
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-colors">
            <X size={24} />
          </button>

          {/* Logo */}
          <div className="mb-8 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">PF</span>
              </div>
              <div>
                <span className="font-bold text-xl text-foreground">Phoenix Finserv</span>
                <span className="block text-xs text-muted-foreground italic">Helping secure dreams</span>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-foreground mb-3">About Us</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Phoenix Finserv provides comprehensive financial services including protection, mortgages,
              pensions, and estate planning. We help you secure your dreams with expert advice and
              personalised solutions.
            </p>
          </div>

          {/* Contact Details */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-foreground mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <a href="mailto:accountants@phoenix-accountancy.co.uk" className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-phoenix-green-light transition-colors">
                  <Mail size={18} className="text-primary group-hover:text-phoenix-green transition-colors" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">Email</span>
                  <p className="text-sm text-foreground">accountants@phoenix-accountancy.co.uk</p>
                </div>
              </a>

              <a href="tel:+442079932737" className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-phoenix-green-light transition-colors">
                  <Phone size={18} className="text-primary group-hover:text-phoenix-green transition-colors" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">Phone</span>
                  <p className="text-sm text-foreground">+44 (0) 2079 932 737</p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">Address</span>
                  <p className="text-sm text-foreground">London, United Kingdom</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock size={18} className="text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">Working Hours</span>
                  <p className="text-sm text-foreground">Mon–Fri: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-foreground mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 icon-hover-bounce"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
            <h4 className="font-bold text-foreground mb-2">Free Consultation</h4>
            <p className="text-sm text-muted-foreground mb-4">Book a free consultation with our financial experts today.</p>
            <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-phoenix-orange-dark transition-colors shadow-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
