// src/services/commentService.js
import axios from "axios";
import API from "@/config/api";

export const addComment = async (commentData, csrfToken) => {
  try {
    const response = await axios.post(
      API.COMMENTS.ADD_COMMENT(),
      commentData,
      {
        withCredentials: true,
        headers: {
          "X-CSRF-Token": csrfToken,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding comment:", error);
    throw error;
  }
};

export const getCommentsByPostId = async (postId, status = 'approved') => {
  try {
    const baseUrl = API.COMMENTS.GET_BY_POST_ID(postId);
    const url = status ? `${baseUrl}?status=${status}` : baseUrl;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching comments for post ID ${postId}:`, error);
    throw error;
  }
};

export const getCommentsByPostBySlug = async (slug, status = 'approved') => {
  try {
    const baseUrl = API.COMMENTS.GET_BY_POST_SLUG(slug);
    const url = status ? `${baseUrl}?status=${status}` : baseUrl;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching comments for post slug ${slug}:`, error);
    throw error;
  }
};

export const getAllComments = async (params = {}) => {
  try {
    const baseUrl = API.COMMENTS.GET_ALL_COMMENTS();
    const queryString = new URLSearchParams(params).toString();
    const url = `${baseUrl}?${queryString}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching all comments:", error);
    throw error;
  }
};

