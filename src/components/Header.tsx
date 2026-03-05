import { useState } from "react";
import { Mail, Phone, Linkedin, ChevronDown, Menu, X } from "lucide-react";
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
];

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:accountants@phoenix-accountancy.co.uk" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail size={14} />
              <span className="hidden sm:inline">accountants@phoenix-accountancy.co.uk</span>
            </a>
            <a href="tel:+442079932737" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone size={14} />
              <span>+44 (0) 2079 932 737</span>
            </a>
          </div>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Linkedin size={16} />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">PF</span>
            </div>
            <div className="leading-tight">
              <span className="font-bold text-lg text-foreground">Phoenix</span>
              <span className="block text-xs text-muted-foreground tracking-wider uppercase">Finserv</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5"
              >
                {link.name}
              </a>
            ))}

            {services.map((service) => (
              <div
                key={service.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(service.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5">
                  {service.name}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === service.name ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === service.name && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-card rounded-lg shadow-xl border border-border p-3 animate-fade-in z-50">
                    {service.items.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-phoenix-green-light hover:text-phoenix-green rounded-md transition-all duration-200"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Button className="hidden sm:inline-flex bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all">
              Get a Quote
            </Button>

            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Open menu"
            >
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                </div>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                </div>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                </div>
              </div>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="block px-4 py-2 text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5">
                  {link.name}
                </a>
              ))}
              {services.map((service) => (
                <div key={service.name}>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === service.name ? null : service.name)}
                    className="flex items-center justify-between w-full px-4 py-2 text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5"
                  >
                    {service.name}
                    <ChevronDown size={14} className={`transition-transform ${activeDropdown === service.name ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === service.name && (
                    <div className="ml-4 mt-1 space-y-1">
                      {service.items.map((item) => (
                        <a key={item} href="#" className="block px-4 py-2 text-sm text-muted-foreground hover:text-phoenix-green transition-colors">
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button className="w-full mt-4 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground">
                Get a Quote
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
