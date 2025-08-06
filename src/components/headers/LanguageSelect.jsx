import { useState } from "react";

export default function LanguageSelect({ color = "#3f78e0" }) {
  const languages = ["En", "De", "Es"];
  const [activeLang, setActiveLang] = useState("En");
  return (
    <>
      {" "}
      <a
        className={`nav-link dropdown-item dropdown-toggle hover:!text-[${color}] after:!text-[${color}]`}
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {activeLang}
      </a>
      <ul className="dropdown-menu group-hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]">
        {languages.map((lang) => (
          <li className="nav-item" key={lang}>
            <a
              href="#"
              onClick={() => setActiveLang(lang)}
              className={`dropdown-item hover:!text-[${color}] hover:bg-[inherit] ${
                activeLang === lang ? `!text-[${color}]` : ""
              }`}
            >
              {lang}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
