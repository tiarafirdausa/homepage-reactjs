import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { socialLinks } from "@/data/socials";

export default function Header22() {
  useEffect(() => {
    // Scroll spy logic
    let section = document.querySelectorAll("section[id]");
    let navLinks = document.querySelectorAll(".nav-link.scroll");

    const handleScroll = () => {
      section.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 0;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((links) => {
            links.classList.remove("active");
            document
              .querySelector(`.nav-link.scroll[href*=${id}]`)
              .classList.add("active");
          });
        }
      });
    };

    // Smooth scroll logic
    const links = document.querySelectorAll(".scroll");

    const clickHandler = (e) => {
      e.preventDefault();
      e.target.blur(); // Remove focus from the clicked link
      const href = e.target.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop;
      window.scroll({
        top: offsetTop,
        behavior: "smooth",
      });
    };

    // Add event listeners
    links.forEach((link) => {
      link.addEventListener("click", clickHandler);
    });
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", clickHandler);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <header className="relative wrapper bg-[rgba(246,247,249,1)]">
      <nav className="navbar navbar-expand-lg extended extended-alt navbar-light !bg-[#ffffff]">
        <div className="container xl:!flex-col lg:!flex-col">
          <div className="topbar flex flex-row lg:!justify-center xl:!justify-center items-center">
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
          </div>
          {/* /.flex */}
          <div className="navbar-collapse-wrapper bg-[rgba(255,255,255)] opacity-100 flex flex-row items-center justify-between">
            <div className="navbar-other w-full hidden lg:block xl:block">
              <nav className="nav social social-muted">
                {socialLinks.slice(0, 3).map((elm, i) => (
                  <a
                    key={i}
                    className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                    href={elm.href}
                  >
                    <i
                      className={`uil ${elm.icon} before:content-[${elm.unicode}] !text-[${elm.color}] text-[1rem]`}
                    />
                  </a>
                ))}
              </nav>
              {/* /.social */}
            </div>
            {/* /.navbar-other */}
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
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link scroll hover:!text-[#fab758] active"
                      href="#home"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link scroll hover:!text-[#fab758]"
                      href="#services"
                    >
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link scroll hover:!text-[#fab758]"
                      href="#portfolio"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link scroll hover:!text-[#fab758]"
                      href="#testimonials"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link scroll hover:!text-[#fab758]"
                      href="#about"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link scroll hover:!text-[#fab758]"
                      href="#pricing"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
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
            </div>
            {/* /.navbar-collapse */}
            <div className="navbar-other w-full flex">
              <ul className="navbar-nav !flex-row !items-center !ml-auto">
                <li className="nav-item">
                  <a
                    className="nav-link hover:!text-[#fab758] focus:!text-[#fab758]"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvas-info"
                  >
                    <i className="uil uil-info-circle before:content-['\eb99'] !text-[1.1rem]" />
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link hover:!text-[#fab758] focus:!text-[#fab758]"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvas-search"
                  >
                    <i className="uil uil-search before:content-['\eca5'] !text-[1.1rem]" />
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
          {/* /.navbar-collapse-wrapper */}
        </div>
        {/* /.container */}
      </nav>
      {/* /.navbar */}
      {/*/.modal */}

      {/* /.offcanvas */}

      {/* /.offcanvas */}
    </header>
  );
}
