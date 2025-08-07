// src/services/socialService.js
import axios from "axios";
import API from "@/config/api";

export const getActiveSocials = async (pageSize = 100) => {
  try {
    const res = await axios.get(API.SOCIALS, {
      params: {
        pageSize: pageSize,
        pageIndex: 1,
      },
    });
    return res.data.data.filter((item) => item.is_active);
  } catch (error) {
    console.error("Error fetching social data:", error);
    return [];
  }
};