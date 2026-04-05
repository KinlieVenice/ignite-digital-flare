import axios from "axios";

const getAllWorks = async () => {
    const response = await axios.get(`${import.meta.env.VITE_STRAPI_API_URL}/api/works?populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
        },
    });
    return response.data;
};

const getWorkById = async (id: string) => {
    const response = await axios.get(`${import.meta.env.VITE_STRAPI_API_URL}/api/works/${id}?populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
        },
    });
    return response.data;
};

export { getAllWorks, getWorkById };