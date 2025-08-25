// src/services/modulService.js

import axios from "axios";
import API from "@/config/api";

// Mengambil semua modul
export const getAllModuls = async (params) => {
  try {
    const response = await axios.get(API.MODULS.GET_ALL(), { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching all moduls:", error);
    throw error;
  }
};

// Mengambil modul berdasarkan ID
export const getModulById = async (id) => {
  try {
    const response = await axios.get(API.MODULS.GET_BY_ID(id));
    return response.data;
  } catch (error) {
    console.error(`Error fetching modul with ID ${id}:`, error);
    throw error;
  }
};

// Mengambil modul yang diatur sebagai "Home"
export const getHomeModules = async () => {
  try {
    const response = await axios.get(API.MODULS.GET_HOME_MODULS());
    return response.data;
  } catch (error) {
    console.error("Error fetching home modules:", error);
    throw error;
  }
};

export const getWidgetModules = async () => {
  try {
    const response = await axios.get(API.MODULS.GET_WIDGET_MODULS());
    return response.data;
  } catch (error) {
    console.error("Error fetching widget modules:", error);
    throw error;
  }
}