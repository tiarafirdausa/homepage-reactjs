import { footerLinks, footerLinks2 } from "@/data/footerLinks";
import { socialLinks } from "@/data/socials";
import { Link } from "react-router-dom";
import React from "react";

export default function Footer7() {
  return (
    <footer className="bg-gradient-reverse-purple">
      <div className="container pt-[4.5rem] xl:pt-[7rem] lg:pt-[7rem] md:pt-[7rem] pb-[1.75rem]">
        <div
          className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 !mb-[4rem] bg-cover bg-[center_center] bg-no-repeat !bg-scroll !relative z-0 before:rounded-[0.4rem] before:bg-[rgba(30,34,40,.4)] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0"
          style={{ backgroundImage: "url(/assets/img/photos/bg2.jpg)" }}
        >
          <div className="card-body p-[2.25rem] xl:!p-[3rem]">
            <div className="flex flex-wrap mx-[-15px] items-center !mt-[-30px]">
              <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                <h3 className="xl:!text-[1.7rem] !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] font-bold !text-white">
                  Subscribe to our newsletter
                </h3>
                <p className="lead xl:!pr-14 lg:!pr-14 !mb-0 !text-white">
                  Subscribe to our newsletter to get our news &amp; deals
                  delivered to you. Don't worry, we hate spam and we respect
                  your privacy.
                </p>
              </div>
              {/* /column */}
              <div className="lg:w-5/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[8.33333333%] !mt-[30px]">
                <div className="newsletter-wrapper">
                  {/* Begin Mailchimp Signup Form */}
                  <div id="mc_embed_signup2">
                    <form
                      id="mc-embedded-subscribe-form2"
                      name="mc-embedded-subscribe-form"
                      className="validate dark-fields"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div id="mc_embed_signup_scroll2">
                        <div className="!text-left input-group !relative form-floating">
                          <input
                            type="email"
                            defaultValue=""
                            name="EMAIL"
                            className="required email form-control relative block w-full text-[.75rem] font-medium !text-[#cacaca] bg-[rgba(255,255,255,.03)] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(255,255,255,.1)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(116,126,209,.5)] focus-visible:!border-[rgba(116,126,209,.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                            placeholder=""
                            id="mce-EMAIL2"
                          />
                          <label
                            htmlFor="mce-EMAIL2"
                            className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                          >
                            Email Address
                          </label>
                          <input
                            type="submit"
                            defaultValue="Join"
                            name="subscribe"
                            id="mc-embedded-subscribe2"
                            className="btn btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] hover:!translate-none active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !text-[.85rem]"
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
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/*/.card-body */}
        </div>
        {/*/.card */}
        <div className="flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0">
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
            <div className="widget">
              <h3 className="h2 !mb-[.75rem] xl:!text-[1.35rem] !text-[calc(1.26rem_+_0.12vw)] !leading-[1.35]">
                Join the Community
              </h3>
              <p className="lead text-[0.95rem] !leading-[1.6] font-medium !mb-5">
                Let's make something great together. We are trusted by over
                5000+ clients. Join them by using our services and grow your
                business.
              </p>
              <a
                href="#"
                className="btn btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] !text-[.85rem]"
              >
                Join Us
              </a>
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
          <div className="md:w-4/12 lg:w-2/12 xl:w-2/12 w-full flex-[0_0_auto] !px-[15px] max-w-full lg:!ml-[16.66666667%] xl:!ml-[16.66666667%] !mt-[30px] xl:!mt-0 lg:!mt-0">
            <div className="widget">
              <h4 className="widget-title !mb-3 !text-[1rem] !leading-[1.45]">
                Need Help?
              </h4>
              <ul className="pl-0 list-none text-inherit !mb-0">
                {footerLinks2.map((elm, i) => (
                  <li key={i} className={i != 0 ? "!mt-[0.35rem]" : ""}>
                    <Link
                      className="!text-[#60697b] hover:!text-[#747ed1]"
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
              <h4 className="widget-title !mb-3 !text-[1rem] !leading-[1.45]">
                Learn More
              </h4>
              <ul className="pl-0 list-none text-inherit !mb-0">
                {footerLinks.map((elm, i) => (
                  <li className={i != 0 ? "!mt-[0.35rem]" : ""} key={i}>
                    <Link
                      className="!text-[#60697b] hover:!text-[#747ed1]"
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
              <h4 className="widget-title !mb-3 !text-[1rem] !leading-[1.45]">
                Get in Touch
              </h4>
              <address className="not-italic !leading-[inherit] !mb-4">
                Moonshine St. 14/05 Light City, London, United Kingdom
              </address>
              <a
                href="mailto:first.last@email.com"
                className="!text-[#60697b] hover:!text-[#60697b]"
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
        <hr className="!mt-13 xl:!mt-20 lg:!mt-20 md:!mt-20 !mb-7" />
        <div className="xl:!flex lg:!flex md:!flex items-center justify-between">
          <p className="!mb-2 xl:!mb-0 lg:!mb-0">
            © {new Date().getFullYear()} Sandbox. All rights reserved.
          </p>
          <nav className="nav social xl:!text-right lg:!text-right md:!text-right">
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
        {/* /div */}
      </div>
      {/* /.container */}
    </footer>
  );
}
