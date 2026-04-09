import { useState, useEffect } from "react";
import { getServiceBySlug } from "@/services/api/servicesService";

type Service = any;

const useGetService = (slug: string) => {
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await getServiceBySlug(slug);

        if (response.data) {
          console.log("Fetched service:", response);
          setService(response.data);
        } else {
          console.warn("No service data found in response:", response);
        }
      } catch (err) {
        console.error("Error fetching service:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [slug]);

  return { service, loading, error };
};

export default useGetService;