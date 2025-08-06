import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

import LanguageSelect from "./LanguageSelect";
import { socialLinks } from "@/data/socials";

export default function Header13() {
  return (
    <header className="relative wrapper !bg-[#fef4f2]">
      <nav className="navbar navbar-expand-lg extended navbar-light caret-none">
        <div className="container xl:!flex-col lg:!flex-col">
          <div className="topbar flex flex-row w-full justify-between items-center">
            <div className="navbar-brand">
              <Link to={`/`}>
                <img
                  srcSet="/assets/img/logo-dark@2x.png 2x"
                  alt="image"
                  src="/assets/img/logo-dark.png"
                  width={134}
                  height={26}
                />
              </Link>
            </div>
            <div className="navbar-other !ml-auto">
              <ul className="navbar-nav !flex-row items-center">
                <li className="nav-item">
                  <a
                    className="nav-link hover:!text-[#f78b77]"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvas-info"
                  >
                    <i className="uil uil-info-circle before:content-['\eb99'] !text-[1.1rem]" />
                  </a>
                </li>

                <li className="nav-item dropdown language-select uppercase">
                  <LanguageSelect color="#f78b77" />
                </li>
                <li className="nav-item xl:!hidden lg:!hidden">
                  <button className="hamburger offcanvas-nav-btn">
                    <span />
                  </button>
                </li>
              </ul>
              {/* /.navbar-nav */}
            </div>
            {/* /.navbar-other */}
          </div>
          {/* /.flex */}
          <div className="navbar-collapse-wrapper bg-[rgba(255,255,255)] opacity-100 flex flex-row items-center">
            <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
              <div className="offcanvas-header xl:!hidden lg:!hidden flex items-center justify-between flex-row p-6">
                <h3 className="!text-white xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-0">
                  Sandbox
                </h3>
                <button
                  type="button"
                  className="btn-close btn-close-white !mr-[-0.75rem] m-0 p-0 leading-none !text-[#343f52] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:text-white before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:!flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(255,255,255,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)]"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body flex flex-col !h-full">
                <Nav color="#f78b77" />
                {/* /.navbar-nav */}
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
                      <a
                        className="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                        href="#"
                      >
                        <i className="uil uil-twitter before:content-['\ed59'] !text-white text-[1rem]" />
                      </a>
                      {socialLinks.slice(0, 4).map((elm, i) => (
                        <a key={i} className="" href={elm.href}>
                          <i
                            className={`uil ${elm.icon} before:content-[${elm.unicode}] !text-[${elm.color}] text-[1rem]`}
                          />
                        </a>
                      ))}
                    </nav>
                    {/* /.social */}
                  </div>
                </div>
                {/* /.offcanvas-footer */}
              </div>
              {/* /.offcanvas-body */}
            </div>
            {/* /.navbar-collapse */}
            <div className="navbar-other !ml-auto w-full hidden xl:block lg:block">
              <nav className="nav social social-muted justify-end text-right">
                <a
                  className="m-[0_0_0_.7rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                >
                  <i className="uil uil-twitter before:content-['\ed59'] text-[1rem] !text-[#5daed5]" />
                </a>
                <a
                  className="m-[0_0_0_.7rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                >
                  <i className="uil uil-facebook-f before:content-['\eae2'] text-[1rem] !text-[#4470cf]" />
                </a>
                <a
                  className="m-[0_0_0_.7rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                >
                  <i className="uil uil-dribbble before:content-['\eaa2'] text-[1rem] !text-[#e94d88]" />
                </a>
                <a
                  className="m-[0_0_0_.7rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                >
                  <i className="uil uil-instagram before:content-['\eb9c'] text-[1rem] !text-[#d53581]" />
                </a>
              </nav>
              {/* /.social */}
            </div>
            {/* /.navbar-other */}
          </div>
          {/* /.navbar-collapse-wrapper */}
        </div>
        {/* /.container */}
      </nav>
      {/* /.navbar */}

      {/* /.offcanvas */}
    </header>
  );
}
