import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

import { socialLinks } from "@/data/socials";
export default function Home31() {
  return (
    <header className="relative wrapper !bg-[#f2f3fb]">
      <div
        className="alert !bg-[#747ed1] !text-white fade show !rounded-none !border-0 !mb-1 !text-center"
        role="alert"
      >
        <div className="container">
          <div className="alert-inner flex justify-center items-center !p-0">
            <p className="!mb-0">
              Next.js of Sandbox is released!{" "}
              <a
                href="https://themeforest.net/item/sandbox-modern-multipurpose-tailwind-css-nextjs-template/57540184"
                className="!text-white hover inline-flex items-center"
                target="_blank"
              >
                Grab a Copy Here
                <i className="uil uil-arrow-up-right before:content-['\e950']" />
              </a>
            </p>
          </div>
          {/* /.alert-inner */}
        </div>
        {/* /.container */}
      </div>
      {/* /.alert */}
      <nav className="navbar navbar-expand-lg center-nav transparent navbar-light">
        <div className="container xl:!flex-row lg:!flex-row !flex-nowrap items-center">
          <div className="navbar-brand w-full">
            <Link to={`/`}>
              <img
                srcSet="/assets/img/logo-purple@2x.png 2x"
                alt="image"
                src="/assets/img/logo-purple.png"
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
              <Nav color="#605dba" />
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
                    {socialLinks.map((elm, i) => (
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
              <li className="nav-item hidden xl:block lg:block md:block">
                <a
                  href="https://themeforest.net/item/sandbox-modern-multipurpose-tailwind-css-reactjs-template/57596129"
                  className="btn btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem]"
                >
                  Purchase Now
                </a>
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
