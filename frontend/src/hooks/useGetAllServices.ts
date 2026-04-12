import { useState, useEffect } from "react";
import { getAllServices } from "@/services/api/servicesService";

type Service = any;

const useGetAllServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchAllServices = async () => {
      try {
        const response = await getAllServices();
  
        if (response.data) {
          console.log("Fetched services:", response);
          setServices(response.data);
        } else {
          console.warn("No services data found in response:", response);
        }
      } catch (err) {
        console.error("Error fetching services:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllServices();
  }, []);

  return { services, loading, error };
};

export default useGetAllServices;