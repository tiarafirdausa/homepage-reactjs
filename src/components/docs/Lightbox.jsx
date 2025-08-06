import React, { useEffect, useRef } from "react";
import DocsSidebar from "./DocsSidebar";

import CodeSnippetContainer from "../common/CodeSnippetContainer";
export default function Lightbox() {
  const lightbox = useRef();
  useEffect(() => {
    const initLightbox = async () => {
      const { default: GLightbox } = await import("glightbox");

      lightbox.current = GLightbox({
        selector: "*[data-glightbox]",
        touchNavigation: true,
        loop: false,
        zoomable: false,
        autoplayVideos: false,
        moreLength: 0,
        slideExtraAttributes: {
          poster: "",
        },
      });
    };

    initLightbox();

    return () => {
      if (lightbox.current && typeof lightbox.current.destroy === "function") {
        lightbox.current.destroy(); // Clean up the instance on unmount
      }
    };
  }, []);

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
                    href="#instructions"
                  >
                    Instructions
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]"
                    href="#snippet-1"
                  >
                    Image &amp; Caption
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem]"
                    href="#snippet-2"
                  >
                    Video
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
          <section id="instructions" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Instructions</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <p>
                  Use <code className="code">data-glightbox</code> attribute to
                  enable lightbox functionality on your image and video links.
                </p>
                <p className="!mb-0">
                  To group images together, use
                  <code className="code">data-gallery="group-name"</code>
                  attribute. This will enable navigation between images that
                  have the same attribute value.
                </p>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-1" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Image &amp; Caption</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px]">
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="overlay overlay-1 hover-scale rounded group">
                      <a
                        href="/assets/img/photos/p6@2x.jpg"
                        data-glightbox=""
                        data-gallery="gallery-image"
                      >
                        <img
                          className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                          srcSet="/assets/img/photos/p6@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/p6.jpg"
                          width="360"
                          height="250"
                        />
                      </a>
                      <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                        <h5 className="from-top !mb-0 absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2/4">
                          Image
                        </h5>
                      </figcaption>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="overlay overlay-1 hover-scale rounded group">
                      <a
                        href="/assets/img/photos/p3@2x.jpg"
                        data-glightbox="title: Title; description: This is the image description"
                        data-gallery="gallery-image"
                      >
                        <img
                          className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                          srcSet="/assets/img/photos/p3@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/p3.jpg"
                          width="360"
                          height="250"
                        />
                      </a>
                      <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                        <h5 className="from-top !mb-0 absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2/4">
                          Simple Caption
                        </h5>
                      </figcaption>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="overlay overlay-1 hover-scale rounded group">
                      <a
                        href="/assets/img/photos/p2@2x.jpg"
                        data-glightbox="title: Title; description: .caption-1"
                        data-gallery="gallery-image"
                      >
                        <img
                          className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                          srcSet="/assets/img/photos/p2@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/p2.jpg"
                          width="360"
                          height="250"
                        />
                      </a>
                      <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                        <h5 className="from-top !mb-0 absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2/4">
                          Advanced Caption
                        </h5>
                      </figcaption>
                    </figure>
                    <div className="glightbox-desc caption-1">
                      <p className="!mb-0">
                        This div will be used as the image description. HTML is
                        supported.
                      </p>
                    </div>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
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
                  className="card-footer !bg-[#21262c] opacity-100 !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          // Image{"\n"}&lt;a href="#" data-glightbox
                          data-gallery="g1"&gt;Link&lt;/a&gt;{"\n"}
                          {"\n"}// Image &amp; Simple Caption{"\n"}&lt;a
                          href="#" data-glightbox="title: Title; description:
                          Description" data-gallery="g1"&gt;Link&lt;/a&gt;{"\n"}
                          {"\n"}// Image &amp; Advanced Caption{"\n"}&lt;a
                          href="#" data-glightbox="title: Title; description:
                          .caption1" data-gallery="g1"&gt;Link&lt;/a&gt;{"\n"}
                          &lt;div className="glightbox-desc caption1"&gt;{"\n"}
                          {"  "}&lt;p className="mb-0"&gt;This div will be used
                          as the image description. HTML is supported.&lt;/p&gt;
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
          <section id="snippet-2" className="wrapper py-24">
            <h2 className="!mb-5 !leading-[1.35]">Video</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px]">
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="overlay overlay-1 hover-scale rounded group">
                      <a
                        href="https://vimeo.com/90355541"
                        data-glightbox=""
                        data-gallery="gallery-video"
                      >
                        <img
                          className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                          srcSet="/assets/img/photos/p4@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/p4.jpg"
                          width="360"
                          height="250"
                        />
                      </a>
                      <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                        <h5 className="from-top !mb-0 absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2/4">
                          Vimeo
                        </h5>
                      </figcaption>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="overlay overlay-1 hover-scale rounded group">
                      <a
                        href="https://www.youtube.com/watch?v=26TbMXXOe0I"
                        data-glightbox=""
                        data-gallery="gallery-video"
                      >
                        <img
                          className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                          srcSet="/assets/img/photos/p5@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/p5.jpg"
                          width="360"
                          height="250"
                        />
                      </a>
                      <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                        <h5 className="from-top !mb-0 absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2/4">
                          YouTube
                        </h5>
                      </figcaption>
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="item md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                    <figure className="overlay overlay-1 hover-scale rounded group">
                      <a
                        href="/assets/media/movie.mp4"
                        data-glightbox=""
                        data-poster="/assets/img/photos/movie.jpg"
                        data-gallery="gallery-video"
                      >
                        <img
                          className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                          srcSet="/assets/img/photos/p6@2x.jpg 2x"
                          alt="image"
                          src="/assets/img/photos/p6.jpg"
                          width="360"
                          height="250"
                        />
                      </a>
                      <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                        <h5 className="from-top !mb-0 absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2/4">
                          HTML5
                        </h5>
                      </figcaption>
                    </figure>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
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
                  className="card-footer !bg-[#21262c] opacity-100 !p-0 accordion-collapse collapse"
                >
                  <div className="code-wrapper relative !mb-0">
                    <div className="code-wrapper-inner">
                      <pre className="language-html">
                        <code>
                          // Vimeo{"\n"}&lt;a href="Vimeo Link" data-glightbox
                          data-gallery="g2"&gt;Link&lt;/a&gt;{"\n"}
                          {"\n"}// YouTube{"\n"}&lt;a href="YouTube Link"
                          data-glightbox data-gallery="g2"&gt;Link&lt;/a&gt;
                          {"\n"}
                          {"\n"}// HTML5 video{"\n"}&lt;a href=".mp4 Link"
                          data-glightbox data-gallery="g2"&gt;Link&lt;/a&gt;
                          {"\n"}
                          {"\n"}// PDF{"\n"}&lt;a href=".pdf Link"
                          data-glightbox="height: 100vh"&gt;Link&lt;/a&gt;
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
