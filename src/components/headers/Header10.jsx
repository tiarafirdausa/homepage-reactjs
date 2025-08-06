import React from "react";
import Nav2 from "./Nav2";
import { Link } from "react-router-dom";

import { socialLinks } from "@/data/socials";

export default function Header10() {
  return (
    <header className="relative wrapper !bg-[#edf2fc]">
      <nav className="navbar navbar-expand-lg classic transparent navbar-light">
        <div className="container xl:!flex-row lg:!flex-row !flex-nowrap items-center">
          <div className="navbar-brand w-full">
            <Link to={`/`}>
              <img
                srcSet="/assets/img/logo@2x.png 2x"
                alt="image"
                src="/assets/img/logo.png"
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
              <Nav2 />
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
          <div className="navbar-other lg:!ml-4 xl:!ml-4">
            <ul className="navbar-nav !flex-row !items-center !ml-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas-info"
                >
                  <i className="uil uil-info-circle before:content-['\eb99'] !text-[1.1rem]" />
                </a>
              </li>

              <li className="nav-item hidden xl:block lg:block md:block">
                <a
                  href="#"
                  className="btn btn-sm btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem]"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-signin"
                >
                  Sign In
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
      <div className="modal fade !m-0 !p-0" id="modal-signin" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content !text-center">
            <div className="relative flex-auto pt-[2.5rem] pr-[2.5rem] pb-[2.5rem] !pl-[2.5rem]">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <h2 className="!mb-3 text-left !leading-[1.35]">Welcome Back</h2>
              <p className="lead text-[0.9rem] font-medium !leading-[1.65] !mb-6 text-left">
                Fill your email and password to sign in.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="text-left !mb-3"
              >
                <div className="form-floating relative !mb-4">
                  <input
                    type="email"
                    className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                    placeholder="Email"
                    id="loginEmail1"
                  />
                  <label
                    htmlFor="loginEmail1"
                    className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                  >
                    Email
                  </label>
                </div>
                <div className="form-floating relative password-field !mb-4">
                  <input
                    type="password"
                    className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                    placeholder="Password"
                    id="loginPassword1"
                  />
                  <span className="password-toggle absolute -translate-y-2/4 cursor-pointer text-[0.9rem] !text-[#959ca9] right-3 top-2/4">
                    <i className="uil uil-eye" />
                  </span>
                  <label
                    htmlFor="loginPassword1"
                    className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                  >
                    Password
                  </label>
                </div>
                <a className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] btn-login w-full !mb-2">
                  Sign In
                </a>
              </form>
              {/* /form */}
              <p className="!mb-1">
                <a href="#" className="hover">
                  Forgot Password?
                </a>
              </p>
              <p className="!mb-0">
                Don't have an account?
                <a
                  href="#"
                  data-bs-target="#modal-signup"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                  className="hover"
                >
                  Sign up
                </a>
              </p>
              <div className="divider-icon !my-4">or</div>
              <nav className="nav social justify-center !text-center">
                <a
                  href="#"
                  className="btn btn-circle btn-sm btn-google !text-white !bg-[#e44134] !border-transparent !w-[1.8rem] !h-[1.8rem] !text-[0.8rem] !m-[0_.35rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]"
                >
                  <i className="uil uil-google before:content-['\eb50']" />
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-sm btn-facebook-f !text-white !bg-[#4470cf] !border-transparent !w-[1.8rem] !h-[1.8rem] !text-[0.8rem] !m-[0_.35rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]"
                >
                  <i className="uil uil-facebook-f before:content-['\eae2']" />
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-sm btn-twitter !text-white !bg-[#5daed5] !border-transparent !w-[1.8rem] !h-[1.8rem] !text-[0.8rem] !m-[0_.35rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]"
                >
                  <i className="uil uil-twitter before:content-['\ed59']" />
                </a>
              </nav>
              {/*/.social */}
            </div>
            {/*/.modal-content */}
          </div>
          {/*/.modal-body */}
        </div>
        {/*/.modal-dialog */}
      </div>
      {/*/.modal */}
      <div className="modal fade !m-0 !p-0" id="modal-signup" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content !text-center">
            <div className="relative flex-auto pt-[2.5rem] pr-[2.5rem] pb-[2.5rem] !pl-[2.5rem]">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <h2 className="!mb-3 text-left !leading-[1.35]">
                Sign up to Sandbox
              </h2>
              <p className="lead text-[0.9rem] font-medium !leading-[1.65] !mb-6 text-left">
                Registration takes less than a minute.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="text-left !mb-3"
              >
                <div className="form-floating relative !mb-4">
                  <input
                    type="text"
                    className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                    placeholder="Name"
                    id="loginName"
                  />
                  <label
                    htmlFor="loginName"
                    className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                  >
                    Name
                  </label>
                </div>
                <div className="form-floating relative !mb-4">
                  <input
                    type="email"
                    className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                    placeholder="Email"
                    id="loginEmail"
                  />
                  <label
                    htmlFor="loginEmail"
                    className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                  >
                    Email
                  </label>
                </div>
                <div className="form-floating relative password-field !mb-4">
                  <input
                    type="password"
                    className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                    placeholder="Password"
                    id="loginPassword"
                  />
                  <span className="password-toggle absolute -translate-y-2/4 cursor-pointer text-[0.9rem] !text-[#959ca9] right-3 top-2/4">
                    <i className="uil uil-eye" />
                  </span>
                  <label
                    htmlFor="loginPassword"
                    className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                  >
                    Password
                  </label>
                </div>
                <div className="form-floating relative password-field !mb-4">
                  <input
                    type="password"
                    className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                    placeholder="Confirm Password"
                    id="loginPasswordConfirm"
                  />
                  <span className="password-toggle absolute -translate-y-2/4 cursor-pointer text-[0.9rem] !text-[#959ca9] right-3 top-2/4">
                    <i className="uil uil-eye" />
                  </span>
                  <label
                    htmlFor="loginPasswordConfirm"
                    className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                  >
                    Confirm Password
                  </label>
                </div>
                <a className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] btn-login w-full !mb-2">
                  Sign Up
                </a>
              </form>
              {/* /form */}
              <p className="!mb-0">
                Already have an account?
                <a
                  href="#"
                  data-bs-target="#modal-signin"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                  className="hover"
                >
                  Sign in
                </a>
              </p>
              <div className="divider-icon !my-4">or</div>
              <nav className="nav social justify-center !text-center">
                <a
                  href="#"
                  className="btn btn-circle btn-sm btn-google !text-white !bg-[#e44134] !border-transparent !w-[1.8rem] !h-[1.8rem] !text-[0.8rem] !m-[0_.35rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]"
                >
                  <i className="uil uil-google before:content-['\eb50']" />
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-sm btn-facebook-f !text-white !bg-[#4470cf] !border-transparent !w-[1.8rem] !h-[1.8rem] !text-[0.8rem] !m-[0_.35rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]"
                >
                  <i className="uil uil-facebook-f before:content-['\eae2']" />
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-sm btn-twitter !text-white !bg-[#5daed5] !border-transparent !w-[1.8rem] !h-[1.8rem] !text-[0.8rem] !m-[0_.35rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]"
                >
                  <i className="uil uil-twitter before:content-['\ed59']" />
                </a>
              </nav>
              {/*/.social */}
            </div>
            {/*/.modal-content */}
          </div>
          {/*/.modal-body */}
        </div>
        {/*/.modal-dialog */}
      </div>
      {/*/.modal */}

      {/* /.offcanvas */}
    </header>
  );
}
