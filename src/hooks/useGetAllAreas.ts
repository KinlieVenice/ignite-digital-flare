import { useState, useEffect } from "react";
import { getAllPillars } from "@/services/api/pillarsService";

type Pillar = any;

const useGetAllPillars = () => {
  const [pillars, setPillars] = useState<Pillar[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchAllPillars = async () => {
      try {
        const response = await getAllPillars();
  
        if (response.data) {
          console.log("Fetched pillars:", response);
          setPillars(response.data);
        } else {
          console.warn("No pillars data found in response:", response);
        }
      } catch (err) {
        console.error("Error fetching pillars:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPillars();
  }, []);

  return { pillars, loading, error };
};

export default useGetAllPillars;