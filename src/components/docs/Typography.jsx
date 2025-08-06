import React from "react";
import DocsSidebar from "./DocsSidebar";
import CodeSnippetContainer from "../common/CodeSnippetContainer";
import { Link } from "react-router-dom";

export default function Typography() {
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
                    Headings
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-2"
                  >
                    Display Headings
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-3"
                  >
                    Tiny Headings
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-4"
                  >
                    Lead
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-5"
                  >
                    Lists
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-6"
                  >
                    Blockquote
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-7"
                  >
                    Dropcap
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-8"
                  >
                    Links
                  </a>
                </li>
              </ul>
            </nav>
            {/* /nav */}
          </div>
          {/* /.widget */}
        </aside>
        {/* /column */}
        <div
          className="xl:w-8/12 flex-[0_0_auto] !px-[15px] max-w-full xl:!order-2"
          data-bs-root-margin="-50px"
        >
          <section className="wrapper pt-24 !mb-[-3.5rem]">
            <div
              className="alert alert-primary !text-[#2c549d] !bg-[#edf2fc] !border-[#2c549d] alert-icon !p-[1rem] !pl-10 !border-0 !shadow-none"
              role="alert"
            >
              <i
                className="uil uil-exclamation-circle before:content-['\ead0']"
                style={{ marginTop: 4 }}
              />{" "}
              You can apply any Sandbox color you see{" "}
              <Link
                to={`/docs/styleguide/colors#snippet-4`}
                className="internal !bg-[rgba(63,120,224)] opacity-100 !text-white after:!text-white"
              >
                here
              </Link>{" "}
              to your text.
            </div>
          </section>
          <section id="snippet-1" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Headings</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px]">
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                    <h1 className="!leading-[1.3]">h1. heading</h1>
                    <h2 className="!leading-[1.35]">h2. heading</h2>
                    <h3 className="!leading-[1.4]">h3. heading</h3>
                    <h4 className="!leading-[1.45]">h4. heading</h4>
                    <h5 className="!leading-[1.5]">h5. heading</h5>
                    <h6 className="!mb-0 !leading-[1.55]">h6. heading</h6>
                  </div>
                  {/* /column */}
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                    <h1 className="uppercase !tracking-[0.02rem] !leading-[1.3]">
                      h1. heading
                    </h1>
                    <h2 className="uppercase !tracking-[0.02rem] !leading-[1.35]">
                      h2. heading
                    </h2>
                    <h3 className="uppercase !tracking-[0.02rem] !leading-[1.4]">
                      h3. heading
                    </h3>
                    <h4 className="uppercase !tracking-[0.02rem] !leading-[1.45]">
                      h4. heading
                    </h4>
                    <h5 className="uppercase !tracking-[0.02rem] !leading-[1.5]">
                      h5. heading
                    </h5>
                    <h6 className="uppercase !tracking-[0.02rem] !mb-0 !leading-[1.55]">
                      h6. heading
                    </h6>
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
                          {"                      "}&lt;div className="flex
                          flex-wrap mx-[-15px]"&gt;{"\n"}
                          {"                        "}&lt;div
                          className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto]
                          !px-[15px] max-w-full"&gt;
                          {"\n"}
                          {"                          "}&lt;h1
                          className="!leading-[1.3]"&gt;h1. heading&lt;/h1&gt;
                          {"\n"}
                          {"                          "}&lt;h2
                          className="!leading-[1.35]"&gt;h2. heading&lt;/h2&gt;
                          {"\n"}
                          {"                          "}&lt;h3
                          className="!leading-[1.4]"&gt;h3. heading&lt;/h3&gt;
                          {"\n"}
                          {"                          "}&lt;h4
                          className="!leading-[1.45]"&gt;h4. heading&lt;/h4&gt;
                          {"\n"}
                          {"                          "}&lt;h5
                          className="!leading-[1.5]"&gt;h5. heading&lt;/h5&gt;
                          {"\n"}
                          {"                          "}&lt;h6 className="!mb-0
                          !leading-[1.55]"&gt;h6. heading&lt;/h6&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!-- /column --&gt;
                          {"\n"}
                          {"                        "}&lt;div
                          className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto]
                          !px-[15px] max-w-full"&gt;
                          {"\n"}
                          {"                          "}&lt;h1
                          className="uppercase !tracking-[0.02rem]
                          !leading-[1.3]"&gt;h1. heading&lt;/h1&gt;{"\n"}
                          {"                          "}&lt;h2
                          className="uppercase !tracking-[0.02rem]
                          !leading-[1.35]"&gt;h2. heading&lt;/h2&gt;{"\n"}
                          {"                          "}&lt;h3
                          className="uppercase !tracking-[0.02rem]
                          !leading-[1.4]"&gt;h3. heading&lt;/h3&gt;{"\n"}
                          {"                          "}&lt;h4
                          className="uppercase !tracking-[0.02rem]
                          !leading-[1.45]"&gt;h4. heading&lt;/h4&gt;{"\n"}
                          {"                          "}&lt;h5
                          className="uppercase !tracking-[0.02rem]
                          !leading-[1.5]"&gt;h5. heading&lt;/h5&gt;{"\n"}
                          {"                          "}&lt;h6
                          className="uppercase !tracking-[0.02rem] !mb-0
                          !leading-[1.55]"&gt;h6. heading&lt;/h6&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!-- /column --&gt;
                          {"\n"}
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
          <section id="snippet-2" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Display Headings</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem]">
                  Display 1
                </h1>
                <h1 className="!text-[calc(1.345rem_+_1.14vw)] font-bold !leading-[1.25] xl:!text-[2.2rem]">
                  Display 2
                </h1>
                <h1 className="!text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] xl:!text-[2rem]">
                  Display 3
                </h1>
                <h1 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3]">
                  Display 4
                </h1>
                <h1 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3]">
                  Display 5
                </h1>
                <h1 className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35]  !mb-0">
                  Display 6
                </h1>
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
                          &lt;h1 className="text-[calc(1.365rem_+_1.38vw)]
                          font-bold !leading-[1.2] xl:!text-[2.4rem]"&gt;Display
                          1&lt;/h1&gt;
                          {"\n"}&lt;h1 className="text-[calc(1.345rem_+_1.14vw)]
                          font-bold !leading-[1.2] xl:!text-[2.2rem]"&gt;Display
                          2&lt;/h1&gt;
                          {"\n"}&lt;h1 className="text-[calc(1.325rem_+_0.9vw)]
                          font-bold !leading-[1.2] xl:!text-[2rem]"&gt;Display
                          3&lt;/h1&gt;
                          {"\n"}&lt;h1 className="text-[calc(1.305rem_+_0.66vw)]
                          font-bold xl:!text-[1.8rem] !leading-[1.3]"&gt;Display
                          4&lt;/h1&gt;
                          {"\n"}&lt;h1 className="text-[calc(1.285rem_+_0.42vw)]
                          font-bold xl:!text-[1.6rem] !leading-[1.3]"&gt;Display
                          5&lt;/h1&gt;
                          {"\n"}&lt;h1 className="text-[calc(1.265rem_+_0.18vw)]
                          font-bold xl:!text-[1.4rem]
                          !leading-[1.35]"&gt;Display 6&lt;/h1&gt;
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
            <h2 className="!mb-5 !leading-[1.35]">Tiny Headings</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px]">
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <h2 className="!text-[.75rem] uppercase !text-[#343f52] !mb-0 !leading-[1.35]">
                      Tiny Heading
                    </h2>
                  </div>
                  {/*/column */}
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <h2 className="!text-[.75rem] uppercase  text-line relative align-top !pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0] !text-[#343f52] !mb-0 !leading-[1.35]">
                      Tiny Heading with Line
                    </h2>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
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
                          &lt;h2 className="!text-[.75rem] uppercase
                          !text-[#343f52]"&gt;Tiny heading&lt;/h2&gt;{"\n"}
                          &lt;h2 className="!text-[.75rem] uppercase{"  "}
                          text-line relative align-top !pl-[1.4rem]
                          before:content-[''] before:absolute
                          before:inline-block before:translate-y-[-60%]
                          before:w-3 before:h-[0.05rem] before:left-0
                          before:top-2/4 before:bg-[#3f78e0]{"  "}
                          !text-[#343f52]"&gt;Tiny heading with line&lt;/h2&gt;
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
            <h2 className="!mb-5 !leading-[1.35]">Lead</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <p className="lead !leading-[1.65] text-[0.9rem] font-medium">
                  Lead
                </p>
                <p className="lead text-[1.05rem] !leading-[1.6] font-medium !mb-0">
                  Lead Larger
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
                          {"\n"}
                          {"                      "}&lt;p className="lead
                          !leading-[1.65] text-[0.9rem]
                          font-medium"&gt;Lead&lt;/p&gt;{"\n"}
                          {"                      "}&lt;p className="lead
                          text-[1.05rem] !leading-[1.6] font-medium
                          !mb-0"&gt;Lead Larger&lt;/p&gt;
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
            <h2 className="!mb-5 !leading-[1.35]">Lists</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px]">
                  <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <ul className="pl-0 list-none bullet-primary  !mb-0">
                      <li className="relative !pl-4 before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:!text-[#3f78e0] before:left-0 before:font-SansSerif">
                        Aenean eu leo quam.
                      </li>
                      <li className="relative !mt-[0.35rem] !pl-4 before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:!text-[#3f78e0] before:left-0 before:font-SansSerif">
                        Nullam quis risus eget.
                      </li>
                      <li className="relative !mt-[0.35rem] !pl-4 before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:!text-[#3f78e0] before:left-0 before:font-SansSerif">
                        Donec id elit non mi porta.
                      </li>
                      <li className="relative !mt-[0.35rem] !pl-4 before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:!text-[#3f78e0] before:left-0 before:font-SansSerif">
                        Fusce dapibus cursus.
                      </li>
                    </ul>
                  </div>
                  {/* /column */}
                  <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <ul className="pl-0 list-none bullet-primary  !mb-0">
                      <li className="relative !pl-5">
                        <span>
                          <i className="uil uil-arrow-right before:content-['\e94c'] absolute top-[-0.2rem] text-base !text-[#3f78e0] left-0" />
                        </span>
                        <span>Aenean eu leo quam.</span>
                      </li>
                      <li className="relative !mt-[0.35rem] !pl-5">
                        <span>
                          <i className="uil uil-arrow-right before:content-['\e94c'] absolute top-[-0.2rem] text-base !text-[#3f78e0] left-0" />
                        </span>
                        <span>Nullam quis risus eget.</span>
                      </li>
                      <li className="relative !mt-[0.35rem] !pl-5">
                        <span>
                          <i className="uil uil-arrow-right before:content-['\e94c'] absolute top-[-0.2rem] text-base !text-[#3f78e0] left-0" />
                        </span>
                        <span>Donec id elit non mi porta.</span>
                      </li>
                      <li className="relative !mt-[0.35rem] !pl-5">
                        <span>
                          <i className="uil uil-arrow-right before:content-['\e94c'] absolute top-[-0.2rem] text-base !text-[#3f78e0] left-0" />
                        </span>
                        <span>Fusce dapibus cursus.</span>
                      </li>
                    </ul>
                  </div>
                  {/* /column */}
                  <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <ul className="pl-0 list-none bullet-bg bullet-soft-green  !mb-0">
                      <li className="relative flex items-center">
                        <span className="pr-[.75rem]">
                          <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center !bg-[#def4ee] !text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                        </span>
                        <span>Aenean eu leo quam.</span>
                      </li>
                      <li className="relative !mt-[0.35rem] flex items-center">
                        <span className="pr-[.75rem]">
                          <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center !bg-[#def4ee] !text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                        </span>
                        <span>Nullam quis risus eget.</span>
                      </li>
                      <li className="relative !mt-[0.35rem] flex items-center">
                        <span className="pr-[.75rem]">
                          <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center !bg-[#def4ee] !text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                        </span>
                        <span>Donec id elit non mi porta.</span>
                      </li>
                      <li className="relative !mt-[0.35rem] flex items-center">
                        <span className="pr-[.75rem]">
                          <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center !bg-[#def4ee] !text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                        </span>
                        <span>Fusce dapibus cursus.</span>
                      </li>
                    </ul>
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
                          {"\n"}
                          {"                      "}&lt;ul className="pl-0
                          list-none bullet-primary{"  "}!mb-0"&gt;{"\n"}
                          {"                        "}&lt;li className="relative
                          !pl-4 before:absolute before:top-[-0.15rem]
                          before:text-[1rem] before:content-['\2022']
                          before:!text-[#3f78e0] before:left-0
                          before:font-SansSerif"&gt;Aenean eu leo
                          quam.&lt;/li&gt;
                          {"\n"}
                          {"                        "}&lt;li className="relative
                          !mt-[0.35rem] !pl-4 before:absolute
                          before:top-[-0.15rem] before:text-[1rem]
                          before:content-['\2022'] before:!text-[#3f78e0]
                          before:left-0 before:font-SansSerif"&gt;Nullam quis
                          risus eget.&lt;/li&gt;
                          {"\n"}
                          {"                        "}&lt;li className="relative
                          !mt-[0.35rem] !pl-4 before:absolute
                          before:top-[-0.15rem] before:text-[1rem]
                          before:content-['\2022'] before:!text-[#3f78e0]
                          before:left-0 before:font-SansSerif"&gt;Donec id elit
                          non mi porta.&lt;/li&gt;{"\n"}
                          {"                        "}&lt;li className="relative
                          !mt-[0.35rem] !pl-4 before:absolute
                          before:top-[-0.15rem] before:text-[1rem]
                          before:content-['\2022'] before:!text-[#3f78e0]
                          before:left-0 before:font-SansSerif"&gt;Fusce dapibus
                          cursus.&lt;/li&gt;
                          {"\n"}
                          {"                      "}&lt;/ul&gt;{"\n"}
                          {"  "}
                          {"\n"}
                          {"                      "}&lt;ul className="pl-0
                          list-none bullet-primary{"  "}!mb-0"&gt;{"\n"}
                          {"  "}&lt;li className="relative
                          !pl-5"&gt;&lt;span&gt;&lt;i className="uil
                          uil-arrow-right before:content-['\e94c'] absolute
                          top-[-0.2rem] text-base !text-[#3f78e0]
                          left-0"&gt;&lt;/i&gt;&lt;/span&gt;&lt;span&gt;Aenean
                          eu leo quam.&lt;/span&gt;&lt;/li&gt;{"\n"}
                          {"  "}&lt;li className="relative !mt-[0.35rem]
                          !pl-5"&gt;&lt;span&gt;&lt;i className="uil
                          uil-arrow-right before:content-['\e94c'] absolute
                          top-[-0.2rem] text-base !text-[#3f78e0]
                          left-0"&gt;&lt;/i&gt;&lt;/span&gt;&lt;span&gt;Nullam
                          quis risus eget.&lt;/span&gt;&lt;/li&gt;{"\n"}
                          {"  "}&lt;li className="relative !mt-[0.35rem]
                          !pl-5"&gt;&lt;span&gt;&lt;i className="uil
                          uil-arrow-right before:content-['\e94c'] absolute
                          top-[-0.2rem] text-base !text-[#3f78e0]
                          left-0"&gt;&lt;/i&gt;&lt;/span&gt;&lt;span&gt;Donec id
                          elit non mi porta.&lt;/span&gt;&lt;/li&gt;{"\n"}
                          {"  "}&lt;li className="relative !mt-[0.35rem]
                          !pl-5"&gt;&lt;span&gt;&lt;i className="uil
                          uil-arrow-right before:content-['\e94c'] absolute
                          top-[-0.2rem] text-base !text-[#3f78e0]
                          left-0"&gt;&lt;/i&gt;&lt;/span&gt;&lt;span&gt;Fusce
                          dapibus cursus.&lt;/span&gt;&lt;/li&gt;{"\n"}
                          {"                      "}&lt;/ul&gt;{"\n"}
                          {"  "}
                          {"\n"}
                          {"                      "}&lt;ul className="pl-0
                          list-none bullet-bg bullet-soft-green{"  "}!mb-0"&gt;
                          {"\n"}
                          {"                        "}&lt;li className="relative
                          flex items-center"&gt;&lt;span
                          className="pr-[.75rem]"&gt;&lt;i className="uil
                          uil-check w-4 h-4 text-[0.8rem] leading-none
                          !tracking-[normal] !text-center flex justify-center
                          items-center !bg-[#def4ee] !text-[#45c4a0]
                          rounded-[100%] top-[0.2rem] before:content-['\e9dd']
                          before:align-middle
                          before:table-cell"&gt;&lt;/i&gt;&lt;/span&gt;&lt;span&gt;Aenean
                          eu leo quam.&lt;/span&gt;&lt;/li&gt;{"\n"}
                          {"                        "}&lt;li className="relative
                          !mt-[0.35rem] flex items-center"&gt;&lt;span
                          className="pr-[.75rem]"&gt;&lt;i className="uil
                          uil-check w-4 h-4 text-[0.8rem] leading-none
                          !tracking-[normal] !text-center flex justify-center
                          items-center !bg-[#def4ee] !text-[#45c4a0]
                          rounded-[100%] top-[0.2rem] before:content-['\e9dd']
                          before:align-middle
                          before:table-cell"&gt;&lt;/i&gt;&lt;/span&gt;&lt;span&gt;Nullam
                          quis risus eget.&lt;/span&gt;&lt;/li&gt;{"\n"}
                          {"                        "}&lt;li className="relative
                          !mt-[0.35rem] flex items-center"&gt;&lt;span
                          className="pr-[.75rem]"&gt;&lt;i className="uil
                          uil-check w-4 h-4 text-[0.8rem] leading-none
                          !tracking-[normal] !text-center flex justify-center
                          items-center !bg-[#def4ee] !text-[#45c4a0]
                          rounded-[100%] top-[0.2rem] before:content-['\e9dd']
                          before:align-middle
                          before:table-cell"&gt;&lt;/i&gt;&lt;/span&gt;&lt;span&gt;Donec
                          id elit non mi porta.&lt;/span&gt;&lt;/li&gt;{"\n"}
                          {"                        "}&lt;li className="relative
                          !mt-[0.35rem] flex items-center"&gt;&lt;span
                          className="pr-[.75rem]"&gt;&lt;i className="uil
                          uil-check w-4 h-4 text-[0.8rem] leading-none
                          !tracking-[normal] !text-center flex justify-center
                          items-center !bg-[#def4ee] !text-[#45c4a0]
                          rounded-[100%] top-[0.2rem] before:content-['\e9dd']
                          before:align-middle
                          before:table-cell"&gt;&lt;/i&gt;&lt;/span&gt;&lt;span&gt;Fusce
                          dapibus cursus.&lt;/span&gt;&lt;/li&gt;{"\n"}
                          {"                      "}&lt;/ul&gt;
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
            <h2 className="!mb-5 !leading-[1.35]">Blockquote</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] !mt-[-20px] xl:!mt-0 lg:!mt-0 md:!mt-0 items-center">
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                    <figure>
                      <blockquote className="border-l-[#3f78e0] !leading-[1.7] font-medium !pl-4 border-l-[0.15rem] border-solid text-[1rem] m-[0_0_1rem]">
                        <p>
                          Sed posuere consectetur est at lobortis. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit. Duis
                          mollis, est non commodo luctus, nisi erat porttitor
                          ligula lacinia odio.
                        </p>
                      </blockquote>
                      <figcaption className="!text-[0.6rem] !text-[#aab0bc] !mb-0 before:content-['\2014\a0'] font-bold uppercase !tracking-[0.02rem]">
                        Connor Gibson
                      </figcaption>
                    </figure>
                  </div>
                  {/* /column */}
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                    <div className="card  !mb-0">
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <figure className="!mb-0">
                          <blockquote className="icon relative p-0 border-0 text-[1rem] !leading-[1.7] font-medium m-[0_0_1rem] before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                            <p>
                              Sed posuere consectetur est at lobortis. Lorem
                              ipsum dolor sit amet, consectetur adipiscing elit.
                              Duis mollis, est non commodo luctus.
                            </p>
                          </blockquote>
                          <figcaption className="!text-[0.6rem] !text-[#aab0bc] !mb-0 before:content-['\2014\a0'] font-bold uppercase !tracking-[0.02rem]">
                            Connor Gibson
                          </figcaption>
                        </figure>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/* /.card */}
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
                          {"\n"}
                          {"                      "}&lt;figure&gt;{"\n"}
                          {"                        "}&lt;blockquote
                          className="border-l-[#3f78e0] !leading-[1.7]
                          font-medium !pl-4 border-l-[0.15rem] border-solid
                          text-[1rem] m-[0_0_1rem]"&gt;{"\n"}
                          {"                          "}&lt;p&gt;Sed posuere
                          consectetur est at lobortis. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit. Duis mollis, est
                          non commodo luctus, nisi erat porttitor ligula lacinia
                          odio.&lt;/p&gt;
                          {"\n"}
                          {"                        "}&lt;/blockquote&gt;{"\n"}
                          {"                        "}&lt;figcaption
                          className="!text-[0.6rem] !text-[#aab0bc] !mb-0
                          before:content-['\2014\a0'] font-bold uppercase
                          !tracking-[0.02rem]"&gt;Connor
                          Gibson&lt;/figcaption&gt;
                          {"\n"}
                          {"                      "}&lt;/figure&gt;{"\n"}
                          {"  "}
                          {"\n"}
                          {"                          "}&lt;figure
                          className="!mb-0"&gt;
                          {"\n"}
                          {"                            "}&lt;blockquote
                          className="icon relative p-0 border-0 text-[1rem]
                          !leading-[1.7] font-medium m-[0_0_1rem]
                          before:content-['\201d'] before:absolute
                          before:top-[-1.5rem] before:left-[-0.9rem]
                          before:text-[rgba(52,63,82,0.05)] before:text-[10rem]
                          before:leading-none before:z-[1]"&gt;{"\n"}
                          {"                              "}&lt;p&gt;Sed posuere
                          consectetur est at lobortis. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit. Duis mollis, est
                          non commodo luctus.&lt;/p&gt;{"\n"}
                          {"                            "}&lt;/blockquote&gt;
                          {"\n"}
                          {"                            "}&lt;figcaption
                          className="!text-[0.6rem] !text-[#aab0bc] !mb-0
                          before:content-['\2014\a0'] font-bold uppercase
                          !tracking-[0.02rem]"&gt;Connor
                          Gibson&lt;/figcaption&gt;
                          {"\n"}
                          {"                          "}&lt;/figure&gt;
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
          <section id="snippet-7" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Dropcap</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px]">
                  <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full">
                    <p>
                      <span className="xl:!text-[2.5rem] block float-left !text-[calc(1.375rem_+_1.5vw)] leading-none font-medium !ml-0 !mr-[0.6rem] !mt-[0.2rem]  !mb-0 p-0text-[#343f52]">
                        A
                      </span>
                      enean non lectus sit amet est imperdiet cursus elementum
                      vitae eros. Cras quis odio in risus euismod suscipit.
                      Fusce viverra ligula vel justo bibendum semper amet.
                    </p>
                  </div>
                  {/* /column */}
                  <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full">
                    <p>
                      <span className="xl:!text-[2.5rem] block float-left !text-[calc(1.375rem_+_1.5vw)] leading-none font-medium !ml-0 !mr-[0.6rem] !mt-[0.2rem] !mb-0 !p-0 !text-[#3f78e0] ">
                        A
                      </span>
                      enean non lectus sit amet est imperdiet cursus elementum
                      vitae eros. Cras quis odio in risus euismod suscipit.
                      Fusce viverra ligula vel justo bibendum semper amet.
                    </p>
                  </div>
                  {/* /column */}
                  <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full">
                    <p>
                      <span className="xl:!text-[1.4rem] float-left leading-none font-medium m-[.25rem_.5rem_0_0] p-0 !rounded-[50%] !text-[#3f78e0]  !bg-[#e0e9fa] text-[1.4rem] h-[2.3rem] w-[2.3rem] flex content-center items-center justify-center pb-[0.15rem]">
                        A
                      </span>
                      enean non lectus sit amet est imperdiet cursus elementum
                      vitae eros. Cras quis odio in risus euismod suscipit.
                      Fusce viverra ligula vel justo bibendum semper amet.
                    </p>
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
                          {"\n"}
                          {"                      "}&lt;p&gt;&lt;span
                          className="xl:!text-[2.5rem] block float-left
                          !text-[calc(1.375rem_+_1.5vw)] leading-none
                          font-medium !ml-0 !mr-[0.6rem] !mt-[0.2rem]{"  "}!mb-0
                          p-0text-[#343f52]"&gt;A&lt;/span&gt;enean non lectus
                          sit amet est imperdiet cursus elementum vitae eros.
                          Cras quis odio in risus euismod suscipit. Fusce
                          viverra ligula vel justo bibendum semper
                          amet.&lt;/p&gt;{"\n"}
                          {"  "}
                          {"\n"}
                          {"                      "}&lt;p&gt;&lt;span
                          className="xl:!text-[2.5rem] block float-left
                          !text-[calc(1.375rem_+_1.5vw)] leading-none
                          font-medium !ml-0 !mr-[0.6rem] !mt-[0.2rem] !mb-0 !p-0
                          !text-[#3f78e0] "&gt;A&lt;/span&gt;enean non lectus
                          sit amet est imperdiet cursus elementum vitae eros.
                          Cras quis odio in risus euismod suscipit. Fusce
                          viverra ligula vel justo bibendum semper
                          amet.&lt;/p&gt;{"\n"}
                          {"  "}
                          {"\n"}
                          {"                      "}&lt;p&gt;&lt;span
                          className="xl:!text-[1.4rem] float-left leading-none
                          font-medium m-[.25rem_.5rem_0_0] p-0 !rounded-[50%]
                          !text-[#3f78e0]
                          {"  "}!bg-[#e0e9fa] text-[1.4rem] h-[2.3rem]
                          w-[2.3rem] flex content-center items-center
                          justify-center pb-[0.15rem]"&gt;A&lt;/span&gt;enean
                          non lectus sit amet est imperdiet cursus elementum
                          vitae eros. Cras quis odio in risus euismod suscipit.
                          Fusce viverra ligula vel justo bibendum semper
                          amet.&lt;/p&gt;
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
          <section id="snippet-8" className="wrapper py-24">
            <h2 className="!mb-3 !leading-[1.35]">Links</h2>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium">
              Available options:
            </p>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
              <code className="code">link-body</code>,{" "}
              <code className="code">link-aqua</code>,{" "}
              <code className="code">link-green</code>,{" "}
              <code className="code">link-leaf</code>,{" "}
              <code className="code">link-navy</code>,{" "}
              <code className="code">link-orange</code>,{" "}
              <code className="code">link-pink</code>,{" "}
              <code className="code">link-purple</code>,{" "}
              <code className="code">link-red</code>,{" "}
              <code className="code">link-violet</code>,{" "}
              <code className="code">link-yellow</code>,{" "}
              <code className="code">link-fuchsia</code>,{" "}
              <code className="code">link-sky</code>,{" "}
              <code className="code">link-grape</code>.
            </p>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <a href="#" className="hover !text-[#60697b] !mr-4 !ml-1 !mb-5">
                  Link example
                </a>
                <a href="#" className="hover !mr-4 !mb-5">
                  Link example
                </a>
                <a href="#" className="hover more !mr-4 !mb-5">
                  Link example
                </a>
                <br />
                <a
                  href="#"
                  className="hover-2 !text-[#60697b] !mr-4 !mb-5 relative z-[1] p-[0_.2rem_.05rem] before:content-[''] before:origin-[100%_50%] before:transition-transform before:duration-[0.5s] before:ease-[cubic-bezier(.7,0,0.2,1)] before:absolute before:w-full before:h-full before:pointer-events-none before:z-[-1] before:left-0 before:top-0 before:bg-[#e0e9fa] hover:before:origin-[0_50%] hover:before:ease-[cubic-bezier(.4,1,0.8,1)]"
                >
                  Link example
                </a>
                <a
                  href="#"
                  className="hover-2 !mr-4 !mb-5 relative z-[1] p-[0_.2rem_.05rem] before:content-[''] before:origin-[100%_50%] before:transition-transform before:duration-[0.5s] before:ease-[cubic-bezier(.7,0,0.2,1)] before:absolute before:w-full before:h-full before:pointer-events-none before:z-[-1] before:left-0 before:top-0 before:bg-[#e0e9fa] hover:before:origin-[0_50%] hover:before:ease-[cubic-bezier(.4,1,0.8,1)]"
                >
                  Link example
                </a>
                <a
                  href="#"
                  className="hover-2 more !mr-4 !mb-5 relative z-[1] p-[0_.2rem_.05rem] before:content-[''] before:origin-[100%_50%] before:transition-transform before:duration-[0.5s] before:ease-[cubic-bezier(.7,0,0.2,1)] before:absolute before:w-full before:h-full before:pointer-events-none before:z-[-1] before:left-0 before:top-0 before:bg-[#e0e9fa] after:leading-none after:content-['\e94c'] after:text-[0.9rem] after:font-normal after:mr-[-0.25rem] after:inline-block after:!pl-[0.05rem] after:font-Unicons after:align-[-3px] hover:before:origin-[0_50%] hover:before:ease-[cubic-bezier(.4,1,0.8,1)]"
                >
                  Link example
                </a>
                <br />
                <a
                  href="#"
                  className="hover-3 !text-[#60697b] !mr-4 relative z-[1] p-[0_.2rem_.05rem] before:content-[''] before:absolute before:z-[-1] before:w-full before:h-[3px] before:bg-[#e0e9fa] before:transition-all before:duration-[0.3s] before:ease-[ease-in-out] before:left-0 before:-bottom-px after:leading-none after:content-['\e94c'] after:text-[0.9rem] after:font-normal after:mr-[-0.25rem] after:inline-block after:!pl-[0.05rem] after:font-Unicons after:align-[-3px] hover:before:h-[calc(100%_+_3px)]"
                >
                  Link example
                </a>
                <a
                  href="#"
                  className="hover-3 !mr-4 relative z-[1] p-[0_.2rem_.05rem] before:content-[''] before:absolute before:z-[-1] before:w-full before:h-[3px] before:bg-[#e0e9fa] before:transition-all before:duration-[0.3s] before:ease-[ease-in-out] before:left-0 before:-bottom-px after:leading-none after:content-['\e94c'] after:text-[0.9rem] after:font-normal after:mr-[-0.25rem] after:inline-block after:!pl-[0.05rem] after:font-Unicons after:align-[-3px] hover:before:h-[calc(100%_+_3px)]"
                >
                  Link example
                </a>
                <a
                  href="#"
                  className="hover-3 more !mr-4 relative z-[1] p-[0_.2rem_.05rem] before:content-[''] before:absolute before:z-[-1] before:w-full before:h-[3px] before:bg-[#e0e9fa] before:transition-all before:duration-[0.3s] before:ease-[ease-in-out] before:left-0 before:-bottom-px after:leading-none after:content-['\e94c'] after:text-[0.9rem] after:font-normal after:mr-[-0.25rem] after:inline-block after:!pl-[0.05rem] after:font-Unicons after:align-[-3px] hover:before:h-[calc(100%_+_3px)]
            "
                >
                  Link example
                </a>
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-8"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-8"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          {"\n"}
                          {"                      "}&lt;a href="#"
                          className="hover !text-[#60697b] !mr-4 !ml-1
                          !mb-5"&gt;Link example&lt;/a&gt;
                          {"\n"}
                          {"                      "}&lt;a href="#"
                          className="hover !mr-4 !mb-5"&gt;Link
                          example&lt;/a&gt;
                          {"\n"}
                          {"                      "}&lt;a href="#"
                          className="hover more !mr-4 !mb-5"&gt;Link
                          example&lt;/a&gt;{"\n"}
                          {"                      "}&lt;br&gt;{"\n"}
                          {"                      "}&lt;a href="#"
                          className="hover-2 !text-[#60697b] !mr-4 !mb-5
                          relative z-[1] p-[0_.2rem_.05rem] before:content-['']
                          before:origin-[100%_50%] before:transition-transform
                          before:duration-[0.5s]
                          before:ease-[cubic-bezier(.7,0,0.2,1)] before:absolute
                          before:w-full before:h-full before:pointer-events-none
                          before:z-[-1] before:left-0 before:top-0
                          before:bg-[#e0e9fa] hover:before:origin-[0_50%]
                          hover:before:ease-[cubic-bezier(.4,1,0.8,1)]"&gt;Link
                          example&lt;/a&gt;{"\n"}
                          {"                      "}&lt;a href="#"
                          className="hover-2 !mr-4 !mb-5 relative z-[1]
                          p-[0_.2rem_.05rem] before:content-['']
                          before:origin-[100%_50%] before:transition-transform
                          before:duration-[0.5s]
                          before:ease-[cubic-bezier(.7,0,0.2,1)] before:absolute
                          before:w-full before:h-full before:pointer-events-none
                          before:z-[-1] before:left-0 before:top-0
                          before:bg-[#e0e9fa] hover:before:origin-[0_50%]
                          hover:before:ease-[cubic-bezier(.4,1,0.8,1)]"&gt;Link
                          example&lt;/a&gt;{"\n"}
                          {"                      "}&lt;a href="#"
                          className="hover-2 more !mr-4 !mb-5 relative z-[1]
                          p-[0_.2rem_.05rem] before:content-['']
                          before:origin-[100%_50%] before:transition-transform
                          before:duration-[0.5s]
                          before:ease-[cubic-bezier(.7,0,0.2,1)] before:absolute
                          before:w-full before:h-full before:pointer-events-none
                          before:z-[-1] before:left-0 before:top-0
                          before:bg-[#e0e9fa] after:leading-none
                          after:content-['\e94c'] after:text-[0.9rem]
                          after:font-normal after:mr-[-0.25rem]
                          after:inline-block after:!pl-[0.05rem]
                          after:font-Unicons after:align-[-3px]
                          hover:before:origin-[0_50%]
                          hover:before:ease-[cubic-bezier(.4,1,0.8,1)]"&gt;Link
                          example&lt;/a&gt;{"\n"}
                          {"                      "}&lt;br&gt;{"\n"}
                          {"                      "}&lt;a href="#"
                          className="hover-3 !text-[#60697b] !mr-4 relative
                          z-[1] p-[0_.2rem_.05rem] before:content-['']
                          before:absolute before:z-[-1] before:w-full
                          before:h-[3px] before:bg-[#e0e9fa]
                          before:transition-all before:duration-[0.3s]
                          before:ease-[ease-in-out] before:left-0
                          before:-bottom-px after:leading-none
                          after:content-['\e94c'] after:text-[0.9rem]
                          after:font-normal after:mr-[-0.25rem]
                          after:inline-block after:!pl-[0.05rem]
                          after:font-Unicons after:align-[-3px]
                          hover:before:h-[calc(100%_+_3px)]"&gt;Link
                          example&lt;/a&gt;
                          {"\n"}
                          {"                      "}&lt;a href="#"
                          className="hover-3 !mr-4 relative z-[1]
                          p-[0_.2rem_.05rem] before:content-[''] before:absolute
                          before:z-[-1] before:w-full before:h-[3px]
                          before:bg-[#e0e9fa] before:transition-all
                          before:duration-[0.3s] before:ease-[ease-in-out]
                          before:left-0 before:-bottom-px after:leading-none
                          after:content-['\e94c'] after:text-[0.9rem]
                          after:font-normal after:mr-[-0.25rem]
                          after:inline-block after:!pl-[0.05rem]
                          after:font-Unicons after:align-[-3px]
                          hover:before:h-[calc(100%_+_3px)]"&gt;Link
                          example&lt;/a&gt;
                          {"\n"}
                          {"                      "}&lt;a href="#"
                          className="hover-3 more !mr-4 relative z-[1]
                          p-[0_.2rem_.05rem] before:content-[''] before:absolute
                          before:z-[-1] before:w-full before:h-[3px]
                          before:bg-[#e0e9fa] before:transition-all
                          before:duration-[0.3s] before:ease-[ease-in-out]
                          before:left-0 before:-bottom-px after:leading-none
                          after:content-['\e94c'] after:text-[0.9rem]
                          after:font-normal after:mr-[-0.25rem]
                          after:inline-block after:!pl-[0.05rem]
                          after:font-Unicons after:align-[-3px]
                          hover:before:h-[calc(100%_+_3px)]
                          {"\n"}
                          {"                      "}"&gt;Link example&lt;/a&gt;
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
