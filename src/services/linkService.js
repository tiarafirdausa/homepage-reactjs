import axios from "axios";
import API from "@/config/api";

export const getLinks = async (params = {}) => {
    try {
        const baseUrl = API.LINKS.GET_ALL_LINKS();
        const queryString = new URLSearchParams(params).toString();
        const url = `${baseUrl}?${queryString}`;

        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error fetching links:", error);
        throw error;
    }
};