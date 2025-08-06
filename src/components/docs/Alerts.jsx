import React from "react";
import DocsSidebar from "./DocsSidebar";
import CodeSnippetContainer from "../common/CodeSnippetContainer";

export default function Alerts() {
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
                    Simple
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-2"
                  >
                    Dismissing
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
            <h2 className="!mb-5 !leading-[1.35]">Simple</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div
                  className="alert alert-primary !text-[#2c549d] !bg-[#edf2fc] !border-[#2c549d] alert-icon !p-[1rem] !pl-10 !border-0 !shadow-none"
                  role="alert"
                >
                  <i className="uil uil-star before:content-['\eceb']" /> A
                  simple primary alert with{" "}
                  <a
                    href="#"
                    className="alert-link hover:!text-[#2c549d] !text-[#2c549d] hover"
                  >
                    an example link
                  </a>
                  .
                </div>
                <div
                  className="alert alert-secondary !text-[#777b84] !bg-[#f7f7f9] !border-[#777b84] !p-[1rem]  alert-icon !pl-10 !border-0 !shadow-none"
                  role="alert"
                >
                  <i className="uil uil-clock before:content-['\e9ee']" /> A
                  simple secondary alert with{" "}
                  <a href="#" className="alert-link !text-[#777b84] hover">
                    an example link
                  </a>
                  .
                </div>
                <div
                  className="alert alert-success !text-[#308970] !bg-[#edf9f6] !border-[#308970] !p-[1rem]  alert-icon !pl-10 !border-0 !shadow-none"
                  role="alert"
                >
                  <i className="uil uil-check-circle before:content-['\e9db']" />{" "}
                  A simple success alert with{" "}
                  <a href="#" className="alert-link !text-[#308970] hover">
                    an example link
                  </a>
                  .
                </div>
                <div
                  className="alert alert-danger !text-[#9e454b] !bg-[#fcf0f1] !border-[#9e454b] !p-[1rem]  alert-icon !pl-10 !border-0 !shadow-none"
                  role="alert"
                >
                  <i className="uil uil-times-circle before:content-['\ed37']" />{" "}
                  A simple danger alert with{" "}
                  <a href="#" className="alert-link !text-[#9e454b] hover">
                    an example link
                  </a>
                  .
                </div>
                <div
                  className="alert alert-warning !text-[#af803e] !bg-[#fff8ee] !border-[#af803e] !p-[1rem]  alert-icon !pl-10 !border-0 !shadow-none"
                  role="alert"
                >
                  <i className="uil uil-exclamation-triangle before:content-['\ead2']" />{" "}
                  A simple warning alert with{" "}
                  <a href="#" className="alert-link !text-[#af803e] hover">
                    an example link
                  </a>
                  .
                </div>
                <div
                  className="alert alert-info !text-[#3b768b] !bg-[#eff7fa] !border-[#3b768b] !p-[1rem]  alert-icon !pl-10 !border-0 !shadow-none"
                  role="alert"
                >
                  <i className="uil uil-exclamation-circle before:content-['\ead0']" />{" "}
                  A simple info alert with{" "}
                  <a
                    href="#"
                    className="alert-link hover:!text-[#3b768b] !text-[#3b768b] hover"
                  >
                    an example link
                  </a>
                  .
                </div>
                <div
                  className="alert alert-light !text-[#b2b2b2] !bg-[#fbfbfc] !border-[#b2b2b2]  alert-icon !p-[1rem] !pl-10 !border-0 !shadow-none"
                  role="alert"
                >
                  <i className="uil uil-lock before:content-['\ebdc']" /> A
                  simple light alert with{" "}
                  <a
                    href="#"
                    className="alert-link hover:!text-[#b2b2b2] !text-[#b2b2b2] hover"
                  >
                    an example link
                  </a>
                  .
                </div>
                <div
                  className="alert alert-dark !text-[#1b1e23] !bg-[#eaebec] !border-[#1b1e23] !p-[1rem]   alert-icon !pl-10 !border-0 !shadow-none"
                  role="alert"
                >
                  <i className="uil uil-map-marker-info before:content-['\ebde']" />{" "}
                  A simple dark alert with{" "}
                  <a
                    href="#"
                    className="alert-link hover:!text-[#1b1e23] !text-[#1b1e23] hover"
                  >
                    an example link
                  </a>
                  .
                </div>
              </div>
              {/*/.card-body */}{" "}
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
                          {"\n"}
                          {"                      "}&lt;div className="alert
                          alert-primary !text-[#2c549d] !bg-[#edf2fc]
                          !border-[#2c549d] alert-icon !p-[1rem] !pl-10
                          !border-0 !shadow-none" role="alert"&gt;&lt;i
                          className="uil uil-star
                          before:content-['\eceb']"&gt;&lt;/i&gt; A simple
                          primary alert with &lt;a href="#"
                          className="alert-link hover:!text-[#2c549d]
                          !text-[#2c549d] hover"&gt;an example
                          link&lt;/a&gt;.&lt;/div&gt;{"\n"}
                          {"                      "}&lt;div className="alert
                          alert-secondary !text-[#777b84] !bg-[#f7f7f9]
                          !border-[#777b84] !p-[1rem]{"  "}alert-icon !pl-10
                          !border-0 !shadow-none" role="alert"&gt;&lt;i
                          className="uil uil-clock
                          before:content-['\e9ee']"&gt;&lt;/i&gt; A simple
                          secondary alert with &lt;a href="#"
                          className="alert-link !text-[#777b84] hover"&gt;an
                          example link&lt;/a&gt;.&lt;/div&gt;{"\n"}
                          {"                      "}&lt;div className="alert
                          alert-success !text-[#308970] !bg-[#edf9f6]
                          !border-[#308970] !p-[1rem]
                          {"  "}alert-icon !pl-10 !border-0 !shadow-none"
                          role="alert"&gt;&lt;i className="uil uil-check-circle
                          before:content-['\e9db']"&gt;&lt;/i&gt; A simple
                          success alert with &lt;a href="#"
                          className="alert-link !text-[#308970] hover"&gt;an
                          example link&lt;/a&gt;.&lt;/div&gt;{"\n"}
                          {"                      "}&lt;div className="alert
                          alert-danger !text-[#9e454b] !bg-[#fcf0f1]
                          !border-[#9e454b] !p-[1rem]
                          {"  "}alert-icon !pl-10 !border-0 !shadow-none"
                          role="alert"&gt;&lt;i className="uil uil-times-circle
                          before:content-['\ed37']"&gt;&lt;/i&gt; A simple
                          danger alert with &lt;a href="#" className="alert-link
                          !text-[#9e454b] hover"&gt;an example
                          link&lt;/a&gt;.&lt;/div&gt;{"\n"}
                          {"                      "}&lt;div className="alert
                          alert-warning !text-[#af803e] !bg-[#fff8ee]
                          !border-[#af803e] !p-[1rem]
                          {"  "}alert-icon !pl-10 !border-0 !shadow-none"
                          role="alert"&gt;&lt;i className="uil
                          uil-exclamation-triangle
                          before:content-['\ead2']"&gt;&lt;/i&gt; A simple
                          warning alert with &lt;a href="#"
                          className="alert-link !text-[#af803e] hover"&gt;an
                          example link&lt;/a&gt;.&lt;/div&gt;{"\n"}
                          {"                      "}&lt;div className="alert
                          alert-info !text-[#3b768b] !bg-[#eff7fa]
                          !border-[#3b768b] !p-[1rem]
                          {"  "}alert-icon !pl-10 !border-0 !shadow-none"
                          role="alert"&gt;&lt;i className="uil
                          uil-exclamation-circle
                          before:content-['\ead0']"&gt;&lt;/i&gt; A simple info
                          alert with &lt;a href="#" className="alert-link
                          hover:!text-[#3b768b] !text-[#3b768b] hover"&gt;an
                          example link&lt;/a&gt;.&lt;/div&gt;{"\n"}
                          {"                      "}&lt;div className="alert
                          alert-light !text-[#b2b2b2] !bg-[#fbfbfc]
                          !border-[#b2b2b2]{"  "}
                          alert-icon !p-[1rem] !pl-10 !border-0 !shadow-none"
                          role="alert"&gt;&lt;i className="uil uil-lock
                          before:content-['\ebdc']"&gt;&lt;/i&gt; A simple light
                          alert with &lt;a href="#" className="alert-link
                          hover:!text-[#b2b2b2] !text-[#b2b2b2] hover"&gt;an
                          example link&lt;/a&gt;.&lt;/div&gt;{"\n"}
                          {"                      "}&lt;div className="alert
                          alert-dark !text-[#1b1e23] !bg-[#eaebec]
                          !border-[#1b1e23] !p-[1rem]
                          {"   "}alert-icon !pl-10 !border-0 !shadow-none"
                          role="alert"&gt;&lt;i className="uil
                          uil-map-marker-info
                          before:content-['\ebde']"&gt;&lt;/i&gt; A simple dark
                          alert with &lt;a href="#" className="alert-link
                          hover:!text-[#1b1e23] !text-[#1b1e23] hover"&gt;an
                          example link&lt;/a&gt;.&lt;/div&gt;
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
          <section id="snippet-2" className="wrapper py-24">
            <h2 className="!mb-5 !leading-[1.35]">Dismissing</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div
                  className="alert alert-primary !text-[#2c549d] !bg-[#edf2fc] !border-[#2c549d] alert-icon !p-[1rem] !pl-10 alert-dismissible fade show !border-0 !shadow-none"
                  role="alert"
                >
                  <i className="uil uil-star before:content-['\eceb']" /> A
                  simple primary alert with{" "}
                  <a
                    href="#"
                    className="alert-link hover:!text-[#2c549d] !text-[#2c549d] hover"
                  >
                    an example link
                  </a>
                  .
                  <button
                    type="button"
                    className="btn-close !text-[#2c549d]"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  />
                </div>
                <div
                  className="alert alert-secondary !text-[#777b84] !bg-[#f7f7f9] !border-[#777b84] !p-[1rem]  alert-icon !pl-10 alert-dismissible fade show !border-0 !shadow-none"
                  role="alert"
                >
                  <i className="uil uil-clock before:content-['\e9ee']" /> A
                  simple secondary alert with{" "}
                  <a href="#" className="alert-link !text-[#777b84] hover">
                    an example link
                  </a>
                  .
                  <button
                    type="button"
                    className="btn-close !text-[#777b84]"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  />
                </div>
                <div
                  className="alert alert-success !text-[#308970] !bg-[#edf9f6] !border-[#308970] !p-[1rem]  alert-icon !pl-10 alert-dismissible fade show !border-0 !shadow-none"
                  role="alert"
                >
                  <i className="uil uil-check-circle before:content-['\e9db']" />{" "}
                  A simple success alert with{" "}
                  <a href="#" className="alert-link !text-[#308970] hover">
                    an example link
                  </a>
                  .
                  <button
                    type="button"
                    className="btn-close !text-[#308970]"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  />
                </div>
                <div
                  className="alert alert-danger !text-[#9e454b] !bg-[#fcf0f1] !border-[#9e454b] !p-[1rem]  alert-icon !pl-10 alert-dismissible fade show !border-0 !shadow-none"
                  role="alert"
                >
                  <i className="uil uil-times-circle before:content-['\ed37']" />{" "}
                  A simple danger alert with{" "}
                  <a href="#" className="alert-link !text-[#9e454b] hover">
                    an example link
                  </a>
                  .
                  <button
                    type="button"
                    className="btn-close !text-[#9e454b]"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  />
                </div>
                <div
                  className="alert alert-warning !text-[#af803e] !bg-[#fff8ee] !border-[#af803e] !p-[1rem]  alert-icon !pl-10 alert-dismissible fade show !border-0 !shadow-none"
                  role="alert"
                >
                  <i className="uil uil-exclamation-triangle before:content-['\ead2']" />{" "}
                  A simple warning alert with{" "}
                  <a href="#" className="alert-link !text-[#af803e] hover">
                    an example link
                  </a>
                  .
                  <button
                    type="button"
                    className="btn-close !text-[#af803e]"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  />
                </div>
                <div
                  className="alert alert-info !text-[#3b768b] !bg-[#eff7fa] !border-[#3b768b] !p-[1rem]  alert-icon !pl-10 alert-dismissible fade show !border-0 !shadow-none"
                  role="alert"
                >
                  <i className="uil uil-exclamation-circle before:content-['\ead0']" />{" "}
                  A simple info alert with{" "}
                  <a
                    href="#"
                    className="alert-link hover:!text-[#3b768b] !text-[#3b768b] hover"
                  >
                    an example link
                  </a>
                  .
                  <button
                    type="button"
                    className="btn-close !text-[#3b768b]"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  />
                </div>
                <div
                  className="alert alert-light !text-[#b2b2b2] !bg-[#fbfbfc] !border-[#b2b2b2] !p-[1rem]  alert-icon !pl-10 alert-dismissible fade show !border-0 !shadow-none"
                  role="alert"
                >
                  <i className="uil uil-lock before:content-['\ebdc']" /> A
                  simple light alert with{" "}
                  <a
                    href="#"
                    className="alert-link hover:!text-[#b2b2b2] !text-[#b2b2b2] hover"
                  >
                    an example link
                  </a>
                  .
                  <button
                    type="button"
                    className="btn-close !text-[#b2b2b2]"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  />
                </div>
                <div
                  className="alert alert-dark !text-[#1b1e23] !bg-[#eaebec] !border-[#1b1e23] !p-[1rem]   alert-icon !pl-10 alert-dismissible fade show !border-0 !shadow-none"
                  role="alert"
                >
                  <i className="uil uil-map-marker-info before:content-['\ebde']" />{" "}
                  A simple dark alert with{" "}
                  <a
                    href="#"
                    className="alert-link hover:!text-[#1b1e23] !text-[#1b1e23] hover"
                  >
                    an example link
                  </a>
                  .
                  <button
                    type="button"
                    className="btn-close !text-[#1b1e23]"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  />
                </div>
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
                          {"\n"}
                          {"                      "}&lt;div className="alert
                          alert-primary !text-[#2c549d] !bg-[#edf2fc]
                          !border-[#2c549d] alert-icon !p-[1rem] !pl-10
                          alert-dismissible fade show !border-0 !shadow-none"
                          role="alert"&gt;&lt;i className="uil uil-star
                          before:content-['\eceb']"&gt;&lt;/i&gt; A simple
                          primary alert with &lt;a href="#"
                          className="alert-link hover:!text-[#2c549d]
                          !text-[#2c549d] hover"&gt;an example
                          link&lt;/a&gt;.&lt;button type="button"
                          className="btn-close !text-[#2c549d]"
                          data-bs-dismiss="alert"
                          aria-label="Close"&gt;&lt;/button&gt;{"\n"}
                          {"                      "}&lt;/div&gt;{"\n"}
                          {"                      "}&lt;div className="alert
                          alert-secondary !text-[#777b84] !bg-[#f7f7f9]
                          !border-[#777b84] !p-[1rem]{"  "}alert-icon !pl-10
                          alert-dismissible fade show !border-0 !shadow-none"
                          role="alert"&gt;&lt;i className="uil uil-clock
                          before:content-['\e9ee']"&gt;&lt;/i&gt; A simple
                          secondary alert with &lt;a href="#"
                          className="alert-link !text-[#777b84] hover"&gt;an
                          example link&lt;/a&gt;.&lt;button type="button"
                          className="btn-close !text-[#777b84]"
                          data-bs-dismiss="alert"
                          aria-label="Close"&gt;&lt;/button&gt;{"\n"}
                          {"                      "}&lt;/div&gt;{"\n"}
                          {"                      "}&lt;div className="alert
                          alert-success !text-[#308970] !bg-[#edf9f6]
                          !border-[#308970] !p-[1rem]
                          {"  "}alert-icon !pl-10 alert-dismissible fade show
                          !border-0 !shadow-none" role="alert"&gt;&lt;i
                          className="uil uil-check-circle
                          before:content-['\e9db']"&gt;&lt;/i&gt; A simple
                          success alert with &lt;a href="#"
                          className="alert-link !text-[#308970] hover"&gt;an
                          example link&lt;/a&gt;.&lt;button type="button"
                          className="btn-close !text-[#308970]"
                          data-bs-dismiss="alert"
                          aria-label="Close"&gt;&lt;/button&gt;{"\n"}
                          {"                      "}&lt;/div&gt;{"\n"}
                          {"                      "}&lt;div className="alert
                          alert-danger !text-[#9e454b] !bg-[#fcf0f1]
                          !border-[#9e454b] !p-[1rem]
                          {"  "}alert-icon !pl-10 alert-dismissible fade show
                          !border-0 !shadow-none" role="alert"&gt;&lt;i
                          className="uil uil-times-circle
                          before:content-['\ed37']"&gt;&lt;/i&gt; A simple
                          danger alert with &lt;a href="#" className="alert-link
                          !text-[#9e454b] hover"&gt;an example
                          link&lt;/a&gt;.&lt;button type="button"
                          className="btn-close !text-[#9e454b]"
                          data-bs-dismiss="alert"
                          aria-label="Close"&gt;&lt;/button&gt;{"\n"}
                          {"                      "}&lt;/div&gt;{"\n"}
                          {"                      "}&lt;div className="alert
                          alert-warning !text-[#af803e] !bg-[#fff8ee]
                          !border-[#af803e] !p-[1rem]
                          {"  "}alert-icon !pl-10 alert-dismissible fade show
                          !border-0 !shadow-none" role="alert"&gt;&lt;i
                          className="uil uil-exclamation-triangle
                          before:content-['\ead2']"&gt;&lt;/i&gt; A simple
                          warning alert with &lt;a href="#"
                          className="alert-link !text-[#af803e] hover"&gt;an
                          example link&lt;/a&gt;.&lt;button type="button"
                          className="btn-close !text-[#af803e]"
                          data-bs-dismiss="alert"
                          aria-label="Close"&gt;&lt;/button&gt;{"\n"}
                          {"                      "}&lt;/div&gt;{"\n"}
                          {"                      "}&lt;div className="alert
                          alert-info !text-[#3b768b] !bg-[#eff7fa]
                          !border-[#3b768b] !p-[1rem]
                          {"  "}alert-icon !pl-10 alert-dismissible fade show
                          !border-0 !shadow-none" role="alert"&gt;&lt;i
                          className="uil uil-exclamation-circle
                          before:content-['\ead0']"&gt;&lt;/i&gt; A simple info
                          alert with &lt;a href="#" className="alert-link
                          hover:!text-[#3b768b] !text-[#3b768b] hover"&gt;an
                          example link&lt;/a&gt;.&lt;button type="button"
                          className="btn-close !text-[#3b768b]"
                          data-bs-dismiss="alert"
                          aria-label="Close"&gt;&lt;/button&gt;{"\n"}
                          {"                      "}&lt;/div&gt;{"\n"}
                          {"                      "}&lt;div className="alert
                          alert-light !text-[#b2b2b2] !bg-[#fbfbfc]
                          !border-[#b2b2b2] !p-[1rem]
                          {"  "}alert-icon !pl-10 alert-dismissible fade show
                          !border-0 !shadow-none" role="alert"&gt;&lt;i
                          className="uil uil-lock
                          before:content-['\ebdc']"&gt;&lt;/i&gt; A simple light
                          alert with &lt;a href="#" className="alert-link
                          hover:!text-[#b2b2b2] !text-[#b2b2b2] hover"&gt;an
                          example link&lt;/a&gt;.&lt;button type="button"
                          className="btn-close !text-[#b2b2b2]"
                          data-bs-dismiss="alert"
                          aria-label="Close"&gt;&lt;/button&gt;{"\n"}
                          {"                      "}&lt;/div&gt;{"\n"}
                          {"                      "}&lt;div className="alert
                          alert-dark !text-[#1b1e23] !bg-[#eaebec]
                          !border-[#1b1e23] !p-[1rem]
                          {"   "}alert-icon !pl-10 alert-dismissible fade show
                          !border-0 !shadow-none" role="alert"&gt;&lt;i
                          className="uil uil-map-marker-info
                          before:content-['\ebde']"&gt;&lt;/i&gt; A simple dark
                          alert with &lt;a href="#" className="alert-link
                          hover:!text-[#1b1e23] !text-[#1b1e23] hover"&gt;an
                          example link&lt;/a&gt;.&lt;button type="button"
                          className="btn-close !text-[#1b1e23]"
                          data-bs-dismiss="alert"
                          aria-label="Close"&gt;&lt;/button&gt;{"\n"}
                          {"                      "}&lt;/div&gt;
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
