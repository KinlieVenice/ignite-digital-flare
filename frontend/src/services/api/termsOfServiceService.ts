import axios from "axios";

const getTermsOfService = async () => {
    const response = await axios.get(`${import.meta.env.VITE_STRAPI_API_URL}/api/terms-of-service?populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
        },
    });
    return response.data;
};

export { getTermsOfService };