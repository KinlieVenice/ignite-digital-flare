import { useState, useEffect } from "react";
import { getAllFaqs } from "@/services/api/faqsService";

type Faq = any;

const useGetAllFaqs = () => {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchAllFaqs = async () => {
      try {
        const response = await getAllFaqs();
  
        if (response.data) {
          console.log("Fetched faqs:", response);
          setFaqs(response.data);
        } else {
          console.warn("No faqs data found in response:", response);
        }
      } catch (err) {
        console.error("Error fetching faqs:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllFaqs();
  }, []);

  return { faqs, loading, error };
};

export default useGetAllFaqs;