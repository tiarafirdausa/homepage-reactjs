import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getMenuWithItems } from "@/services/menuService";

const buildMenuTree = (items, parentId = null) => {
  return items
    .filter((item) => item.parent_id === parentId)
    .map((item) => ({
      ...item,
      children: buildMenuTree(items, item.id),
    }));
};

export default function Nav({ color = "#3f78e0" }) {
  const { pathname } = useLocation();
  const [menuTree, setMenuTree] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await getMenuWithItems("main-menu");
        const tree = buildMenuTree(data.items);
        setMenuTree(tree);
      } catch (error) {
        console.error("Failed to load menu:", error);
      }
    };
    fetchMenu();

    import("bootstrap").then((Bootstrap) => {
      const CLASS_NAME = "has-child-dropdown-show";
      const originalToggle = Bootstrap.Dropdown.prototype.toggle;
      Bootstrap.Dropdown.prototype.toggle = function () {
        document.querySelectorAll("." + CLASS_NAME).forEach(function (e) {
          e.classList.remove(CLASS_NAME);
        });
        let dd = this._element
          .closest(".dropdown")
          .parentNode.closest(".dropdown");
        for (; dd && dd !== document; dd = dd.parentNode.closest(".dropdown")) {
          dd.classList.add(CLASS_NAME);
        }
        return originalToggle.call(this);
      };

      document.querySelectorAll(".dropdown").forEach(function (dd) {
        dd.addEventListener("hide.bs.dropdown", function (e) {
          if (this.classList.contains(CLASS_NAME)) {
            this.classList.remove(CLASS_NAME);
            e.preventDefault();
          }
          e.stopPropagation();
        });
      });
    });

    return () => {
    };
  }, []);

  const renderMenuItems = (items) => {
    return (
      <ul className="pl-0 list-none">
        {items.map((item) => (
          <li
            key={item.id}
            className={`nav-item ${
              item.children.length > 0 ? "dropdown" : ""
            }`}
          >
            {item.children.length > 0 ? (
              <>
                <a
                  className={`dropdown-item hover:!text-[var(--current-color)] dropdown-toggle ${
                    item.url === pathname ? "!text-[var(--current-color)]" : ""
                  }`}
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  {item.title}
                </a>
                <ul className="dropdown-menu submenu">
                  {renderMenuItems(item.children)}
                </ul>
              </>
            ) : (
              <Link
                className={`dropdown-item hover:!text-[var(--current-color)] ${
                  item.url === pathname ? "!text-[var(--current-color)]" : ""
                }`}
                to={item.url}
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <ul className="navbar-nav" style={{ "--current-color": color }}>
      {menuTree.map((item) => (
        <li
          key={item.id}
          className={`nav-item ${item.children.length > 0 ? "dropdown" : ""}`}
        >
          {item.children.length > 0 ? (
            <>
              <a
                className={`nav-link dropdown-toggle hover:!text-[var(--current-color)] after:!text-[var(--current-color)] ${
                  item.url === pathname ? "!text-[var(--current-color)]" : ""
                }`}
                href="#"
                data-bs-toggle="dropdown"
              >
                {item.title}
              </a>
              <ul className="dropdown-menu">
                {renderMenuItems(item.children)}
              </ul>
            </>
          ) : (
            <Link
              className={`nav-link hover:!text-[var(--current-color)] ${
                item.url === pathname ? "!text-[var(--current-color)]" : ""
              }`}
              to={item.url}
            >
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}