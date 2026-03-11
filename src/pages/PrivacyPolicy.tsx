import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative py-20 bg-gradient-to-br from-phoenix-gray-light via-background to-phoenix-green-light overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.08),transparent_60%)]" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy <span className="font-handwritten text-5xl md:text-6xl text-primary pen-underline">Policy</span>
            </h1>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl space-y-8">
            <div className="animate-float-up">
              <p className="text-muted-foreground leading-relaxed">
                Phoenix Finserv takes the privacy of personal data seriously. Please read the following important information which explains how we collect, store and use your personal data.
              </p>
            </div>

            <div className="animate-float-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-bold text-primary mb-3">Who are we?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Phoenix Finserv is authorised and regulated by the Financial Conduct Authority. You can check this on the Financial Services Register by visiting <a href="https://register.fca.org.uk/s/" className="text-primary hover:underline font-semibold" target="_blank" rel="noopener noreferrer">www.register.fca.org.uk</a> or by contacting the FCA on 0800 111 6768.
              </p>
            </div>

            <div className="animate-float-up" style={{ animationDelay: '0.15s' }}>
              <h3 className="text-xl font-bold text-primary mb-3">What do we mean by Personal Data?</h3>
              <p className="text-muted-foreground leading-relaxed">
                By personal data, we mean information that relates to you and is used to identify you, either directly or in conjunction with other material we hold. Your Personal Data may include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Name, Date of Birth, Gender, Nationality, Civil/Marital Status, Contact Details, Addresses.</li>
                <li>Employment and remuneration information.</li>
                <li>Bank account details, tax information, commitments for liabilities, personal credit history, sources of income, and expenditure.</li>
                <li>Health status and history (Special Category Data).</li>
                <li>Existing Plan information.</li>
              </ul>
            </div>

            <div className="animate-float-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold text-primary mb-3">Why do we collect information from you?</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provision of services and advice or to provide you with the information, products and services you have requested.</li>
                <li>To comply with regulation and legislation in relation to anti-money laundering regulation and the Financial Services & Markets Act.</li>
                <li>In order to undertake our services for you, we have the right to use your Personal Data provided it is in our legitimate business interest.</li>
              </ul>
            </div>

            <div className="animate-float-up" style={{ animationDelay: '0.25s' }}>
              <h3 className="text-xl font-bold text-primary mb-3">How do we collect information?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Most information we obtain will be directly from you during our meetings and discussions or this may be in writing, including via email. We may also need to obtain information from third parties in relation to verifying your identity if this is done electronically.
              </p>
            </div>

            <div className="animate-float-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-bold text-primary mb-3">What do we mean by special category data?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Where you ask us to advise or guide you on certain elements such as insurance, ethical investments or retirement income, we will ask you information about your ethnic origin, your health and medical history. We will record and use your Special Category Data in order to make inquiries to find suitable products and to provide you with advice.
              </p>
            </div>

            <div className="animate-float-up" style={{ animationDelay: '0.35s' }}>
              <h3 className="text-xl font-bold text-primary mb-3">How long do we store your data?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our Company will store your Data for a minimum of 10 years from the last business completion and once this time period has expired, we will delete your data.
              </p>
            </div>

            <div className="animate-float-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold text-primary mb-3">How do we protect your personal information?</h3>
              <p className="text-muted-foreground leading-relaxed">
                We have strict safeguarding processes to ensure that we meet our obligations under the Data Protection Regulations 2018. Your privacy is important to us and we will keep Your Personal Data secure in accordance with our legal responsibilities.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">We will:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
                <li>Record and store your Personal Data in our paper files and electronic files on our computer systems, which can only be accessed by authorised staff.</li>
                <li>Submit your Personal Data to providers both electronically or via paper-based forms to allow us to advise you or process your application for a product.</li>
                <li>Use your Personal Data to respond to any queries you have on your policies.</li>
              </ul>
            </div>

            <div className="animate-float-up" style={{ animationDelay: '0.45s' }}>
              <h3 className="text-xl font-bold text-primary mb-3">What are your rights surrounding your personal information?</h3>
              <p className="text-muted-foreground leading-relaxed">Your enhanced rights under the GDPR include:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li><span className="font-semibold text-foreground">The right of access</span> – we will provide a copy of your personal data within 30 days of requests.</li>
                <li><span className="font-semibold text-foreground">The right to rectification</span> – you may ask us to rectify any of your personal data which you believe is inaccurate or incomplete.</li>
                <li><span className="font-semibold text-foreground">The right to erasure</span> – you have the right to request for us to delete all records of your personal data.</li>
              </ul>
            </div>

            <div className="animate-float-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-xl font-bold text-primary mb-3">Who do we share your personal information with?</h3>
              <p className="text-muted-foreground leading-relaxed">
                We will only share your personal data with third parties when it is necessary for the service you have asked us to provide, and we will have contracts/safeguards in place to ensure that they comply with the GDPR.
              </p>
            </div>

            <div className="animate-float-up" style={{ animationDelay: '0.55s' }}>
              <h3 className="text-xl font-bold text-primary mb-3">Contact Us</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions or comments, please contact:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>By Phone: <a href="tel:+442079932737" className="text-primary hover:underline">+44 (0) 2079 932 737</a></li>
                <li>By Email: <a href="mailto:accountants@phoenix-accountancy.co.uk" className="text-primary hover:underline">accountants@phoenix-accountancy.co.uk</a></li>
                <li>By Writing: London, United Kingdom</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyGetInTouch />
    </div>
  );
};

export default PrivacyPolicy;
