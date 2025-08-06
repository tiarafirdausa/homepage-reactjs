import React from "react";
import DocsSidebar from "./DocsSidebar";
import CodeSnippetContainer from "../common/CodeSnippetContainer";
import Pagination from "../common/Pagination";
import CodeSnippet from "../common/CodeSnippet";

export default function PaginationComponent() {
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
                    Default
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-2"
                  >
                    Alternative
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-3"
                  >
                    Breadcrumb
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
            <h2 className="!mb-5 !leading-[1.35]">Default</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <nav className="flex" aria-label="pagination">
                  <ul className="pagination  !mb-0">
                    <Pagination />
                  </ul>
                  {/* /.pagination */}
                </nav>
                {/* /nav */}
              </div>

              <CodeSnippet
                code={`
&quot;use client&quot;;
import React, &lbrace; useState &rbrace; from &quot;react&quot;;

export default function Pagination() &lbrace;
  const [activePage, setActivePage] &#x3D; useState(1);
  const totalPages &#x3D; 3;

  const handleClick &#x3D; (page) &#x3D;&gt; &lbrace;
    if (page &gt;&#x3D; 1 &amp;&amp; page &lt;&#x3D; totalPages) &lbrace;
      setActivePage(page);
    &rbrace;
  &rbrace;;

  return (
    &lt;ul className&#x3D;&quot;pagination&quot;&gt;
      &lt;li className&#x3D;&lbrace;&#x60;page-item $&lbrace;activePage &#x3D;&#x3D;&#x3D; 1 ? &quot;disabled&quot; : &quot;&quot;&rbrace;&#x60;&rbrace;&gt;
        &lt;a
          className&#x3D;&quot;page-link&quot;
          onClick&#x3D;&lbrace;() &#x3D;&gt; handleClick(activePage - 1)&rbrace;
          aria-label&#x3D;&quot;Previous&quot;
        &gt;
          &lt;span aria-hidden&#x3D;&quot;true&quot;&gt;
            &lt;i className&#x3D;&quot;uil uil-arrow-left before:content-[&#39;\e949&#39;]&quot; &#x2F;&gt;
          &lt;&#x2F;span&gt;
        &lt;&#x2F;a&gt;
      &lt;&#x2F;li&gt;

      &lbrace;[...Array(totalPages)].map((_, index) &#x3D;&gt; &lbrace;
        const page &#x3D; index + 1;
        return (
          &lt;li
            key&#x3D;&lbrace;page&rbrace;
            className&#x3D;&lbrace;&#x60;page-item $&lbrace;activePage &#x3D;&#x3D;&#x3D; page ? &quot;active&quot; : &quot;&quot;&rbrace;&#x60;&rbrace;
          &gt;
            &lt;a className&#x3D;&quot;page-link&quot; onClick&#x3D;&lbrace;() &#x3D;&gt; handleClick(page)&rbrace;&gt;
              &lbrace;page&rbrace;
            &lt;&#x2F;a&gt;
          &lt;&#x2F;li&gt;
        );
      &rbrace;)&rbrace;

      &lt;li
        className&#x3D;&lbrace;&#x60;page-item $&lbrace;activePage &#x3D;&#x3D;&#x3D; totalPages ? &quot;disabled&quot; : &quot;&quot;&rbrace;&#x60;&rbrace;
      &gt;
        &lt;a
          className&#x3D;&quot;page-link&quot;
          onClick&#x3D;&lbrace;() &#x3D;&gt; handleClick(activePage + 1)&rbrace;
          aria-label&#x3D;&quot;Next&quot;
        &gt;
          &lt;span aria-hidden&#x3D;&quot;true&quot;&gt;
            &lt;i className&#x3D;&quot;uil uil-arrow-right before:content-[&#39;\e94c&#39;]&quot; &#x2F;&gt;
          &lt;&#x2F;span&gt;
        &lt;&#x2F;a&gt;
      &lt;&#x2F;li&gt;
    &lt;&#x2F;ul&gt;
  );
&rbrace;                
                `}
              />
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-2" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Pagination - Alternative</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <nav className="flex" aria-label="pagination">
                  <ul className="pagination pagination-alt  !mb-0">
                    <Pagination />
                  </ul>
                  {/* /.pagination */}
                </nav>
                {/* /nav */}
              </div>
              {/*/.card-body */}

              <CodeSnippet
                code={`
&quot;use client&quot;;
import React, &lbrace; useState &rbrace; from &quot;react&quot;;

export default function Pagination() &lbrace;
  const [activePage, setActivePage] &#x3D; useState(1);
  const totalPages &#x3D; 3;

  const handleClick &#x3D; (page) &#x3D;&gt; &lbrace;
    if (page &gt;&#x3D; 1 &amp;&amp; page &lt;&#x3D; totalPages) &lbrace;
      setActivePage(page);
    &rbrace;
  &rbrace;;

  return (
    &lt;ul className&#x3D;&quot;pagination&quot;&gt;
      &lt;li className&#x3D;&lbrace;&#x60;page-item $&lbrace;activePage &#x3D;&#x3D;&#x3D; 1 ? &quot;disabled&quot; : &quot;&quot;&rbrace;&#x60;&rbrace;&gt;
        &lt;a
          className&#x3D;&quot;page-link&quot;
          onClick&#x3D;&lbrace;() &#x3D;&gt; handleClick(activePage - 1)&rbrace;
          aria-label&#x3D;&quot;Previous&quot;
        &gt;
          &lt;span aria-hidden&#x3D;&quot;true&quot;&gt;
            &lt;i className&#x3D;&quot;uil uil-arrow-left before:content-[&#39;\e949&#39;]&quot; &#x2F;&gt;
          &lt;&#x2F;span&gt;
        &lt;&#x2F;a&gt;
      &lt;&#x2F;li&gt;

      &lbrace;[...Array(totalPages)].map((_, index) &#x3D;&gt; &lbrace;
        const page &#x3D; index + 1;
        return (
          &lt;li
            key&#x3D;&lbrace;page&rbrace;
            className&#x3D;&lbrace;&#x60;page-item $&lbrace;activePage &#x3D;&#x3D;&#x3D; page ? &quot;active&quot; : &quot;&quot;&rbrace;&#x60;&rbrace;
          &gt;
            &lt;a className&#x3D;&quot;page-link&quot; onClick&#x3D;&lbrace;() &#x3D;&gt; handleClick(page)&rbrace;&gt;
              &lbrace;page&rbrace;
            &lt;&#x2F;a&gt;
          &lt;&#x2F;li&gt;
        );
      &rbrace;)&rbrace;

      &lt;li
        className&#x3D;&lbrace;&#x60;page-item $&lbrace;activePage &#x3D;&#x3D;&#x3D; totalPages ? &quot;disabled&quot; : &quot;&quot;&rbrace;&#x60;&rbrace;
      &gt;
        &lt;a
          className&#x3D;&quot;page-link&quot;
          onClick&#x3D;&lbrace;() &#x3D;&gt; handleClick(activePage + 1)&rbrace;
          aria-label&#x3D;&quot;Next&quot;
        &gt;
          &lt;span aria-hidden&#x3D;&quot;true&quot;&gt;
            &lt;i className&#x3D;&quot;uil uil-arrow-right before:content-[&#39;\e94c&#39;]&quot; &#x2F;&gt;
          &lt;&#x2F;span&gt;
        &lt;&#x2F;a&gt;
      &lt;&#x2F;li&gt;
    &lt;&#x2F;ul&gt;
  );
&rbrace;                
                `}
              />
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-3" className="wrapper py-24">
            <h2 className="!mb-5 !leading-[1.35]">Breadcrumb</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb flex flex-wrap !mb-4 p-0 rounded-none">
                    <li
                      className="breadcrumb-item flex !text-[#60697b] active"
                      aria-current="page"
                    >
                      Home
                    </li>
                  </ol>
                </nav>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb flex flex-wrap !mb-4 p-0 rounded-none">
                    <li className="breadcrumb-item flex !text-[#60697b]">
                      <a
                        className="!text-[#60697b] hover:!text-[#3f78e0]"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item flex !text-[#60697b] !pl-2 before:font-normal before:!flex before:items-center before:text-[rgba(96,105,123,0.35)] before:content-['\e931'] before:text-[0.9rem] before:-mt-px before:!pr-2 before:font-Unicons active"
                      aria-current="page"
                    >
                      Library
                    </li>
                  </ol>
                </nav>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb flex flex-wrap !mb-4 p-0 rounded-none">
                    <li className="breadcrumb-item flex !text-[#60697b]">
                      <a
                        className="!text-[#60697b] hover:!text-[#3f78e0]"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item flex !text-[#60697b] !pl-2 before:font-normal before:!flex before:items-center before:text-[rgba(96,105,123,0.35)] before:content-['\e931'] before:text-[0.9rem] before:-mt-px before:!pr-2 before:font-Unicons">
                      <a
                        className="!text-[#60697b] hover:!text-[#3f78e0]"
                        href="#"
                      >
                        Library
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item flex !text-[#60697b] !pl-2 before:font-normal before:!flex before:items-center before:text-[rgba(96,105,123,0.35)] before:content-['\e931'] before:text-[0.9rem] before:-mt-px before:!pr-2 before:font-Unicons active"
                      aria-current="page"
                    >
                      Data
                    </li>
                  </ol>
                </nav>
                <nav
                  aria-label="breadcrumb"
                  className=" bg-[#21262c] opacity-100  p-3 rounded"
                >
                  <ol className="breadcrumb !text-white  !mb-0 flex flex-wrap p-0 rounded-none">
                    <li className="breadcrumb-item flex !text-[#60697b]">
                      <a className=" !text-white hover:!text-white" href="#">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item flex !text-[#60697b] !pl-2 before:font-normal before:!flex before:items-center before:text-[rgba(255,255,255,.5)] before:content-['\e931'] before:text-[0.9rem] before:-mt-px before:!pr-2 before:font-Unicons">
                      <a className=" !text-white hover:!text-white" href="#">
                        Library
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item flex !text-white !pl-2 before:font-normal before:!flex before:items-center before:text-[rgba(255,255,255,.5)] before:content-['\e931'] before:text-[0.9rem] before:-mt-px before:!pr-2 before:font-Unicons active"
                      aria-current="page"
                    >
                      Data
                    </li>
                  </ol>
                </nav>
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
                          &lt;nav aria-label="breadcrumb"&gt;{"\n"}
                          {"  "}&lt;ol className="breadcrumb"&gt;{"\n"}
                          {"    "}&lt;li className="breadcrumb-item active"
                          aria-current="page"&gt;Home&lt;/li&gt;{"\n"}
                          {"  "}&lt;/ol&gt;{"\n"}&lt;/nav&gt;{"\n"}
                          {"\n"}&lt;nav aria-label="breadcrumb"&gt;{"\n"}
                          {"  "}&lt;ol className="breadcrumb"&gt;{"\n"}
                          {"    "}&lt;li className="breadcrumb-item"&gt;&lt;a
                          href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;{"\n"}
                          {"    "}&lt;li className="breadcrumb-item active"
                          aria-current="page"&gt;Library&lt;/li&gt;{"\n"}
                          {"  "}&lt;/ol&gt;{"\n"}&lt;/nav&gt;{"\n"}
                          {"\n"}&lt;nav aria-label="breadcrumb"&gt;{"\n"}
                          {"  "}&lt;ol className="breadcrumb"&gt;{"\n"}
                          {"    "}&lt;li className="breadcrumb-item"&gt;&lt;a
                          href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;{"\n"}
                          {"    "}&lt;li className="breadcrumb-item"&gt;&lt;a
                          href="#"&gt;Library&lt;/a&gt;&lt;/li&gt;{"\n"}
                          {"    "}&lt;li className="breadcrumb-item active"
                          aria-current="page"&gt;Data&lt;/li&gt;{"\n"}
                          {"  "}&lt;/ol&gt;{"\n"}&lt;/nav&gt;{"\n"}
                          {"\n"}&lt;nav aria-label="breadcrumb"&gt;{"\n"}
                          {"  "}&lt;ol className="breadcrumb !text-white"&gt;
                          {"\n"}
                          {"    "}&lt;li className="breadcrumb-item"&gt;&lt;a
                          href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;{"\n"}
                          {"    "}&lt;li className="breadcrumb-item"&gt;&lt;a
                          href="#"&gt;Library&lt;/a&gt;&lt;/li&gt;{"\n"}
                          {"    "}&lt;li className="breadcrumb-item active"
                          aria-current="page"&gt;Data&lt;/li&gt;{"\n"}
                          {"  "}&lt;/ol&gt;{"\n"}&lt;/nav&gt;
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
