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
          <Route path="/network/appointed-representative" element={<NetworkAppointedRepresentative />} />
          <Route path="/network/introducer" element={<NetworkIntroducer />} />
          <Route path="/network/self-employed-adviser" element={<NetworkSelfEmployedAdviser />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/our-journey" element={<OurJourney />} />
          <Route path="/refer-a-friend" element={<ReferAFriend />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/complaints-procedure" element={<ComplaintsProcedure />} />
          <Route path="/fair-treatment" element={<FairTreatment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
