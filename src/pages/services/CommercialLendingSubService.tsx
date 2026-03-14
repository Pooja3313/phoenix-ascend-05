import { useParams, Navigate } from "react-router-dom";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { commercialLendingServices } from "@/data/commercialLendingData";

const CommercialLendingSubService = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = commercialLendingServices.find(s => s.slug === slug);
  
  if (!service) return <Navigate to="/services/commercial-lending" replace />;
  
  return <ServiceDetailPage service={service} />;
};

export default CommercialLendingSubService;
