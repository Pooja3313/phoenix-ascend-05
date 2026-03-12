import { useEffect, useRef, useState } from "react";
import { Mail, Phone, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import RightSidebar from "./RightSidebar";

const services = [
  {
    name: "Protection",
    columns: [
      { heading: "Personal Protection", items: ["Life Cover", "Critical Illness", "Income Protection"] },
      { heading: "Business Protection", items: ["Keyman Cover", "Shareholder Protection", "Relevant Life Cover", "Business Loan Protection"] },
      { heading: "Home Insurance", items: ["Buildings & Contents"] },
    ],
  },
  {
    name: "Mortgage",
    columns: [
      { heading: "Residential", items: ["First Time Buyers", "Remortgage", "Help to Buy"] },
      { heading: "Investment", items: ["Buy to Let", "Portfolio Landlords"] },
      { heading: "Specialist", items: ["Commercial Mortgages", "Bridging Loans"] },
    ],
  },
  {
    name: "Commercial Lending",
    columns: [
      { heading: "Business Finance", items: ["Business Loans", "Asset Finance"] },
      { heading: "Cash Flow", items: ["Invoice Finance", "Overdraft Facilities"] },
      { heading: "Property", items: ["Property Finance", "Development Finance"] },
    ],
  },
  {
    name: "Pensions",
    columns: [
      { heading: "Personal", items: ["Personal Pensions", "SIPP", "Pension Transfer"] },
      { heading: "Workplace", items: ["Workplace Pensions", "Auto Enrolment"] },
      { heading: "Retirement", items: ["Pension Drawdown", "Annuities"] },
    ],
  },
  {
    name: "Wills & Estate Planning",
    columns: [
      { heading: "Wills", items: ["Will Writing", "Mirror Wills"] },
      { heading: "Trusts & POA", items: ["Trusts", "Power of Attorney"] },
      { heading: "Planning", items: ["Inheritance Tax Planning", "Estate Administration"] },
    ],
  },
];

const networkDropdown = [
  { name: "Self Employed Adviser", href: "/network/self-employed-adviser" },
  { name: "Introducer", href: "/network/introducer" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Your Journey", href: "/our-journey" },
  { name: "Refer a Friend", href: "/refer-a-friend" },
  { name: "Careers", href: "/careers" },
  { name: "Newsletter", href: "/newsletter" },
];

const Header = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveService(null);
      }
    };
    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  const handleServiceEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveService(name);
  };

  const handleServiceLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveService(null), 200);
  };

  const currentService = services.find(s => s.name === activeService);

  return (
    <div className="overflow-x-hidden">
      {/* Top Bar */}
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

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm shrink-0 overflow-x-hidden">
        <div className="container mx-auto flex items-center justify-between gap-2 px-4 py-2.5 min-w-0">
          <a href="#" className="flex items-center shrink-0">
            <img src="/images/Phoenix-Finserv.png" alt="Phoenix Finserv" className="h-14 sm:h-16 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1 min-w-0 flex-1 justify-end" ref={dropdownRef}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5 whitespace-nowrap shrink-0"
              >
                {link.name}
              </a>
            ))}

            {/* Join Our Network dropdown */}
            <div className="relative shrink-0 group">
              <a
                href="/network"
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5 whitespace-nowrap"
              >
                Join Our Network
                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
              </a>
              <div className="absolute top-full left-0 mt-0 w-64 bg-card rounded-xl shadow-2xl border border-border overflow-hidden z-[60] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                {networkDropdown.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-5 py-3 text-sm text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 hover:translate-x-1"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="h-0.5 bg-gradient-to-r from-primary via-accent to-phoenix-gold" />
              </div>
            </div>

            {/* Services with tabs dropdown */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => handleServiceEnter(services[0].name)}
              onMouseLeave={handleServiceLeave}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5 whitespace-nowrap"
              >
                Services
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeService ? "rotate-180" : ""}`} />
              </button>

              {/* Mega dropdown */}
              {activeService && (
                <div
                  className="absolute top-full right-0 mt-0 w-[680px] bg-phoenix-gray-dark rounded-b-xl shadow-2xl border border-border/20 overflow-hidden z-[60]"
                  style={{ animation: 'slideDown 0.3s ease-out' }}
                  onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}
                  onMouseLeave={handleServiceLeave}
                >
                  {/* Service tabs */}
                  <div className="flex border-b border-primary-foreground/10">
                    {services.map((service) => (
                      <button
                        key={service.name}
                        onMouseEnter={() => handleServiceEnter(service.name)}
                        className={`flex-1 px-4 py-3 text-sm font-semibold transition-all whitespace-nowrap ${
                          activeService === service.name
                            ? 'bg-primary text-primary-foreground'
                            : 'text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5'
                        }`}
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>

                  {/* Columns */}
                  {currentService && (
                    <div className="grid grid-cols-3 gap-6 p-6" style={{ animation: 'fadeSlideUp 0.25s ease-out' }}>
                      {currentService.columns.map((col) => (
                        <div key={col.heading}>
                          <h4 className="text-primary-foreground font-bold text-sm mb-3">{col.heading}</h4>
                          <div className="space-y-1">
                            {col.items.map((item) => (
                              <a
                                key={item}
                                href="#"
                                className="block py-1.5 text-sm text-primary-foreground/60 hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
                              >
                                {item}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bottom line per logo colors */}
                  <div className="h-1 bg-gradient-to-r from-primary via-accent to-phoenix-gold" />
                </div>
              )}
            </div>
          </nav>

          {/* Right buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <a href="/contact" className="hidden sm:inline-flex items-center justify-center bg-primary hover:bg-phoenix-orange-dark text-primary-foreground text-[13px] font-semibold py-2 px-4 rounded-md shadow-lg hover:shadow-xl transition-all shrink-0">
              Contact Us
            </a>
            <button onClick={() => setSidebarOpen(true)} className="p-2 hover:bg-muted rounded-md transition-colors shrink-0" aria-label="Open menu">
              <div className="flex flex-col gap-0.5">
                {[0, 1, 2].map(r => (
                  <div key={r} className="flex gap-0.5">
                    {[0, 1, 2].map(c => <span key={c} className="w-1.5 h-1.5 rounded-full bg-foreground" />)}
                  </div>
                ))}
              </div>
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="xl:hidden p-2 hover:bg-muted rounded-md transition-colors" aria-label="Toggle menu">
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-border bg-background animate-fade-in overflow-y-auto max-h-[70vh]">
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="block px-4 py-2.5 text-sm text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5">{link.name}</a>
              ))}
              <div>
                <button type="button" onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="flex items-center justify-between w-full px-4 py-2.5 text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5">
                  <span className="text-sm">Services</span>
                  <ChevronDown size={14} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="ml-4 mt-1 space-y-2 pl-2 border-l border-border">
                    {services.map((service) => (
                      <div key={service.name}>
                        <div className="text-xs font-semibold text-primary uppercase tracking-wide py-1">{service.name}</div>
                        {service.columns.map(col => col.items.map(item => (
                          <a key={item} href="#" className="block py-1.5 text-sm text-muted-foreground hover:text-phoenix-green transition-colors">{item}</a>
                        )))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Button className="w-full mt-4 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground">Contact Us</Button>
            </div>
          </div>
        )}
      </header>

      <RightSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

export default Header;
