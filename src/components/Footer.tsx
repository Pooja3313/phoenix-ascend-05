import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram, ArrowRight } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const serviceLinks = [
    { name: "Protection", href: "/services/protection" },
    { name: "Mortgage", href: "/services/mortgage" },
    { name: "Commercial Lending", href: "/services/commercial-lending" },
    { name: "Pensions", href: "/services/pensions" },
    { name: "Wills & Estate Planning", href: "/services/wills-estate-planning" },
  ];
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Your Journey", href: "/our-journey" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Refer a Friend", href: "/refer-a-friend" },
  ];
  const policyLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Complaints Procedure", href: "/complaints-procedure" },
    { name: "Fair Treatment of Customers", href: "/fair-treatment" },
    { name: "Financial Ombudsman Service", href: "/financial-ombudsman-service" },
  ];

  return (
    <footer className="relative bg-phoenix-gray-dark text-primary-foreground overflow-hidden">
      <div className="glow-line h-1 bg-gradient-to-r from-primary via-accent to-phoenix-gold" />
      
      {/* Animated particles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-2 h-2 rounded-full bg-primary/20 animate-bounce" style={{ top: '20%', left: '10%', animationDuration: '3s' }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-accent/20 animate-bounce" style={{ top: '60%', left: '80%', animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute w-2.5 h-2.5 rounded-full bg-phoenix-gold/15 animate-bounce" style={{ top: '40%', left: '50%', animationDuration: '3.5s', animationDelay: '0.5s' }} />
        <div className="absolute w-1 h-1 rounded-full bg-primary/15 animate-bounce" style={{ top: '80%', left: '30%', animationDuration: '5s', animationDelay: '2s' }} />
        <div className="absolute w-2 h-2 rounded-full bg-accent/15 animate-bounce" style={{ top: '10%', left: '70%', animationDuration: '4.5s', animationDelay: '1.5s' }} />
      </div>

      {/* £ animation */}
      <div className="absolute top-20 left-10 text-primary/[0.03] text-[200px] font-bold animate-pound-rotate select-none pointer-events-none">£</div>
      <div className="absolute bottom-10 right-10 text-accent/[0.03] text-[120px] font-bold animate-pound-rotate select-none pointer-events-none" style={{ animationDelay: '3s' }}>£</div>

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">PF</span>
              </div>
              <div>
                <span className="font-bold text-lg">Phoenix Finserv</span>
                <span className="block text-xs text-primary-foreground/50 font-handwritten text-base">Helping secure dreams</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed mb-6">
              Trusted financial services providing expert advice in protection, mortgages, pensions, and estate planning across the United Kingdom.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 icon-hover-bounce">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-5 relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <NavLink to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-accent rounded-full" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <NavLink to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-5 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-phoenix-gold rounded-full" />
            </h3>
            <div className="space-y-4 mb-6">
              <a href="mailto:accountants@phoenix-accountancy.co.uk" className="flex items-start gap-3 text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                <Mail size={16} className="mt-0.5 shrink-0" />
                accountants@phoenix-accountancy.co.uk
              </a>
              <a href="tel:+442079932737" className="flex items-start gap-3 text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                <Phone size={16} className="mt-0.5 shrink-0" />
                +44 (0) 2079 932 737
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/60">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                London, United Kingdom
              </div>
            </div>
            <h4 className="font-semibold text-sm mb-3">Newsletter</h4>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-primary-foreground/10 rounded-lg text-sm text-primary-foreground placeholder:text-primary-foreground/30 border border-primary-foreground/10 focus:border-primary outline-none transition-colors"
              />
              <button className="px-4 py-2 bg-primary rounded-lg text-primary-foreground hover:bg-phoenix-orange-dark transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Policy Links */}
        <div className="border-t border-primary-foreground/10 pt-6 pb-4">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {policyLinks.map((link) => (
              <NavLink key={link.name} to={link.href} className="flex items-center gap-2 text-xs text-primary-foreground/50 hover:text-primary transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">© {new Date().getFullYear()} Phoenix Finserv. All rights reserved.</p>
          <p className="text-xs text-primary-foreground/40">Authorised and Regulated by the Financial Conduct Authority</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
