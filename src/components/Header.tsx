import { NavLink, useLocation } from "react-router-dom";
import { Mail, Phone, Linkedin, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import RightSidebar from "./RightSidebar";
import { useState, useRef, useEffect, useCallback } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";

const serviceGroups = [
  {
    name: "Protection",
    href: "/services/protection",
    items: [
      { name: "Life Cover", href: "/services/protection" },
      { name: "Critical Illness", href: "/services/protection" },
      { name: "Income Protection", href: "/services/protection" },
      { name: "Keyman Cover", href: "/services/protection" },
      { name: "Shareholder Protection", href: "/services/protection" },
      { name: "Relevant Life Cover", href: "/services/protection" },
      { name: "Business Loan Protection", href: "/services/protection" },
    ],
  },
  {
    name: "Mortgage",
    href: "/services/mortgage",
    items: [
      { name: "First Time Buyer Mortgages", href: "/services/mortgage" },
      { name: "Remortgage Advice", href: "/services/mortgage" },
      { name: "Buy to Let Mortgages", href: "/services/mortgage" },
      { name: "Residential Mortgages", href: "/services/mortgage" },
    ],
  },
  {
    name: "Commercial Lending",
    href: "/services/commercial-lending",
    items: [
      { name: "Bridging Loans", href: "/services/commercial-lending" },
      { name: "Business Finance", href: "/services/commercial-lending" },
      { name: "Asset Finance", href: "/services/commercial-lending" },
      { name: "Buy to Let Finance", href: "/services/commercial-lending" },
      { name: "Commercial Mortgage", href: "/services/commercial-lending" },
      { name: "Property Development Finance", href: "/services/commercial-lending" },
    ],
  },
  {
    name: "Pensions",
    href: "/services/pensions",
    items: [
      { name: "State Pension", href: "/services/pensions" },
      { name: "Defined Benefits Pensions", href: "/services/pensions" },
      { name: "Private Pensions", href: "/services/pensions" },
      { name: "Pension Drawdown", href: "/services/pensions" },
    ],
  },
  {
    name: "Wills & Estate Planning",
    href: "/services/wills-estate-planning",
    items: [
      { name: "Will Writing", href: "/services/wills-estate-planning" },
      { name: "Trust Planning", href: "/services/wills-estate-planning" },
      { name: "Inheritance Tax Planning", href: "/services/wills-estate-planning" },
      { name: "Lasting Power of Attorney", href: "/services/wills-estate-planning" },
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
];

const navLinksAfterServices = [
  { name: "Refer a Friend", href: "/refer-a-friend" },
  { name: "Careers", href: "/careers" },
  { name: "Newsletter", href: "/newsletter" },
];

const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [networkOpen, setNetworkOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileNetworkOpen, setMobileNetworkOpen] = useState(false);
  const [mobileServiceGroup, setMobileServiceGroup] = useState<string | null>(null);

  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setServicesOpen(false);
    setNetworkOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileNetworkOpen(false);
    setMobileServiceGroup(null);
  }, [location.pathname]);

  const closeServices = useCallback(() => setServicesOpen(false), []);
  const closeNetwork = useCallback(() => setNetworkOpen(false), []);

  useClickOutside(servicesRef, closeServices);
  useClickOutside(networkRef, closeNetwork);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-phoenix-gray-dark text-primary-foreground shrink-0">
        <div className="container mx-auto flex items-center justify-between px-4 py-2.5 text-sm min-w-0">
          <div className="flex items-center gap-4 sm:gap-6 min-w-0">
            <a href="mailto:accountants@phoenix-accountancy.co.uk" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail size={14} className="shrink-0" />
              <span className="hidden sm:inline truncate">accountants@phoenix-accountancy.co.uk</span>
            </a>
            <a href="tel:+442079932737" className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0 whitespace-nowrap">
              <Phone size={14} className="shrink-0" />
              <span>+44 (0) 2079 932 737</span>
            </a>
          </div>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm shrink-0">
        <div className="container mx-auto flex items-center justify-between gap-2 px-4 py-2.5 min-w-0">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img src="/images/Phoenix-Finserv.png" alt="Phoenix Finserv" className="h-14 sm:h-16 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 min-w-0 flex-1 justify-end">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-primary/5 whitespace-nowrap shrink-0 ${
                    isActive ? "text-primary" : "text-foreground hover:text-primary"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Join Our Network dropdown */}
            <div className="relative shrink-0" ref={networkRef}>
              <button
                onClick={() => { setNetworkOpen(!networkOpen); setServicesOpen(false); }}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5 whitespace-nowrap"
              >
                Join Our Network
                <ChevronDown size={14} className={`transition-transform duration-300 ${networkOpen ? "rotate-180" : ""}`} />
              </button>
              {networkOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-card rounded-xl shadow-2xl border border-border overflow-hidden z-[60]" style={{ animation: 'slideDown 0.3s ease-out' }}>
                  {networkDropdown.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className="block px-5 py-3 text-sm text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 hover:translate-x-1"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                  <div className="h-0.5 bg-gradient-to-r from-primary via-accent to-phoenix-gold" />
                </div>
              )}
            </div>

            {/* Services mega dropdown */}
            <div className="relative shrink-0" ref={servicesRef}>
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setNetworkOpen(false); }}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5 whitespace-nowrap"
              >
                Services
                <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full right-0 mt-1 w-[700px] bg-phoenix-gray-dark rounded-b-xl shadow-2xl border border-border/20 overflow-hidden z-[60]"
                  style={{ animation: 'slideDown 0.3s ease-out' }}
                >
                  {/* Service tabs - WealthMax style */}
                  <div className="flex border-b border-primary-foreground/10">
                    {serviceGroups.map((group, index) => (
                      <button
                        key={group.name}
                        onMouseEnter={() => setActiveServiceTab(index)}
                        onClick={() => setActiveServiceTab(index)}
                        className={`flex-1 px-3 py-3 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                          activeServiceTab === index
                            ? 'bg-primary text-primary-foreground'
                            : 'text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5'
                        }`}
                      >
                        {group.name}
                      </button>
                    ))}
                  </div>

                  {/* Active tab items */}
                  <div className="p-6" style={{ animation: 'fadeSlideUp 0.25s ease-out' }}>
                    <div className="space-y-1">
                      {serviceGroups[activeServiceTab].items.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className="block py-2 px-3 text-sm text-primary-foreground/60 hover:text-primary transition-colors hover:translate-x-2 transform duration-200 rounded-md hover:bg-primary-foreground/5"
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>

                  <div className="h-1 bg-gradient-to-r from-primary via-accent to-phoenix-gold" />
                </div>
              )}
            </div>

            {navLinksAfterServices.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-primary/5 whitespace-nowrap shrink-0 ${
                    isActive ? "text-primary" : "text-foreground hover:text-primary"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2 shrink-0">
            <NavLink to="/contact" className="hidden sm:inline-flex items-center justify-center bg-primary hover:bg-phoenix-orange-dark text-primary-foreground text-[13px] font-semibold py-2 px-4 rounded-md shadow-lg hover:shadow-xl transition-all shrink-0">
              Contact Us
            </NavLink>
            <button onClick={() => setSidebarOpen(true)} className="p-2 hover:bg-muted rounded-md transition-colors" aria-label="Open menu">
              <div className="flex flex-col gap-0.5">
                {[0, 1, 2].map(r => (
                  <div key={r} className="flex gap-0.5">
                    {[0, 1, 2].map(c => <span key={c} className="w-1.5 h-1.5 rounded-full bg-foreground" />)}
                  </div>
                ))}
              </div>
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors" aria-label="Toggle menu">
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background animate-fade-in overflow-y-auto max-h-[70vh]">
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 text-sm font-medium transition-colors rounded-md hover:bg-primary/5 ${
                      isActive ? "text-primary bg-primary/5" : "text-foreground hover:text-primary"
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Mobile Network */}
              <div>
                <button
                  onClick={() => { setMobileNetworkOpen(!mobileNetworkOpen); setMobileServicesOpen(false); }}
                  className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5"
                >
                  Join Our Network
                  <ChevronDown size={14} className={`transition-transform ${mobileNetworkOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileNetworkOpen && (
                  <div className="ml-4 mt-1 space-y-1 pl-3 border-l-2 border-primary/20">
                    {networkDropdown.map((item) => (
                      <NavLink key={item.name} to={item.href} className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => { setMobileServicesOpen(!mobileServicesOpen); setMobileNetworkOpen(false); }}
                  className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5"
                >
                  Services
                  <ChevronDown size={14} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="ml-4 mt-1 space-y-1 pl-3 border-l-2 border-primary/20">
                    {serviceGroups.map((group) => (
                      <div key={group.name}>
                        <button
                          onClick={() => setMobileServiceGroup(mobileServiceGroup === group.name ? null : group.name)}
                          className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {group.name}
                          <ChevronDown size={12} className={`transition-transform ${mobileServiceGroup === group.name ? "rotate-180" : ""}`} />
                        </button>
                        {mobileServiceGroup === group.name && (
                          <div className="ml-4 pl-3 border-l border-accent/20 space-y-1">
                            {group.items.map((item) => (
                              <NavLink key={item.name} to={item.href} className="block py-1.5 px-3 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                                {item.name}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {navLinksAfterServices.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 text-sm font-medium transition-colors rounded-md hover:bg-primary/5 ${
                      isActive ? "text-primary bg-primary/5" : "text-foreground hover:text-primary"
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}

              <Button asChild className="w-full mt-4 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground">
                <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</NavLink>
              </Button>
            </div>
          </div>
        )}
      </header>

      <RightSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Header;
