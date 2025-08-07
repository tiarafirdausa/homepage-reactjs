import axios from "axios";
import API from "@/config/api";

export const getMenuWithItems = async (slug = "main-menu") => {
  try {
    const res = await axios.get(API.MENU.GET_WITH_ITEMS(slug));
    return res.data;
  } catch (error) {
    console.error("Gagal fetch menu:", error);
    throw error;
  }
};

export const getAllMenuItems = async () => {
  try {
    const res = await axios.get(API.MENU.GET_ALL_MENU_ITEMS());
    return res.data;
  } catch (error) {
    console.error("Gagal fetch all menu items:", error);
    throw error;
  }
};