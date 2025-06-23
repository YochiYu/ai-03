import { useParams } from "react-router-dom";
import CompanyDetail from "./CompanyDetail";

const LanguageModelDetail = () => {
  const { companyName } = useParams();

  return <CompanyDetail />; // CompanyDetail will handle data fetching based on companyName
};

export default LanguageModelDetail; 