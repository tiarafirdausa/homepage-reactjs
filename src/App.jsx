// src/App.jsx

import React, { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Context from "@/context/Context";
import SearchModal from "@/components/modals/SearchModal";
import InfoModal from "@/components/modals/InfoModal";
import ProgressWrap from "@/components/common/ProgressWrap";
import ScrollTopBehaviour from "@/components/common/ScrollToTopBehaviour";
import AppRoutes from "./components/route/AppRoutes.jsx";

import initPlayer from "@/utils/initPlayer.js";
import scrollQue from "@/utils/scrollCue.min.js";

import { getSettings } from "./services/settingsService.js";
import { BASE_URL } from "@/config/url";

const DemoPage15 = lazy(() => import("./pages/homes/demo15/index.jsx"));
const SigninPage = lazy(() => import("./pages/utility/signin/index.jsx"));

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const updateFavicon = async () => {
      try {
        const settings = await getSettings();
        const logoPath = settings.appearance.logo;
        const logoUrl = `${BASE_URL}${logoPath}`;

        const existingLink = document.querySelector('link[rel="icon"]');
        if (existingLink) {
          existingLink.href = logoUrl;
        } else {
          const newLink = document.createElement("link");
          newLink.rel = "icon";
          newLink.href = logoUrl;
          document.head.appendChild(newLink);
        }
      } catch (error) {
        console.error("Failed to load settings:", error);
      }
    };
    updateFavicon();
  }, []);

  useEffect(() => {
    scrollQue().init();
    window.dispatchEvent(new Event("scroll"));
  }, [pathname]);

  useEffect(() => {
    initPlayer();
    const overlayElements = document.querySelectorAll(".overlay > a, .overlay > span");
    overlayElements.forEach((element) => {
      const overlayBg = document.createElement("span");
      overlayBg.className = "bg";
      element.appendChild(overlayBg);
    });
  }, [pathname]);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
      const tooltipEls = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      const popoverEls = document.querySelectorAll('[data-bs-toggle="popover"]');
      const tooltipList = [...tooltipEls].map((el) => new bootstrap.Tooltip(el));
      const popoverList = [...popoverEls].map((el) => new bootstrap.Popover(el));
      return () => {
        tooltipList.forEach((t) => t.dispose());
        popoverList.forEach((p) => p.dispose());
      };
    });
  }, [pathname]);

  useEffect(() => {
    import("bootstrap").then(({ Modal, Offcanvas }) => {
      const modals = document.querySelectorAll(".modal.show");
      modals.forEach((modal) => Modal.getInstance(modal)?.hide());
      const offcanvas = document.querySelectorAll(".offcanvas.show");
      offcanvas.forEach((item) => Offcanvas.getInstance(item)?.hide());
      const searchCanvas = document.getElementById("offcanvas-search");
      searchCanvas?.addEventListener("shown.bs.offcanvas", () => {
        document.getElementById("search-form")?.focus();
      });
    });
  }, [pathname]);

  return (
    <Context>
      <AppRoutes DemoPage15={DemoPage15} SigninPage={SigninPage} />
      <SearchModal />
      <InfoModal />
      <ProgressWrap />
      <ScrollTopBehaviour />
    </Context>
  );
}

export default App;