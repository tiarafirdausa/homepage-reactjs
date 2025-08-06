import React from "react";
import DocsSidebar from "./DocsSidebar";
import { Link } from "react-router-dom";
import CodeSnippetContainer from "../common/CodeSnippetContainer";
import CodeSnippet from "../common/CodeSnippet";
export default function Fonts() {
  return (
    <div className="container">
      <div className="flex flex-wrap mx-[-15px]">
        <aside className="xl:w-2/12 flex-[0_0_auto] !px-[15px] max-w-full sidebar doc-sidebar md:!mt-0 py-24 hidden  xl:block">
          <DocsSidebar />
          {/* /.widget */}
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
                    Font Options
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-2"
                  >
                    Google Fonts
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-3"
                  >
                    @font-face
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
            <h2 className="!mb-5 !leading-[1.35]">Font Options</h2>
            <div className="card">
              <div className="card-body p-[40px]">
                <ul className="pl-0 list-none">
                  <li className="!mb-2">
                    <h6 className="inline">Manrope</h6>
                    <p className="inline">
                      {" "}
                      <Link
                        to={`/demo12`}
                        className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                        target="_blank"
                      >
                        Demo 12
                      </Link>
                      ,{" "}
                      <Link
                        to={`/demo16`}
                        className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                        target="_blank"
                      >
                        Demo 16
                      </Link>
                      ,{" "}
                      <Link
                        to={`/demo17`}
                        className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                        target="_blank"
                      >
                        Demo 17
                      </Link>
                    </p>
                  </li>
                  <li className="!mb-2">
                    <h6 className="inline">Thicccboi</h6>
                    <p className="inline">
                      {" "}
                      <Link
                        to={`/demo3`}
                        className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                        target="_blank"
                      >
                        Demo 3
                      </Link>
                      ,{" "}
                      <Link
                        to={`/demo5`}
                        className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                        target="_blank"
                      >
                        Demo 5
                      </Link>
                      ,{" "}
                      <Link
                        to={`/demo6`}
                        className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                        target="_blank"
                      >
                        Demo 6
                      </Link>
                    </p>
                  </li>
                  <li className="!mb-2">
                    <h6 className="inline">DM Serif + Manrope</h6>
                    <p className="inline  !mb-0">
                      {" "}
                      <Link
                        to={`/demo2`}
                        className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                        target="_blank"
                      >
                        Demo 2
                      </Link>
                      ,{" "}
                      <Link
                        to={`/demo4`}
                        className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                        target="_blank"
                      >
                        Demo 4
                      </Link>
                      ,{" "}
                      <Link
                        to={`/demo8`}
                        className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                        target="_blank"
                      >
                        Demo 8
                      </Link>
                    </p>
                  </li>
                  <li className="!mb-2">
                    <h6 className="inline">Urbanist</h6>
                    <p className="inline  !mb-0">
                      {" "}
                      <Link
                        to={`/demo19`}
                        className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                        target="_blank"
                      >
                        Demo 19
                      </Link>
                      ,{" "}
                      <Link
                        to={`/demo20`}
                        className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                        target="_blank"
                      >
                        Demo 20
                      </Link>
                      ,{" "}
                      <Link
                        to={`/demo21`}
                        className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                        target="_blank"
                      >
                        Demo 21
                      </Link>
                    </p>
                  </li>
                  <li>
                    <h6 className="inline">Space Grotesk</h6>
                    <p className="inline  !mb-0">
                      {" "}
                      <Link
                        to={`/demo28`}
                        className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                        target="_blank"
                      >
                        Demo 28
                      </Link>
                      ,{" "}
                      <Link
                        to={`/demo29`}
                        className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                        target="_blank"
                      >
                        Demo 29
                      </Link>
                      ,{" "}
                      <Link
                        to={`/demo30`}
                        className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                        target="_blank"
                      >
                        Demo 30
                      </Link>
                    </p>
                  </li>
                </ul>
                <p className="!mb-0">
                  Manrope is the default font in Sandbox. If you wish to use one
                  of the other available font options to use inside the{" "}
                  <code className="code">&lt;body&gt;</code> tag{" "}
                  <mark className="doc">font-Your_font_name</mark> in all your
                  HTML pages.
                </p>
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
                        <code>&lt;body className="font-THICCCBOI"&gt;</code>
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
            <h2 className="!mb-5 !leading-[1.35]">Google Fonts</h2>
            <div className="card">
              <div className="card-body p-[40px]">
                <p className="!mb-0">
                  To use a custom Google Font, 1st open{" "}
                  <code className="file">app/globals.css</code> OR{" "}
                  <code className="file">app/layout.jsx</code> and add link Then
                  2nd Open<code className="code">app/globals.css</code> , and
                  use the example below to import your google font.
                </p>
                <p className="!mt-2">
                  See This Link{" "}
                  <a
                    href="https://tailwindcss.com/docs/font-family"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    Link
                  </a>
                </p>
              </div>
              {/*/.card-body */}
              <CodeSnippet
                paddingClass="pb-4"
                code={`

@theme {
  --font-IBMPlexSerif: &quot;IBM Plex Serif&quot;, &quot;serif&quot;;
  --font-SpaceGrotesk: &quot;Space Grotesk&quot;, &quot;sans-serif&quot;;
  --font-Manrope: &quot;Manrope&quot;, &quot;sans-serif&quot;;
  --font-Unicons: &quot;Unicons&quot;;
  --font-Monospace: &quot;SFMono-Regular,Menlo,Monaco,Consolas&quot;, &quot;Liberation Mono&quot;,
    &quot;Courier New&quot;, &quot;monospace&quot;;
  --font-Custom: &quot;Custom&quot;;
  --font-DMSerif: &quot;DM Serif Display&quot;;
  --font-SansSerif: &quot;sans-serif&quot;;
  --font-THICCCBOI: &quot;THICCCBOI&quot;, &quot;sans-serif&quot;;
  --font-Urbanist: &quot;Urbanist&quot;, &quot;sans-serif&quot;;
}

          
          `}
              />
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-3" className="wrapper py-24">
            <h2 className="!mb-5 !leading-[1.35]">@font-face</h2>
            <div className="card">
              <div className="card-body p-[40px]">
                <p className="!mb-0">
                  To use a custom font with @font-face, first add the font files
                  inside folder{" "}
                  <code className="folder">public/assets/fonts/</code> Then Open
                  <code className="code">app/globals.css</code> use the example
                  below to import your custom font.
                </p>
              </div>
              {/*/.card-body */}
              <CodeSnippet
                paddingClass="pb-4"
                code={`

@theme {

  --font-Custom: &quot;Custom&quot;;

}

          
          `}
              />
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
