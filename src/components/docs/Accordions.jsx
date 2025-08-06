import React from "react";
import DocsSidebar from "./DocsSidebar";
import CodeSnippetContainer from "../common/CodeSnippetContainer";

export default function Accordions() {
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
                    Simple
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-2"
                  >
                    Background
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-3"
                  >
                    Icon
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
            <h2 className="!mb-3 !leading-[1.35]">Simple Accordion</h2>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
              Omit the <code className="code">data-bs-parent</code> attribute on
              each <code className="code">.accordion-collapse</code> to make
              accordion items stay open when another item is opened.
            </p>
            <div className="card">
              <div className="card-body !mb-[-0.5rem] p-[40px]">
                <div
                  className="accordion accordion-wrapper"
                  id="accordionSimpleExample"
                >
                  <div className="card plain accordion-item">
                    <div
                      className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                      id="headingSimpleOne"
                    >
                      <button
                        className="accordion-button !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSimpleOne"
                        aria-expanded="true"
                        aria-controls="collapseSimpleOne"
                      >
                        {" "}
                        Professional Design{" "}
                      </button>
                    </div>
                    {/*/.card-header */}
                    <div
                      id="collapseSimpleOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingSimpleOne"
                      data-bs-parent="#accordionSimpleExample"
                    >
                      <div className="card-body flex-[1_1_auto] !pb-4">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.accordion-collapse */}
                  </div>
                  {/*/.accordion-item */}
                  <div className="card plain accordion-item">
                    <div
                      className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                      id="headingSimpleTwo"
                    >
                      <button
                        className="collapsed !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSimpleTwo"
                        aria-expanded="false"
                        aria-controls="collapseSimpleTwo"
                      >
                        {" "}
                        Top-Notch Support{" "}
                      </button>
                    </div>
                    {/*/.card-header */}
                    <div
                      id="collapseSimpleTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSimpleTwo"
                      data-bs-parent="#accordionSimpleExample"
                    >
                      <div className="card-body flex-[1_1_auto] !pb-4">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.accordion-collapse */}
                  </div>
                  {/*/.accordion-item */}
                  <div className="card plain accordion-item">
                    <div
                      className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                      id="headingSimpleThree"
                    >
                      <button
                        className="collapsed !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSimpleThree"
                        aria-expanded="false"
                        aria-controls="collapseSimpleThree"
                      >
                        {" "}
                        Header and Slider Options{" "}
                      </button>
                    </div>
                    {/*/.card-header */}
                    <div
                      id="collapseSimpleThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSimpleThree"
                      data-bs-parent="#accordionSimpleExample"
                    >
                      <div className="card-body flex-[1_1_auto] !pb-4">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.accordion-collapse */}
                  </div>
                  {/*/.accordion-item */}
                </div>
                {/*/.accordion */}
              </div>
              {/*/.card-body */}
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
              <CodeSnippetContainer>
                <div
                  id="collapse-1"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          {"\n"}
                          {"                      "}&lt;div className="accordion
                          accordion-wrapper" id="accordionSimpleExample"&gt;
                          {"\n"}
                          {"                        "}&lt;div className="card
                          plain accordion-item"&gt;{"\n"}
                          {"                          "}&lt;div
                          className="card-header !mb-0 !p-[0_0_.8rem_0]
                          !border-0 !bg-inherit" id="headingSimpleOne"&gt;{"\n"}
                          {"                            "}&lt;button
                          className="accordion-button !text-[.85rem]
                          before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSimpleOne"
                          aria-expanded="true"
                          aria-controls="collapseSimpleOne"&gt; Professional
                          Design &lt;/button&gt;{"\n"}
                          {"                          "}&lt;/div&gt;{"\n"}
                          {"                          "}&lt;!--/.card-header
                          --&gt;
                          {"\n"}
                          {"                          "}&lt;div
                          id="collapseSimpleOne" className="accordion-collapse
                          collapse show" aria-labelledby="headingSimpleOne"
                          data-bs-parent="#accordionSimpleExample"&gt;{"\n"}
                          {"                            "}&lt;div
                          className="card-body flex-[1_1_auto] !pb-4"&gt;{"\n"}
                          {"                              "}&lt;p&gt;Fusce
                          dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna,
                          vel.&lt;/p&gt;{"\n"}
                          {"                            "}&lt;/div&gt;{"\n"}
                          {"                            "}&lt;!--/.card-body
                          --&gt;
                          {"\n"}
                          {"                          "}&lt;/div&gt;{"\n"}
                          {"                          "}
                          &lt;!--/.accordion-collapse --&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/.accordion-item
                          --&gt;
                          {"\n"}
                          {"                        "}&lt;div className="card
                          plain accordion-item"&gt;{"\n"}
                          {"                          "}&lt;div
                          className="card-header !mb-0 !p-[0_0_.8rem_0]
                          !border-0 !bg-inherit" id="headingSimpleTwo"&gt;{"\n"}
                          {"                            "}&lt;button
                          className="collapsed !text-[.85rem]
                          before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSimpleTwo"
                          aria-expanded="false"
                          aria-controls="collapseSimpleTwo"&gt; Top-Notch
                          Support &lt;/button&gt;{"\n"}
                          {"                          "}&lt;/div&gt;{"\n"}
                          {"                          "}&lt;!--/.card-header
                          --&gt;
                          {"\n"}
                          {"                          "}&lt;div
                          id="collapseSimpleTwo" className="accordion-collapse
                          collapse" aria-labelledby="headingSimpleTwo"
                          data-bs-parent="#accordionSimpleExample"&gt;{"\n"}
                          {"                            "}&lt;div
                          className="card-body flex-[1_1_auto] !pb-4"&gt;{"\n"}
                          {"                              "}&lt;p&gt;Fusce
                          dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna,
                          vel.&lt;/p&gt;{"\n"}
                          {"                            "}&lt;/div&gt;{"\n"}
                          {"                            "}&lt;!--/.card-body
                          --&gt;
                          {"\n"}
                          {"                          "}&lt;/div&gt;{"\n"}
                          {"                          "}
                          &lt;!--/.accordion-collapse --&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/.accordion-item
                          --&gt;
                          {"\n"}
                          {"                        "}&lt;div className="card
                          plain accordion-item"&gt;{"\n"}
                          {"                          "}&lt;div
                          className="card-header !mb-0 !p-[0_0_.8rem_0]
                          !border-0 !bg-inherit" id="headingSimpleThree"&gt;
                          {"\n"}
                          {"                            "}&lt;button
                          className="collapsed !text-[.85rem]
                          before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSimpleThree"
                          aria-expanded="false"
                          aria-controls="collapseSimpleThree"&gt; Header and
                          Slider Options &lt;/button&gt;{"\n"}
                          {"                          "}&lt;/div&gt;{"\n"}
                          {"                          "}&lt;!--/.card-header
                          --&gt;
                          {"\n"}
                          {"                          "}&lt;div
                          id="collapseSimpleThree" className="accordion-collapse
                          collapse" aria-labelledby="headingSimpleThree"
                          data-bs-parent="#accordionSimpleExample"&gt;{"\n"}
                          {"                            "}&lt;div
                          className="card-body flex-[1_1_auto] !pb-4"&gt;{"\n"}
                          {"                              "}&lt;p&gt;Fusce
                          dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna,
                          vel.&lt;/p&gt;{"\n"}
                          {"                            "}&lt;/div&gt;{"\n"}
                          {"                            "}&lt;!--/.card-body
                          --&gt;
                          {"\n"}
                          {"                          "}&lt;/div&gt;{"\n"}
                          {"                          "}
                          &lt;!--/.accordion-collapse --&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/.accordion-item
                          --&gt;
                          {"\n"}
                          {"                      "}&lt;/div&gt;
                        </code>
                      </pre>
                    </div>
                    {/*/.code-wrapper-inner */}
                  </div>
                  {/*/.code-wrapper */}
                </div>{" "}
              </CodeSnippetContainer>
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-2" className="wrapper pt-24">
            <h2 className="!mb-3 !leading-[1.35]">Accordion with Background</h2>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
              Omit the <code className="code">data-bs-parent</code> attribute on
              each <code className="code">.accordion-collapse</code> to make
              accordion items stay open when another item is opened.
            </p>
            <div className="card">
              <div className="card-body !mb-[-0.5rem] p-[40px]">
                <div
                  className="accordion accordion-wrapper"
                  id="accordionExample"
                >
                  <div className="card accordion-item !mb-5">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                      id="headingOne"
                    >
                      <button
                        className="accordion-button !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        {" "}
                        Professional Design{" "}
                      </button>
                    </div>
                    {/*/.card-header */}
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.accordion-collapse */}
                  </div>
                  {/*/.accordion-item */}
                  <div className="card accordion-item !mb-5">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                      id="headingTwo"
                    >
                      <button
                        className="collapsed !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        {" "}
                        Top-Notch Support{" "}
                      </button>
                    </div>
                    {/*/.card-header */}
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.accordion-collapse */}
                  </div>
                  {/*/.accordion-item */}
                  <div className="card accordion-item !mb-5">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                      id="headingThree"
                    >
                      <button
                        className="collapsed !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        {" "}
                        Header and Slider Options{" "}
                      </button>
                    </div>
                    {/*/.card-header */}
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.accordion-collapse */}
                  </div>
                  {/*/.accordion-item */}
                </div>
                {/*/.accordion */}
              </div>
              {/*/.card-body */}
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
              <CodeSnippetContainer>
                <div
                  id="collapse-2"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          {"\n"}
                          {"                      "}&lt;div className="accordion
                          accordion-wrapper" id="accordionExample"&gt;{"\n"}
                          {"                        "}&lt;div className="card
                          accordion-item !mb-5"&gt;{"\n"}
                          {"                          "}&lt;div
                          className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem]
                          !border-0 !bg-inherit" id="headingOne"&gt;{"\n"}
                          {"                            "}&lt;button
                          className="accordion-button !text-[.85rem]
                          before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne" aria-expanded="true"
                          aria-controls="collapseOne"&gt; Professional Design
                          &lt;/button&gt;{"\n"}
                          {"                          "}&lt;/div&gt;{"\n"}
                          {"                          "}&lt;!--/.card-header
                          --&gt;
                          {"\n"}
                          {"                          "}&lt;div id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"&gt;{"\n"}
                          {"                            "}&lt;div
                          className="card-body flex-[1_1_auto]
                          p-[0_1.25rem_.25rem_2.35rem]"&gt;{"\n"}
                          {"                              "}&lt;p&gt;Fusce
                          dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes.&lt;/p&gt;
                          {"\n"}
                          {"                            "}&lt;/div&gt;{"\n"}
                          {"                            "}&lt;!--/.card-body
                          --&gt;
                          {"\n"}
                          {"                          "}&lt;/div&gt;{"\n"}
                          {"                          "}
                          &lt;!--/.accordion-collapse --&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/.accordion-item
                          --&gt;
                          {"\n"}
                          {"                        "}&lt;div className="card
                          accordion-item !mb-5"&gt;{"\n"}
                          {"                          "}&lt;div
                          className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem]
                          !border-0 !bg-inherit" id="headingTwo"&gt;{"\n"}
                          {"                            "}&lt;button
                          className="collapsed !text-[.85rem]
                          before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo" aria-expanded="false"
                          aria-controls="collapseTwo"&gt; Top-Notch Support
                          &lt;/button&gt;{"\n"}
                          {"                          "}&lt;/div&gt;{"\n"}
                          {"                          "}&lt;!--/.card-header
                          --&gt;
                          {"\n"}
                          {"                          "}&lt;div id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"&gt;{"\n"}
                          {"                            "}&lt;div
                          className="card-body flex-[1_1_auto]
                          p-[0_1.25rem_.25rem_2.35rem]"&gt;{"\n"}
                          {"                              "}&lt;p&gt;Fusce
                          dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes.&lt;/p&gt;
                          {"\n"}
                          {"                            "}&lt;/div&gt;{"\n"}
                          {"                            "}&lt;!--/.card-body
                          --&gt;
                          {"\n"}
                          {"                          "}&lt;/div&gt;{"\n"}
                          {"                          "}
                          &lt;!--/.accordion-collapse --&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/.accordion-item
                          --&gt;
                          {"\n"}
                          {"                        "}&lt;div className="card
                          accordion-item !mb-5"&gt;{"\n"}
                          {"                          "}&lt;div
                          className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem]
                          !border-0 !bg-inherit" id="headingThree"&gt;{"\n"}
                          {"                            "}&lt;button
                          className="collapsed !text-[.85rem]
                          before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree" aria-expanded="false"
                          aria-controls="collapseThree"&gt; Header and Slider
                          Options &lt;/button&gt;{"\n"}
                          {"                          "}&lt;/div&gt;{"\n"}
                          {"                          "}&lt;!--/.card-header
                          --&gt;
                          {"\n"}
                          {"                          "}&lt;div
                          id="collapseThree" className="accordion-collapse
                          collapse" aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"&gt;{"\n"}
                          {"                            "}&lt;div
                          className="card-body flex-[1_1_auto]
                          p-[0_1.25rem_.25rem_2.35rem]"&gt;{"\n"}
                          {"                              "}&lt;p&gt;Fusce
                          dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes.&lt;/p&gt;
                          {"\n"}
                          {"                            "}&lt;/div&gt;{"\n"}
                          {"                            "}&lt;!--/.card-body
                          --&gt;
                          {"\n"}
                          {"                          "}&lt;/div&gt;{"\n"}
                          {"                          "}
                          &lt;!--/.accordion-collapse --&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/.accordion-item
                          --&gt;
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
          <section id="snippet-3" className="wrapper py-24">
            <h2 className="!mb-3 !leading-[1.35]">Accordion with Icon</h2>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
              Omit the <code className="code">data-bs-parent</code> attribute on
              each <code className="code">.accordion-collapse</code> to make
              accordion items stay open when another item is opened.
            </p>
            <div className="card">
              <div className="card-body !mb-[-0.5rem] p-[40px]">
                <div
                  className="accordion accordion-wrapper"
                  id="accordionIconExample"
                >
                  <div className="card accordion-item icon !mb-[1.25rem]">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                      id="headingIconOne"
                    >
                      <button
                        className="accordion-button !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseIconOne"
                        aria-expanded="true"
                        aria-controls="collapseIconOne"
                      >
                        <span>
                          <i className="uil uil-shield-exclamation before:content-['\ecb3']" />
                        </span>
                        Secure Payments
                      </button>
                    </div>
                    {/*/.card-header */}
                    <div
                      id="collapseIconOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingIconOne"
                      data-bs-parent="#accordionIconExample"
                    >
                      <div className="card-body flex-[1_1_auto] !pb-4">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.accordion-collapse */}
                  </div>
                  {/*/.accordion-item */}
                  <div className="card accordion-item icon !mb-[1.25rem]">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                      id="headingIconTwo"
                    >
                      <button
                        className="collapsed !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseIconTwo"
                        aria-expanded="false"
                        aria-controls="collapseIconTwo"
                      >
                        <span>
                          <i className="uil uil-check-circle before:content-['\e9db']" />
                        </span>
                        Daily Updates
                      </button>
                    </div>
                    {/*/.card-header */}
                    <div
                      id="collapseIconTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingIconTwo"
                      data-bs-parent="#accordionIconExample"
                    >
                      <div className="card-body flex-[1_1_auto] !pb-4">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.accordion-collapse */}
                  </div>
                  {/*/.accordion-item */}
                  <div className="card accordion-item icon !mb-[1.25rem]">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                      id="headingIconThree"
                    >
                      <button
                        className="collapsed !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseIconThree"
                        aria-expanded="false"
                        aria-controls="collapseIconThree"
                      >
                        <span>
                          <i className="uil uil-chart-line before:content-['\e9d3']" />
                        </span>
                        Market Research
                      </button>
                    </div>
                    {/*/.card-header */}
                    <div
                      id="collapseIconThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingIconThree"
                      data-bs-parent="#accordionIconExample"
                    >
                      <div className="card-body flex-[1_1_auto] !pb-4">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.accordion-collapse */}
                  </div>
                  {/*/.accordion-item */}
                </div>
                {/*/.accordion */}
              </div>
              {/*/.card-body */}
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
              <CodeSnippetContainer>
                <div
                  id="collapse-3"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          {"\n"}
                          {"                      "}&lt;div className="accordion
                          accordion-wrapper" id="accordionIconExample"&gt;{"\n"}
                          {"                        "}&lt;div className="card
                          accordion-item icon !mb-[1.25rem]"&gt;{"\n"}
                          {"                          "}&lt;div
                          className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem]
                          !border-0 !bg-inherit" id="headingIconOne"&gt;{"\n"}
                          {"                            "}&lt;button
                          className="accordion-button !text-[.85rem]
                          before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseIconOne" aria-expanded="true"
                          aria-controls="collapseIconOne"&gt;&lt;span&gt;&lt;i
                          className="uil uil-shield-exclamation
                          before:content-['\ecb3']"&gt;&lt;/i&gt;&lt;/span&gt;Secure
                          Payments&lt;/button&gt;{"\n"}
                          {"                          "}&lt;/div&gt;{"\n"}
                          {"                          "}&lt;!--/.card-header
                          --&gt;
                          {"\n"}
                          {"                          "}&lt;div
                          id="collapseIconOne" className="accordion-collapse
                          collapse show" aria-labelledby="headingIconOne"
                          data-bs-parent="#accordionIconExample"&gt;{"\n"}
                          {"                            "}&lt;div
                          className="card-body flex-[1_1_auto] !pb-4"&gt;{"\n"}
                          {"                              "}&lt;p&gt;Fusce
                          dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna,
                          vel.&lt;/p&gt;{"\n"}
                          {"                            "}&lt;/div&gt;{"\n"}
                          {"                            "}&lt;!--/.card-body
                          --&gt;
                          {"\n"}
                          {"                          "}&lt;/div&gt;{"\n"}
                          {"                          "}
                          &lt;!--/.accordion-collapse --&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/.accordion-item
                          --&gt;
                          {"\n"}
                          {"                        "}&lt;div className="card
                          accordion-item icon !mb-[1.25rem]"&gt;{"\n"}
                          {"                          "}&lt;div
                          className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem]
                          !border-0 !bg-inherit" id="headingIconTwo"&gt;{"\n"}
                          {"                            "}&lt;button
                          className="collapsed !text-[.85rem]
                          before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseIconTwo"
                          aria-expanded="false"
                          aria-controls="collapseIconTwo"&gt;&lt;span&gt;&lt;i
                          className="uil uil-check-circle
                          before:content-['\e9db']"&gt;&lt;/i&gt;&lt;/span&gt;Daily
                          Updates&lt;/button&gt;{"\n"}
                          {"                          "}&lt;/div&gt;{"\n"}
                          {"                          "}&lt;!--/.card-header
                          --&gt;
                          {"\n"}
                          {"                          "}&lt;div
                          id="collapseIconTwo" className="accordion-collapse
                          collapse" aria-labelledby="headingIconTwo"
                          data-bs-parent="#accordionIconExample"&gt;{"\n"}
                          {"                            "}&lt;div
                          className="card-body flex-[1_1_auto] !pb-4"&gt;{"\n"}
                          {"                              "}&lt;p&gt;Fusce
                          dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna,
                          vel.&lt;/p&gt;{"\n"}
                          {"                            "}&lt;/div&gt;{"\n"}
                          {"                            "}&lt;!--/.card-body
                          --&gt;
                          {"\n"}
                          {"                          "}&lt;/div&gt;{"\n"}
                          {"                          "}
                          &lt;!--/.accordion-collapse --&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/.accordion-item
                          --&gt;
                          {"\n"}
                          {"                        "}&lt;div className="card
                          accordion-item icon !mb-[1.25rem]"&gt;{"\n"}
                          {"                          "}&lt;div
                          className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem]
                          !border-0 !bg-inherit" id="headingIconThree"&gt;{"\n"}
                          {"                            "}&lt;button
                          className="collapsed !text-[.85rem]
                          before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseIconThree"
                          aria-expanded="false"
                          aria-controls="collapseIconThree"&gt;&lt;span&gt;&lt;i
                          className="uil uil-chart-line
                          before:content-['\e9d3']"&gt;&lt;/i&gt;&lt;/span&gt;Market
                          Research&lt;/button&gt;{"\n"}
                          {"                          "}&lt;/div&gt;{"\n"}
                          {"                          "}&lt;!--/.card-header
                          --&gt;
                          {"\n"}
                          {"                          "}&lt;div
                          id="collapseIconThree" className="accordion-collapse
                          collapse" aria-labelledby="headingIconThree"
                          data-bs-parent="#accordionIconExample"&gt;{"\n"}
                          {"                            "}&lt;div
                          className="card-body flex-[1_1_auto] !pb-4"&gt;{"\n"}
                          {"                              "}&lt;p&gt;Fusce
                          dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna,
                          vel.&lt;/p&gt;{"\n"}
                          {"                            "}&lt;/div&gt;{"\n"}
                          {"                            "}&lt;!--/.card-body
                          --&gt;
                          {"\n"}
                          {"                          "}&lt;/div&gt;{"\n"}
                          {"                          "}
                          &lt;!--/.accordion-collapse --&gt;{"\n"}
                          {"                        "}&lt;/div&gt;{"\n"}
                          {"                        "}&lt;!--/.accordion-item
                          --&gt;
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
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
    </div>
  );
}
