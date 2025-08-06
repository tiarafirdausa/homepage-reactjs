import React from "react";
import DocsSidebar from "./DocsSidebar";
import CodeSnippetContainer from "../common/CodeSnippetContainer";

export default function Buttons() {
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
                    href="#colors"
                  >
                    Colors
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#gradients"
                  >
                    Gradients
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#sizes"
                  >
                    Sizes
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#shapes"
                  >
                    Shapes
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#style"
                  >
                    Style
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#circle"
                  >
                    Circle
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#social"
                  >
                    Social
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#icon"
                  >
                    Icon
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#expand"
                  >
                    Expand
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#play"
                  >
                    Play
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
          <section id="colors" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Colors</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <a
                  href="#"
                  className="btn btn-yellow !text-white !bg-[#fab758] border-[#fab758] hover:text-white hover:bg-[#fab758] hover:!border-[#fab758]   active:text-white active:bg-[#fab758] active:border-[#fab758] disabled:text-white disabled:bg-[#fab758] disabled:border-[#fab758] !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-orange !text-white !bg-[#f78b77] border-[#f78b77] hover:text-white hover:bg-[#f78b77] hover:!border-[#f78b77]   active:text-white active:bg-[#f78b77] active:border-[#f78b77] disabled:text-white disabled:bg-[#f78b77] disabled:border-[#f78b77] !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-red !text-white !bg-[#e2626b] border-[#e2626b] hover:text-white hover:bg-[#e2626b] hover:!border-[#e2626b]   active:text-white active:bg-[#e2626b] active:border-[#e2626b] disabled:text-white disabled:bg-[#e2626b] disabled:border-[#e2626b] !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-pink !text-white !bg-[#d16b86] border-[#d16b86] hover:text-white hover:bg-[#d16b86] hover:!border-[#d16b86]   active:text-white active:bg-[#d16b86] active:border-[#d16b86] disabled:text-white disabled:bg-[#d16b86] disabled:border-[#d16b86] !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-violet !text-white !bg-[#a07cc5] border-[#a07cc5] hover:text-white hover:bg-[#a07cc5] hover:!border-[#a07cc5]   active:text-white active:bg-[#a07cc5] active:border-[#a07cc5] disabled:text-white disabled:bg-[#a07cc5] disabled:border-[#a07cc5]  !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1]   active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-blue !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-aqua !text-white !bg-[#54a8c7] border-[#54a8c7] hover:text-white hover:bg-[#54a8c7] hover:!border-[#54a8c7] focus:shadow-[rgba(79,152,181,1)] focus:text-white active:text-white active:bg-[#54a8c7] active:border-[#54a8c7] disabled:text-white disabled:bg-[#54a8c7] disabled:border-[#54a8c7] !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-green !text-white !bg-[#45c4a0] border-[#45c4a0] hover:text-white hover:bg-[#45c4a0] hover:!border-[#45c4a0]   active:text-white active:bg-[#45c4a0] active:border-[#45c4a0] disabled:text-white disabled:bg-[#45c4a0] disabled:border-[#45c4a0]  !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-leaf !text-white !bg-[#7cb798] border-[#7cb798] hover:text-white hover:bg-[#7cb798] hover:!border-[#7cb798] focus:shadow-[rgba(113,165,142,1)] active:text-white active:bg-[#7cb798] active:border-[#7cb798] disabled:text-white disabled:bg-[#7cb798] disabled:border-[#7cb798] !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-fuchsia !text-white !bg-[#e668b3] border-[#e668b3] hover:text-white hover:bg-[#e668b3] hover:!border-[#e668b3]   active:text-white active:bg-[#e668b3] active:border-[#e668b3] disabled:text-white disabled:bg-[#e668b3] disabled:border-[#e668b3] !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-sky !text-white !bg-[#5eb9f0] border-[#5eb9f0] hover:text-white hover:!bg-[#5eb9f0] hover:!border-[#5eb9f0] focus:shadow-[rgba(88,167,216,1)] active:text-white active:!bg-[#5eb9f0] active:border-[#5eb9f0] disabled:text-white disabled:!bg-[#5eb9f0] disabled:border-[#5eb9f0] !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-grape !text-white !bg-[#605dba] border-[#605dba] hover:text-white hover:bg-[#605dba] hover:!border-[#605dba]   active:text-white active:bg-[#605dba] active:border-[#605dba] disabled:text-white disabled:bg-[#605dba] disabled:border-[#605dba] !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-navy !text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:!border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52] !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-ash !text-[#343f52] bg-[#9499a3] border-[#9499a3] hover:!text-[#343f52] hover:bg-[#9499a3] hover:!border-[#9499a3] focus:shadow-[rgba(134,140,151,1)] active:!text-[#343f52] active:bg-[#9499a3] active:border-[#9499a3] disabled:!text-[#343f52] disabled:bg-[#9499a3] disabled:border-[#9499a3] !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <br className="hidden xl:block lg:block" />
                <a
                  href="#"
                  className="btn btn-soft-yellow !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-soft-orange !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-soft-red !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-soft-pink !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-soft-violet !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-soft-purple !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-soft-blue !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-soft-aqua !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-soft-green !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-soft-leaf !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-soft-fuchsia !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-soft-sky !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-soft-grape !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-soft-dark !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-soft-ash !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-colors"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-colors"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          {"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-yellow !text-white !bg-[#fab758]
                          border-[#fab758] hover:text-white hover:bg-[#fab758]
                          hover:!border-[#fab758]
                          {"   "}active:text-white active:bg-[#fab758]
                          active:border-[#fab758] disabled:text-white
                          disabled:bg-[#fab758] disabled:border-[#fab758]
                          !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;
                          {"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-orange !text-white !bg-[#f78b77]
                          border-[#f78b77] hover:text-white hover:bg-[#f78b77]
                          hover:!border-[#f78b77]
                          {"   "}active:text-white active:bg-[#f78b77]
                          active:border-[#f78b77] disabled:text-white
                          disabled:bg-[#f78b77] disabled:border-[#f78b77]
                          !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;
                          {"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-red !text-white !bg-[#e2626b]
                          border-[#e2626b] hover:text-white hover:bg-[#e2626b]
                          hover:!border-[#e2626b]{"   "}
                          active:text-white active:bg-[#e2626b]
                          active:border-[#e2626b] disabled:text-white
                          disabled:bg-[#e2626b] disabled:border-[#e2626b]
                          !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;
                          {"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-pink !text-white !bg-[#d16b86]
                          border-[#d16b86] hover:text-white hover:bg-[#d16b86]
                          hover:!border-[#d16b86]{"   "}
                          active:text-white active:bg-[#d16b86]
                          active:border-[#d16b86] disabled:text-white
                          disabled:bg-[#d16b86] disabled:border-[#d16b86]
                          !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;
                          {"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-violet !text-white !bg-[#a07cc5]
                          border-[#a07cc5] hover:text-white hover:bg-[#a07cc5]
                          hover:!border-[#a07cc5]
                          {"   "}active:text-white active:bg-[#a07cc5]
                          active:border-[#a07cc5] disabled:text-white
                          disabled:bg-[#a07cc5] disabled:border-[#a07cc5]{"  "}
                          !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;
                          {"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-purple !text-white !bg-[#747ed1]
                          border-[#747ed1] hover:text-white hover:bg-[#747ed1]
                          hover:!border-[#747ed1]
                          {"   "}active:text-white active:bg-[#747ed1]
                          active:border-[#747ed1] disabled:text-white
                          disabled:bg-[#747ed1] disabled:border-[#747ed1]
                          !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;
                          {"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-blue !text-white !bg-[#3f78e0]
                          border-[#3f78e0] hover:text-white hover:bg-[#3f78e0]
                          hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0]
                          !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;
                          {"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-aqua !text-white !bg-[#54a8c7]
                          border-[#54a8c7] hover:text-white hover:bg-[#54a8c7]
                          hover:!border-[#54a8c7]
                          focus:shadow-[rgba(79,152,181,1)] focus:text-white
                          active:text-white active:bg-[#54a8c7]
                          active:border-[#54a8c7] disabled:text-white
                          disabled:bg-[#54a8c7] disabled:border-[#54a8c7]
                          !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;
                          {"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-green !text-white !bg-[#45c4a0]
                          border-[#45c4a0] hover:text-white hover:bg-[#45c4a0]
                          hover:!border-[#45c4a0]
                          {"   "}active:text-white active:bg-[#45c4a0]
                          active:border-[#45c4a0] disabled:text-white
                          disabled:bg-[#45c4a0] disabled:border-[#45c4a0]{"  "}
                          !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;
                          {"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-leaf !text-white !bg-[#7cb798]
                          border-[#7cb798] hover:text-white hover:bg-[#7cb798]
                          hover:!border-[#7cb798]
                          focus:shadow-[rgba(113,165,142,1)] active:text-white
                          active:bg-[#7cb798] active:border-[#7cb798]
                          disabled:text-white disabled:bg-[#7cb798]
                          disabled:border-[#7cb798] !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;{"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-fuchsia !text-white !bg-[#e668b3]
                          border-[#e668b3] hover:text-white hover:bg-[#e668b3]
                          hover:!border-[#e668b3]
                          {"   "}active:text-white active:bg-[#e668b3]
                          active:border-[#e668b3] disabled:text-white
                          disabled:bg-[#e668b3] disabled:border-[#e668b3]
                          !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;
                          {"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-sky !text-white !bg-[#5eb9f0]
                          border-[#5eb9f0] hover:text-white hover:!bg-[#5eb9f0]
                          hover:!border-[#5eb9f0]
                          focus:shadow-[rgba(88,167,216,1)] active:text-white
                          active:!bg-[#5eb9f0] active:border-[#5eb9f0]
                          disabled:text-white disabled:!bg-[#5eb9f0]
                          disabled:border-[#5eb9f0] !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;{"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-grape !text-white !bg-[#605dba]
                          border-[#605dba] hover:text-white hover:bg-[#605dba]
                          hover:!border-[#605dba]
                          {"   "}active:text-white active:bg-[#605dba]
                          active:border-[#605dba] disabled:text-white
                          disabled:bg-[#605dba] disabled:border-[#605dba]
                          !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;
                          {"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-navy !text-white !bg-[#343f52]
                          border-[#343f52] hover:text-white hover:bg-[#343f52]
                          hover:!border-[#343f52]
                          focus:shadow-[rgba(82,92,108,1)] active:text-white
                          active:bg-[#343f52] active:border-[#343f52]
                          disabled:text-white disabled:bg-[#343f52]
                          disabled:border-[#343f52] !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;
                          {"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-ash !text-[#343f52] bg-[#9499a3]
                          border-[#9499a3] hover:!text-[#343f52]
                          hover:bg-[#9499a3] hover:!border-[#9499a3]
                          focus:shadow-[rgba(134,140,151,1)]
                          active:!text-[#343f52] active:bg-[#9499a3]
                          active:border-[#9499a3] disabled:!text-[#343f52]
                          disabled:bg-[#9499a3] disabled:border-[#9499a3]
                          !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;
                          {"\n"}
                          {"                      "}&lt;br className="hidden
                          xl:block lg:block"&gt;{"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-soft-yellow !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;{"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-soft-orange !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;{"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-soft-red !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;{"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-soft-pink !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;{"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-soft-violet !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;{"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-soft-purple !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;{"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-soft-blue !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;{"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-soft-aqua !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;{"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-soft-green !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;{"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-soft-leaf !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;{"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-soft-fuchsia !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;{"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-soft-sky !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;{"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-soft-grape !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;{"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-soft-dark !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;{"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-soft-ash !rounded-[50rem] !mb-2
                          !mr-[.25rem]"&gt;Button&lt;/a&gt;
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
          {/* /section */}
          <section id="gradients" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Gradients</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <a
                  href="#"
                  className="btn btn-gradient gradient-1 !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-gradient gradient-2 !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-gradient gradient-3 !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-gradient gradient-4 !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-gradient gradient-5 !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-gradient gradient-6 !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="btn btn-gradient gradient-7 !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  Button
                </a>
                <br className="hidden xl:block lg:block" />
                <a
                  href="#"
                  className="btn btn-outline-gradient gradient-1 !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  <span>Button</span>
                </a>
                <a
                  href="#"
                  className="btn btn-outline-gradient gradient-2 !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  <span>Button</span>
                </a>
                <a
                  href="#"
                  className="btn btn-outline-gradient gradient-3 !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  <span>Button</span>
                </a>
                <a
                  href="#"
                  className="btn btn-outline-gradient gradient-4 !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  <span>Button</span>
                </a>
                <a
                  href="#"
                  className="btn btn-outline-gradient gradient-5 !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  <span>Button</span>
                </a>
                <a
                  href="#"
                  className="btn btn-outline-gradient gradient-6 !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  <span>Button</span>
                </a>
                <a
                  href="#"
                  className="btn btn-outline-gradient gradient-7 !rounded-[50rem] !mb-2 !mr-[.25rem]"
                >
                  <span>Button</span>
                </a>
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-gradients"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-gradients"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          &lt;a href="#" className="btn btn-gradient gradient-1
                          !rounded-[50rem]"&gt;Text&lt;/a&gt;{"\n"}&lt;a
                          href="#" className="btn btn-gradient gradient-2
                          !rounded-[50rem]"&gt;Text&lt;/a&gt;{"\n"}&lt;a
                          href="#" className="btn btn-gradient gradient-3
                          !rounded-[50rem]"&gt;Text&lt;/a&gt;{"\n"}&lt;a
                          href="#" className="btn btn-gradient gradient-4
                          !rounded-[50rem]"&gt;Text&lt;/a&gt;{"\n"}&lt;a
                          href="#" className="btn btn-gradient gradient-5
                          !rounded-[50rem]"&gt;Text&lt;/a&gt;{"\n"}&lt;a
                          href="#" className="btn btn-gradient gradient-6
                          !rounded-[50rem]"&gt;Text&lt;/a&gt;{"\n"}&lt;a
                          href="#" className="btn btn-gradient gradient-7
                          !rounded-[50rem]"&gt;Text&lt;/a&gt;{"\n"}
                          {"\t"}
                          {"\n"}&lt;a href="#" className="btn
                          btn-outline-gradient gradient-1
                          !rounded-[50rem]"&gt;&lt;span&gt;Text&lt;/span&gt;&lt;/a&gt;
                          {"\n"}&lt;a href="#" className="btn
                          btn-outline-gradient gradient-2
                          !rounded-[50rem]"&gt;&lt;span&gt;Text&lt;/span&gt;&lt;/a&gt;
                          {"\n"}&lt;a href="#" className="btn
                          btn-outline-gradient gradient-3
                          !rounded-[50rem]"&gt;&lt;span&gt;Text&lt;/span&gt;&lt;/a&gt;
                          {"\n"}&lt;a href="#" className="btn
                          btn-outline-gradient gradient-4
                          !rounded-[50rem]"&gt;&lt;span&gt;Text&lt;/span&gt;&lt;/a&gt;
                          {"\n"}&lt;a href="#" className="btn
                          btn-outline-gradient gradient-5
                          !rounded-[50rem]"&gt;&lt;span&gt;Text&lt;/span&gt;&lt;/a&gt;
                          {"\n"}&lt;a href="#" className="btn
                          btn-outline-gradient gradient-6
                          !rounded-[50rem]"&gt;&lt;span&gt;Text&lt;/span&gt;&lt;/a&gt;
                          {"\n"}&lt;a href="#" className="btn
                          btn-outline-gradient gradient-7
                          !rounded-[50rem]"&gt;&lt;span&gt;Text&lt;/span&gt;&lt;/a&gt;
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
          {/* /section */}
          <section id="sizes" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Sizes</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <a
                  href="#"
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-lg !rounded-[50rem] !mr-1 !mb-2 xl:!mb-0 lg:!mb-0 md:!mb-0"
                >
                  Large Button
                </a>
                <a
                  href="#"
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mr-1 !mb-2 xl:!mb-0 lg:!mb-0 md:!mb-0"
                >
                  Default Button
                </a>
                <a
                  href="#"
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-sm !rounded-[50rem] !mr-1 !mb-2 xl:!mb-0 lg:!mb-0 md:!mb-0"
                >
                  Small Button
                </a>
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-sizes"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-sizes"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          &lt;a href="#" className="btn btn-primary !text-white
                          !bg-[#3f78e0] border-[#3f78e0] hover:text-white
                          hover:bg-[#3f78e0] hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-lg
                          !rounded-[50rem]"&gt;Large Button&lt;/a&gt; {"\n"}
                          &lt;a href="#" className="btn btn-primary !text-white
                          !bg-[#3f78e0] border-[#3f78e0] hover:text-white
                          hover:bg-[#3f78e0] hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0]
                          !rounded-[50rem]"&gt;Default Button&lt;/a&gt; {"\n"}
                          &lt;a href="#" className="btn btn-primary !text-white
                          !bg-[#3f78e0] border-[#3f78e0] hover:text-white
                          hover:bg-[#3f78e0] hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-sm
                          !rounded-[50rem]"&gt;Small Button&lt;/a&gt;
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
          {/* /section */}
          <section id="shapes" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Shapes</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <a
                  href="#"
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-none !mr-1 !mb-2 xl:!mb-0 lg:!mb-0 md:!mb-0"
                >
                  Square
                </a>
                <a
                  href="#"
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !mr-1 !mb-2 xl:!mb-0 lg:!mb-0 md:!mb-0"
                >
                  Rounded
                </a>
                <a
                  href="#"
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[0.8rem] !mr-1 !mb-2 xl:!mb-0 lg:!mb-0 md:!mb-0"
                >
                  Rounder
                </a>
                <a
                  href="#"
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mr-1 !mb-2 xl:!mb-0 lg:!mb-0 md:!mb-0"
                >
                  Pill
                </a>
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-shapes"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-shapes"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          &lt;a href="#" className="btn btn-primary !text-white
                          !bg-[#3f78e0] border-[#3f78e0] hover:text-white
                          hover:bg-[#3f78e0] hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0]
                          !rounded-none"&gt;Square&lt;/a&gt;{"\n"}&lt;a href="#"
                          className="btn btn-primary"&gt;Rounded&lt;/a&gt;{"\n"}
                          &lt;a href="#" className="btn btn-primary !text-white
                          !bg-[#3f78e0] border-[#3f78e0] hover:text-white
                          hover:bg-[#3f78e0] hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0]
                          !rounded-[0.8rem]"&gt;Rounder&lt;/a&gt;{"\n"}&lt;a
                          href="#" className="btn btn-primary !text-white
                          !bg-[#3f78e0] border-[#3f78e0] hover:text-white
                          hover:bg-[#3f78e0] hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0]
                          !rounded-[50rem]"&gt;Pill&lt;/a&gt;
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
          {/* /section */}
          <section id="style" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Style</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <a
                  href="#"
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mr-1 !mb-2 xl:!mb-0 lg:!mb-0 md:!mb-0"
                >
                  Solid
                </a>
                <a
                  href="#"
                  className="btn btn-soft-primary !rounded-[50rem] !mr-1 !mb-2 xl:!mb-0 lg:!mb-0 md:!mb-0"
                >
                  Soft
                </a>
                <a
                  href="#"
                  className="btn btn-outline-primary !rounded-[50rem] !mr-1 !mb-2 xl:!mb-0 lg:!mb-0 md:!mb-0"
                >
                  Outline
                </a>
                <a
                  href="#"
                  className="btn btn-gradient gradient-1 !rounded-[50rem] !mr-1 !mb-2 xl:!mb-0 lg:!mb-0 md:!mb-0"
                >
                  Gradient
                </a>
                <a
                  href="#"
                  className="btn btn-outline-gradient gradient-1 !rounded-[50rem] !mr-1 !mb-2 xl:!mb-0 lg:!mb-0 md:!mb-0"
                >
                  <span>Outline Gradient</span>
                </a>
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-styles"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-styles"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          &lt;a href="#" className="btn btn-primary !text-white
                          !bg-[#3f78e0] border-[#3f78e0] hover:text-white
                          hover:bg-[#3f78e0] hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0]
                          !rounded-[50rem]"&gt;Solid&lt;/a&gt;{"\n"}&lt;a
                          href="#" className="btn btn-soft-primary
                          !rounded-[50rem]"&gt;Soft&lt;/a&gt;{"\n"}&lt;a
                          href="#" className="btn btn-outline-primary
                          !rounded-[50rem]"&gt;Outline&lt;/a&gt;{"\n"}&lt;a
                          href="#" className="btn btn-gradient gradient-1
                          !rounded-[50rem] !mr-1 !mb-2
                          md:!mb-0"&gt;Gradient&lt;/a&gt;{"\n"}&lt;a href="#"
                          className="btn btn-outline-gradient gradient-1
                          !rounded-[50rem] !mr-1 !mb-2
                          md:!mb-0"&gt;&lt;span&gt;Outline
                          Gradient&lt;/span&gt;&lt;/a&gt;
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
          {/* /section */}
          <section id="circle" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Circle</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <a
                  href="#"
                  className="btn btn-circle btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-lg xl:!text-[1.3rem] w-[3rem] h-[3rem] !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%] !mr-2 !mb-2"
                >
                  <i className="uil uil-check before:content-['\e9dd']" />
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] w-[2.2rem] h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%] !mr-2 !mb-2"
                >
                  <i className="uil uil-check before:content-['\e9dd']" />
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-sm w-[1.8rem] h-[1.8rem] !inline-flex !items-center !justify-center !text-[.8rem] !leading-none !p-0 !rounded-[100%] !mr-2 !mb-2"
                >
                  <i className="uil uil-check before:content-['\e9dd']" />
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-soft-primary btn-lg xl:!text-[1.3rem] w-[3rem] h-[3rem] !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%] !mr-2 !mb-2"
                >
                  <i className="uil uil-check before:content-['\e9dd']" />
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-soft-primary w-[2.2rem] h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%] !mr-2 !mb-2"
                >
                  <i className="uil uil-check before:content-['\e9dd']" />
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-soft-primary btn-sm w-[1.8rem] h-[1.8rem] !inline-flex !items-center !justify-center !text-[.8rem] !leading-none !p-0 !rounded-[100%] !mr-2 !mb-2"
                >
                  <i className="uil uil-check before:content-['\e9dd']" />
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-outline-primary btn-lg xl:!text-[1.3rem] w-[3rem] h-[3rem] !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%] !mr-2 !mb-2"
                >
                  <i className="uil uil-check before:content-['\e9dd']" />
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-outline-primary w-[2.2rem] h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%] !mr-2 !mb-2"
                >
                  <i className="uil uil-check before:content-['\e9dd']" />
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-outline-primary btn-sm w-[1.8rem] h-[1.8rem] !inline-flex !items-center !justify-center !text-[.8rem] !leading-none !p-0 !rounded-[100%] !mr-2 !mb-2"
                >
                  <i className="uil uil-check before:content-['\e9dd']" />
                </a>
                <br className="hidden xl:block lg:block" />
                <a
                  href="#"
                  className="btn btn-circle btn-gradient gradient-1 btn-lg xl:!text-[1.3rem] w-[3rem] h-[3rem] !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%] !mr-2 !mb-2"
                >
                  <i className="uil uil-check before:content-['\e9dd']" />
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-gradient gradient-1 w-[2.2rem] h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%] !mr-2 !mb-2"
                >
                  <i className="uil uil-check before:content-['\e9dd']" />
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-gradient gradient-1 btn-sm w-[1.8rem] h-[1.8rem] !inline-flex !items-center !justify-center !text-[.8rem] !leading-none !p-0 !rounded-[100%] !mr-2 !mb-2"
                >
                  <i className="uil uil-check before:content-['\e9dd']" />
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-outline-gradient gradient-1 btn-lg xl:!text-[1.3rem] w-[3rem] h-[3rem] !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%] !mr-2 !mb-2"
                >
                  <span>
                    <i className="uil uil-check before:content-['\e9dd']" />
                  </span>
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-outline-gradient gradient-1 w-[2.2rem] h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%] !mr-2 !mb-2"
                >
                  <span>
                    <i className="uil uil-check before:content-['\e9dd']" />
                  </span>
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-outline-gradient gradient-1 btn-sm w-[1.8rem] h-[1.8rem] !inline-flex !items-center !justify-center !text-[.8rem] !leading-none !p-0 !rounded-[100%] !mr-2 !mb-2"
                >
                  <span>
                    <i className="uil uil-check before:content-['\e9dd']" />
                  </span>
                </a>
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-circle"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-circle"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          &lt;a href="#" className="btn btn-circle btn-primary
                          !text-white !bg-[#3f78e0] border-[#3f78e0]
                          hover:text-white hover:bg-[#3f78e0]
                          hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0]
                          btn-lg"&gt;&lt;i className="uil
                          uil-check"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}&lt;a href="#"
                          className="btn btn-circle btn-primary"&gt;&lt;i
                          className="uil uil-check"&gt;&lt;/i&gt;&lt;/a&gt;
                          {"\n"}
                          &lt;a href="#" className="btn btn-circle btn-primary
                          !text-white !bg-[#3f78e0] border-[#3f78e0]
                          hover:text-white hover:bg-[#3f78e0]
                          hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0]
                          btn-sm"&gt;&lt;i className="uil
                          uil-check"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}
                          {"\n"}&lt;a href="#" className="btn btn-circle
                          btn-soft-primary btn-lg"&gt;&lt;i className="uil
                          uil-check"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}&lt;a href="#"
                          className="btn btn-circle btn-soft-primary"&gt;&lt;i
                          className="uil uil-check"&gt;&lt;/i&gt;&lt;/a&gt;
                          {"\n"}
                          &lt;a href="#" className="btn btn-circle
                          btn-soft-primary btn-sm"&gt;&lt;i className="uil
                          uil-check"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}
                          {"\n"}&lt;a href="#" className="btn btn-circle
                          btn-outline-primary btn-lg"&gt;&lt;i className="uil
                          uil-check"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}&lt;a href="#"
                          className="btn btn-circle
                          btn-outline-primary"&gt;&lt;i className="uil
                          uil-check"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}
                          &lt;a href="#" className="btn btn-circle
                          btn-outline-primary btn-sm"&gt;&lt;i className="uil
                          uil-check"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}
                          {"\n"}&lt;a href="#" className="btn btn-circle
                          btn-gradient gradient-1 btn-lg"&gt;&lt;i
                          className="uil uil-check"&gt;&lt;/i&gt;&lt;/a&gt;
                          {"\n"}&lt;a href="#" className="btn btn-circle
                          btn-gradient gradient-1"&gt;&lt;i className="uil
                          uil-check"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}&lt;a href="#"
                          className="btn btn-circle btn-gradient gradient-1
                          btn-sm"&gt;&lt;i className="uil
                          uil-check"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}
                          {"\n"}&lt;a href="#" className="btn btn-circle
                          btn-outline-gradient gradient-1
                          btn-lg"&gt;&lt;span&gt;&lt;i className="uil
                          uil-check"&gt;&lt;/i&gt;&lt;/span&gt;&lt;/a&gt;
                          {"\n"}&lt;a href="#" className="btn btn-circle
                          btn-outline-gradient gradient-1"&gt;&lt;span&gt;&lt;i
                          className="uil
                          uil-check"&gt;&lt;/i&gt;&lt;/span&gt;&lt;/a&gt;
                          {"\n"}&lt;a href="#" className="btn btn-circle
                          btn-outline-gradient gradient-1
                          btn-sm"&gt;&lt;span&gt;&lt;i className="uil
                          uil-check"&gt;&lt;/i&gt;&lt;/span&gt;&lt;/a&gt;
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
          {/* /section */}
          <section id="social" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Social</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="xl:!flex lg:!flex md:!flex">
                  <div className="mr-8 !mb-2 xl:!mb-0 lg:!mb-0 md:!mb-0">
                    <nav className="nav social">
                      <a
                        href="#"
                        className="btn btn-circle btn-sm btn-twitter w-[1.8rem] h-[1.8rem] !text-[0.8rem] !inline-flex !items-center !justify-center !leading-none !m-[0_.7rem_0_0] !p-0 !rounded-[100%] !text-white !bg-[#5daed5] !border-transparent"
                      >
                        <i className="uil uil-twitter before:content-['\ed59'] text-[.85rem]" />
                      </a>
                      <a
                        href="#"
                        className="btn btn-circle btn-sm btn-facebook w-[1.8rem] h-[1.8rem] !text-[0.8rem] !inline-flex !items-center !justify-center !leading-none !m-[0_.7rem_0_0] !p-0 !rounded-[100%] !text-white !bg-[#4470cf] !border-transparent"
                      >
                        <i className="uil uil-facebook-f before:content-['\eae2'] text-[.85rem]" />
                      </a>
                      <a
                        href="#"
                        className="btn btn-circle btn-sm btn-dribbble w-[1.8rem] h-[1.8rem] !text-[0.8rem] !inline-flex !items-center !justify-center !leading-none !m-[0_.7rem_0_0] !p-0 !rounded-[100%] !text-white !bg-[#e94d88] !border-transparent"
                      >
                        <i className="uil uil-dribbble before:content-['\eaa2'] text-[.85rem]" />
                      </a>
                    </nav>
                  </div>
                  <div className="mr-8">
                    <nav className="nav social social-muted">
                      <a
                        className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-twitter before:content-['\ed59'] text-[1rem] !text-[#5daed5]" />
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-facebook-f before:content-['\eae2'] text-[1rem] !text-[#4470cf]" />
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-dribbble before:content-['\eaa2'] text-[1rem] !text-[#e94d88]" />
                      </a>
                    </nav>
                  </div>
                  <div className="mr-8">
                    <nav className="nav social">
                      <a
                        className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-twitter before:content-['\ed59'] text-[1rem] !text-[#5daed5]" />
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-facebook-f before:content-['\eae2'] text-[1rem] !text-[#4470cf]" />
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-dribbble before:content-['\eaa2'] text-[1rem] !text-[#e94d88]" />
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-social"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-social"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          {"\n"}
                          {"                      "}&lt;nav className="nav
                          social"&gt;
                          {"\n"}
                          {"                        "}&lt;a href="#"
                          className="btn btn-circle btn-sm btn-twitter
                          w-[1.8rem] h-[1.8rem] !text-[0.8rem] !inline-flex
                          !items-center !justify-center !leading-none
                          !m-[0_.7rem_0_0] !p-0 !rounded-[100%] !text-white
                          !bg-[#5daed5] !border-transparent"&gt;&lt;i
                          className="uil uil-twitter before:content-['\ed59']
                          text-[.85rem]"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}
                          {"                        "}&lt;a href="#"
                          className="btn btn-circle btn-sm btn-facebook
                          w-[1.8rem] h-[1.8rem] !text-[0.8rem] !inline-flex
                          !items-center !justify-center !leading-none
                          !m-[0_.7rem_0_0] !p-0 !rounded-[100%] !text-white
                          !bg-[#4470cf] !border-transparent"&gt;&lt;i
                          className="uil uil-facebook-f before:content-['\eae2']
                          text-[.85rem]"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}
                          {"                        "}&lt;a href="#"
                          className="btn btn-circle btn-sm btn-dribbble
                          w-[1.8rem] h-[1.8rem] !text-[0.8rem] !inline-flex
                          !items-center !justify-center !leading-none
                          !m-[0_.7rem_0_0] !p-0 !rounded-[100%] !text-white
                          !bg-[#e94d88] !border-transparent"&gt;&lt;i
                          className="uil uil-dribbble before:content-['\eaa2']
                          text-[.85rem]"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}
                          {"                      "}&lt;/nav&gt;{"\n"}
                          {"                    "}&lt;/div&gt;{"\n"}
                          {"                    "}&lt;div className="mr-8"&gt;
                          {"\n"}
                          {"                      "}&lt;nav className="nav
                          social social-muted"&gt;{"\n"}
                          {"                        "}&lt;a
                          className="m-[0_.7rem_0_0] text-[1rem] transition-all
                          duration-[0.2s] ease-in-out translate-y-0
                          hover:translate-y-[-0.15rem]" href="#"&gt;&lt;i
                          className="uil uil-twitter before:content-['\ed59']
                          text-[1rem] !text-[#5daed5]"&gt;&lt;/i&gt;&lt;/a&gt;
                          {"\n"}
                          {"                        "}&lt;a
                          className="m-[0_.7rem_0_0] text-[1rem] transition-all
                          duration-[0.2s] ease-in-out translate-y-0
                          hover:translate-y-[-0.15rem]" href="#"&gt;&lt;i
                          className="uil uil-facebook-f before:content-['\eae2']
                          text-[1rem] !text-[#4470cf]"&gt;&lt;/i&gt;&lt;/a&gt;
                          {"\n"}
                          {"                        "}&lt;a
                          className="m-[0_.7rem_0_0] text-[1rem] transition-all
                          duration-[0.2s] ease-in-out translate-y-0
                          hover:translate-y-[-0.15rem]" href="#"&gt;&lt;i
                          className="uil uil-dribbble before:content-['\eaa2']
                          text-[1rem] !text-[#e94d88]"&gt;&lt;/i&gt;&lt;/a&gt;
                          {"\n"}
                          {"                      "}&lt;/nav&gt;{"\n"}
                          {"                    "}&lt;/div&gt;{"\n"}
                          {"                    "}&lt;div className="mr-8"&gt;
                          {"\n"}
                          {"                      "}&lt;nav className="nav
                          social"&gt;
                          {"\n"}
                          {"                        "}&lt;a
                          className="m-[0_.7rem_0_0] text-[1rem] transition-all
                          duration-[0.2s] ease-in-out translate-y-0
                          hover:translate-y-[-0.15rem]" href="#"&gt;&lt;i
                          className="uil uil-twitter before:content-['\ed59']
                          text-[1rem] !text-[#5daed5]"&gt;&lt;/i&gt;&lt;/a&gt;
                          {"\n"}
                          {"                        "}&lt;a
                          className="m-[0_.7rem_0_0] text-[1rem] transition-all
                          duration-[0.2s] ease-in-out translate-y-0
                          hover:translate-y-[-0.15rem]" href="#"&gt;&lt;i
                          className="uil uil-facebook-f before:content-['\eae2']
                          text-[1rem] !text-[#4470cf]"&gt;&lt;/i&gt;&lt;/a&gt;
                          {"\n"}
                          {"                        "}&lt;a
                          className="m-[0_.7rem_0_0] text-[1rem] transition-all
                          duration-[0.2s] ease-in-out translate-y-0
                          hover:translate-y-[-0.15rem]" href="#"&gt;&lt;i
                          className="uil uil-dribbble before:content-['\eaa2']
                          text-[1rem] !text-[#e94d88]"&gt;&lt;/i&gt;&lt;/a&gt;
                          {"\n"}
                          {"                      "}&lt;/nav&gt;
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
          {/* /section */}
          <section id="icon" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Icon</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <a className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-icon btn-icon-start rounded !mr-2">
                  <i className="uil uil-apple !mr-[.3rem] before:content-['\e938']" />{" "}
                  App Store
                </a>
                <a className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-icon btn-icon-end rounded">
                  Google Play{" "}
                  <i className="uil uil-google-play !mr-[.3rem] before:content-['\eb4f']" />
                </a>
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-icon"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-icon"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          &lt;a className="btn btn-primary !text-white
                          !bg-[#3f78e0] border-[#3f78e0] hover:text-white
                          hover:bg-[#3f78e0] hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0]
                          btn-icon btn-icon-start rounded"&gt;{"\n"} &lt;i
                          className="uil uil-apple"&gt;&lt;/i&gt; App Store
                          {"\n"}&lt;/a&gt;{"\n"}
                          {"\n"}&lt;a className="btn btn-primary !text-white
                          !bg-[#3f78e0] border-[#3f78e0] hover:text-white
                          hover:bg-[#3f78e0] hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0]
                          btn-icon btn-icon-end rounded"&gt;
                          {"\n"} Google Play &lt;i className="uil
                          uil-google-play"&gt;&lt;/i&gt;{"\n"}&lt;/a&gt;
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
          <section id="expand" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Expand</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <a
                  href="#"
                  className="btn btn-expand btn-primary !text-white bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mr-5 !mb-3 xl:!mb-0 lg:!mb-0"
                >
                  <i className="uil uil-arrow-right before:content-['\e94c']" />
                  <span>Learn More</span>
                </a>
                <br className="xl:!hidden lg:!hidden" />
                <a
                  href="#"
                  className="btn btn-expand btn-soft-primary !rounded-[50rem] !mr-5"
                >
                  <i className="uil uil-arrow-right before:content-['\e94c']" />
                  <span>Learn More</span>
                </a>
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-expand"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-expand"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          {"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-expand btn-primary !text-white
                          bg-[#3f78e0] border-[#3f78e0] hover:text-white
                          hover:bg-[#3f78e0] hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0]
                          !rounded-[50rem] !mr-5 !mb-3 xl:!mb-0
                          lg:!mb-0"&gt;&lt;i className="uil uil-arrow-right
                          before:content-['\e94c']"&gt;&lt;/i&gt;&lt;span&gt;Learn
                          More&lt;/span&gt;&lt;/a&gt;{"\n"}
                          {"                      "}&lt;br className="xl:!hidden
                          lg:!hidden"&gt;{"\n"}
                          {"                      "}&lt;a href="#"
                          className="btn btn-expand btn-soft-primary
                          !rounded-[50rem] !mr-5"&gt;&lt;i className="uil
                          uil-arrow-right
                          before:content-['\e94c']"&gt;&lt;/i&gt;&lt;span&gt;Learn
                          More&lt;/span&gt;&lt;/a&gt;
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
          <section id="play" className="wrapper py-24">
            <h2 className="!mb-5 !leading-[1.35]">Play</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <a
                  href="#"
                  className="btn btn-circle btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-play ripple !mr-5 xl:!text-[2.3rem] !text-[calc(1.355rem_+_1.26vw)] w-[3.5rem] h-[3.5rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%] !translate-y-0 !tracking-[-0.01rem] !relative before:content-[''] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0 before:bg-[#3f78e0] after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:content-[''] after:block after:absolute after:z-[-1] after:rounded-[50%] after:inset-0 after:bg-[#3f78e0] after:[animation-delay:.5s]"
                >
                  <i className="icn-caret-right" />
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-soft-primary btn-play ripple xl:!text-[2.3rem] w-[3.5rem] h-[3.5rem] !text-[calc(1.355rem_+_1.26vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%] !translate-y-0 !tracking-[-0.01rem] !relative before:content-[''] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0 before:bg-[#e0e9fa] after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:content-[''] after:block after:absolute after:z-[-1] after:rounded-[50%] after:inset-0 after:bg-[#e0e9fa] after:[animation-delay:.5s]"
                >
                  <i className="icn-caret-right" />
                </a>
              </div>
              {/*/.card-body */}
              <CodeSnippetContainer>
                <div className="card-footer !relative">
                  <a
                    className="collapse-link collapsed stretched-link"
                    data-bs-toggle="collapse"
                    href="#collapse-play"
                  >
                    View example's code
                  </a>
                </div>
                {/*/.card-footer */}
                <div
                  id="collapse-play"
                  className="card-footer  !bg-[#21262c] opacity-100  !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          &lt;a href="#" className="btn btn-circle btn-primary
                          !text-white !bg-[#3f78e0] border-[#3f78e0]
                          hover:text-white hover:bg-[#3f78e0]
                          hover:!border-[#3f78e0]{"   "}
                          active:text-white active:bg-[#3f78e0]
                          active:border-[#3f78e0] disabled:text-white
                          disabled:bg-[#3f78e0] disabled:border-[#3f78e0]
                          btn-play ripple !mr-5 xl:!text-[2.3rem]
                          !text-[calc(1.355rem_+_1.26vw)] w-[3.5rem] h-[3.5rem]
                          !inline-flex !items-center !justify-center
                          !leading-none !p-0 !rounded-[100%] !translate-y-0
                          !tracking-[-0.01rem] !relative before:content-['']
                          before:block before:absolute before:opacity-80
                          before:animate-[ripple-1_2s_infinite_ease-in-out]
                          before:z-[-1] before:rounded-[50%] before:inset-0
                          before:bg-[#3f78e0] after:opacity-60
                          after:animate-[ripple-2_2s_infinite_ease-in-out]
                          after:content-[''] after:block after:absolute
                          after:z-[-1] after:rounded-[50%] after:inset-0
                          after:bg-[#3f78e0]
                          after:[animation-delay:.5s]"&gt;&lt;i
                          className="icn-caret-right"&gt;&lt;/i&gt;&lt;/a&gt;
                          {"\n"}
                          {"                    "}&lt;a href="#" className="btn
                          btn-circle btn-soft-primary btn-play ripple
                          xl:!text-[2.3rem] w-[3.5rem] h-[3.5rem]
                          !text-[calc(1.355rem_+_1.26vw)] !inline-flex
                          !items-center !justify-center !leading-none !p-0
                          !rounded-[100%] !translate-y-0 !tracking-[-0.01rem]
                          !relative before:content-[''] before:block
                          before:absolute before:opacity-80
                          before:animate-[ripple-1_2s_infinite_ease-in-out]
                          before:z-[-1] before:rounded-[50%] before:inset-0
                          before:bg-[#e0e9fa] after:opacity-60
                          after:animate-[ripple-2_2s_infinite_ease-in-out]
                          after:content-[''] after:block after:absolute
                          after:z-[-1] after:rounded-[50%] after:inset-0
                          after:bg-[#e0e9fa]
                          after:[animation-delay:.5s]"&gt;&lt;i
                          className="icn-caret-right"&gt;&lt;/i&gt;&lt;/a&gt;
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
