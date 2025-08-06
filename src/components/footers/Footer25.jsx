import { socialLinks } from "@/data/socials";
import React from "react";

export default function Footer25() {
  return (
    <footer className="pt-14">
      <div className="container pb-14 !text-center">
        <div className="flex flex-wrap mx-[-15px] !mt-[-2.5rem] lg:!mt-0 xl:!mt-0">
          <div className="xl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <div className="flex flex-wrap mx-[-15px] !mb-3">
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                <div className="widget">
                  <h4 className="widget-title">Address</h4>
                  <address className="not-italic !leading-[inherit] !mb-4">
                    Moonshine St. 14/05
                    <br className="hidden xl:block lg:block md:block" />
                    Light City, London, UK
                  </address>
                </div>
                {/* /.widget */}
              </div>
              {/*/column */}
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                <div className="widget">
                  <h4 className="widget-title">Phone</h4>
                  <p>
                    00 (123) 456 78 90 <br />
                    00 (987) 654 32 10
                  </p>
                </div>
                {/* /.widget */}
              </div>
              {/*/column */}
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                <div className="widget">
                  <h4 className="widget-title">E-mail</h4>
                  <p>
                    <a
                      href="mailto:sandbox@email.com"
                      className="!text-[#60697b] hover:!text-[#60697b]"
                    >
                      sandbox@email.com
                    </a>
                    <br className="hidden xl:block lg:block md:block" />
                    <a
                      href="mailto:help@sandbox.com"
                      className="!text-[#60697b] hover:!text-[#60697b]"
                    >
                      help@sandbox.com
                    </a>
                  </p>
                </div>
                {/* /.widget */}
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
            <p>© {new Date().getFullYear()} Sandbox. All rights reserved.</p>
            <nav className="nav social justify-center">
              {socialLinks.map((elm, i) => (
                <a
                  key={i}
                  className="m-[0_.35rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
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
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </footer>
  );
}
