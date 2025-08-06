import React from "react";

import { socialLinks } from "@/data/socials";
import { footerLinks } from "@/data/footerLinks";
import { Link } from "react-router-dom";
export default function Footer16() {
  return (
    <footer className="!bg-[#ffffff]">
      <div className="container-card">
        <div
          className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-light-500 !mb-[4.5rem] [background-size:100%] bg-[center_center] bg-no-repeat !bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(255,255,255,.5)] xxl:rounded-[.8rem] rounded-0"
          style={{ backgroundImage: "url(/assets/img/photos/bg22.png)" }}
        >
          <div className="card-body py-[4.5rem] px-0">
            <div className="container">
              <div className="flex flex-wrap mx-[-15px] !text-center">
                <div className="xl:w-11/12 xxl:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                  <h2 className="!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase text-gradient gradient-1 !mb-3">
                    Join Our Community
                  </h2>
                  <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] font-semibold !leading-[1.25] !tracking-[normal] !mb-7 lg:!px-[7rem] xl:!px-[7rem]">
                    We are trusted by over 5000+ clients. Join them now and grow
                    your business.
                  </h3>
                </div>
                {/* /column */}
              </div>
              {/* /.row */}
              <div className="flex justify-center">
                <span>
                  <a className="btn btn-lg btn-gradient gradient-1 rounded">
                    Get Started
                  </a>
                </span>
              </div>
            </div>
            {/*/.container */}
          </div>
          {/*/.card-body */}
        </div>
        {/*/.card */}
      </div>
      {/* /.container-card */}
      <div className="container pb-[4rem] xl:!pb-[5rem] lg:!pb-[5rem] md:!pb-[5rem]">
        <div className="flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0">
          <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <div className="widget">
              <img
                className="!mb-4"
                srcSet="/assets/img/logo-dark@2x.png 2x"
                alt="image"
                src="/assets/img/logo-dark.png"
                width={134}
                height={26}
              />
              <p className="!mb-4">
                © {new Date().getFullYear()} Sandbox.{" "}
                <br className="hidden xl:block lg:block" />
                All rights reserved.
              </p>
              <nav className="nav social">
                {socialLinks.map((elm, i) => (
                  <a
                    key={i}
                    className="!text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
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
          <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <div className="widget">
              <h4 className="widget-title !mb-3 !text-[1rem] !leading-[1.45]">
                Get in Touch
              </h4>
              <address className="xl:!pr-20 xxl:!pr-28 not-italic !leading-[inherit] block !mb-4">
                Moonshine St. 14/05 Light City, London, United Kingdom
              </address>
              <a
                className="!text-[#60697b] hover:!text-[#60697b]"
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
          <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <div className="widget">
              <h4 className="widget-title !mb-3 !text-[1rem] !leading-[1.45]">
                Learn More
              </h4>
              <ul className="pl-0 list-none !mb-0">
                {footerLinks.map((elm, i) => (
                  <li className={i != 0 ? "!mt-[0.35rem]" : ""} key={i}>
                    <Link
                      className="!text-[#60697b] hover:!text-[#605dba]"
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
          <div className="md:w-full xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <div className="widget">
              <h4 className="widget-title !mb-3 !text-[1rem] !leading-[1.45]">
                Our Newsletter
              </h4>
              <p className="!mb-5">
                Subscribe to our newsletter to get our news &amp; deals
                delivered to you.
              </p>
              <div className="newsletter-wrapper">
                {/* Begin Mailchimp Signup Form */}
                <div id="mc_embed_signup2">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    id="mc-embedded-subscribe-form2"
                    name="mc-embedded-subscribe-form"
                    className="validate dark-fields"
                  >
                    <div id="mc_embed_signup_scroll2">
                      <div className="!text-left input-group form-floating !relative flex flex-wrap items-stretch w-full">
                        <input
                          type="email"
                          defaultValue=""
                          name="EMAIL"
                          className="required form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[#9fbcf0] focus-visible:!border-[#9fbcf0] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                          placeholder=""
                          id="mce-EMAIL2"
                        />
                        <label
                          className="!ml-[0.05rem] !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none origin-[0_0] px-4 py-[0.6rem] left-0 top-0"
                          htmlFor="mce-EMAIL2"
                        >
                          Email Address
                        </label>
                        <input
                          type="submit"
                          defaultValue="Join"
                          name="subscribe"
                          id="mc-embedded-subscribe2"
                          className="!text-[.85rem] btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] hover:!translate-none active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-gradient gradient-1"
                        />
                      </div>
                      <div id="mce-responses2" className="clear">
                        <div
                          className="response"
                          id="mce-error-response2"
                          style={{ display: "none" }}
                        />
                        <div
                          className="response"
                          id="mce-success-response2"
                          style={{ display: "none" }}
                        />
                      </div>
                      {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                      <div
                        style={{ position: "absolute", left: "-5000px" }}
                        aria-hidden="true"
                      >
                        <input
                          type="text"
                          name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                          tabIndex={-1}
                          defaultValue=""
                        />
                      </div>
                      <div className="clear" />
                    </div>
                  </form>
                </div>
                {/*End mc_embed_signup*/}
              </div>
              {/* /.newsletter-wrapper */}
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
        </div>
        {/*/.row */}
      </div>
    </footer>
  );
}
