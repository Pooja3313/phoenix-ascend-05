import { useEffect, useRef, useState } from "react";
import { Mail, Phone, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import RightSidebar from "./RightSidebar";

const services = [
  {
    name: "Protection",
    items: ["Life Insurance", "Critical Illness Cover", "Income Protection", "Family Protection", "Business Protection"],
  },
  {
    name: "Mortgage",
    items: ["First Time Buyers", "Remortgage", "Buy to Let", "Help to Buy", "Commercial Mortgages"],
  },
  {
    name: "Commercial Lending",
    items: ["Business Loans", "Asset Finance", "Invoice Finance", "Property Finance", "Development Finance"],
  },
  {
    name: "Pensions",
    items: ["Personal Pensions", "Workplace Pensions", "SIPP", "Pension Drawdown", "Pension Transfer"],
  },
  {
    name: "Wills & Estate Planning",
    items: ["Will Writing", "Trusts", "Power of Attorney", "Inheritance Tax Planning", "Estate Administration"],
  },
];

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Your Journey", href: "#journey" },
  { name: "Join Our Network", href: "#join-our-network" },
  { name: "Careers", href: "#careers" },
  { name: "Refer a Friend", href: "#refer-a-friend" },
];

const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      if (!servicesWrapRef.current) return;
      if (!servicesWrapRef.current.contains(e.target as Node)) setServicesOpen(false);
    };

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Top Bar - gray: email & phone left, IN right */}
      <div className="bg-phoenix-gray-dark text-white shrink-0">
        <div className="container mx-auto flex items-center justify-between px-4 py-2.5 text-sm min-w-0">
          <div className="flex items-center gap-4 sm:gap-6 min-w-0">
            <a href="mailto:accountants@phoenix-accountancy.co.uk" className="flex items-center gap-2 hover:opacity-90 transition-opacity shrink-0">
              <Mail size={14} className="shrink-0" />
              <span className="hidden sm:inline truncate">accountants@phoenix-accountancy.co.uk</span>
            </a>
            <a href="tel:+442079932737" className="flex items-center gap-2 hover:opacity-90 transition-opacity shrink-0 whitespace-nowrap">
              <Phone size={14} className="shrink-0" />
              <span>+44 (0) 2079 932 737</span>
            </a>
          </div>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity font-medium shrink-0" aria-label="LinkedIn">
            in
          </a>
        </div>
      </div>

      {/* Main Navigation - white bar like reference */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm shrink-0 overflow-x-hidden">
        <div className="container mx-auto flex items-center justify-between gap-2 px-4 py-2.5 min-w-0">
          {/* Logo - left */}
          <a href="#" className="flex items-center shrink-0">
            <img
              src="/images/Phoenix-Finserv.png"
              alt="Phoenix Finserv"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav - single line, centered like reference */}
          <nav className="hidden xl:flex items-center gap-1 min-w-0 flex-1 justify-end">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5 whitespace-nowrap shrink-0"
              >
                {link.name}
              </a>
            ))}

            {/* Single Services dropdown - all services inside */}
            <div
              ref={servicesWrapRef}
              className="relative shrink-0"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5 whitespace-nowrap"
              >
                Services
                <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0.5 w-[min(520px,calc(100vw-2rem))] bg-card rounded-lg shadow-xl border border-border py-3 animate-fade-in z-[60]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 px-3">
                    {services.map((service) => (
                      <div key={service.name} className="rounded-md min-w-0">
                        <div className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-primary border-b border-border/50">
                          {service.name}
                        </div>
                        <div className="pt-0.5 pb-1">
                          {service.items.map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="block px-2 py-1 text-[13px] text-foreground hover:bg-phoenix-green-light hover:text-phoenix-green rounded transition-colors"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right: Contact Us + grid - always visible */}
          <div className="flex items-center gap-2 shrink-0">
            <Button className="hidden sm:inline-flex bg-primary hover:bg-phoenix-orange-dark text-primary-foreground text-[13px] font-semibold py-2 px-4 shadow-lg hover:shadow-xl transition-all shrink-0">
              Contact Us
            </Button>

            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 hover:bg-muted rounded-md transition-colors shrink-0"
              aria-label="Open menu"
            >
              <div className="flex flex-col gap-0.5">
                <div className="flex gap-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                </div>
                <div className="flex gap-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                </div>
                <div className="flex gap-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                </div>
              </div>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-border bg-background animate-fade-in overflow-y-auto max-h-[70vh]">
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="block px-4 py-2.5 text-sm text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5">
                  {link.name}
                </a>
              ))}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-2.5 text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5"
                >
                  <span className="text-sm">Services</span>
                  <ChevronDown size={14} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="ml-4 mt-1 space-y-2 pl-2 border-l border-border">
                    {services.map((service) => (
                      <div key={service.name}>
                        <div className="text-xs font-semibold text-primary uppercase tracking-wide py-1">{service.name}</div>
                        <div className="space-y-0.5">
                          {service.items.map((item) => (
                            <a key={item} href="#" className="block py-1.5 text-sm text-muted-foreground hover:text-phoenix-green transition-colors">
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Button className="w-full mt-4 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </header>

      <RightSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

export default Header;
