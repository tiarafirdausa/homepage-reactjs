import axios from "axios";
import API from "@/config/api";

export const getTags = async () => {
  try {
    const response = await axios.get(API.TAGS.GET_ALL());
    return response.data;
  } catch (error) {
    console.error("Error fetching tags:", error);
    throw error;
  }
};