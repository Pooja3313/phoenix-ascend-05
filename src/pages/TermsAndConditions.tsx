import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-phoenix-gray-light via-background to-phoenix-green-light overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.08),transparent_60%)]" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms & <span className="font-handwritten text-5xl md:text-6xl text-primary pen-underline">Conditions</span>
            </h1>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none space-y-8">
              <div className="animate-float-up">
                <h3 className="text-xl font-bold text-primary mb-3">Terms and conditions of use</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This website is provided by Phoenix Finserv. Use of the Site is governed by these terms and conditions. Please read them now. By using the Site you indicate that you accept the Terms and Conditions and that you agree to abide by them. If you are not willing to accept these Terms and Conditions you may not use the Site.
                </p>
              </div>

              <div className="animate-float-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-xl font-bold text-primary mb-3">Access</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access to the Site is permitted on a temporary basis, and we reserve the right to withdraw or amend the service we provide on the Site without notice. From time to time, we may restrict access to some parts of the Site, or the entire Site, to users who have registered with us. If you choose, or you are provided with, a user identification code, password or any other piece of information as part of our security procedures, you must treat such information as confidential, and you must not disclose it to any third party.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  We have the right to disable any user identification code or password, whether chosen by you or allocated by us, at any time, if in our opinion you have failed to comply with any of the provisions of these terms of use.
                </p>
              </div>

              <div className="animate-float-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-bold text-primary mb-3">Disclaimer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Site and its contents are for general information only and are provided "as is". We make no warranties, representations or undertakings about:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                  <li>Any of the content of the Site (including, without limitation, any as to the quality, accuracy, completeness or fitness for any particular purpose of such content) or</li>
                  <li>Any content of any other third party website referred to or accessed by hypertext link through the Site.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  We make no guarantees that the Site is free from so called computer viruses. It is strongly recommended that you check for such viruses before downloading it or its contents.
                </p>
              </div>

              <div className="animate-float-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-xl font-bold text-primary mb-3">Links</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Links to third party websites are for your convenience only. Such websites are operated and controlled by third parties and their inclusion does not imply any endorsement or approval by the Company of the materials on such websites.
                </p>
              </div>

              <div className="animate-float-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-bold text-primary mb-3">Liability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Company accepts no liability for any claims, penalties, loss or expenses arising from: any reliance placed on the content of the Site; the use or inability to use the Site; the downloading of any materials from the Site; or any unauthorised access to or alteration to the Site. This clause shall not exclude liability for death or personal injury caused by the negligence of the company.
                </p>
              </div>

              <div className="animate-float-up" style={{ animationDelay: '0.5s' }}>
                <h3 className="text-xl font-bold text-primary mb-3">Copyright</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The content of the Site (including, but not limited to all text and artwork) is protected by copyright. You may view or download any part of the Site for private purposes, but you are not permitted, without our permission, to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                  <li>Store the Site, or any part of the Site, for any other purpose.</li>
                  <li>Print copies of the Site, or any part of the Site, for any other purpose.</li>
                  <li>Reproduce, copy or transmit the Site, or any part of the Site, in any way, for any other purpose or in any other medium.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">All other rights which are not specifically granted are reserved.</p>
              </div>

              <div className="animate-float-up" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-xl font-bold text-primary mb-3">Privacy Policy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Please read our <a href="/privacy-policy" className="text-primary hover:underline font-semibold">Privacy Policy</a> for details of how we use information about you.
                </p>
              </div>

              <div className="animate-float-up" style={{ animationDelay: '0.7s' }}>
                <h3 className="text-xl font-bold text-primary mb-3">Uploading material to the Site</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Other than personally identifiable information, which is covered under our Privacy Policy, any material you transmit or post to the Site shall be considered non-confidential and non-proprietary. We shall have no obligations with respect to such material and shall have the right to use, copy, distribute and disclose to third parties any such material for any purpose.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  You are prohibited from posting or transmitting to or from the Site any material:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                  <li>That is threatening, defamatory, obscene, indecent, seditious, offensive, pornographic, abusive, liable to incite racial hatred, discriminatory, menacing, scandalous, inflammatory, blasphemous, in breach of confidence, in breach of privacy or which may cause annoyance or inconvenience.</li>
                  <li>Which constitutes or encourages conduct that would be considered a criminal offence, give rise to civil liability, or otherwise be contrary to the law of or infringe the rights of any third party, in the UK or any other country in the world.</li>
                  <li>Which is technically harmful (including, without limitation, computer viruses, logic bombs, Trojan horses, worms, harmful components, corrupted data or other malicious software or harmful data).</li>
                </ul>
              </div>

              <div className="animate-float-up" style={{ animationDelay: '0.8s' }}>
                <h3 className="text-xl font-bold text-primary mb-3">Changes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Company reserves the right to amend or replace the Terms and Conditions at any time. If we make any substantial changes we will notify you by posting a prominent notice on the Site.
                </p>
              </div>

              <div className="animate-float-up" style={{ animationDelay: '0.9s' }}>
                <h3 className="text-xl font-bold text-primary mb-3">Jurisdiction</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and Conditions shall be governed by and interpreted in accordance with the laws of England & Wales and you irrevocably agree that the courts of England shall have exclusive jurisdiction to settle any dispute which may arise out of, under, or in connection with, these Terms and Conditions.
                </p>
              </div>

              <div className="animate-float-up" style={{ animationDelay: '1s' }}>
                <h3 className="text-xl font-bold text-primary mb-3">Enquiries</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any enquiries regarding these Terms and Conditions please contact us at{" "}
                  <a href="mailto:accountants@phoenix-accountancy.co.uk" className="text-primary hover:underline font-semibold">accountants@phoenix-accountancy.co.uk</a>.
                </p>
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

export default TermsAndConditions;
