import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

import LanguageSelect from "./LanguageSelect";
import { socialLinks } from "@/data/socials";
export default function Header11() {
  return (
    <header className="relative wrapper !bg-[#ffffff]">
      <div className="bg-[rgba(52,63,82)] !text-white font-bold text-[.75rem] !mb-2">
        <div className="container py-2 xl:!flex lg:!flex md:!flex xl:!flex-row lg:!flex-row md:!flex-row">
          <div className="flex flex-row items-center">
            <div className="icon !text-white !text-[1.1rem] !mt-[.25rem] !mr-[.5rem]">
              <i className="uil uil-location-pin-alt before:content-['\ebd8']" />
            </div>
            <address className="!mb-0 not-italic !leading-[inherit] block">
              Moonshine St. 14/05 Light City
            </address>
          </div>
          <div className="flex flex-row items-center me-6 ms-auto">
            <div className="icon !text-white !text-[1.1rem] !mt-[.25rem] !mr-[.5rem]">
              <i className="uil uil-phone-volume before:content-['\ec50']" />
            </div>
            <p className="!mb-0">00 (123) 456 78 90</p>
          </div>
          <div className="flex flex-row items-center">
            <div className="icon !text-white !text-[1.1rem] !mt-[.25rem] !mr-[.5rem]">
              <i className="uil uil-message before:content-['\ebfe']" />
            </div>
            <p className="!mb-0">
              <a
                href="mailto:sandbox@email.com"
                className="hover !text-white hover:!text-white"
              >
                sandbox@email.com
              </a>
            </p>
          </div>
        </div>
        {/* /.container */}
      </div>
      <nav className="navbar navbar-expand-lg center-nav transparent navbar-light">
        <div className="container xl:!flex-row lg:!flex-row !flex-nowrap items-center">
          <div className="navbar-brand w-full">
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
            <div className="offcanvas-body xl:!ml-auto lg:!ml-auto flex flex-col !h-full">
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
              {/* /.offcanvas-footer */}
            </div>
            {/* /.offcanvas-body */}
          </div>
          {/* /.navbar-collapse */}
          <div className="navbar-other w-full !flex !ml-auto">
            <ul className="navbar-nav !flex-row !items-center !ml-auto">
              <li className="nav-item dropdown language-select uppercase group">
                <LanguageSelect color="#f78b77" />
              </li>
              <li className="nav-item hidden xl:block lg:block md:block">
                <Link
                  to={`/contact`}
                  className="btn btn-sm btn-orange !text-white !bg-[#f78b77] border-[#f78b77] hover:text-white hover:bg-[#f78b77] hover:!border-[#f78b77] active:text-white active:bg-[#f78b77] active:border-[#f78b77] disabled:text-white disabled:bg-[#f78b77] disabled:border-[#f78b77] !text-[.85rem] !rounded-[.4rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                >
                  Contact
                </Link>
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
        {/* /.container */}
      </nav>
      {/* /.navbar */}
    </header>
  );
}
