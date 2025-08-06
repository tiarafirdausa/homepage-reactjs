import React from "react";
import DocsSidebar from "./DocsSidebar";
import { Link } from "react-router-dom";
import CodeSnippetContainer from "../common/CodeSnippetContainer";
export default function Faq() {
  return (
    <div className="container">
      <div className="flex flex-wrap mx-[-15px]">
        <aside className="xl:w-2/12 flex-[0_0_auto] !px-[15px] max-w-full sidebar doc-sidebar md:!mt-0 py-24 hidden  xl:block">
          <DocsSidebar />
          {/* /.widget */}
        </aside>
        {/* /column */}
        <div className="xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!order-2">
          <section id="snippet-1" className="wrapper py-24">
            <h2 className="!mb-3 !leading-[1.35]">
              Frequently Asked Questions
            </h2>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-5">
              If you don't see an answer to your question here, please feel free
              to contact us with the links below:
            </p>
            <a
              href="https://themeforest.net/user/elite-themes24"
              className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mr-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
              target="_blank"
            >
              Contact Form
            </a>
            <a
              href="https://themeforest.net/item/sandbox-modern-multipurpose-tailwind-css-reactjs-template/57596129"
              className="btn btn-soft-primary !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.05)]"
              target="_blank"
            >
              Discussions Page
            </a>
            <div className="accordion accordion-wrapper !mt-10" id="accordion">
              <div className="card accordion-item !mb-5">
                <div
                  className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                  id="faq-3"
                >
                  <button
                    className="collapsed !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-collapse-3"
                    aria-expanded="true"
                    aria-controls="faq-collapse-3"
                  >
                    {" "}
                    Does Sandbox support RTL?{" "}
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="faq-collapse-3"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq-3"
                >
                  <div className="card-body p-[0_1.25rem_.25rem_2.35rem]">
                    <p>No, not currently Supported!</p>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.accordion-collapse */}
              </div>
              {/*/.accordion-item */}
              <div className="card accordion-item !mb-5">
                <div
                  className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                  id="faq-4"
                >
                  <button
                    className="collapsed !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-collapse-4"
                    aria-expanded="true"
                    aria-controls="faq-collapse-4"
                  >
                    {" "}
                    Why SVG icons appear black?{" "}
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="faq-collapse-4"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq-4"
                >
                  <div className="card-body p-[0_1.25rem_.25rem_2.35rem]">
                    <p>
                      Due to the{" "}
                      <a
                        href="https://en.wikipedia.org/wiki/Same-origin_policy"
                        target="_blank"
                        className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                      >
                        same-origin policy
                      </a>{" "}
                      SVGInject does not work when run from the local file
                      system in many browsers (Chrome, Safari). Please test on a
                      working web server.
                    </p>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.accordion-collapse */}
              </div>

              {/*/.accordion-item */}
              <div className="card accordion-item !mb-5">
                <div
                  className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                  id="faq-7"
                >
                  <button
                    className="collapsed !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-collapse-7"
                    aria-expanded="true"
                    aria-controls="faq-collapse-7"
                  >
                    {" "}
                    Does Sandbox require jQuery?{" "}
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="faq-collapse-7"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq-7"
                >
                  <div className="card-body p-[0_1.25rem_.25rem_2.35rem]">
                    <p>No Sandbox no longer requires jQuery.</p>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.accordion-collapse */}
              </div>
              {/*/.accordion-item */}
              <div className="card accordion-item !mb-5">
                <div
                  className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                  id="faq-8"
                >
                  <button
                    className="collapsed !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-collapse-8"
                    aria-expanded="true"
                    aria-controls="faq-collapse-8"
                  >
                    {" "}
                    Why am I getting an error while installing to Wordpress?{" "}
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="faq-collapse-8"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq-8"
                >
                  <div className="card-body p-[0_1.25rem_.25rem_2.35rem]">
                    <p>
                      Sandbox is an React Nextjs template, not a Wordpress
                      theme. So it cannot be installed in Wordpress.
                    </p>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.accordion-collapse */}
              </div>
              {/*/.accordion-item */}
              <div className="card accordion-item !mb-5">
                <div
                  className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                  id="faq-9"
                >
                  <button
                    className="collapsed !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-collapse-9"
                    aria-expanded="true"
                    aria-controls="faq-collapse-9"
                  >
                    {" "}
                    Why the image mask doesn't work on my copy of the item?{" "}
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="faq-collapse-9"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq-9"
                >
                  <div className="card-body p-[0_1.25rem_.25rem_2.35rem]">
                    <p>
                      There is a known browsers-spesific issue regarding
                      image-mask that prevents them from working on local
                      environments. (Running from a filesystem is now
                      restricted, so you can no longer reference one file from
                      another.) If you upload the template on a working server
                      image masks should work properly.
                    </p>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.accordion-collapse */}
              </div>
              {/*/.accordion-item */}
              <div className="card accordion-item !mb-5">
                <div
                  className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                  id="faq-11"
                >
                  <button
                    className="collapsed !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-collapse-11"
                    aria-expanded="true"
                    aria-controls="faq-collapse-11"
                  >
                    {" "}
                    How to add a link to dropdown parent?{" "}
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="faq-collapse-11"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq-11"
                >
                  <div className="card-body p-[0_1.25rem_.25rem_2.35rem]">
                    <p>Use the code below to add link to dropdown parent:</p>
                  </div>
                  {/*/.card-body */}
                  <CodeSnippetContainer>
                    <div className="code-wrapper relative !mb-0">
                      <div className="code-wrapper-inner">
                        <pre className="language-html !bg-[#21262c] opacity-100  rounded-br-[0.4rem] rounded-bl-[0.4rem]">
                          <code>
                            &lt;li className="nav-item dropdown dropdown-mega
                            parent-link"&gt;{"\n"}
                            {"  "}&lt;a className="nav-link" href="PARENT
                            LINK"&gt;Dropdown&lt;/a&gt;{"\n"}
                            {"  "}&lt;a className="nav-link dropdown-toggle"
                            href="#" data-bs-toggle="dropdown"&gt;&lt;span
                            className="visually-hidden"&gt;Toggle
                            Dropdown&lt;/span&gt;&lt;/a&gt;{"\n"}
                            {"  "}&lt;ul className="dropdown-menu mega-menu"&gt;
                            {"\n"}
                            {"    "}...{"\n"}
                            {"  "}&lt;/ul&gt;{"\n"}&lt;/li&gt;
                          </code>
                        </pre>
                      </div>
                    </div>
                  </CodeSnippetContainer>
                </div>
                {/*/.accordion-collapse */}
              </div>
              {/*/.accordion-item */}
              <div className="card accordion-item !mb-5">
                <div
                  className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                  id="faq-12"
                >
                  <button
                    className="collapsed !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-collapse-12"
                    aria-expanded="true"
                    aria-controls="faq-collapse-12"
                  >
                    {" "}
                    What font is used on the Sandbox logo?{" "}
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="faq-collapse-12"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq-12"
                >
                  <div className="card-body p-[0_1.25rem_.25rem_2.35rem]">
                    <p>
                      The font used in the Sandbox logo is{" "}
                      <a
                        className="external pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom my-0"
                        href="https://fonts.google.com/specimen/Manrope"
                        target="_blank"
                      >
                        Manrope
                      </a>
                    </p>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.accordion-collapse */}
              </div>

              {/*/.accordion-item */}
            </div>
            {/*/.accordion */}
          </section>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
    </div>
  );
}
