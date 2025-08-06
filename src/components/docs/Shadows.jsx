import React from "react";
import DocsSidebar from "./DocsSidebar";
import CodeSnippetContainer from "../common/CodeSnippetContainer";

export default function Shadows() {
  return (
    <div className="container">
      <div className="flex flex-wrap mx-[-15px]">
        <aside className="xl:w-2/12 flex-[0_0_auto] !px-[15px] max-w-full sidebar doc-sidebar md:!mt-0 py-24 hidden  xl:block">
          <DocsSidebar />
        </aside>
        {/* /column */}
        <div className="xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!order-2">
          <section id="snippet-1" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Examples</h2>
            <div className="card">
              <div className="card-body !bg-[#ffffff]  rounded-t-[0.4rem] p-[40px]">
                <div className="shadow-none p-3  bg-[rgba(246,247,249,1)]  rounded !mb-6">
                  No shadow
                </div>
                <div className="p-3 !shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] bg-[#ffffff] opacity-100 rounded !mb-6">
                  Small shadow
                </div>
                <div className=" shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] p-3 bg-[#ffffff] opacity-100 rounded !mb-6">
                  Regular shadow
                </div>
                <div className="shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] p-3 bg-[#ffffff] opacity-100 rounded !mb-6">
                  Larger shadow
                </div>
                <div className="shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] p-3 bg-[#ffffff] opacity-100 rounded">
                  Extra larger shadow
                </div>
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
                          &lt;div className="shadow-none p-3{"  "}
                          bg-[rgba(246,247,249,1)]
                          {"  "}rounded !mb-6"&gt;No shadow&lt;/div&gt;{"\n"}
                          {"                      "}&lt;div className="p-3
                          !shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)]
                          bg-[#ffffff] opacity-100 rounded !mb-6"&gt;Small
                          shadow&lt;/div&gt;{"\n"}
                          {"                      "}&lt;div className="
                          shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] p-3
                          bg-[#ffffff] opacity-100 rounded !mb-6"&gt;Regular
                          shadow&lt;/div&gt;
                          {"\n"}
                          {"                      "}&lt;div
                          className="shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]
                          p-3 bg-[#ffffff] opacity-100 rounded !mb-6"&gt;Larger
                          shadow&lt;/div&gt;{"\n"}
                          {"                      "}&lt;div
                          className="shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px]
                          p-3 bg-[#ffffff] opacity-100 rounded"&gt;Extra larger
                          shadow&lt;/div&gt;
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
