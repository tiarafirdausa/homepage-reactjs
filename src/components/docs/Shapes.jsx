import React from "react";
import DocsSidebar from "./DocsSidebar";

import CodeSnippetContainer from "../common/CodeSnippetContainer";
import { Link } from "react-router-dom";
export default function Shapes() {
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
                    Dot
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-2"
                  >
                    Line
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-3"
                  >
                    Solid
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-4"
                  >
                    SVG
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-5"
                  >
                    Doodles
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
            <h2 className="!mb-5 !leading-[1.35]">Dot</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] g-6 !mt-[-30px]">
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="shape bg-dot opacity-50 yellow !w-[8rem] !h-[8rem] bg-[radial-gradient(#fab758_2px,transparent_2.5px)]" />
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="shape bg-dot opacity-50 blue !w-[8rem] !h-[8rem] bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)]" />
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="shape bg-dot opacity-50 red !w-[8rem] !h-[8rem] bg-[radial-gradient(#e2626b_2px,transparent_2.5px)]" />
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="shape bg-dot opacity-50 green !w-[8rem] !h-[8rem] bg-[radial-gradient(#45c4a0_2px,transparent_2.5px)]" />
                  </div>
                  {/* /column */}
                </div>
                {/* /.row */}
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
                          {"\n"}
                          {"                      "}&lt;div className="shape
                          bg-dot opacity-50 yellow !w-[8rem] !h-[8rem]
                          bg-[radial-gradient(#fab758_2px,transparent_2.5px)]"&gt;&lt;/div&gt;
                          {"\n"}
                          {"  "}
                          {"\n"}
                          {"                      "}&lt;div className="shape
                          bg-dot opacity-50 blue !w-[8rem] !h-[8rem]
                          bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)]"&gt;&lt;/div&gt;
                          {"\n"}
                          {"  "}
                          {"\n"}
                          {"                      "}&lt;div className="shape
                          bg-dot opacity-50 red !w-[8rem] !h-[8rem]
                          bg-[radial-gradient(#e2626b_2px,transparent_2.5px)]"&gt;&lt;/div&gt;
                          {"\n"}
                          {"  "}
                          {"\n"}
                          {"                      "}&lt;div className="shape
                          bg-dot opacity-50 green !w-[8rem] !h-[8rem]
                          bg-[radial-gradient(#45c4a0_2px,transparent_2.5px)]"&gt;&lt;/div&gt;
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
            <h2 className="!mb-5 !leading-[1.35]">Line</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] g-6 !mt-[-30px]">
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="shape bg-line opacity-50 yellow !w-[9rem] !h-[8rem]" />
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="shape bg-line opacity-50 blue !w-[8rem] !h-[8rem]" />
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="shape bg-line opacity-50 !rounded-[50%] red !w-[8rem] !h-[8rem]" />
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="shape bg-line opacity-50 !rounded-[50%] green !w-[8rem] !h-[8rem]" />
                  </div>
                  {/* /column */}
                </div>
                {/* /.row */}
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
                          &lt;div className="shape bg-line yellow !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}&lt;div
                          className="shape bg-line orange !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape bg-line red !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}&lt;div
                          className="shape bg-line pink !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="shape bg-line violet !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}&lt;div
                          className="shape bg-line purple !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape bg-line blue !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}&lt;div
                          className="shape bg-line aqua !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="shape bg-line green !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}&lt;div
                          className="shape bg-line leaf !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="shape bg-line navy !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}&lt;div
                          className="shape bg-line fuchsia !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape bg-line sky !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}&lt;div
                          className="shape bg-line grape !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="shape bg-line ash !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}&lt;div
                          className="shape bg-line white !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}
                          {"                      "}
                          {"\n"}&lt;div className="shape bg-line yellow
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape bg-line orange
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape bg-line red
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape bg-line pink
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape bg-line violet
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape bg-line purple
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape bg-line blue
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape bg-line aqua
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape bg-line green
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape bg-line leaf
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape bg-line fuchsia
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape bg-line sky
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape bg-line grape
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape bg-line dark
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape bg-line ash
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
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
            <h2 className="!mb-3 !leading-[1.35]">Solid</h2>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
              All background color options (
              <Link
                to={`/docs/elements/background#snippet-3`}
                className="internal !pr-[1.4rem] after:content-['\e94c'] after:text-[0.8rem] after:font-Unicons !mt-[-0.25rem] hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
              >
                solid
              </Link>
              ,{" "}
              <Link
                to={`/docs/elements/background#snippet-4`}
                className="internal !pr-[1.4rem] after:content-['\e94c'] after:text-[0.8rem] after:font-Unicons !mt-[-0.25rem] hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
              >
                soft
              </Link>
              ,{" "}
              <a
                to={`/docs/elements/background#snippet-5`}
                className="internal !pr-[1.4rem] after:content-['\e94c'] after:text-[0.8rem] after:font-Unicons !mt-[-0.25rem] hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
              >
                pale
              </a>
              ) are available to use.
            </p>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] g-6 !mt-[-30px]">
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="shape !bg-[#fff8ee] rounded !w-[8rem] !h-[8rem]" />
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="shape !bg-[#edf2fc] rounded !w-[8rem] !h-[8rem]" />
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="shape bg-[#fcf0f1] !rounded-[50%] !w-[8rem] !h-[8rem]" />
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="shape bg-[#edf9f6] !rounded-[50%] !w-[8rem] !h-[8rem]" />
                  </div>
                  {/* /column */}
                </div>
                {/* /.row */}
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
                          &lt;div className="shape !bg-[#fff8ee] !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}&lt;div
                          className="shape !bg-[#fef4f2] !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="shape bg-[#fcf0f1] !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}&lt;div
                          className="shape !bg-[#fbf1f4] !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="shape !bg-[#f6f3f9] !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}&lt;div
                          className="shape !bg-[#f6f3f9] !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="shape !bg-[#edf2fc] !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}&lt;div
                          className="shape !bg-[#eff7fa] !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="shape bg-[#edf9f6] !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}&lt;div
                          className="shape !bg-[#f3f8f5] !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="shape bg-[#ecedef] !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}&lt;div
                          className="shape !bg-[#fdf1f8] !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="shape bg-[#f0f8fe] !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}&lt;div
                          className="shape !bg-[#f0f0f8] !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="shape bg-[#f5f5f6] !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}&lt;div
                          className="shape bg-soft-white !w-[8rem]
                          !h-[8rem]"&gt;&lt;/div&gt;{"\n"}
                          {"                      "}
                          {"\n"}&lt;div className="shape !bg-[#fff8ee]
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape !bg-[#fef4f2]
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape bg-[#fcf0f1]
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape !bg-[#fbf1f4]
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape !bg-[#f6f3f9]
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape !bg-[#f6f3f9]
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape !bg-[#edf2fc]
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape !bg-[#eff7fa]
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape bg-[#edf9f6]
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape !bg-[#f3f8f5]
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape !bg-[#fdf1f8]
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape bg-[#f0f8fe]
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape !bg-[#f0f0f8]
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape bg-soft-dark
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
                          {"\n"}&lt;div className="shape bg-[#f5f5f6]
                          !rounded-[50%] !w-[8rem] !h-[8rem]"&gt;&lt;/div&gt;
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
            <h2 className="!mb-3 !leading-[1.35]">SVG</h2>
            <p className="lead leading-[1.65] text-[0.9rem] font-medium">
              Available color options:
            </p>
            <p className="lead leading-[1.65] text-[0.9rem] font-medium !mb-8">
              <code className="code">primary</code>,{" "}
              <code className="code">aqua</code>,{" "}
              <code className="code">green</code>,{" "}
              <code className="code">leaf</code>,{" "}
              <code className="code">navy</code>,{" "}
              <code className="code">orange</code>,{" "}
              <code className="code">pink</code>,{" "}
              <code className="code">purple</code>,{" "}
              <code className="code">red</code>,{" "}
              <code className="code">violet</code>,{" "}
              <code className="code">yellow</code>,{" "}
              <code className="code">fuchsia</code>,{" "}
              <code className="code">sky</code>,{" "}
              <code className="code">grape</code>,{" "}
              <code className="code">pale-primary</code>,{" "}
              <code className="code">pale-aqua</code>,{" "}
              <code className="code">pale-green</code>,{" "}
              <code className="code">pale-leaf</code>,{" "}
              <code className="code">pale-navy</code>,{" "}
              <code className="code">pale-orange</code>,{" "}
              <code className="code">pale-pink</code>,{" "}
              <code className="code">pale-purple</code>,{" "}
              <code className="code">pale-red</code>,{" "}
              <code className="code">pale-violet</code>,{" "}
              <code className="code">pale-yellow</code>,{" "}
              <code className="code">pale-fuchsia</code>,{" "}
              <code className="code">pale-sky</code>,{" "}
              <code className="code">pale-grape</code>,{" "}
              <code className="code">soft-primary</code>,{" "}
              <code className="code">soft-aqua</code>,{" "}
              <code className="code">soft-green</code>,{" "}
              <code className="code">soft-leaf</code>,{" "}
              <code className="code">soft-navy</code>,{" "}
              <code className="code">soft-orange</code>,{" "}
              <code className="code">soft-pink</code>,{" "}
              <code className="code">soft-purple</code>,{" "}
              <code className="code">soft-red</code>,{" "}
              <code className="code">soft-violet</code>,{" "}
              <code className="code">soft-yellow</code>,{" "}
              <code className="code">soft-fuchsia</code>,{" "}
              <code className="code">soft-sky</code>,{" "}
              <code className="code">soft-grape</code>.
            </p>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] g-6 mt-[-30px]">
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                    <div className="shape green !w-[8rem] !h-[8rem]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 500 549.53"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/hex.svg"
                        className="svg-inject icon-svg !w-full !h-full"
                      >
                        <path
                          className="svg-fill"
                          d="M250 549.39c-15.51 0-30.05-3.46-40.94-9.75l-168-97C18.5 429.63.14 397.82.14 371.75v-194c0-26.07 18.36-57.88 40.94-70.91l168-97C220 3.6 234.49.14 250 .14s30.05 3.46 40.94 9.75l168 97c22.58 13 40.94 44.84 40.94 70.91v194c0 26.07-18.36 57.88-40.94 70.91l-168 97c-10.89 6.22-25.43 9.68-40.94 9.68z"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                    <div className="shape pale-green !w-[8rem] !h-[8rem]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 500 549.53"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/hex.svg"
                        className="svg-inject icon-svg !w-full !h-full"
                      >
                        <path
                          className="svg-fill"
                          d="M250 549.39c-15.51 0-30.05-3.46-40.94-9.75l-168-97C18.5 429.63.14 397.82.14 371.75v-194c0-26.07 18.36-57.88 40.94-70.91l168-97C220 3.6 234.49.14 250 .14s30.05 3.46 40.94 9.75l168 97c22.58 13 40.94 44.84 40.94 70.91v194c0 26.07-18.36 57.88-40.94 70.91l-168 97c-10.89 6.22-25.43 9.68-40.94 9.68z"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                    <div className="shape soft-green !w-[8rem] !h-[8rem]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 500 549.53"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/hex.svg"
                        className="svg-inject icon-svg !w-full !h-full"
                      >
                        <path
                          className="svg-fill"
                          d="M250 549.39c-15.51 0-30.05-3.46-40.94-9.75l-168-97C18.5 429.63.14 397.82.14 371.75v-194c0-26.07 18.36-57.88 40.94-70.91l168-97C220 3.6 234.49.14 250 .14s30.05 3.46 40.94 9.75l168 97c22.58 13 40.94 44.84 40.94 70.91v194c0 26.07-18.36 57.88-40.94 70.91l-168 97c-10.89 6.22-25.43 9.68-40.94 9.68z"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]"></div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                    <div className="shape primary !w-[8rem] !h-[8rem]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 411.42 329.24"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/tri.svg"
                        className="svg-inject icon-svg !w-full !h-full"
                      >
                        <g data-name="Layer 2">
                          <path
                            className="svg-fill"
                            d="M164.34 21.92L8.72 251.15c-22.54 33.2 1.24 78.09 41.37 78.09h311.24c40.13 0 63.91-44.89 41.37-78.09L247.08 21.92a50 50 0 00-82.74 0z"
                            data-name="Layer 1"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                    <div className="shape pale-primary !w-[8rem] !h-[8rem]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 411.42 329.24"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/tri.svg"
                        className="svg-inject icon-svg !w-full !h-full"
                      >
                        <g data-name="Layer 2">
                          <path
                            className="svg-fill"
                            d="M164.34 21.92L8.72 251.15c-22.54 33.2 1.24 78.09 41.37 78.09h311.24c40.13 0 63.91-44.89 41.37-78.09L247.08 21.92a50 50 0 00-82.74 0z"
                            data-name="Layer 1"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                    <div className="shape soft-primary !w-[8rem] !h-[8rem]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 411.42 329.24"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/tri.svg"
                        className="svg-inject icon-svg !w-full !h-full"
                      >
                        <g data-name="Layer 2">
                          <path
                            className="svg-fill"
                            d="M164.34 21.92L8.72 251.15c-22.54 33.2 1.24 78.09 41.37 78.09h311.24c40.13 0 63.91-44.89 41.37-78.09L247.08 21.92a50 50 0 00-82.74 0z"
                            data-name="Layer 1"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]"></div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                    <div className="shape red !w-[8rem] !h-[8rem]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 500 500"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/circle.svg"
                        className="svg-inject icon-svg !w-full !h-full"
                      >
                        <g data-name="Layer 2">
                          <path
                            className="svg-fill"
                            d="M250 0C111.93 0 0 111.93 0 250s111.93 250 250 250 250-111.93 250-250S388.07 0 250 0zm0 425a175 175 0 11175-175 175 175 0 01-175 175z"
                            data-name="Layer 1"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                    <div className="shape pale-red !w-[8rem] !h-[8rem]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 500 500"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/circle.svg"
                        className="svg-inject icon-svg !w-full !h-full"
                      >
                        <g data-name="Layer 2">
                          <path
                            className="svg-fill"
                            d="M250 0C111.93 0 0 111.93 0 250s111.93 250 250 250 250-111.93 250-250S388.07 0 250 0zm0 425a175 175 0 11175-175 175 175 0 01-175 175z"
                            data-name="Layer 1"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                    <div className="shape soft-red !w-[8rem] !h-[8rem]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 500 500"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/circle.svg"
                        className="svg-inject icon-svg !w-full !h-full"
                      >
                        <g data-name="Layer 2">
                          <path
                            className="svg-fill"
                            d="M250 0C111.93 0 0 111.93 0 250s111.93 250 250 250 250-111.93 250-250S388.07 0 250 0zm0 425a175 175 0 11175-175 175 175 0 01-175 175z"
                            data-name="Layer 1"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]"></div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                    <div className="shape yellow !w-[8rem] !h-[8rem]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 457.71 446.45"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/scribble.svg"
                        className="svg-inject icon-svg !w-full !h-full"
                      >
                        <path
                          className="svg-fill"
                          d="M205.62 442.54c-.51-.41-.99-.84-1.46-1.31-10.4-10.39-3.61-27.12 11.63-52.5 11.72-19.51 28.48-43.74 46.22-69.39 17.53-25.34 35.66-51.54 49.01-73.47 14.73-24.19 18.57-35.01 19.51-39.48-3.86-.28-13.15.3-33.78 6.52-19.71 5.94-43.09 14.92-65.7 23.6-63.8 24.49-85.35 31.41-96.51 19.5-3.21-3.43-7.62-11.04-1.12-23.54 2.49-4.79 6.64-10.51 12.68-17.5 10.4-12.03 25.04-26.34 40.55-41.49 14.02-13.7 28.53-27.87 39.53-40.11 9.93-11.04 14.15-17.43 15.94-20.82-3.43-.75-10.24-1.51-23.25-.92-14.99.68-33.44 2.89-51.28 5.02-46.92 5.61-74.09 8.33-86.81-.99-4.78-3.5-7.67-8.42-8.41-14.24-1.97-15.58 12.45-33.15 29.14-53.5 5.31-6.47 13.31-16.22 17.36-22.68-4.51-.38-12.43-.4-25.97 1.1-16.54 1.82-35.62 5.22-50.95 7.96-12.62 2.25-22.6 4.03-28.48 4.49C6.6 39.3.58 34.17.04 27.28c-.54-6.88 4.6-12.9 11.48-13.44 4.66-.37 14.58-2.13 26.06-4.18C54.56 6.63 75.7 2.86 94 1.07c26.41-2.6 40.16-.54 47.48 7.13 7.01 7.34 6.45 17.66-1.68 30.66-4.72 7.55-11.63 15.98-18.95 24.9-6.18 7.53-12.57 15.31-17.24 22.19-3.35 4.92-4.95 8.13-5.71 10.07 3 .54 9.09 1.08 20.87.43 13.21-.73 29.07-2.63 45.86-4.64 59.99-7.17 94.33-10.22 102.49 10.62 7.4 18.93-16.51 43.51-62.99 88.92-12.69 12.4-24.68 24.11-34.04 34.28-3.17 3.45-5.68 6.34-7.67 8.75 15.88-4.42 41.18-14.13 59.67-21.22 62.4-23.96 101.69-37.87 121.09-29.14 5.38 2.42 9.26 6.47 11.23 11.72 7.48 19.95-16.15 57.31-71.83 137.82-15.49 22.39-30.12 43.55-41.18 61.25-7.13 11.4-11.3 19.11-13.75 24.25 8.97-3.3 25.58-11 55.73-28.8 32.68-19.29 70.61-44.04 101.09-63.94 24.62-16.07 44.07-28.76 54.65-34.68 6.03-3.37 13.64-1.22 17.01 4.81 3.37 6.03 1.22 13.64-4.81 17.01-9.83 5.5-29.92 18.61-53.18 33.79-33.46 21.84-75.1 49.01-110.05 69.21-49.35 28.51-70.85 35.44-82.46 26.07z"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                    <div className="shape pale-yellow !w-[8rem] !h-[8rem]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 457.71 446.45"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/scribble.svg"
                        className="svg-inject icon-svg !w-full !h-full"
                      >
                        <path
                          className="svg-fill"
                          d="M205.62 442.54c-.51-.41-.99-.84-1.46-1.31-10.4-10.39-3.61-27.12 11.63-52.5 11.72-19.51 28.48-43.74 46.22-69.39 17.53-25.34 35.66-51.54 49.01-73.47 14.73-24.19 18.57-35.01 19.51-39.48-3.86-.28-13.15.3-33.78 6.52-19.71 5.94-43.09 14.92-65.7 23.6-63.8 24.49-85.35 31.41-96.51 19.5-3.21-3.43-7.62-11.04-1.12-23.54 2.49-4.79 6.64-10.51 12.68-17.5 10.4-12.03 25.04-26.34 40.55-41.49 14.02-13.7 28.53-27.87 39.53-40.11 9.93-11.04 14.15-17.43 15.94-20.82-3.43-.75-10.24-1.51-23.25-.92-14.99.68-33.44 2.89-51.28 5.02-46.92 5.61-74.09 8.33-86.81-.99-4.78-3.5-7.67-8.42-8.41-14.24-1.97-15.58 12.45-33.15 29.14-53.5 5.31-6.47 13.31-16.22 17.36-22.68-4.51-.38-12.43-.4-25.97 1.1-16.54 1.82-35.62 5.22-50.95 7.96-12.62 2.25-22.6 4.03-28.48 4.49C6.6 39.3.58 34.17.04 27.28c-.54-6.88 4.6-12.9 11.48-13.44 4.66-.37 14.58-2.13 26.06-4.18C54.56 6.63 75.7 2.86 94 1.07c26.41-2.6 40.16-.54 47.48 7.13 7.01 7.34 6.45 17.66-1.68 30.66-4.72 7.55-11.63 15.98-18.95 24.9-6.18 7.53-12.57 15.31-17.24 22.19-3.35 4.92-4.95 8.13-5.71 10.07 3 .54 9.09 1.08 20.87.43 13.21-.73 29.07-2.63 45.86-4.64 59.99-7.17 94.33-10.22 102.49 10.62 7.4 18.93-16.51 43.51-62.99 88.92-12.69 12.4-24.68 24.11-34.04 34.28-3.17 3.45-5.68 6.34-7.67 8.75 15.88-4.42 41.18-14.13 59.67-21.22 62.4-23.96 101.69-37.87 121.09-29.14 5.38 2.42 9.26 6.47 11.23 11.72 7.48 19.95-16.15 57.31-71.83 137.82-15.49 22.39-30.12 43.55-41.18 61.25-7.13 11.4-11.3 19.11-13.75 24.25 8.97-3.3 25.58-11 55.73-28.8 32.68-19.29 70.61-44.04 101.09-63.94 24.62-16.07 44.07-28.76 54.65-34.68 6.03-3.37 13.64-1.22 17.01 4.81 3.37 6.03 1.22 13.64-4.81 17.01-9.83 5.5-29.92 18.61-53.18 33.79-33.46 21.84-75.1 49.01-110.05 69.21-49.35 28.51-70.85 35.44-82.46 26.07z"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                    <div className="shape soft-yellow !w-[8rem] !h-[8rem]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 457.71 446.45"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/scribble.svg"
                        className="svg-inject icon-svg !w-full !h-full"
                      >
                        <path
                          className="svg-fill"
                          d="M205.62 442.54c-.51-.41-.99-.84-1.46-1.31-10.4-10.39-3.61-27.12 11.63-52.5 11.72-19.51 28.48-43.74 46.22-69.39 17.53-25.34 35.66-51.54 49.01-73.47 14.73-24.19 18.57-35.01 19.51-39.48-3.86-.28-13.15.3-33.78 6.52-19.71 5.94-43.09 14.92-65.7 23.6-63.8 24.49-85.35 31.41-96.51 19.5-3.21-3.43-7.62-11.04-1.12-23.54 2.49-4.79 6.64-10.51 12.68-17.5 10.4-12.03 25.04-26.34 40.55-41.49 14.02-13.7 28.53-27.87 39.53-40.11 9.93-11.04 14.15-17.43 15.94-20.82-3.43-.75-10.24-1.51-23.25-.92-14.99.68-33.44 2.89-51.28 5.02-46.92 5.61-74.09 8.33-86.81-.99-4.78-3.5-7.67-8.42-8.41-14.24-1.97-15.58 12.45-33.15 29.14-53.5 5.31-6.47 13.31-16.22 17.36-22.68-4.51-.38-12.43-.4-25.97 1.1-16.54 1.82-35.62 5.22-50.95 7.96-12.62 2.25-22.6 4.03-28.48 4.49C6.6 39.3.58 34.17.04 27.28c-.54-6.88 4.6-12.9 11.48-13.44 4.66-.37 14.58-2.13 26.06-4.18C54.56 6.63 75.7 2.86 94 1.07c26.41-2.6 40.16-.54 47.48 7.13 7.01 7.34 6.45 17.66-1.68 30.66-4.72 7.55-11.63 15.98-18.95 24.9-6.18 7.53-12.57 15.31-17.24 22.19-3.35 4.92-4.95 8.13-5.71 10.07 3 .54 9.09 1.08 20.87.43 13.21-.73 29.07-2.63 45.86-4.64 59.99-7.17 94.33-10.22 102.49 10.62 7.4 18.93-16.51 43.51-62.99 88.92-12.69 12.4-24.68 24.11-34.04 34.28-3.17 3.45-5.68 6.34-7.67 8.75 15.88-4.42 41.18-14.13 59.67-21.22 62.4-23.96 101.69-37.87 121.09-29.14 5.38 2.42 9.26 6.47 11.23 11.72 7.48 19.95-16.15 57.31-71.83 137.82-15.49 22.39-30.12 43.55-41.18 61.25-7.13 11.4-11.3 19.11-13.75 24.25 8.97-3.3 25.58-11 55.73-28.8 32.68-19.29 70.61-44.04 101.09-63.94 24.62-16.07 44.07-28.76 54.65-34.68 6.03-3.37 13.64-1.22 17.01 4.81 3.37 6.03 1.22 13.64-4.81 17.01-9.83 5.5-29.92 18.61-53.18 33.79-33.46 21.84-75.1 49.01-110.05 69.21-49.35 28.51-70.85 35.44-82.46 26.07z"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]"></div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                    <div className="shape purple !w-[8rem] !h-[8rem]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 219.5 219.5"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/pie.svg"
                        className="svg-inject icon-svg !w-full !h-full"
                      >
                        <path
                          className="svg-fill"
                          d="M219.5 219.5H0c0-58.19 23.14-114.06 64.29-155.21A219.561 219.561 0 01219.5 0v219.5z"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                    <div className="shape pale-purple !w-[8rem] !h-[8rem]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 219.5 219.5"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/pie.svg"
                        className="svg-inject icon-svg !w-full !h-full"
                      >
                        <path
                          className="svg-fill"
                          d="M219.5 219.5H0c0-58.19 23.14-114.06 64.29-155.21A219.561 219.561 0 01219.5 0v219.5z"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                    <div className="shape soft-purple !w-[8rem] !h-[8rem]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 219.5 219.5"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/pie.svg"
                        className="svg-inject icon-svg !w-full !h-full"
                      >
                        <path
                          className="svg-fill"
                          d="M219.5 219.5H0c0-58.19 23.14-114.06 64.29-155.21A219.561 219.561 0 01219.5 0v219.5z"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]"></div>
                  {/* /column */}
                </div>
                {/* /.row */}
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
                    <button
                      type="button"
                      className="btn btn-sm btn-white rounded-pill btn-clipboard"
                    >
                      Copy
                    </button>
                    <div className="code-wrapper-inner">
                      <pre className=" language-html" tabIndex={0}>
                        <code className=" language-html">
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt;</span>div
                            </span>{" "}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation attr-equals">
                                =
                              </span>
                              <span className="token punctuation">"</span>shape
                              primary !w-[8rem] !h-[8rem]
                              <span className="token punctuation">"</span>
                            </span>
                            <span className="token punctuation">&gt;</span>
                          </span>
                          {"\n"}
                          {"  "}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt;</span>img
                            </span>{" "}
                            <span className="token attr-name">src</span>
                            <span className="token attr-value">
                              <span className="token punctuation attr-equals">
                                =
                              </span>
                              <span className="token punctuation">"</span>
                              ./assets/img/svg/hex.svg
                              <span className="token punctuation">"</span>
                            </span>{" "}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation attr-equals">
                                =
                              </span>
                              <span className="token punctuation">"</span>
                              svg-inject icon-svg w-full !h-full
                              <span className="token punctuation">"</span>
                            </span>{" "}
                            <span className="token attr-name">alt</span>
                            <span className="token attr-value">
                              <span className="token punctuation attr-equals">
                                =
                              </span>
                              <span className="token punctuation">"</span>
                              <span className="token punctuation">"</span>
                            </span>{" "}
                            <span className="token punctuation">/&gt;</span>
                          </span>
                          {"\n"}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt;/</span>
                              div
                            </span>
                            <span className="token punctuation">&gt;</span>
                          </span>
                          {"\n"}
                          {"\n"}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt;</span>div
                            </span>{" "}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation attr-equals">
                                =
                              </span>
                              <span className="token punctuation">"</span>shape
                              primary !w-[8rem] !h-[8rem]
                              <span className="token punctuation">"</span>
                            </span>
                            <span className="token punctuation">&gt;</span>
                          </span>
                          {"\n"}
                          {"  "}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt;</span>img
                            </span>{" "}
                            <span className="token attr-name">src</span>
                            <span className="token attr-value">
                              <span className="token punctuation attr-equals">
                                =
                              </span>
                              <span className="token punctuation">"</span>
                              ./assets/img/svg/tri.svg
                              <span className="token punctuation">"</span>
                            </span>{" "}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation attr-equals">
                                =
                              </span>
                              <span className="token punctuation">"</span>
                              svg-inject icon-svg w-full !h-full
                              <span className="token punctuation">"</span>
                            </span>{" "}
                            <span className="token attr-name">alt</span>
                            <span className="token attr-value">
                              <span className="token punctuation attr-equals">
                                =
                              </span>
                              <span className="token punctuation">"</span>
                              <span className="token punctuation">"</span>
                            </span>{" "}
                            <span className="token punctuation">/&gt;</span>
                          </span>
                          {"\n"}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt;/</span>
                              div
                            </span>
                            <span className="token punctuation">&gt;</span>
                          </span>
                          {"\n"}
                          {"\n"}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt;</span>div
                            </span>{" "}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation attr-equals">
                                =
                              </span>
                              <span className="token punctuation">"</span>shape
                              primary !w-[8rem] !h-[8rem]
                              <span className="token punctuation">"</span>
                            </span>
                            <span className="token punctuation">&gt;</span>
                          </span>
                          {"\n"}
                          {"  "}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt;</span>img
                            </span>{" "}
                            <span className="token attr-name">src</span>
                            <span className="token attr-value">
                              <span className="token punctuation attr-equals">
                                =
                              </span>
                              <span className="token punctuation">"</span>
                              ./assets/img/svg/circle.svg
                              <span className="token punctuation">"</span>
                            </span>{" "}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation attr-equals">
                                =
                              </span>
                              <span className="token punctuation">"</span>
                              svg-inject icon-svg w-full !h-full
                              <span className="token punctuation">"</span>
                            </span>{" "}
                            <span className="token attr-name">alt</span>
                            <span className="token attr-value">
                              <span className="token punctuation attr-equals">
                                =
                              </span>
                              <span className="token punctuation">"</span>
                              <span className="token punctuation">"</span>
                            </span>{" "}
                            <span className="token punctuation">/&gt;</span>
                          </span>
                          {"\n"}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt;/</span>
                              div
                            </span>
                            <span className="token punctuation">&gt;</span>
                          </span>
                          {"\n"}
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
            <h2 className="!mb-5 !leading-[1.35]">Doodles</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] !mt-[-50px]">
                  <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px]">
                    <img
                      className="h-[4.5rem]"
                      alt="image"
                      src="/assets/img/svg/doodle1.svg"
                      width="74"
                      height="72"
                    />
                  </div>
                  {/* /column */}
                  <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px]">
                    <img
                      className="h-[4.5rem]"
                      alt="image"
                      src="/assets/img/svg/doodle2.svg"
                      width="152"
                      height="147"
                    />
                  </div>
                  {/* /column */}
                  <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px]">
                    <img
                      className="h-[4.5rem]"
                      alt="image"
                      src="/assets/img/svg/doodle3.svg"
                      width="85"
                      height="82"
                    />
                  </div>
                  {/* /column */}
                  <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px]">
                    <img
                      className="h-[4.5rem]"
                      alt="image"
                      src="/assets/img/svg/doodle4.svg"
                      width="42"
                      height="55"
                    />
                  </div>
                  {/* /column */}
                  <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px]">
                    <img
                      className="h-[4.5rem]"
                      alt="image"
                      src="/assets/img/svg/doodle5.svg"
                      width="148"
                      height="172"
                    />
                  </div>
                  {/* /column */}
                  <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px]">
                    <img
                      className="h-[4.5rem]"
                      alt="image"
                      src="/assets/img/svg/doodle7.svg"
                      width="56"
                      height="45"
                    />
                  </div>
                  {/* /column */}
                  <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px]">
                    <img
                      className="h-[4.5rem]"
                      alt="image"
                      src="/assets/img/svg/doodle8.svg"
                      width="117"
                      height="120"
                    />
                  </div>
                  {/* /column */}
                  <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px]">
                    <img
                      className="h-[4.5rem]"
                      alt="image"
                      src="/assets/img/svg/doodle9.svg"
                      width="206"
                      height="214"
                    />
                  </div>
                  {/* /column */}
                  <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px]">
                    <img
                      className="h-[4.5rem]"
                      alt="image"
                      src="/assets/img/svg/doodle10.svg"
                      width="47"
                      height="47"
                    />
                  </div>
                  {/* /column */}
                  <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px]">
                    <img
                      className="h-[4.5rem]"
                      alt="image"
                      src="/assets/img/svg/doodle11.svg"
                      width="110"
                      height="114"
                    />
                  </div>
                  {/* /column */}
                  <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px]">
                    <img
                      className="h-[4.5rem]"
                      alt="image"
                      src="/assets/img/svg/doodle6.svg"
                      width="976"
                      height="117"
                    />
                  </div>
                  {/* /column */}
                </div>
                {/* /.row */}
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
                          &lt;img src="/assets/img/svg/doodle1.svg"
                          className="!h-[4.5rem]" alt=""&gt;{"\n"}&lt;img
                          src="/assets/img/svg/doodle2.svg"
                          className="!h-[4.5rem]" alt=""&gt;{"\n"}&lt;img
                          src="/assets/img/svg/doodle3.svg"
                          className="!h-[4.5rem]" alt=""&gt;{"\n"}&lt;img
                          src="/assets/img/svg/doodle4.svg"
                          className="!h-[4.5rem]" alt=""&gt;{"\n"}&lt;img
                          src="/assets/img/svg/doodle5.svg"
                          className="!h-[4.5rem]" alt=""&gt;{"\n"}&lt;img
                          src="/assets/img/svg/doodle7.svg"
                          className="!h-[4.5rem]" alt=""&gt;{"\n"}&lt;img
                          src="/assets/img/svg/doodle8.svg"
                          className="!h-[4.5rem]" alt=""&gt;{"\n"}&lt;img
                          src="/assets/img/svg/doodle9.svg"
                          className="!h-[4.5rem]" alt=""&gt;{"\n"}&lt;img
                          src="/assets/img/svg/doodle10.svg"
                          className="!h-[4.5rem]" alt=""&gt;{"\n"}&lt;img
                          src="/assets/img/svg/doodle11.svg"
                          className="!h-[4.5rem]" alt=""&gt;{"\n"}&lt;img
                          src="/assets/img/svg/doodle6.svg"
                          className="!h-[4.5rem]" alt=""&gt;
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
