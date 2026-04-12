import { useState, useEffect } from "react";
import { getTermsOfService } from "@/services/api/termsOfServiceService";

type TermsOfService = any;

const useGetTermsOfService = () => {
  const [termsOfService, setTermsOfService] = useState<TermsOfService>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchTermsOfService = async () => {
      try {
        const response = await getTermsOfService();
  
        if (response.data) {
          console.log("Fetched termsOfService:", response);
          setTermsOfService(response.data);
        } else {
          console.warn("No termsOfService data found in response:", response);
        }
      } catch (err) {
        console.error("Error fetching termsOfService:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTermsOfService();
  }, []);

  return { termsOfService, loading, error };
};

export default useGetTermsOfService;