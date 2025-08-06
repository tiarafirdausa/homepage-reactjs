import React from "react";
import DocsSidebar from "./DocsSidebar";
import CodeSnippetContainer from "../common/CodeSnippetContainer";

export default function Tooltips() {
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
                    Tooltips
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-2"
                  >
                    Popovers
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
            <h2 className="!mb-5 !leading-[1.35]">Tooltips</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <a
                  href="#"
                  className="mr-5"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Tooltip on top"
                >
                  Tooltip on top
                </a>
                <a
                  href="#"
                  className="mr-5"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Tooltip on right"
                >
                  Tooltip on right
                </a>
                <a
                  href="#"
                  className="mr-5"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Tooltip on bottom"
                >
                  Tooltip on bottom
                </a>
                <a
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Tooltip on left"
                >
                  Tooltip on left
                </a>
                <div className="!mt-5" />
                <button
                  type="button"
                  className="btn btn-soft-primary !rounded-[50rem] !mr-2"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Tooltip on top"
                >
                  {" "}
                  Tooltip on top{" "}
                </button>
                <button
                  type="button"
                  className="btn btn-soft-primary !rounded-[50rem] !mr-2"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Tooltip on right"
                >
                  {" "}
                  Tooltip on right{" "}
                </button>
                <button
                  type="button"
                  className="btn btn-soft-primary !rounded-[50rem] !mr-2"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Tooltip on bottom"
                >
                  {" "}
                  Tooltip on bottom{" "}
                </button>
                <button
                  type="button"
                  className="btn btn-soft-primary !rounded-[50rem] !mr-2"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Tooltip on left"
                >
                  {" "}
                  Tooltip on left{" "}
                </button>
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
                          {"                      "}&lt;a href="#"
                          className="mr-5" data-bs-toggle="tooltip"
                          data-bs-placement="top" title="Tooltip on
                          top"&gt;Tooltip on top&lt;/a&gt;{"\n"}
                          {"                      "}&lt;a href="#"
                          className="mr-5" data-bs-toggle="tooltip"
                          data-bs-placement="right" title="Tooltip on
                          right"&gt;Tooltip on right&lt;/a&gt;
                          {"\n"}
                          {"                      "}&lt;a href="#"
                          className="mr-5" data-bs-toggle="tooltip"
                          data-bs-placement="bottom" title="Tooltip on
                          bottom"&gt;Tooltip on bottom&lt;/a&gt;
                          {"\n"}
                          {"                      "}&lt;a href="#"
                          data-bs-toggle="tooltip" data-bs-placement="left"
                          title="Tooltip on left"&gt;Tooltip on left&lt;/a&gt;
                          {"\n"}
                          {"                      "}&lt;div
                          className="!mt-5"&gt;&lt;/div&gt;{"\n"}
                          {"                      "}&lt;button type="button"
                          className="btn btn-soft-primary !rounded-[50rem]
                          !mr-2" data-bs-toggle="tooltip"
                          data-bs-placement="top" title="Tooltip on top"&gt;
                          Tooltip on top &lt;/button&gt;
                          {"\n"}
                          {"                      "}&lt;button type="button"
                          className="btn btn-soft-primary !rounded-[50rem]
                          !mr-2" data-bs-toggle="tooltip"
                          data-bs-placement="right" title="Tooltip on right"&gt;
                          Tooltip on right &lt;/button&gt;{"\n"}
                          {"                      "}&lt;button type="button"
                          className="btn btn-soft-primary !rounded-[50rem]
                          !mr-2" data-bs-toggle="tooltip"
                          data-bs-placement="bottom" title="Tooltip on
                          bottom"&gt; Tooltip on bottom &lt;/button&gt;{"\n"}
                          {"                      "}&lt;button type="button"
                          className="btn btn-soft-primary !rounded-[50rem]
                          !mr-2" data-bs-toggle="tooltip"
                          data-bs-placement="left" title="Tooltip on left"&gt;
                          Tooltip on left &lt;/button&gt;
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
          <section id="snippet-2" className="wrapper py-24">
            <h2 className="!mb-5 !leading-[1.35]">Popovers</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <a
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mr-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                  tabIndex={0}
                  data-bs-toggle="popover"
                  data-bs-trigger="focus"
                  data-bs-placement="top"
                  title="Sample Title"
                  data-bs-content="Integer posuere ante ac dapibus posuere velit a aliquet. Cum sociis natoque."
                >
                  {" "}
                  Popover on top{" "}
                </a>
                <a
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mr-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                  tabIndex={0}
                  data-bs-toggle="popover"
                  data-bs-trigger="focus"
                  data-bs-placement="right"
                  title="Sample Title"
                  data-bs-content="Integer posuere ante ac dapibus posuere velit a aliquet. Cum sociis natoque."
                >
                  {" "}
                  Popover on right{" "}
                </a>
                <a
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mr-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                  tabIndex={0}
                  data-bs-toggle="popover"
                  data-bs-trigger="focus"
                  data-bs-placement="bottom"
                  title="Sample Title"
                  data-bs-content="Integer posuere ante ac dapibus posuere velit a aliquet. Cum sociis natoque."
                >
                  {" "}
                  Popover on bottom{" "}
                </a>
                <a
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mr-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                  tabIndex={0}
                  data-bs-toggle="popover"
                  data-bs-trigger="focus"
                  data-bs-placement="left"
                  title="Sample Title"
                  data-bs-content="Integer posuere ante ac dapibus posuere velit a aliquet. Cum sociis natoque."
                >
                  {" "}
                  Popover on left{" "}
                </a>
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
                          {"\n"}
                          {"                      "}&lt;a className="btn
                          btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0]
                          hover:text-white hover:bg-[#3f78e0]
                          hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0]
                          !rounded-[50rem] !mr-2 hover:translate-y-[-0.15rem]
                          hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                          tabindex="0" data-bs-toggle="popover"
                          data-bs-trigger="focus" data-bs-placement="top"
                          title="Sample Title" data-bs-content="Integer posuere
                          ante ac dapibus posuere velit a aliquet. Cum sociis
                          natoque."&gt; Popover on top &lt;/a&gt;{"\n"}
                          {"                      "}&lt;a className="btn
                          btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0]
                          hover:text-white hover:bg-[#3f78e0]
                          hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0]
                          !rounded-[50rem] !mr-2 hover:translate-y-[-0.15rem]
                          hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                          tabindex="0" data-bs-toggle="popover"
                          data-bs-trigger="focus" data-bs-placement="right"
                          title="Sample Title" data-bs-content="Integer posuere
                          ante ac dapibus posuere velit a aliquet. Cum sociis
                          natoque."&gt; Popover on right &lt;/a&gt;{"\n"}
                          {"                      "}&lt;a className="btn
                          btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0]
                          hover:text-white hover:bg-[#3f78e0]
                          hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0]
                          !rounded-[50rem] !mr-2 hover:translate-y-[-0.15rem]
                          hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                          tabindex="0" data-bs-toggle="popover"
                          data-bs-trigger="focus" data-bs-placement="bottom"
                          title="Sample Title" data-bs-content="Integer posuere
                          ante ac dapibus posuere velit a aliquet. Cum sociis
                          natoque."&gt; Popover on bottom &lt;/a&gt;{"\n"}
                          {"                      "}&lt;a className="btn
                          btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0]
                          hover:text-white hover:bg-[#3f78e0]
                          hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0]
                          !rounded-[50rem] !mr-2 hover:translate-y-[-0.15rem]
                          hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                          tabindex="0" data-bs-toggle="popover"
                          data-bs-trigger="focus" data-bs-placement="left"
                          title="Sample Title" data-bs-content="Integer posuere
                          ante ac dapibus posuere velit a aliquet. Cum sociis
                          natoque."&gt; Popover on left &lt;/a&gt;
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
