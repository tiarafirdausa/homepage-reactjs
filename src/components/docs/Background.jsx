import React from "react";
import DocsSidebar from "./DocsSidebar";
import CodeSnippetContainer from "../common/CodeSnippetContainer";

export default function Background() {
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
                    href="#snippet-0"
                  >
                    Image
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-1"
                  >
                    Dark
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-2"
                  >
                    Gradient
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-3"
                  >
                    Color
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-4"
                  >
                    Soft
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-5"
                  >
                    Pale
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-6"
                  >
                    Pattern
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-7"
                  >
                    Video
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
          <section id="snippet-0" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Image Background</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <section
                  className="wrapper image-wrapper bg-image bg-overlay !text-white bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]"
                  style={{ backgroundImage: "url(/assets/img/photos/bg1.jpg)" }}
                >
                  <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
                    <h2 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3]  !mb-0 !text-center !text-white">
                      Content goes here
                    </h2>
                  </div>
                  {/* /.container */}
                </section>
                {/* /section */}
                <p className="!mt-6">
                  <code className="code">.image-wrapper</code> class enables{" "}
                  <code className="code">background-attachment: fixed;</code> to
                  disable image from scrolling with the page; along with{" "}
                  <code className="code">background-size: cover;</code> which
                  scales the image as large as possible to fill the container.
                  You can use the following classes along with{" "}
                  <code className="code">.image-wrapper</code> to change these
                  behaviors:
                </p>
                <ul className="pl-0 list-none !mb-6">
                  <li>
                    <code className="code !bg-[#e0e9fa]">.bg-auto</code>{" "}
                    Disables fixed background, changes{" "}
                    <mark className="doc">background-size</mark> to{" "}
                    <mark className="doc">auto</mark>.
                  </li>
                  <li>
                    <code className="code !bg-[#e0e9fa]">.bg-full</code>{" "}
                    Disables fixed background, changes{" "}
                    <mark className="doc">background-size</mark> to{" "}
                    <mark className="doc">100%</mark>.
                  </li>
                  <li>
                    <code className="code !bg-[#e0e9fa]">.bg-cover</code>{" "}
                    Disables fixed background, but keeps{" "}
                    <mark className="doc">background-size</mark> as{" "}
                    <mark className="doc">cover</mark>.
                  </li>
                </ul>
                <p>
                  To add overlay on the background images use{" "}
                  <code className="code">.bg-overlay</code> class:
                </p>
                <ul className="pl-0 list-none  !mb-0">
                  <li>
                    <code className="code !bg-[#e0e9fa]">.bg-overlay</code> Adds
                    50% overlay.{" "}
                  </li>
                  <li>
                    <code className="code !bg-[#e0e9fa]">
                      .bg-overlay.bg-overlay-300
                    </code>{" "}
                    Adds 30% overlay.
                  </li>
                  <li>
                    <code className="code !bg-[#e0e9fa]">
                      .bg-overlay.bg-overlay-400
                    </code>{" "}
                    Adds 40% overlay.
                  </li>
                </ul>
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-0"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-0"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          &lt;section className="wrapper image-wrapper bg-image
                          bg-overlay !text-white"
                          data-image-src="/assets/img/photos/bg1.jpg"&gt;&lt;/section&gt;
                          {"\n"}
                          {"  "}
                          {"\n"}&lt;section className="wrapper image-wrapper
                          bg-image bg-full bg-overlay !text-white"
                          data-image-src="/assets/img/photos/bg1.jpg"&gt;&lt;/section&gt;
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
          <section id="snippet-1" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Dark Background</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <section className="wrapper  bg-[#21262c] opacity-100  !text-white">
                  <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
                    <h2 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3]  !mb-0 !text-center !text-white">
                      Content goes here
                    </h2>
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
                          &lt;section className="wrapper{"  "}bg-[#21262c]
                          opacity-100
                          {"  "}!text-white"&gt;&lt;/section&gt;
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
            <h2 className="!mb-3 !leading-[1.35]">Gradient Background</h2>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium">
              Available options:
            </p>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium">
              <code className="code">.gradient-1</code>,{" "}
              <code className="code">.gradient-2</code>,{" "}
              <code className="code">.gradient-3</code>,{" "}
              <code className="code">.gradient-4</code>,{" "}
              <code className="code">.gradient-5</code>,{" "}
              <code className="code">.gradient-6</code>,{" "}
              <code className="code">.gradient-7</code>,{" "}
              <code className="code">.gradient-8</code>,{" "}
            </p>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
              <code className="code">bg-gradient-primary</code>,{" "}
              <code className="code">bg-gradient-aqua</code>,{" "}
              <code className="code">bg-gradient-green</code>,{" "}
              <code className="code">bg-gradient-leaf</code>,{" "}
              <code className="code">bg-gradient-navy</code>,{" "}
              <code className="code">bg-gradient-orange</code>,{" "}
              <code className="code">bg-gradient-pink</code>,{" "}
              <code className="code">bg-gradient-purple</code>,{" "}
              <code className="code">bg-gradient-red</code>,{" "}
              <code className="code">bg-gradient-violet</code>,{" "}
              <code className="code">bg-gradient-yellow</code>,{" "}
              <code className="code">bg-gradient-fuchsia</code>,{" "}
              <code className="code">bg-gradient-sky</code>,{" "}
              <code className="code">bg-gradient-grape</code>,{" "}
              <code className="code">bg-gradient-reverse-primary</code>,{" "}
              <code className="code">bg-gradient-reverse-aqua</code>,{" "}
              <code className="code">bg-gradient-reverse-green</code>,{" "}
              <code className="code">bg-gradient-reverse-leaf</code>,{" "}
              <code className="code">bg-gradient-reverse-navy</code>,{" "}
              <code className="code">bg-gradient-reverse-orange</code>,{" "}
              <code className="code">bg-gradient-reverse-pink</code>,{" "}
              <code className="code">bg-gradient-reverse-purple</code>,{" "}
              <code className="code">bg-gradient-reverse-red</code>,{" "}
              <code className="code">bg-gradient-reverse-violet</code>,{" "}
              <code className="code">bg-gradient-reverse-yellow</code>,{" "}
              <code className="code">bg-gradient-reverse-fuchsia</code>,{" "}
              <code className="code">bg-gradient-reverse-sky</code>,{" "}
              <code className="code">bg-gradient-reverse-grape</code>,{" "}
              <code className="code">bg-gradient-blend</code>.
            </p>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <section className="wrapper gradient-3 !text-white !mb-5">
                  <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
                    <h2 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3]  !mb-0 !text-center !text-white">
                      Content goes here
                    </h2>
                  </div>
                  {/* /.container */}
                </section>
                {/* /section */}
                <section className="wrapper bg-gradient-primary !mb-5">
                  <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
                    <h2 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3]  !mb-0 !text-center">
                      Content goes here
                    </h2>
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
                          &lt;section className="wrapper gradient-3
                          !text-white"&gt;&lt;/section&gt;{"\n"}
                          {"  "}
                          {"\n"}&lt;section className="wrapper
                          bg-gradient-primary !text-white"&gt;&lt;/section&gt;
                          {"\n"}
                          {"  "}
                          {"\n"}&lt;section className="wrapper
                          bg-gradient-reverse-primary
                          !text-white"&gt;&lt;/section&gt;{"\n"}
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
            <h2 className="!mb-3 !leading-[1.35]">Color Background</h2>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium">
              Available options:
            </p>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
              <code className="code">bg-[#ffffff]</code>,{" "}
              <code className="code">bg-[#3f78e0]</code>,{" "}
              <code className="code">bg-[#54a8c7]</code>,{" "}
              <code className="code">bg-[#45c4a0]</code>,{" "}
              <code className="code">bg-[#7cb798]</code>,{" "}
              <code className="code">bg-[#343f52]</code>,{" "}
              <code className="code">bg-[#f78b77]</code>,{" "}
              <code className="code">bg-[#d16b86]</code>,{" "}
              <code className="code">bg-[#747ed1]</code>,{" "}
              <code className="code">bg-[#e2626b]</code>,{" "}
              <code className="code">bg-[#a07cc5]</code>,{" "}
              <code className="code">bg-[#fab758]</code>,{" "}
              <code className="code">bg-[#e668b3]</code>,{" "}
              <code className="code">bg-[#5eb9f0]</code>,{" "}
              <code className="code">bg-[#605dba]</code>.
            </p>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <section className="wrapper !bg-[rgba(63,120,224)] opacity-100 !text-white">
                  <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
                    <h2 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3]  !mb-0 !text-center !text-white">
                      Content goes here
                    </h2>
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
                          &lt;section className="wrapper !bg-[rgba(63,120,224)]
                          opacity-100 !text-white"&gt;&lt;/section&gt;
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
            <h2 className="!mb-3 !leading-[1.35]">Soft Background</h2>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium">
              Available options:
            </p>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
              <code className="code">!bg-[#edf2fc]</code>,{" "}
              <code className="code">bg-[#eff7fa]</code>,{" "}
              <code className="code">bg-[#edf9f6]</code>,{" "}
              <code className="code">bg-[#f3f8f5]</code>,{" "}
              <code className="code">bg-[#ecedef]</code>,{" "}
              <code className="code">bg-[#fef4f2]</code>,{" "}
              <code className="code">bg-[#fbf1f4]</code>,{" "}
              <code className="code">bg-[#f6f3f9]</code>,{" "}
              <code className="code">bg-[#fcf0f1]</code>,{" "}
              <code className="code">bg-[#f6f3f9]</code>,{" "}
              <code className="code">bg-[#fef3e4]</code>,{" "}
              <code className="code">bg-[#fdf1f8]</code>,{" "}
              <code className="code">bg-[#f0f8fe]</code>,{" "}
              <code className="code">bg-[#f0f0f8]</code>.
            </p>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <section className="wrapper !bg-[#edf2fc]">
                  <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
                    <h2 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3]  !mb-0 !text-center">
                      Content goes here
                    </h2>
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
                          &lt;section className="wrapper
                          !bg-[#edf2fc]"&gt;&lt;/section&gt;
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
          <section id="snippet-5" className="wrapper pt-24">
            <h2 className="!mb-3 !leading-[1.35]">Pale Background</h2>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium">
              Available options:
            </p>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
              <code className="code">bg-[#e0e9fa]</code>,{" "}
              <code className="code">bg-[#e4f1f6]</code>,{" "}
              <code className="code">bg-[#e1f6f0]</code>,{" "}
              <code className="code">!bg-[#eaf3ef]</code>,{" "}
              <code className="code">bg-pale-navy</code>,{" "}
              <code className="code">bg-[#f78b77]</code>,{" "}
              <code className="code">bg-[#f8e7ec]</code>,{" "}
              <code className="code">bg-[#e9eaf8]</code>,{" "}
              <code className="code">!bg-[#fae6e7]</code>,{" "}
              <code className="code">bg-[#f0eaf6]</code>,{" "}
              <code className="code">!bg-[#fef3e4]</code>,{" "}
              <code className="code">bg-[#fbe7f3]</code>,{" "}
              <code className="code">bg-[#e5f4fd]</code>,{" "}
              <code className="code">bg-[#e6e5f4]</code>.
            </p>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <section className="wrapper !bg-[#e0e9fa]">
                  <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
                    <h2 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3]  !mb-0 !text-center">
                      Content goes here
                    </h2>
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
                          &lt;section className="wrapper
                          !bg-[#e0e9fa]"&gt;&lt;/section&gt;
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
          <section id="snippet-6" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Pattern Background</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <section
                  className="wrapper bg-repeat bg-fixed bg-image !text-white"
                  style={{ backgroundImage: "url(/assets/img/pattern.png)" }}
                >
                  <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
                    <h2 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3]  !mb-0 !text-center !text-white">
                      Content goes here
                    </h2>
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
                    href="#collapse-6"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-6"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          &lt;section className="wrapper bg-repeat bg-fixed
                          bg-image !text-white"
                          data-image-src="/assets/img/pattern.png"&gt;&lt;/section&gt;
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
          <section id="snippet-7" className="wrapper py-24">
            <h2 className="!mb-5 !leading-[1.35]">Video Background</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <section className="relative overflow-hidden bg-overlay ratio ratio-16x9 aspect-video w-full before:block before:content-[''] before:pt-[56.25%] after:content-[''] after:block after:h-full after:w-full after:absolute after:z-[1] after:left-0 after:top-0 after:bg-[rgba(30,34,40,.4)]">
                  <video
                    className=" object-cover block absolute h-full w-full max-w-full left-0 top-0 bg-black"
                    poster="/assets/img/photos/movie.jpg"
                    src="/assets/media/movie.mp4"
                    autoPlay
                    loop
                    playsInline
                    muted
                  />
                  <div className="video-content absolute z-[2] w-full h-full flex items-center justify-center text-center flex-col left-0 top-0">
                    <div className="container !text-center">
                      <h2 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3]  !mb-0 !text-white !text-center">
                        Content goes here
                      </h2>
                    </div>
                    {/* /.container */}
                  </div>
                  {/* /.video-content */}
                </section>
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-7"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-7"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          &lt;section className="video-wrapper bg-overlay ratio
                          ratio-16x9 aspect-video"&gt;{"\n"}
                          {"  "}&lt;video poster="/assets/img/photos/movie2.jpg"
                          src="/assets/media/movie2.mp4" autoplay loop
                          playsinline muted&gt;&lt;/video&gt;{"\n"}
                          {"  "}&lt;div className="video-content"&gt;{"\n"}
                          {"    "}&lt;div className="container !text-center"&gt;
                          {"\n"}
                          {"      "}&lt;h2
                          className="text-[calc(1.285rem_+_0.42vw)] font-bold
                          xl:!text-[1.6rem] !leading-[1.3]{"  "}!mb-0
                          !text-white !text-center"&gt;Content goes
                          here&lt;/h2&gt;
                          {"\n"}
                          {"    "}&lt;/div&gt;{"\n"}
                          {"    "}&lt;!-- /.container --&gt;{"\n"}
                          {"  "}&lt;/div&gt;{"\n"}
                          {"  "}&lt;!-- /.video-content --&gt;{"\n"}
                          &lt;/section&gt;
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
