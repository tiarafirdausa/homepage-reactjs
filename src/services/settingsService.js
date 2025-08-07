import axios from "axios";
import API from "@/config/api";

export const getSettings = async () => {
  const res = await axios.get(API.SETTINGS);
  return res.data;
};
