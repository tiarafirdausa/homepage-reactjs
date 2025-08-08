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
    GET_RECENT_POSTS: () => `${BASE_URL}${BASE_API}/posts?sort[key]=published_at&sort[order]=desc&pageSize=3`,
  },
  CATEGORIES: {
    GET_ALL: () => `${BASE_URL}${BASE_API}/categories`,
  },
  TAGS: {
    GET_ALL: () => `${BASE_URL}${BASE_API}/tags`,
  },
  SETTINGS: `${BASE_URL}${BASE_API}/settings`,
  SOCIALS: `${BASE_URL}${BASE_API}/socials`,
};

export default API;