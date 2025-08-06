import React from "react";
import DocsSidebar from "./DocsSidebar";

import CodeSnippetContainer from "../common/CodeSnippetContainer";
export default function ImageHover() {
  return (
    <div className="container">
      <div className="flex flex-wrap mx-[-15px]">
        <aside className="xl:w-2/12 flex-[0_0_auto] !px-[15px] max-w-full sidebar doc-sidebar md:!mt-0 py-24 hidden xl:block">
          <DocsSidebar />
        </aside>
        {/* /column */}
        <aside className="xl:w-2/12 flex-[0_0_auto] !px-[15px] max-w-full xl:!order-3 sidebar !sticky h-full top-0 md:!mt-0 py-24 hidden xl:block">
          <div className="widget">
            <h6 className="widget-title text-[0.85rem] !mb-2 xl:!pl-5">
              On this page
            </h6>
            <nav className="xl:!pl-5" id="sidebar-nav">
              <ul className="list-unstyled !pl-0 list-none text-[0.7rem] leading-normal text-inherit">
                <li>
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] active"
                    href="#snippet-1"
                  >
                    Tooltip
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]"
                    href="#snippet-2"
                  >
                    Overlay
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]"
                    href="#snippet-3"
                  >
                    Simple
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]"
                    href="#snippet-4"
                  >
                    Cursor
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
            <h2 className="!mb-5 !leading-[1.35]">Tooltip</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px]">
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure
                      className="itooltip  hover-scale rounded group"
                      title='<h5 class="!mb-1 itooltip-dark">Some Title</h5><p className="!mb-0">Quam Sit Ornare</p>'
                    >
                      <a href="#">
                        <img
                          className="group-hover:scale-105 transition-all duration-[0.35s] ease-in-out"
                          srcSet="/assets/img/photos/p1@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/p1.jpg"
                          width="360"
                          height="250"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure
                      className="itooltip  hover-scale rounded group"
                      title='<h5 class="!mb-1 itooltip-light">Some Title</h5><p className="!mb-0">Quam Sit Ornare</p>'
                    >
                      <a href="#">
                        <img
                          className="group-hover:scale-105 transition-all duration-[0.35s] ease-in-out"
                          srcSet="/assets/img/photos/p2@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/p2.jpg"
                          width="360"
                          height="250"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure
                      className="itooltip itooltip-primary hover-scale rounded group"
                      title='<h5 class="!mb-1 itooltip-primary">Some Title</h5><p className="!mb-0">Quam Sit Ornare</p>'
                    >
                      <a href="#">
                        <img
                          className="group-hover:scale-105 transition-all duration-[0.35s] ease-in-out"
                          srcSet="/assets/img/photos/p3@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/p3.jpg"
                          width="360"
                          height="250"
                        />
                      </a>
                    </figure>
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
                    href="#collapse-1"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-1"
                  className="card-footer !bg-[#21262c] opacity-100 !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          &lt;figure className="itooltip hover-scale rounded
                          group" title='&lt;h5 class="!mb-1
                          itooltip-dark"&gt;Some Title&lt;/h5&gt;&lt;p
                          className="!mb-0"&gt;Quam Sit
                          Ornare&lt;/p&gt;'&gt;&lt;a href="#"&gt; &lt;img
                          className="group-hover:scale-105 transition-all
                          duration-[0.35s] ease-in-out"
                          src="/assets/img/photos/p1.jpg"
                          srcset="/assets/img/photos/p1@2x.jpg 2x"
                          alt="image"&gt;&lt;/a&gt;&lt;/figure&gt;{"\n"}
                          {"                      "}&lt;figure
                          className="itooltip hover-scale rounded group"
                          title='&lt;h5 class="!mb-1 itooltip-light"&gt;Some
                          Title&lt;/h5&gt;&lt;p className="!mb-0"&gt;Quam Sit
                          Ornare&lt;/p&gt;'&gt;&lt;a href="#"&gt; &lt;img
                          className="group-hover:scale-105 transition-all
                          duration-[0.35s] ease-in-out"
                          src="/assets/img/photos/p2.jpg"
                          srcset="/assets/img/photos/p2@2x.jpg 2x"
                          alt="image"&gt;&lt;/a&gt;{"\n"}
                          {"                      "}&lt;/figure&gt;{"\n"}
                          {"                      "}&lt;figure
                          className="itooltip hover-scale rounded group"
                          title='&lt;h5 class="!mb-1 itooltip-primary"&gt;Some
                          Title&lt;/h5&gt;&lt;p className="!mb-0"&gt;Quam Sit
                          Ornare&lt;/p&gt;'&gt;&lt;a href="#"&gt; &lt;img
                          className="group-hover:scale-105 transition-all
                          duration-[0.35s] ease-in-out"
                          src="/assets/img/photos/p3.jpg"
                          srcset="/assets/img/photos/p3@2x.jpg 2x"
                          alt="image"&gt;&lt;/a&gt;{"\n"}
                          {"                      "}&lt;/figure&gt;
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
            <h2 className="!mb-5 !leading-[1.35]">Overlay</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px]">
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="overlay overlay-1 hover-scale rounded group">
                      <a href="#">
                        <img
                          srcSet="/assets/img/photos/p4@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/p4.jpg"
                          width="360"
                          height="250"
                        />
                      </a>
                      <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                        <h5 className="from-top !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                          Some Title
                        </h5>
                      </figcaption>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="overlay overlay-2 hover-scale color rounded group">
                      <a
                        className="!relative block z-[3] cursor-pointer inset-0"
                        href="#"
                      >
                        <img
                          srcSet="/assets/img/photos/p5@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/p5.jpg"
                          width="360"
                          height="250"
                        />
                      </a>
                      <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                        <h5 className="from-top !mb-1">Some Title</h5>
                        <p className="from-bottom">Some Description</p>
                      </figcaption>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="overlay overlay-3 !text-left overlay-gradient-2 hover-scale rounded group">
                      <a
                        className="!relative block z-[3] cursor-pointer inset-0"
                        href="#"
                      >
                        <img
                          srcSet="/assets/img/photos/p6@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/p6.jpg"
                          width="360"
                          height="250"
                        />
                      </a>
                      <figcaption>
                        <h5 className="from-left !mb-1">Some Title</h5>
                        <p className="from-left !mb-0">Some Description</p>
                      </figcaption>
                    </figure>
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
                    href="#collapse-2"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-2"
                  className="card-footer !bg-[#21262c] opacity-100 !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          {"\n"}
                          {"                      "}&lt;figure
                          className="overlay overlay-1 hover-scale rounded
                          group"&gt;&lt;a href="#"&gt; &lt;img
                          src="/assets/img/photos/p4.jpg"
                          srcset="/assets/img/photos/p4@2x.jpg 2x"
                          alt="image"&gt;&lt;/a&gt;{"\n"}
                          {"                        "}&lt;figcaption
                          className="group-hover:opacity-100 absolute w-full
                          h-full opacity-0 text-center px-4 py-3 inset-0 z-[5]
                          pointer-events-none p-2"&gt;{"\n"}
                          {"                          "}&lt;h5
                          className="from-top
                          {"  "}
                          !mb-0 absolute w-full translate-y-[-80%]
                          p-[.75rem_1rem] left-0 top-2/4"&gt;Some
                          Title&lt;/h5&gt;{"\n"}
                          {"                        "}&lt;/figcaption&gt;{"\n"}
                          {"                      "}&lt;/figure&gt;{"\n"}
                          {"                      "}&lt;figure
                          className="overlay overlay-2 hover-scale color rounded
                          group"&gt;&lt;a className="!relative block z-[3]
                          cursor-pointer inset-0" href="#"&gt; &lt;img
                          src="/assets/img/photos/p5.jpg"
                          srcset="/assets/img/photos/p5@2x.jpg 2x"
                          alt="image"&gt;&lt;/a&gt;{"\n"}
                          {"                        "}&lt;figcaption
                          className="group-hover:opacity-100 absolute w-full
                          h-full opacity-0 text-center px-4 py-3 inset-0 z-[5]
                          pointer-events-none p-2"&gt;{"\n"}
                          {"                          "}&lt;h5
                          className="from-top !mb-1"&gt;Some Title&lt;/h5&gt;
                          {"\n"}
                          {"                          "}&lt;p
                          className="from-bottom"&gt;Some Description&lt;/p&gt;
                          {"\n"}
                          {"                        "}&lt;/figcaption&gt;{"\n"}
                          {"                      "}&lt;/figure&gt;{"\n"}
                          {"                      "}&lt;figure
                          className="overlay overlay-3 !text-left
                          overlay-gradient-2 hover-scale rounded group"&gt;&lt;a
                          className="!relative block z-[3] cursor-pointer
                          inset-0" href="#"&gt; &lt;img
                          src="/assets/img/photos/p6.jpg"
                          srcset="/assets/img/photos/p6@2x.jpg 2x"
                          alt="image"&gt;&lt;/a&gt;{"\n"}
                          {"                        "}&lt;figcaption&gt;{"\n"}
                          {"                          "}&lt;h5
                          className="from-left !mb-1"&gt;Some Title&lt;/h5&gt;
                          {"\n"}
                          {"                          "}&lt;p
                          className="from-left
                          {"  "}
                          !mb-0"&gt;Some Description&lt;/p&gt;{"\n"}
                          {"                        "}&lt;/figcaption&gt;{"\n"}
                          {"                      "}&lt;/figure&gt;
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
            <h2 className="!mb-5 !leading-[1.35]">Simple</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px]">
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a href="#">
                        <img
                          srcSet="/assets/img/photos/p6@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/p6.jpg"
                          width="360"
                          height="250"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="overflow-hidden translate-y-0 group rounded">
                      <a href="#">
                        <img
                          className="group-hover:scale-105 transition-all duration-[0.35s] ease-in-out"
                          srcSet="/assets/img/photos/p3@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/p3.jpg"
                          width="360"
                          height="250"
                        />
                      </a>
                    </figure>
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
                  className="card-footer !bg-[#21262c] opacity-100 !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          {"\n"}
                          {"                      "}&lt;figure className="lift
                          rounded"&gt;&lt;a href="#"&gt; &lt;img
                          src="/assets/img/photos/p6.jpg"
                          srcset="/assets/img/photos/p6@2x.jpg 2x"
                          alt="image"&gt;&lt;/a&gt;&lt;/figure&gt;{"\n"}
                          {"                      "}&lt;figure
                          className="overflow-hidden translate-y-0 group
                          rounded"&gt;&lt;a href="#"&gt; &lt;img
                          className="group-hover:scale-105 transition-all
                          duration-[0.35s] ease-in-out"
                          src="/assets/img/photos/p3.jpg"
                          srcset="/assets/img/photos/p3@2x.jpg 2x"
                          alt="image"&gt;&lt;/a&gt;&lt;/figure&gt;
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
            <h2 className="!mb-5 !leading-[1.35]">Cursor</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px]">
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="overflow-hidden translate-y-0 group cursor-dark rounded">
                      <a href="#">
                        <img
                          className="group-hover:scale-105 transition-all duration-[0.35s] ease-in-out"
                          srcSet="/assets/img/photos/p1@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/p1.jpg"
                          width="360"
                          height="250"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="overflow-hidden translate-y-0 group cursor-light rounded">
                      <a href="#">
                        <img
                          className="group-hover:scale-105 transition-all duration-[0.35s] ease-in-out"
                          srcSet="/assets/img/photos/p2@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/p2.jpg"
                          width="360"
                          height="250"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="overflow-hidden translate-y-0 group cursor-primary rounded">
                      <a href="#">
                        <img
                          className="group-hover:scale-105 transition-all duration-[0.35s] ease-in-out"
                          srcSet="/assets/img/photos/p3@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/p3.jpg"
                          width="360"
                          height="250"
                        />
                      </a>
                    </figure>
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
                    href="#collapse-4"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-4"
                  className="card-footer !bg-[#21262c] opacity-100 !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          {"\n"}
                          {"                      "}&lt;figure
                          className="overflow-hidden translate-y-0 group
                          cursor-dark rounded"&gt;&lt;a href="#"&gt; &lt;img
                          className="group-hover:scale-105 transition-all
                          duration-[0.35s] ease-in-out"
                          src="/assets/img/photos/p1.jpg"
                          srcset="/assets/img/photos/p1@2x.jpg 2x"
                          alt="image"&gt;&lt;/a&gt;&lt;/figure&gt;{"\n"}
                          {"                      "}&lt;figure
                          className="overflow-hidden translate-y-0 group
                          cursor-light rounded"&gt;&lt;a href="#"&gt; &lt;img
                          className="group-hover:scale-105 transition-all
                          duration-[0.35s] ease-in-out"
                          src="/assets/img/photos/p2.jpg"
                          srcset="/assets/img/photos/p2@2x.jpg 2x"
                          alt="image"&gt;&lt;/a&gt;&lt;/figure&gt;{"\n"}
                          {"                      "}&lt;figure
                          className="overflow-hidden translate-y-0 group
                          cursor-primary rounded"&gt;&lt;a href="#"&gt; &lt;img
                          className="group-hover:scale-105 transition-all
                          duration-[0.35s] ease-in-out"
                          src="/assets/img/photos/p3.jpg"
                          srcset="/assets/img/photos/p3@2x.jpg 2x"
                          alt="image"&gt;&lt;/a&gt;&lt;/figure&gt;
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
