import axios from "axios";

const getAllPillars = async () => {
    const response = await axios.get(`${import.meta.env.VITE_STRAPI_API_URL}/api/pillars?populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
        },
    });
    return response.data;
};

export { getAllPillars };