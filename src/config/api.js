import { BASE_URL, BASE_API } from "./url"

const API = {
  MENU: {
    GET_WITH_ITEMS: (slug) => `${BASE_URL}${BASE_API}/menus/with-items/${slug}`,
    GET_ALL_MENU_ITEMS: () => `${BASE_URL}${BASE_API}/menu-items`,
  },
  SETTINGS: `${BASE_URL}${BASE_API}/settings`,
  SOCIALS: `${BASE_URL}${BASE_API}/socials`,
};

export default API;