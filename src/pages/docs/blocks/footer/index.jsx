import BlockPageLinks from "@/components/blocks/BlockPageLinks";
import PageTitle from "@/components/blocks/PageTitle";
import React from "react";

import { Link } from "react-router-dom";
import CodeSnippet from "@/components/common/CodeSnippet";
import { posts4 } from "@/data/blogs";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blocks Footer || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DocsPageFooter() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <PageTitle pagename="Footer" />
      <BlockPageLinks />
      <>
        {/* /section */}
        <section id="snippet-1" className="wrapper !bg-[#ffffff] ">
          <div className="container-fluid pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20 xxl:!px-10">
            <footer className="bg-[#21262c] opacity-100 !text-[#cacaca]">
              <div className="container py-16 xl:!py-20 lg:!py-20 md:!py-20">
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0">
                  <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
                    <div className="widget !text-[#cacaca]">
                      <img
                        className="!mb-4"
                        srcSet="/assets/img/logo-light@2x.png 2x"
                        alt="image"
                        width="134"
                        height="26"
                        src="/assets/img/logo-light.png"
                      />
                      <p className="!mb-4">
                        © {new Date().getFullYear()} Sandbox.
                        <br className="hidden xl:block lg:block !text-[#cacaca]" />
                        All rights reserved.
                      </p>
                      <nav className="nav social social-white">
                        <a
                          className="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-twitter before:content-['\ed59'] !text-white text-[1rem]" />
                        </a>
                        <a
                          className="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-facebook-f before:content-['\eae2'] !text-white text-[1rem]" />
                        </a>
                        <a
                          className="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-dribbble before:content-['\eaa2'] !text-white text-[1rem]" />
                        </a>
                        <a
                          className="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-instagram before:content-['\eb9c'] !text-white text-[1rem]" />
                        </a>
                        <a
                          className="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-youtube before:content-['\edb5'] !text-white text-[1rem]" />
                        </a>
                      </nav>
                      {/* /.social */}
                    </div>
                    {/* /.widget */}
                  </div>
                  {/* /column */}
                  <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
                    <div className="widget !text-[#cacaca]">
                      <h4 className="widget-title !text-white !mb-3">
                        Get in Touch
                      </h4>
                      <address className="xl:!pr-20 xxl:!pr-28 not-italic !leading-[inherit] block !mb-4">
                        Moonshine St. 14/05 Light City, London, United Kingdom
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
                  </div>
                  {/* /column */}
                  <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
                    <div className="widget !text-[#cacaca]">
                      <h4 className="widget-title !text-white !mb-3">
                        Learn More
                      </h4>
                      <ul className="pl-0 list-none !mb-0">
                        <li>
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            About Us
                          </a>
                        </li>
                        <li className="!mt-[0.35rem]">
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Our Story
                          </a>
                        </li>
                        <li className="!mt-[0.35rem]">
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Projects
                          </a>
                        </li>
                        <li className="!mt-[0.35rem]">
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Terms of Use
                          </a>
                        </li>
                        <li className="!mt-[0.35rem]">
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Privacy Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* /.widget */}
                  </div>
                  {/* /column */}
                  <div className="md:w-full xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
                    <div className="widget !text-[#cacaca]">
                      <h4 className="widget-title !text-white !mb-3">
                        Our Newsletter
                      </h4>
                      <p className="!mb-5">
                        Subscribe to our newsletter to get our news &amp; deals
                        delivered to you.
                      </p>
                      <div className="newsletter-wrapper">
                        {/* Begin Mailchimp Signup Form */}
                        <div id="mc_embed_signup">
                          <form
                            action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&id=b49ef47a9a"
                            method="post"
                            id="mc-embedded-subscribe-form"
                            name="mc-embedded-subscribe-form"
                            className="validate dark-fields"
                            target="_blank"
                            noValidate=""
                          >
                            <div id="mc_embed_signup_scroll">
                              <div className="!text-left input-group form-floating !relative flex flex-wrap items-stretch w-full">
                                <input
                                  type="email"
                                  defaultValue=""
                                  name="EMAIL"
                                  className="required email form-control block w-full text-[12px] font-medium !leading-[1.7] appearance-none bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] px-4 py-[0.6rem] rounded-[0.4rem] motion-reduce:transition-none focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] disabled:bg-[#aab0bc] disabled:opacity-100 file:!mt-[-0.6rem] file:mr-[-1rem] file:!mb-[-0.6rem] file:ml-[-1rem] file:!text-[#60697b] file:bg-[#fefefe] file:pointer-events-none file:transition-all file:duration-[0.2s] file:ease-in-out file:px-4 file:py-[0.6rem] file:rounded-none motion-reduce:file:transition-none placeholder:!text-[#959ca9] placeholder:opacity-100 border border-solid !border-[rgba(255,255,255,0.1)] !text-[#cacaca] bg-[rgba(255,255,255,.03)] focus-visible:!border-[rgba(63,120,224,0.5)]"
                                  placeholder=""
                                  id="mce-EMAIL"
                                />
                                <label
                                  className="!ml-[0.05rem] !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none origin-[0_0] px-4 py-[0.6rem] left-0 top-0"
                                  htmlFor="mce-EMAIL"
                                >
                                  Email Address
                                </label>
                                <input
                                  type="submit"
                                  defaultValue="Join"
                                  name="subscribe"
                                  id="mc-embedded-subscribe"
                                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !relative z-[2] focus:z-[5] hover:!transform-none border-0"
                                />
                              </div>
                              <div id="mce-responses" className="clear">
                                <div
                                  className="response"
                                  id="mce-error-response"
                                  style={{ display: "none" }}
                                />
                                <div
                                  className="response"
                                  id="mce-success-response"
                                  style={{ display: "none" }}
                                />
                              </div>
                              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                              <div
                                style={{
                                  position: "absolute",
                                  left: "-5000px",
                                }}
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
              {/* /.container */}
            </footer>
          </div>
        </section>
        <CodeSnippet
          code={`&lt;section id&#x3D;&quot;snippet-1&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
          &lt;div className&#x3D;&quot;container-fluid pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20 xxl:!px-10&quot;&gt;
            &lt;footer className&#x3D;&quot;bg-[#21262c] opacity-100 !text-[#cacaca]&quot;&gt;
              &lt;div className&#x3D;&quot;container py-16 xl:!py-20 lg:!py-20 md:!py-20&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0&quot;&gt;
                  &lt;div className&#x3D;&quot;md:w-4&#x2F;12 xl:w-3&#x2F;12 lg:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]&quot;&gt;
                    &lt;div className&#x3D;&quot;widget !text-[#cacaca]&quot;&gt;
                      &lt;img
                        className&#x3D;&quot;!mb-4&quot;
                        srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;logo-light@2x.png 2x&quot;
                        alt&#x3D;&quot;image&quot;
                        width&#x3D;&quot;134&quot;
                        height&#x3D;&quot;26&quot;
                        src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;logo-light.png&quot;
                      &#x2F;&gt;
                      &lt;p className&#x3D;&quot;!mb-4&quot;&gt;
                        © 2024 Sandbox.
                        &lt;br className&#x3D;&quot;hidden xl:block lg:block !text-[#cacaca]&quot; &#x2F;&gt;
                        All rights reserved.
                      &lt;&#x2F;p&gt;
                      &lt;nav className&#x3D;&quot;nav social social-white&quot;&gt;
                        &lt;a
                          className&#x3D;&quot;!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]&quot;
                          href&#x3D;&quot;#&quot;
                        &gt;
                          &lt;i className&#x3D;&quot;uil uil-twitter before:content-[&#39;\ed59&#39;] !text-white text-[1rem]&quot; &#x2F;&gt;
                        &lt;&#x2F;a&gt;
                        &lt;a
                          className&#x3D;&quot;!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]&quot;
                          href&#x3D;&quot;#&quot;
                        &gt;
                          &lt;i className&#x3D;&quot;uil uil-facebook-f before:content-[&#39;\eae2&#39;] !text-white text-[1rem]&quot; &#x2F;&gt;
                        &lt;&#x2F;a&gt;
                        &lt;a
                          className&#x3D;&quot;!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]&quot;
                          href&#x3D;&quot;#&quot;
                        &gt;
                          &lt;i className&#x3D;&quot;uil uil-dribbble before:content-[&#39;\eaa2&#39;] !text-white text-[1rem]&quot; &#x2F;&gt;
                        &lt;&#x2F;a&gt;
                        &lt;a
                          className&#x3D;&quot;!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]&quot;
                          href&#x3D;&quot;#&quot;
                        &gt;
                          &lt;i className&#x3D;&quot;uil uil-instagram before:content-[&#39;\eb9c&#39;] !text-white text-[1rem]&quot; &#x2F;&gt;
                        &lt;&#x2F;a&gt;
                        &lt;a
                          className&#x3D;&quot;!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]&quot;
                          href&#x3D;&quot;#&quot;
                        &gt;
                          &lt;i className&#x3D;&quot;uil uil-youtube before:content-[&#39;\edb5&#39;] !text-white text-[1rem]&quot; &#x2F;&gt;
                        &lt;&#x2F;a&gt;
                      &lt;&#x2F;nav&gt;
                      {&#x2F;* &#x2F;.social *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.widget *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;md:w-4&#x2F;12 xl:w-3&#x2F;12 lg:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]&quot;&gt;
                    &lt;div className&#x3D;&quot;widget !text-[#cacaca]&quot;&gt;
                      &lt;h4 className&#x3D;&quot;widget-title !text-white !mb-3&quot;&gt;
                        Get in Touch
                      &lt;&#x2F;h4&gt;
                      &lt;address className&#x3D;&quot;xl:!pr-20 xxl:!pr-28 not-italic !leading-[inherit] block !mb-4&quot;&gt;
                        Moonshine St. 14&#x2F;05 Light City, London, United Kingdom
                      &lt;&#x2F;address&gt;
                      &lt;a
                        className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                        href&#x3D;&quot;mailto:first.last@email.com&quot;
                      &gt;
                        info@email.com
                      &lt;&#x2F;a&gt;
                      &lt;br &#x2F;&gt;
                      00 (123) 456 78 90
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.widget *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;md:w-4&#x2F;12 xl:w-3&#x2F;12 lg:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]&quot;&gt;
                    &lt;div className&#x3D;&quot;widget !text-[#cacaca]&quot;&gt;
                      &lt;h4 className&#x3D;&quot;widget-title !text-white !mb-3&quot;&gt;
                        Learn More
                      &lt;&#x2F;h4&gt;
                      &lt;ul className&#x3D;&quot;pl-0 list-none !mb-0&quot;&gt;
                        &lt;li&gt;
                          &lt;a
                            className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                            href&#x3D;&quot;#&quot;
                          &gt;
                            About Us
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;li&gt;
                        &lt;li className&#x3D;&quot;!mt-[0.35rem]&quot;&gt;
                          &lt;a
                            className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                            href&#x3D;&quot;#&quot;
                          &gt;
                            Our Story
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;li&gt;
                        &lt;li className&#x3D;&quot;!mt-[0.35rem]&quot;&gt;
                          &lt;a
                            className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                            href&#x3D;&quot;#&quot;
                          &gt;
                            Projects
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;li&gt;
                        &lt;li className&#x3D;&quot;!mt-[0.35rem]&quot;&gt;
                          &lt;a
                            className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                            href&#x3D;&quot;#&quot;
                          &gt;
                            Terms of Use
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;li&gt;
                        &lt;li className&#x3D;&quot;!mt-[0.35rem]&quot;&gt;
                          &lt;a
                            className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                            href&#x3D;&quot;#&quot;
                          &gt;
                            Privacy Policy
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;li&gt;
                      &lt;&#x2F;ul&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.widget *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;md:w-full xl:w-3&#x2F;12 lg:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]&quot;&gt;
                    &lt;div className&#x3D;&quot;widget !text-[#cacaca]&quot;&gt;
                      &lt;h4 className&#x3D;&quot;widget-title !text-white !mb-3&quot;&gt;
                        Our Newsletter
                      &lt;&#x2F;h4&gt;
                      &lt;p className&#x3D;&quot;!mb-5&quot;&gt;
                        Subscribe to our newsletter to get our news &amp;amp; deals
                        delivered to you.
                      &lt;&#x2F;p&gt;
                      &lt;div className&#x3D;&quot;newsletter-wrapper&quot;&gt;
                        {&#x2F;* Begin Mailchimp Signup Form *&#x2F;}
                        &lt;div id&#x3D;&quot;mc_embed_signup&quot;&gt;
                          &lt;form
                            action&#x3D;&quot;https:&#x2F;&#x2F;elemisfreebies.us20.list-manage.com&#x2F;subscribe&#x2F;post?u&#x3D;aa4947f70a475ce162057838d&amp;id&#x3D;b49ef47a9a&quot;
                            method&#x3D;&quot;post&quot;
                            id&#x3D;&quot;mc-embedded-subscribe-form&quot;
                            name&#x3D;&quot;mc-embedded-subscribe-form&quot;
                            className&#x3D;&quot;validate dark-fields&quot;
                            target&#x3D;&quot;_blank&quot;
                            noValidate&#x3D;&quot;&quot;
                          &gt;
                            &lt;div id&#x3D;&quot;mc_embed_signup_scroll&quot;&gt;
                              &lt;div className&#x3D;&quot;!text-left input-group form-floating !relative flex flex-wrap items-stretch w-full&quot;&gt;
                                &lt;input
                                  type&#x3D;&quot;email&quot;
                                  defaultValue&#x3D;&quot;&quot;
                                  name&#x3D;&quot;EMAIL&quot;
                                  className&#x3D;&quot;required email form-control block w-full text-[12px] font-medium !leading-[1.7] appearance-none bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] px-4 py-[0.6rem] rounded-[0.4rem] motion-reduce:transition-none focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] disabled:bg-[#aab0bc] disabled:opacity-100 file:!mt-[-0.6rem] file:mr-[-1rem] file:!mb-[-0.6rem] file:ml-[-1rem] file:!text-[#60697b] file:bg-[#fefefe] file:pointer-events-none file:transition-all file:duration-[0.2s] file:ease-in-out file:px-4 file:py-[0.6rem] file:rounded-none motion-reduce:file:transition-none placeholder:!text-[#959ca9] placeholder:opacity-100 border border-solid !border-[rgba(255,255,255,0.1)] !text-[#cacaca] bg-[rgba(255,255,255,.03)] focus-visible:!border-[rgba(63,120,224,0.5)]&quot;
                                  placeholder&#x3D;&quot;&quot;
                                  id&#x3D;&quot;mce-EMAIL&quot;
                                &#x2F;&gt;
                                &lt;label
                                  className&#x3D;&quot;!ml-[0.05rem] !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none origin-[0_0] px-4 py-[0.6rem] left-0 top-0&quot;
                                  htmlFor&#x3D;&quot;mce-EMAIL&quot;
                                &gt;
                                  Email Address
                                &lt;&#x2F;label&gt;
                                &lt;input
                                  type&#x3D;&quot;submit&quot;
                                  defaultValue&#x3D;&quot;Join&quot;
                                  name&#x3D;&quot;subscribe&quot;
                                  id&#x3D;&quot;mc-embedded-subscribe&quot;
                                  className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !relative z-[2] focus:z-[5] hover:!transform-none border-0&quot;
                                &#x2F;&gt;
                              &lt;&#x2F;div&gt;
                              &lt;div id&#x3D;&quot;mce-responses&quot; className&#x3D;&quot;clear&quot;&gt;
                                &lt;div
                                  className&#x3D;&quot;response&quot;
                                  id&#x3D;&quot;mce-error-response&quot;
                                  style&#x3D;{{ display: &quot;none&quot; }}
                                &#x2F;&gt;
                                &lt;div
                                  className&#x3D;&quot;response&quot;
                                  id&#x3D;&quot;mce-success-response&quot;
                                  style&#x3D;{{ display: &quot;none&quot; }}
                                &#x2F;&gt;
                              &lt;&#x2F;div&gt;
                              {&#x2F;* real people should not fill this in and expect good things - do not remove this or risk form bot signups*&#x2F;}
                              &lt;div
                                style&#x3D;{{
                                  position: &quot;absolute&quot;,
                                  left: &quot;-5000px&quot;,
                                }}
                                aria-hidden&#x3D;&quot;true&quot;
                              &gt;
                                &lt;input
                                  type&#x3D;&quot;text&quot;
                                  name&#x3D;&quot;b_ddc180777a163e0f9f66ee014_4b1bcfa0bc&quot;
                                  tabIndex&#x3D;{-1}
                                  defaultValue&#x3D;&quot;&quot;
                                &#x2F;&gt;
                              &lt;&#x2F;div&gt;
                              &lt;div className&#x3D;&quot;clear&quot; &#x2F;&gt;
                            &lt;&#x2F;div&gt;
                          &lt;&#x2F;form&gt;
                        &lt;&#x2F;div&gt;
                        {&#x2F;*End mc_embed_signup*&#x2F;}
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;.newsletter-wrapper *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.widget *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;column *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.row *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.container *&#x2F;}
            &lt;&#x2F;footer&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;section&gt;`}
        />
        {/* /section */}
        <section id="snippet-2" className="wrapper !bg-[#ffffff] ">
          <div className="container-fluid pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20 xxl:!px-10">
            <div className="!mt-[4.5rem]" />
            <footer className="!bg-[#edf2fc]">
              <div className="container">
                <div className="flex flex-wrap mx-[-15px]">
                  <div className="xl:w-11/12 xxl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                    <div
                      className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 !text-white -translate-y-2/4 !mb-[-1.25rem] xl:!mt-0 lg:!mt-0 xl:-translate-y-2/4 lg:-translate-y-2/4 !mb-lg-n50p border-radius-lg-top !bg-cover bg-[center_center] bg-no-repeat !bg-scroll !relative z-0 before:rounded-[0.4rem] before:bg-[rgba(30,34,40,.4)] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0"
                      style={{
                        backgroundImage: "url(/assets/img/photos/bg3.jpg)",
                      }}
                    >
                      <div className="card-body p-6 flex-row text-center xl:!justify-between lg:!justify-between md:!justify-between xl:!flex xl:!items-center lg:!flex lg:!items-center xl:!p-12 lg:!p-12 md:!p-12 xl:!text-left lg:!text-left">
                        <h3 className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] xl:!pr-20 lg:!pr-20 xxl:!pr-32 !text-white !mb-[1.5rem] lg:!mb-0 xl:!mb-0">
                          We are trusted by over 5000+ clients. Join them by
                          using our services and grow your business.
                        </h3>
                        <a
                          href="#"
                          className="btn btn-white !rounded-[50rem] !mb-0 whitespace-nowrap"
                        >
                          Join Us
                        </a>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.card */}
                  </div>
                  {/* /column */}
                </div>
                {/* /.row */}
              </div>
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
                              className="!text-[#60697b]"
                            >
                              sandbox@email.com
                            </a>
                            <br className="hidden xl:block lg:block md:block" />
                            <a
                              href="mailto:help@sandbox.com"
                              className="!text-[#60697b]"
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
                    <p>
                      © {new Date().getFullYear()} Sandbox. All rights reserved.
                    </p>
                    <nav className="nav social justify-center">
                      <a
                        className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-twitter before:content-['\ed59'] text-[1rem] !text-[#5daed5]" />
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-facebook-f before:content-['\eae2'] text-[1rem] !text-[#4470cf]" />
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-dribbble before:content-['\eaa2'] text-[1rem] !text-[#e94d88]" />
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-instagram before:content-['\eb9c'] text-[1rem] !text-[#d53581]" />
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-youtube before:content-['\edb5'] text-[1rem] !text-[#c8312b]" />
                      </a>
                    </nav>
                    {/* /.social */}
                  </div>
                  {/* /column */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container */}
            </footer>
          </div>
        </section>
        <CodeSnippet
          code={`   &lt;section id&#x3D;&quot;snippet-2&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
          &lt;div className&#x3D;&quot;container-fluid pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20 xxl:!px-10&quot;&gt;
            &lt;div className&#x3D;&quot;!mt-[4.5rem]&quot; &#x2F;&gt;
            &lt;footer className&#x3D;&quot;!bg-[#edf2fc]&quot;&gt;
              &lt;div className&#x3D;&quot;container&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px]&quot;&gt;
                  &lt;div className&#x3D;&quot;xl:w-11&#x2F;12 xxl:w-10&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
                    &lt;div
                      className&#x3D;&quot;card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 !text-white -translate-y-2&#x2F;4 !mb-[-1.25rem] xl:!mt-0 lg:!mt-0 xl:-translate-y-2&#x2F;4 lg:-translate-y-2&#x2F;4 !mb-lg-n50p border-radius-lg-top !bg-cover bg-[center_center] bg-no-repeat !bg-scroll !relative z-0 before:rounded-[0.4rem] before:bg-[rgba(30,34,40,.4)] before:content-[&#39;&#39;] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0&quot;
                      style&#x3D;{{
                        backgroundImage: &quot;url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg3.jpg)&quot;,
                      }}
                    &gt;
                      &lt;div className&#x3D;&quot;card-body p-6 flex-row text-center xl:!justify-between lg:!justify-between md:!justify-between xl:!flex xl:!items-center lg:!flex lg:!items-center xl:!p-12 lg:!p-12 md:!p-12 xl:!text-left lg:!text-left&quot;&gt;
                        &lt;h3 className&#x3D;&quot;!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] xl:!pr-20 lg:!pr-20 xxl:!pr-32 !text-white !mb-[1.5rem] lg:!mb-0 xl:!mb-0&quot;&gt;
                          We are trusted by over 5000+ clients. Join them by
                          using our services and grow your business.
                        &lt;&#x2F;h3&gt;
                        &lt;a
                          href&#x3D;&quot;#&quot;
                          className&#x3D;&quot;btn btn-white !rounded-[50rem] !mb-0 whitespace-nowrap&quot;
                        &gt;
                          Join Us
                        &lt;&#x2F;a&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;*&#x2F;.card-body *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;.card *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;column *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;* &#x2F;.row *&#x2F;}
              &lt;&#x2F;div&gt;
              &lt;div className&#x3D;&quot;container pb-14 !text-center&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-2.5rem] lg:!mt-0 xl:!mt-0&quot;&gt;
                  &lt;div className&#x3D;&quot;xl:w-10&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto&quot;&gt;
                    &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mb-3&quot;&gt;
                      &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 md:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full&quot;&gt;
                        &lt;div className&#x3D;&quot;widget&quot;&gt;
                          &lt;h4 className&#x3D;&quot;widget-title&quot;&gt;Address&lt;&#x2F;h4&gt;
                          &lt;address className&#x3D;&quot;not-italic !leading-[inherit] !mb-4&quot;&gt;
                            Moonshine St. 14&#x2F;05
                            &lt;br className&#x3D;&quot;hidden xl:block lg:block md:block&quot; &#x2F;&gt;
                            Light City, London, UK
                          &lt;&#x2F;address&gt;
                        &lt;&#x2F;div&gt;
                        {&#x2F;* &#x2F;.widget *&#x2F;}
                      &lt;&#x2F;div&gt;
                      {&#x2F;*&#x2F;column *&#x2F;}
                      &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 md:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full&quot;&gt;
                        &lt;div className&#x3D;&quot;widget&quot;&gt;
                          &lt;h4 className&#x3D;&quot;widget-title&quot;&gt;Phone&lt;&#x2F;h4&gt;
                          &lt;p&gt;
                            00 (123) 456 78 90 &lt;br &#x2F;&gt;
                            00 (987) 654 32 10
                          &lt;&#x2F;p&gt;
                        &lt;&#x2F;div&gt;
                        {&#x2F;* &#x2F;.widget *&#x2F;}
                      &lt;&#x2F;div&gt;
                      {&#x2F;*&#x2F;column *&#x2F;}
                      &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 md:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full&quot;&gt;
                        &lt;div className&#x3D;&quot;widget&quot;&gt;
                          &lt;h4 className&#x3D;&quot;widget-title&quot;&gt;E-mail&lt;&#x2F;h4&gt;
                          &lt;p&gt;
                            &lt;a
                              href&#x3D;&quot;mailto:sandbox@email.com&quot;
                              className&#x3D;&quot;!text-[#60697b]&quot;
                            &gt;
                              sandbox@email.com
                            &lt;&#x2F;a&gt;
                            &lt;br className&#x3D;&quot;hidden xl:block lg:block md:block&quot; &#x2F;&gt;
                            &lt;a
                              href&#x3D;&quot;mailto:help@sandbox.com&quot;
                              className&#x3D;&quot;!text-[#60697b]&quot;
                            &gt;
                              help@sandbox.com
                            &lt;&#x2F;a&gt;
                          &lt;&#x2F;p&gt;
                        &lt;&#x2F;div&gt;
                        {&#x2F;* &#x2F;.widget *&#x2F;}
                      &lt;&#x2F;div&gt;
                      {&#x2F;*&#x2F;column *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;*&#x2F;.row *&#x2F;}
                    &lt;p&gt;© 2024 Sandbox. All rights reserved.&lt;&#x2F;p&gt;
                    &lt;nav className&#x3D;&quot;nav social justify-center&quot;&gt;
                      &lt;a
                        className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                        href&#x3D;&quot;#&quot;
                      &gt;
                        &lt;i className&#x3D;&quot;uil uil-twitter before:content-[&#39;\ed59&#39;] text-[1rem] !text-[#5daed5]&quot; &#x2F;&gt;
                      &lt;&#x2F;a&gt;
                      &lt;a
                        className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                        href&#x3D;&quot;#&quot;
                      &gt;
                        &lt;i className&#x3D;&quot;uil uil-facebook-f before:content-[&#39;\eae2&#39;] text-[1rem] !text-[#4470cf]&quot; &#x2F;&gt;
                      &lt;&#x2F;a&gt;
                      &lt;a
                        className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                        href&#x3D;&quot;#&quot;
                      &gt;
                        &lt;i className&#x3D;&quot;uil uil-dribbble before:content-[&#39;\eaa2&#39;] text-[1rem] !text-[#e94d88]&quot; &#x2F;&gt;
                      &lt;&#x2F;a&gt;
                      &lt;a
                        className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                        href&#x3D;&quot;#&quot;
                      &gt;
                        &lt;i className&#x3D;&quot;uil uil-instagram before:content-[&#39;\eb9c&#39;] text-[1rem] !text-[#d53581]&quot; &#x2F;&gt;
                      &lt;&#x2F;a&gt;
                      &lt;a
                        className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                        href&#x3D;&quot;#&quot;
                      &gt;
                        &lt;i className&#x3D;&quot;uil uil-youtube before:content-[&#39;\edb5&#39;] text-[1rem] !text-[#c8312b]&quot; &#x2F;&gt;
                      &lt;&#x2F;a&gt;
                    &lt;&#x2F;nav&gt;
                    {&#x2F;* &#x2F;.social *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;column *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;* &#x2F;.row *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.container *&#x2F;}
            &lt;&#x2F;footer&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;section&gt;`}
        />
        {/* /section */}
        <section id="snippet-3" className="wrapper !bg-[#ffffff] ">
          <div className="container-fluid pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20 xxl:!px-10">
            <footer className="bg-[#21262c] opacity-100 !text-[#cacaca]">
              <div className="container pt-[4.5rem] xl:pt-[7rem] lg:pt-[7rem] md:pt-[7rem] pb-[1.75rem]">
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0">
                  <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
                    <div className="widget">
                      <h3 className="h2 !mb-3 !text-white !leading-[1.35]">
                        Join the Community
                      </h3>
                      <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-5">
                        Let's make something great together. We are trusted by
                        over 5000+ clients. Join them by using our services and
                        grow your business.
                      </p>
                      <a href="#" className="btn btn-white !rounded-[50rem]">
                        Join Us
                      </a>
                    </div>
                    {/* /.widget */}
                  </div>
                  {/* /column */}
                  <div className="md:w-4/12 lg:w-2/12 xl:w-2/12 w-full flex-[0_0_auto] !px-[15px] max-w-full lg:!ml-[16.66666667%] xl:!ml-[16.66666667%] max-lg:!mt-[30px]">
                    <div className="widget">
                      <h4 className="widget-title !text-white !mb-3">
                        Need Help?
                      </h4>
                      <ul className="pl-0 list-none text-inherit !mb-0">
                        <li>
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Support
                          </a>
                        </li>
                        <li className="!mt-[0.35rem]">
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Get Started
                          </a>
                        </li>
                        <li className="!mt-[0.35rem]">
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Terms of Use
                          </a>
                        </li>
                        <li className="!mt-[0.35rem]">
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Privacy Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* /.widget */}
                  </div>
                  {/* /column */}
                  <div className="md:w-4/12 lg:w-2/12 xl:w-2/12 w-full flex-[0_0_auto] !px-[15px] max-w-full max-lg:!mt-[30px]">
                    <div className="widget">
                      <h4 className="widget-title !text-white !mb-3">
                        Learn More
                      </h4>
                      <ul className="pl-0 list-none !mb-0">
                        <li>
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            About Us
                          </a>
                        </li>
                        <li className="!mt-[0.35rem]">
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Our Story
                          </a>
                        </li>
                        <li className="!mt-[0.35rem]">
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Projects
                          </a>
                        </li>
                        <li className="!mt-[0.35rem]">
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Pricing
                          </a>
                        </li>
                        <li className="!mt-[0.35rem]">
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Features
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* /.widget */}
                  </div>
                  {/* /column */}
                  <div className="md:w-4/12 lg:w-2/12 xl:w-2/12 w-full flex-[0_0_auto] !px-[15px] max-w-full max-lg:!mt-[30px]">
                    <div className="widget">
                      <h4 className="widget-title !text-white !mb-3">
                        Get in Touch
                      </h4>
                      <address className="not-italic !leading-[inherit] !mb-4">
                        Moonshine St. 14/05 Light City, London, United Kingdom
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
                  </div>
                  {/* /column */}
                </div>
                {/*/.row */}
                <hr className="!mt-13 xl:!mt-20 lg:!mt-20 md:!mt-20 !mb-7" />
                <div className="xl:!flex lg:!flex md:!flex items-center justify-between">
                  <p className="!mb-2 xl:!mb-0 lg:!mb-0">
                    © {new Date().getFullYear()} Sandbox. All rights reserved.
                  </p>
                  <nav className="nav social social-white xl:!text-right lg:!text-right md:!text-right">
                    <a
                      className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                      href="#"
                    >
                      <i className="uil uil-twitter before:content-['\ed59'] text-[1rem] !text-[#5daed5]" />
                    </a>
                    <a
                      className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                      href="#"
                    >
                      <i className="uil uil-facebook-f before:content-['\eae2'] text-[1rem] !text-[#4470cf]" />
                    </a>
                    <a
                      className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                      href="#"
                    >
                      <i className="uil uil-dribbble before:content-['\eaa2'] text-[1rem] !text-[#e94d88]" />
                    </a>
                    <a
                      className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                      href="#"
                    >
                      <i className="uil uil-instagram before:content-['\eb9c'] text-[1rem] !text-[#d53581]" />
                    </a>
                    <a
                      className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                      href="#"
                    >
                      <i className="uil uil-youtube before:content-['\edb5'] text-[1rem] !text-[#c8312b]" />
                    </a>
                  </nav>
                  {/* /.social */}
                </div>
                {/* /div */}
              </div>
              {/* /.container */}
            </footer>
          </div>
        </section>
        <CodeSnippet
          code={`  &lt;section id&#x3D;&quot;snippet-3&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
          &lt;div className&#x3D;&quot;container-fluid pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20 xxl:!px-10&quot;&gt;
            &lt;footer className&#x3D;&quot;bg-[#21262c] opacity-100 !text-[#cacaca]&quot;&gt;
              &lt;div className&#x3D;&quot;container pt-[4.5rem] xl:pt-[7rem] lg:pt-[7rem] md:pt-[7rem] pb-[1.75rem]&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0&quot;&gt;
                  &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]&quot;&gt;
                    &lt;div className&#x3D;&quot;widget&quot;&gt;
                      &lt;h3 className&#x3D;&quot;h2 !mb-3 !text-white !leading-[1.35]&quot;&gt;
                        Join the Community
                      &lt;&#x2F;h3&gt;
                      &lt;p className&#x3D;&quot;lead !leading-[1.65] text-[0.9rem] font-medium !mb-5&quot;&gt;
                        Let&#39;s make something great together. We are trusted by
                        over 5000+ clients. Join them by using our services and
                        grow your business.
                      &lt;&#x2F;p&gt;
                      &lt;a href&#x3D;&quot;#&quot; className&#x3D;&quot;btn btn-white !rounded-[50rem]&quot;&gt;
                        Join Us
                      &lt;&#x2F;a&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.widget *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;md:w-4&#x2F;12 lg:w-2&#x2F;12 xl:w-2&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full lg:!ml-[16.66666667%] xl:!ml-[16.66666667%] max-lg:!mt-[30px]&quot;&gt;
                    &lt;div className&#x3D;&quot;widget&quot;&gt;
                      &lt;h4 className&#x3D;&quot;widget-title !text-white !mb-3&quot;&gt;
                        Need Help?
                      &lt;&#x2F;h4&gt;
                      &lt;ul className&#x3D;&quot;pl-0 list-none text-inherit !mb-0&quot;&gt;
                        &lt;li&gt;
                          &lt;a
                            className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                            href&#x3D;&quot;#&quot;
                          &gt;
                            Support
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;li&gt;
                        &lt;li className&#x3D;&quot;!mt-[0.35rem]&quot;&gt;
                          &lt;a
                            className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                            href&#x3D;&quot;#&quot;
                          &gt;
                            Get Started
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;li&gt;
                        &lt;li className&#x3D;&quot;!mt-[0.35rem]&quot;&gt;
                          &lt;a
                            className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                            href&#x3D;&quot;#&quot;
                          &gt;
                            Terms of Use
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;li&gt;
                        &lt;li className&#x3D;&quot;!mt-[0.35rem]&quot;&gt;
                          &lt;a
                            className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                            href&#x3D;&quot;#&quot;
                          &gt;
                            Privacy Policy
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;li&gt;
                      &lt;&#x2F;ul&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.widget *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;md:w-4&#x2F;12 lg:w-2&#x2F;12 xl:w-2&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full max-lg:!mt-[30px]&quot;&gt;
                    &lt;div className&#x3D;&quot;widget&quot;&gt;
                      &lt;h4 className&#x3D;&quot;widget-title !text-white !mb-3&quot;&gt;
                        Learn More
                      &lt;&#x2F;h4&gt;
                      &lt;ul className&#x3D;&quot;pl-0 list-none !mb-0&quot;&gt;
                        &lt;li&gt;
                          &lt;a
                            className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                            href&#x3D;&quot;#&quot;
                          &gt;
                            About Us
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;li&gt;
                        &lt;li className&#x3D;&quot;!mt-[0.35rem]&quot;&gt;
                          &lt;a
                            className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                            href&#x3D;&quot;#&quot;
                          &gt;
                            Our Story
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;li&gt;
                        &lt;li className&#x3D;&quot;!mt-[0.35rem]&quot;&gt;
                          &lt;a
                            className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                            href&#x3D;&quot;#&quot;
                          &gt;
                            Projects
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;li&gt;
                        &lt;li className&#x3D;&quot;!mt-[0.35rem]&quot;&gt;
                          &lt;a
                            className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                            href&#x3D;&quot;#&quot;
                          &gt;
                            Pricing
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;li&gt;
                        &lt;li className&#x3D;&quot;!mt-[0.35rem]&quot;&gt;
                          &lt;a
                            className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                            href&#x3D;&quot;#&quot;
                          &gt;
                            Features
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;li&gt;
                      &lt;&#x2F;ul&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.widget *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;md:w-4&#x2F;12 lg:w-2&#x2F;12 xl:w-2&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full max-lg:!mt-[30px]&quot;&gt;
                    &lt;div className&#x3D;&quot;widget&quot;&gt;
                      &lt;h4 className&#x3D;&quot;widget-title !text-white !mb-3&quot;&gt;
                        Get in Touch
                      &lt;&#x2F;h4&gt;
                      &lt;address className&#x3D;&quot;not-italic !leading-[inherit] !mb-4&quot;&gt;
                        Moonshine St. 14&#x2F;05 Light City, London, United Kingdom
                      &lt;&#x2F;address&gt;
                      &lt;a
                        className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                        href&#x3D;&quot;mailto:first.last@email.com&quot;
                      &gt;
                        info@email.com
                      &lt;&#x2F;a&gt;
                      &lt;br &#x2F;&gt;
                      00 (123) 456 78 90
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.widget *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;column *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.row *&#x2F;}
                &lt;hr className&#x3D;&quot;!mt-13 xl:!mt-20 lg:!mt-20 md:!mt-20 !mb-7&quot; &#x2F;&gt;
                &lt;div className&#x3D;&quot;xl:!flex lg:!flex md:!flex items-center justify-between&quot;&gt;
                  &lt;p className&#x3D;&quot;!mb-2 xl:!mb-0 lg:!mb-0&quot;&gt;
                    © 2024 Sandbox. All rights reserved.
                  &lt;&#x2F;p&gt;
                  &lt;nav className&#x3D;&quot;nav social social-white xl:!text-right lg:!text-right md:!text-right&quot;&gt;
                    &lt;a
                      className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                      href&#x3D;&quot;#&quot;
                    &gt;
                      &lt;i className&#x3D;&quot;uil uil-twitter before:content-[&#39;\ed59&#39;] text-[1rem] !text-[#5daed5]&quot; &#x2F;&gt;
                    &lt;&#x2F;a&gt;
                    &lt;a
                      className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                      href&#x3D;&quot;#&quot;
                    &gt;
                      &lt;i className&#x3D;&quot;uil uil-facebook-f before:content-[&#39;\eae2&#39;] text-[1rem] !text-[#4470cf]&quot; &#x2F;&gt;
                    &lt;&#x2F;a&gt;
                    &lt;a
                      className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                      href&#x3D;&quot;#&quot;
                    &gt;
                      &lt;i className&#x3D;&quot;uil uil-dribbble before:content-[&#39;\eaa2&#39;] text-[1rem] !text-[#e94d88]&quot; &#x2F;&gt;
                    &lt;&#x2F;a&gt;
                    &lt;a
                      className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                      href&#x3D;&quot;#&quot;
                    &gt;
                      &lt;i className&#x3D;&quot;uil uil-instagram before:content-[&#39;\eb9c&#39;] text-[1rem] !text-[#d53581]&quot; &#x2F;&gt;
                    &lt;&#x2F;a&gt;
                    &lt;a
                      className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                      href&#x3D;&quot;#&quot;
                    &gt;
                      &lt;i className&#x3D;&quot;uil uil-youtube before:content-[&#39;\edb5&#39;] text-[1rem] !text-[#c8312b]&quot; &#x2F;&gt;
                    &lt;&#x2F;a&gt;
                  &lt;&#x2F;nav&gt;
                  {&#x2F;* &#x2F;.social *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;* &#x2F;div *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.container *&#x2F;}
            &lt;&#x2F;footer&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;section&gt;`}
        />
        {/* /section */}
        <section id="snippet-4" className="wrapper !bg-[#ffffff] ">
          <div className="container-fluid pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20 xxl:!px-10">
            <footer>
              <div className="container pb-7">
                <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 !mt-[-30px]">
                  <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:px-0 lg:px-0 max-w-full !mt-[30px]">
                    <div className="widget">
                      <img
                        className="!mb-4"
                        srcSet="/assets/img/logo@2x.png 2x"
                        alt="image"
                        width="134"
                        height="26"
                        src="/assets/img/logo.png"
                      />
                      <p className="lead text-[0.9rem] font-medium !leading-[1.65] !mb-0">
                        We are trusted by over 5000+ clients. Join them by using
                        our services and grow your business.
                      </p>
                    </div>
                    {/* /.widget */}
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:px-0 lg:px-0 max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] !mt-[30px]">
                    <div className="widget">
                      <div className="flex flex-row">
                        <div>
                          <div className="icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]">
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
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:px-0 lg:px-0 max-w-full !mt-[30px]">
                    <div className="widget">
                      <div className="flex flex-row">
                        <div>
                          <div className="icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]">
                            <i className="uil uil-location-pin-alt before:content-['\ebd8']" />
                          </div>
                        </div>
                        <div className="!self-start !justify-start">
                          <h5 className="!mb-1">Address</h5>
                          <address className="not-italic !leading-[inherit] !mb-4">
                            Moonshine St. 14/05 Light City, London, United
                            Kingdom
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
                <hr className="!mt-13 xl:!mt-[4.5rem] lg:!mt-[4.5rem] md:!mt-[4.5rem] !mb-7" />
                <div className="xl:!flex lg:!flex md:!flex items-center justify-between">
                  <p className="!mb-2 xl:!mb-0 lg:!mb-0">
                    © {new Date().getFullYear()} Sandbox. All rights reserved.
                  </p>
                  <nav className="nav social social-muted !mb-0 xl:!text-right lg:!text-right md:!text-right">
                    <a
                      className="m-[0_.7rem_0_0] xl:m-[0_0_0_.7rem] lg:m-[0_0_0_.7rem] md:m-[0_0_0_.7rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                      href="#"
                    >
                      <i className="uil uil-twitter before:content-['\ed59'] text-[1rem] !text-[#5daed5]" />
                    </a>
                    <a
                      className="m-[0_.7rem_0_0] xl:m-[0_0_0_.7rem] lg:m-[0_0_0_.7rem] md:m-[0_0_0_.7rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                      href="#"
                    >
                      <i className="uil uil-facebook-f before:content-['\eae2'] text-[1rem] !text-[#4470cf]" />
                    </a>
                    <a
                      className="m-[0_.7rem_0_0] xl:m-[0_0_0_.7rem] lg:m-[0_0_0_.7rem] md:m-[0_0_0_.7rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                      href="#"
                    >
                      <i className="uil uil-dribbble before:content-['\eaa2'] text-[1rem] !text-[#e94d88]" />
                    </a>
                    <a
                      className="m-[0_.7rem_0_0] xl:m-[0_0_0_.7rem] lg:m-[0_0_0_.7rem] md:m-[0_0_0_.7rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                      href="#"
                    >
                      <i className="uil uil-instagram before:content-['\eb9c'] text-[1rem] !text-[#d53581]" />
                    </a>
                    <a
                      className="m-[0_.7rem_0_0] xl:m-[0_0_0_.7rem] lg:m-[0_0_0_.7rem] md:m-[0_0_0_.7rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                      href="#"
                    >
                      <i className="uil uil-youtube before:content-['\edb5'] text-[1rem] !text-[#c8312b]" />
                    </a>
                  </nav>
                  {/* /.social */}
                </div>
              </div>
              {/* /.container */}
            </footer>
          </div>
        </section>
        <CodeSnippet
          code={` &lt;section id&#x3D;&quot;snippet-4&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
          &lt;div className&#x3D;&quot;container-fluid pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20 xxl:!px-10&quot;&gt;
            &lt;footer&gt;
              &lt;div className&#x3D;&quot;container pb-7&quot;&gt;
                &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 !mt-[-30px]&quot;&gt;
                  &lt;div className&#x3D;&quot;xl:w-4&#x2F;12 lg:w-4&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:px-0 lg:px-0 max-w-full !mt-[30px]&quot;&gt;
                    &lt;div className&#x3D;&quot;widget&quot;&gt;
                      &lt;img
                        className&#x3D;&quot;!mb-4&quot;
                        srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;logo@2x.png 2x&quot;
                        alt&#x3D;&quot;image&quot;
                        width&#x3D;&quot;134&quot;
                        height&#x3D;&quot;26&quot;
                        src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;logo.png&quot;
                      &#x2F;&gt;
                      &lt;p className&#x3D;&quot;lead text-[0.9rem] font-medium !leading-[1.65] !mb-0&quot;&gt;
                        We are trusted by over 5000+ clients. Join them by using
                        our services and grow your business.
                      &lt;&#x2F;p&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.widget *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;xl:w-3&#x2F;12 lg:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:px-0 lg:px-0 max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] !mt-[30px]&quot;&gt;
                    &lt;div className&#x3D;&quot;widget&quot;&gt;
                      &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
                        &lt;div&gt;
                          &lt;div className&#x3D;&quot;icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]&quot;&gt;
                            &lt;i className&#x3D;&quot;uil uil-phone-volume before:content-[&#39;\ec50&#39;]&quot; &#x2F;&gt;
                          &lt;&#x2F;div&gt;
                        &lt;&#x2F;div&gt;
                        &lt;div&gt;
                          &lt;h5 className&#x3D;&quot;!mb-1&quot;&gt;Phone&lt;&#x2F;h5&gt;
                          &lt;p className&#x3D;&quot;!mb-0&quot;&gt;
                            00 (123) 456 78 90 &lt;br &#x2F;&gt;
                            00 (987) 654 32 10
                          &lt;&#x2F;p&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;*&#x2F;div *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.widget *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;xl:w-3&#x2F;12 lg:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] xl:px-0 lg:px-0 max-w-full !mt-[30px]&quot;&gt;
                    &lt;div className&#x3D;&quot;widget&quot;&gt;
                      &lt;div className&#x3D;&quot;flex flex-row&quot;&gt;
                        &lt;div&gt;
                          &lt;div className&#x3D;&quot;icon !text-[#3f78e0] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]&quot;&gt;
                            &lt;i className&#x3D;&quot;uil uil-location-pin-alt before:content-[&#39;\ebd8&#39;]&quot; &#x2F;&gt;
                          &lt;&#x2F;div&gt;
                        &lt;&#x2F;div&gt;
                        &lt;div className&#x3D;&quot;!self-start !justify-start&quot;&gt;
                          &lt;h5 className&#x3D;&quot;!mb-1&quot;&gt;Address&lt;&#x2F;h5&gt;
                          &lt;address className&#x3D;&quot;not-italic !leading-[inherit] !mb-4&quot;&gt;
                            Moonshine St. 14&#x2F;05 Light City, London, United
                            Kingdom
                          &lt;&#x2F;address&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                      {&#x2F;*&#x2F;div *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.widget *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;column *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.row *&#x2F;}
                &lt;hr className&#x3D;&quot;!mt-13 xl:!mt-[4.5rem] lg:!mt-[4.5rem] md:!mt-[4.5rem] !mb-7&quot; &#x2F;&gt;
                &lt;div className&#x3D;&quot;xl:!flex lg:!flex md:!flex items-center justify-between&quot;&gt;
                  &lt;p className&#x3D;&quot;!mb-2 xl:!mb-0 lg:!mb-0&quot;&gt;
                    © 2024 Sandbox. All rights reserved.
                  &lt;&#x2F;p&gt;
                  &lt;nav className&#x3D;&quot;nav social social-muted !mb-0 xl:!text-right lg:!text-right md:!text-right&quot;&gt;
                    &lt;a
                      className&#x3D;&quot;m-[0_.7rem_0_0] xl:m-[0_0_0_.7rem] lg:m-[0_0_0_.7rem] md:m-[0_0_0_.7rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                      href&#x3D;&quot;#&quot;
                    &gt;
                      &lt;i className&#x3D;&quot;uil uil-twitter before:content-[&#39;\ed59&#39;] text-[1rem] !text-[#5daed5]&quot; &#x2F;&gt;
                    &lt;&#x2F;a&gt;
                    &lt;a
                      className&#x3D;&quot;m-[0_.7rem_0_0] xl:m-[0_0_0_.7rem] lg:m-[0_0_0_.7rem] md:m-[0_0_0_.7rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                      href&#x3D;&quot;#&quot;
                    &gt;
                      &lt;i className&#x3D;&quot;uil uil-facebook-f before:content-[&#39;\eae2&#39;] text-[1rem] !text-[#4470cf]&quot; &#x2F;&gt;
                    &lt;&#x2F;a&gt;
                    &lt;a
                      className&#x3D;&quot;m-[0_.7rem_0_0] xl:m-[0_0_0_.7rem] lg:m-[0_0_0_.7rem] md:m-[0_0_0_.7rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                      href&#x3D;&quot;#&quot;
                    &gt;
                      &lt;i className&#x3D;&quot;uil uil-dribbble before:content-[&#39;\eaa2&#39;] text-[1rem] !text-[#e94d88]&quot; &#x2F;&gt;
                    &lt;&#x2F;a&gt;
                    &lt;a
                      className&#x3D;&quot;m-[0_.7rem_0_0] xl:m-[0_0_0_.7rem] lg:m-[0_0_0_.7rem] md:m-[0_0_0_.7rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                      href&#x3D;&quot;#&quot;
                    &gt;
                      &lt;i className&#x3D;&quot;uil uil-instagram before:content-[&#39;\eb9c&#39;] text-[1rem] !text-[#d53581]&quot; &#x2F;&gt;
                    &lt;&#x2F;a&gt;
                    &lt;a
                      className&#x3D;&quot;m-[0_.7rem_0_0] xl:m-[0_0_0_.7rem] lg:m-[0_0_0_.7rem] md:m-[0_0_0_.7rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                      href&#x3D;&quot;#&quot;
                    &gt;
                      &lt;i className&#x3D;&quot;uil uil-youtube before:content-[&#39;\edb5&#39;] text-[1rem] !text-[#c8312b]&quot; &#x2F;&gt;
                    &lt;&#x2F;a&gt;
                  &lt;&#x2F;nav&gt;
                  {&#x2F;* &#x2F;.social *&#x2F;}
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.container *&#x2F;}
            &lt;&#x2F;footer&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;section&gt;`}
        />
        {/* /section */}
        <section id="snippet-5" className="wrapper !bg-[#ffffff] ">
          <div className="container-fluid pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20 xxl:!px-10">
            <footer className="bg-[rgba(52,63,82)] opacity-100 !text-[#cacaca]">
              <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
                <div className="xl:!flex lg:!flex flex-row xl:!items-center lg:!items-center">
                  <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-6 xl:!mb-0 lg:!mb-0 lg:!pr-40 xl:!pr-60 xxl:!pr-[22.5rem] !text-white">
                    Join our community by using our services and grow your
                    business.
                  </h3>
                  <a
                    href="#"
                    className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mb-0 whitespace-nowrap"
                  >
                    Try It For Free
                  </a>
                </div>
                {/*/div */}
                <hr className="!mt-[3rem] !mb-[3.5rem] opacity-100 m-[4.5rem_0] border-t border-solid border-[rgba(164,174,198,.2)]" />
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0">
                  <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
                    <div className="widget !text-[#cacaca]">
                      <img
                        className="!mb-4"
                        srcSet="/assets/img/logo-light@2x.png 2x"
                        alt="image"
                        width="134"
                        height="26"
                        src="/assets/img/logo-light.png"
                      />
                      <p className="!mb-4">
                        © {new Date().getFullYear()} Sandbox.
                        <br className="hidden xl:block lg:block !text-[#cacaca]" />
                        All rights reserved.
                      </p>
                      <nav className="nav social social-white">
                        <a
                          className="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-twitter before:content-['\ed59'] !text-white text-[1rem]" />
                        </a>
                        <a
                          className="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-facebook-f before:content-['\eae2'] !text-white text-[1rem]" />
                        </a>
                        <a
                          className="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-dribbble before:content-['\eaa2'] !text-white text-[1rem]" />
                        </a>
                        <a
                          className="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-instagram before:content-['\eb9c'] !text-white text-[1rem]" />
                        </a>
                        <a
                          className="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-youtube before:content-['\edb5'] !text-white text-[1rem]" />
                        </a>
                      </nav>
                      {/* /.social */}
                    </div>
                    {/* /.widget */}
                  </div>
                  {/* /column */}
                  <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
                    <div className="widget !text-[#cacaca]">
                      <h4 className="widget-title !text-white !mb-3">
                        Get in Touch
                      </h4>
                      <address className="xl:!pr-20 xxl:!pr-28 not-italic !leading-[inherit] block !mb-4">
                        Moonshine St. 14/05 Light City, London, United Kingdom
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
                  </div>
                  {/* /column */}
                  <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
                    <div className="widget !text-[#cacaca]">
                      <h4 className="widget-title !text-white !mb-3">
                        Learn More
                      </h4>
                      <ul className="pl-0 list-none !mb-0">
                        <li>
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            About Us
                          </a>
                        </li>
                        <li className="!mt-[0.35rem]">
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Our Story
                          </a>
                        </li>
                        <li className="!mt-[0.35rem]">
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Projects
                          </a>
                        </li>
                        <li className="!mt-[0.35rem]">
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Terms of Use
                          </a>
                        </li>
                        <li className="!mt-[0.35rem]">
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Privacy Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* /.widget */}
                  </div>
                  {/* /column */}
                  <div className="md:w-full xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
                    <div className="widget !text-[#cacaca]">
                      <h4 className="widget-title !text-white !mb-3">
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
                            action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&id=b49ef47a9a"
                            method="post"
                            id="mc-embedded-subscribe-form2"
                            name="mc-embedded-subscribe-form"
                            className="validate dark-fields"
                            target="_blank"
                            noValidate=""
                          >
                            <div id="mc_embed_signup_scroll2">
                              <div className="!text-left input-group form-floating !relative flex flex-wrap items-stretch w-full">
                                <input
                                  type="email"
                                  defaultValue=""
                                  name="EMAIL"
                                  className="required email form-control block w-full text-[12px] font-medium !leading-[1.7] appearance-none bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] px-4 py-[0.6rem] rounded-[0.4rem] motion-reduce:transition-none focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] disabled:bg-[#aab0bc] disabled:opacity-100 file:!mt-[-0.6rem] file:mr-[-1rem] file:!mb-[-0.6rem] file:ml-[-1rem] file:!text-[#60697b] file:bg-[#fefefe] file:pointer-events-none file:transition-all file:duration-[0.2s] file:ease-in-out file:px-4 file:py-[0.6rem] file:rounded-none motion-reduce:file:transition-none placeholder:!text-[#959ca9] placeholder:opacity-100 border border-solid !border-[rgba(255,255,255,0.1)] !text-[#cacaca] bg-[rgba(255,255,255,.03)] focus-visible:!border-[rgba(63,120,224,0.5)]"
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
                                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !relative z-[2] focus:z-[5] hover:!transform-none hover:!translate-none border-0"
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
                                style={{
                                  position: "absolute",
                                  left: "-5000px",
                                }}
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
              {/* /.container */}
            </footer>
          </div>
          {/* /.container */}
          {/* /.container */}
        </section>
        <CodeSnippet
          code={` &lt;section id&#x3D;&quot;snippet-5&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
          &lt;div className&#x3D;&quot;container-fluid pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20 xxl:!px-10&quot;&gt;
            &lt;footer className&#x3D;&quot;bg-[rgba(52,63,82)] opacity-100 !text-[#cacaca]&quot;&gt;
              &lt;div className&#x3D;&quot;container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20&quot;&gt;
                &lt;div className&#x3D;&quot;xl:!flex lg:!flex flex-row xl:!items-center lg:!items-center&quot;&gt;
                  &lt;h3 className&#x3D;&quot;!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-6 xl:!mb-0 lg:!mb-0 lg:!pr-40 xl:!pr-60 xxl:!pr-[22.5rem] !text-white&quot;&gt;
                    Join our community by using our services and grow your
                    business.
                  &lt;&#x2F;h3&gt;
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mb-0 whitespace-nowrap&quot;
                  &gt;
                    Try It For Free
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;div *&#x2F;}
                &lt;hr className&#x3D;&quot;!mt-[3rem] !mb-[3.5rem] opacity-100 m-[4.5rem_0] border-t border-solid border-[rgba(164,174,198,.2)]&quot; &#x2F;&gt;
                &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0&quot;&gt;
                  &lt;div className&#x3D;&quot;md:w-4&#x2F;12 xl:w-3&#x2F;12 lg:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]&quot;&gt;
                    &lt;div className&#x3D;&quot;widget !text-[#cacaca]&quot;&gt;
                      &lt;img
                        className&#x3D;&quot;!mb-4&quot;
                        srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;logo-light@2x.png 2x&quot;
                        alt&#x3D;&quot;image&quot;
                        width&#x3D;&quot;134&quot;
                        height&#x3D;&quot;26&quot;
                        src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;logo-light.png&quot;
                      &#x2F;&gt;
                      &lt;p className&#x3D;&quot;!mb-4&quot;&gt;
                        © 2024 Sandbox.
                        &lt;br className&#x3D;&quot;hidden xl:block lg:block !text-[#cacaca]&quot; &#x2F;&gt;
                        All rights reserved.
                      &lt;&#x2F;p&gt;
                      &lt;nav className&#x3D;&quot;nav social social-white&quot;&gt;
                        &lt;a
                          className&#x3D;&quot;!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]&quot;
                          href&#x3D;&quot;#&quot;
                        &gt;
                          &lt;i className&#x3D;&quot;uil uil-twitter before:content-[&#39;\ed59&#39;] !text-white text-[1rem]&quot; &#x2F;&gt;
                        &lt;&#x2F;a&gt;
                        &lt;a
                          className&#x3D;&quot;!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]&quot;
                          href&#x3D;&quot;#&quot;
                        &gt;
                          &lt;i className&#x3D;&quot;uil uil-facebook-f before:content-[&#39;\eae2&#39;] !text-white text-[1rem]&quot; &#x2F;&gt;
                        &lt;&#x2F;a&gt;
                        &lt;a
                          className&#x3D;&quot;!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]&quot;
                          href&#x3D;&quot;#&quot;
                        &gt;
                          &lt;i className&#x3D;&quot;uil uil-dribbble before:content-[&#39;\eaa2&#39;] !text-white text-[1rem]&quot; &#x2F;&gt;
                        &lt;&#x2F;a&gt;
                        &lt;a
                          className&#x3D;&quot;!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]&quot;
                          href&#x3D;&quot;#&quot;
                        &gt;
                          &lt;i className&#x3D;&quot;uil uil-instagram before:content-[&#39;\eb9c&#39;] !text-white text-[1rem]&quot; &#x2F;&gt;
                        &lt;&#x2F;a&gt;
                        &lt;a
                          className&#x3D;&quot;!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]&quot;
                          href&#x3D;&quot;#&quot;
                        &gt;
                          &lt;i className&#x3D;&quot;uil uil-youtube before:content-[&#39;\edb5&#39;] !text-white text-[1rem]&quot; &#x2F;&gt;
                        &lt;&#x2F;a&gt;
                      &lt;&#x2F;nav&gt;
                      {&#x2F;* &#x2F;.social *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.widget *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;md:w-4&#x2F;12 xl:w-3&#x2F;12 lg:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]&quot;&gt;
                    &lt;div className&#x3D;&quot;widget !text-[#cacaca]&quot;&gt;
                      &lt;h4 className&#x3D;&quot;widget-title !text-white !mb-3&quot;&gt;
                        Get in Touch
                      &lt;&#x2F;h4&gt;
                      &lt;address className&#x3D;&quot;xl:!pr-20 xxl:!pr-28 not-italic !leading-[inherit] block !mb-4&quot;&gt;
                        Moonshine St. 14&#x2F;05 Light City, London, United Kingdom
                      &lt;&#x2F;address&gt;
                      &lt;a
                        className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                        href&#x3D;&quot;mailto:first.last@email.com&quot;
                      &gt;
                        info@email.com
                      &lt;&#x2F;a&gt;
                      &lt;br &#x2F;&gt;
                      00 (123) 456 78 90
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.widget *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;md:w-4&#x2F;12 xl:w-3&#x2F;12 lg:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]&quot;&gt;
                    &lt;div className&#x3D;&quot;widget !text-[#cacaca]&quot;&gt;
                      &lt;h4 className&#x3D;&quot;widget-title !text-white !mb-3&quot;&gt;
                        Learn More
                      &lt;&#x2F;h4&gt;
                      &lt;ul className&#x3D;&quot;pl-0 list-none !mb-0&quot;&gt;
                        &lt;li&gt;
                          &lt;a
                            className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                            href&#x3D;&quot;#&quot;
                          &gt;
                            About Us
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;li&gt;
                        &lt;li className&#x3D;&quot;!mt-[0.35rem]&quot;&gt;
                          &lt;a
                            className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                            href&#x3D;&quot;#&quot;
                          &gt;
                            Our Story
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;li&gt;
                        &lt;li className&#x3D;&quot;!mt-[0.35rem]&quot;&gt;
                          &lt;a
                            className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                            href&#x3D;&quot;#&quot;
                          &gt;
                            Projects
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;li&gt;
                        &lt;li className&#x3D;&quot;!mt-[0.35rem]&quot;&gt;
                          &lt;a
                            className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                            href&#x3D;&quot;#&quot;
                          &gt;
                            Terms of Use
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;li&gt;
                        &lt;li className&#x3D;&quot;!mt-[0.35rem]&quot;&gt;
                          &lt;a
                            className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                            href&#x3D;&quot;#&quot;
                          &gt;
                            Privacy Policy
                          &lt;&#x2F;a&gt;
                        &lt;&#x2F;li&gt;
                      &lt;&#x2F;ul&gt;
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.widget *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;column *&#x2F;}
                  &lt;div className&#x3D;&quot;md:w-full xl:w-3&#x2F;12 lg:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]&quot;&gt;
                    &lt;div className&#x3D;&quot;widget !text-[#cacaca]&quot;&gt;
                      &lt;h4 className&#x3D;&quot;widget-title !text-white !mb-3&quot;&gt;
                        Our Newsletter
                      &lt;&#x2F;h4&gt;
                      &lt;p className&#x3D;&quot;!mb-5&quot;&gt;
                        Subscribe to our newsletter to get our news &amp;amp; deals
                        delivered to you.
                      &lt;&#x2F;p&gt;
                      &lt;div className&#x3D;&quot;newsletter-wrapper&quot;&gt;
                        {&#x2F;* Begin Mailchimp Signup Form *&#x2F;}
                        &lt;div id&#x3D;&quot;mc_embed_signup2&quot;&gt;
                          &lt;form
                            action&#x3D;&quot;https:&#x2F;&#x2F;elemisfreebies.us20.list-manage.com&#x2F;subscribe&#x2F;post?u&#x3D;aa4947f70a475ce162057838d&amp;id&#x3D;b49ef47a9a&quot;
                            method&#x3D;&quot;post&quot;
                            id&#x3D;&quot;mc-embedded-subscribe-form2&quot;
                            name&#x3D;&quot;mc-embedded-subscribe-form&quot;
                            className&#x3D;&quot;validate dark-fields&quot;
                            target&#x3D;&quot;_blank&quot;
                            noValidate&#x3D;&quot;&quot;
                          &gt;
                            &lt;div id&#x3D;&quot;mc_embed_signup_scroll2&quot;&gt;
                              &lt;div className&#x3D;&quot;!text-left input-group form-floating !relative flex flex-wrap items-stretch w-full&quot;&gt;
                                &lt;input
                                  type&#x3D;&quot;email&quot;
                                  defaultValue&#x3D;&quot;&quot;
                                  name&#x3D;&quot;EMAIL&quot;
                                  className&#x3D;&quot;required email form-control block w-full text-[12px] font-medium !leading-[1.7] appearance-none bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] px-4 py-[0.6rem] rounded-[0.4rem] motion-reduce:transition-none focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] disabled:bg-[#aab0bc] disabled:opacity-100 file:!mt-[-0.6rem] file:mr-[-1rem] file:!mb-[-0.6rem] file:ml-[-1rem] file:!text-[#60697b] file:bg-[#fefefe] file:pointer-events-none file:transition-all file:duration-[0.2s] file:ease-in-out file:px-4 file:py-[0.6rem] file:rounded-none motion-reduce:file:transition-none placeholder:!text-[#959ca9] placeholder:opacity-100 border border-solid !border-[rgba(255,255,255,0.1)] !text-[#cacaca] bg-[rgba(255,255,255,.03)] focus-visible:!border-[rgba(63,120,224,0.5)]&quot;
                                  placeholder&#x3D;&quot;&quot;
                                  id&#x3D;&quot;mce-EMAIL2&quot;
                                &#x2F;&gt;
                                &lt;label
                                  className&#x3D;&quot;!ml-[0.05rem] !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none origin-[0_0] px-4 py-[0.6rem] left-0 top-0&quot;
                                  htmlFor&#x3D;&quot;mce-EMAIL2&quot;
                                &gt;
                                  Email Address
                                &lt;&#x2F;label&gt;
                                &lt;input
                                  type&#x3D;&quot;submit&quot;
                                  defaultValue&#x3D;&quot;Join&quot;
                                  name&#x3D;&quot;subscribe&quot;
                                  id&#x3D;&quot;mc-embedded-subscribe2&quot;
                                  className&#x3D;&quot;btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !relative z-[2] focus:z-[5] hover:!transform-none hover:!translate-none border-0&quot;
                                &#x2F;&gt;
                              &lt;&#x2F;div&gt;
                              &lt;div id&#x3D;&quot;mce-responses2&quot; className&#x3D;&quot;clear&quot;&gt;
                                &lt;div
                                  className&#x3D;&quot;response&quot;
                                  id&#x3D;&quot;mce-error-response2&quot;
                                  style&#x3D;{{ display: &quot;none&quot; }}
                                &#x2F;&gt;
                                &lt;div
                                  className&#x3D;&quot;response&quot;
                                  id&#x3D;&quot;mce-success-response2&quot;
                                  style&#x3D;{{ display: &quot;none&quot; }}
                                &#x2F;&gt;
                              &lt;&#x2F;div&gt;
                              {&#x2F;* real people should not fill this in and expect good things - do not remove this or risk form bot signups*&#x2F;}
                              &lt;div
                                style&#x3D;{{
                                  position: &quot;absolute&quot;,
                                  left: &quot;-5000px&quot;,
                                }}
                                aria-hidden&#x3D;&quot;true&quot;
                              &gt;
                                &lt;input
                                  type&#x3D;&quot;text&quot;
                                  name&#x3D;&quot;b_ddc180777a163e0f9f66ee014_4b1bcfa0bc&quot;
                                  tabIndex&#x3D;{-1}
                                  defaultValue&#x3D;&quot;&quot;
                                &#x2F;&gt;
                              &lt;&#x2F;div&gt;
                              &lt;div className&#x3D;&quot;clear&quot; &#x2F;&gt;
                            &lt;&#x2F;div&gt;
                          &lt;&#x2F;form&gt;
                        &lt;&#x2F;div&gt;
                        {&#x2F;*End mc_embed_signup*&#x2F;}
                      &lt;&#x2F;div&gt;
                      {&#x2F;* &#x2F;.newsletter-wrapper *&#x2F;}
                    &lt;&#x2F;div&gt;
                    {&#x2F;* &#x2F;.widget *&#x2F;}
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;column *&#x2F;}
                &lt;&#x2F;div&gt;
                {&#x2F;*&#x2F;.row *&#x2F;}
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.container *&#x2F;}
            &lt;&#x2F;footer&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.container *&#x2F;}
          {&#x2F;* &#x2F;.container *&#x2F;}
        &lt;&#x2F;section&gt;`}
        />
        {/* /section */}
        <section id="snippet-6" className="wrapper !bg-[#ffffff] ">
          <div className="container-fluid pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20 xxl:!px-10">
            <footer>
              <div className="container pb-7">
                <div className="xl:!flex lg:!flex md:!flex items-center justify-between">
                  <p className="!mb-2 xl:!mb-0 lg:!mb-0">
                    © {new Date().getFullYear()} Sandbox. All rights reserved.
                  </p>
                  <nav className="nav social social-muted !mb-0 xl:!text-right lg:!text-right md:!text-right">
                    <a
                      className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                      href="#"
                    >
                      <i className="uil uil-twitter before:content-['\ed59'] text-[1rem] !text-[#5daed5]" />
                    </a>
                    <a
                      className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                      href="#"
                    >
                      <i className="uil uil-facebook-f before:content-['\eae2'] text-[1rem] !text-[#4470cf]" />
                    </a>
                    <a
                      className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                      href="#"
                    >
                      <i className="uil uil-dribbble before:content-['\eaa2'] text-[1rem] !text-[#e94d88]" />
                    </a>
                    <a
                      className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                      href="#"
                    >
                      <i className="uil uil-instagram before:content-['\eb9c'] text-[1rem] !text-[#d53581]" />
                    </a>
                    <a
                      className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                      href="#"
                    >
                      <i className="uil uil-youtube before:content-['\edb5'] text-[1rem] !text-[#c8312b]" />
                    </a>
                  </nav>
                  {/* /.social */}
                </div>
              </div>
              {/* /.container */}
            </footer>
          </div>
          {/* /.container */}
          {/* /.container */}
        </section>
        <CodeSnippet
          code={`  &lt;section id&#x3D;&quot;snippet-6&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
          &lt;div className&#x3D;&quot;container-fluid pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20 xxl:!px-10&quot;&gt;
            &lt;footer&gt;
              &lt;div className&#x3D;&quot;container pb-7&quot;&gt;
                &lt;div className&#x3D;&quot;xl:!flex lg:!flex md:!flex items-center justify-between&quot;&gt;
                  &lt;p className&#x3D;&quot;!mb-2 xl:!mb-0 lg:!mb-0&quot;&gt;
                    © 2024 Sandbox. All rights reserved.
                  &lt;&#x2F;p&gt;
                  &lt;nav className&#x3D;&quot;nav social social-muted !mb-0 xl:!text-right lg:!text-right md:!text-right&quot;&gt;
                    &lt;a
                      className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                      href&#x3D;&quot;#&quot;
                    &gt;
                      &lt;i className&#x3D;&quot;uil uil-twitter before:content-[&#39;\ed59&#39;] text-[1rem] !text-[#5daed5]&quot; &#x2F;&gt;
                    &lt;&#x2F;a&gt;
                    &lt;a
                      className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                      href&#x3D;&quot;#&quot;
                    &gt;
                      &lt;i className&#x3D;&quot;uil uil-facebook-f before:content-[&#39;\eae2&#39;] text-[1rem] !text-[#4470cf]&quot; &#x2F;&gt;
                    &lt;&#x2F;a&gt;
                    &lt;a
                      className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                      href&#x3D;&quot;#&quot;
                    &gt;
                      &lt;i className&#x3D;&quot;uil uil-dribbble before:content-[&#39;\eaa2&#39;] text-[1rem] !text-[#e94d88]&quot; &#x2F;&gt;
                    &lt;&#x2F;a&gt;
                    &lt;a
                      className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                      href&#x3D;&quot;#&quot;
                    &gt;
                      &lt;i className&#x3D;&quot;uil uil-instagram before:content-[&#39;\eb9c&#39;] text-[1rem] !text-[#d53581]&quot; &#x2F;&gt;
                    &lt;&#x2F;a&gt;
                    &lt;a
                      className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                      href&#x3D;&quot;#&quot;
                    &gt;
                      &lt;i className&#x3D;&quot;uil uil-youtube before:content-[&#39;\edb5&#39;] text-[1rem] !text-[#c8312b]&quot; &#x2F;&gt;
                    &lt;&#x2F;a&gt;
                  &lt;&#x2F;nav&gt;
                  {&#x2F;* &#x2F;.social *&#x2F;}
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              {&#x2F;* &#x2F;.container *&#x2F;}
            &lt;&#x2F;footer&gt;
          &lt;&#x2F;div&gt;
          {&#x2F;* &#x2F;.container *&#x2F;}
          {&#x2F;* &#x2F;.container *&#x2F;}
        &lt;&#x2F;section&gt;`}
        />
        {/* /section */}
        <section id="snippet-7" className="wrapper !bg-[#ffffff] ">
          <div className="container-fluid pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20 xxl:!px-10">
            <footer className="bg-[#21262c] opacity-100 !text-[#cacaca]">
              <div className="container py-16 xl:!py-20 lg:!py-20 md:!py-20">
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0">
                  <div className="md:w-4/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
                    <h4 className="widget-title !text-white !mb-3">
                      Popular Posts
                    </h4>
                    <ul className="m-0 p-0 after:content-[''] after:block after:h-0 after:clear-both after:invisible">
                      {/* import { posts4 } from "@/data/blogs"; */}
                      {posts4.map((post, index) => (
                        <li
                          key={post.id}
                          className={`clear-both block overflow-hidden ${
                            index !== 0 ? "!mt-5" : ""
                          }`}
                        >
                          <figure className="float-left !w-[3.5rem] !h-[3.5rem] rounded-[0.4rem]">
                            <Link to={`/blog-post`}>
                              <img
                                className="rounded-[0.4rem]"
                                alt="image"
                                src={post.image}
                                width={140}
                                height={140}
                              />
                            </Link>
                          </figure>
                          <div className="!relative !ml-[4.25rem] !mb-0">
                            <h6 className="!mb-2">
                              <Link
                                className="!text-white hover:!text-[#d16b86]"
                                to={`/blog-post`}
                              >
                                {post.title}
                              </Link>
                            </h6>
                            <ul className="!text-[0.75rem] !text-[#cacaca] m-0 p-0 list-none">
                              <li className="post-date inline-block">
                                <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                                <span>{post.date}</span>
                              </li>
                            </ul>
                          </div>
                        </li>
                      ))}
                    </ul>
                    {/* /.image-list */}
                  </div>
                  {/* /column */}
                  <div className="md:w-4/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
                    <div className="widget">
                      <h4 className="widget-title !text-white !mb-3">Tags</h4>
                      <ul className="pl-0 list-none tag-list">
                        <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
                          <a
                            href="#"
                            className="btn btn-soft-ash !text-white btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
                          >
                            Still Life
                          </a>
                        </li>
                        <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
                          <a
                            href="#"
                            className="btn btn-soft-ash !text-white btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
                          >
                            Urban
                          </a>
                        </li>
                        <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
                          <a
                            href="#"
                            className="btn btn-soft-ash !text-white btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
                          >
                            Nature
                          </a>
                        </li>
                        <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
                          <a
                            href="#"
                            className="btn btn-soft-ash !text-white btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
                          >
                            Landscape
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* /.widget */}
                    <div className="widget">
                      <h4 className="widget-title !text-white !mb-3">
                        Categories
                      </h4>
                      <ul className="pl-0 list-none text-inherit bullet-white">
                        <li className="relative !pl-4 before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:text-white before:font-SansSerif">
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Lifestyle (21)
                          </a>
                        </li>
                        <li className="!mt-[0.35rem] relative !pl-4 before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:text-white before:font-SansSerif">
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Photography (19)
                          </a>
                        </li>
                        <li className="!mt-[0.35rem] relative !pl-4 before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:text-white before:font-SansSerif">
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Journal (16)
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* /.widget */}
                  </div>
                  {/* /column */}
                  <div className="md:w-4/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
                    <div className="widget">
                      <h4 className="widget-title !text-white !mb-3">
                        Get in Touch
                      </h4>
                      <address className="xl:!pr-20 xxl:!pr-28 not-italic !leading-[inherit] block !mb-4">
                        Moonshine St. 14/05 Light City, London, United Kingdom
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
                    <div className="widget !mt-[1rem]">
                      <h4 className="widget-title !text-white !mb-3">
                        Elsewhere
                      </h4>
                      <nav className="nav social social-white">
                        <a
                          className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                          href="#"
                        >
                          <i className="uil uil-twitter before:content-['\ed59'] text-[1rem] !text-[#5daed5]" />
                        </a>
                        <a
                          className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                          href="#"
                        >
                          <i className="uil uil-facebook-f before:content-['\eae2'] text-[1rem] !text-[#4470cf]" />
                        </a>
                        <a
                          className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                          href="#"
                        >
                          <i className="uil uil-dribbble before:content-['\eaa2'] text-[1rem] !text-[#e94d88]" />
                        </a>
                        <a
                          className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                          href="#"
                        >
                          <i className="uil uil-instagram before:content-['\eb9c'] text-[1rem] !text-[#d53581]" />
                        </a>
                        <a
                          className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                          href="#"
                        >
                          <i className="uil uil-youtube before:content-['\edb5'] text-[1rem] !text-[#c8312b]" />
                        </a>
                      </nav>
                      {/* /.social */}
                    </div>
                    {/* /.widget */}
                  </div>
                  {/* /column */}
                  <div className="md:w-4/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
                    <div className="widget">
                      <h4 className="widget-title !text-white !mb-3">
                        Learn More
                      </h4>
                      <ul className="pl-0 list-none text-inherit !mb-0">
                        <li>
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            About Us
                          </a>
                        </li>
                        <li className="!mt-[0.35rem]">
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Our Story
                          </a>
                        </li>
                        <li className="!mt-[0.35rem]">
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Projects
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* /.widget */}
                    <div className="widget !mt-[1rem]">
                      <h4 className="widget-title !text-white !mb-3">
                        Need Help?
                      </h4>
                      <ul className="pl-0 list-none text-inherit !mb-0">
                        <li>
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Support
                          </a>
                        </li>
                        <li className="!mt-[0.35rem]">
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Get Started
                          </a>
                        </li>
                        <li className="!mt-[0.35rem]">
                          <a
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="#"
                          >
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* /.widget */}
                  </div>
                  {/* /column */}
                </div>
                {/*/.row */}
                <p className="!mt-6 !mb-0 !text-center">
                  © {new Date().getFullYear()} Sandbox. All rights reserved.
                </p>
              </div>
              {/* /.container */}
            </footer>
          </div>
          {/* /.container */}
        </section>
        <CodeSnippet
          code={`
&lt;section id&#x3D;&quot;snippet-7&quot; className&#x3D;&quot;wrapper !bg-[#ffffff] &quot;&gt;
&lt;div className&#x3D;&quot;container-fluid pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20 xxl:!px-10&quot;&gt;
  &lt;footer className&#x3D;&quot;bg-[#21262c] opacity-100 !text-[#cacaca]&quot;&gt;
    &lt;div className&#x3D;&quot;container py-16 xl:!py-20 lg:!py-20 md:!py-20&quot;&gt;
      &lt;div className&#x3D;&quot;flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0&quot;&gt;
        &lt;div className&#x3D;&quot;md:w-4&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]&quot;&gt;
          &lt;h4 className&#x3D;&quot;widget-title !text-white !mb-3&quot;&gt;
            Popular Posts
          &lt;&#x2F;h4&gt;
          &lt;ul className&#x3D;&quot;m-0 p-0 after:content-[&#39;&#39;] after:block after:h-0 after:clear-both after:invisible&quot;&gt;
            &lbrace;&#x2F;* import &lbrace; posts4 &rbrace; from &quot;@&#x2F;data&#x2F;blogs&quot;; *&#x2F;&rbrace;
            &lbrace;posts4.map((post, index) &#x3D;&gt; (
              &lt;li
                key&#x3D;&lbrace;post.id&rbrace;
                className&#x3D;&lbrace;&#x60;clear-both block overflow-hidden $&lbrace;
                  index !&#x3D;&#x3D; 0 ? &quot;!mt-5&quot; : &quot;&quot;
                &rbrace;&#x60;&rbrace;
              &gt;
                &lt;figure className&#x3D;&quot;float-left !w-[3.5rem] !h-[3.5rem] rounded-[0.4rem]&quot;&gt;
                  &lt;Link href&#x3D;&lbrace;&#x60;&#x2F;blog-post&#x60;&rbrace;&gt;
                    &lt;img
                      className&#x3D;&quot;rounded-[0.4rem]&quot;
                      alt&#x3D;&quot;image&quot;
                      src&#x3D;&lbrace;post.image&rbrace;
                      width&#x3D;&lbrace;140&rbrace;
                      height&#x3D;&lbrace;140&rbrace;
                    &#x2F;&gt;
                  &lt;&#x2F;Link&gt;
                &lt;&#x2F;figure&gt;
                &lt;div className&#x3D;&quot;!relative !ml-[4.25rem] !mb-0&quot;&gt;
                  &lt;h6 className&#x3D;&quot;!mb-2&quot;&gt;
                    &lt;Link
                      className&#x3D;&quot;!text-white hover:!text-[#d16b86]&quot;
                      href&#x3D;&lbrace;&#x60;&#x2F;blog-post&#x60;&rbrace;
                    &gt;
                      &lbrace;post.title&rbrace;
                    &lt;&#x2F;Link&gt;
                  &lt;&#x2F;h6&gt;
                  &lt;ul className&#x3D;&quot;!text-[0.75rem] !text-[#cacaca] m-0 p-0 list-none&quot;&gt;
                    &lt;li className&#x3D;&quot;post-date inline-block&quot;&gt;
                      &lt;i className&#x3D;&quot;uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-[&#39;\e9ba&#39;]&quot; &#x2F;&gt;
                      &lt;span&gt;&lbrace;post.date&rbrace;&lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                  &lt;&#x2F;ul&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;li&gt;
            ))&rbrace;
          &lt;&#x2F;ul&gt;
          &lbrace;&#x2F;* &#x2F;.image-list *&#x2F;&rbrace;
        &lt;&#x2F;div&gt;
        &lbrace;&#x2F;* &#x2F;column *&#x2F;&rbrace;
        &lt;div className&#x3D;&quot;md:w-4&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]&quot;&gt;
          &lt;div className&#x3D;&quot;widget&quot;&gt;
            &lt;h4 className&#x3D;&quot;widget-title !text-white !mb-3&quot;&gt;Tags&lt;&#x2F;h4&gt;
            &lt;ul className&#x3D;&quot;pl-0 list-none tag-list&quot;&gt;
              &lt;li className&#x3D;&quot;!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block&quot;&gt;
                &lt;a
                  href&#x3D;&quot;#&quot;
                  className&#x3D;&quot;btn btn-soft-ash !text-white btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-[&#39;#&#39;] before:font-normal before:!pr-[0.2rem]&quot;
                &gt;
                  Still Life
                &lt;&#x2F;a&gt;
              &lt;&#x2F;li&gt;
              &lt;li className&#x3D;&quot;!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block&quot;&gt;
                &lt;a
                  href&#x3D;&quot;#&quot;
                  className&#x3D;&quot;btn btn-soft-ash !text-white btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-[&#39;#&#39;] before:font-normal before:!pr-[0.2rem]&quot;
                &gt;
                  Urban
                &lt;&#x2F;a&gt;
              &lt;&#x2F;li&gt;
              &lt;li className&#x3D;&quot;!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block&quot;&gt;
                &lt;a
                  href&#x3D;&quot;#&quot;
                  className&#x3D;&quot;btn btn-soft-ash !text-white btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-[&#39;#&#39;] before:font-normal before:!pr-[0.2rem]&quot;
                &gt;
                  Nature
                &lt;&#x2F;a&gt;
              &lt;&#x2F;li&gt;
              &lt;li className&#x3D;&quot;!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block&quot;&gt;
                &lt;a
                  href&#x3D;&quot;#&quot;
                  className&#x3D;&quot;btn btn-soft-ash !text-white btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-[&#39;#&#39;] before:font-normal before:!pr-[0.2rem]&quot;
                &gt;
                  Landscape
                &lt;&#x2F;a&gt;
              &lt;&#x2F;li&gt;
            &lt;&#x2F;ul&gt;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;* &#x2F;.widget *&#x2F;&rbrace;
          &lt;div className&#x3D;&quot;widget&quot;&gt;
            &lt;h4 className&#x3D;&quot;widget-title !text-white !mb-3&quot;&gt;
              Categories
            &lt;&#x2F;h4&gt;
            &lt;ul className&#x3D;&quot;pl-0 list-none text-inherit bullet-white&quot;&gt;
              &lt;li className&#x3D;&quot;relative !pl-4 before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-[&#39;\u2022&#39;] before:left-0 before:text-white before:font-SansSerif&quot;&gt;
                &lt;a
                  className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                  href&#x3D;&quot;#&quot;
                &gt;
                  Lifestyle (21)
                &lt;&#x2F;a&gt;
              &lt;&#x2F;li&gt;
              &lt;li className&#x3D;&quot;!mt-[0.35rem] relative !pl-4 before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-[&#39;\u2022&#39;] before:left-0 before:text-white before:font-SansSerif&quot;&gt;
                &lt;a
                  className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                  href&#x3D;&quot;#&quot;
                &gt;
                  Photography (19)
                &lt;&#x2F;a&gt;
              &lt;&#x2F;li&gt;
              &lt;li className&#x3D;&quot;!mt-[0.35rem] relative !pl-4 before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-[&#39;\u2022&#39;] before:left-0 before:text-white before:font-SansSerif&quot;&gt;
                &lt;a
                  className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                  href&#x3D;&quot;#&quot;
                &gt;
                  Journal (16)
                &lt;&#x2F;a&gt;
              &lt;&#x2F;li&gt;
            &lt;&#x2F;ul&gt;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;* &#x2F;.widget *&#x2F;&rbrace;
        &lt;&#x2F;div&gt;
        &lbrace;&#x2F;* &#x2F;column *&#x2F;&rbrace;
        &lt;div className&#x3D;&quot;md:w-4&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]&quot;&gt;
          &lt;div className&#x3D;&quot;widget&quot;&gt;
            &lt;h4 className&#x3D;&quot;widget-title !text-white !mb-3&quot;&gt;
              Get in Touch
            &lt;&#x2F;h4&gt;
            &lt;address className&#x3D;&quot;xl:!pr-20 xxl:!pr-28 not-italic !leading-[inherit] block !mb-4&quot;&gt;
              Moonshine St. 14&#x2F;05 Light City, London, United Kingdom
            &lt;&#x2F;address&gt;
            &lt;a
              className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
              href&#x3D;&quot;mailto:first.last@email.com&quot;
            &gt;
              info@email.com
            &lt;&#x2F;a&gt;
            &lt;br &#x2F;&gt;
            00 (123) 456 78 90
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;* &#x2F;.widget *&#x2F;&rbrace;
          &lt;div className&#x3D;&quot;widget !mt-[1rem]&quot;&gt;
            &lt;h4 className&#x3D;&quot;widget-title !text-white !mb-3&quot;&gt;
              Elsewhere
            &lt;&#x2F;h4&gt;
            &lt;nav className&#x3D;&quot;nav social social-white&quot;&gt;
              &lt;a
                className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                href&#x3D;&quot;#&quot;
              &gt;
                &lt;i className&#x3D;&quot;uil uil-twitter before:content-[&#39;\ed59&#39;] text-[1rem] !text-[#5daed5]&quot; &#x2F;&gt;
              &lt;&#x2F;a&gt;
              &lt;a
                className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                href&#x3D;&quot;#&quot;
              &gt;
                &lt;i className&#x3D;&quot;uil uil-facebook-f before:content-[&#39;\eae2&#39;] text-[1rem] !text-[#4470cf]&quot; &#x2F;&gt;
              &lt;&#x2F;a&gt;
              &lt;a
                className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                href&#x3D;&quot;#&quot;
              &gt;
                &lt;i className&#x3D;&quot;uil uil-dribbble before:content-[&#39;\eaa2&#39;] text-[1rem] !text-[#e94d88]&quot; &#x2F;&gt;
              &lt;&#x2F;a&gt;
              &lt;a
                className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                href&#x3D;&quot;#&quot;
              &gt;
                &lt;i className&#x3D;&quot;uil uil-instagram before:content-[&#39;\eb9c&#39;] text-[1rem] !text-[#d53581]&quot; &#x2F;&gt;
              &lt;&#x2F;a&gt;
              &lt;a
                className&#x3D;&quot;m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]&quot;
                href&#x3D;&quot;#&quot;
              &gt;
                &lt;i className&#x3D;&quot;uil uil-youtube before:content-[&#39;\edb5&#39;] text-[1rem] !text-[#c8312b]&quot; &#x2F;&gt;
              &lt;&#x2F;a&gt;
            &lt;&#x2F;nav&gt;
            &lbrace;&#x2F;* &#x2F;.social *&#x2F;&rbrace;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;* &#x2F;.widget *&#x2F;&rbrace;
        &lt;&#x2F;div&gt;
        &lbrace;&#x2F;* &#x2F;column *&#x2F;&rbrace;
        &lt;div className&#x3D;&quot;md:w-4&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]&quot;&gt;
          &lt;div className&#x3D;&quot;widget&quot;&gt;
            &lt;h4 className&#x3D;&quot;widget-title !text-white !mb-3&quot;&gt;
              Learn More
            &lt;&#x2F;h4&gt;
            &lt;ul className&#x3D;&quot;pl-0 list-none text-inherit !mb-0&quot;&gt;
              &lt;li&gt;
                &lt;a
                  className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                  href&#x3D;&quot;#&quot;
                &gt;
                  About Us
                &lt;&#x2F;a&gt;
              &lt;&#x2F;li&gt;
              &lt;li className&#x3D;&quot;!mt-[0.35rem]&quot;&gt;
                &lt;a
                  className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                  href&#x3D;&quot;#&quot;
                &gt;
                  Our Story
                &lt;&#x2F;a&gt;
              &lt;&#x2F;li&gt;
              &lt;li className&#x3D;&quot;!mt-[0.35rem]&quot;&gt;
                &lt;a
                  className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                  href&#x3D;&quot;#&quot;
                &gt;
                  Projects
                &lt;&#x2F;a&gt;
              &lt;&#x2F;li&gt;
            &lt;&#x2F;ul&gt;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;* &#x2F;.widget *&#x2F;&rbrace;
          &lt;div className&#x3D;&quot;widget !mt-[1rem]&quot;&gt;
            &lt;h4 className&#x3D;&quot;widget-title !text-white !mb-3&quot;&gt;
              Need Help?
            &lt;&#x2F;h4&gt;
            &lt;ul className&#x3D;&quot;pl-0 list-none text-inherit !mb-0&quot;&gt;
              &lt;li&gt;
                &lt;a
                  className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                  href&#x3D;&quot;#&quot;
                &gt;
                  Support
                &lt;&#x2F;a&gt;
              &lt;&#x2F;li&gt;
              &lt;li className&#x3D;&quot;!mt-[0.35rem]&quot;&gt;
                &lt;a
                  className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                  href&#x3D;&quot;#&quot;
                &gt;
                  Get Started
                &lt;&#x2F;a&gt;
              &lt;&#x2F;li&gt;
              &lt;li className&#x3D;&quot;!mt-[0.35rem]&quot;&gt;
                &lt;a
                  className&#x3D;&quot;!text-[#cacaca] hover:!text-[#3f78e0]&quot;
                  href&#x3D;&quot;#&quot;
                &gt;
                  Contact Us
                &lt;&#x2F;a&gt;
              &lt;&#x2F;li&gt;
            &lt;&#x2F;ul&gt;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;* &#x2F;.widget *&#x2F;&rbrace;
        &lt;&#x2F;div&gt;
        &lbrace;&#x2F;* &#x2F;column *&#x2F;&rbrace;
      &lt;&#x2F;div&gt;
      &lbrace;&#x2F;*&#x2F;.row *&#x2F;&rbrace;
      &lt;p className&#x3D;&quot;!mt-6 !mb-0 !text-center&quot;&gt;
        © 2024 Sandbox. All rights reserved.
      &lt;&#x2F;p&gt;
    &lt;&#x2F;div&gt;
    &lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;
  &lt;&#x2F;footer&gt;
&lt;&#x2F;div&gt;
&lbrace;&#x2F;* &#x2F;.container *&#x2F;&rbrace;
&lt;&#x2F;section&gt;            
            `}
        />
        {/* /section */}
      </>
    </>
  );
}
