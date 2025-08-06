import React from "react";
import DocsSidebar from "./DocsSidebar";

import { Link } from "react-router-dom";
import CodeSnippetContainer from "../common/CodeSnippetContainer";
export default function Modal() {
  return (
    <div className="container">
      <div className="flex flex-wrap mx-[-15px]">
        <aside className="xl:w-2/12 flex-[0_0_auto] !px-[15px] max-w-full sidebar doc-sidebar md:!mt-0 py-24 hidden  xl:block">
          <DocsSidebar />
        </aside>
        {/* /column */}
        <aside className="xl:w-2/12 flex-[0_0_auto] !px-[15px] max-w-full xl:!order-3 sidebar !sticky h-full top-0 md:!mt-0 py-24 hidden  xl:block">
          <div className="widget">
            <h6 className="widget-title text-[0.85rem] !mb-2 xl:!pl-5">
              On this page
            </h6>
            <nav className="xl:!pl-5" id="sidebar-nav">
              <ul className="list-unstyled !pl-0 list-none text-[0.7rem] leading-normal text-inherit">
                <li>
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]  active"
                    href="#snippet-1"
                  >
                    Cookie
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-2"
                  >
                    Subscription
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-3"
                  >
                    Sign In
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-4"
                  >
                    Sign Up
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-5"
                  >
                    Popup
                  </a>
                </li>
              </ul>
            </nav>
            {/* /nav */}
          </div>
          {/* /.widget */}
        </aside>
        {/* /column */}
        <div className="xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!order-2">
          <section id="snippet-1" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Cookie</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <a
                  href="#"
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] mx-1 !mb-2 xl:!mb-0 lg:!mb-0 md:!mb-0"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-01"
                >
                  Cookie
                </a>
                <div
                  className="modal fade modal-bottom-center !m-0 !p-0"
                  id="modal-01"
                  tabIndex={-1}
                >
                  <div className="modal-dialog modal-xl lg:!w-[800px] xl:!w-[1140px] lg:!max-w-[800px] xl:!max-w-[1140px]">
                    <div className="modal-content">
                      <div className="relative flex-auto p-6">
                        <div className="flex flex-wrap mx-[-15px]">
                          <div className="md:w-full lg:w-8/12 xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mb-4 xl:!mb-0 lg:!mb-0 my-auto items-center">
                            <h4 className="!mb-2">Cookie Policy</h4>
                            <p className="!mb-0">
                              We use cookies to personalize content to make our
                              site easier for you to use.
                            </p>
                          </div>
                          {/*/column */}
                          <div className="md:w-5/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full  xl:!text-right lg:!text-right my-auto">
                            <a
                              href="#"
                              className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem]"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            >
                              I Understand
                            </a>
                          </div>
                          {/*/column */}
                        </div>
                        {/*/.row */}
                      </div>
                      {/*/.modal-body */}
                    </div>
                    {/*/.modal-content */}
                  </div>
                  {/*/.modal-dialog */}
                </div>
                {/*/.modal */}
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-1"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-1"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          &lt;a href="#" className="btn btn-primary !text-white
                          !bg-[#3f78e0] border-[#3f78e0] hover:text-white
                          hover:bg-[#3f78e0] hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0]
                          !rounded-[50rem] mx-1 !mb-2 md:!mb-0"
                          data-bs-toggle="modal"
                          data-bs-target="#modal-01"&gt;Cookie&lt;/a&gt;{"\n"}
                          {"  "}
                          {"\n"}&lt;div className="modal fade
                          modal-bottom-center" id="modal-01" tabindex="-1"&gt;
                          {"\n"}
                          {"  "}&lt;div className="modal-dialog modal-xl"&gt;
                          {"\n"}
                          {"    "}&lt;div className="modal-content"&gt;{"\n"}
                          {"      "}&lt;div className="modal-body p-6"&gt;{"\n"}
                          {"        "}&lt;div className="row"&gt;{"\n"}
                          {"          "}&lt;div className="md:w-full
                          flex-[0_0_auto] !px-[15px] max-w-full lg:w-8/12 !mb-4
                          lg:!mb-0 my-auto items-center"&gt;{"\n"}
                          {"            "}&lt;h4 className="mb-2"&gt;Cookie
                          Policy&lt;/h4&gt;{"\n"}
                          {"            "}&lt;p className="mb-0"&gt;We use
                          cookies to personalize content to make our site easier
                          for you to use.&lt;/p&gt;{"\n"}
                          {"          "}&lt;/div&gt;{"\n"}
                          {"          "}&lt;!--/column --&gt;{"\n"}
                          {"          "}&lt;div className="md:w-5/12
                          flex-[0_0_auto] !px-[15px] max-w-full lg:w-4/12{"  "}
                          xl:!text-right lg:!text-right my-auto"&gt;
                          {"\n"}
                          {"            "}&lt;a href="#" className="btn
                          btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0]
                          hover:text-white hover:bg-[#3f78e0]
                          hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0]
                          !rounded-[50rem]" data-bs-dismiss="modal"
                          aria-label="Close"&gt;I Understand&lt;/a&gt;{"\n"}
                          {"          "}&lt;/div&gt;{"\n"}
                          {"          "}&lt;!--/column --&gt;{"\n"}
                          {"        "}&lt;/div&gt;{"\n"}
                          {"        "}&lt;!--/.row --&gt;{"\n"}
                          {"      "}&lt;/div&gt;{"\n"}
                          {"      "}&lt;!--/.modal-body --&gt;{"\n"}
                          {"    "}&lt;/div&gt;{"\n"}
                          {"    "}&lt;!--/.modal-content --&gt;{"\n"}
                          {"  "}&lt;/div&gt;{"\n"}
                          {"  "}&lt;!--/.modal-dialog --&gt;{"\n"}&lt;/div&gt;
                          {"\n"}
                          &lt;!--/.modal --&gt;
                        </code>
                      </pre>
                    </div>
                    {/*/.code-wrapper-inner */}
                  </div>
                  {/*/.code-wrapper */}
                </div>
              </CodeSnippetContainer>
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-2" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Subscription</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <a
                  href="#"
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] mx-1 !mb-2 xl:!mb-0 lg:!mb-0 md:!mb-0"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-02"
                >
                  Subscription
                </a>
                <div
                  className="modal fade !m-0 !p-0"
                  id="modal-02"
                  tabIndex={-1}
                >
                  <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content !text-center">
                      <div className="relative flex-auto pt-[2.5rem] pr-[2.5rem] pb-[2.5rem] !pl-[2.5rem]">
                        <button
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                        <div className="flex flex-wrap mx-[-15px]">
                          <div className="xl:w-10/12 lg:w-10/12 md:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] md:!ml-[8.33333333%]">
                            <figure className="!mb-6">
                              <img
                                srcSet="/assets/img/illustrations/i7@2x.png 2x"
                                alt="image"
                                src="/assets/img/illustrations/i7.png"
                                width="800"
                                height="621"
                              />
                            </figure>
                          </div>
                          {/* /column */}
                        </div>
                        {/* /.row */}
                        <h3>Join the mailing list and get %10 off</h3>
                        <p className="!mb-6">
                          Nullam quis risus eget urna mollis ornare vel eu leo.
                          Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                        <div className="newsletter-wrapper">
                          <div className="flex flex-wrap mx-[-15px]">
                            <div className="xl:w-10/12 lg:w-10/12 md:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] md:!ml-[8.33333333%]">
                              {/* Begin Mailchimp Signup Form */}
                              <div id="mc_embed_signup">
                                <form
                                  onSubmit={(e) => e.preventDefault()}
                                  id="mc-embedded-subscribe-form"
                                  name="mc-embedded-subscribe-form"
                                  className="validate"
                                >
                                  <div id="mc_embed_signup_scroll">
                                    <div className="!text-left input-group !relative form-floating">
                                      <input
                                        type="email"
                                        defaultValue=""
                                        name="EMAIL"
                                        className="required email form-control  relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out     focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset]   focus-visible:!border-[rgba(63,120,224,0.5)]   placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                                        placeholder=""
                                        id="mce-EMAIL"
                                      />
                                      <label
                                        htmlFor="mce-EMAIL"
                                        className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                                      >
                                        Email Address
                                      </label>
                                      <input
                                        type="submit"
                                        defaultValue="Join"
                                        name="subscribe"
                                        id="mc-embedded-subscribe"
                                        className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0]"
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
                                    </div>{" "}
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
                          {/* /column */}
                        </div>
                        {/* /.row */}
                      </div>
                      {/*/.modal-body */}
                    </div>
                    {/*/.modal-content */}
                  </div>
                  {/*/.modal-dialog */}
                </div>
                {/*/.modal */}
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-2"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-2"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          &lt;a href="#" className="btn btn-primary !text-white
                          !bg-[#3f78e0] border-[#3f78e0] hover:text-white
                          hover:bg-[#3f78e0] hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0]
                          !rounded-[50rem] mx-1 !mb-2 md:!mb-0"
                          data-bs-toggle="modal"
                          data-bs-target="#modal-02"&gt;Subscription&lt;/a&gt;
                          {"\n"}
                          {"  "}
                          {"\n"}&lt;div className="modal fade" id="modal-02"
                          tabindex="-1"&gt;{"\n"}
                          {"  "}&lt;div className="modal-dialog
                          modal-dialog-centered modal-md"&gt;{"\n"}
                          {"    "}&lt;div className="modal-content
                          !text-center"&gt;
                          {"\n"}
                          {"      "}&lt;div className="modal-body"&gt;{"\n"}
                          {"        "}&lt;button className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"&gt;&lt;/button&gt;{"\n"}
                          {"        "}&lt;div className="row"&gt;{"\n"}
                          {"          "}&lt;div className="md:w-10/12
                          flex-[0_0_auto] !px-[15px] max-w-full
                          md:!ml-[8.33333333%]"&gt;{"\n"}
                          {"            "}&lt;figure className="mb-6"&gt;&lt;img
                          src="/assets/img/illustrations/i7.png"
                          srcset="/assets/img/illustrations/i7@2x.png 2x" alt=""
                          /&gt;&lt;/figure&gt;{"\n"}
                          {"          "}&lt;/div&gt;{"\n"}
                          {"          "}&lt;!-- /column --&gt;{"\n"}
                          {"        "}&lt;/div&gt;{"\n"}
                          {"        "}&lt;!-- /.row --&gt;{"\n"}
                          {"        "}&lt;h3&gt;Join the mailing list and get
                          %10 off&lt;/h3&gt;{"\n"}
                          {"        "}&lt;p className="mb-6"&gt;Nullam quis
                          risus eget urna mollis ornare vel eu leo. Donec
                          ullamcorper nulla non metus auctor
                          fringilla.&lt;/p&gt;{"\n"}
                          {"        "}&lt;div className="newsletter-wrapper"&gt;
                          {"\n"}
                          {"          "}&lt;div className="row"&gt;{"\n"}
                          {"            "}&lt;div className="md:w-10/12
                          flex-[0_0_auto] !px-[15px] max-w-full
                          md:!ml-[8.33333333%]"&gt;{"\n"}
                          {"              "}&lt;!-- Begin Mailchimp Signup Form
                          --&gt;
                          {"\n"}
                          {"              "}&lt;div id="mc_embed_signup"&gt;
                          {"\n"}
                          {"                "}&lt;form
                          action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;amp;id=b49ef47a9a"
                          method="post" id="mc-embedded-subscribe-form"
                          name="mc-embedded-subscribe-form" className="validate"
                          target="_blank" novalidate&gt;{"\n"}
                          {"                  "}&lt;div
                          id="mc_embed_signup_scroll"&gt;{"\n"}
                          {"                    "}&lt;div className="!text-left
                          input-group !relative"&gt;{"\n"}
                          {"                      "}&lt;input type="email"
                          value="" name="EMAIL" className="required email
                          form-control" placeholder="Email Address"
                          id="mce-EMAIL"&gt;{"\n"}
                          {"                      "}&lt;label
                          for="mce-EMAIL"&gt;Email Address&lt;/label&gt;{"\n"}
                          {"                      "}&lt;input type="submit"
                          value="Join" name="subscribe"
                          id="mc-embedded-subscribe" className="btn
                          btn-primary"&gt;{"\n"}
                          {"                    "}&lt;/div&gt;{"\n"}
                          {"                    "}&lt;div id="mce-responses"
                          className="clear"&gt;{"\n"}
                          {"                      "}&lt;div className="response"
                          id="mce-error-response"
                          style="display:none"&gt;&lt;/div&gt;
                          {"\n"}
                          {"                      "}&lt;div className="response"
                          id="mce-success-response"
                          style="display:none"&gt;&lt;/div&gt;{"\n"}
                          {"                    "}&lt;/div&gt; &lt;!-- real
                          people should not fill this in and expect good things
                          - do not remove this or risk form bot signups--&gt;
                          {"\n"}
                          {"                    "}&lt;div style="position:
                          absolute; left: -5000px;"
                          aria-hidden="true"&gt;&lt;input type="text"
                          name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                          tabindex="-1" value=""&gt;&lt;/div&gt;{"\n"}
                          {"                    "}&lt;div
                          className="clear"&gt;&lt;/div&gt;{"\n"}
                          {"                  "}&lt;/div&gt;{"\n"}
                          {"                "}&lt;/form&gt;{"\n"}
                          {"              "}&lt;/div&gt;{"\n"}
                          {"              "}&lt;!--End mc_embed_signup--&gt;
                          {"\n"}
                          {"            "}&lt;/div&gt;{"\n"}
                          {"            "}&lt;!-- /.newsletter-wrapper --&gt;
                          {"\n"}
                          {"          "}&lt;/div&gt;{"\n"}
                          {"          "}&lt;!-- /column --&gt;{"\n"}
                          {"        "}&lt;/div&gt;{"\n"}
                          {"        "}&lt;!-- /.row --&gt;{"\n"}
                          {"      "}&lt;/div&gt;{"\n"}
                          {"      "}&lt;!--/.modal-body --&gt;{"\n"}
                          {"    "}&lt;/div&gt;{"\n"}
                          {"    "}&lt;!--/.modal-content --&gt;{"\n"}
                          {"  "}&lt;/div&gt;{"\n"}
                          {"  "}&lt;!--/.modal-dialog --&gt;{"\n"}&lt;/div&gt;
                          {"\n"}
                          &lt;!--/.modal --&gt;
                        </code>
                      </pre>
                    </div>
                    {/*/.code-wrapper-inner */}
                  </div>
                  {/*/.code-wrapper */}
                </div>
              </CodeSnippetContainer>
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-3" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Sign In</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <a
                  href="#"
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] mx-1 !mb-2 xl:!mb-0 lg:!mb-0 md:!mb-0"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-signin"
                >
                  Sign In
                </a>
                <div
                  className="modal fade !m-0 !p-0"
                  id="modal-signin"
                  tabIndex={-1}
                >
                  <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content !text-center">
                      <div className="relative flex-auto pt-[2.5rem] pr-[2.5rem] pb-[2.5rem] !pl-[2.5rem]">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                        <h2 className="!mb-3 text-left">Welcome Back</h2>
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
                              className=" form-control  relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out     focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset]   focus-visible:!border-[rgba(63,120,224,0.5)]   placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                              placeholder=""
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
                              className=" form-control  relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out     focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset]   focus-visible:!border-[rgba(63,120,224,0.5)]   placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                              placeholder=""
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
                          <a className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] btn-login w-full !mb-2">
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
                          Don't have an account?{" "}
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
                <div
                  className="modal fade !m-0 !p-0"
                  id="modal-signup"
                  tabIndex={-1}
                >
                  <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content !text-center">
                      <div className="relative flex-auto pt-[2.5rem] pr-[2.5rem] pb-[2.5rem] !pl-[2.5rem]">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                        <h2 className="!mb-3 text-left">Sign up to Sandbox</h2>
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
                              className=" form-control  relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out     focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset]   focus-visible:!border-[rgba(63,120,224,0.5)]   placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                              placeholder=""
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
                              className=" form-control  relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out     focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset]   focus-visible:!border-[rgba(63,120,224,0.5)]   placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                              placeholder=""
                              id="loginEmail2"
                            />
                            <label
                              htmlFor="loginEmail2"
                              className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                            >
                              Email
                            </label>
                          </div>
                          <div className="form-floating relative password-field !mb-4">
                            <input
                              type="password"
                              className=" form-control  relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out     focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset]   focus-visible:!border-[rgba(63,120,224,0.5)]   placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                              placeholder=""
                              id="loginPassword2"
                            />
                            <span className="password-toggle absolute -translate-y-2/4 cursor-pointer text-[0.9rem] !text-[#959ca9] right-3 top-2/4">
                              <i className="uil uil-eye" />
                            </span>
                            <label
                              htmlFor="loginPassword2"
                              className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                            >
                              Password
                            </label>
                          </div>
                          <div className="form-floating relative password-field !mb-4">
                            <input
                              type="password"
                              className=" form-control  relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out     focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset]   focus-visible:!border-[rgba(63,120,224,0.5)]   placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                              placeholder=""
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
                          <a className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] btn-login w-full !mb-2">
                            Sign Up
                          </a>
                        </form>
                        {/* /form */}
                        <p className="!mb-0">
                          Already have an account?{" "}
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
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-3"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-3"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          &lt;a href="#" className="btn btn-primary !text-white
                          !bg-[#3f78e0] border-[#3f78e0] hover:text-white
                          hover:bg-[#3f78e0] hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0]
                          !rounded-[50rem] mx-1 !mb-2 md:!mb-0"
                          data-bs-toggle="modal"
                          data-bs-target="#modal-signin"&gt;Sign In&lt;/a&gt;
                          {"\n"}
                          {"\n"}&lt;div className="modal fade" id="modal-signin"
                          tabindex="-1"&gt;{"\n"}
                          {"  "}&lt;div className="modal-dialog
                          modal-dialog-centered modal-sm"&gt;{"\n"}
                          {"    "}&lt;div className="modal-content
                          !text-center"&gt;
                          {"\n"}
                          {"      "}&lt;div className="modal-body"&gt;{"\n"}
                          {"        "}&lt;button type="button"
                          className="btn-close" data-bs-dismiss="modal"
                          aria-label="Close"&gt;&lt;/button&gt;{"\n"}
                          {"        "}&lt;h2 className="mb-3
                          text-left"&gt;Welcome Back&lt;/h2&gt;{"\n"}
                          {"        "}&lt;p className="lead !mb-6
                          text-left"&gt;Fill your email and password to sign
                          in.&lt;/p&gt;{"\n"}
                          {"        "}&lt;form className="text-left !mb-3"&gt;
                          {"\n"}
                          {"          "}&lt;div className="relative !mb-4"&gt;
                          {"\n"}
                          {"            "}&lt;input type="email"
                          className="form-control" placeholder="Email"
                          id="loginEmail"&gt;{"\n"}
                          {"            "}&lt;label
                          for="loginEmail"&gt;Email&lt;/label&gt;{"\n"}
                          {"          "}&lt;/div&gt;{"\n"}
                          {"          "}&lt;div className="relative
                          password-field !mb-4"&gt;{"\n"}
                          {"            "}&lt;input type="password"
                          className="form-control" placeholder="Password"
                          id="loginPassword"&gt;{"\n"}
                          {"            "}&lt;span
                          className="password-toggle"&gt;&lt;i className="uil
                          uil-eye"&gt;&lt;/i&gt;&lt;/span&gt;{"\n"}
                          {"            "}&lt;label
                          for="loginPassword"&gt;Password&lt;/label&gt;{"\n"}
                          {"          "}&lt;/div&gt;{"\n"}
                          {"          "}&lt;a className="btn btn-primary
                          !text-white !bg-[#3f78e0] border-[#3f78e0]
                          hover:text-white hover:bg-[#3f78e0]
                          hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0]
                          !rounded-[50rem] btn-login w-full !mb-2"&gt;Sign
                          In&lt;/a&gt;{"\n"}
                          {"        "}&lt;/form&gt;{"\n"}
                          {"        "}&lt;!-- /form --&gt;{"\n"}
                          {"        "}&lt;p className="mb-1"&gt;&lt;a href="#"
                          className="hover"&gt;Forgot
                          Password?&lt;/a&gt;&lt;/p&gt;
                          {"\n"}
                          {"        "}&lt;p className="mb-0"&gt;Don't have an
                          account? &lt;a href="#" data-bs-target="#modal-signup"
                          data-bs-toggle="modal" data-bs-dismiss="modal"
                          className="hover"&gt;Sign up&lt;/a&gt;&lt;/p&gt;{"\n"}
                          {"        "}&lt;div className="divider-icon
                          !my-4"&gt;or&lt;/div&gt;{"\n"}
                          {"        "}&lt;nav className="nav social
                          justify-center !text-center"&gt;{"\n"}
                          {"          "}&lt;a href="#" className="btn btn-circle
                          btn-sm btn-google"&gt;&lt;i className="uil
                          uil-google"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}
                          {"          "}&lt;a href="#" className="btn btn-circle
                          btn-sm btn-facebook-f"&gt;&lt;i className="uil
                          uil-facebook-f"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}
                          {"          "}&lt;a href="#" className="btn btn-circle
                          btn-sm btn-twitter"&gt;&lt;i className="uil
                          uil-twitter"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}
                          {"        "}&lt;/nav&gt;{"\n"}
                          {"        "}&lt;!--/.social --&gt;{"\n"}
                          {"      "}&lt;/div&gt;{"\n"}
                          {"      "}&lt;!--/.modal-content --&gt;{"\n"}
                          {"    "}&lt;/div&gt;{"\n"}
                          {"    "}&lt;!--/.modal-body --&gt;{"\n"}
                          {"  "}&lt;/div&gt;{"\n"}
                          {"  "}&lt;!--/.modal-dialog --&gt;{"\n"}&lt;/div&gt;
                          {"\n"}
                          &lt;!--/.modal --&gt;
                        </code>
                      </pre>
                    </div>
                    {/*/.code-wrapper-inner */}
                  </div>
                  {/*/.code-wrapper */}
                </div>
              </CodeSnippetContainer>
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-4" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Sign Up</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <a
                  href="#"
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] mx-1 !mb-2 xl:!mb-0 lg:!mb-0 md:!mb-0"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-signup"
                >
                  Sign Up
                </a>
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-4"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-4"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          &lt;a href="#" className="btn btn-primary !text-white
                          !bg-[#3f78e0] border-[#3f78e0] hover:text-white
                          hover:bg-[#3f78e0] hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0]
                          !rounded-[50rem] mx-1 !mb-2 md:!mb-0"
                          data-bs-toggle="modal"
                          data-bs-target="#modal-signup"&gt;Sign Up&lt;/a&gt;
                          {"\n"}
                          {"  "}
                          {"\n"}&lt;div className="modal fade" id="modal-signup"
                          tabindex="-1"&gt;{"\n"}
                          {"  "}&lt;div className="modal-dialog
                          modal-dialog-centered modal-sm"&gt;{"\n"}
                          {"    "}&lt;div className="modal-content
                          !text-center"&gt;
                          {"\n"}
                          {"      "}&lt;div className="modal-body"&gt;{"\n"}
                          {"        "}&lt;button type="button"
                          className="btn-close" data-bs-dismiss="modal"
                          aria-label="Close"&gt;&lt;/button&gt;{"\n"}
                          {"        "}&lt;h2 className="mb-3 text-left"&gt;Sign
                          up to Sandbox&lt;/h2&gt;{"\n"}
                          {"        "}&lt;p className="lead !mb-6
                          text-left"&gt;Registration takes less than a
                          minute.&lt;/p&gt;{"\n"}
                          {"        "}&lt;form className="text-left !mb-3"&gt;
                          {"\n"}
                          {"          "}&lt;div className="relative !mb-4"&gt;
                          {"\n"}
                          {"            "}&lt;input type="text"
                          className="form-control" placeholder="Name"
                          id="loginName"&gt;{"\n"}
                          {"            "}&lt;label
                          for="loginName"&gt;Name&lt;/label&gt;{"\n"}
                          {"          "}&lt;/div&gt;{"\n"}
                          {"          "}&lt;div className="relative !mb-4"&gt;
                          {"\n"}
                          {"            "}&lt;input type="email"
                          className="form-control" placeholder="Email"
                          id="loginEmail"&gt;{"\n"}
                          {"            "}&lt;label
                          for="loginEmail"&gt;Email&lt;/label&gt;{"\n"}
                          {"          "}&lt;/div&gt;{"\n"}
                          {"          "}&lt;div className="relative
                          password-field !mb-4"&gt;{"\n"}
                          {"            "}&lt;input type="password"
                          className="form-control" placeholder="Password"
                          id="loginPassword"&gt;{"\n"}
                          {"            "}&lt;span
                          className="password-toggle"&gt;&lt;i className="uil
                          uil-eye"&gt;&lt;/i&gt;&lt;/span&gt;{"\n"}
                          {"            "}&lt;label
                          for="loginPassword"&gt;Password&lt;/label&gt;{"\n"}
                          {"          "}&lt;/div&gt;{"\n"}
                          {"          "}&lt;div className="relative
                          password-field !mb-4"&gt;{"\n"}
                          {"            "}&lt;input type="password"
                          className="form-control" placeholder="Confirm
                          Password" id="loginPasswordConfirm"&gt;{"\n"}
                          {"            "}&lt;span
                          className="password-toggle"&gt;&lt;i className="uil
                          uil-eye"&gt;&lt;/i&gt;&lt;/span&gt;{"\n"}
                          {"            "}&lt;label
                          for="loginPasswordConfirm"&gt;Confirm
                          Password&lt;/label&gt;
                          {"\n"}
                          {"          "}&lt;/div&gt;{"\n"}
                          {"          "}&lt;a className="btn btn-primary
                          !text-white !bg-[#3f78e0] border-[#3f78e0]
                          hover:text-white hover:bg-[#3f78e0]
                          hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0]
                          !rounded-[50rem] btn-login w-full !mb-2"&gt;Sign
                          Up&lt;/a&gt;{"\n"}
                          {"        "}&lt;/form&gt;{"\n"}
                          {"        "}&lt;!-- /form --&gt;{"\n"}
                          {"        "}&lt;p className="mb-0"&gt;Already have an
                          account? &lt;a href="#" data-bs-target="#modal-signin"
                          data-bs-toggle="modal" data-bs-dismiss="modal"
                          className="hover"&gt;Sign in&lt;/a&gt;&lt;/p&gt;{"\n"}
                          {"        "}&lt;div className="divider-icon
                          !my-4"&gt;or&lt;/div&gt;{"\n"}
                          {"        "}&lt;nav className="nav social
                          justify-center !text-center"&gt;{"\n"}
                          {"          "}&lt;a href="#" className="btn btn-circle
                          btn-sm btn-google"&gt;&lt;i className="uil
                          uil-google"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}
                          {"          "}&lt;a href="#" className="btn btn-circle
                          btn-sm btn-facebook-f"&gt;&lt;i className="uil
                          uil-facebook-f"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}
                          {"          "}&lt;a href="#" className="btn btn-circle
                          btn-sm btn-twitter"&gt;&lt;i className="uil
                          uil-twitter"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}
                          {"        "}&lt;/nav&gt;{"\n"}
                          {"        "}&lt;!--/.social --&gt;{"\n"}
                          {"      "}&lt;/div&gt;{"\n"}
                          {"      "}&lt;!--/.modal-content --&gt;{"\n"}
                          {"    "}&lt;/div&gt;{"\n"}
                          {"    "}&lt;!--/.modal-body --&gt;{"\n"}
                          {"  "}&lt;/div&gt;{"\n"}
                          {"  "}&lt;!--/.modal-dialog --&gt;{"\n"}&lt;/div&gt;
                          {"\n"}
                          &lt;!--/.modal --&gt;
                        </code>
                      </pre>
                    </div>
                    {/*/.code-wrapper-inner */}
                  </div>
                  {/*/.code-wrapper */}
                </div>
              </CodeSnippetContainer>
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-5" className="wrapper py-24">
            <h2 className="!mb-3 !leading-[1.35]">Popup</h2>
            <p className="lead !mb-1">
              To display any modal as a popup on your page, add{" "}
              <code className="code">.modal-popup</code> class to your{" "}
              <code className="code">.modal</code>.
            </p>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
              Check out a live example:{" "}
              <Link
                to={`/demo12`}
                className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                target="_blank"
              >
                Demo 12
              </Link>
              .
            </p>
            <div className="card">
              <CodeSnippetContainer>
                <div className="card-footer !relative border-0">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-5"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-5"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          &lt;div className="modal fade modal-popup"
                          id="modal-01" tabindex="-1"&gt;{"\n"}
                          {"  "}...{"\n"}&lt;/div&gt;{"\n"}&lt;!--/.modal --&gt;
                        </code>
                      </pre>
                    </div>
                    {/*/.code-wrapper-inner */}
                  </div>
                  {/*/.code-wrapper */}
                </div>
              </CodeSnippetContainer>
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
    </div>
  );
}
