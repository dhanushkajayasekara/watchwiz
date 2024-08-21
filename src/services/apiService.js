import axios from "axios";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_OMDB_API_URL,
    params: {
        apiKey: import.meta.env.VITE_OMDB_API_KEY,
    },
});

export const fetchFromOMDB = async (params) => {
    try {
        return await apiClient.get("", { params });
    } catch (error) {
        throw error;
    }
};
