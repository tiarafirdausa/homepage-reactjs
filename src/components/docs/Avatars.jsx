import React from "react";
import DocsSidebar from "./DocsSidebar";

import CodeSnippetContainer from "../common/CodeSnippetContainer";
export default function Avatars() {
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
                    Letters
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-2"
                  >
                    Images
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
            <h2 className="!mb-3 !leading-[1.35]">Letters</h2>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
              Use any size between <mark className="doc">.w-1 / .h-1</mark> and{" "}
              <mark className="doc">.!w-[22.5rem] / .h-25</mark> to change the
              avatar size.
            </p>
            <div className="card">
              <div className="card-body flex flex-row items-center p-[40px]">
                <span className=" flex items-center justify-center font-bold !leading-[1.7] !tracking-[-0.01rem] rounded-[100%] !bg-[rgba(63,120,224)] opacity-100 !text-white !w-[5rem] !h-[5rem] !mr-4">
                  <span className="xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)]">
                    TC
                  </span>
                </span>
                <span className=" flex items-center justify-center font-bold !leading-[1.7] !tracking-[-0.01rem] rounded-[100%] !bg-[#e0e9fa] !text-[#3f78e0]  w-[3.5rem] h-[3.5rem] !mr-4">
                  <span className="!text-[0.9rem]">AH</span>
                </span>
                <span className=" flex items-center justify-center font-bold !leading-[1.7] !tracking-[-0.01rem] rounded-[100%] !bg-[#edf2fc] !text-[#3f78e0]  !w-[2.5rem] !h-[2.5rem] !mr-4">
                  <span className="!text-[.75rem]">CH</span>
                </span>
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
                          &lt;span className="avatar !bg-[rgba(63,120,224)]
                          opacity-100 !text-white !w-[5rem] !h-[5rem]"&gt;{"\n"}
                          {"  "}&lt;span&gt;TC&lt;/span&gt;{"\n"}&lt;/span&gt;
                          {"\n"}
                          {"\n"}&lt;span className="avatar !bg-[#e0e9fa]
                          !text-[#3f78e0]
                          {"  "}w-12 h-12"&gt;{"\n"}
                          {"  "}&lt;span&gt;AH&lt;/span&gt;{"\n"}&lt;/span&gt;
                          {"\n"}
                          {"\n"}&lt;span className="avatar !bg-[#edf2fc]
                          !text-[#3f78e0]
                          {"  "}!w-[2.5rem] !h-[2.5rem]"&gt;{"\n"}
                          {"  "}&lt;span&gt;CH&lt;/span&gt;{"\n"}&lt;/span&gt;
                        </code>
                      </pre>
                    </div>
                    {/*/.code-wrapper-inner */}
                  </div>
                  {/*/.code-wrapper */}
                </div>{" "}
              </CodeSnippetContainer>
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-2" className="wrapper py-24">
            <h2 className="!mb-3 !leading-[1.35]">Image</h2>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
              Use any size between <mark className="doc">.w-1</mark> and{" "}
              <mark className="doc">.!w-[22.5rem]</mark> to change the image
              size. Image height will change automatically. Make sure to use
              images with 1:1 ratio to avoid stretching.
            </p>
            <div className="card">
              <div className="card-body flex flex-row items-center p-[40px]">
                <img
                  className="avatar !w-[5rem] !mr-4  flex items-center justify-center font-bold !leading-[1.7] !tracking-[-0.01rem] h-auto rounded-[100%]"
                  srcSet="/assets/img/avatars/te1@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/avatars/te1.jpg"
                  width="100"
                  height="100"
                />
                <img
                  className="avatar w-12 !mr-4  flex items-center justify-center font-bold !leading-[1.7] !tracking-[-0.01rem] h-auto rounded-[100%]"
                  srcSet="/assets/img/avatars/te2@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/avatars/te2.jpg"
                  width="100"
                  height="100"
                />
                <img
                  className="avatar !w-[2.5rem] !mr-4  flex items-center justify-center font-bold !leading-[1.7] !tracking-[-0.01rem] h-auto rounded-[100%]"
                  srcSet="/assets/img/avatars/t3@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/avatars/t3.jpg"
                  width="300"
                  height="300"
                />
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
                          &lt;img className="avatar !w-[5rem]" src="..." alt=""
                          /&gt;
                          {"\n"}
                          {"  "}
                          {"\n"}&lt;img className="avatar w-12" src="..." alt=""
                          /&gt;
                          {"\n"}
                          {"\n"}&lt;img className="avatar !w-[2.5rem]" src="..."
                          alt="" /&gt;
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
