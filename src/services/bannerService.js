import axios from "axios";
import API from "@/config/api";

export const getBanners = async (params = {}) => {
  try {
    const baseUrl = API.BANNERS.GET_ALL_BANNERS();
    const queryString = new URLSearchParams(params).toString();
    const url = `${baseUrl}?${queryString}`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching banners:", error);
    throw error;
  }
};