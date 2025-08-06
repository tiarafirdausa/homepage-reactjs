import React from "react";
import DocsSidebar from "./DocsSidebar";
import CodeSnippetContainer from "../common/CodeSnippetContainer";

export default function Colors() {
  return (
    <div className="container">
      <div className="flex flex-wrap mx-[-15px]">
        <aside className="xl:w-2/12 flex-[0_0_auto] !px-[15px] max-w-full sidebar doc-sidebar md:!mt-0 py-24 hidden  xl:block">
          <DocsSidebar />
          {/* /.widget */}
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
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] active "
                    href="#snippet-2"
                  >
                    Changing Primary
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-3"
                  >
                    Background Colors
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-4"
                  >
                    Text Colors
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
          <section id="snippet-2" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Changing Primary Color</h2>
            <div className="card">
              <div className="card-body p-[40px]">
                <p className="!mb-2">
                  To change the primary color to a custom color, open component
                  file and replace your custom color like this{" "}
                  <code className="code">text-[#your_color_code]</code>
                </p>
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
                      <pre className="language-scss">
                        <code>
                          compoonets/your_file.jsx{"\n"}
                          {"                      "}!text-[#3f78e0]{"\n"}
                          or app/your_file.jsx{"\n"}
                          {"                      "}!text-[#3f78e0]
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
            <h2 className="!mb-5 !leading-[1.35]">Background Colors</h2>
            <div className="card">
              <div className="card-body p-[40px]">
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px]">
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none">
                      <div className="card-header !p-4 !border-0 !bg-[rgba(250,183,88)] opacity-100 !text-white">
                        .bg-[#fab758]
                      </div>
                      <div className="card-body !p-4 !bg-[#fef3e4] !text-[#fab758]">
                        .bg-[#fef3e4]
                      </div>
                      <div className="card-footer !p-4 !border-0 !bg-[#fff8ee] !text-[#fab758]">
                        .bg-[#fff8ee]
                      </div>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none">
                      <div className="card-header !p-4 !border-0 !bg-[rgba(247,139,119)] opacity-100 !text-white">
                        .bg-[#f78b77]
                      </div>
                      <div className="card-body !p-4 !bg-[#feece9] !text-[#f78b77]">
                        .bg-[#feece9]
                      </div>
                      <div className="card-footer !p-4 !border-0 !bg-[#fef4f2] !text-[#f78b77]">
                        .bg-[#fef4f2]
                      </div>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none">
                      <div className="card-header !p-4 !border-0 !bg-[rgba(226,98,107)] opacity-100 !text-white">
                        .bg-[#e2626b]
                      </div>
                      <div className="card-body !p-4 !bg-[#fae6e7] !text-[#e2626b]">
                        .bg-[#fae6e7]
                      </div>
                      <div className="card-footer !p-4 !border-0 !bg-[#fcf0f1] !text-[#e2626b]">
                        .bg-[#fcf0f1]
                      </div>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none">
                      <div className="card-header !p-4 !border-0 !bg-[rgba(209,107,134)] !opacity-100 !text-white">
                        .bg-[#d16b86]
                      </div>
                      <div className="card-body !p-4 !bg-[#f8e7ec] !text-[#d16b86]">
                        .bg-[#f8e7ec]
                      </div>
                      <div className="card-footer !p-4 !border-0 !bg-[#fbf1f4] !text-[#d16b86]">
                        .bg-[#fbf1f4]
                      </div>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none">
                      <div className="card-header !p-4 !border-0 !bg-[rgba(160,124,197)] opacity-100 !text-white">
                        .bg-[#a07cc5]
                      </div>
                      <div className="card-body !p-4 !bg-[#f0eaf6] !text-[#a07cc5]">
                        .bg-[#f0eaf6]
                      </div>
                      <div className="card-footer !p-4 !border-0 !bg-[#f6f3f9] !text-[#a07cc5]">
                        .bg-[#f6f3f9]
                      </div>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none">
                      <div className="card-header !p-4 !border-0 !bg-[rgba(116,126,209)] opacity-100 !text-white">
                        .bg-[#747ed1]
                      </div>
                      <div className="card-body !p-4 !bg-[#e9eaf8] !text-[#747ed1]">
                        .bg-[#e9eaf8]
                      </div>
                      <div className="card-footer !p-4 !border-0 !bg-[#f6f3f9] !text-[#747ed1]">
                        .bg-[#f2f3fb]
                      </div>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none">
                      <div className="card-header p-4 !border-0 !bg-[rgba(63,120,224)] opacity-100 !text-white">
                        .bg-[#3f78e0]
                      </div>
                      <div className="card-body p-4 bg-[#e0e9fa] !text-[#3f78e0]">
                        .bg-[#e0e9fa]
                      </div>
                      <div className="card-footer !p-4 !border-0 !bg-[#edf2fc] !text-[#3f78e0]">
                        .bg-[#edf2fc]
                      </div>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none">
                      <div className="card-header p-4 !border-0 !bg-[rgba(84,168,199)] opacity-100 !text-white">
                        .bg-[#54a8c7]
                      </div>
                      <div className="card-body p-4 bg-[#e4f1f6] !text-[#54a8c7]">
                        .bg-[#e4f1f6]
                      </div>
                      <div className="card-footer !p-4 !border-0 !bg-[#eff7fa] !text-[#54a8c7]">
                        .bg-[#eff7fa]
                      </div>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none">
                      <div className="card-header !p-4 !border-0 !bg-[rgba(69,196,160)] opacity-100 !text-white">
                        .bg-[#45c4a0]
                      </div>
                      <div className="card-body p-4 bg-[#e1f6f0] !text-[#45c4a0]">
                        .bg-[#e1f6f0]
                      </div>
                      <div className="card-footer !p-4 !border-0 !bg-[#edf9f6] !text-[#45c4a0]">
                        .bg-[#edf9f6]
                      </div>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none">
                      <div className="card-header !p-4 !border-0 !bg-[rgba(124,183,152)] opacity-100 !text-white">
                        .bg-[#7cb798]
                      </div>
                      <div className="card-body p-4 !bg-[#eaf3ef] !text-[#7cb798]">
                        .bg-[#eaf3ef]
                      </div>
                      <div className="card-footer !p-4 !border-0 !bg-[#f3f8f5] !text-[#7cb798]">
                        .bg-[#f3f8f5]
                      </div>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none">
                      <div className="card-header !p-4 !border-0 !bg-[rgba(148,153,163)] opacity-100 !text-white">
                        .bg-[#9499a3]
                      </div>
                      <div className="card-body p-4 bg-[rgba(164,174,198,0.2)] !text-[#9499a3]">
                        .bg-[#a4aec633]
                      </div>
                      <div className="card-footer !p-4 !border-0 !bg-[#f5f5f6] !text-[#9499a3]">
                        .bg-[#f5f5f6]
                      </div>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none">
                      <div className="card-header !p-4 !border-0 !bg-[rgba(52,63,82)] opacity-100 !text-white">
                        .bg-[#343f52]
                      </div>
                      <div className="card-body p-4 bg-[#dfe0e3] !text-[#343f52]">
                        .bg-[#dfe0e3]
                      </div>
                      <div className="card-footer !p-4 !border-0 !bg-[#ecedef] !text-[#343f52]">
                        .bg-[#ecedef]
                      </div>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none">
                      <div className="card-header !p-4 !border-0 !bg-[rgba(230,104,179)] opacity-100 !text-white">
                        .bg-[#e668b3]
                      </div>
                      <div className="card-body p-4 bg-[#fbe7f3] !text-[#e668b3]">
                        .bg-[#fbe7f3]
                      </div>
                      <div className="card-footer !p-4 !border-0 !bg-[#fdf1f8] !text-[#e668b3]">
                        .bg-[#fdf1f8]
                      </div>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none">
                      <div className="card-header p-4 !border-0 !bg-[rgba(94,185,240)] opacity-100 !text-white">
                        .bg-[#5eb9f0]
                      </div>
                      <div className="card-body p-4 bg-[#e5f4fd] !text-[#5eb9f0]">
                        .bg-[#e5f4fd]
                      </div>
                      <div className="card-footer !p-4 !border-0 !bg-[#f0f8fe] !text-[#5eb9f0]">
                        .bg-[#f0f8fe]
                      </div>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none">
                      <div className="card-header p-4 !border-0 !bg-[rgba(96,93,186)] opacity-100 !text-white">
                        .bg-[#605dba]
                      </div>
                      <div className="card-body p-4 bg-[#e6e5f4] !text-[#605dba]">
                        .bg-[#e6e5f4]
                      </div>
                      <div className="card-footer !p-4 !border-0 !bg-[#f0f0f8] !text-[#605dba]">
                        .bg-[#f0f0f8]
                      </div>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none">
                      <div className="card-body rounded p-4 !border-0 gradient-1 !text-white">
                        .gradient-1
                      </div>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none">
                      <div className="card-body rounded p-4 !border-0 gradient-2 !text-white">
                        .gradient-2
                      </div>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none">
                      <div className="card-body rounded p-4 !border-0 gradient-3 !text-white">
                        .gradient-3
                      </div>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none">
                      <div className="card-body rounded p-4 !border-0 gradient-4 !text-white">
                        .gradient-4
                      </div>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none">
                      <div className="card-body rounded p-4 !border-0 gradient-5 !text-white">
                        .gradient-5
                      </div>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none">
                      <div className="card-body rounded p-4 !border-0 gradient-6 !text-white">
                        .gradient-6
                      </div>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none">
                      <div className="card-body rounded p-4 !border-0 gradient-7 !text-white">
                        .gradient-7
                      </div>
                    </div>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none">
                      <div className="card-body rounded p-4 !border-0 gradient-8 !text-white">
                        .gradient-8
                      </div>
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
                          &lt;div className="bg-[#fab758]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="bg-[#fef3e4]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="bg-[#fff8ee]"&gt;&lt;/div&gt;{"\n"}
                          {"  "}
                          {"\n"}&lt;div className="bg-[#f78b77]"&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="bg-[#feece9]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="bg-[#fef4f2]"&gt;&lt;/div&gt;{"\n"}
                          {"  "}
                          {"\n"}&lt;div className="bg-[#e2626b]"&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="bg-[#fae6e7]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="bg-[#fcf0f1]"&gt;&lt;/div&gt;{"\n"}
                          {"  "}
                          {"\n"}&lt;div className="bg-[#d16b86]"&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="bg-[#f8e7ec]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="bg-[#fbf1f4]"&gt;&lt;/div&gt;{"\n"}
                          {"  "}
                          {"\n"}&lt;div className="bg-[#a07cc5]"&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="bg-[#f0eaf6]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="bg-[#f6f3f9]"&gt;&lt;/div&gt;{"\n"}
                          {"  "}
                          {"\n"}&lt;div className="bg-[#747ed1]"&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="bg-[#e9eaf8]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="bg-[#f2f3fb]"&gt;&lt;/div&gt;{"\n"}
                          {"  "}
                          {"\n"}&lt;div className="bg-[#3f78e0]"&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="bg-[#e0e9fa]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="bg-[#edf2fc]"&gt;&lt;/div&gt;{"\n"}
                          {"  "}
                          {"\n"}&lt;div className="bg-[#54a8c7]"&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="bg-[#e4f1f6]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="bg-[#eff7fa]"&gt;&lt;/div&gt;{"\n"}
                          {"  "}
                          {"\n"}&lt;div className="bg-[#45c4a0]"&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="bg-[#e1f6f0]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="bg-[#edf9f6]"&gt;&lt;/div&gt;{"\n"}
                          {"  "}
                          {"\n"}&lt;div className="bg-[#7cb798]"&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="bg-[#eaf3ef]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="bg-[#f3f8f5]"&gt;&lt;/div&gt;{"\n"}
                          {"  "}
                          {"\n"}&lt;div className="bg-[#9499a3]"&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="bg-[#a4aec633]"&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="bg-[#f5f5f6]"&gt;&lt;/div&gt;{"\n"}
                          {"  "}
                          {"\n"}&lt;div className="bg-[#343f52]"&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="bg-[#dfe0e3]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="bg-[#ecedef]"&gt;&lt;/div&gt;{"\n"}
                          {"\n"}&lt;div className="bg-[#e668b3]"&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="bg-[#fbe7f3]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="bg-[#fdf1f8]"&gt;&lt;/div&gt;{"\n"}
                          {"\n"}&lt;div className="bg-[#5eb9f0]"&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="bg-[#e5f4fd]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="bg-[#f0f8fe]"&gt;&lt;/div&gt;{"\n"}
                          {"\n"}&lt;div className="bg-[#605dba]"&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="bg-[#e6e5f4]"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="bg-[#f0f0f8]"&gt;&lt;/div&gt;{"\n"}
                          {"\n"}&lt;div className="gradient-1"&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="gradient-2"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="gradient-3"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="gradient-4"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="gradient-5"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="gradient-6"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="gradient-7"&gt;&lt;/div&gt;{"\n"}
                          &lt;div className="gradient-8"&gt;&lt;/div&gt;
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
            <h2 className="!mb-5 !leading-[1.35]">Text Colors</h2>
            <div className="card">
              <div className="card-body p-[40px]">
                <div className="flex flex-wrap mx-[-15px] !mt-[-40px]">
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
                    <p className="!text-[#fab758]">.text-[#fab758]</p>
                    <p className="!text-[#f78b77]">.text-[#f78b77]</p>
                    <p className="!text-[#e2626b]">.text-[#e2626b]</p>
                    <p className="!text-[#d16b86]">.text-[#d16b86]</p>
                    <p className="!text-[#e668b3] !mb-0">.text-[#e668b3]</p>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
                    <p className="!text-[#a07cc5]">.text-[#a07cc5]</p>
                    <p className="!text-[#747ed1]">.text-[#747ed1]</p>
                    <p className="!text-[#3f78e0]">.text-[#3f78e0]</p>
                    <p className="!text-[#54a8c7]">.text-[#54a8c7]</p>
                    <p className="!text-[#5eb9f0] !mb-0">.text-[#5eb9f0]</p>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
                    <p className="!text-[#45c4a0]">.text-[#45c4a0]</p>
                    <p className="!text-[#7cb798]">.text-[#7cb798]</p>
                    <p className="!text-[#9499a3]">.text-[#9499a3]</p>
                    <p className="!text-[#343f52]">.text-[#343f52]</p>
                    <p className="!text-[#605dba] !mb-0">.text-[#605dba]</p>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
                    <p className="!text-[#3f78e0]   !mb-0">.text-[#3f78e0] </p>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
                    <p className="!text-[#aab0bc]  !mb-0">.text-[#aab0bc]</p>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
                    <p className="text-white !bg-black opacity-100 inline-block py-1 px-2  !mb-0">
                      .text-white
                    </p>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
                    <p className="text-gradient gradient-1">.gradient-1</p>
                    <br />
                    <p className="text-gradient gradient-2">.gradient-2</p>
                    <br />
                    <p className="text-gradient gradient-3">.gradient-3</p>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
                    <p className="text-gradient gradient-4">.gradient-4</p>
                    <br />
                    <p className="text-gradient gradient-5">.gradient-5</p>
                    <br />
                    <p className="text-gradient gradient-6">.gradient-6</p>
                  </div>
                  {/* /column */}
                  <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
                    <p className="text-gradient gradient-7">.gradient-7</p>
                    <br />
                    <p className="text-gradient gradient-8">.gradient-8</p>
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
                          &lt;span className="text-[#fab758]"&gt;&lt;/span&gt;
                          {"\n"}
                          &lt;span className="text-[#f78b77]"&gt;&lt;/span&gt;
                          {"\n"}
                          &lt;span className="text-[#e2626b]"&gt;&lt;/span&gt;
                          {"\n"}
                          &lt;span className="text-[#d16b86]"&gt;&lt;/span&gt;
                          {"\n"}
                          &lt;span className="text-[#a07cc5]"&gt;&lt;/span&gt;
                          {"\n"}
                          &lt;span className="text-[#747ed1]"&gt;&lt;/span&gt;
                          {"\n"}
                          &lt;span className="text-[#3f78e0]"&gt;&lt;/span&gt;
                          {"\n"}
                          &lt;span className="text-[#54a8c7]"&gt;&lt;/span&gt;
                          {"\n"}
                          &lt;span className="text-[#45c4a0]"&gt;&lt;/span&gt;
                          {"\n"}
                          &lt;span className="text-[#7cb798]"&gt;&lt;/span&gt;
                          {"\n"}
                          &lt;span className="text-[#9499a3]"&gt;&lt;/span&gt;
                          {"\n"}
                          &lt;span className="text-[#343f52]"&gt;&lt;/span&gt;
                          {"\n"}
                          &lt;span className="text-[#e668b3]"&gt;&lt;/span&gt;
                          {"\n"}
                          &lt;span className="text-[#5eb9f0]"&gt;&lt;/span&gt;
                          {"\n"}
                          &lt;span className="text-[#605dba]"&gt;&lt;/span&gt;
                          {"\n"}
                          {"\n"}&lt;span
                          className="text-[#3f78e0]"&gt;&lt;/span&gt;
                          {"\n"}
                          &lt;span className="text-[#aab0bc]"&gt;&lt;/span&gt;
                          {"\n"}
                          &lt;span className="text-white"&gt;&lt;/span&gt;{"\n"}
                          {"\n"}&lt;span className="text-gradient
                          gradient-1"&gt;&lt;/span&gt;{"\n"}&lt;span
                          className="text-gradient gradient-2"&gt;&lt;/span&gt;
                          {"\n"}
                          &lt;span className="text-gradient
                          gradient-3"&gt;&lt;/span&gt;
                          {"\n"}&lt;span className="text-gradient
                          gradient-4"&gt;&lt;/span&gt;{"\n"}&lt;span
                          className="text-gradient gradient-5"&gt;&lt;/span&gt;
                          {"\n"}
                          &lt;span className="text-gradient
                          gradient-6"&gt;&lt;/span&gt;
                          {"\n"}&lt;span className="text-gradient
                          gradient-7"&gt;&lt;/span&gt;
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
