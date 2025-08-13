// src/components/common/MetaComponent.jsx

import { useEffect, useState } from "react";
import { getSettings } from "@/services/settingsService";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "@/config/url";

export default function MetaComponent({ title, description, image }) {
  const location = useLocation();
  const [siteSettings, setSiteSettings] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await getSettings();
        setSiteSettings(res);
      } catch (err) {
        console.error("Failed to load meta settings", err);
      }
    };
    if (!siteSettings) {
      fetchSettings();
    }
  }, [siteSettings]);

  useEffect(() => {
    if (!siteSettings) return;

    const seo = siteSettings.seo;
    const general = siteSettings.general;
    const appearance = siteSettings.appearance;

    // Tentukan nilai meta berdasarkan prop atau default dari settings
    const finalTitle = title || general?.site_title;
    const finalDescription = description || seo?.meta_description;
    const finalImage = image ? `${BASE_URL}${image}` : `${BASE_URL}${appearance?.logo}`;
    const finalUrl = `${window.location.origin}${location.pathname}`;

    // Set title
    if (finalTitle) document.title = finalTitle;

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
    setMetaTag("name", "description", finalDescription);

    // Open Graph
    setMetaTag("property", "og:title", finalTitle);
    setMetaTag("property", "og:description", finalDescription);
    setMetaTag("property", "og:image", finalImage);
    setMetaTag("property", "og:url", finalUrl);
    setMetaTag("property", "og:type", "website");

    // Twitter Card
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", finalTitle);
    setMetaTag("name", "twitter:description", finalDescription);
    setMetaTag("name", "twitter:image", finalImage);

  }, [siteSettings, location, title, description, image]);

  return null;
}