import React from "react";
import DocsSidebar from "./DocsSidebar";

import CodeSnippetContainer from "../common/CodeSnippetContainer";
export default function ImageMask() {
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
                    Mask 1
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-2"
                  >
                    Mask 2
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-3"
                  >
                    Mask 3
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
          <section id="snippet-" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Mask 1</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px]">
                  <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                    <div className="img-mask mask-1">
                      <img
                        srcSet="/assets/img/photos/about17@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/about17.jpg"
                        width="560"
                        height="540"
                      />
                    </div>
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
                          &lt;div className="img-mask mask-1"&gt;&lt;img
                          src="..." alt="" /&gt;&lt;/div&gt;
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
            <h2 className="!mb-5 !leading-[1.35]">Mask 2</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px]">
                  <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                    <div className="img-mask mask-2">
                      <img
                        srcSet="/assets/img/photos/about17@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/about17.jpg"
                        width="560"
                        height="540"
                      />
                    </div>
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
                          &lt;div className="img-mask mask-2"&gt;&lt;img
                          src="..." alt="" /&gt;&lt;/div&gt;
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
          <section id="snippet-3" className="wrapper py-24">
            <h2 className="!mb-5 !leading-[1.35]">Mask 3</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px]">
                  <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                    <div className="img-mask mask-3">
                      <img
                        srcSet="/assets/img/photos/about17@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/about17.jpg"
                        width="560"
                        height="540"
                      />
                    </div>
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
                          &lt;div className="img-mask mask-3"&gt;&lt;img
                          src="..." alt="" /&gt;&lt;/div&gt;
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
