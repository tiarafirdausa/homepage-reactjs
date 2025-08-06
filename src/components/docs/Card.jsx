import React from "react";
import DocsSidebar from "./DocsSidebar";

import CodeSnippetContainer from "../common/CodeSnippetContainer";
export default function Card() {
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
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]  active"
                    href="#snippet-1"
                  >
                    Basic
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-2"
                  >
                    Color
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-3"
                  >
                    Border
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-4"
                  >
                    Image
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
            <h2 className="!mb-5 !leading-[1.35]">Basic</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] g-6 !mt-[-30px]">
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card">
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <h5 className="card-title">Default</h5>
                        <p className="card-text">
                          Etiam porta sem malesuada magna mollis euismod.
                          Maecenas sed diam eget risus varius blandit sit amet
                          non magna. Vivamus sagittis lacus augue.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.card */}
                  </div>
                  {/* /column */}
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <h5 className="card-title">Shadow</h5>
                        <p className="card-text">
                          Etiam porta sem malesuada magna mollis euismod.
                          Maecenas sed diam eget risus varius blandit sit amet
                          non magna. Vivamus sagittis lacus augue.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.card */}
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
                          &lt;div className="card"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card
                          !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
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
            <h2 className="!mb-5 !leading-[1.35]">Color</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] g-6 !mt-[-30px]">
                  <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none !bg-[rgba(63,120,224)] opacity-100 !text-white">
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <h5 className="card-title !text-white">Solid</h5>
                        <p className="card-text">
                          Sed posuere consectetur est at lobortis. Duis mollis,
                          commodo luctus.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.card */}
                  </div>
                  {/* /column */}
                  <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none !bg-[#e0e9fa]">
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <h5 className="card-title">Pale</h5>
                        <p className="card-text">
                          Sed posuere consectetur est at lobortis. Duis mollis,
                          commodo luctus.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.card */}
                  </div>
                  {/* /column */}
                  <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-none !bg-[#edf2fc]">
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <h5 className="card-title">Soft</h5>
                        <p className="card-text">
                          Sed posuere consectetur est at lobortis. Duis mollis,
                          commodo luctus.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.card */}
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
                          &lt;div className="card !shadow-none
                          !bg-[rgba(63,120,224)] opacity-100
                          !text-white"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          !bg-[#e0e9fa]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          !bg-[#edf2fc]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          {"  "}
                          {"\n"}&lt;div className="card !shadow-none
                          bg-[rgba(250,183,88)] opacity-100
                          !text-white"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[rgba(247,139,119)] opacity-100
                          !text-white"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[rgba(226,98,107)] opacity-100
                          !text-white"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          !bg-[rgba(209,107,134)] !opacity-100
                          !text-white"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[rgba(160,124,197)] opacity-100
                          !text-white"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[rgba(116,126,209)] opacity-100
                          !text-white"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[rgba(63,120,224)] opacity-100
                          !text-white"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[rgba(84,168,199)] opacity-100
                          !text-white"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[rgba(69,196,160)] opacity-100
                          !text-white"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[rgba(124,183,152)] opacity-100
                          !text-white"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[rgba(230,104,179)] opacity-100
                          !text-white"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[rgba(94,185,240)] opacity-100
                          !text-white"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[rgba(96,93,186)] opacity-100
                          !text-white"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[rgba(52,63,82)] opacity-100
                          !text-white"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[rgba(148,153,163)] opacity-100
                          !text-white"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          {"  "}
                          {"\n"}&lt;div className="card !shadow-none
                          !bg-[#fef3e4]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[#f78b77]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          !bg-[#fae6e7]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[#f8e7ec]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[#f0eaf6]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[#e9eaf8]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[#e0e9fa]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[#e4f1f6]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[#e1f6f0]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          !bg-[#eaf3ef]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[#fbe7f3]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[#e5f4fd]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[#e6e5f4]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-pale-navy"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[rgba(164,174,198,0.2)]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          {"  "}
                          {"\n"}&lt;div className="card !shadow-none
                          !bg-[#fff8ee]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          !bg-[#fef4f2]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[#fcf0f1]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          !bg-[#fbf1f4]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          !bg-[#f6f3f9]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          !bg-[#f6f3f9]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          !bg-[#edf2fc]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          !bg-[#eff7fa]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[#edf9f6]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          !bg-[#f3f8f5]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          !bg-[#fdf1f8]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[#f0f8fe]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          !bg-[#f0f0f8]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[#ecedef]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
                          {"\n"}
                          &lt;div className="card !shadow-none
                          bg-[#f5f5f6]"&gt;&lt;div
                          className="card-body"&gt;...&lt;/div&gt;&lt;/div&gt;
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
            <h2 className="!mb-3 !leading-[1.35]">Border</h2>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium">
              Available options:
            </p>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
              <code className="code">border-[#3f78e0]</code>,{" "}
              <code className="code">border-[#54a8c7]</code>,{" "}
              <code className="code">border-[#45c4a0]</code>,{" "}
              <code className="code">border-[#7cb798]</code>,{" "}
              <code className="code">border-[#343f52]</code>,{" "}
              <code className="code">border-[#f78b77]</code>,{" "}
              <code className="code">border-[#d16b86]</code>,{" "}
              <code className="code">border-[#747ed1]</code>,{" "}
              <code className="code">border-[#e2626b]</code>,{" "}
              <code className="code">border-[#a07cc5]</code>,{" "}
              <code className="code">border-[#fab758]</code>,{" "}
              <code className="code">border-[#e668b3]</code>,{" "}
              <code className="code">border-[#5eb9f0]</code>,{" "}
              <code className="code">border-[#605dba]</code>,{" "}
              <code className="code">border-[#c5d7f6]</code>,{" "}
              <code className="code">border-[#cce5ee]</code>,{" "}
              <code className="code">border-[#c7ede3]</code>,{" "}
              <code className="code">border-[#d8e9e0]</code>,{" "}
              <code className="code">border-[#c2c5cb]</code>,{" "}
              <code className="code">border-[#fddcd6]</code>,{" "}
              <code className="code">border-[#f1d3db]</code>,{" "}
              <code className="code">border-[#d5d8f1]</code>,{" "}
              <code className="code">border-[#f6d0d3]</code>,{" "}
              <code className="code">border-[#e3d8ee]</code>,{" "}
              <code className="code">border-[#fee9cd]</code>,{" "}
              <code className="code">border-[#f8d2e8]</code>,{" "}
              <code className="code">border-[#cfeafb]</code>,{" "}
              <code className="code">border-[#cfceea]</code>.
            </p>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] g-6 !mt-[-30px]">
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] card-border-start !border-[#c5d7f6] after:!border-r-[calc(0.4rem_-_6px)] after:!border-l-[6px]">
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <h5 className="card-title">Start</h5>
                        <p className="card-text">
                          Sed posuere consectetur est at lobortis. Duis mollis,
                          commodo luctus, nisi erat porttitor ligula, eget
                          lacinia.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.card */}
                  </div>
                  {/* /column */}
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] card-border-top !border-[rgba(69,196,160)] opacity-100">
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <h5 className="card-title">Top</h5>
                        <p className="card-text">
                          Sed posuere consectetur est at lobortis. Duis mollis,
                          commodo luctus, nisi erat porttitor ligula, eget
                          lacinia.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.card */}
                  </div>
                  {/* /column */}
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card !bg-[#fff8ee] card-border-bottom !border-[#fee9cd] after:!border-t-[calc(0.4rem_-_6px)] after:!border-b-[6px]">
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <h5 className="card-title">Bottom</h5>
                        <p className="card-text">
                          Sed posuere consectetur est at lobortis. Duis mollis,
                          commodo luctus, nisi erat porttitor ligula, eget
                          lacinia.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.card */}
                  </div>
                  {/* /column */}
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card bg-[#fcf0f1] card-border-end !border-[rgba(226,98,107)] opacity-100">
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <h5 className="card-title">End</h5>
                        <p className="card-text">
                          Sed posuere consectetur est at lobortis. Duis mollis,
                          commodo luctus, nisi erat porttitor ligula, eget
                          lacinia.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.card */}
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
                          &lt;div className="card card-border-start
                          border-[#3f78e0]"&gt;
                          {"\n"}
                          {"  "}&lt;div className="card-body"&gt;...&lt;/div&gt;
                          {"\n"}
                          &lt;/div&gt;{"\n"}
                          {"\n"}&lt;div className="card
                          !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]
                          card-border-top border-[#3f78e0]"&gt;{"\n"}
                          {"  "}&lt;div className="card-body"&gt;...&lt;/div&gt;
                          {"\n"}
                          &lt;/div&gt;{"\n"}
                          {"\n"}&lt;div className="card !bg-[#edf2fc]
                          card-border-end border-[#c5d7f6]"&gt;{"\n"}
                          {"  "}&lt;div className="card-body"&gt;...&lt;/div&gt;
                          {"\n"}
                          &lt;/div&gt;{"\n"}
                          {"\n"}&lt;div className="card !bg-[#edf2fc]
                          card-border-bottom border-[#3f78e0]"&gt;{"\n"}
                          {"  "}&lt;div className="card-body"&gt;...&lt;/div&gt;
                          {"\n"}
                          &lt;/div&gt;
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
            <h2 className="!mb-5 !leading-[1.35]">Image</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] g-6 !mt-[-30px]">
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card">
                      <img
                        className="card-img-top"
                        srcSet="/assets/img/photos/p1@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/p1.jpg"
                        width="360"
                        height="250"
                      />
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <h5 className="card-title">Image Cap Top</h5>
                        <p className="card-text !mb-0">
                          Etiam porta sem malesuada magna mollis euismod.
                          Maecenas sed diam eget risus varius blandit sit amet
                          non magna. Vivamus sagittis lacus augue.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.card */}
                  </div>
                  {/* /column */}
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <div className="card">
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <h5 className="card-title">Image Cap Bottom</h5>
                        <p className="card-text !mb-0">
                          Etiam porta sem malesuada magna mollis euismod.
                          Maecenas sed diam eget risus varius blandit sit amet
                          non magna. Vivamus sagittis lacus augue.
                        </p>
                      </div>
                      {/*/.card-body */}
                      <img
                        className="card-img-bottom"
                        srcSet="/assets/img/photos/p2@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/p2.jpg"
                        width="360"
                        height="250"
                      />
                    </div>
                    {/*/.card */}
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
                          &lt;div className="card"&gt;{"\n"}
                          {"  "}&lt;img className="card-img-top" src="..."
                          alt="" /&gt;
                          {"\n"}
                          {"  "}&lt;div className="card-body"&gt;{"\n"}
                          {"    "}...{"\n"}
                          {"  "}&lt;/div&gt;{"\n"}
                          {"  "}&lt;!--/.card-body --&gt;{"\n"}&lt;/div&gt;
                          {"\n"}
                          &lt;!--/.card --&gt;{"\n"}
                          {"\n"}&lt;div className="card"&gt;{"\n"}
                          {"  "}&lt;div className="card-body"&gt;{"\n"}
                          {"    "}...{"\n"}
                          {"  "}&lt;/div&gt;{"\n"}
                          {"  "}&lt;!--/.card-body --&gt;{"\n"}
                          {"  "}&lt;img className="card-img-bottom" src="..."
                          alt="" /&gt;
                          {"\n"}&lt;/div&gt;{"\n"}&lt;!--/.card --&gt;
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
