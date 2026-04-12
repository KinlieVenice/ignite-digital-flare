import { useState, useEffect } from "react";
import { getAllTestimonials } from "@/services/api/testimonialsService";

type Testimonial = any;

const useGetAllTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchAllTestimonials = async () => {
      try {
        const response = await getAllTestimonials();
  
        if (response.data) {
          console.log("Fetched testimonials:", response);
          setTestimonials(response.data);
        } else {
          console.warn("No testimonials data found in response:", response);
        }
      } catch (err) {
        console.error("Error fetching testimonials:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllTestimonials();
  }, []);

  return { testimonials, loading, error };
};

export default useGetAllTestimonials;