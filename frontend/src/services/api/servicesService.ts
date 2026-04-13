import axios from "axios";

const getAllServices = async () => {
    const response = await axios.get(`${import.meta.env.VITE_STRAPI_API_URL}/api/services?sort=sortOrder:asc&populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
        },
    });
    return response.data;
};

const getServiceBySlug = async (slug: string) => {
    const response = await axios.get(`${import.meta.env.VITE_STRAPI_API_URL}/api/services/${slug}?populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
        },
    });
    return response.data;
};

export { getAllServices, getServiceBySlug };