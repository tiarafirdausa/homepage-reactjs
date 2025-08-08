import axios from "axios";
import API from "@/config/api";

export const getPageBySlug = async (slug) => {
  try {
    const res = await axios.get(API.PAGES.GET_BY_SLUG(slug));
    return res.data;
  } catch (error) {
    console.error("Gagal fetch page:", error);
    throw error;
  }
};