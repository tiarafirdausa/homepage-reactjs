import { useEffect } from "react";

export default function useStickyNavbar() {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
     console.log("Navbar element:", navbar);
    if (!navbar) return;

    const handleSticky = () => {
      if (window.scrollY > 120) {
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
}
