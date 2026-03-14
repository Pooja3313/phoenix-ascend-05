import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Network from "./pages/Network";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import OurJourney from "./pages/OurJourney";
import NotFound from "./pages/NotFound";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ComplaintsProcedure from "./pages/ComplaintsProcedure";
import FairTreatment from "./pages/FairTreatment";
import ReferAFriend from "./pages/ReferAFriend";
import NetworkIntroducer from "./pages/NetworkIntroducer";
import NetworkSelfEmployedAdviser from "./pages/NetworkSelfEmployedAdviser";
import FinancialOmbudsman from "./pages/FinancialOmbudsman";
import Newsletter from "./pages/Newsletter";
import Protection from "./pages/services/Protection";
import Mortgage from "./pages/services/Mortgage";
import CommercialLending from "./pages/services/CommercialLending";
import Pensions from "./pages/services/Pensions";
import WillsEstatePlanning from "./pages/services/WillsEstatePlanning";
import ProtectionSubService from "./pages/services/ProtectionSubService";
import MortgageSubService from "./pages/services/MortgageSubService";
import MortgageCalculator from "./pages/services/MortgageCalculator";
import CommercialLendingSubService from "./pages/services/CommercialLendingSubService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/network" element={<Network />} />
          <Route path="/network/introducer" element={<NetworkIntroducer />} />
          <Route path="/network/self-employed-adviser" element={<NetworkSelfEmployedAdviser />} />
          <Route path="/financial-ombudsman-service" element={<FinancialOmbudsman />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/our-journey" element={<OurJourney />} />
          <Route path="/refer-a-friend" element={<ReferAFriend />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/complaints-procedure" element={<ComplaintsProcedure />} />
          <Route path="/fair-treatment" element={<FairTreatment />} />
          {/* Service main pages */}
          <Route path="/services/protection" element={<Protection />} />
          <Route path="/services/mortgage" element={<Mortgage />} />
          <Route path="/services/commercial-lending" element={<CommercialLending />} />
          <Route path="/services/pensions" element={<Pensions />} />
          <Route path="/services/wills-estate-planning" element={<WillsEstatePlanning />} />
          {/* Service sub-pages */}
          <Route path="/services/protection/:slug" element={<ProtectionSubService />} />
          <Route path="/services/mortgage/calculator" element={<MortgageCalculator />} />
          <Route path="/services/mortgage/:slug" element={<MortgageSubService />} />
          <Route path="/services/commercial-lending/:slug" element={<CommercialLendingSubService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
