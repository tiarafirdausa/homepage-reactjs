import React from "react";

import { socialLinks } from "@/data/socials";
export default function Footer21() {
  return (
    <footer className="bg-[rgba(246,247,249,1)]">
      <div className="container pt-[4rem] pb-7">
        <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 !mt-[-30px]">
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:px-0 lg:px-0 !mt-[30px]">
            <div className="widget">
              <img
                className="!mb-4"
                srcSet="/assets/img/logo-dark@2x.png 2x"
                alt="image"
                src="/assets/img/logo-dark.png"
                width={134}
                height={26}
              />
              <p className="lead text-[0.9rem] font-medium !leading-[1.65] !mb-0">
                I'm Caitlyn Sandbox, a photographer specializing in food, drink
                and product photography.
              </p>
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
          <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] xl:px-0 lg:px-0 !mt-[30px]">
            <div className="widget">
              <div className="flex flex-row">
                <div>
                  <div className="icon !text-[#fab758] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]">
                    <i className="uil uil-phone-volume before:content-['\ec50']" />
                  </div>
                </div>
                <div>
                  <h5 className="!mb-1">Phone</h5>
                  <p className="!mb-0">
                    00 (123) 456 78 90 <br />
                    00 (987) 654 32 10
                  </p>
                </div>
              </div>
              {/*/div */}
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
          <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:px-0 lg:px-0 !mt-[30px]">
            <div className="widget">
              <div className="flex flex-row">
                <div>
                  <div className="icon !text-[#fab758] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]">
                    <i className="uil uil-location-pin-alt before:content-['\ebd8']" />
                  </div>
                </div>
                <div className="!self-start !justify-start">
                  <h5 className="!mb-1">Address</h5>
                  <address className="not-italic !leading-[inherit] !mb-4">
                    Moonshine St. 14/05 Light City, London, United Kingdom
                  </address>
                </div>
              </div>
              {/*/div */}
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
        </div>
        {/*/.row */}
        <hr className="!mt-[3rem] xl:!mt-[3.5rem] lg:!mt-[3.5rem] md:!mt-[3.5rem] !mb-7" />
        <div className="xl:!flex lg:!flex md:!flex items-center justify-between">
          <p className="!mb-2 xl:!mb-0 lg:!mb-0">
            © {new Date().getFullYear()} Sandbox. All rights reserved.
          </p>
          <nav className="nav social social-muted !mb-0 xl:!text-right lg:!text-right md:!text-right">
            {socialLinks.map((elm, i) => (
              <a
                key={i}
                className="m-[0_0_0_.7rem] max-md:m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
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
      </div>
      {/* /.container */}
    </footer>
  );
}
