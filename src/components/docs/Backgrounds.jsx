import React from "react";
import DocsSidebar from "./DocsSidebar";

export default function Backgrounds() {
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
                    Abstract
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-2"
                  >
                    Gradient
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
            <h2 className="!mb-5 !leading-[1.35]">Abstract</h2>
            <ul className="p-0 glyphs-svg flex flex-wrap mx-[-15px] !mt-[-30px]">
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card">
                  <div className="card-body p-0 rounded-t-[0.4rem]">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto rounded-t-[0.4rem]"
                        alt="image"
                        width="3000"
                        height="2000"
                        src="/assets/img/photos/bg2.jpg"
                      />
                    </figure>
                    <span className="block !text-[#aab0bc] text-[0.7rem] m-0 py-[0.75rem]">
                      bg2.jpg
                    </span>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<section className="wrapper image-wrapper bg-image bg-overlay !text-white" data-image-src="/assets/img/photos/bg2.jpg"></section>'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card">
                  <div className="card-body p-0 rounded-t-[0.4rem]">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto rounded-t-[0.4rem]"
                        alt="image"
                        width="3000"
                        height="2000"
                        src="/assets/img/photos/bg3.jpg"
                      />
                    </figure>
                    <span className="block !text-[#aab0bc] text-[0.7rem] m-0 py-[0.75rem]">
                      bg3.jpg
                    </span>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<section className="wrapper image-wrapper bg-image bg-overlay !text-white" data-image-src="/assets/img/photos/bg3.jpg"></section>'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card">
                  <div className="card-body p-0 rounded-t-[0.4rem]">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto rounded-t-[0.4rem]"
                        alt="image"
                        width="3000"
                        height="2000"
                        src="/assets/img/photos/bg4.jpg"
                      />
                    </figure>
                    <span className="block !text-[#aab0bc] text-[0.7rem] m-0 py-[0.75rem]">
                      bg4.jpg
                    </span>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<section className="wrapper image-wrapper bg-image bg-overlay !text-white" data-image-src="/assets/img/photos/bg4.jpg"></section>'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card">
                  <div className="card-body p-0 rounded-t-[0.4rem]">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto rounded-t-[0.4rem]"
                        alt="image"
                        width="3000"
                        height="2000"
                        src="/assets/img/photos/bg13.jpg"
                      />
                    </figure>
                    <span className="block !text-[#aab0bc] text-[0.7rem] m-0 py-[0.75rem]">
                      bg13.jpg
                    </span>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<section className="wrapper image-wrapper bg-image bg-overlay !text-white" data-image-src="/assets/img/photos/bg13.jpg"></section>'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <section id="snippet-2" className="wrapper py-24">
            <h2 className="!mb-5 !leading-[1.35]">Gradient</h2>
            <ul className="p-0 glyphs-svg flex flex-wrap mx-[-15px] !mt-[-30px]">
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card">
                  <div className="card-body p-0 rounded-t-[0.4rem]">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto rounded-t-[0.4rem]"
                        alt="image"
                        width="3000"
                        height="2000"
                        src="/assets/img/photos/bg14.png"
                      />
                    </figure>
                    <span className="block !text-[#aab0bc] text-[0.7rem] m-0 py-[0.75rem]">
                      bg14.png
                    </span>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<section className="wrapper image-wrapper bg-image bg-overlay !text-white" data-image-src="/assets/img/photos/bg14.png"></section>'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card">
                  <div className="card-body p-0 rounded-t-[0.4rem]">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto rounded-t-[0.4rem]"
                        alt="image"
                        width="3000"
                        height="2000"
                        src="/assets/img/photos/bg15.png"
                      />
                    </figure>
                    <span className="block !text-[#aab0bc] text-[0.7rem] m-0 py-[0.75rem]">
                      bg15.png
                    </span>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<section className="wrapper image-wrapper bg-image bg-overlay !text-white" data-image-src="/assets/img/photos/bg15.png"></section>'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card">
                  <div className="card-body p-0 rounded-t-[0.4rem]">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto rounded-t-[0.4rem]"
                        alt="image"
                        width="3000"
                        height="2000"
                        src="/assets/img/photos/bg16.png"
                      />
                    </figure>
                    <span className="block !text-[#aab0bc] text-[0.7rem] m-0 py-[0.75rem]">
                      bg16.png
                    </span>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<section className="wrapper image-wrapper bg-image bg-overlay !text-white" data-image-src="/assets/img/photos/bg16.png"></section>'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card">
                  <div className="card-body p-0 rounded-t-[0.4rem]">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto rounded-t-[0.4rem]"
                        alt="image"
                        width="3000"
                        height="2000"
                        src="/assets/img/photos/bg17.png"
                      />
                    </figure>
                    <span className="block !text-[#aab0bc] text-[0.7rem] m-0 py-[0.75rem]">
                      bg17.png
                    </span>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<section className="wrapper image-wrapper bg-image bg-overlay !text-white" data-image-src="/assets/img/photos/bg17.png"></section>'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card">
                  <div className="card-body p-0 rounded-t-[0.4rem]">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto rounded-t-[0.4rem]"
                        alt="image"
                        width="3000"
                        height="2000"
                        src="/assets/img/photos/bg18.png"
                      />
                    </figure>
                    <span className="block !text-[#aab0bc] text-[0.7rem] m-0 py-[0.75rem]">
                      bg18.png
                    </span>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<section className="wrapper image-wrapper bg-image bg-overlay !text-white" data-image-src="/assets/img/photos/bg18.png"></section>'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card">
                  <div className="card-body p-0 rounded-t-[0.4rem]">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto rounded-t-[0.4rem]"
                        alt="image"
                        width="3000"
                        height="2000"
                        src="/assets/img/photos/bg19.png"
                      />
                    </figure>
                    <span className="block !text-[#aab0bc] text-[0.7rem] m-0 py-[0.75rem]">
                      bg19.png
                    </span>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<section className="wrapper image-wrapper bg-image bg-overlay !text-white" data-image-src="/assets/img/photos/bg19.png"></section>'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card">
                  <div className="card-body p-0 rounded-t-[0.4rem]">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto rounded-t-[0.4rem]"
                        alt="image"
                        width="3000"
                        height="2000"
                        src="/assets/img/photos/bg20.png"
                      />
                    </figure>
                    <span className="block !text-[#aab0bc] text-[0.7rem] m-0 py-[0.75rem]">
                      bg20.png
                    </span>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<section className="wrapper image-wrapper bg-image bg-overlay !text-white" data-image-src="/assets/img/photos/bg20.png"></section>'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card">
                  <div className="card-body p-0 rounded-t-[0.4rem]">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto rounded-t-[0.4rem]"
                        alt="image"
                        width="3000"
                        height="2000"
                        src="/assets/img/photos/bg21.png"
                      />
                    </figure>
                    <span className="block !text-[#aab0bc] text-[0.7rem] m-0 py-[0.75rem]">
                      bg21.png
                    </span>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<section className="wrapper image-wrapper bg-image bg-overlay !text-white" data-image-src="/assets/img/photos/bg21.png"></section>'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card">
                  <div className="card-body p-0 rounded-t-[0.4rem]">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto rounded-t-[0.4rem]"
                        alt="image"
                        width="3000"
                        height="2000"
                        src="/assets/img/photos/bg22.png"
                      />
                    </figure>
                    <span className="block !text-[#aab0bc] text-[0.7rem] m-0 py-[0.75rem]">
                      bg22.png
                    </span>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<section className="wrapper image-wrapper bg-image bg-overlay !text-white" data-image-src="/assets/img/photos/bg22.png"></section>'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card">
                  <div className="card-body p-0 rounded-t-[0.4rem]">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto rounded-t-[0.4rem]"
                        alt="image"
                        width="3000"
                        height="2000"
                        src="/assets/img/photos/bg23.png"
                      />
                    </figure>
                    <span className="block !text-[#aab0bc] text-[0.7rem] m-0 py-[0.75rem]">
                      bg23.png
                    </span>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<section className="wrapper image-wrapper bg-image bg-overlay !text-white" data-image-src="/assets/img/photos/bg23.png"></section>'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card">
                  <div className="card-body p-0 rounded-t-[0.4rem]">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto rounded-t-[0.4rem]"
                        alt="image"
                        width="3000"
                        height="2000"
                        src="/assets/img/photos/bg24.png"
                      />
                    </figure>
                    <span className="block !text-[#aab0bc] text-[0.7rem] m-0 py-[0.75rem]">
                      bg24.png
                    </span>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<section className="wrapper image-wrapper bg-image bg-overlay !text-white" data-image-src="/assets/img/photos/bg24.png"></section>'
                    >
                      Copy
                    </a>
                  </div>
                </div>
              </li>
              <li className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[30px]">
                <div className="card">
                  <div className="card-body p-0 rounded-t-[0.4rem]">
                    <figure className="m-0 p-0">
                      <img
                        className="max-w-full h-auto rounded-t-[0.4rem]"
                        alt="image"
                        width="3000"
                        height="2000"
                        src="/assets/img/photos/bg25.png"
                      />
                    </figure>
                    <span className="block !text-[#aab0bc] text-[0.7rem] m-0 py-[0.75rem]">
                      bg25.png
                    </span>
                  </div>
                  <div className="card-footer !relative cursor-pointer text-[0.7rem] !p-[.5rem_.2rem]">
                    <a
                      className="stretched-link !text-[#60697b] btn-copy-icon"
                      data-clipboard-text='<section className="wrapper image-wrapper bg-image bg-overlay !text-white" data-image-src="/assets/img/photos/bg25.png"></section>'
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
