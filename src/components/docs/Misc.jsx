import React from "react";
import DocsSidebar from "./DocsSidebar";
import CodeSnippetContainer from "../common/CodeSnippetContainer";

export default function Misc() {
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
                    Spacing
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-2"
                  >
                    Font Size
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-3"
                  >
                    Line Height
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-4"
                  >
                    Letter Spacing
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-5"
                  >
                    Gutters
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-6"
                  >
                    Retina Images
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
            <h2 className="!mb-5 !leading-[1.35]">Spacing</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <p className="!mb-0">
                  Sandbox adds additional spacing variables to existing{" "}
                  <a
                    href="https://getbootstrap.com/docs/5.3/utilities/spacing/"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    Bootstrap spacing
                  </a>{" "}
                  ranging between values <mark className="doc">0</mark> and{" "}
                  <mark className="doc">25</mark>
                </p>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-2" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Font Size</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <p className="!mb-0">
                  Quickly change the font-size of text using{" "}
                  <code className="code">text-*</code> classes ranging between{" "}
                  <mark className="doc">1</mark> and{" "}
                  <mark className="doc">200</mark>, while{" "}
                  <mark className="doc">sm</mark>, and{" "}
                  <mark className="doc">lg</mark> also apply.
                </p>
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
                          &lt;p className="text-[.7rem]"&gt;.text-[.7rem]
                          text&lt;/p&gt;
                          {"\n"}&lt;p className="text-[1rem]"&gt;.text-[1rem]
                          text&lt;/p&gt;{"\n"}
                          {"\n"}&lt;p
                          className="text-[.05rem]"&gt;.text-[.05rem]
                          text&lt;/p&gt;{"\n"}...{"\n"}&lt;p
                          className="text-[10rem]"&gt;.text-[10rem]
                          text&lt;/p&gt;
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
            <h2 className="!mb-5 !leading-[1.35]">Line Height</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <p className="!mb-0">
                  Change the line height with{" "}
                  <code className="code">.leading-*</code> utilities.
                </p>
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
                          &lt;p className="leading-[1]"&gt;Text&lt;/p&gt;{"\n"}
                          &lt;p className="leading-[1.05]"&gt;Text&lt;/p&gt;
                          {"\n"}
                          &lt;p className="leading-[1.35]"&gt;Text&lt;/p&gt;
                          {"\n"}
                          &lt;p className="leading-[1.5]"&gt;Text&lt;/p&gt;
                          {"\n"}
                          &lt;p className="leading-[1.7]"&gt;Text&lt;/p&gt;
                          {"\n"}
                          &lt;p className="leading-[1.9]"&gt;Text&lt;/p&gt;
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
            <h2 className="!mb-5 !leading-[1.35]">Letter Spacing</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <p className="!mb-0">
                  Change the letter spacing with{" "}
                  <code className="code">.tracking-*</code> utilities.
                </p>
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
                          &lt;p
                          className="tracking-[-0.035em]"&gt;Text&lt;/p&gt;
                          {"\n"}
                          &lt;p className="tracking-[-.03em]"&gt;Text&lt;/p&gt;
                          {"\n"}
                          &lt;p className="tracking-[-.01rem]"&gt;Text&lt;/p&gt;
                          {"\n"}
                          &lt;p className="tracking-[.02rem]"&gt;Text&lt;/p&gt;
                          {"\n"}
                          &lt;p className="tracking-[.05rem]"&gt;Text&lt;/p&gt;
                          {"\n"}
                          &lt;p className="tracking-[normal]"&gt;Text&lt;/p&gt;
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
            <h2 className="!mb-5 !leading-[1.35]">Gutters</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <p className="!mb-0">
                  Spacing variables mentioned above can also be used for column
                  gutters. More information regarding Bootstrap gutters can be
                  found on
                </p>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-6" className="wrapper py-24">
            <h2 className="!mb-5 !leading-[1.35]">Retina Images</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <p className="!mb-0">
                  In order to display a high resolution image on devices with
                  retina display, you need two versions of the image. One with
                  regular size and another with twice its size. The high
                  resolution one should have the exact same name with{" "}
                  <mark className="doc">@2x</mark> at the end.
                </p>
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
                          &lt;img src="logo.png" srcset="logo@2x.png 2x" alt=""
                          /&gt;
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
