import React from "react";
import DocsSidebar from "./DocsSidebar";
import CodeSnippetContainer from "../common/CodeSnippetContainer";

export default function FormElements() {
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
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]  active"
                    href="#snippet-1"
                  >
                    Input
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-2"
                  >
                    Textarea
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-3"
                  >
                    Checks
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-4"
                  >
                    Radios
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-5"
                  >
                    Disabled
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-6"
                  >
                    Select
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
            <h2 className="!mb-5 !leading-[1.35]">Input</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="form-floating !relative">
                  <input
                    id="textInputExample"
                    type="text"
                    className=" form-control  relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out     focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset]   focus-visible:!border-[rgba(63,120,224,0.5)]   placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                    placeholder=""
                  />
                  <label
                    htmlFor="textInputExample"
                    className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                  >
                    Text Input
                  </label>
                </div>
                {/* /.relative */}
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
                          {"                      "}&lt;div
                          className="form-floating !relative"&gt;{"\n"}
                          {"                        "}&lt;input
                          id="textInputExample" type="text" className="
                          form-control
                          {"  "}relative block w-full text-[.75rem] font-medium
                          !text-[#60697b] bg-[#fefefe] bg-clip-padding border
                          shadow-[0_0_1.25rem_rgba(30,34,40,0.04)]
                          rounded-[0.4rem] border-solid
                          border-[rgba(8,60,130,0.07)] transition-[border-color]
                          duration-[0.15s] ease-in-out
                          {"     "}
                          focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset]
                          {"   "}
                          focus-visible:!border-[rgba(63,120,224,0.5)]{"   "}
                          placeholder:!text-[#959ca9] placeholder:opacity-100
                          m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)]
                          min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                          placeholder=""&gt;{"\n"}
                          {"                        "}&lt;label
                          for="textInputExample" className="!text-[#959ca9]
                          !mb-2 !inline-block text-[.75rem] !absolute !z-[2]
                          h-full overflow-hidden text-start text-ellipsis
                          whitespace-nowrap pointer-events-none border
                          origin-[0_0] px-4 py-[0.6rem] border-solid
                          border-transparent left-0 top-0 font-Manrope"&gt;Text
                          Input&lt;/label&gt;{"\n"}
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
          <section id="snippet-2" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Textarea</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="form-floating !relative">
                  <textarea
                    id="textareaExample"
                    className=" form-control  relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out     focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset]   focus-visible:!border-[rgba(63,120,224,0.5)]   placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                    placeholder=""
                    style={{ height: 150 }}
                    required
                    defaultValue={""}
                  />
                  <label
                    htmlFor="textareaExample"
                    className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                  >
                    Textarea
                  </label>
                </div>
                {/* /.relative */}
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
                          &lt;div className="form-floating !relative"&gt;{"\n"}
                          {"                        "}&lt;textarea
                          id="textareaExample" className=" form-control{"  "}
                          relative block w-full text-[.75rem] font-medium
                          !text-[#60697b] bg-[#fefefe] bg-clip-padding border
                          shadow-[0_0_1.25rem_rgba(30,34,40,0.04)]
                          rounded-[0.4rem] border-solid
                          border-[rgba(8,60,130,0.07)] transition-[border-color]
                          duration-[0.15s] ease-in-out
                          {"     "}
                          focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset]
                          {"   "}
                          focus-visible:!border-[rgba(63,120,224,0.5)]{"   "}
                          placeholder:!text-[#959ca9] placeholder:opacity-100
                          m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)]
                          min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                          placeholder="" style="height: 150px"
                          required&gt;&lt;/textarea&gt;{"\n"}
                          {"                        "}&lt;label
                          for="textareaExample" className="!text-[#959ca9] !mb-2
                          !inline-block text-[.75rem] !absolute !z-[2] h-full
                          overflow-hidden text-start text-ellipsis
                          whitespace-nowrap pointer-events-none border
                          origin-[0_0] px-4 py-[0.6rem] border-solid
                          border-transparent left-0 top-0
                          font-Manrope"&gt;Textarea&lt;/label&gt;{"\n"}
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
          <section id="snippet-3" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Checks</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="form-check block min-h-[1.36rem] !mb-0.5 !pl-[1.55rem]">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    {" "}
                    Default checkbox{" "}
                  </label>
                </div>
                <div className="form-check block min-h-[1.36rem] !mb-0.5 !pl-[1.55rem]">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckChecked"
                    defaultChecked=""
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    {" "}
                    Checked checkbox{" "}
                  </label>
                </div>
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
                          &lt;div className="form-check block min-h-[1.36rem]
                          !mb-0.5 !pl-[1.55rem]"&gt;{"\n"}
                          {"                        "}&lt;input
                          className="form-check-input" type="checkbox" value=""
                          id="flexCheckDefault"&gt;{"\n"}
                          {"                        "}&lt;label
                          className="form-check-label"
                          for="flexCheckDefault"&gt; Default checkbox
                          &lt;/label&gt;{"\n"}
                          {"                      "}&lt;/div&gt;{"\n"}
                          {"                      "}&lt;div
                          className="form-check block min-h-[1.36rem] !mb-0.5
                          !pl-[1.55rem]"&gt;{"\n"}
                          {"                        "}&lt;input
                          className="form-check-input" type="checkbox" value=""
                          id="flexCheckChecked" checked&gt;{"\n"}
                          {"                        "}&lt;label
                          className="form-check-label"
                          for="flexCheckChecked"&gt; Checked checkbox
                          &lt;/label&gt;{"\n"}
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
          <section id="snippet-4" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Radios</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="form-check block min-h-[1.36rem] !mb-0.5 !pl-[1.55rem]">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    {" "}
                    Default radio{" "}
                  </label>
                </div>
                <div className="form-check block min-h-[1.36rem] !mb-0.5 !pl-[1.55rem]">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    defaultChecked=""
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    {" "}
                    Default checked radio{" "}
                  </label>
                </div>
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
                          &lt;div className="form-check block min-h-[1.36rem]
                          !mb-0.5 !pl-[1.55rem]"&gt;{"\n"}
                          {"                        "}&lt;input
                          className="form-check-input" type="radio"
                          name="flexRadioDefault" id="flexRadioDefault1"&gt;
                          {"\n"}
                          {"                        "}&lt;label
                          className="form-check-label"
                          for="flexRadioDefault1"&gt; Default radio
                          &lt;/label&gt;{"\n"}
                          {"                      "}&lt;/div&gt;{"\n"}
                          {"                      "}&lt;div
                          className="form-check block min-h-[1.36rem] !mb-0.5
                          !pl-[1.55rem]"&gt;{"\n"}
                          {"                        "}&lt;input
                          className="form-check-input" type="radio"
                          name="flexRadioDefault" id="flexRadioDefault2"
                          checked&gt;
                          {"\n"}
                          {"                        "}&lt;label
                          className="form-check-label"
                          for="flexRadioDefault2"&gt; Default checked radio
                          &lt;/label&gt;{"\n"}
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
          <section id="snippet-5" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Disabled</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="form-check block min-h-[1.36rem] !mb-0.5 !pl-[1.55rem]">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDisabled"
                    disabled=""
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDisabled"
                  >
                    {" "}
                    Disabled checkbox{" "}
                  </label>
                </div>
                <div className="form-check block min-h-[1.36rem] !mb-0.5 !pl-[1.55rem]">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDisabled"
                    id="flexRadioDisabled"
                    disabled=""
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDisabled"
                  >
                    {" "}
                    Disabled radio{" "}
                  </label>
                </div>
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-5"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-5"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          {"\n"}
                          {"                      "}&lt;div
                          className="form-check block min-h-[1.36rem] !mb-0.5
                          !pl-[1.55rem]"&gt;{"\n"}
                          {"                        "}&lt;input
                          className="form-check-input" type="checkbox" value=""
                          id="flexCheckDisabled" disabled&gt;{"\n"}
                          {"                        "}&lt;label
                          className="form-check-label"
                          for="flexCheckDisabled"&gt; Disabled checkbox
                          &lt;/label&gt;{"\n"}
                          {"                      "}&lt;/div&gt;{"\n"}
                          {"                      "}&lt;div
                          className="form-check block min-h-[1.36rem] !mb-0.5
                          !pl-[1.55rem]"&gt;{"\n"}
                          {"                        "}&lt;input
                          className="form-check-input" type="radio"
                          name="flexRadioDisabled" id="flexRadioDisabled"
                          disabled&gt;
                          {"\n"}
                          {"                        "}&lt;label
                          className="form-check-label"
                          for="flexRadioDisabled"&gt; Disabled radio
                          &lt;/label&gt;{"\n"}
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
          <section id="snippet-6" className="wrapper py-24">
            <h2 className="!mb-5 !leading-[1.35]">Select</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="form-select-wrapper">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>Open this select menu</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-6"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-6"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          &lt;div className="form-select-wrapper !mb-4"&gt;
                          {"\n"}
                          {"  "}&lt;select className="form-select"
                          aria-label="Default select example"&gt;{"\n"}
                          {"    "}&lt;option selected&gt;Open this select
                          menu&lt;/option&gt;{"\n"}
                          {"    "}&lt;option value="1"&gt;One&lt;/option&gt;
                          {"\n"}
                          {"    "}&lt;option value="2"&gt;Two&lt;/option&gt;
                          {"\n"}
                          {"    "}&lt;option value="3"&gt;Three&lt;/option&gt;
                          {"\n"}
                          {"  "}&lt;/select&gt;{"\n"}&lt;/div&gt;
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
