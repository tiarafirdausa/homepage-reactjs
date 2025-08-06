import React from "react";
import DocsSidebar from "./DocsSidebar";
import CodeSnippetContainer from "../common/CodeSnippetContainer";

export default function Badges() {
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
                    Colors
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-2"
                  >
                    Gradients
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-3"
                  >
                    Shapes
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-4"
                  >
                    Sizes
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
            <h2 className="!mb-5 !leading-[1.35]">Colors</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <span className="badge bg-[rgba(250,183,88)] opacity-100 !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge bg-[rgba(247,139,119)] opacity-100 !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge bg-[rgba(226,98,107)] opacity-100 !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge !bg-[rgba(209,107,134)] !opacity-100 !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge bg-[rgba(160,124,197)] opacity-100 !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge bg-[rgba(116,126,209)] opacity-100 !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge bg-[rgba(63,120,224)] opacity-100 !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge bg-[rgba(84,168,199)] opacity-100 !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge bg-[rgba(69,196,160)] opacity-100 !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge bg-[rgba(124,183,152)] opacity-100 !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge bg-[rgba(230,104,179)] opacity-100 !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge bg-[rgba(94,185,240)] opacity-100 !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge bg-[rgba(96,93,186)] opacity-100 !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge  bg-[#21262c] opacity-100  !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge bg-[rgba(148,153,163)] opacity-100 !text-white !rounded-[50rem]">
                  Badge
                </span>{" "}
                <div className="!mb-2" />
                <span className="badge !bg-[#fef3e4] !text-[#fab758] !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge !bg-[#feece9] !text-[#f78b77] !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge !bg-[#fae6e7] !text-[#e2626b] !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge bg-[#f8e7ec] !text-[#d16b86] !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge bg-[#f0eaf6] !text-[#a07cc5] !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge bg-[#e9eaf8] !text-[#747ed1] !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge bg-[#e0e9fa] !text-[#3f78e0] !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge bg-[#e4f1f6] !text-[#54a8c7] !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge bg-[#e1f6f0] !text-[#45c4a0] !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge !bg-[#eaf3ef] !text-[#7cb798] !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge bg-[#fbe7f3] !text-[#e668b3] !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge bg-[#e5f4fd] !text-[#5eb9f0] !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge bg-[#e6e5f4] !text-[#605dba] !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge bg-[#dcddde] !text-[#343f52] !rounded-[50rem]">
                  Badge
                </span>{" "}
                <span className="badge bg-[rgba(164,174,198,0.2)] !text-[#343f52] !rounded-[50rem]">
                  Badge
                </span>{" "}
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
                          &lt;span className="badge !bg-[rgba(63,120,224)]
                          opacity-100 !rounded-[50rem]"&gt;Badge&lt;/span&gt;
                          {"\n"}&lt;span className="badge bg-[rgba(250,183,88)]
                          opacity-100 !rounded-[50rem]"&gt;Badge&lt;/span&gt;
                          {"\n"}&lt;span className="badge bg-[rgba(247,139,119)]
                          opacity-100 !rounded-[50rem]"&gt;Badge&lt;/span&gt;
                          {"\n"}&lt;span className="badge bg-[rgba(226,98,107)]
                          opacity-100 !rounded-[50rem]"&gt;Badge&lt;/span&gt;
                          {"\n"}&lt;span className="badge
                          !bg-[rgba(209,107,134)] !opacity-100
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;
                          {"\n"}&lt;span className="badge bg-[rgba(160,124,197)]
                          opacity-100 !rounded-[50rem]"&gt;Badge&lt;/span&gt;
                          {"\n"}&lt;span className="badge bg-[rgba(116,126,209)]
                          opacity-100 !rounded-[50rem]"&gt;Badge&lt;/span&gt;
                          {"\n"}&lt;span className="badge bg-[rgba(63,120,224)]
                          opacity-100 !rounded-[50rem]"&gt;Badge&lt;/span&gt;
                          {"\n"}&lt;span className="badge bg-[rgba(84,168,199)]
                          opacity-100 !rounded-[50rem]"&gt;Badge&lt;/span&gt;
                          {"\n"}&lt;span className="badge bg-[rgba(69,196,160)]
                          opacity-100 !rounded-[50rem]"&gt;Badge&lt;/span&gt;
                          {"\n"}&lt;span className="badge bg-[rgba(124,183,152)]
                          opacity-100 !rounded-[50rem]"&gt;Badge&lt;/span&gt;
                          {"\n"}&lt;span className="badge bg-[rgba(230,104,179)]
                          opacity-100 !rounded-[50rem]"&gt;Badge&lt;/span&gt;
                          {"\n"}&lt;span className="badge bg-[rgba(94,185,240)]
                          opacity-100 !rounded-[50rem]"&gt;Badge&lt;/span&gt;
                          {"\n"}&lt;span className="badge bg-[rgba(96,93,186)]
                          opacity-100 !rounded-[50rem]"&gt;Badge&lt;/span&gt;
                          {"\n"}&lt;span className="badge{"  "}bg-[#21262c]
                          opacity-100{"  "}
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;{"\n"}&lt;span
                          className="badge bg-[rgba(148,153,163)] opacity-100
                          !text-white !rounded-[50rem]"&gt;Badge&lt;/span&gt;
                          {"\n"}
                          {"\n"}&lt;span className="badge bg-[rgba(255,255,255)]
                          opacity-100 !text-[#343f52]
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;{"\n"}
                          {"  "}
                          {"\n"}&lt;span className="badge !bg-[#e0e9fa]
                          !text-[#3f78e0]
                          {"  "}!rounded-[50rem]"&gt;Badge&lt;/span&gt;{"\n"}
                          &lt;span className="badge !bg-[#fef3e4]
                          !text-[#fab758]
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;{"\n"}&lt;span
                          className="badge bg-[#f78b77] !text-[#f78b77]
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;{"\n"}&lt;span
                          className="badge !bg-[#fae6e7] !text-[#e2626b]
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;{"\n"}&lt;span
                          className="badge bg-[#f8e7ec] !text-[#d16b86]
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;{"\n"}&lt;span
                          className="badge bg-[#f0eaf6] !text-[#a07cc5]
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;{"\n"}&lt;span
                          className="badge bg-[#e9eaf8] !text-[#747ed1]
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;{"\n"}&lt;span
                          className="badge bg-[#e0e9fa] !text-[#3f78e0]
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;{"\n"}&lt;span
                          className="badge bg-[#e4f1f6] !text-[#54a8c7]
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;{"\n"}&lt;span
                          className="badge bg-[#e1f6f0] !text-[#45c4a0]
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;{"\n"}&lt;span
                          className="badge !bg-[#eaf3ef] !text-[#7cb798]
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;{"\n"}&lt;span
                          className="badge bg-[#fbe7f3] !text-[#e668b3]
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;{"\n"}&lt;span
                          className="badge bg-[#e5f4fd] !text-[#5eb9f0]
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;{"\n"}&lt;span
                          className="badge bg-[#e6e5f4] !text-[#605dba]
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;{"\n"}&lt;span
                          className="badge bg-[#dcddde] !text-[#343f52]
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;{"\n"}&lt;span
                          className="badge bg-[rgba(164,174,198,0.2)]
                          !text-[#343f52]
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;
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
            <h2 className="!mb-5 !leading-[1.35]">Gradients</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <span className="badge gradient-1 !rounded-[50rem]">Badge</span>{" "}
                <span className="badge gradient-2 !rounded-[50rem]">Badge</span>{" "}
                <span className="badge gradient-3 !rounded-[50rem]">Badge</span>{" "}
                <span className="badge gradient-4 !rounded-[50rem]">Badge</span>{" "}
                <span className="badge gradient-5 !rounded-[50rem]">Badge</span>{" "}
                <span className="badge gradient-6 !rounded-[50rem]">Badge</span>{" "}
                <span className="badge gradient-7 !rounded-[50rem]">Badge</span>{" "}
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
                          &lt;span className="badge gradient-1
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;{"\n"}&lt;span
                          className="badge gradient-2
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;{"\n"}&lt;span
                          className="badge gradient-3
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;{"\n"}&lt;span
                          className="badge gradient-4
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;{"\n"}&lt;span
                          className="badge gradient-5
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;{"\n"}&lt;span
                          className="badge gradient-6
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;{"\n"}&lt;span
                          className="badge gradient-7
                          !rounded-[50rem]"&gt;Badge&lt;/span&gt;
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
            <h2 className="!mb-5 !leading-[1.35]">Shapes</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <span className="badge !bg-[rgba(63,120,224)] opacity-100 !rounded-none">
                  Square
                </span>{" "}
                <span className="badge !bg-[rgba(63,120,224)] opacity-100 rounded">
                  Rounded
                </span>{" "}
                <span className="badge !bg-[rgba(63,120,224)] opacity-100 !rounded-[50rem]">
                  Pill
                </span>
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
                          &lt;span className="badge !bg-[rgba(63,120,224)]
                          opacity-100 !rounded-none"&gt;Square&lt;/span&gt;
                          {"\n"}
                          &lt;span className="badge !bg-[rgba(63,120,224)]
                          opacity-100 rounded"&gt;Rounded&lt;/span&gt;{"\n"}
                          &lt;span className="badge !bg-[rgba(63,120,224)]
                          opacity-100 !rounded-[50rem]"&gt;Pill&lt;/span&gt;
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
            <h2 className="!mb-5 !leading-[1.35]">Sizes</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <span className="badge !bg-[rgba(63,120,224)] opacity-100 !rounded-[50rem]">
                  Default
                </span>{" "}
                <span className="badge badge-lg !bg-[rgba(63,120,224)] opacity-100 !rounded-[50rem]">
                  Large
                </span>
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
                          &lt;span className="badge !bg-[rgba(63,120,224)]
                          opacity-100 !rounded-[50rem]"&gt;Default&lt;/span&gt;
                          {"\n"}&lt;span className="badge badge-lg
                          !bg-[rgba(63,120,224)] opacity-100
                          !rounded-[50rem]"&gt;Large&lt;/span&gt;
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
