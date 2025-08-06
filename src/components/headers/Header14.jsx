import React from "react";
import Nav3 from "./Nav3";
import { Link } from "react-router-dom";

import { socialLinks } from "@/data/socials";
export default function Header14() {
  return (
    <header className="relative wrapper !bg-[#f2f3fb]">
      <nav className="navbar navbar-expand-lg center-logo transparent position-absolute navbar-dark">
        <div className="container justify-between items-center">
          <div className="flex flex-row w-full justify-between items-center xl:!hidden lg:!hidden">
            <div className="navbar-brand">
              <Link to={`/`}>
                <img
                  className="logo-dark"
                  srcSet="/assets/img/logo-purple@2x.png 2x"
                  alt="image"
                  src="/assets/img/logo-purple.png"
                  width={134}
                  height={26}
                />
                <img
                  className="logo-light"
                  srcSet="/assets/img/logo-light@2x.png 2x"
                  alt="image"
                  src="/assets/img/logo-light.png"
                  width={134}
                  height={26}
                />
              </Link>
            </div>
            <div className="navbar-other !ml-auto">
              <ul className="navbar-nav flex-row items-center">
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
          <div className="navbar-collapse-wrapper flex flex-row items-center w-full">
            <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
              <div className="offcanvas-header lg:mx-auto xl:mx-auto order-0 lg:!order-1 lg:!px-[5rem] xl:!order-1 xl:!px-[5rem] p-[1.5rem] !flex items-center justify-between flex-row">
                <Link
                  to={`/`}
                  className="transition-none hidden lg:!flex xl:!flex"
                >
                  <img
                    className="logo-dark"
                    srcSet="/assets/img/logo-purple@2x.png 2x"
                    alt="image"
                    src="/assets/img/logo-purple.png"
                    width={134}
                    height={26}
                  />
                  <img
                    className="logo-light"
                    srcSet="/assets/img/logo-light@2x.png 2x"
                    alt="image"
                    src="/assets/img/logo-light.png"
                    width={134}
                    height={26}
                  />
                </Link>
                <h3 className="!text-white xl:!text-[1.5rem]  lg:hidden !text-[calc(1.275rem_+_0.3vw)] !mb-0">
                  Sandbox
                </h3>
                <button
                  type="button"
                  className="btn-close btn-close-white  lg:hidden !mr-[-0.75rem] m-0 p-0 leading-none !text-[#343f52] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:text-white before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:!flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(255,255,255,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)]"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>

              <Nav3 />

              <div className="offcanvas-body xl:!hidden lg:!hidden order-4 !mt-auto">
                <div className="offcanvas-footer">
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
                      {socialLinks.slice(0, 4).map((elm, i) => (
                        <a
                          key={i}
                          className="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href={elm.href}
                        >
                          <i
                            className={`uil ${elm.icon} before:content-[${elm.unicode}] !text-white text-[1rem]`}
                          />
                        </a>
                      ))}
                    </nav>
                    {/* /.social */}
                  </div>
                </div>
              </div>
            </div>
            {/* /.navbar-collapse */}
          </div>
          {/* /.navbar-collapse-wrapper */}
        </div>
        {/* /.container */}
      </nav>
      {/* /.navbar */}
    </header>
  );
}
