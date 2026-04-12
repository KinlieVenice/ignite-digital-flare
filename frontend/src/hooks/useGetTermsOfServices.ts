import { useState, useEffect } from "react";
import { getTermsOfServices } from "@/services/api/termsOfServicesService";

type TermsOfService = any;

const useGetTermsOfServices = () => {
  const [termsOfServices, setTermsOfServices] = useState<TermsOfService>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchTermsOfServices = async () => {
      try {
        const response = await getTermsOfServices();
  
        if (response.data) {
          console.log("Fetched termsOfServices:", response);
          setTermsOfServices(response.data);
        } else {
          console.warn("No termsOfServices data found in response:", response);
        }
      } catch (err) {
        console.error("Error fetching termsOfServices:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTermsOfServices();
  }, []);

  return { termsOfServices, loading, error };
};

export default useGetTermsOfServices;