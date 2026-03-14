import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import { Calculator, ArrowRight, PoundSterling, TrendingUp, Percent } from "lucide-react";
import { useState } from "react";

const MortgageCalculator = () => {
  const [propertyValue, setPropertyValue] = useState(250000);
  const [deposit, setDeposit] = useState(50000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [term, setTerm] = useState(25);
  const [repaymentType, setRepaymentType] = useState<"repayment" | "interest-only">("repayment");

  const loanAmount = propertyValue - deposit;
  const ltv = propertyValue > 0 ? ((loanAmount / propertyValue) * 100).toFixed(1) : "0";
  
  // Monthly repayment calculation
  const monthlyRate = interestRate / 100 / 12;
  const totalPayments = term * 12;
  
  let monthlyPayment = 0;
  let totalRepaid = 0;
  let totalInterest = 0;

  if (repaymentType === "repayment" && monthlyRate > 0) {
    monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
    totalRepaid = monthlyPayment * totalPayments;
    totalInterest = totalRepaid - loanAmount;
  } else if (repaymentType === "interest-only") {
    monthlyPayment = loanAmount * monthlyRate;
    totalInterest = monthlyPayment * totalPayments;
    totalRepaid = totalInterest + loanAmount;
  }

  const formatCurrency = (n: number) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-accent/10 via-phoenix-green-light/30 to-background overflow-hidden">
          <div className="absolute top-10 right-10 text-accent/[0.04] text-[200px] font-bold animate-pound-rotate select-none pointer-events-none">£</div>
          <div className="container mx-auto px-4 relative z-10">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Tools</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Mortgage <span className="font-handwritten text-5xl md:text-6xl lg:text-7xl text-primary highlighter-mark">Calculator</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Use our calculator to estimate your monthly mortgage repayments and understand what you could afford.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {/* Inputs */}
              <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Enter Your Details</h2>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Property Value</label>
                  <div className="relative">
                    <PoundSterling size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="number"
                      value={propertyValue}
                      onChange={e => setPropertyValue(Number(e.target.value))}
                      className="w-full pl-9 pr-4 py-3 border border-border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <input type="range" min={50000} max={2000000} step={5000} value={propertyValue} onChange={e => setPropertyValue(Number(e.target.value))} className="w-full mt-2 accent-primary" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Deposit</label>
                  <div className="relative">
                    <PoundSterling size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="number"
                      value={deposit}
                      onChange={e => setDeposit(Number(e.target.value))}
                      className="w-full pl-9 pr-4 py-3 border border-border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <input type="range" min={0} max={propertyValue} step={5000} value={deposit} onChange={e => setDeposit(Number(e.target.value))} className="w-full mt-2 accent-accent" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Interest Rate (%)</label>
                  <div className="relative">
                    <Percent size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="number"
                      step={0.1}
                      value={interestRate}
                      onChange={e => setInterestRate(Number(e.target.value))}
                      className="w-full pl-9 pr-4 py-3 border border-border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Mortgage Term (years)</label>
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      value={term}
                      onChange={e => setTerm(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                    />
                    <span className="text-muted-foreground text-sm whitespace-nowrap">{term} years</span>
                  </div>
                  <input type="range" min={5} max={40} step={1} value={term} onChange={e => setTerm(Number(e.target.value))} className="w-full mt-2 accent-primary" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Repayment Type</label>
                  <div className="flex gap-3">
                    {(["repayment", "interest-only"] as const).map(type => (
                      <button
                        key={type}
                        onClick={() => setRepaymentType(type)}
                        className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                          repaymentType === type
                            ? 'bg-primary text-primary-foreground shadow-lg'
                            : 'bg-muted text-foreground hover:bg-primary/10'
                        }`}
                      >
                        {type === 'repayment' ? 'Repayment' : 'Interest Only'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary to-phoenix-orange-dark text-primary-foreground rounded-2xl p-8">
                  <p className="text-primary-foreground/70 text-sm mb-1">Monthly Repayment</p>
                  <p className="text-4xl md:text-5xl font-bold mb-6">{formatCurrency(monthlyPayment)}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary-foreground/10 rounded-xl p-4">
                      <p className="text-primary-foreground/70 text-xs mb-1">Loan Amount</p>
                      <p className="text-lg font-bold">{formatCurrency(loanAmount)}</p>
                    </div>
                    <div className="bg-primary-foreground/10 rounded-xl p-4">
                      <p className="text-primary-foreground/70 text-xs mb-1">LTV Ratio</p>
                      <p className="text-lg font-bold">{ltv}%</p>
                    </div>
                    <div className="bg-primary-foreground/10 rounded-xl p-4">
                      <p className="text-primary-foreground/70 text-xs mb-1">Total Interest</p>
                      <p className="text-lg font-bold">{formatCurrency(totalInterest)}</p>
                    </div>
                    <div className="bg-primary-foreground/10 rounded-xl p-4">
                      <p className="text-primary-foreground/70 text-xs mb-1">Total Repaid</p>
                      <p className="text-lg font-bold">{formatCurrency(totalRepaid)}</p>
                    </div>
                  </div>
                </div>

                {/* Visual bar */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-bold text-foreground mb-4">Cost Breakdown</h3>
                  <div className="h-6 rounded-full overflow-hidden flex bg-muted">
                    <div className="bg-accent h-full transition-all duration-500" style={{ width: `${totalRepaid > 0 ? (loanAmount / totalRepaid) * 100 : 0}%` }} />
                    <div className="bg-primary h-full transition-all duration-500" style={{ width: `${totalRepaid > 0 ? (totalInterest / totalRepaid) * 100 : 0}%` }} />
                  </div>
                  <div className="flex justify-between mt-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-accent" />
                      <span className="text-muted-foreground">Principal ({formatCurrency(loanAmount)})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <span className="text-muted-foreground">Interest ({formatCurrency(totalInterest)})</span>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <TrendingUp size={20} className="text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Important Note</h4>
                      <p className="text-muted-foreground text-sm">This calculator provides an estimate only. Actual rates and repayments may vary. Contact our advisers for a personalised mortgage quote tailored to your circumstances.</p>
                    </div>
                  </div>
                </div>

                <a href="/contact" className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  Speak to an Adviser <ArrowRight size={18} />
                </a>
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

export default MortgageCalculator;
