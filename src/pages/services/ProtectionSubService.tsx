import { useParams, Navigate } from "react-router-dom";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { allProtectionServices } from "@/data/protectionData";

const ProtectionSubService = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = allProtectionServices.find(s => s.slug === slug);
  
  if (!service) return <Navigate to="/services/protection" replace />;
  
  return <ServiceDetailPage service={service} />;
};

export default ProtectionSubService;
