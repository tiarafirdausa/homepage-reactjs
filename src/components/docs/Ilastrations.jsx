import React from "react";
import DocsSidebar from "./DocsSidebar";

export default function Ilastrations() {
  return (
    <div className="container">
      <div className="flex flex-wrap mx-[-15px]">
        <aside className="xl:w-2/12 flex-[0_0_auto] !px-[15px] max-w-full sidebar doc-sidebar md:!mt-0 py-24 hidden xl:block">
          <DocsSidebar />
        </aside>
        {/* /column */}
        <aside className="xl:w-2/12 flex-[0_0_auto] !px-[15px] max-w-full xl:!order-3 sidebar !sticky h-full top-0 md:!mt-0 py-24 hidden xl:block">
          <div className="widget">
            <h6 className="widget-title text-[0.85rem] !mb-2 xl:!pl-5">
              On this page
            </h6>
            <nav className="xl:!pl-5" id="sidebar-nav">
              <ul className="list-unstyled !pl-0 list-none text-[0.7rem] leading-normal text-inherit">
                <li>
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] active"
                    href="#snippet-1"
                  >
                    Set 1
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]"
                    href="#snippet-2"
                  >
                    Set 2
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]"
                    href="#snippet-3"
                  >
                    Set 3
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]"
                    href="#snippet-4"
                  >
                    Set 4
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]"
                    href="#snippet-5"
                  >
                    Set 5
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]"
                    href="#snippet-6"
                  >
                    Set 6
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]"
                    href="#snippet-7"
                  >
                    Set 7
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
            <h2 className="!mb-5 !leading-[1.35]">Set 1</h2>
            <ul className="p-0 glyphs-svg flex flex-wrap mx-[-15px] !mt-[-30px]">
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i1@2x.png 2x"
                        alt="image"
                        width="800"
                        height="568"
                        src="/assets/img/illustrations/i1.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/free-vector/growing-up-landing-page-design_4238115.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i1@2x.png 2x" alt=""  width="800" height="568"    src="/assets/img/illustrations/i1.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i2@2x.png 2x"
                        alt="image"
                        width="800"
                        height="538"
                        src="/assets/img/illustrations/i2.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/free-vector/startup-landing-page_4237363.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i2@2x.png 2x" alt=""  width="800" height="538"    src="/assets/img/illustrations/i2.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i3@2x.png 2x"
                        alt="image"
                        width="800"
                        height="573"
                        src="/assets/img/illustrations/i3.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/free-vector/teamwork-landing-page_4238239.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i3@2x.png 2x" alt=""  width="800" height="573"    src="/assets/img/illustrations/i3.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i4@2x.png 2x"
                        alt="image"
                        width="800"
                        height="533"
                        src="/assets/img/illustrations/i4.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/free-vector/about-us-landing-page-design_4238455.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i4@2x.png 2x" alt=""  width="800" height="533"    src="/assets/img/illustrations/i4.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i5@2x.png 2x"
                        alt="image"
                        width="800"
                        height="590"
                        src="/assets/img/illustrations/i5.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/free-vector/data-protection-landing-page-design_4237696.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i5@2x.png 2x" alt=""  width="800" height="590"    src="/assets/img/illustrations/i5.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i6@2x.png 2x"
                        alt="image"
                        width="800"
                        height="499"
                        src="/assets/img/illustrations/i6.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/free-vector/digital-marketing-landing-page-web-design_4237912.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i6@2x.png 2x" alt=""  width="800" height="499"    src="/assets/img/illustrations/i6.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i7@2x.png 2x"
                        alt="image"
                        width="800"
                        height="621"
                        src="/assets/img/illustrations/i7.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/free-vector/online-shopping-landing-page_4237971.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i7@2x.png 2x" alt=""  width="800" height="621"    src="/assets/img/illustrations/i7.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i8@2x.png 2x"
                        alt="image"
                        width="800"
                        height="559"
                        src="/assets/img/illustrations/i8.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/free-vector/seo-optimization-landing-page-design_4237777.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i8@2x.png 2x" alt=""  width="800" height="559"    src="/assets/img/illustrations/i8.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <section id="snippet-2" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Set 2</h2>
            <ul className="p-0 glyphs-svg flex flex-wrap mx-[-15px] !mt-[-30px]">
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i9@2x.png 2x"
                        alt="image"
                        width="800"
                        height="556"
                        src="/assets/img/illustrations/i9.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/free-vector/app-development-landing-page_3103245.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i9@2x.png 2x" alt=""  width="800" height="556"    src="/assets/img/illustrations/i9.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i10@2x.png 2x"
                        alt="image"
                        width="800"
                        height="535"
                        src="/assets/img/illustrations/i10.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/free-vector/web-design-landing-page_3103246.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i10@2x.png 2x" alt=""  width="800" height="535"    src="/assets/img/illustrations/i10.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i11@2x.png 2x"
                        alt="image"
                        width="800"
                        height="580"
                        src="/assets/img/illustrations/i11.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/free-vector/data-analysis-landing-page_3103247.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i11@2x.png 2x" alt=""  width="800" height="580"    src="/assets/img/illustrations/i11.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i12@2x.png 2x"
                        alt="image"
                        width="800"
                        height="573"
                        src="/assets/img/illustrations/i12.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/free-vector/teamwork-design-landing-page_3103248.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i12@2x.png 2x" alt=""  width="800" height="573"    src="/assets/img/illustrations/i12.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i13@2x.png 2x"
                        alt="image"
                        width="800"
                        height="590"
                        src="/assets/img/illustrations/i13.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/free-vector/time-management-landing-page_3103250.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i13@2x.png 2x" alt=""  width="800" height="590"    src="/assets/img/illustrations/i13.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i14@2x.png 2x"
                        alt="image"
                        width="800"
                        height="584"
                        src="/assets/img/illustrations/i14.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/free-vector/workspace-design-landing-page_3103252.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i14@2x.png 2x" alt=""  width="800" height="584"    src="/assets/img/illustrations/i14.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i15@2x.png 2x"
                        alt="image"
                        width="800"
                        height="590"
                        src="/assets/img/illustrations/i15.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/free-vector/online-shopping-landing-page_3103253.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i15@2x.png 2x" alt=""  width="800" height="590"    src="/assets/img/illustrations/i15.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i16@2x.png 2x"
                        alt="image"
                        width="800"
                        height="527"
                        src="/assets/img/illustrations/i16.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/free-vector/responsive-design-landing-page_3103254.htm#page=56&query=landing+page&position=41"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i16@2x.png 2x" alt=""  width="800" height="527"    src="/assets/img/illustrations/i16.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i17@2x.png 2x"
                        alt="image"
                        width="800"
                        height="531"
                        src="/assets/img/illustrations/i17.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/free-vector/creative-process-landing-page_4405718.htm#page=9&query=landing+page&position=37"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i17@2x.png 2x" alt=""  width="800" height="531"    src="/assets/img/illustrations/i17.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <section id="snippet-3" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Set 3</h2>
            <ul className="p-0 glyphs-svg flex flex-wrap mx-[-15px] !mt-[-30px]">
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i18@2x.png 2x"
                        alt="image"
                        width="800"
                        height="481"
                        src="/assets/img/illustrations/i18.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/premium-vector/3d-printing-technology-web-banner-landing-page-set_12447938.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i18@2x.png 2x" alt=""  width="800" height="481"    src="/assets/img/illustrations/i18.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i19@2x.png 2x"
                        alt="image"
                        width="800"
                        height="545"
                        src="/assets/img/illustrations/i19.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/premium-vector/advert-designer-illustrator-web-banner-landing-page_12447940.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i19@2x.png 2x" alt=""  width="800" height="545"    src="/assets/img/illustrations/i19.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i20@2x.png 2x"
                        alt="image"
                        width="800"
                        height="568"
                        src="/assets/img/illustrations/i20.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/premium-vector/cyber-web-security-specialist-web-banner-landing-page-set_12447948.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i20@2x.png 2x" alt=""  width="800" height="568"    src="/assets/img/illustrations/i20.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i21@2x.png 2x"
                        alt="image"
                        width="800"
                        height="559"
                        src="/assets/img/illustrations/i21.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/premium-vector/graphic-designer-digital-illustrator-web-banner-landing-page-set_12447958.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i21@2x.png 2x" alt=""  width="800" height="559"    src="/assets/img/illustrations/i21.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i22@2x.png 2x"
                        alt="image"
                        width="800"
                        height="610"
                        src="/assets/img/illustrations/i22.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/premium-vector/graphic-designer-digital-illustrator-web-banner-landing-page-set_12447958.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i22@2x.png 2x" alt=""  width="800" height="610"    src="/assets/img/illustrations/i22.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i23@2x.png 2x"
                        alt="image"
                        width="800"
                        height="574"
                        src="/assets/img/illustrations/i23.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/premium-vector/system-administrator-web-banner-landing-page-set_12447983.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i23@2x.png 2x" alt=""  width="800" height="574"    src="/assets/img/illustrations/i23.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i24@2x.png 2x"
                        alt="image"
                        width="800"
                        height="535"
                        src="/assets/img/illustrations/i24.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/premium-vector/web-design-web-layout-landing-page-set-presenting-content-web-pages-website-layout-composition-color-development-idea-computer-technology_13137171.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i24@2x.png 2x" alt=""  width="800" height="535"    src="/assets/img/illustrations/i24.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i25@2x.png 2x"
                        alt="image"
                        width="800"
                        height="609"
                        src="/assets/img/illustrations/i25.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/premium-vector/web-programming-web-layout-landing-page-set-coding-testing-writing-program-website-using-internet-different-software-website-development_13137173.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i25@2x.png 2x" alt=""  width="800" height="609"    src="/assets/img/illustrations/i25.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i26@2x.png 2x"
                        alt="image"
                        width="800"
                        height="658"
                        src="/assets/img/illustrations/i26.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/premium-vector/mobile-app-development-web-layout-landing-page-set-modern-technology-smartphone-interface-design-application-building-programming_13137153.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i26@2x.png 2x" alt=""  width="800" height="658"    src="/assets/img/illustrations/i26.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i27@2x.png 2x"
                        alt="image"
                        width="800"
                        height="609"
                        src="/assets/img/illustrations/i27.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/premium-vector/director-web-banner-landing-page_12447955.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i27@2x.png 2x" alt=""  width="800" height="609"    src="/assets/img/illustrations/i27.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <section id="snippet-4" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Set 4</h2>
            <ul className="p-0 glyphs-svg flex flex-wrap mx-[-15px] !mt-[-30px]">
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/ui1@2x.png 2x"
                        alt="image"
                        width="800"
                        height="608"
                        src="/assets/img/illustrations/ui1.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/free-vector/mobile-phone-interface-3d-concepts-landing-page_6721408.htm#page=1&query=Seo%20company&position=36&from_view=keyword"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/ui1@2x.png 2x" alt=""  width="800" height="608"    src="/assets/img/illustrations/ui1.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/ui2@2x.png 2x"
                        alt="image"
                        width="800"
                        height="647"
                        src="/assets/img/illustrations/ui2.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/free-vector/digital-screens-plants-3d-concepts-landing-page_6721403.htm#page=1&query=3d&position=9&from_view=search"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/ui2@2x.png 2x" alt=""  width="800" height="647"    src="/assets/img/illustrations/ui2.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/ui3@2x.png 2x"
                        alt="image"
                        width="800"
                        height="439"
                        src="/assets/img/illustrations/ui3.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/free-vector/online-purchases-from-homr-3d-concepts-landing-page_6721402.htm#page=1&query=3d&position=48&from_view=search"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/ui3@2x.png 2x" alt=""  width="800" height="439"    src="/assets/img/illustrations/ui3.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/ui4@2x.png 2x"
                        alt="image"
                        width="800"
                        height="477"
                        src="/assets/img/illustrations/ui4.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/free-vector/social-online-interaction-3d-concepts-landing-page_6721405.htm#page=1&position=9&from_view=user"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/ui4@2x.png 2x" alt=""  width="800" height="477"    src="/assets/img/illustrations/ui4.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/ui5@2x.png 2x"
                        alt="image"
                        width="800"
                        height="516"
                        src="/assets/img/illustrations/ui5.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/premium-vector/landing-page-template-with-easy-shipping_12392824.htm#page=1&position=21&from_view=user"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/ui5@2x.png 2x" alt=""  width="800" height="516"    src="/assets/img/illustrations/ui5.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <section id="snippet-5" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Set 5</h2>
            <ul className="p-0 glyphs-svg flex flex-wrap mx-[-15px] !mt-[-30px]">
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/3d1@2x.png 2x"
                        alt="image"
                        width="800"
                        height="934"
                        src="/assets/img/illustrations/3d1.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/premium-psd/3-email-campaign-with-mobile-phone_15751106.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/3d1@2x.png 2x" alt=""  width="800" height="934"    src="/assets/img/illustrations/3d1.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/3d2@2x.png 2x"
                        alt="image"
                        width="800"
                        height="925"
                        src="/assets/img/illustrations/3d2.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/premium-psd/great-idea-3d-illustration-concept_14514386.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/3d2@2x.png 2x" alt=""  width="800" height="925"    src="/assets/img/illustrations/3d2.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/3d3@2x.png 2x"
                        alt="image"
                        width="800"
                        height="615"
                        src="/assets/img/illustrations/3d3.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/premium-psd/3d-email-campaign-with-laptop_15751105.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/3d3@2x.png 2x" alt=""  width="800" height="615"    src="/assets/img/illustrations/3d3.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/3d4@2x.png 2x"
                        alt="image"
                        width="800"
                        height="654"
                        src="/assets/img/illustrations/3d4.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/premium-psd/3d-illustration-concept-man-looking-ideas_14514382.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/3d4@2x.png 2x" alt=""  width="800" height="654"    src="/assets/img/illustrations/3d4.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/3d5@2x.png 2x"
                        alt="image"
                        width="800"
                        height="924"
                        src="/assets/img/illustrations/3d5.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/premium-psd/3d-new-employee-interview-with-applicants-identity_16069636.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/3d5@2x.png 2x" alt=""  width="800" height="924"    src="/assets/img/illustrations/3d5.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/3d6@2x.png 2x"
                        alt="image"
                        width="800"
                        height="817"
                        src="/assets/img/illustrations/3d6.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/premium-psd/3d-online-connection-with-male-character_15751113.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/3d6@2x.png 2x" alt=""  width="800" height="817"    src="/assets/img/illustrations/3d6.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/3d7@2x.png 2x"
                        alt="image"
                        width="800"
                        height="752"
                        src="/assets/img/illustrations/3d7.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/premium-psd/3d-online-shopping-illustration_16523091.htm#page=1&query=online%20shopping%20illustration&position=7&from_view=search"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/3d7@2x.png 2x" alt=""  width="800" height="752"    src="/assets/img/illustrations/3d7.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/3d8@2x.png 2x"
                        alt="image"
                        width="800"
                        height="685"
                        src="/assets/img/illustrations/3d8.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/premium-psd/3d-working-time-with-male-female-characters_16644661.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/3d8@2x.png 2x" alt=""  width="800" height="685"    src="/assets/img/illustrations/3d8.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/3d9@2x.png 2x"
                        alt="image"
                        width="800"
                        height="1116"
                        src="/assets/img/illustrations/3d9.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/premium-psd/3d-startup-life-with-man-standing-rocket_16644633.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/3d9@2x.png 2x" alt=""  width="800" height="1116"    src="/assets/img/illustrations/3d9.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/3d10@2x.png 2x"
                        alt="image"
                        width="800"
                        height="955"
                        src="/assets/img/illustrations/3d10.png"
                      />
                    </figure>
                    <a
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                      href="https://www.freepik.com/premium-psd/3d-hosting-with-male-character-using-laptop_16428910.htm#page=1&position=21&from_view=detail#&position=21&from_view=detail"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/3d10@2x.png 2x" alt=""  width="800" height="955"    src="/assets/img/illustrations/3d10.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/3d11@2x.png 2x"
                        alt="image"
                        width="800"
                        height="1080"
                        src="/assets/img/illustrations/3d11.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/premium-psd/3d-startup-life-with-man-holding-notes_16644607.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/3d11@2x.png 2x" alt=""  width="800" height="1080"    src="/assets/img/illustrations/3d11.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/3d12@2x.png 2x"
                        alt="image"
                        width="800"
                        height="1148"
                        src="/assets/img/illustrations/3d12.png"
                      />
                    </figure>
                    <a
                      href="https://www.freepik.com/premium-psd/3d-think-illustration_14902775.htm"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/3d12@2x.png 2x" alt=""  width="800" height="1148"    src="/assets/img/illustrations/3d12.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <section id="snippet-6" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Set 6</h2>
            <ul className="p-0 glyphs-svg flex flex-wrap mx-[-15px] !mt-[-30px]">
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i28@2x.png 2x"
                        alt="image"
                        width="960"
                        height="630"
                        src="/assets/img/illustrations/i28.png"
                      />
                    </figure>
                    <a
                      href="https://iconpark.oceanengine.com/illustrations/9"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i28@2x.png 2x" alt=""  width="960" height="630"    src="/assets/img/illustrations/i28.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i29@2x.png 2x"
                        alt="image"
                        width="800"
                        height="472"
                        src="/assets/img/illustrations/i29.png"
                      />
                    </figure>
                    <a
                      href="https://iconpark.oceanengine.com/illustrations/9"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i29@2x.png 2x" alt=""  width="800" height="472"    src="/assets/img/illustrations/i29.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i30@2x.png 2x"
                        alt="image"
                        width="800"
                        height="479"
                        src="/assets/img/illustrations/i30.png"
                      />
                    </figure>
                    <a
                      href="https://iconpark.oceanengine.com/illustrations/9"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i30@2x.png 2x" alt=""  width="800" height="479"    src="/assets/img/illustrations/i30.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i31@2x.png 2x"
                        alt="image"
                        width="800"
                        height="512"
                        src="/assets/img/illustrations/i31.png"
                      />
                    </figure>
                    <a
                      href="https://iconpark.oceanengine.com/illustrations/9"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i31@2x.png 2x" alt=""  width="800" height="512"    src="/assets/img/illustrations/i31.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        srcSet="/assets/img/illustrations/i32@2x.png 2x"
                        alt="image"
                        width="960"
                        height="635"
                        src="/assets/img/illustrations/i32.png"
                      />
                    </figure>
                    <a
                      href="https://iconpark.oceanengine.com/illustrations/9"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  srcset="/assets/img/illustrations/i32@2x.png 2x" alt=""  width="960" height="635"    src="/assets/img/illustrations/i32.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <section id="snippet-7" className="wrapper py-24">
            <h2 className="!mb-5 !leading-[1.35]">Set 7</h2>
            <ul className="p-0 glyphs-svg flex flex-wrap mx-[-15px] !mt-[-30px]">
              <li className="w-6/12 xl:w-4/12 lg:w-4/12 md:w-4/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 pb-6 flex flex-col justify-end items-center">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        alt="image"
                        width="438"
                        height="327"
                        src="/assets/img/illustrations/ni1.png"
                      />
                    </figure>
                    <a
                      href="https://www.figma.com/community/file/1000311109311441524"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  alt=""  width="438" height="327"    src="/assets/img/illustrations/ni1.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 xl:w-4/12 lg:w-4/12 md:w-4/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        alt="image"
                        width="428"
                        height="382"
                        src="/assets/img/illustrations/ni2.png"
                      />
                    </figure>
                    <a
                      href="https://www.figma.com/community/file/1000311109311441524"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  alt=""  width="428" height="382"    src="/assets/img/illustrations/ni2.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 xl:w-4/12 lg:w-4/12 md:w-4/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        alt="image"
                        width="446"
                        height="428"
                        src="/assets/img/illustrations/ni3.png"
                      />
                    </figure>
                    <a
                      href="https://www.figma.com/community/file/1000311109311441524"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  alt=""  width="446" height="428"    src="/assets/img/illustrations/ni3.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 xl:w-4/12 lg:w-4/12 md:w-4/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        alt="image"
                        width="468"
                        height="390"
                        src="/assets/img/illustrations/ni4.png"
                      />
                    </figure>
                    <a
                      href="https://www.figma.com/community/file/1000311109311441524"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  alt=""  width="468" height="390"    src="/assets/img/illustrations/ni4.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 xl:w-4/12 lg:w-4/12 md:w-4/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        alt="image"
                        width="435"
                        height="403"
                        src="/assets/img/illustrations/ni5.png"
                      />
                    </figure>
                    <a
                      href="https://www.figma.com/community/file/1000311109311441524"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  alt=""  width="435" height="403"    src="/assets/img/illustrations/ni5.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 xl:w-4/12 lg:w-4/12 md:w-4/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        alt="image"
                        width="417"
                        height="393"
                        src="/assets/img/illustrations/ni6.png"
                      />
                    </figure>
                    <a
                      href="https://www.figma.com/community/file/1000311109311441524"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  alt=""  width="417" height="393"    src="/assets/img/illustrations/ni6.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 xl:w-4/12 lg:w-4/12 md:w-4/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        alt="image"
                        width="471"
                        height="356"
                        src="/assets/img/illustrations/ni7.png"
                      />
                    </figure>
                    <a
                      href="https://www.figma.com/community/file/1000311109311441524"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  alt=""  width="471" height="356"    src="/assets/img/illustrations/ni7.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 xl:w-4/12 lg:w-4/12 md:w-4/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        alt="image"
                        width="443"
                        height="400"
                        src="/assets/img/illustrations/ni8.png"
                      />
                    </figure>
                    <a
                      href="https://www.figma.com/community/file/1000311109311441524"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  alt=""  width="443" height="400"    src="/assets/img/illustrations/ni8.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 xl:w-4/12 lg:w-4/12 md:w-4/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card !h-full">
                  <div className="card-body !p-10 !pb-6">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto"
                        alt="image"
                        width="410"
                        height="321"
                        src="/assets/img/illustrations/ni9.png"
                      />
                    </figure>
                    <a
                      href="https://www.figma.com/community/file/1000311109311441524"
                      className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom hover:!text-[#3f78e0] hover:after:!text-[#3f78e0] !mt-6"
                      target="_blank"
                    >
                      Resource
                    </a>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<img className="max-w-full h-auto"  alt=""  width="410" height="321"    src="/assets/img/illustrations/ni9.png" />'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
    </div>
  );
}
