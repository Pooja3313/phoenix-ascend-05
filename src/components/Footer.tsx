import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram, ArrowRight } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const serviceLinks = ["Protection", "Mortgage", "Commercial Lending", "Pensions", "Wills & Estate Planning"];
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
      {/* Animated top line */}
      <div className="glow-line h-1 bg-gradient-to-r from-primary via-accent to-phoenix-gold" />

      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/3 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute top-20 left-10 text-primary/[0.03] text-[200px] font-bold animate-pound-rotate select-none pointer-events-none">£</div>

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Company Info */}
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
                <li key={link}>
                  <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                    {link}
                  </a>
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
                  <a href={link.href} className="text-sm text-primary-foreground/60 hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                    {link.name}
                  </a>
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

        {/* Policy Links Bar */}
        <div className="border-t border-primary-foreground/10 pt-6 pb-4">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {policyLinks.map((link) => (
              <a key={link.name} href={link.href} className="flex items-center gap-2 text-xs text-primary-foreground/50 hover:text-primary transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">© {new Date().getFullYear()} Phoenix Finserv. All rights reserved.</p>
          <p className="text-xs text-primary-foreground/40">Authorised and Regulated by the Financial Conduct Authority</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
