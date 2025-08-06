import React, { useEffect, useRef } from "react";
import Prism from "prismjs";

import ClipboardJS from "clipboard";
import { Outlet, useLocation } from "react-router-dom";

export default function DocsLayout() {
  const { pathname } = useLocation();
  const clipboard = useRef();
  const copyIconCode = useRef();

  useEffect(() => {
    setTimeout(() => {
      Prism.highlightAll();
      // Select all elements with the class .copyButton
      const copyButtons = document.querySelectorAll(".copyButton");

      // Loop through each element and remove it
      copyButtons?.forEach((button) => {
        button.remove();
      });
      const btnHtml =
        '<button type="button"  class="copyButton btn btn-sm btn-white rounded-pill btn-clipboard">Copy</button>';

      document.querySelectorAll(".code-wrapper-inner").forEach((element) => {
        element.insertAdjacentHTML("beforebegin", btnHtml);
      });

      clipboard.current = new ClipboardJS(".btn-clipboard", {
        target: (trigger) => trigger.nextElementSibling,
      });

      clipboard.current.on("success", (event) => {
        event.trigger.textContent = "Copied!";
        event.clearSelection();
        setTimeout(() => {
          event.trigger.textContent = "Copy";
        }, 2000);
      });

      copyIconCode.current = new ClipboardJS(".btn-copy-icon");

      copyIconCode.current.on("success", (event) => {
        event.clearSelection();
        event.trigger.textContent = "Copied!";
        setTimeout(() => {
          event.trigger.textContent = "Copy";
        }, 2300);
      });
    }, 400);
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const navLinks = document.querySelectorAll(".nav-link.scroll");

      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
          });
          const activeLink = document.querySelector(
            `.nav-link.scroll[href*="${id}"]`
          );
          if (activeLink) {
            activeLink.classList.add("active");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    const handleLinkClick = (e) => {
      e.preventDefault();
      e.currentTarget.blur();
      const href = e.currentTarget.getAttribute("href");
      const offsetTop = document.querySelector(href)?.offsetTop || 0;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    };

    const scrollLinks = document.querySelectorAll(".scroll");
    scrollLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    // Cleanup to avoid memory leaks
    return () => {
      // Select all elements with the class .copyButton
      const copyButtons = document.querySelectorAll(".copyButton");

      // Loop through each element and remove it
      copyButtons?.forEach((button) => {
        button.remove();
      });
      clipboard.current?.destroy();
      copyIconCode.current?.destroy();
      window.removeEventListener("scroll", handleScroll);
      scrollLinks?.forEach((link) => {
        link?.removeEventListener("click", handleLinkClick);
      });
    };
  }, [pathname]);
  return (
    <>
      <Outlet />
    </>
  );
}
