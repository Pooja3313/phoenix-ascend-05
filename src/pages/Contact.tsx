import { Mail, Phone, MapPin, Clock, Send, Linkedin, Facebook, Twitter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import { useState, useRef, useEffect } from "react";

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you shortly.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-phoenix-gray-dark text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.1),transparent_60%)]" />
          <div className="absolute bottom-10 right-20 text-primary/5 text-[150px] font-bold animate-pound-rotate select-none pointer-events-none">£</div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-4">Get In Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="font-handwritten text-5xl md:text-6xl text-primary pen-underline">Talk</span> About Your Future
            </h1>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">We're here to help you secure your financial future. Reach out today.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background" ref={ref}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form */}
              <div className={visible ? 'animate-float-up' : 'opacity-0'}>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send Us a <span className="text-primary highlighter-mark">Message</span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input type="text" placeholder="Full Name *" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                    <input type="email" placeholder="Email Address *" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input type="tel" placeholder="Phone Number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                    <input type="text" placeholder="Subject *" required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                  </div>
                  <textarea placeholder="Your Message *" required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none" />
                  <button type="submit" className="inline-flex items-center gap-2 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className={visible ? 'animate-float-up' : 'opacity-0'} style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Contact <span className="text-primary font-handwritten text-3xl">Information</span>
                </h2>

                <div className="space-y-6 mb-10">
                  {[
                    { icon: Mail, label: "Email", value: "accountants@phoenix-accountancy.co.uk", href: "mailto:accountants@phoenix-accountancy.co.uk" },
                    { icon: Phone, label: "Phone", value: "+44 (0) 2079 932 737", href: "tel:+442079932737" },
                    { icon: MapPin, label: "Address", value: "London, United Kingdom", href: "#" },
                    { icon: Clock, label: "Hours", value: "Mon - Fri: 9:00 AM - 6:00 PM", href: "#" },
                  ].map((item) => (
                    <a key={item.label} href={item.href} className="group flex items-start gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 icon-hover-bounce">
                        <item.icon size={22} className="text-primary group-hover:text-accent-foreground transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                        <p className="text-foreground font-medium text-sm">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social */}
                <div>
                  <p className="text-sm font-semibold text-foreground mb-3">Follow Us</p>
                  <div className="flex gap-3">
                    {[Linkedin, Facebook, Twitter].map((Icon, i) => (
                      <a key={i} href="#" className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 icon-hover-bounce text-primary">
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyGetInTouch />
    </div>
  );
};

export default Contact;
