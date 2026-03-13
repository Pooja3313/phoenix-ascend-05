import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import { PiggyBank, Landmark, Briefcase, ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const offerings = [
  {
    icon: Landmark,
    title: "The State Pension",
    description: "Provided by the government to those who qualify, your state pension gives you a reliable foundation for your retirement finances. Understanding your entitlement is the first step toward effective planning.",
  },
  {
    icon: Briefcase,
    title: "Defined Benefits Pensions",
    description: "You may also have the benefit of an employer-sponsored pension through your work, which provides a guaranteed income in retirement based on your salary and years of service.",
  },
  {
    icon: PiggyBank,
    title: "Private Pensions",
    description: "These are personal pension schemes you set up independently. You choose the provider and how much to contribute, giving you flexibility and control over your retirement savings.",
  },
];

const faqs = [
  {
    question: "Do I need financial advice on how to cash in my pension pot?",
    answer: "If your pension pot is worth £30,000 or more, it's strongly recommended to seek regulated financial advice before making any withdrawal decisions. Our advisers can help you understand tax implications and ensure you make the most of your savings.",
  },
  {
    question: "What is the difference between an SIPP and a personal pension?",
    answer: "A Self-Invested Personal Pension (SIPP) gives you more control over your investments compared to a standard personal pension. With a SIPP, you can choose from a wider range of investments including stocks, bonds, and commercial property.",
  },
  {
    question: "Can I withdraw my pension before 55?",
    answer: "In most cases, you cannot access your pension before the age of 55 (rising to 57 from 2028). Early access schemes that promise otherwise are often scams. There are limited exceptions, such as serious ill health.",
  },
  {
    question: "Do I get my husband's state pension when he dies?",
    answer: "You may be able to inherit some of your spouse's or civil partner's state pension, depending on when they reached State Pension age and your own circumstances. Our advisers can help you understand your entitlements.",
  },
];

const Pensions = () => {
  const [visible, setVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-accent/10 via-phoenix-green-light/30 to-background overflow-hidden">
          <div className="absolute top-10 right-10 text-accent/[0.04] text-[200px] font-bold animate-pound-rotate select-none pointer-events-none">£</div>
          <div className="container mx-auto px-4 relative z-10">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Pension <span className="font-handwritten text-5xl md:text-6xl lg:text-7xl text-primary highlighter-mark">Planning</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Helping you make informed decisions about your retirement. Our guidance is designed to support your long-term financial well-being, giving you clarity and confidence as you plan for the future.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 mt-8 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Book a Free Consultation <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Choose Phoenix Finserv for your <span className="font-handwritten text-4xl md:text-5xl text-primary pen-underline">Pension Planning?</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  According to Age UK, around half of people aged 40–64 may not have enough savings to retire comfortably when they reach state pension age. Without additional pension arrangements in place, you could face financial challenges later in life.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  At Phoenix Finserv, we help you explore private pension options that support your long-term financial well-being. Our team has extensive experience in the pension sector and can guide you through your choices, helping you avoid common mistakes and plan confidently for retirement.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-border flex items-center justify-center">
                  <PiggyBank size={80} className="text-accent/30" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Offerings */}
        <section className="py-20 bg-gradient-to-br from-phoenix-gray-light/50 via-background to-phoenix-green-light/30" ref={ref}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">Pension</span> Options
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Exploring pension options with Phoenix Finserv means securing a future built on stability, ensuring peace of mind, and creating a financial foundation that supports your retirement goals.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {offerings.map((item, index) => (
                <div
                  key={item.title}
                  className={`group relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-xl overflow-hidden cursor-pointer hover:border-accent/30 ${
                    visible ? 'animate-float-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <item.icon size={26} className="text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Frequently Asked <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">Questions</span>
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left text-foreground font-medium hover:bg-primary/5 transition-colors"
                  >
                    {faq.question}
                    <ChevronDown size={18} className={`shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4 text-muted-foreground text-sm leading-relaxed" style={{ animation: 'fadeSlideUp 0.3s ease-out' }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-accent to-phoenix-green text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help Navigating your Pension Choices?</h2>
            <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
              At Phoenix Finserv, our advisers are authorised and experienced in retirement planning. We offer regulated financial advice to help you explore pension options tailored to your needs and goals.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-background text-accent font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Speak to our Advisers <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <StickyGetInTouch />
    </div>
  );
};

export default Pensions;
