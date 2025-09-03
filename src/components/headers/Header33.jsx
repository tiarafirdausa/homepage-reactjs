// src/components/headers/Header33.jsx

import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import useStickyNavbar from "@/hooks/useStickyNavbar";
import { getSettings } from "@/services/settingsService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMapping } from "@/utils/iconMapping";
import { getActiveSocials } from "@/services/socialService";
import { BASE_URL } from "@/config/url";

export default function Header33() {
  const isSticky = useStickyNavbar();
  const [logo, setLogo] = useState("/assets/img/logo-dark.png");
  const [shortTitle, setShortTitle] = useState("");
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const settings = await getSettings();
        if (settings.appearance && settings.appearance.logo) {
          setLogo(BASE_URL + settings.appearance.logo);
        }
        if (settings.general && settings.general.short_title) {
          setShortTitle(settings.general.short_title);
        }

        const pageSize = 4;
        const activeSocials = await getActiveSocials(pageSize);
        setSocialLinks(activeSocials);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <header className="relative wrapper bg-soft-primary !bg-[#edf2fc]">
      <nav
        className="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark xl:pt-[.3rem] lg:pt-[.3rem]"
        style={{ "--current-color": "#3f78e0" }}
      >
        <div className="container xl:!flex-row lg:!flex-row !flex-nowrap items-center lg:!justify-between">
          <div className="navbar-brand">
            <Link to={`/`}>
              <div className="flex items-center">
                <img src={logo} alt="site logo" width={60} height={60} />
                <span
                  className={`ml-2 font-bold ${
                    isSticky ? "text-black" : "text-white"
                  }`}
                >
                  {shortTitle}
                </span>
              </div>
            </Link>
          </div>
          <div
            className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
            tabIndex={-1}
            id="offcanvas-nav"
            data-bs-scroll="true"
            data-bs-backdrop="true"
          >
            <div className="offcanvas-header xl:!hidden lg:!hidden flex items-center justify-between flex-row p-6">
              <h3 className="!text-white xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-0">
                {shortTitle}
              </h3>
              <button
                type="button"
                className="btn-close btn-close-white !mr-[-0.75rem] m-0 p-0 leading-none !text-[#343f52] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:text-white before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:!flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(255,255,255,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)]"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body flex flex-col lg:!flex-row !h-full lg:justify-center lg:!grow">
              <ul className="navbar-nav">
                <Nav />
              </ul>
              <div className="offcanvas-footer xl:!hidden lg:!hidden">
                <div>
                  <a
                    href="mailto:first.last@email.com"
                    className="link-inverse"
                  >
                    info@email.com
                  </a>
                  <br />
                  00 (123) 456 78 90 <br />
                  <nav className="nav social social-white !mt-4">
                    {socialLinks.map((elm) => (
                      <a
                        key={elm.id}
                        className="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                        href={elm.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={iconMapping[elm.icon_class]} />
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-other !flex !ml-auto">
            <ul className="navbar-nav !flex-row !items-center !ml-auto">
              <li className="nav-item hidden xl:block lg:block md:block">
                <Link
                  to={`/contact`}
                  className="btn btn-sm btn-white !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item xl:!hidden lg:!hidden">
                <button
                  className="hamburger offcanvas-nav-btn"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas-nav"
                >
                  <span />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}