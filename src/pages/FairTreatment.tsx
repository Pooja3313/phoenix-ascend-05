import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import { Heart, Shield, Users, Eye, MessageSquare, Scale } from "lucide-react";

const principles = [
  { icon: Heart, title: "Fair Culture", description: "We embed fair treatment of customers at the heart of our corporate culture and business strategy." },
  { icon: Shield, title: "Product Design", description: "Products and services are designed to meet the needs of identified customer groups and are targeted accordingly." },
  { icon: Users, title: "Clear Information", description: "Customers are provided with clear information and kept appropriately informed before, during and after the point of sale." },
  { icon: Eye, title: "Suitable Advice", description: "Where customers receive advice, the advice is suitable and takes account of their circumstances." },
  { icon: MessageSquare, title: "Service Standards", description: "Customers are provided with products that perform as firms have led them to expect, and the associated service is of an acceptable standard." },
  { icon: Scale, title: "No Barriers", description: "Customers do not face unreasonable post-sale barriers imposed by firms to change product, switch provider, submit a claim or make a complaint." },
];

const FairTreatment = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative py-20 bg-gradient-to-br from-phoenix-gray-light via-background to-phoenix-green-light overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.08),transparent_60%)]" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Fair Treatment of <span className="font-handwritten text-5xl md:text-6xl text-primary pen-underline">Customers</span>
            </h1>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="animate-float-up mb-10">
              <p className="text-muted-foreground leading-relaxed text-lg">
                At Phoenix Finserv, treating customers fairly (<span className="font-handwritten text-xl text-primary highlighter-mark">TCF</span>) is at the core of everything we do. We are committed to ensuring that our customers receive a fair deal at all times.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((item, i) => (
                <div
                  key={item.title}
                  className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-500 animate-float-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <item.icon size={24} className="text-primary group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyGetInTouch />
    </div>
  );
};

export default FairTreatment;
