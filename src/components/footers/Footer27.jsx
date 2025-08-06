import { footerLinks, footerLinks2 } from "@/data/footerLinks";
import { socialLinks } from "@/data/socials";
import { Link } from "react-router-dom";
import React from "react";

export default function Footer27() {
  return (
    <footer
      className="wrapper bg-repeat bg-fixed bg-image section-frame xl:mx-6 xl:rounded-[1rem] lg:mx-6 lg:rounded-[1rem] md:mx-6 md:rounded-[1rem]"
      style={{ backgroundImage: "url(/assets/img/pattern.png)" }}
    >
      <div className="container pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div
          className="card image-wrapper bg-full bg-image bg-overlay xl:mx-5 lg:mx-5 md:mx-5 !rounded-[0.8rem] overflow-hidden [background-size:100%] bg-[center_center] bg-no-repeat bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:rounded-[0.4rem] before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)] -translate-y-2/4"
          style={{ backgroundImage: "url(/assets/img/photos/bg27.jpg)" }}
        >
          <div className="card-body p-6 flex-row text-center xl:!justify-between lg:!justify-between md:!justify-between xl:!flex xl:!items-center lg:!flex lg:!items-center xl:!p-12 lg:!p-12 md:!p-12 xl:!text-left lg:!text-left">
            <h3 className="!text-[calc(1.345rem_+_1.14vw)] !font-semibold !leading-[1.2] xl:!text-[2.2rem] !mb-6 xl:!mb-0 lg:!mb-0 lg:!pr-[2.5rem] xl:!pr-[1.25rem] xxl:!pr-[8rem] !text-white">
              We are trusted by over 5000+ clients. Join them now and grow your
              business.
            </h3>
            <a
              href="#"
              className="btn btn-lg btn-white !rounded-[0.8rem] !mb-0 whitespace-nowrap"
            >
              Join Us
            </a>
          </div>
          {/*/.card-body */}
        </div>
        {/*/.card */}
        <div className="!text-[#cacaca] xl:mx-5 lg:mx-5 md:mx-5 !mt-[-5rem] xl:!mt-0 lg:!mt-0">
          <div className="flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0">
            <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
              <div className="widget">
                <h3 className="h2 !mb-3 !text-white !leading-[1.35]">
                  Join the Community
                </h3>
                <p className="!mb-5">
                  Let's make something great together. We are trusted by over
                  5000+ clients. Join them by using our services and grow your
                  business.
                </p>
                <p className="!mb-1">
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
            <div className="md:w-4/12 lg:w-2/12 xl:w-2/12 w-full flex-[0_0_auto] !px-[15px] max-w-full lg:!ml-[16.66666667%] xl:!ml-[16.66666667%] !mt-[30px] xl:!mt-0 lg:!mt-0">
              <div className="widget">
                <h4 className="widget-title !text-white !mb-3">Need Help?</h4>
                <ul className="pl-0 list-none text-inherit !mb-0">
                  {footerLinks2.map((elm, i) => (
                    <li key={i} className={i != 0 ? "!mt-[0.35rem]" : ""}>
                      <Link
                        className="!text-[#cacaca] hover:!text-[#605dba]"
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
            <div className="md:w-4/12 lg:w-2/12 xl:w-2/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px] xl:!mt-0 lg:!mt-0">
              <div className="widget">
                <h4 className="widget-title !text-white !mb-3">Learn More</h4>
                <ul className="pl-0 list-none text-inherit !mb-0">
                  {footerLinks.map((elm, i) => (
                    <li className={i != 0 ? "!mt-[0.35rem]" : ""} key={i}>
                      <Link
                        className="!text-white hover:!text-[#605dba]"
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
            <div className="md:w-4/12 lg:w-2/12 xl:w-2/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px] xl:!mt-0 lg:!mt-0">
              <div className="widget">
                <h4 className="widget-title !mb-[.75rem] !text-[.95rem] !leading-[1.45] !text-white">
                  Get in Touch
                </h4>
                <address className="not-italic !leading-[inherit] !mb-4">
                  Moonshine St. 14/05 Light City, London, United Kingdom
                </address>
                <a
                  href="mailto:first.last@email.com"
                  className="!text-white hover:!text-[#343f52]"
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
      </div>
      {/* /.container */}
    </footer>
  );
}
