import React from "react";
import DocsSidebar from "./DocsSidebar";

import CodeSnippetContainer from "../common/CodeSnippetContainer";
export default function Dividers() {
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
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]  active"
                    href="#snippet-1"
                  >
                    Borders
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-2"
                  >
                    Angles
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-3"
                  >
                    Waves
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-4"
                  >
                    Vertical
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
            <h2 className="!mb-5 !leading-[1.35]">Borders</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <hr className="!my-8" />
                <hr className="double !my-[3.5rem]" />
                <div className="divider-icon !mt-8 !mb-20">
                  <i className="uil uil-heart before:content-['\eb66']" />
                </div>
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
                          &lt;!-- Simple --&gt;{"\n"}&lt;hr className="my-8"
                          /&gt;
                          {"\n"}
                          {"\n"}&lt;!-- Double --&gt;{"\n"}&lt;hr
                          className="double my-8" /&gt;{"\n"}
                          {"\n"}&lt;!-- Icon --&gt;{"\n"}&lt;div
                          className="divider-icon my-8"&gt;&lt;i className="uil
                          uil-heart"&gt;&lt;/i&gt;&lt;/div&gt;{"\n"}
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
            <h2 className="!mb-5 !leading-[1.35]">Angles</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <figure className="relative !mb-10">
                  <img
                    className="max-w-full h-auto"
                    alt="image"
                    src="/assets/img/docs/angle-lower-start.jpg"
                    width="850"
                    height="271"
                  />
                  <span
                    className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !text-[#343f52]"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    Lower Start
                  </span>
                </figure>
                <figure className="!relative">
                  <img
                    className="max-w-full h-auto"
                    alt="image"
                    src="/assets/img/docs/angle-lower-end.jpg"
                    width="850"
                    height="271"
                  />
                  <span
                    className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !text-[#343f52]"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    Lower End
                  </span>
                </figure>
                <figure className="relative !mb-10">
                  <img
                    className="max-w-full h-auto"
                    alt="image"
                    src="/assets/img/docs/angle-upper-start.jpg"
                    width="850"
                    height="271"
                  />
                  <span
                    className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !text-[#343f52]"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    Upper Start
                  </span>
                </figure>
                <figure className="relative !mb-10">
                  <img
                    className="max-w-full h-auto"
                    alt="image"
                    src="/assets/img/docs/angle-upper-end.jpg"
                    width="850"
                    height="271"
                  />
                  <span
                    className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !text-[#343f52]"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    Upper End
                  </span>
                </figure>
                <figure className="relative !mb-10">
                  <img
                    className="max-w-full h-auto"
                    alt="image"
                    src="/assets/img/docs/angle-upper-end-lower-start.jpg"
                    width="850"
                    height="337"
                  />
                  <span
                    className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !text-[#343f52]"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    Upper End &amp; Lower Start
                  </span>
                </figure>
                <figure className="!relative">
                  <img
                    className="max-w-full h-auto"
                    alt="image"
                    src="/assets/img/docs/angle-upper-start-lower-end.jpg"
                    width="850"
                    height="339"
                  />
                  <span
                    className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !text-[#343f52]"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    Upper Start &amp; Lower End
                  </span>
                </figure>
                <figure className="!relative">
                  <img
                    className="max-w-full h-auto"
                    alt="image"
                    src="/assets/img/docs/angle-upper-start-lower-start.jpg"
                    width="850"
                    height="339"
                  />
                  <span
                    className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !text-[#343f52]"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    Upper Start &amp; Lower Start
                  </span>
                </figure>
                <figure className="!relative">
                  <img
                    className="max-w-full h-auto"
                    alt="image"
                    src="/assets/img/docs/angle-upper-end-lower-end.jpg"
                    width="850"
                    height="339"
                  />
                  <span
                    className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !text-[#343f52]"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    Upper End &amp; Lower End
                  </span>
                </figure>
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
                          &lt;!-- Lower Start --&gt;{"\n"}&lt;section
                          className="wrapper !bg-[#edf2fc] angled
                          lower-start"&gt;&lt;/section&gt;{"\n"} {"\n"}&lt;!--
                          Lower End --&gt; {"\n"}&lt;section className="wrapper
                          !bg-[#edf2fc] angled lower-end"&gt;&lt;/section&gt;
                          {"\n"} {"\n"}&lt;!-- Upper Start --&gt; {"\n"}
                          &lt;section className="wrapper !bg-[#edf2fc] angled
                          upper-start"&gt;&lt;/section&gt;{"\n"}
                          {"\n"}&lt;!-- Upper End --&gt;{"\n"}&lt;section
                          className="wrapper !bg-[#edf2fc] angled
                          upper-end"&gt;&lt;/section&gt;{"\n"}
                          {"\n"}&lt;!-- Upper End &amp; Lower Start --&gt;{"\n"}
                          &lt;section className="wrapper !bg-[#edf2fc] angled
                          upper-end lower-start"&gt;&lt;/section&gt;{"\n"}
                          {"\n"}&lt;!-- Upper Start &amp; Lower End --&gt;{"\n"}
                          &lt;section className="wrapper !bg-[#edf2fc] angled
                          upper-start lower-end"&gt;&lt;/section&gt;{"\n"}
                          {"\n"}&lt;!-- Upper Start &amp; Lower Start --&gt;
                          {"\n"}
                          &lt;section className="wrapper !bg-[#edf2fc] angled
                          upper-start lower-start"&gt;&lt;/section&gt;{"\n"}
                          {"\n"}&lt;!-- Upper End &amp; Lower End --&gt;{"\n"}
                          &lt;section className="wrapper !bg-[#edf2fc] angled
                          upper-end lower-end"&gt;&lt;/section&gt;
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
            <h2 className="!mb-5 !leading-[1.35]">Waves</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <section className="wrapper !bg-[#edf2fc] !mb-5">
                  <div className="container py-5 md:!py-7">
                    <h2 className="h6 !text-center  !mb-0">Wave 1</h2>
                  </div>
                  <div className="overflow-hidden">
                    <div className="divider !text-white mx-[-0.5rem]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 70"
                      >
                        <path
                          fill="currentColor"
                          d="M1440,70H0V45.16a5762.49,5762.49,0,0,1,1440,0Z"
                        />
                      </svg>
                    </div>
                  </div>
                </section>
                {/* /section */}
                <section className="wrapper !bg-[#edf2fc] !mb-5">
                  <div className="container py-5 md:!py-7">
                    <h2 className="h6 !text-center  !mb-0">Wave 2</h2>
                  </div>
                  <div className="overflow-hidden">
                    <div className="divider !text-white mx-[-0.5rem]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 60"
                      >
                        <path
                          fill="currentColor"
                          d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z"
                        />
                      </svg>
                    </div>
                  </div>
                </section>
                {/* /section */}
                <section className="wrapper !bg-[#edf2fc] !mb-5">
                  <div className="container py-5 md:!py-7">
                    <h2 className="h6 !text-center  !mb-0">Wave 3</h2>
                  </div>
                  <div className="overflow-hidden">
                    <div className="divider !text-white mx-[-0.5rem]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 92.26"
                      >
                        <path
                          fill="currentColor"
                          d="M1206,21.2c-60-5-119-36.92-291-5C772,51.11,768,48.42,708,43.13c-60-5.68-108-29.92-168-30.22-60,.3-147,27.93-207,28.23-60-.3-122-25.94-182-36.91S30,5.93,0,16.2V92.26H1440v-87l-30,5.29C1348.94,22.29,1266,26.19,1206,21.2Z"
                        />
                      </svg>
                    </div>
                  </div>
                </section>
                {/* /section */}
                <section className="wrapper !bg-[#edf2fc] !mb-5">
                  <div className="container py-5 md:!py-7">
                    <h2 className="h6 !text-center  !mb-0">Wave 4</h2>
                  </div>
                  <div className="overflow-hidden">
                    <div className="divider !text-white mx-[-0.5rem]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 100"
                      >
                        <path
                          fill="currentColor"
                          d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
                        />
                      </svg>
                    </div>
                  </div>
                </section>
                {/* /section */}
                <section className="wrapper !bg-[#edf2fc] !mb-5">
                  <div className="container py-5 md:!py-7">
                    <h2 className="h6 !text-center  !mb-0">Wave 5</h2>
                  </div>
                  <div className="overflow-hidden">
                    <div className="divider !text-white mx-[-0.5rem]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 100"
                      >
                        <path
                          fill="currentColor"
                          d="M1260.2,37.86c-60-10-120-20.07-180-16.76-60,3.71-120,19.77-180,18.47-60-1.71-120-21.78-180-31.82s-120-10-180-1.7c-60,8.73-120,24.79-180,28.5-60,3.31-120-6.73-180-11.74s-120-5-150-5H0V100H1440V49.63C1380.07,57.9,1320.13,47.88,1260.2,37.86Z"
                        />
                      </svg>
                    </div>
                  </div>
                </section>
                {/* /section */}
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
                          &lt;!-- Wave 1 --&gt;{"\n"}&lt;div
                          className="overflow-hidden"&gt;{"\n"}
                          {"  "}&lt;div className="divider !text-white
                          mx-[-0.5rem]"&gt;
                          {"\n"}
                          {"    "}&lt;svg xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1440 70"&gt;&lt;path fill="currentColor"
                          d="M1440,70H0V45.16a5762.49,5762.49,0,0,1,1440,0Z"/&gt;&lt;/svg&gt;
                          {"\n"}
                          {"  "}&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;!--
                          /.overflow-hidden --&gt;{"\n"}
                          {"    "}
                          {"\n"}&lt;!-- Wave 2 --&gt;{"\n"}&lt;div
                          className="overflow-hidden"&gt;{"\n"}
                          {"  "}&lt;div className="divider !text-white
                          mx-[-0.5rem]"&gt;
                          {"\n"}
                          {"    "}&lt;svg xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1440 60"&gt;&lt;path fill="currentColor"
                          d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z"/&gt;&lt;/svg&gt;
                          {"\n"}
                          {"  "}&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;!--
                          /.overflow-hidden --&gt;{"\n"}
                          {"    "}
                          {"\n"}&lt;!-- Wave 3 --&gt;{"\n"}&lt;div
                          className="overflow-hidden"&gt;{"\n"}
                          {"  "}&lt;div className="divider !text-white
                          mx-[-0.5rem]"&gt;
                          {"\n"}
                          {"    "}&lt;svg xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1440 92.26"&gt;&lt;path
                          fill="currentColor"
                          d="M1206,21.2c-60-5-119-36.92-291-5C772,51.11,768,48.42,708,43.13c-60-5.68-108-29.92-168-30.22-60,.3-147,27.93-207,28.23-60-.3-122-25.94-182-36.91S30,5.93,0,16.2V92.26H1440v-87l-30,5.29C1348.94,22.29,1266,26.19,1206,21.2Z"/&gt;&lt;/svg&gt;
                          {"\n"}
                          {"  "}&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;!--
                          /.overflow-hidden --&gt;{"\n"}
                          {"    "}
                          {"\n"}&lt;!-- Wave 4 --&gt;{"\n"}&lt;div
                          className="overflow-hidden"&gt;{"\n"}
                          {"  "}&lt;div className="divider !text-white
                          mx-[-0.5rem]"&gt;
                          {"\n"}
                          {"    "}&lt;svg xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1440 100"&gt;&lt;path fill="currentColor"
                          d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"/&gt;&lt;/svg&gt;
                          {"\n"}
                          {"  "}&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;!--
                          /.overflow-hidden --&gt;{"\n"}
                          {"    "}
                          {"\n"}&lt;!-- Wave 5 --&gt;{"\n"}&lt;div
                          className="overflow-hidden"&gt;{"\n"}
                          {"  "}&lt;div className="divider !text-white
                          mx-[-0.5rem]"&gt;
                          {"\n"}
                          {"    "}&lt;svg xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1440 100"&gt;&lt;path fill="currentColor"
                          d="M1260.2,37.86c-60-10-120-20.07-180-16.76-60,3.71-120,19.77-180,18.47-60-1.71-120-21.78-180-31.82s-120-10-180-1.7c-60,8.73-120,24.79-180,28.5-60,3.31-120-6.73-180-11.74s-120-5-150-5H0V100H1440V49.63C1380.07,57.9,1320.13,47.88,1260.2,37.86Z"/&gt;&lt;/svg&gt;
                          {"\n"}
                          {"  "}&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;!--
                          /.overflow-hidden --&gt;
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
          <section id="snippet-4" className="wrapper py-24">
            <h2 className="!mb-5 !leading-[1.35]">Vertical</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <section className="wrapper  bg-[rgba(246,247,249,1)]  !relative min-h-[30vh] lg:!flex items-center !mb-10">
                  <div
                    className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full xl:!absolute lg:!absolute top-0  !right-0 image-wrapper bg-image bg-cover !h-full bg-[center_center] bg-no-repeat !bg-scroll z-0"
                    data-image-src="/assets/img/photos/bg39.jpg"
                  >
                    <div className="divider !text-[#f6f7f9] divider-v-start hidden xl:block  lg:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 54 1200"
                      >
                        <g />
                        <g>
                          <g>
                            <polygon
                              fill="currentColor"
                              points="6 0 0 0 0 1200 6 1200 54 0 6 0"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  {/*/column */}
                  <div className="container">
                    <div className="flex flex-wrap mx-0">
                      <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full">
                        <div className="pt-[4.5rem] pb-20 xl:pb-28 lg:pb-28 md:pb-28 lg:!py-24 xl:!py-24 xl:!pr-20 lg:!pr-20 !relative">
                          <span
                            className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !text-[#343f52]"
                            style={{
                              position: "absolute",
                              left: "50%",
                              top: "50%",
                              transform: "translate(-50%, -50%)",
                            }}
                          >
                            Start
                          </span>
                        </div>
                      </div>
                      {/*/column */}
                    </div>
                    {/*/.row */}
                  </div>
                  {/* /.container */}
                </section>
                {/* /section */}
                <section className="wrapper  bg-[rgba(246,247,249,1)]  !relative min-h-[30vh] xl:!flex lg:!flex items-center">
                  <div
                    className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full xl:!absolute lg:!absolute top-0 start-0 image-wrapper bg-image bg-cover !h-full bg-[center_center] bg-no-repeat !bg-scroll z-0"
                    data-image-src="/assets/img/photos/bg38.jpg"
                  >
                    <div className="divider !text-[#f6f7f9] divider-v-end hidden xl:block lg:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 54 1200"
                      >
                        <g />
                        <g>
                          <g>
                            <polygon
                              fill="currentColor"
                              points="48 0 0 0 48 1200 54 1200 54 0 48 0"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  {/*/column */}
                  <div className="container">
                    <div className="flex flex-wrap mx-0">
                      <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full !ml-auto">
                        <div className="pt-[4.5rem] pb-20 xl:pb-28 lg:pb-28 md:pb-28 xl:!py-24 lg:!py-24 lg:!pl-20 xxl:!pr-24 !relative">
                          <span
                            className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !text-[#343f52]"
                            style={{
                              position: "absolute",
                              left: "50%",
                              top: "50%",
                              transform: "translate(-50%, -50%)",
                            }}
                          >
                            End
                          </span>
                        </div>
                      </div>
                      {/*/column */}
                    </div>
                    {/*/.row */}
                  </div>
                  {/* /.container */}
                </section>
                {/* /section */}
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
                          &lt;!-- Start --&gt;{"\n"}&lt;section
                          className="wrapper
                          {"  "}
                          bg-[rgba(246,247,249,1)]{"  "}!relative min-h-[60vh]
                          lg:!flex items-center !mb-10"&gt;{"\n"}
                          {"  "}&lt;div className="lg:w-6/12 flex-[0_0_auto]
                          !px-[15px] max-w-full lg:!absolute top-0{"  "}!right-0
                          image-wrapper bg-image bg-cover !h-full"
                          data-image-src="/assets/img/photos/bg39.jpg"&gt;{"\n"}
                          {"    "}&lt;div className="divider !text-[#f6f7f9]
                          divider-v-start hidden{"  "}lg:block"&gt;{"\n"}
                          {"      "}&lt;svg xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 54 1200"&gt;&lt;g
                          /&gt;&lt;g&gt;&lt;g&gt;&lt;polygon fill="currentColor"
                          points="6 0 0 0 0 1200 6 1200 54 0 6
                          0"/&gt;&lt;/g&gt;&lt;/g&gt;&lt;/svg&gt;{"\n"}
                          {"    "}&lt;/div&gt;{"\n"}
                          {"  "}&lt;/div&gt;{"\n"}
                          {"  "}&lt;!--/column --&gt;{"\n"}
                          {"  "}&lt;div className="container"&gt;{"\n"}
                          {"    "}&lt;div className="row mx-0"&gt;{"\n"}
                          {"      "}&lt;div className="lg:w-6/12 flex-[0_0_auto]
                          !px-[15px] max-w-full"&gt;{"\n"}
                          {"        "}&lt;div className="pt-[4.5rem] pb-20
                          xl:pb-28 lg:pb-28 md:pb-28 lg:!py-24 xl:!pr-20
                          lg:!pr-20 !relative"&gt;{"\n"}
                          {"          "}Content here{"\n"}
                          {"        "}&lt;/div&gt;{"\n"}
                          {"      "}&lt;/div&gt;{"\n"}
                          {"      "}&lt;!--/column --&gt;{"\n"}
                          {"    "}&lt;/div&gt;{"\n"}
                          {"    "}&lt;!--/.row --&gt;{"\n"}
                          {"  "}&lt;/div&gt;{"\n"}
                          {"  "}&lt;!-- /.container --&gt;{"\n"}&lt;/section&gt;
                          {"\n"}
                          &lt;!-- /section --&gt;{"\n"}
                          {"\n"}
                          {"\n"}&lt;!-- End --&gt;{"\n"}&lt;section
                          className="wrapper
                          {"  "}bg-[rgba(246,247,249,1)]{"  "}!relative
                          min-h-[60vh] lg:!flex items-center"&gt;{"\n"}&lt;div
                          className="lg:w-6/12 flex-[0_0_auto] !px-[15px]
                          max-w-full lg:!absolute top-0 start-0 image-wrapper
                          bg-image bg-cover !h-full"
                          data-image-src="/assets/img/photos/bg38.jpg"&gt;{"\n"}
                          {"  "}&lt;div className="divider !text-[#f6f7f9]
                          divider-v-end hidden{"  "}lg:block"&gt;{"\n"}
                          {"    "}&lt;svg xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 54
                          1200"&gt;&lt;g/&gt;&lt;g&gt;&lt;g&gt;&lt;polygon
                          fill="currentColor" points="48 0 0 0 48 1200 54 1200
                          54 0 48 0"/&gt;&lt;/g&gt;&lt;/g&gt;&lt;/svg&gt;{"\n"}
                          {"  "}&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}
                          &lt;!--/column --&gt;{"\n"}&lt;div
                          className="container"&gt;{"\n"}
                          {"  "}&lt;div className="row mx-0"&gt;{"\n"}
                          {"    "}&lt;div className="lg:w-6/12 flex-[0_0_auto]
                          !px-[15px] max-w-full !ml-auto"&gt;{"\n"}
                          {"      "}&lt;div className="pt-[4.5rem] pb-20
                          xl:pb-28 lg:pb-28 md:pb-28 lg:!py-24 lg:!pl-20
                          xxl:!pr-24 !relative"&gt;{"\n"}
                          {"        "}Content Here{"\n"}
                          {"      "}&lt;/div&gt;{"\n"}
                          {"    "}&lt;/div&gt;{"\n"}
                          {"    "}&lt;!--/column --&gt;{"\n"}
                          {"  "}&lt;/div&gt;{"\n"}
                          {"  "}&lt;!--/.row --&gt;{"\n"}&lt;/div&gt;{"\n"}
                          &lt;!-- /.container --&gt;{"\n"}&lt;/section&gt;{"\n"}
                          &lt;!-- /section --&gt;
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
