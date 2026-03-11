import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import { AlertCircle, Phone, Mail, FileText, Clock } from "lucide-react";

const ComplaintsProcedure = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative py-20 bg-gradient-to-br from-phoenix-gray-light via-background to-phoenix-green-light overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.08),transparent_60%)]" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Complaints <span className="font-handwritten text-5xl md:text-6xl text-primary pen-underline">Procedure</span>
            </h1>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl space-y-8">
            <div className="animate-float-up">
              <p className="text-muted-foreground leading-relaxed">
                At Phoenix Finserv, we are committed to providing you with the highest level of service. However, if you are unhappy with any aspect of our service, we want to hear about it and resolve your concerns as quickly as possible.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 animate-float-up" style={{ animationDelay: '0.1s' }}>
              {[
                { icon: Phone, title: "By Phone", desc: "+44 (0) 2079 932 737" },
                { icon: Mail, title: "By Email", desc: "accountants@phoenix-accountancy.co.uk" },
                { icon: FileText, title: "In Writing", desc: "Send your complaint to our registered office address" },
                { icon: Clock, title: "Response Time", desc: "We aim to resolve complaints within 8 weeks" },
              ].map((item, i) => (
                <div key={item.title} className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <item.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="animate-float-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold text-primary mb-3">Our Process</h3>
              <div className="space-y-4">
                {[
                  "We will acknowledge your complaint within 5 business days of receiving it.",
                  "We will investigate your complaint thoroughly and fairly.",
                  "We will keep you informed of our progress throughout the investigation.",
                  "We will aim to resolve your complaint within 8 weeks.",
                  "If we are unable to resolve your complaint within 8 weeks, we will write to you explaining the reasons for the delay.",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                    <p className="text-muted-foreground leading-relaxed pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-float-up bg-card border border-border rounded-2xl p-6" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-3">
                <AlertCircle className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Financial Ombudsman Service</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    If you are not satisfied with our response, you may be able to refer your complaint to the Financial Ombudsman Service. They can be contacted at: <a href="https://www.financial-ombudsman.org.uk" className="text-primary hover:underline font-semibold" target="_blank" rel="noopener noreferrer">www.financial-ombudsman.org.uk</a> or by phone on <span className="text-primary font-semibold">0800 023 4567</span>.
                  </p>
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

export default ComplaintsProcedure;
