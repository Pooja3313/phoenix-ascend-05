import { useParams, Navigate } from "react-router-dom";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { mortgageServices } from "@/data/mortgageData";

const MortgageSubService = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = mortgageServices.find(s => s.slug === slug);
  
  if (!service) return <Navigate to="/services/mortgage" replace />;
  
  return <ServiceDetailPage service={service} />;
};

export default MortgageSubService;
