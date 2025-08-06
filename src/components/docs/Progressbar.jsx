import React from "react";
import DocsSidebar from "./DocsSidebar";
import ProgressBarComponent from "../common/ProgressBar";
import CodeSnippet from "../common/CodeSnippet";

const progressData = [
  { label: "Marketing", color: "blue", value: 100 },
  { label: "Strategy", color: "green", value: 80 },
  { label: "Development", color: "red", value: 85 },
  { label: "Stabilization", color: "yellow", value: 75 },
];

const softProgressData = [
  { label: "Marketing", color: "soft-blue", value: 100 },
  { label: "Strategy", color: "soft-green", value: 80 },
  { label: "Development", color: "soft-red", value: 85 },
  { label: "Stabilization", color: "soft-yellow", value: 75 },
];

const ProgressList = ({ data }) => (
  <ul className="progress-list !mb-10 m-0 p-0">
    {data.map((item, index) => (
      <li key={index} className="!mb-[1rem]">
        <p className="!mb-[.25rem]">{item.label}</p>
        <div
          className={`progressbar line relative ${item.color}`}
          data-value={item.value}
        >
          <ProgressBarComponent max={item.value} />
        </div>
      </li>
    ))}
  </ul>
);

const ProgressLists = () => (
  <>
    <ProgressList data={progressData} />
    <ProgressList data={softProgressData} />
  </>
);

import ProgressCircle from "../common/CircularProgress";
const semiCircleData = [
  { color: "blue", value: 40 },
  { color: "green", value: 80 },
  { color: "soft-red", value: 65 },
  { color: "soft-yellow", value: 45 },
];

const SemiCircleProgressList = () => (
  <>
    {semiCircleData.map((item, index) => (
      <div
        key={index}
        className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] !mt-[30px] max-w-full"
      >
        <div
          className={`progressbar semi-circle ${item.color} w-[8.5rem] h-[4.25rem] m-[0_auto_1rem]`}
          data-value={item.value}
        >
          <ProgressCircle max={item.value} />
        </div>
      </div>
    ))}
  </>
);

export default function Progressbar() {
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
                    Line
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-2"
                  >
                    Semi Circle
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
            <h2 className="!mb-3 !leading-[1.35]">Line</h2>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium">
              Available color options:
            </p>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
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
              <code className="code">soft-grape</code>
            </p>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px]">
                  <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                    <ProgressLists />
                    {/* /.progress-list */}
                  </div>
                  {/* /column */}
                </div>
                {/* /.row */}
              </div>
              {/*/.card-body */}
              <CodeSnippet
                paddingClass="pb-5 xl:pb-10 lg:pb-10 md:pb-10"
                code={`import React from &quot;react&quot;;
             import DocsSidebar from &quot;.&#x2F;DocsSidebar&quot;;
             import ProgressBarComponent from &quot;..&#x2F;common&#x2F;ProgressBar&quot;;
             const progressData &#x3D; [
               &lbrace; label: &quot;Marketing&quot;, color: &quot;blue&quot;, value: 100 &rbrace;,
               &lbrace; label: &quot;Strategy&quot;, color: &quot;green&quot;, value: 80 &rbrace;,
               &lbrace; label: &quot;Development&quot;, color: &quot;red&quot;, value: 85 &rbrace;,
               &lbrace; label: &quot;Stabilization&quot;, color: &quot;yellow&quot;, value: 75 &rbrace;,
             ];
             
             const softProgressData &#x3D; [
               &lbrace; label: &quot;Marketing&quot;, color: &quot;soft-blue&quot;, value: 100 &rbrace;,
               &lbrace; label: &quot;Strategy&quot;, color: &quot;soft-green&quot;, value: 80 &rbrace;,
               &lbrace; label: &quot;Development&quot;, color: &quot;soft-red&quot;, value: 85 &rbrace;,
               &lbrace; label: &quot;Stabilization&quot;, color: &quot;soft-yellow&quot;, value: 75 &rbrace;,
             ];
             
             const ProgressList &#x3D; (&lbrace; data &rbrace;) &#x3D;&gt; (
               &lt;ul className&#x3D;&quot;progress-list !mb-10 m-0 p-0&quot;&gt;
                 &lbrace;data.map((item, index) &#x3D;&gt; (
                   &lt;li key&#x3D;&lbrace;index&rbrace; className&#x3D;&quot;!mb-[1rem]&quot;&gt;
                     &lt;p className&#x3D;&quot;!mb-[.25rem]&quot;&gt;&lbrace;item.label&rbrace;&lt;&#x2F;p&gt;
                     &lt;div
                       className&#x3D;&lbrace;&#x60;progressbar line relative $&lbrace;item.color&rbrace;&#x60;&rbrace;
                       data-value&#x3D;&lbrace;item.value&rbrace;
                     &gt;
                       &lt;ProgressBarComponent max&#x3D;&lbrace;item.value&rbrace; &#x2F;&gt;
                     &lt;&#x2F;div&gt;
                   &lt;&#x2F;li&gt;
                 ))&rbrace;
               &lt;&#x2F;ul&gt;
             );
             
             const ProgressLists &#x3D; () &#x3D;&gt; (
               &lt;&gt;
                 &lt;ProgressList data&#x3D;&lbrace;progressData&rbrace; &#x2F;&gt;
                 &lt;ProgressList data&#x3D;&lbrace;softProgressData&rbrace; &#x2F;&gt;
               &lt;&#x2F;&gt;
             );`}
              />
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-2" className="wrapper py-24">
            <h2 className="!mb-3 !leading-[1.35]">Semi Circle</h2>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium">
              Available color options:
            </p>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
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
              <code className="code">soft-grape</code>
            </p>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px] !text-center">
                  <SemiCircleProgressList />
                </div>
                {/* /.row */}
              </div>
              <CodeSnippet
                paddingClass="pb-5 xl:pb-10 lg:pb-10 md:pb-10"
                code={`
         import ProgressCircle from &quot;..&#x2F;common&#x2F;CircularProgress&quot;;
         const semiCircleData &#x3D; [
           &lbrace; color: &quot;blue&quot;, value: 40 &rbrace;,
           &lbrace; color: &quot;green&quot;, value: 80 &rbrace;,
           &lbrace; color: &quot;soft-red&quot;, value: 65 &rbrace;,
           &lbrace; color: &quot;soft-yellow&quot;, value: 45 &rbrace;,
         ];
         
         const SemiCircleProgressList &#x3D; () &#x3D;&gt; (
           &lt;&gt;
             &lbrace;semiCircleData.map((item, index) &#x3D;&gt; (
               &lt;div
                 key&#x3D;&lbrace;index&rbrace;
                 className&#x3D;&quot;md:w-6&#x2F;12 lg:w-3&#x2F;12 xl:w-3&#x2F;12 w-full flex-[0_0_auto] !px-[15px] !mt-[30px] max-w-full&quot;
               &gt;
                 &lt;div
                   className&#x3D;&lbrace;&#x60;progressbar semi-circle $&lbrace;item.color&rbrace; w-[8.5rem] h-[4.25rem] m-[0_auto_1rem]&#x60;&rbrace;
                   data-value&#x3D;&lbrace;item.value&rbrace;
                 &gt;
                   &lt;ProgressCircle max&#x3D;&lbrace;item.value&rbrace; &#x2F;&gt;
                 &lt;&#x2F;div&gt;
               &lt;&#x2F;div&gt;
             ))&rbrace;
           &lt;&#x2F;&gt;
         );`}
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
