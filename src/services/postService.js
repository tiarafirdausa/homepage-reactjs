// src/services/postService.js
import axios from "axios";
import API from "@/config/api";

const addPublishedStatus = (params = {}) => {
  return { status: "published", ...params };
};

export const getPosts = async (params = {}) => {
  try {
    const baseUrl = API.POSTS.GET_ALL_POST();
    const publishedParams = addPublishedStatus(params);
    const queryString = new URLSearchParams(publishedParams).toString();
    const url = `${baseUrl}?${queryString}`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const getPostsByCategory = async (slug, params = {}) => {
  try {
    const baseUrl = API.POSTS.GET_BY_CATEGORY(slug);
    const publishedParams = addPublishedStatus(params);
    const queryString = new URLSearchParams(publishedParams).toString();
    const url = `${baseUrl}?${queryString}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching posts for category ${slug}:`, error);
    throw error;
  }
};

export const getPostsByTag = async (slug, params = {}) => {
  try {
    const baseUrl = API.POSTS.GET_BY_TAG(slug);
    const publishedParams = addPublishedStatus(params);
    const queryString = new URLSearchParams(publishedParams).toString();
    const url = `${baseUrl}?${queryString}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching posts for tag ${slug}:`, error);
    throw error;
  }
};

export const getSinglePostBySlug = async (slug, params = {}) => {
  try {
    const baseUrl = API.POSTS.GET_BY_SLUG(slug);
    const publishedParams = addPublishedStatus(params);
    const queryString = new URLSearchParams(publishedParams).toString();
    const url = `${baseUrl}?${queryString}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching single post with slug ${slug}:`, error);
    throw error;
  }
};

export const getPopularPosts = async (params = {}) => {
  try {
    const defaultParams = {
      ...params,
      "sort[key]": "hits",
      "sort[order]": "desc",
    };
    return getPosts(defaultParams);
  } catch (error) {
    console.error("Error fetching popular posts:", error);
    throw error;
  }
};