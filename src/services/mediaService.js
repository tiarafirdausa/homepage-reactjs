import axios from "axios";
import API from "@/config/api";

export const getMedia = async (params = {}) => {
  try {
    const response = await axios.get(API.MEDIA.GET_ALL(), {
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching media:", error);
    throw error;
  }
};

export const getMediaCategories = async () => {
  try {
    const response = await axios.get(API.MEDIA.GET_CATEGORIES());
    return response.data;
  } catch (error) {
    console.error("Error fetching media categories:", error);
    throw error;
  }
};