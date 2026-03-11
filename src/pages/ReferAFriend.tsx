import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import { Gift, Users, Heart, ArrowRight, PoundSterling, Star, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`${visible ? 'animate-float-up' : 'opacity-0'} ${className}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
};

const rewards = [
  { icon: PoundSterling, title: "You get £100*", description: "Receive £100 reward for every successful referral you make.", color: "primary" },
  { icon: Gift, title: "Your friend gets 1st month free*", description: "Your referred friend enjoys their first month of service completely free.", color: "accent" },
  { icon: Heart, title: "British Heart Foundation £5", description: "We donate £5 to the British Heart Foundation for every successful referral.", color: "primary" },
];

const ReferAFriend = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", contactNumber: "",
    friendName: "", friendEmail: "", friendContactNumber: "",
    termsAccepted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your referral! We will be in touch shortly.");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-br from-phoenix-gray-light via-background to-phoenix-green-light overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.08),transparent_60%)]" />
          <div className="absolute bottom-20 right-20 text-primary/5 text-[180px] font-bold animate-pound-rotate select-none pointer-events-none">£</div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <AnimatedSection>
              <p className="text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-4">Referral Programme</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Refer a <span className="font-handwritten text-5xl md:text-6xl text-primary pen-underline">Friend</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                Share the Phoenix experience and earn <span className="font-handwritten text-xl text-primary highlighter-mark">rewards</span> for every successful referral.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Rewards */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {rewards.map((reward, i) => (
                <AnimatedSection key={reward.title} delay={i * 0.15}>
                  <div className="group relative bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl hover:border-primary/30 transition-all duration-500 h-full overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${reward.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary' : 'bg-accent/10 group-hover:bg-accent'}`}>
                      <reward.icon size={36} className={`transition-colors duration-300 ${reward.color === 'primary' ? 'text-primary group-hover:text-primary-foreground' : 'text-accent group-hover:text-accent-foreground'}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{reward.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{reward.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-gradient-to-br from-phoenix-gray-light/50 via-background to-phoenix-green-light/30">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-14">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Simple Process</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                How it <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">Works</span>
              </h2>
            </AnimatedSection>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-3xl mx-auto">
              {[
                { step: "01", title: "Refer", desc: "Share your friend's details using our form below" },
                { step: "02", title: "Connect", desc: "We reach out and provide excellent service to your friend" },
                { step: "03", title: "Reward", desc: "Both you and your friend receive your rewards!" },
              ].map((item, i) => (
                <AnimatedSection key={item.step} delay={i * 0.15} className="flex-1 w-full">
                  <div className="group text-center bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-500 relative">
                    <span className="font-handwritten text-5xl text-primary/20 absolute top-4 right-4 group-hover:text-primary/40 transition-colors">{item.step}</span>
                    <Star size={28} className="mx-auto text-primary mb-4 group-hover:animate-spin" />
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Referral Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
              <AnimatedSection>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Refer to <span className="font-handwritten text-3xl text-primary">Friends</span>
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { placeholder: "Enter Name", field: "name" },
                      { placeholder: "Enter Email", field: "email" },
                      { placeholder: "Enter Contact Number", field: "contactNumber" },
                      { placeholder: "Enter Friend Name", field: "friendName" },
                      { placeholder: "Enter Friend Email", field: "friendEmail" },
                      { placeholder: "Enter Friend Contact Number", field: "friendContactNumber" },
                    ].map((input) => (
                      <input
                        key={input.field}
                        type={input.field.includes("email") ? "email" : "text"}
                        placeholder={input.placeholder}
                        value={(formData as any)[input.field]}
                        onChange={(e) => setFormData({ ...formData, [input.field]: e.target.value })}
                        className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        required
                      />
                    ))}
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.termsAccepted}
                        onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                        className="w-4 h-4 accent-primary"
                        required
                      />
                      <span className="text-sm text-muted-foreground">
                        I accept the <a href="/terms-and-conditions" className="text-primary hover:underline">Terms and Conditions</a>*
                      </span>
                    </label>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                    >
                      <Send size={18} />
                      Submit Referral
                    </button>
                  </form>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      Why <span className="highlighter-mark font-handwritten text-2xl text-primary">Refer</span>?
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Earn £100 for every successful referral",
                        "Your friend gets their first month absolutely free",
                        "We donate £5 to the British Heart Foundation",
                        "Help your friends access world-class financial services",
                        "No limit on the number of referrals you can make",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                            <ArrowRight size={12} className="text-primary-foreground" />
                          </div>
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground/60">
                    *Terms and conditions apply. The referral reward is payable once the referred client has been active for a minimum of 3 months. Phoenix Finserv reserves the right to amend or withdraw this offer at any time.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyGetInTouch />
    </div>
  );
};

export default ReferAFriend;
