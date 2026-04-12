import { useState, useEffect } from "react";
import { getWorkBySlug } from "@/services/api/worksService";

type Work = any;

const useGetWork = (slug: string) => {
  const [work, setWork] = useState<Work | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchWork = async () => {
      try {
        const response = await getWorkBySlug(slug);

        if (response.data) {
          console.log("Fetched work:", response);
          setWork(response.data);
        } else {
          console.warn("No work data found in response:", response);
        }
      } catch (err) {
        console.error("Error fetching work:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWork();
  }, [slug]);

  return { work, loading, error };
};

export default useGetWork;