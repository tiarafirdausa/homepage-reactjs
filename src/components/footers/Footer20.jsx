import React from "react";

import { socialLinks } from "@/data/socials";
import { footerLinks, footerLinks2 } from "@/data/footerLinks";
import { Link } from "react-router-dom";
export default function Footer20() {
  return (
    <footer className="bg-[#21262c] opacity-100 !text-[#cacaca]">
      <div className="container py-16 xl:!py-20 lg:!py-20 md:!py-20">
        <div className="flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0">
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full max-lg:!mt-[30px]">
            <div className="widget">
              <img
                className="!mb-4"
                srcSet="/assets/img/logo-light@2x.png 2x"
                alt="image"
                src="/assets/img/logo-light.png"
                width={134}
                height={26}
              />
              <p className="!mb-4">
                © {new Date().getFullYear()} Sandbox. All rights reserved.
              </p>
              <nav className="nav social social-white">
                {socialLinks.map((elm, i) => (
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
            {/* /.widget */}
          </div>
          {/* /column */}
          <div className="md:w-4/12 lg:w-2/12 xl:w-2/12 w-full flex-[0_0_auto] !px-[15px] max-w-full lg:!ml-[16.66666667%] xl:!ml-[16.66666667%] max-lg:!mt-[30px]">
            <div className="widget">
              <h4 className="widget-title !text-white !mb-3 !text-[1rem] !tracking-[normal] !font-semibold">
                Need Help?
              </h4>
              <ul className="pl-0 list-none text-inherit !mb-0">
                {footerLinks2.map((elm, i) => (
                  <li key={i} className={i != 0 ? "!mt-[0.35rem]" : ""}>
                    <Link
                      className="!text-[#cacaca] hover:!text-[#7cb798]"
                      to={elm.href}
                    >
                      {elm.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
          <div className="md:w-4/12 lg:w-2/12 xl:w-2/12 w-full flex-[0_0_auto] !px-[15px] max-w-full max-lg:!mt-[30px]">
            <div className="widget">
              <h4 className="widget-title !text-white !mb-3 !text-[1rem] !tracking-[normal] !font-semibold">
                Learn More
              </h4>
              <ul className="pl-0 list-none !mb-0">
                {footerLinks.map((elm, i) => (
                  <li className={i != 0 ? "!mt-[0.35rem]" : ""} key={i}>
                    <Link
                      className="!text-[#cacaca] hover:!text-[#7cb798]"
                      to={elm.href}
                    >
                      {elm.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
          <div className="md:w-4/12 lg:w-2/12 xl:w-2/12 w-full flex-[0_0_auto] !px-[15px] max-w-full max-lg:!mt-[30px]">
            <div className="widget">
              <h4 className="widget-title !text-white !mb-3 !text-[1rem] !tracking-[normal] !font-semibold">
                Get in Touch
              </h4>
              <address className="not-italic !leading-[inherit] !mb-4">
                Moonshine St. 14/05 Light City, London, United Kingdom
              </address>
              <a
                className="!text-[#cacaca] hover:!text-[#7cb798]"
                href="mailto:first.last@email.com"
              >
                info@email.com
              </a>
              <br />
              00 (123) 456 78 90
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </footer>
  );
}
