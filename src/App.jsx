import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Context from "@/context/Context";
import SearchModal from "@/components/modals/SearchModal";
import InfoModal from "@/components/modals/InfoModal";
import ProgressWrap from "@/components/common/ProgressWrap";
import ScrollTopBehaviour from "@/components/common/ScrollToTopBehaviour";

import initPlayer from "@/utlis/initPlayer";
import scrollQue from "@/utlis/scrollCue.min.js";
import useStickyNavbar from "@/hooks/useStickyNavbar";

// Lazy-loaded pages
const DemoPage15 = lazy(() => import("./pages/homes/demo15/index.jsx"));
const SigninPage = lazy(() => import("./pages/utility/signin/index.jsx"));

function App() {
  const { pathname } = useLocation();

  // useStickyNavbar();

  // Scroll cue animation
  useEffect(() => {
    scrollQue().init();
    window.dispatchEvent(new Event("scroll"));
  }, [pathname]);

  // Init player and overlays
  useEffect(() => {
    initPlayer();
    const overlayElements = document.querySelectorAll(".overlay > a, .overlay > span");
    overlayElements.forEach((element) => {
      const overlayBg = document.createElement("span");
      overlayBg.className = "bg";
      element.appendChild(overlayBg);
    });
  }, [pathname]);

  // Tooltip & Popover from Bootstrap
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

  // Offcanvas, Modals, Search Focus
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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<DemoPage15 />} />
          <Route path="/signin" element={<SigninPage />} />
        </Routes>
      </Suspense>

      <SearchModal />
      <InfoModal />
      <ProgressWrap />
      <ScrollTopBehaviour />
    </Context>
  );
}

export default App;
