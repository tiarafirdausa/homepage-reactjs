import { BASE_URL, BASE_API } from "./url"

const API = {
  MENU: {
    GET_WITH_ITEMS: (slug) => `${BASE_URL}${BASE_API}/menus/with-items/${slug}`,
    GET_ALL_MENU_ITEMS: () => `${BASE_URL}${BASE_API}/menu-items`,
  },
  PAGES: {
    GET_BY_SLUG: (slug) => `${BASE_URL}${BASE_API}/pages/${slug}`,
  },
   POSTS: { 
    GET_ALL_POST: () => `${BASE_URL}${BASE_API}/posts`,
    GET_BY_SLUG: (slug) => `${BASE_URL}${BASE_API}/posts/${slug}`,
    GET_BY_CATEGORY: (slug) => `${BASE_URL}${BASE_API}/posts/category/${slug}`,
    GET_BY_TAG: (slug) => `${BASE_URL}${BASE_API}/posts/tag/${slug}`,
  },
  CATEGORIES: {
    GET_ALL: () => `${BASE_URL}${BASE_API}/categories`,
  },
  TAGS: {
    GET_ALL: () => `${BASE_URL}${BASE_API}/tags`,
  },
  MEDIA: {
    GET_ALL: () => `${BASE_URL}${BASE_API}/media`,
    GET_CATEGORIES: () => `${BASE_URL}${BASE_API}/media/categories`,
  },
   COMMENTS: {
    ADD_COMMENT: () => `${BASE_URL}${BASE_API}/comments`,
    GET_BY_POST_ID: (postId) => `${BASE_URL}${BASE_API}/comments/post/${postId}`,
    GET_BY_POST_SLUG: (slug) => `${BASE_URL}${BASE_API}/comments/${slug}`,
    GET_ALL_COMMENTS: () => `${BASE_URL}${BASE_API}/comments`,
    UPDATE_STATUS: (id) => `${BASE_URL}${BASE_API}/comments/${id}/status`,
    DELETE_COMMENT: (id) => `${BASE_URL}${BASE_API}/comments/${id}`,
  },
  MODULS: {
    GET_ALL: () => `${BASE_URL}${BASE_API}/moduls`,
    GET_BY_ID: (id) => `${BASE_URL}${BASE_API}/moduls/${id}`,
    GET_HOME_MODULS: () => `${BASE_URL}${BASE_API}/moduls/home`,
  },
  SETTINGS: `${BASE_URL}${BASE_API}/settings`,
  SOCIALS: `${BASE_URL}${BASE_API}/socials`,
};

export default API;