// src/hooks/useStickyNavbar.jsx

import { useEffect, useState } from "react";

export default function useStickyNavbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    const handleSticky = () => {
      const isStickyNow = window.scrollY > 120;
      setIsSticky(isStickyNow);

      if (isStickyNow) {
        navbar.classList.add("fixed", "navbar-clone");
        if (navbar.classList.contains("transparent") && navbar.classList.contains("navbar-dark")) {
          navbar.classList.remove("navbar-dark");
          navbar.classList.add("navbar-light", "navbar-dark-removed");
        }
      } else {
        navbar.classList.remove("fixed", "navbar-clone");
        if (navbar.classList.contains("transparent") && navbar.classList.contains("navbar-dark-removed")) {
          navbar.classList.add("navbar-dark");
          navbar.classList.remove("navbar-light", "navbar-dark-removed");
        }
      }

      if (window.scrollY > 300) {
        navbar.classList.add("navbar-stick");
      } else {
        navbar.classList.remove("navbar-stick");
      }
    };

    window.addEventListener("scroll", handleSticky);
    return () => window.removeEventListener("scroll", handleSticky);
  }, []);

  return isSticky;
}