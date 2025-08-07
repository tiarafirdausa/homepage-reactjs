import { useEffect } from "react";
import { getSettings } from "@/services/settingsService";

export default function MetaComponent() {
  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const res = await getSettings();
        const seo = res?.seo;
        const general = res?.general;
        const appearance = res?.appearance;

        if (!seo) return;

        // Set title
        if (general?.site_title) document.title = general.site_title;

        // Helper: create or update meta
        const setMetaTag = (attrName, attrValue, content) => {
          if (!content) return;
          let tag = document.querySelector(`meta[${attrName}="${attrValue}"]`);
          if (tag) {
            tag.setAttribute("content", content);
          } else {
            tag = document.createElement("meta");
            tag.setAttribute(attrName, attrValue);
            tag.setAttribute("content", content);
            document.head.appendChild(tag);
          }
        };

        // Standard meta
        setMetaTag("name", "description", seo.meta_description);

        // Open Graph
        setMetaTag("property", "og:title", general?.site_title);
        setMetaTag("property", "og:description", seo.meta_description);
        setMetaTag("property", "og:image", appearance?.logo);
        setMetaTag("property", "og:url", window.location.href);
        setMetaTag("property", "og:type", "website");

        // Twitter Card
        setMetaTag("name", "twitter:card", "summary_large_image");
        setMetaTag("name", "twitter:title", general?.site_title);
        setMetaTag("name", "twitter:description", seo.meta_description);
        setMetaTag("name", "twitter:image", appearance?.logo);

      } catch (err) {
        console.error("Failed to load meta settings", err);
      }
    };

    fetchMeta();
  }, []);

  return null;
}
