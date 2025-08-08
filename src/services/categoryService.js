import axios from "axios";
import API from "@/config/api";

export const getCategories = async () => {
  try {
    const response = await axios.get(API.CATEGORIES.GET_ALL());
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
