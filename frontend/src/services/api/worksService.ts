import axios from "axios";

const getAllWorks = async () => {
    const response = await axios.get(`${import.meta.env.VITE_STRAPI_API_URL}/api/works?populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
        },
    });
    return response.data;
};

const getWorkBySlug = async (slug: string) => {
    const response = await axios.get(`${import.meta.env.VITE_STRAPI_API_URL}/api/works/${slug}?populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
        },
    });
    return response.data;
};

export { getAllWorks, getWorkBySlug };