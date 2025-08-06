import { socialLinks } from "@/data/socials";
import React from "react";

export default function InfoModal() {
  return (
    <div
      className="offcanvas offcanvas-end !text-[#cacaca]"
      id="offcanvas-info"
      data-bs-scroll="true"
    >
      <div className="offcanvas-header flex flex-row items-center justify-between p-[1.5rem]">
        <h3 className="!text-white xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-0">
          Sandbox
        </h3>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body pb-6">
        <div className="widget !mb-8">
          <p>
            Sandbox is a multipurpose HTML5 template with various layouts which
            will be a great solution for your business.
          </p>
        </div>
        {/* /.widget */}
        <div className="widget !mb-8">
          <h4 className="widget-title !text-white !mb-3">Contact Info</h4>
          <address className="not-italic !leading-[inherit] !mb-4">
            Moonshine St. 14/05 <br />
            Light City, London
          </address>
          <a
            className="!text-[#cacaca] hover:!text-[#3f78e0]"
            href="mailto:first.last@email.com"
          >
            info@email.com
          </a>
          <br />
          00 (123) 456 78 90
        </div>
        {/* /.widget */}
        <div className="widget !mb-8">
          <h4 className="widget-title !text-white !mb-3">Learn More</h4>
          <ul className="list-unstyled !pl-0">
            <li>
              <a className="!text-[#cacaca] hover:!text-[#fab758]" href="#">
                Our Story
              </a>
            </li>
            <li className="!mt-[.35rem]">
              <a className="!text-[#cacaca] hover:!text-[#fab758]" href="#">
                Terms of Use
              </a>
            </li>
            <li className="!mt-[.35rem]">
              <a className="!text-[#cacaca] hover:!text-[#fab758]" href="#">
                Privacy Policy
              </a>
            </li>
            <li className="!mt-[.35rem]">
              <a className="!text-[#cacaca] hover:!text-[#fab758]" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* /.widget */}
        <div className="widget">
          <h4 className="widget-title !text-white !mb-3">Follow Us</h4>
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
      {/* /.offcanvas-body */}
    </div>
  );
}
