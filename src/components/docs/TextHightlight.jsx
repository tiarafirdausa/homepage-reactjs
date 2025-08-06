import React from "react";
import DocsSidebar from "./DocsSidebar";
import CodeSnippetContainer from "../common/CodeSnippetContainer";

export default function TextHightlight() {
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
                    Underline
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-2"
                  >
                    Underline 2
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-3"
                  >
                    Underline 3
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-4"
                  >
                    Mark
                  </a>
                </li>
              </ul>
            </nav>
            {/* /nav */}
          </div>
          {/* /.widget */}
        </aside>
        {/* /column */}
        {/* /column */}
        <div className="xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!order-2">
          <section id="snippet-1" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Underline</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <p className="lead text-[0.9rem] font-medium !leading-[1.65] !mb-0">
                  Build and manage an{" "}
                  <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)]">
                    impressive
                  </span>{" "}
                  website with Sandbox in no time.
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
                        <code>
                          &lt;span className="underline"&gt;text&lt;/span&gt;
                          {"\n"}
                          &lt;span className="underline
                          yellow"&gt;text&lt;/span&gt;
                          {"\n"}
                          &lt;span className="underline
                          orange"&gt;text&lt;/span&gt;
                          {"\n"}
                          &lt;span className="underline
                          red"&gt;text&lt;/span&gt;
                          {"\n"}
                          &lt;span className="underline
                          pink"&gt;text&lt;/span&gt;
                          {"\n"}
                          &lt;span className="underline
                          violet"&gt;text&lt;/span&gt;
                          {"\n"}
                          &lt;span className="underline
                          purple"&gt;text&lt;/span&gt;
                          {"\n"}
                          &lt;span className="underline
                          blue"&gt;text&lt;/span&gt;
                          {"\n"}
                          &lt;span className="underline
                          aqua"&gt;text&lt;/span&gt;
                          {"\n"}
                          &lt;span className="underline
                          green"&gt;text&lt;/span&gt;
                          {"\n"}
                          &lt;span className="underline
                          leaf"&gt;text&lt;/span&gt;
                          {"\n"}
                          &lt;span className="underline
                          fuchsia"&gt;text&lt;/span&gt;
                          {"\n"}&lt;span className="underline
                          sky"&gt;text&lt;/span&gt;
                          {"\n"}&lt;span className="underline
                          grape"&gt;text&lt;/span&gt;
                          {"\n"}&lt;span className="underline
                          navy"&gt;text&lt;/span&gt;
                          {"\n"}&lt;span className="underline
                          ash"&gt;text&lt;/span&gt;
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
            <h2 className="!mb-5 !leading-[1.35]">Underline 2</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <h2 className="!text-[calc(1.325rem_+_0.9vw)] font-bold xl:!text-[2rem] !leading-[1.35] !mb-4">
                  Build and manage an{" "}
                  <span className="yellow relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[10%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-[ease-in-out] after:!mt-0 after:rounded-[5rem] after:bottom-[4%] after:bg-[#fab758]">
                    impressive
                  </span>{" "}
                  website with Sandbox in no time.
                </h2>
                <h2 className="!text-[calc(1.325rem_+_0.9vw)] font-bold xl:!text-[2rem] !leading-[1.35]  !mb-0">
                  Build and manage an{" "}
                  <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[10%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[4%] motion-reduce:after:transition-none after:bg-[#3f78e0] after:!bg-[linear-gradient(40deg,#f5b161_.4%,#ec366e_100.2%)]">
                    impressive
                  </span>{" "}
                  website with Sandbox in no time.
                </h2>
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
                          &lt;span className="relative z-[2] whitespace-nowrap
                          after:content-[''] after:block after:absolute
                          after:w-[102.5%] after:h-[10%] after:left-[-1.5%]
                          after:z-[-1] after:transition-all
                          after:duration-[0.2s] after:ease-in-out after:!mt-0
                          after:rounded-[5rem] after:bottom-[4%]
                          motion-reduce:after:transition-none after:bg-[#3f78e0]
                          yellow"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className="relative z-[2] whitespace-nowrap
                          after:content-[''] after:block after:absolute
                          after:w-[102.5%] after:h-[10%] after:left-[-1.5%]
                          after:z-[-1] after:transition-all
                          after:duration-[0.2s] after:ease-in-out after:!mt-0
                          after:rounded-[5rem] after:bottom-[4%]
                          motion-reduce:after:transition-none after:bg-[#3f78e0]
                          orange"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className="relative z-[2] whitespace-nowrap
                          after:content-[''] after:block after:absolute
                          after:w-[102.5%] after:h-[10%] after:left-[-1.5%]
                          after:z-[-1] after:transition-all
                          after:duration-[0.2s] after:ease-in-out after:!mt-0
                          after:rounded-[5rem] after:bottom-[4%]
                          motion-reduce:after:transition-none after:bg-[#3f78e0]
                          red"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className="relative z-[2] whitespace-nowrap
                          after:content-[''] after:block after:absolute
                          after:w-[102.5%] after:h-[10%] after:left-[-1.5%]
                          after:z-[-1] after:transition-all
                          after:duration-[0.2s] after:ease-in-out after:!mt-0
                          after:rounded-[5rem] after:bottom-[4%]
                          motion-reduce:after:transition-none after:bg-[#3f78e0]
                          pink"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className="relative z-[2] whitespace-nowrap
                          after:content-[''] after:block after:absolute
                          after:w-[102.5%] after:h-[10%] after:left-[-1.5%]
                          after:z-[-1] after:transition-all
                          after:duration-[0.2s] after:ease-in-out after:!mt-0
                          after:rounded-[5rem] after:bottom-[4%]
                          motion-reduce:after:transition-none after:bg-[#3f78e0]
                          violet"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className="relative z-[2] whitespace-nowrap
                          after:content-[''] after:block after:absolute
                          after:w-[102.5%] after:h-[10%] after:left-[-1.5%]
                          after:z-[-1] after:transition-all
                          after:duration-[0.2s] after:ease-in-out after:!mt-0
                          after:rounded-[5rem] after:bottom-[4%]
                          motion-reduce:after:transition-none after:bg-[#3f78e0]
                          purple"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className="relative z-[2] whitespace-nowrap
                          after:content-[''] after:block after:absolute
                          after:w-[102.5%] after:h-[10%] after:left-[-1.5%]
                          after:z-[-1] after:transition-all
                          after:duration-[0.2s] after:ease-in-out after:!mt-0
                          after:rounded-[5rem] after:bottom-[4%]
                          motion-reduce:after:transition-none after:bg-[#3f78e0]
                          blue"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className="relative z-[2] whitespace-nowrap
                          after:content-[''] after:block after:absolute
                          after:w-[102.5%] after:h-[10%] after:left-[-1.5%]
                          after:z-[-1] after:transition-all
                          after:duration-[0.2s] after:ease-in-out after:!mt-0
                          after:rounded-[5rem] after:bottom-[4%]
                          motion-reduce:after:transition-none after:bg-[#3f78e0]
                          aqua"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className="relative z-[2] whitespace-nowrap
                          after:content-[''] after:block after:absolute
                          after:w-[102.5%] after:h-[10%] after:left-[-1.5%]
                          after:z-[-1] after:transition-all
                          after:duration-[0.2s] after:ease-in-out after:!mt-0
                          after:rounded-[5rem] after:bottom-[4%]
                          motion-reduce:after:transition-none after:bg-[#3f78e0]
                          green"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className="relative z-[2] whitespace-nowrap
                          after:content-[''] after:block after:absolute
                          after:w-[102.5%] after:h-[10%] after:left-[-1.5%]
                          after:z-[-1] after:transition-all
                          after:duration-[0.2s] after:ease-in-out after:!mt-0
                          after:rounded-[5rem] after:bottom-[4%]
                          motion-reduce:after:transition-none after:bg-[#3f78e0]
                          leaf"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className="relative z-[2] whitespace-nowrap
                          after:content-[''] after:block after:absolute
                          after:w-[102.5%] after:h-[10%] after:left-[-1.5%]
                          after:z-[-1] after:transition-all
                          after:duration-[0.2s] after:ease-in-out after:!mt-0
                          after:rounded-[5rem] after:bottom-[4%]
                          motion-reduce:after:transition-none after:bg-[#3f78e0]
                          fuchsia"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className="relative z-[2] whitespace-nowrap
                          after:content-[''] after:block after:absolute
                          after:w-[102.5%] after:h-[10%] after:left-[-1.5%]
                          after:z-[-1] after:transition-all
                          after:duration-[0.2s] after:ease-in-out after:!mt-0
                          after:rounded-[5rem] after:bottom-[4%]
                          motion-reduce:after:transition-none after:bg-[#3f78e0]
                          sky"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className="relative z-[2] whitespace-nowrap
                          after:content-[''] after:block after:absolute
                          after:w-[102.5%] after:h-[10%] after:left-[-1.5%]
                          after:z-[-1] after:transition-all
                          after:duration-[0.2s] after:ease-in-out after:!mt-0
                          after:rounded-[5rem] after:bottom-[4%]
                          motion-reduce:after:transition-none after:bg-[#3f78e0]
                          grape"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className="relative z-[2] whitespace-nowrap
                          after:content-[''] after:block after:absolute
                          after:w-[102.5%] after:h-[10%] after:left-[-1.5%]
                          after:z-[-1] after:transition-all
                          after:duration-[0.2s] after:ease-in-out after:!mt-0
                          after:rounded-[5rem] after:bottom-[4%]
                          motion-reduce:after:transition-none after:bg-[#3f78e0]
                          navy"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className="relative z-[2] whitespace-nowrap
                          after:content-[''] after:block after:absolute
                          after:w-[102.5%] after:h-[10%] after:left-[-1.5%]
                          after:z-[-1] after:transition-all
                          after:duration-[0.2s] after:ease-in-out after:!mt-0
                          after:rounded-[5rem] after:bottom-[4%]
                          motion-reduce:after:transition-none after:bg-[#3f78e0]
                          ash"&gt;text&lt;/span&gt;{"\n"}
                          {"  "}
                          {"\n"}&lt;span className="relative z-[2]
                          whitespace-nowrap after:content-[''] after:block
                          after:absolute after:w-[102.5%] after:h-[10%]
                          after:left-[-1.5%] after:z-[-1] after:transition-all
                          after:duration-[0.2s] after:ease-in-out after:!mt-0
                          after:rounded-[5rem] after:bottom-[4%]
                          motion-reduce:after:transition-none after:bg-[#3f78e0]
                          after:!bg-[linear-gradient(120deg,#f857a6_10%,#ef3f6e_100%)]"&gt;text&lt;/span&gt;
                          {"\n"}&lt;span className="relative z-[2]
                          whitespace-nowrap after:content-[''] after:block
                          after:absolute after:w-[102.5%] after:h-[10%]
                          after:left-[-1.5%] after:z-[-1] after:transition-all
                          after:duration-[0.2s] after:ease-in-out after:!mt-0
                          after:rounded-[5rem] after:bottom-[4%]
                          motion-reduce:after:transition-none after:bg-[#3f78e0]
                          underline-gradient-2"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className="relative z-[2] whitespace-nowrap
                          after:content-[''] after:block after:absolute
                          after:w-[102.5%] after:h-[10%] after:left-[-1.5%]
                          after:z-[-1] after:transition-all
                          after:duration-[0.2s] after:ease-in-out after:!mt-0
                          after:rounded-[5rem] after:bottom-[4%]
                          motion-reduce:after:transition-none after:bg-[#3f78e0]
                          underline-gradient-3"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className="relative z-[2] whitespace-nowrap
                          after:content-[''] after:block after:absolute
                          after:w-[102.5%] after:h-[10%] after:left-[-1.5%]
                          after:z-[-1] after:transition-all
                          after:duration-[0.2s] after:ease-in-out after:!mt-0
                          after:rounded-[5rem] after:bottom-[4%]
                          motion-reduce:after:transition-none after:bg-[#3f78e0]
                          underline-gradient-4"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className="relative z-[2] whitespace-nowrap
                          after:content-[''] after:block after:absolute
                          after:w-[102.5%] after:h-[10%] after:left-[-1.5%]
                          after:z-[-1] after:transition-all
                          after:duration-[0.2s] after:ease-in-out after:!mt-0
                          after:rounded-[5rem] after:bottom-[4%]
                          motion-reduce:after:transition-none after:bg-[#3f78e0]
                          underline-gradient-5"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className="relative z-[2] whitespace-nowrap
                          after:content-[''] after:block after:absolute
                          after:w-[102.5%] after:h-[10%] after:left-[-1.5%]
                          after:z-[-1] after:transition-all
                          after:duration-[0.2s] after:ease-in-out after:!mt-0
                          after:rounded-[5rem] after:bottom-[4%]
                          motion-reduce:after:transition-none after:bg-[#3f78e0]
                          underline-gradient-6"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className="relative z-[2] whitespace-nowrap
                          after:content-[''] after:block after:absolute
                          after:w-[102.5%] after:h-[10%] after:left-[-1.5%]
                          after:z-[-1] after:transition-all
                          after:duration-[0.2s] after:ease-in-out after:!mt-0
                          after:rounded-[5rem] after:bottom-[4%]
                          motion-reduce:after:transition-none after:bg-[#3f78e0]
                          underline-gradient-7"&gt;text&lt;/span&gt;
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
            <h2 className="!mb-5 !leading-[1.35]">Underline 3</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <h2 className="!text-[calc(1.325rem_+_0.9vw)] font-bold xl:!text-[2rem] !leading-[1.35] !mb-4">
                  Build and manage an{" "}
                  <span className="underline-3 style-1 red !relative z-[1] before:-translate-x-2/4 before:-translate-y-2/4 before:-rotate-1 before:w-[111%] before:h-[110%] before:content-[''] before:z-[-1] before:absolute before:opacity-100 before:rounded-[80%] before:border-t-0 before:border-[#e2626b] before:border-[3px] before:border-solid before:left-2/4 before:top-[52%] after:-translate-x-2/4 after:-translate-y-2/4 after:-rotate-2 after:w-[107%] after:h-[111%] after:content-[''] after:z-[-1] after:absolute after:opacity-100 after:rounded-[80%] after:border-l-0 after:border-b-0 after:border-[#e2626b] after:border-[3px] after:border-solid after:left-2/4 after:top-[52%]">
                    impressive
                  </span>{" "}
                  website with Sandbox in no time.
                </h2>
                <h2 className="!text-[calc(1.325rem_+_0.9vw)] font-bold xl:!text-[2rem] !leading-[1.35] !mb-4">
                  Build and manage an{" "}
                  <span className="!relative z-[2] after:content-[''] after:absolute after:z-[-1] after:block after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2/4 after:left-2/4  style-2 yellow">
                    impressive
                  </span>{" "}
                  website with Sandbox in no time.
                </h2>
                <h2 className="!text-[calc(1.325rem_+_0.9vw)] font-bold xl:!text-[2rem] !leading-[1.35] !mb-4">
                  Build and manage an{" "}
                  <span className="underline-3 style-3 green !relative z-[1] after:content-[''] after:absolute after:z-[-1] after:block after:[background-size:100%_100%] after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2/4 after:left-2/4">
                    impressive
                  </span>{" "}
                  website with Sandbox in no time.
                </h2>
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
                          &lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4
                          {"  "}
                          style-1 yellow"&gt;text&lt;/span&gt;{"\n"}&lt;span
                          className=" !relative z-[1] after:content-['']
                          after:absolute after:z-[-1] after:block
                          after:[background-size:100%_100%] after:bg-no-repeat
                          after:bg-bottom after:bottom-[-0.1em] after:w-[110%]
                          after:h-[0.3em] after:-translate-x-2/4 after:left-2/4
                          {"  "}style-1 orange"&gt;text&lt;/span&gt;
                          {"\n"}&lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4{"  "}
                          style-1 red"&gt;text&lt;/span&gt;{"\n"}&lt;span
                          className=" !relative z-[1] after:content-['']
                          after:absolute after:z-[-1] after:block
                          after:[background-size:100%_100%] after:bg-no-repeat
                          after:bg-bottom after:bottom-[-0.1em] after:w-[110%]
                          after:h-[0.3em] after:-translate-x-2/4 after:left-2/4
                          {"  "}style-1 pink"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4
                          {"  "}
                          style-1 violet"&gt;text&lt;/span&gt;{"\n"}&lt;span
                          className=" !relative z-[1] after:content-['']
                          after:absolute after:z-[-1] after:block
                          after:[background-size:100%_100%] after:bg-no-repeat
                          after:bg-bottom after:bottom-[-0.1em] after:w-[110%]
                          after:h-[0.3em] after:-translate-x-2/4 after:left-2/4
                          {"  "}style-1 purple"&gt;text&lt;/span&gt;
                          {"\n"}&lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4{"  "}
                          style-1 blue"&gt;text&lt;/span&gt;{"\n"}&lt;span
                          className=" !relative z-[1] after:content-['']
                          after:absolute after:z-[-1] after:block
                          after:[background-size:100%_100%] after:bg-no-repeat
                          after:bg-bottom after:bottom-[-0.1em] after:w-[110%]
                          after:h-[0.3em] after:-translate-x-2/4 after:left-2/4
                          {"  "}style-1 aqua"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4
                          {"  "}
                          style-1 green"&gt;text&lt;/span&gt;{"\n"}&lt;span
                          className=" !relative z-[1] after:content-['']
                          after:absolute after:z-[-1] after:block
                          after:[background-size:100%_100%] after:bg-no-repeat
                          after:bg-bottom after:bottom-[-0.1em] after:w-[110%]
                          after:h-[0.3em] after:-translate-x-2/4 after:left-2/4
                          {"  "}style-1 leaf"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4
                          {"  "}
                          style-1 fuchsia"&gt;text&lt;/span&gt;{"\n"}&lt;span
                          className=" !relative z-[1] after:content-['']
                          after:absolute after:z-[-1] after:block
                          after:[background-size:100%_100%] after:bg-no-repeat
                          after:bg-bottom after:bottom-[-0.1em] after:w-[110%]
                          after:h-[0.3em] after:-translate-x-2/4 after:left-2/4
                          {"  "}style-1 sky"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4
                          {"  "}
                          style-1 grape"&gt;text&lt;/span&gt;{"\n"}&lt;span
                          className=" !relative z-[1] after:content-['']
                          after:absolute after:z-[-1] after:block
                          after:[background-size:100%_100%] after:bg-no-repeat
                          after:bg-bottom after:bottom-[-0.1em] after:w-[110%]
                          after:h-[0.3em] after:-translate-x-2/4 after:left-2/4
                          {"  "}style-1 navy"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4
                          {"  "}
                          style-1 ash"&gt;text&lt;/span&gt;{"\n"}
                          {"  "}
                          {"\n"}&lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4{"  "}
                          style-2 yellow"&gt;text&lt;/span&gt;{"\n"}&lt;span
                          className=" !relative z-[1] after:content-['']
                          after:absolute after:z-[-1] after:block
                          after:[background-size:100%_100%] after:bg-no-repeat
                          after:bg-bottom after:bottom-[-0.1em] after:w-[110%]
                          after:h-[0.3em] after:-translate-x-2/4 after:left-2/4
                          {"  "}style-2 orange"&gt;text&lt;/span&gt;
                          {"\n"}&lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4{"  "}
                          style-2 red"&gt;text&lt;/span&gt;{"\n"}&lt;span
                          className=" !relative z-[1] after:content-['']
                          after:absolute after:z-[-1] after:block
                          after:[background-size:100%_100%] after:bg-no-repeat
                          after:bg-bottom after:bottom-[-0.1em] after:w-[110%]
                          after:h-[0.3em] after:-translate-x-2/4 after:left-2/4
                          {"  "}style-2 pink"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4
                          {"  "}
                          style-2 violet"&gt;text&lt;/span&gt;{"\n"}&lt;span
                          className=" !relative z-[1] after:content-['']
                          after:absolute after:z-[-1] after:block
                          after:[background-size:100%_100%] after:bg-no-repeat
                          after:bg-bottom after:bottom-[-0.1em] after:w-[110%]
                          after:h-[0.3em] after:-translate-x-2/4 after:left-2/4
                          {"  "}style-2 purple"&gt;text&lt;/span&gt;
                          {"\n"}&lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4{"  "}
                          style-2 blue"&gt;text&lt;/span&gt;{"\n"}&lt;span
                          className=" !relative z-[1] after:content-['']
                          after:absolute after:z-[-1] after:block
                          after:[background-size:100%_100%] after:bg-no-repeat
                          after:bg-bottom after:bottom-[-0.1em] after:w-[110%]
                          after:h-[0.3em] after:-translate-x-2/4 after:left-2/4
                          {"  "}style-2 aqua"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4
                          {"  "}
                          style-2 green"&gt;text&lt;/span&gt;{"\n"}&lt;span
                          className=" !relative z-[1] after:content-['']
                          after:absolute after:z-[-1] after:block
                          after:[background-size:100%_100%] after:bg-no-repeat
                          after:bg-bottom after:bottom-[-0.1em] after:w-[110%]
                          after:h-[0.3em] after:-translate-x-2/4 after:left-2/4
                          {"  "}style-2 leaf"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4
                          {"  "}
                          style-2 fuchsia"&gt;text&lt;/span&gt;{"\n"}&lt;span
                          className=" !relative z-[1] after:content-['']
                          after:absolute after:z-[-1] after:block
                          after:[background-size:100%_100%] after:bg-no-repeat
                          after:bg-bottom after:bottom-[-0.1em] after:w-[110%]
                          after:h-[0.3em] after:-translate-x-2/4 after:left-2/4
                          {"  "}style-2 sky"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4
                          {"  "}
                          style-2 grape"&gt;text&lt;/span&gt;{"\n"}&lt;span
                          className=" !relative z-[1] after:content-['']
                          after:absolute after:z-[-1] after:block
                          after:[background-size:100%_100%] after:bg-no-repeat
                          after:bg-bottom after:bottom-[-0.1em] after:w-[110%]
                          after:h-[0.3em] after:-translate-x-2/4 after:left-2/4
                          {"  "}style-2 navy"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4
                          {"  "}
                          style-2 ash"&gt;text&lt;/span&gt;{"\n"}
                          {"  "}
                          {"\n"}&lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4{"  "}
                          style-3 primary"&gt;text&lt;/span&gt;{"\n"}&lt;span
                          className=" !relative z-[1] after:content-['']
                          after:absolute after:z-[-1] after:block
                          after:[background-size:100%_100%] after:bg-no-repeat
                          after:bg-bottom after:bottom-[-0.1em] after:w-[110%]
                          after:h-[0.3em] after:-translate-x-2/4 after:left-2/4
                          {"  "}style-3 yellow"&gt;text&lt;/span&gt;
                          {"\n"}&lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4{"  "}
                          style-3 orange"&gt;text&lt;/span&gt;{"\n"}&lt;span
                          className=" !relative z-[1] after:content-['']
                          after:absolute after:z-[-1] after:block
                          after:[background-size:100%_100%] after:bg-no-repeat
                          after:bg-bottom after:bottom-[-0.1em] after:w-[110%]
                          after:h-[0.3em] after:-translate-x-2/4 after:left-2/4
                          {"  "}style-3 red"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4
                          {"  "}
                          style-3 pink"&gt;text&lt;/span&gt;{"\n"}&lt;span
                          className=" !relative z-[1] after:content-['']
                          after:absolute after:z-[-1] after:block
                          after:[background-size:100%_100%] after:bg-no-repeat
                          after:bg-bottom after:bottom-[-0.1em] after:w-[110%]
                          after:h-[0.3em] after:-translate-x-2/4 after:left-2/4
                          {"  "}style-3 violet"&gt;text&lt;/span&gt;
                          {"\n"}&lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4{"  "}
                          style-3 purple"&gt;text&lt;/span&gt;{"\n"}&lt;span
                          className=" !relative z-[1] after:content-['']
                          after:absolute after:z-[-1] after:block
                          after:[background-size:100%_100%] after:bg-no-repeat
                          after:bg-bottom after:bottom-[-0.1em] after:w-[110%]
                          after:h-[0.3em] after:-translate-x-2/4 after:left-2/4
                          {"  "}style-3 blue"&gt;text&lt;/span&gt;{"\n"}
                          &lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4
                          {"  "}
                          style-3 aqua"&gt;text&lt;/span&gt;{"\n"}&lt;span
                          className=" !relative z-[1] after:content-['']
                          after:absolute after:z-[-1] after:block
                          after:[background-size:100%_100%] after:bg-no-repeat
                          after:bg-bottom after:bottom-[-0.1em] after:w-[110%]
                          after:h-[0.3em] after:-translate-x-2/4 after:left-2/4
                          {"  "}style-3 green"&gt;text&lt;/span&gt;
                          {"\n"}&lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4{"  "}
                          style-3 leaf"&gt;text&lt;/span&gt;{"\n"}&lt;span
                          className=" !relative z-[1] after:content-['']
                          after:absolute after:z-[-1] after:block
                          after:[background-size:100%_100%] after:bg-no-repeat
                          after:bg-bottom after:bottom-[-0.1em] after:w-[110%]
                          after:h-[0.3em] after:-translate-x-2/4 after:left-2/4
                          {"  "}style-3 fuchsia"&gt;text&lt;/span&gt;
                          {"\n"}&lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4{"  "}
                          style-3 sky"&gt;text&lt;/span&gt;{"\n"}&lt;span
                          className=" !relative z-[1] after:content-['']
                          after:absolute after:z-[-1] after:block
                          after:[background-size:100%_100%] after:bg-no-repeat
                          after:bg-bottom after:bottom-[-0.1em] after:w-[110%]
                          after:h-[0.3em] after:-translate-x-2/4 after:left-2/4
                          {"  "}style-3 grape"&gt;text&lt;/span&gt;
                          {"\n"}&lt;span className=" !relative z-[1]
                          after:content-[''] after:absolute after:z-[-1]
                          after:block after:[background-size:100%_100%]
                          after:bg-no-repeat after:bg-bottom
                          after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em]
                          after:-translate-x-2/4 after:left-2/4{"  "}
                          style-3 navy"&gt;text&lt;/span&gt;{"\n"}&lt;span
                          className=" !relative z-[1] after:content-['']
                          after:absolute after:z-[-1] after:block
                          after:[background-size:100%_100%] after:bg-no-repeat
                          after:bg-bottom after:bottom-[-0.1em] after:w-[110%]
                          after:h-[0.3em] after:-translate-x-2/4 after:left-2/4
                          {"  "}style-3 ash"&gt;text&lt;/span&gt;
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
            <h2 className="!mb-5 !leading-[1.35]">Mark</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <h2>
                  We bring rapid <mark>solutions</mark> for your business.
                </h2>
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
                        <code>&lt;mark&gt;text&lt;/mark&gt;</code>
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
