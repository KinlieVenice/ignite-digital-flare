import { useState, useEffect } from "react";
import { getAllWorks } from "@/services/api";

type Project = any;

export const useGetWorks = () => {
  const [works, setWorks] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchAllWorks = async () => {
      try {
        const response = await getAllWorks();
  
        if (response.data) {
          console.log("Fetched works:", response);
          setWorks(response.data);
        } else {
          console.warn("No works data found in response:", response);
        }
      } catch (err) {
        console.error("Error fetching works:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllWorks();
  }, []);

  return { works, loading, error };
};