import React from "react";
import DocsSidebar from "./DocsSidebar";

import { Link } from "react-router-dom";
export default function Credits() {
  return (
    <div className="container">
      <div className="flex flex-wrap mx-[-15px]">
        <aside className="xl:w-2/12 flex-[0_0_auto] !px-[15px] max-w-full sidebar doc-sidebar md:!mt-0 py-24 hidden xl:block">
          <DocsSidebar />
          {/* /.widget */}
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
                    className="!text-inherit hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] active"
                    href="#snippet-1"
                  >
                    JS
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="!text-inherit hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]"
                    href="#snippet-2"
                  >
                    Images
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="!text-inherit hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]"
                    href="#snippet-3"
                  >
                    Icons
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="!text-inherit hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]"
                    href="#snippet-4"
                  >
                    Illustrations
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="!text-inherit hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]"
                    href="#snippet-5"
                  >
                    Fonts
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
            <h2 className="!mb-5 !leading-[1.35]">JS</h2>
            <div className="card">
              <div className="card-body p-[40px]">
                <table className="table">
                  <thead className="!text-[#343f52]">
                    <tr>
                      <th
                        scope="col"
                        className="w-3/12 flex-[0_0_auto] !px-[15px] max-w-full"
                      >
                        Plugin Name
                      </th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a
                          className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom !bg-[#e0e9fa] !my-0 hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
                          href="https://tailwindcss.com/"
                          target="_blank"
                        >
                          tailwindcss
                        </a>
                      </td>
                      <td>
                        Rapidly build modern websites without ever leaving your
                        HTML.
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <a
                          className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom !bg-[#e0e9fa] !my-0 hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
                          href="https://github.com/prjct-samwest/scrollCue"
                          target="_blank"
                        >
                          scrollCue.js
                        </a>
                      </td>
                      <td>Show elements by scrolling.</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom !bg-[#e0e9fa] !my-0 hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
                          href="https://swiperjs.com"
                          target="_blank"
                        >
                          Swiper
                        </a>
                      </td>
                      <td>The most modern mobile touch slider.</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom !bg-[#e0e9fa] !my-0 hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
                          href="https://dixonandmoe.com/rellax/"
                          target="_blank"
                        >
                          rellax.js
                        </a>
                      </td>
                      <td>
                        A buttery smooth, super lightweight, vanilla javascript
                        parallax library.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom !bg-[#e0e9fa] !my-0 hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
                          href="https://github.com/Ins-V/iTooltip"
                          target="_blank"
                        >
                          iTooltip
                        </a>
                      </td>
                      <td>
                        Transform native tooltip’s into customizable overlays.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom !bg-[#e0e9fa] !my-0 hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
                          href="https://plyr.io"
                          target="_blank"
                        >
                          Plyr
                        </a>
                      </td>
                      <td>
                        A simple, accessible and customisable media player.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom !bg-[#e0e9fa] !my-0 hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
                          href="https://www.npmjs.com/package/react-photoswipe-gallery"
                          target="_blank"
                        >
                          react-photoswipe-gallery
                        </a>
                      </td>
                      <td>
                        is a React wrapper for the PhotoSwipe library, which is
                        a popular JavaScript library for creating responsive,
                        touch-friendly image galleries with a lightbox effect.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom !bg-[#e0e9fa] !my-0 hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
                          href="https://biati-digital.github.io/glightbox/"
                          target="_blank"
                        >
                          GLightbox
                        </a>
                      </td>
                      <td>
                        A touchable pure Javascript lightbox with mobile and
                        video support.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom !bg-[#e0e9fa] !my-0 hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
                          href="https://isotope.metafizzy.co"
                          target="_blank"
                        >
                          isotope-layout
                        </a>
                      </td>
                      <td>Filter &amp; sort magical layouts.</td>
                    </tr>

                    <tr>
                      <td>
                        <a
                          className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom !bg-[#e0e9fa] !my-0 hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
                          href="https://clipboardjs.com"
                          target="_blank"
                        >
                          clipboard.js
                        </a>
                      </td>
                      <td>A modern approach to copy text to clipboard.</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom !bg-[#e0e9fa] !my-0 hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
                          href="https://prismjs.com"
                          target="_blank"
                        >
                          prism.js
                        </a>
                      </td>
                      <td>Lightweight, extensible syntax highlighter.</td>
                    </tr>

                    <tr>
                      <td>
                        <a
                          className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom !bg-[#e0e9fa] !my-0 hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
                          href="https://www.npmjs.com/package/react-type-animation"
                          target="_blank"
                        >
                          react-type-animation
                        </a>
                      </td>
                      <td>
                        is a lightweight React component that allows you to
                        create typewriter-style text animations in your React or
                        Next.js projects. It's ideal for creating dynamic and
                        engaging text effects.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-2" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Images</h2>
            <div className="card">
              <div className="card-body p-[40px]">
                <h3>Pexels</h3>
                <p className="!mb-5">
                  To reach the collection of all images/videos from Pexels used
                  in Sandbox, click
                  <a
                    href="https://www.pexels.com/collections/sandbox-gbw1t9c/"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    here
                  </a>
                  .
                </p>
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px] !mb-6">
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://www.pexels.com/photo/man-in-blue-collared-top-using-imac-indoors-3182782/"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/pex1@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/pex1.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://www.pexels.com/photo/photo-of-people-using-laptop-s-3182759/"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/pex2@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/pex2.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://www.pexels.com/photo/group-of-people-sitting-indoors-3184314/"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/pex3@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/pex3.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
                <hr className="!mt-[3rem] !mb-10" />
                <h3>Rawpixel</h3>
                <p className="!mb-5">
                  To reach the collection of all images from Rawpixel used in
                  Sandbox, click
                  <a
                    href="https://www.rawpixel.com/community-board/1391692/sandbox?sort=last_added&mode=shop&page=1"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    here
                  </a>
                  .
                </p>
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px] !mb-6">
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://www.rawpixel.com/image/56901/premium-photo-image-african-descent-analysing-analysis"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/raw1@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/raw1.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://www.rawpixel.com/image/56894/premium-photo-image-african-descent-analysis-brainstorming"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/raw2@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/raw2.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://www.rawpixel.com/image/56966/premium-photo-image-african-descent-analysing-analysis"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/raw3@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/raw3.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
                <hr className="!mt-[3rem] !mb-10" />
                <h3>Unsplash</h3>
                <p className="!mb-5">
                  To reach the collection of all images from Unsplash used in
                  Sandbox, click
                  <a
                    href="https://unsplash.com/collections/vn4OtMorwCA/sandbox"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    here
                  </a>
                  .
                </p>
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px] !mb-6">
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://unsplash.com/photos/DMl5gG0yWWY"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/un1@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/un1.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://unsplash.com/photos/Ecnx13MEPK0"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/un2@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/un2.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://unsplash.com/photos/_-E_2D-wgjg"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/un3@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/un3.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
                <hr className="!mt-[3rem] !mb-10" />
                <h3>Freepik</h3>
                <p className="!mb-5">
                  To reach the Freepik collection first make sure you are logged
                  into Freepik, then click
                  <a
                    href="https://www.freepik.com/user/collections/sandbox/2260699"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    here
                  </a>
                  .
                </p>
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px] !mb-6">
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://www.freepik.com/free-photo/community-young-people-posing-together_6981911.htm#&position=0&from_view=collections"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/fre1@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/fre1.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://www.freepik.com/free-photo/group-positive-young-people-working-together_6981914.htm#&position=3&from_view=collections"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/fre2@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/fre2.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://www.freepik.com/free-photo/community-young-people-happy-together_6981806.htm#&position=7&from_view=collections"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/fre3@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/fre3.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
                <hr className="!mt-[3rem] !mb-10" />
                <h3 className="!mb-5">Pixeden</h3>
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px] !mb-6">
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://www.pixeden.com/psd-mock-up-templates/square-psd-invitation-card-paper-wrap"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/pix1@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/pix1.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://www.pixeden.com/psd-mock-up-templates/psd-notebook-mockup-set"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/pix2@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/pix2.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://www.pixeden.com/psd-mock-up-templates/psd-paper-bag-mockup-set"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/pix3@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/pix3.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
                <p className="!mb-0">
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/psd-macarons-box-packaging-mockup"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    se3.jpg
                  </a>
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/product-psd-stationery-mockup-set"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    se4.jpg
                  </a>
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/psd-paper-bag-mockup-set"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    pd1.jpg
                  </a>
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/elegant-psd-invitation-mockup"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    pd2.jpg
                  </a>
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/basic-mailing-stationery-mockup"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    pd3.jpg
                  </a>
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/small-psd-square-box-mockup-set"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    pd4.jpg
                  </a>
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/psd-polaroid-photos-mockup"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    pd5.jpg
                  </a>
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/hardcover-psd-book-mockup-scene"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    pd6.jpg
                  </a>
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/psd-stationery-office-pack-mockup"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    pp1.jpg
                  </a>
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/simple-stationery-branding-vol3"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    pp7.jpg
                  </a>
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/mini-envelope-psd-mockup"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    pp8.jpg
                  </a>
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/stationery-branding-mock-up-vol-5-1"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    pp9.jpg
                  </a>
                  <a
                    href="https://www.pixeden.com/psd-web-elements/abstract-ui-project-scene-mockup"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    se1.jpg
                  </a>
                  <a
                    href="https://www.pixeden.com/psd-web-elements/abstract-ui-project-scene-mockup-2"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    se2.jpg
                  </a>
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/square-psd-invitation-card-paper-wrap"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    rp1.jpg
                  </a>
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/stationery-psd-pocket-notebook-mockup"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    rp2.jpg
                  </a>
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/psd-notebook-mockup-set"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    rp3.jpg
                  </a>
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/psd-clipboard-stationery-mockup"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    pd7.jpg
                  </a>
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/psd-magazine-mockup-vol8"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    pd8.jpg
                  </a>
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/square-psd-cardboard-box-mockup-2"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    pd9.jpg
                  </a>
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/basic-stationery-branding-vol-5"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    pd10.jpg
                  </a>
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/psd-cardboard-packaging-mockup"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    pd11.jpg
                  </a>
                  <a
                    href="https://www.pixeden.com/psd-mock-up-templates/psd-shopping-bag-mockup"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    pd12.jpg
                  </a>
                </p>
                <hr className="!mt-[3rem] !mb-10" />
                <h3 className="!mb-5">Icons8</h3>
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px] !mb-6">
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://icons8.com/photos/photo/minute-on-the-lips-lifetime-on-the-hips--5aba7cf88b65880001a035b9"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/ico1@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/ico1.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://icons8.com/photos/photo/some-eggs-brown-bread-and-butter--59d8d7cb0b7a6a03ae47271d"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/ico2@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/ico2.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://icons8.com/photos/photo/everything-starts-blooming-at-the-touch-of-love--5aba7d388b65880001a035ce"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/ico3@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/ico3.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
                <p className="!mb-0">
                  <a
                    href="https://icons8.com/photos/photo/ceramic-vases-home-collection--5b0bc6ec8b658800012318f1"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    cs1.jpg
                  </a>
                  <a
                    href="https://icons8.com/photos/photo/still-life-with-yellow-dried-flowers-and-a-lemon--5b0bc6f18b658800012318f3"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    cs2.jpg
                  </a>
                  <a
                    href="https://icons8.com/photos/photo/tender-gifts-for-a-tender-person--5b0bc7328b6588000123190d"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    cs3.jpg
                  </a>
                  <a
                    href="https://icons8.com/photos/photo/when-your-tea-is-made-with-love--5aba7d3a8b65880001a035cf"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    cs4.jpg
                  </a>
                  <a
                    href="https://icons8.com/photos/photo/everything-starts-blooming-at-the-touch-of-love--5aba7d458b65880001a035d1"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    cs5.jpg
                  </a>
                  <a
                    href="https://icons8.com/photos/photo/everything-starts-blooming-at-the-touch-of-love--5aba7d388b65880001a035ce"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    cs6.jpg
                  </a>
                  <a
                    href="https://icons8.com/photos/photo/fruit-jelly-strip-getting-out-of-toothpaste-tube--5aba7cfc8b65880001a035ba"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    cs7.jpg
                  </a>
                  <a
                    href="https://icons8.com/photos/photo/minute-on-the-lips-lifetime-on-the-hips--5aba7cf88b65880001a035b9"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    cs8.jpg
                  </a>
                  <a
                    href="https://icons8.com/photos/photo/bright-idea--5aba7a4a8b65880001a035ad"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    cs9.jpg
                  </a>
                  <a
                    href="https://icons8.com/photos/photo/some-eggs-brown-bread-and-butter--59d8d7cb0b7a6a03ae47271d"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    cs10.jpg
                  </a>
                  <a
                    href="https://icons8.com/photos/photo/flavorful-burst-of-color-and-taste--59d8d4b00b7a6a03ae47265d"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    cs11.jpg
                  </a>
                  <a
                    href="https://iconos8.es/photos/photo/lets-cook-mushrooms-in-a-sour-cream-sauce--59d8d4830b7a6a03ae472653"
                    className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                    target="_blank"
                  >
                    cs12.jpg
                  </a>
                </p>
                <hr className="!mt-[3rem] !mb-10" />
                <h3 className="!mb-5">Mockups</h3>
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px]">
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://creativemarket.com/RgraphicsDesign/34011-Web-Themes-Mock-ups"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/mo1@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/mo1.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://unblast.com/free-flying-iphone-mockup-psd/"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/mo2@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/mo2.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://www.free-mockup.com/downloads/mobile-app-screens-mockup/"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/mo3@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/mo3.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://www.pixeden.com/psd-mock-up-templates/psd-iphone-12-mockup-set"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/mo4@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/mo4.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://www.ls.graphics/free/three-iphone-clay-mockups"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/mo5@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/mo5.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://www.freemockupworld.com/iphone-x-clay-mockup-psd/"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/mo6@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/mo6.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://www.freemockupworld.com/iphone-on-bike-mockup/"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/mo7@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/mo7.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://www.freepik.com/premium-psd/smartphone-clay-mockup_13810460.htm#query=clay%20mockup&position=10&from_view=keyword"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/mo8@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/mo8.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://www.freepik.com/premium-psd/smartphone-clay-mockup_13810461.htm#&position=31&from_view=undefined"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/mo9@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/mo9.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://www.freepik.com/premium-psd/smartphone-clay-mockup_13810388.htm#from_view=detail_alsolike"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/mo10@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/mo10.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://www.freepik.com/premium-psd/smartphone-clay-mockup_13810390.htm#from_view=detail_alsolike"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/mo11@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/mo11.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
                <hr className="!mt-[3rem] !mb-10" />
                <h3 className="!mb-5">UI Graphics</h3>
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px]">
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://freebiesui.com/figma-freebies/figma-app-designs/medical-app-design/"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/oth@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/oth.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="lift rounded">
                      <a
                        href="https://craftwork.design/downloads/dashboards-ui-kit/"
                        target="_blank"
                      >
                        <img
                          srcSet="/assets/img/docs/oth2@2x.jpg 2x"
                          alt="image"
                          width="246"
                          height="164"
                          src="/assets/img/docs/oth2.jpg"
                        />
                      </a>
                    </figure>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-3" className="wrapper pt-24">
            <h2 className="!mb-3 !leading-[1.35]">Icons</h2>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
              To reach the collections of icons used in Sandbox, go to pages
              <Link
                to={`/docs/styleguide/icons-svg`}
                className="internal !pr-[1.4rem] after:content-['\e94c'] after:text-[0.8rem] after:font-Unicons !mt-[-0.25rem] hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
              >
                SVG Icons
              </Link>
              and
              <Link
                to={`/docs/styleguide/icons-font`}
                className="internal !pr-[1.4rem] after:content-['\e94c'] after:text-[0.8rem] after:font-Unicons !mt-[-0.25rem] hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
              >
                Font Icons
              </Link>
            </p>
            <div className="card">
              <div className="card-body p-[40px]">
                <table className="table">
                  <thead className="!text-[#343f52]">
                    <tr>
                      <th
                        scope="col"
                        className="w-3/12 flex-[0_0_auto] !px-[15px] max-w-full"
                      >
                        Source Name
                      </th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a
                          className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom !bg-[#e0e9fa] my-0 whitespace-nowrap hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
                          href="https://iconscout.com/unicons/explore/line"
                          target="_blank"
                        >
                          Font Icons
                        </a>
                      </td>
                      <td>Web’s new favorite icon library, Unicons.</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom !bg-[#e0e9fa] my-0 whitespace-nowrap hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
                          href="https://www.flaticon.com/authors/monochrome/yellow"
                          target="_blank"
                        >
                          SVG Lineal
                        </a>
                      </td>
                      <td>Monochrome icons from Freepik.</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom !bg-[#e0e9fa] my-0 whitespace-nowrap hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
                          href="https://www.flaticon.com/authors/pixel-perfect/tritone"
                          target="_blank"
                        >
                          SVG Solid
                        </a>
                      </td>
                      <td>Tritone icons from Freepik.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-4" className="wrapper pt-24">
            <h2 className="!mb-3 !leading-[1.35]">Illustrations</h2>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
              To reach the collections of illustrations used in Sandbox, click
              <Link
                to={`/docs/styleguide/illustrations`}
                className="internal !pr-[1.4rem] after:content-['\e94c'] after:text-[0.8rem] after:font-Unicons !mt-[-0.25rem] hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
              >
                here
              </Link>
            </p>
            <div className="card">
              <div className="card-body p-[40px]">
                <table className="table">
                  <thead className="!text-[#343f52]">
                    <tr>
                      <th
                        scope="col"
                        className="w-3/12 flex-[0_0_auto] !px-[15px] max-w-full"
                      >
                        Source Name
                      </th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a
                          className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom !bg-[#e0e9fa] !my-0 hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
                          href="https://www.freepik.com/"
                          target="_blank"
                        >
                          Freepik
                        </a>
                      </td>
                      <td>Graphic resources for everyone.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-5" className="wrapper py-24">
            <h2 className="!mb-5 !leading-[1.35]">Fonts</h2>
            <div className="card">
              <div className="card-body p-[40px]">
                <table className="table">
                  <thead className="!text-[#343f52]">
                    <tr>
                      <th
                        scope="col"
                        className="w-3/12 flex-[0_0_auto] !px-[15px] max-w-full"
                      >
                        Source Name
                      </th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a
                          className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom !bg-[#e0e9fa] !my-0 hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
                          href="https://fonts.google.com/specimen/Manrope"
                          target="_blank"
                        >
                          Manrope
                        </a>
                      </td>
                      <td>
                        Open-source modern font family, designed by Mikhail
                        Sharanda.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom !bg-[#e0e9fa] !my-0 hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
                          href="https://github.com/wonderunit/font-thicccboi"
                          target="_blank"
                        >
                          Thicccboi
                        </a>
                      </td>
                      <td>A free and open source font by Wonder Unit.</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom !bg-[#e0e9fa] !my-0 hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
                          href="https://fonts.google.com/specimen/DM+Serif+Display"
                          target="_blank"
                        >
                          DM Serif
                        </a>
                      </td>
                      <td>
                        A high-contrast transitional face, designed by Frank
                        Grießhammer.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom !bg-[#e0e9fa] !my-0 hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
                          href="https://github.com/coreyhu/Urbanist"
                          target="_blank"
                        >
                          Urbanist
                        </a>
                      </td>
                      <td>
                        A low-contrast, geometric sans-serif inspired by
                        Modernist typography.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          className="external !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom !bg-[#e0e9fa] !my-0 hover:!text-[#3f78e0] hover:after:!text-[#3f78e0]"
                          href="https://floriankarsten.github.io/space-grotesk/"
                          target="_blank"
                        >
                          Space Grotesk
                        </a>
                      </td>
                      <td>A proportional sans-serif typeface variant.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*/.card-body */}
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
