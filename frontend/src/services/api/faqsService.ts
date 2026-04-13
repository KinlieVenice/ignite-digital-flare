import axios from "axios";

const getAllFaqs = async () => {
    const response = await axios.get(`${import.meta.env.VITE_STRAPI_API_URL}/api/faqs?sort=sortOrder:asc&populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
        },
    });
    return response.data;
};

export { getAllFaqs };