import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import { useEffect, useRef, useState } from "react";

const timeline = [
  { year: "2013", title: "Our Beginnings", description: "Manish Shah formed Phoenix Accountancy Service Ltd along with Mayuri Patel, after realising that it is not just the size and scale of a business that determines the level of service delivered to clients but more the ability to meet and manage clients' requirements and expectations." },
  { year: "2015", title: "Growing Through Referrals", description: "The accountancy company grew through recommendations and referrals for the world class service given by longstanding loyal staff at Phoenix." },
  { year: "2018", title: "Expanding Services", description: "Phoenix Accountancy focuses on offering hands-on and tailored financial support through proactive tax advice and accountancy services to businesses, individuals, contractors, and SMEs." },
  { year: "2020", title: "Digital Transformation", description: "Embracing innovative technology and digital solutions to serve our clients better, streamlining processes and improving communication." },
  { year: "2023", title: "Phoenix Finserv Launch", description: "Expanding into comprehensive financial services including protection, mortgages, pensions, and estate planning — helping secure our clients' dreams." },
  { year: "2026", title: "Today & Beyond", description: "Phoenix Accountancy is an accounting firm with a difference that stands out from the crowd. We develop and build a bond with clients by implementing strong business structures and plans to help them save time and money." },
];

const OurJourney = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-phoenix-gray-dark text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.1),transparent_60%)]" />
          <div className="absolute bottom-20 right-20 text-primary/5 text-[180px] font-bold animate-pound-rotate select-none pointer-events-none">£</div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-4">Our Story</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              The Phoenix <span className="font-handwritten text-5xl md:text-6xl text-primary pen-underline">Journey</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">
              From humble beginnings to a trusted financial services firm — our story of growth, trust, and excellence.
            </p>
          </div>
        </section>

        {/* About Block */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16 max-w-5xl mx-auto">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Our <span className="text-primary highlighter-mark">Beginnings</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Manish Shah formed Phoenix Accountancy Service Ltd in 2013 along with Mayuri Patel, after realising that it is not just the size and scale of a business that determines the level of service delivered to clients but more the ability to meet and manage clients' requirements and expectations.</p>
                  <p>Phoenix Accountancy focuses on offering hands-on and tailored financial support through proactive tax advice and accountancy services to businesses, individuals, contractors, and SMEs.</p>
                  <p>The accountancy company has grown over the last decade through recommendations and referrals for the world class service given by longstanding loyal staff at Phoenix.</p>
                  <p>Manish had previously worked as a CFO for an IT company for 7 years and helped complete the successful sale of the business which he co-owned with other shareholders.</p>
                  <p>Phoenix Accountancy is an accounting firm with a difference that stands out from the crowd of other bookkeeping services. We develop and build a bond with clients by implementing strong business structures and plans to help them save time and money.</p>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-muted aspect-[4/5]">
                  <img src="/images/journey-stairs.jpg" alt="Our Journey" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-phoenix-gray-dark/80 to-transparent flex items-end p-8">
                    <div>
                      <p className="text-primary-foreground font-bold text-2xl">Since 2013</p>
                      <p className="text-primary-foreground/70 text-sm">Building trust, one client at a time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted/30" ref={ref}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Milestones</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our <span className="font-handwritten text-4xl md:text-5xl text-primary">Timeline</span>
              </h2>
            </div>

            <div className="relative max-w-3xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 md:-translate-x-px" />

              <div className="space-y-12">
                {timeline.map((item, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <div
                      key={item.year}
                      className={`relative flex items-start ${visible ? 'animate-float-up' : 'opacity-0'}`}
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      {/* Dot */}
                      <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary shadow-lg -translate-x-1/2 mt-1 z-10" />

                      {/* Content */}
                      <div className={`ml-16 md:ml-0 md:w-[45%] ${isLeft ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}>
                        <span className="inline-block text-primary font-bold text-lg mb-1">{item.year}</span>
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey With Us?</h2>
            <a href="/contact" className="inline-flex items-center gap-2 bg-phoenix-gray-dark hover:bg-foreground text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 group mt-4">
              Get in Touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <StickyGetInTouch />
    </div>
  );
};

export default OurJourney;
