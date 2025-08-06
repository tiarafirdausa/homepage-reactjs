import React from "react";
import DocsSidebar from "./DocsSidebar";
import TypeWriter from "../common/TypeWriter";
import AnimatedText from "../common/AnimatedText";
import CodeSnippet from "../common/CodeSnippet";

export default function TextAnimations() {
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
                    Typer
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-2"
                  >
                    Typer with Loop
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-3"
                  >
                    Rotator
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
            <h2 className="!mb-5 !leading-[1.35]">Typer</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px]">
                  <div className="xl:w-9/12 lg:w-9/12 md:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                    <h2 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem]  !mb-0">
                      Sandbox is effortless and powerful with <br />
                      <span className="typer !text-[#3f78e0] ">
                        {/* import TypeWriter from "../common/TypeWriter"; */}
                        <TypeWriter
                          strings={[
                            "easy usage",
                            "fast transactions",
                            "secure payments",
                          ]}
                        />
                      </span>
                      <span
                        className="cursor !text-[#3f78e0] "
                        data-owner="typer"
                      />
                    </h2>
                  </div>
                  {/* /column */}
                </div>
                {/* /.row */}
              </div>
              {/*/.card-body */}
              <CodeSnippet
                paddingClass="pb-5 xl:pb-10 lg:pb-10 md:pb-10"
                code={` &lt;h2 className&#x3D;&quot;!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem]  !mb-0&quot;&gt;
                      Sandbox is effortless and powerful with &lt;br &#x2F;&gt;
                      &lt;span className&#x3D;&quot;typer !text-[#3f78e0] &quot;&gt;
                        {&#x2F;* import TypeWriter from &quot;..&#x2F;common&#x2F;TypeWriter&quot;; *&#x2F;}
                        &lt;TypeWriter
                          strings&#x3D;{[
                            &quot;easy usage&quot;,
                            &quot;fast transactions&quot;,
                            &quot;secure payments&quot;,
                          ]}
                        &#x2F;&gt;
                      &lt;&#x2F;span&gt;
                      &lt;span
                        className&#x3D;&quot;cursor !text-[#3f78e0] &quot;
                        data-owner&#x3D;&quot;typer&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;h2&gt;`}
              />
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-2" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Typer with Loop</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px]">
                  <div className="lg:w-9/12 flex-[0_0_auto] !px-[15px] max-w-full">
                    <h2 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem]  !mb-0">
                      Sandbox focuses on <br />
                      <span className="typer !text-[#3f78e0] ">
                        {/* import TypeWriter from "../common/TypeWriter"; */}
                        <TypeWriter
                          strings={[
                            "customer satisfaction",
                            "business needs",
                            "creative ideas",
                          ]}
                        />
                      </span>
                      <span
                        className="cursor !text-[#3f78e0] "
                        data-owner="typer"
                      />
                    </h2>
                  </div>
                  {/* /column */}
                </div>
                {/* /.row */}
              </div>
              <CodeSnippet
                paddingClass="pb-5 xl:pb-10 lg:pb-10 md:pb-10"
                code={`    &lt;h2 className&#x3D;&quot;!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem]  !mb-0&quot;&gt;
                      Sandbox focuses on &lt;br &#x2F;&gt;
                      &lt;span className&#x3D;&quot;typer !text-[#3f78e0] &quot;&gt;
                        {&#x2F;* import TypeWriter from &quot;..&#x2F;common&#x2F;TypeWriter&quot;; *&#x2F;}
                        &lt;TypeWriter
                          strings&#x3D;{[
                            &quot;customer satisfaction&quot;,
                            &quot;business needs&quot;,
                            &quot;creative ideas&quot;,
                          ]}
                        &#x2F;&gt;
                      &lt;&#x2F;span&gt;
                      &lt;span
                        className&#x3D;&quot;cursor !text-[#3f78e0] &quot;
                        data-owner&#x3D;&quot;typer&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;h2&gt;`}
              />
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-3" className="wrapper py-24">
            <h2 className="!mb-5 !leading-[1.35]">Rotator</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px]">
                  <div className="xl:w-9/12 lg:w-9/12 md:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                    <h2 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem]  !mb-0">
                      Sandbox is effortless and powerful with{" "}
                      <span className="rotator-fade !text-[#3f78e0] ">
                        {/* import AnimatedText from "../common/AnimatedText"; */}
                        <AnimatedText
                          strings={[
                            "easy usage",
                            "fast transactions",
                            "secure payments",
                          ]}
                        />
                      </span>
                    </h2>
                  </div>
                  {/* /column */}
                </div>
                {/* /.row */}
              </div>
              <CodeSnippet
                paddingClass="pb-5 xl:pb-10 lg:pb-10 md:pb-10"
                code={`   &lt;h2 className&#x3D;&quot;!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem]  !mb-0&quot;&gt;
                      Sandbox is effortless and powerful with{&quot; &quot;}
                      &lt;span className&#x3D;&quot;rotator-fade !text-[#3f78e0] &quot;&gt;
                        {&#x2F;* import AnimatedText from &quot;..&#x2F;common&#x2F;AnimatedText&quot;; *&#x2F;}
                        &lt;AnimatedText
                          strings&#x3D;{[
                            &quot;easy usage&quot;,
                            &quot;fast transactions&quot;,
                            &quot;secure payments&quot;,
                          ]}
                        &#x2F;&gt;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;h2&gt;`}
              />
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
