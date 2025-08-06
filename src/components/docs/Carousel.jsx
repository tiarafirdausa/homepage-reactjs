import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import DocsSidebar from "./DocsSidebar";
import Slider from "../shop/Slider";

import { Link } from "react-router-dom";
import CodeSnippet from "../common/CodeSnippet";
export default function Carousel() {
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
                    Simple Carousel
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-2"
                  >
                    Card Carousel
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-3"
                  >
                    Text Slider
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-4"
                  >
                    Image Slider
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#snippet-5"
                  >
                    Thumbnail Slider
                  </a>
                </li>
                <li className="!mt-[0.35rem]">
                  <a
                    className="hover:!text-[#3f78e0] nav-link scroll !text-[0.7rem] "
                    href="#instructions"
                  >
                    Instructions
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
            <h2 className="!mb-5 !leading-[1.35]">Simple Carousel</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="swiper-container relative z-10 !mb-10">
                  {/* import { Swiper, SwiperSlide } from "swiper/react"; */}
                  {/* import { Navigation, Pagination } from "swiper/modules"; */}
                  <Swiper
                    className="swiper"
                    spaceBetween={30}
                    modules={[Navigation, Pagination]}
                    pagination={{
                      clickable: true,
                      el: ".spds1",
                    }}
                    navigation={{
                      prevEl: ".snbps1",
                      nextEl: ".snbns1",
                    }}
                    breakpoints={{
                      0: { slidesPerView: 1 },
                      575: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      992: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    <SwiperSlide className="swiper-slide">
                      <figure className="overlay overlay-1 hover-scale rounded  !mb-0 group">
                        <a href="#">
                          <img
                            srcSet="/assets/img/photos/p1@2x.jpg 2x"
                            alt="image"
                            src="/assets/img/photos/p1.jpg"
                            width="360"
                            height="250"
                          />
                        </a>
                        <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                          <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                            Read More
                          </h5>
                        </figcaption>
                      </figure>
                    </SwiperSlide>
                    {/*/.swiper-slide */}
                    <SwiperSlide className="swiper-slide">
                      <figure className="overlay overlay-1 hover-scale rounded  !mb-0 group">
                        <a href="#">
                          {" "}
                          <img
                            srcSet="/assets/img/photos/p2@2x.jpg 2x"
                            alt="image"
                            src="/assets/img/photos/p2.jpg"
                            width="360"
                            height="250"
                          />
                        </a>
                        <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                          <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                            Read More
                          </h5>
                        </figcaption>
                      </figure>
                    </SwiperSlide>
                    {/*/.swiper-slide */}
                    <SwiperSlide className="swiper-slide">
                      <figure className="overlay overlay-1 hover-scale rounded  !mb-0 group">
                        <a href="#">
                          {" "}
                          <img
                            srcSet="/assets/img/photos/p3@2x.jpg 2x"
                            alt="image"
                            src="/assets/img/photos/p3.jpg"
                            width="360"
                            height="250"
                          />
                        </a>
                        <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                          <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                            Read More
                          </h5>
                        </figcaption>
                      </figure>
                    </SwiperSlide>
                    {/*/.swiper-slide */}
                    <SwiperSlide className="swiper-slide">
                      <figure className="overlay overlay-1 hover-scale rounded  !mb-0 group">
                        <a href="#">
                          {" "}
                          <img
                            srcSet="/assets/img/photos/p4@2x.jpg 2x"
                            alt="image"
                            src="/assets/img/photos/p4.jpg"
                            width="360"
                            height="250"
                          />
                        </a>
                        <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                          <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                            Read More
                          </h5>
                        </figcaption>
                      </figure>
                    </SwiperSlide>
                    {/*/.swiper-slide */}
                    <SwiperSlide className="swiper-slide">
                      <figure className="overlay overlay-1 hover-scale rounded  !mb-0 group">
                        <a href="#">
                          {" "}
                          <img
                            srcSet="/assets/img/photos/p5@2x.jpg 2x"
                            alt="image"
                            src="/assets/img/photos/p5.jpg"
                            width="360"
                            height="250"
                          />
                        </a>
                        <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                          <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                            Read More
                          </h5>
                        </figcaption>
                      </figure>
                    </SwiperSlide>
                    {/*/.swiper-slide */}

                    {/*/.swiper-wrapper */}
                  </Swiper>
                  <div className="swiper-controls">
                    <div className="swiper-navigation">
                      <div className="swiper-button swiper-button-prev snbps1"></div>
                      <div className="swiper-button swiper-button-next snbns1"></div>
                    </div>
                    <div className="swiper-pagination spds1"></div>
                  </div>
                  {/* /.swiper */}
                </div>
                {/* /.swiper-container */}
              </div>
              {/*/.card-body */}

              {/*/.card-footer */}
              <CodeSnippet
                paddingClass="pb-10 xl:pb-14 lg:pb-14 md:pb-14"
                code={`&lt;div className&#x3D;&quot;swiper-container relative z-10 !mb-10&quot;&gt;
&lbrace;&#x2F;* import &lbrace; Swiper, SwiperSlide &rbrace; from &quot;swiper&#x2F;react&quot;; *&#x2F;&rbrace;
&lbrace;&#x2F;* import &lbrace; Navigation, Pagination &rbrace; from &quot;swiper&#x2F;modules&quot;; *&#x2F;&rbrace;
  &lt;Swiper
    className&#x3D;&quot;swiper&quot;
    spaceBetween&#x3D;&lbrace;30&rbrace;
    modules&#x3D;&lbrace;[Navigation, Pagination]&rbrace;
    pagination&#x3D;&lbrace;&lbrace;
      clickable: true,
      el: &quot;.spds1&quot;,
    &rbrace;&rbrace;
    navigation&#x3D;&lbrace;&lbrace;
      prevEl: &quot;.snbps1&quot;,
      nextEl: &quot;.snbns1&quot;,
    &rbrace;&rbrace;
    breakpoints&#x3D;&lbrace;&lbrace;
      0: &lbrace; slidesPerView: 1 &rbrace;,
      575: &lbrace;
        slidesPerView: 1,
      &rbrace;,
      768: &lbrace;
        slidesPerView: 2,
      &rbrace;,
      992: &lbrace;
        slidesPerView: 3,
      &rbrace;,
    &rbrace;&rbrace;
  &gt;
    &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot;&gt;
      &lt;figure className&#x3D;&quot;overlay overlay-1 hover-scale rounded  !mb-0 group&quot;&gt;
        &lt;a href&#x3D;&quot;#&quot;&gt;
          &lt;img
            srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p1@2x.jpg 2x&quot;
            alt&#x3D;&quot;image&quot;
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p1.jpg&quot;
            width&#x3D;&quot;360&quot;
            height&#x3D;&quot;250&quot;
          &#x2F;&gt;
        &lt;&#x2F;a&gt;
        &lt;figcaption className&#x3D;&quot;group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2&quot;&gt;
          &lt;h5 className&#x3D;&quot;from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2&#x2F;4&quot;&gt;
            Read More
          &lt;&#x2F;h5&gt;
        &lt;&#x2F;figcaption&gt;
      &lt;&#x2F;figure&gt;
    &lt;&#x2F;SwiperSlide&gt;
    &lbrace;&#x2F;*&#x2F;.swiper-slide *&#x2F;&rbrace;
    &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot;&gt;
      &lt;figure className&#x3D;&quot;overlay overlay-1 hover-scale rounded  !mb-0 group&quot;&gt;
        &lt;a href&#x3D;&quot;#&quot;&gt;
          &lbrace;&quot; &quot;&rbrace;
          &lt;img
            srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p2@2x.jpg 2x&quot;
            alt&#x3D;&quot;image&quot;
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p2.jpg&quot;
            width&#x3D;&quot;360&quot;
            height&#x3D;&quot;250&quot;
          &#x2F;&gt;
        &lt;&#x2F;a&gt;
        &lt;figcaption className&#x3D;&quot;group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2&quot;&gt;
          &lt;h5 className&#x3D;&quot;from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2&#x2F;4&quot;&gt;
            Read More
          &lt;&#x2F;h5&gt;
        &lt;&#x2F;figcaption&gt;
      &lt;&#x2F;figure&gt;
    &lt;&#x2F;SwiperSlide&gt;
    &lbrace;&#x2F;*&#x2F;.swiper-slide *&#x2F;&rbrace;
    &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot;&gt;
      &lt;figure className&#x3D;&quot;overlay overlay-1 hover-scale rounded  !mb-0 group&quot;&gt;
        &lt;a href&#x3D;&quot;#&quot;&gt;
          &lbrace;&quot; &quot;&rbrace;
          &lt;img
            srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p3@2x.jpg 2x&quot;
            alt&#x3D;&quot;image&quot;
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p3.jpg&quot;
            width&#x3D;&quot;360&quot;
            height&#x3D;&quot;250&quot;
          &#x2F;&gt;
        &lt;&#x2F;a&gt;
        &lt;figcaption className&#x3D;&quot;group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2&quot;&gt;
          &lt;h5 className&#x3D;&quot;from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2&#x2F;4&quot;&gt;
            Read More
          &lt;&#x2F;h5&gt;
        &lt;&#x2F;figcaption&gt;
      &lt;&#x2F;figure&gt;
    &lt;&#x2F;SwiperSlide&gt;
    &lbrace;&#x2F;*&#x2F;.swiper-slide *&#x2F;&rbrace;
    &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot;&gt;
      &lt;figure className&#x3D;&quot;overlay overlay-1 hover-scale rounded  !mb-0 group&quot;&gt;
        &lt;a href&#x3D;&quot;#&quot;&gt;
          &lbrace;&quot; &quot;&rbrace;
          &lt;img
            srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p4@2x.jpg 2x&quot;
            alt&#x3D;&quot;image&quot;
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p4.jpg&quot;
            width&#x3D;&quot;360&quot;
            height&#x3D;&quot;250&quot;
          &#x2F;&gt;
        &lt;&#x2F;a&gt;
        &lt;figcaption className&#x3D;&quot;group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2&quot;&gt;
          &lt;h5 className&#x3D;&quot;from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2&#x2F;4&quot;&gt;
            Read More
          &lt;&#x2F;h5&gt;
        &lt;&#x2F;figcaption&gt;
      &lt;&#x2F;figure&gt;
    &lt;&#x2F;SwiperSlide&gt;
    &lbrace;&#x2F;*&#x2F;.swiper-slide *&#x2F;&rbrace;
    &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot;&gt;
      &lt;figure className&#x3D;&quot;overlay overlay-1 hover-scale rounded  !mb-0 group&quot;&gt;
        &lt;a href&#x3D;&quot;#&quot;&gt;
          &lbrace;&quot; &quot;&rbrace;
          &lt;img
            srcSet&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p5@2x.jpg 2x&quot;
            alt&#x3D;&quot;image&quot;
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p5.jpg&quot;
            width&#x3D;&quot;360&quot;
            height&#x3D;&quot;250&quot;
          &#x2F;&gt;
        &lt;&#x2F;a&gt;
        &lt;figcaption className&#x3D;&quot;group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2&quot;&gt;
          &lt;h5 className&#x3D;&quot;from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2&#x2F;4&quot;&gt;
            Read More
          &lt;&#x2F;h5&gt;
        &lt;&#x2F;figcaption&gt;
      &lt;&#x2F;figure&gt;
    &lt;&#x2F;SwiperSlide&gt;
    &lbrace;&#x2F;*&#x2F;.swiper-slide *&#x2F;&rbrace;

    &lbrace;&#x2F;*&#x2F;.swiper-wrapper *&#x2F;&rbrace;
  &lt;&#x2F;Swiper&gt;
  &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
    &lt;div className&#x3D;&quot;swiper-navigation&quot;&gt;
      &lt;div className&#x3D;&quot;swiper-button swiper-button-prev snbps1&quot;&gt;&lt;&#x2F;div&gt;
      &lt;div className&#x3D;&quot;swiper-button swiper-button-next snbns1&quot;&gt;&lt;&#x2F;div&gt;
    &lt;&#x2F;div&gt;
    &lt;div className&#x3D;&quot;swiper-pagination spds1&quot;&gt;&lt;&#x2F;div&gt;
  &lt;&#x2F;div&gt;
  &lbrace;&#x2F;* &#x2F;.swiper *&#x2F;&rbrace;
&lt;&#x2F;div&gt;`}
              />
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-2" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Card Carousel</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="swiper-container dots-closer blog grid-view !mb-6">
                  {/* import { Swiper, SwiperSlide } from "swiper/react"; */}
                  {/* import { Navigation, Pagination } from "swiper/modules"; */}
                  <Swiper
                    className="swiper"
                    modules={[Pagination]}
                    pagination={{
                      clickable: true,
                      el: ".spds2",
                    }}
                    breakpoints={{
                      0: { slidesPerView: 1 },
                      575: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                    }}
                  >
                    <SwiperSlide className="swiper-slide">
                      <div className="item-inner">
                        <article>
                          <div className="card">
                            <div className="card-body flex-[1_1_auto] xl:!p-[1.75rem_1.75rem_1rem_1.75rem] lg:!p-[1.75rem_1.75rem_1rem_1.75rem] md:!p-[1.75rem_1.75rem_1rem_1.75rem] sm:!p-[40px] max-sm:!p-[40px_40px_20px_40px]">
                              <p>
                                Duis mollis est non commodo luctu, nisi erat
                                porttitor ligula, eget lacinia odio sem nec
                                elit. Nullam quis risus eget urna mollis ornare
                                vel. Nulla vitae elit libero, a pharetra augue.
                                Praesent commodo cursus magna vel scelerisque
                                nisl consectetur et.
                              </p>
                            </div>
                            {/*/.card-body */}
                          </div>
                          {/* /.card */}
                        </article>
                        {/* /article */}
                      </div>
                      {/* /.item-inner */}
                    </SwiperSlide>
                    {/*/.swiper-slide */}
                    <SwiperSlide className="swiper-slide">
                      <div className="item-inner">
                        <article>
                          <div className="card">
                            <div className="card-body flex-[1_1_auto] xl:!p-[1.75rem_1.75rem_1rem_1.75rem] lg:!p-[1.75rem_1.75rem_1rem_1.75rem] md:!p-[1.75rem_1.75rem_1rem_1.75rem] sm:!p-[40px] max-sm:!p-[40px_40px_20px_40px]">
                              <p>
                                Duis mollis est non commodo luctu, nisi erat
                                porttitor ligula, eget lacinia odio sem nec
                                elit. Nullam quis risus eget urna mollis ornare
                                vel. Nulla vitae elit libero, a pharetra augue.
                                Praesent commodo cursus magna vel scelerisque
                                nisl consectetur et.
                              </p>
                            </div>
                            {/*/.card-body */}
                          </div>
                          {/* /.card */}
                        </article>
                        {/* /article */}
                      </div>
                      {/* /.item-inner */}
                    </SwiperSlide>
                    {/*/.swiper-slide */}
                    <SwiperSlide className="swiper-slide">
                      <div className="item-inner">
                        <article>
                          <div className="card">
                            <div className="card-body flex-[1_1_auto] xl:!p-[1.75rem_1.75rem_1rem_1.75rem] lg:!p-[1.75rem_1.75rem_1rem_1.75rem] md:!p-[1.75rem_1.75rem_1rem_1.75rem] sm:!p-[40px] max-sm:!p-[40px_40px_20px_40px]">
                              <p>
                                Duis mollis est non commodo luctu, nisi erat
                                porttitor ligula, eget lacinia odio sem nec
                                elit. Nullam quis risus eget urna mollis ornare
                                vel. Nulla vitae elit libero, a pharetra augue.
                                Praesent commodo cursus magna vel scelerisque
                                nisl consectetur et.
                              </p>
                            </div>
                            {/*/.card-body */}
                          </div>
                          {/* /.card */}
                        </article>
                        {/* /article */}
                      </div>
                      {/* /.item-inner */}
                    </SwiperSlide>
                    {/*/.swiper-slide */}
                    <SwiperSlide className="swiper-slide">
                      <div className="item-inner">
                        <article>
                          <div className="card">
                            <div className="card-body flex-[1_1_auto] xl:!p-[1.75rem_1.75rem_1rem_1.75rem] lg:!p-[1.75rem_1.75rem_1rem_1.75rem] md:!p-[1.75rem_1.75rem_1rem_1.75rem] sm:!p-[40px] max-sm:!p-[40px_40px_20px_40px]">
                              <p>
                                Duis mollis est non commodo luctu, nisi erat
                                porttitor ligula, eget lacinia odio sem nec
                                elit. Nullam quis risus eget urna mollis ornare
                                vel. Nulla vitae elit libero, a pharetra augue.
                                Praesent commodo cursus magna vel scelerisque
                                nisl consectetur et.
                              </p>
                            </div>
                            {/*/.card-body */}
                          </div>
                          {/* /.card */}
                        </article>
                        {/* /article */}
                      </div>
                      {/* /.item-inner */}
                    </SwiperSlide>
                    {/*/.swiper-slide */}

                    {/*/.swiper-wrapper */}
                  </Swiper>
                  <div className="swiper-controls">
                    <div className="swiper-pagination spds2"></div>
                  </div>
                  {/* /.swiper */}
                </div>
                {/* /.swiper-container */}
              </div>
              {/*/.card-body */}
              <CodeSnippet
                paddingClass="pb-10 xl:pb-14 lg:pb-14 md:pb-14"
                code={`&lt;div className&#x3D;&quot;swiper-container dots-closer blog grid-view !mb-6&quot;&gt;
&lbrace;&#x2F;* import &lbrace; Swiper, SwiperSlide &rbrace; from &quot;swiper&#x2F;react&quot;; *&#x2F;&rbrace;
&lbrace;&#x2F;* import &lbrace; Navigation, Pagination &rbrace; from &quot;swiper&#x2F;modules&quot;; *&#x2F;&rbrace;
  &lt;Swiper
    className&#x3D;&quot;swiper&quot;
    modules&#x3D;&lbrace;[Pagination]&rbrace;
    pagination&#x3D;&lbrace;&lbrace;
      clickable: true,
      el: &quot;.spds2&quot;,
    &rbrace;&rbrace;
    breakpoints&#x3D;&lbrace;&lbrace;
      0: &lbrace; slidesPerView: 1 &rbrace;,
      575: &lbrace;
        slidesPerView: 1,
      &rbrace;,
      768: &lbrace;
        slidesPerView: 2,
      &rbrace;,
    &rbrace;&rbrace;
  &gt;
    &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot;&gt;
      &lt;div className&#x3D;&quot;item-inner&quot;&gt;
        &lt;article&gt;
          &lt;div className&#x3D;&quot;card&quot;&gt;
            &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] xl:!p-[1.75rem_1.75rem_1rem_1.75rem] lg:!p-[1.75rem_1.75rem_1rem_1.75rem] md:!p-[1.75rem_1.75rem_1rem_1.75rem] sm:!p-[40px] max-sm:!p-[40px_40px_20px_40px]&quot;&gt;
              &lt;p&gt;
                Duis mollis est non commodo luctu, nisi erat
                porttitor ligula, eget lacinia odio sem nec
                elit. Nullam quis risus eget urna mollis ornare
                vel. Nulla vitae elit libero, a pharetra augue.
                Praesent commodo cursus magna vel scelerisque
                nisl consectetur et.
              &lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;*&#x2F;.card-body *&#x2F;&rbrace;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;* &#x2F;.card *&#x2F;&rbrace;
        &lt;&#x2F;article&gt;
        &lbrace;&#x2F;* &#x2F;article *&#x2F;&rbrace;
      &lt;&#x2F;div&gt;
      &lbrace;&#x2F;* &#x2F;.item-inner *&#x2F;&rbrace;
    &lt;&#x2F;SwiperSlide&gt;
    &lbrace;&#x2F;*&#x2F;.swiper-slide *&#x2F;&rbrace;
    &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot;&gt;
      &lt;div className&#x3D;&quot;item-inner&quot;&gt;
        &lt;article&gt;
          &lt;div className&#x3D;&quot;card&quot;&gt;
            &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] xl:!p-[1.75rem_1.75rem_1rem_1.75rem] lg:!p-[1.75rem_1.75rem_1rem_1.75rem] md:!p-[1.75rem_1.75rem_1rem_1.75rem] sm:!p-[40px] max-sm:!p-[40px_40px_20px_40px]&quot;&gt;
              &lt;p&gt;
                Duis mollis est non commodo luctu, nisi erat
                porttitor ligula, eget lacinia odio sem nec
                elit. Nullam quis risus eget urna mollis ornare
                vel. Nulla vitae elit libero, a pharetra augue.
                Praesent commodo cursus magna vel scelerisque
                nisl consectetur et.
              &lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;*&#x2F;.card-body *&#x2F;&rbrace;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;* &#x2F;.card *&#x2F;&rbrace;
        &lt;&#x2F;article&gt;
        &lbrace;&#x2F;* &#x2F;article *&#x2F;&rbrace;
      &lt;&#x2F;div&gt;
      &lbrace;&#x2F;* &#x2F;.item-inner *&#x2F;&rbrace;
    &lt;&#x2F;SwiperSlide&gt;
    &lbrace;&#x2F;*&#x2F;.swiper-slide *&#x2F;&rbrace;
    &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot;&gt;
      &lt;div className&#x3D;&quot;item-inner&quot;&gt;
        &lt;article&gt;
          &lt;div className&#x3D;&quot;card&quot;&gt;
            &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] xl:!p-[1.75rem_1.75rem_1rem_1.75rem] lg:!p-[1.75rem_1.75rem_1rem_1.75rem] md:!p-[1.75rem_1.75rem_1rem_1.75rem] sm:!p-[40px] max-sm:!p-[40px_40px_20px_40px]&quot;&gt;
              &lt;p&gt;
                Duis mollis est non commodo luctu, nisi erat
                porttitor ligula, eget lacinia odio sem nec
                elit. Nullam quis risus eget urna mollis ornare
                vel. Nulla vitae elit libero, a pharetra augue.
                Praesent commodo cursus magna vel scelerisque
                nisl consectetur et.
              &lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;*&#x2F;.card-body *&#x2F;&rbrace;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;* &#x2F;.card *&#x2F;&rbrace;
        &lt;&#x2F;article&gt;
        &lbrace;&#x2F;* &#x2F;article *&#x2F;&rbrace;
      &lt;&#x2F;div&gt;
      &lbrace;&#x2F;* &#x2F;.item-inner *&#x2F;&rbrace;
    &lt;&#x2F;SwiperSlide&gt;
    &lbrace;&#x2F;*&#x2F;.swiper-slide *&#x2F;&rbrace;
    &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot;&gt;
      &lt;div className&#x3D;&quot;item-inner&quot;&gt;
        &lt;article&gt;
          &lt;div className&#x3D;&quot;card&quot;&gt;
            &lt;div className&#x3D;&quot;card-body flex-[1_1_auto] xl:!p-[1.75rem_1.75rem_1rem_1.75rem] lg:!p-[1.75rem_1.75rem_1rem_1.75rem] md:!p-[1.75rem_1.75rem_1rem_1.75rem] sm:!p-[40px] max-sm:!p-[40px_40px_20px_40px]&quot;&gt;
              &lt;p&gt;
                Duis mollis est non commodo luctu, nisi erat
                porttitor ligula, eget lacinia odio sem nec
                elit. Nullam quis risus eget urna mollis ornare
                vel. Nulla vitae elit libero, a pharetra augue.
                Praesent commodo cursus magna vel scelerisque
                nisl consectetur et.
              &lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;*&#x2F;.card-body *&#x2F;&rbrace;
          &lt;&#x2F;div&gt;
          &lbrace;&#x2F;* &#x2F;.card *&#x2F;&rbrace;
        &lt;&#x2F;article&gt;
        &lbrace;&#x2F;* &#x2F;article *&#x2F;&rbrace;
      &lt;&#x2F;div&gt;
      &lbrace;&#x2F;* &#x2F;.item-inner *&#x2F;&rbrace;
    &lt;&#x2F;SwiperSlide&gt;
    &lbrace;&#x2F;*&#x2F;.swiper-slide *&#x2F;&rbrace;

    &lbrace;&#x2F;*&#x2F;.swiper-wrapper *&#x2F;&rbrace;
  &lt;&#x2F;Swiper&gt;
  &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
    &lt;div className&#x3D;&quot;swiper-pagination spds2&quot;&gt;&lt;&#x2F;div&gt;
  &lt;&#x2F;div&gt;
  &lbrace;&#x2F;* &#x2F;.swiper *&#x2F;&rbrace;
&lt;&#x2F;div&gt;`}
              />
              {/*/.card-footer */}

              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-3" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Text Slider</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="swiper-container dots-closer !text-center !mb-6">
                  {/* import { Swiper, SwiperSlide } from "swiper/react"; */}
                  {/* import { Navigation, Pagination } from "swiper/modules"; */}
                  <Swiper
                    className="swiper"
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                      clickable: true,
                      el: ".spds3",
                    }}
                  >
                    <SwiperSlide className="swiper-slide">
                      <p>
                        Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                        venenatis vestibulum. Aenean eu leo quam. Pellentesque
                        ornare sem lacinia quam venenatis vestibulum. Nullam id
                        dolor id nibh ultricies vehicula ut id elit. Cum sociis
                        natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Cras mattis consectetur purus
                        sit amet fermentum. Maecenas faucibus mollis interdum.
                      </p>
                    </SwiperSlide>
                    {/*/.swiper-slide */}
                    <SwiperSlide className="swiper-slide">
                      <p>
                        Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                        venenatis vestibulum. Aenean eu leo quam. Pellentesque
                        ornare sem lacinia quam venenatis vestibulum. Nullam id
                        dolor id nibh ultricies vehicula ut id elit. Cum sociis
                        natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Cras mattis consectetur purus
                        sit amet fermentum. Maecenas faucibus mollis interdum.
                      </p>
                    </SwiperSlide>
                    {/*/.swiper-slide */}
                    <SwiperSlide className="swiper-slide">
                      <p>
                        Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                        venenatis vestibulum. Aenean eu leo quam. Pellentesque
                        ornare sem lacinia quam venenatis vestibulum. Nullam id
                        dolor id nibh ultricies vehicula ut id elit. Cum sociis
                        natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Cras mattis consectetur purus
                        sit amet fermentum. Maecenas faucibus mollis interdum.
                      </p>
                    </SwiperSlide>
                    {/*/.swiper-slide */}

                    {/*/.swiper-wrapper */}
                  </Swiper>
                  <div className="swiper-controls">
                    <div className="swiper-pagination spds3"></div>
                  </div>
                  {/* /.swiper */}
                </div>
                {/* /.swiper-container */}
              </div>
              {/*/.card-body */}
              <CodeSnippet
                paddingClass="pb-10 xl:pb-14 lg:pb-14 md:pb-14"
                code={`   &lt;div className&#x3D;&quot;swiper-container dots-closer !text-center !mb-6&quot;&gt;
                {&#x2F;* import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;; *&#x2F;}
                {&#x2F;* import { Navigation, Pagination } from &quot;swiper&#x2F;modules&quot;; *&#x2F;}
                  &lt;Swiper
                    className&#x3D;&quot;swiper&quot;
                    spaceBetween&#x3D;{30}
                    modules&#x3D;{[Pagination]}
                    pagination&#x3D;{{
                      clickable: true,
                      el: &quot;.spds3&quot;,
                    }}
                  &gt;
                    &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot;&gt;
                      &lt;p&gt;
                        Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                        venenatis vestibulum. Aenean eu leo quam. Pellentesque
                        ornare sem lacinia quam venenatis vestibulum. Nullam id
                        dolor id nibh ultricies vehicula ut id elit. Cum sociis
                        natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Cras mattis consectetur purus
                        sit amet fermentum. Maecenas faucibus mollis interdum.
                      &lt;&#x2F;p&gt;
                    &lt;&#x2F;SwiperSlide&gt;
                    {&#x2F;*&#x2F;.swiper-slide *&#x2F;}
                    &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot;&gt;
                      &lt;p&gt;
                        Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                        venenatis vestibulum. Aenean eu leo quam. Pellentesque
                        ornare sem lacinia quam venenatis vestibulum. Nullam id
                        dolor id nibh ultricies vehicula ut id elit. Cum sociis
                        natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Cras mattis consectetur purus
                        sit amet fermentum. Maecenas faucibus mollis interdum.
                      &lt;&#x2F;p&gt;
                    &lt;&#x2F;SwiperSlide&gt;
                    {&#x2F;*&#x2F;.swiper-slide *&#x2F;}
                    &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot;&gt;
                      &lt;p&gt;
                        Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                        venenatis vestibulum. Aenean eu leo quam. Pellentesque
                        ornare sem lacinia quam venenatis vestibulum. Nullam id
                        dolor id nibh ultricies vehicula ut id elit. Cum sociis
                        natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Cras mattis consectetur purus
                        sit amet fermentum. Maecenas faucibus mollis interdum.
                      &lt;&#x2F;p&gt;
                    &lt;&#x2F;SwiperSlide&gt;
                    {&#x2F;*&#x2F;.swiper-slide *&#x2F;}

                    {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
                  &lt;&#x2F;Swiper&gt;
                  &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
                    &lt;div className&#x3D;&quot;swiper-pagination spds3&quot;&gt;&lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.swiper *&#x2F;}
                &lt;&#x2F;div&gt;`}
              />
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-4" className="wrapper pt-24">
            <h2 className="!mb-3 !leading-[1.35]">Image Slider</h2>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium">
              Remove <code className="code">.dots-over</code> class to move
              bullets below the images.
            </p>
            <p className="lead !mb-3">
              Use any available <code className="code">.m-*</code>,{" "}
              <code className="code">.p-*</code>,{" "}
              <code className="code">.bg-*</code> and{" "}
              <code className="code">.text-*</code> helper class to style and
              place the captions. You can change their placement with the help
              of flex classes as well.
            </p>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium">
              Use{" "}
              <a
                href="https://animate.style"
                className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                target="_blank"
              >
                animate.css
              </a>{" "}
              animation and utility classes to add animations and delays to
              captions.
            </p>
            <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-8">
              For hero slider (slider with fixed height and background cover
              images) with captions example check out{" "}
              <Link
                to={`/demo15`}
                className="external hover:!text-[#3f78e0] !pr-[1.4rem] after:content-['\e906'] after:text-[0.7rem] after:font-Custom"
                target="_blank"
              >
                Demo 15
              </Link>
            </p>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <div className="swiper-container dots-over relative !z-10">
                  {/* import { Swiper, SwiperSlide } from "swiper/react"; */}
                  {/* import { Navigation, Pagination } from "swiper/modules"; */}
                  <Swiper
                    className="swiper"
                    spaceBetween={5}
                    modules={[Navigation, Pagination]}
                    pagination={{
                      clickable: true,
                      el: ".spds4",
                    }}
                    navigation={{
                      prevEl: ".snbps4",
                      nextEl: ".snbns4",
                    }}
                    autoHeight
                  >
                    <SwiperSlide className="swiper-slide bg-overlay bg-overlay-400 rounded">
                      <img
                        alt="image"
                        src="/assets/img/photos/is1.jpg"
                        width="1540"
                        height="1026"
                      />
                      <div className="caption-wrapper p-14">
                        <div className="caption bg-[rgba(255,255,255)] opacity-100 rounded px-4 py-3 !mt-auto animate__animated animate__slideInDown animate__delay-1s">
                          <h5 className="!mb-0">
                            Vivamus sagittis lacus augue
                          </h5>
                        </div>
                        {/*/.caption */}
                      </div>
                      {/*/.caption-wrapper */}
                    </SwiperSlide>
                    {/*/.swiper-slide */}
                    <SwiperSlide className="swiper-slide rounded">
                      <img
                        alt="image"
                        src="/assets/img/photos/is2.jpg"
                        width="1540"
                        height="1000"
                      />
                      <div className="caption-wrapper p-14">
                        <div className="caption bg-[rgba(255,255,255)] opacity-100 rounded px-4 py-3 !mx-auto !mt-auto animate__animated animate__slideInDown animate__delay-1s">
                          <h5 className="!mb-0">
                            Vivamus sagittis lacus augue
                          </h5>
                        </div>
                        {/*/.caption */}
                      </div>
                      {/*/.caption-wrapper */}
                    </SwiperSlide>
                    {/*/.swiper-slide */}
                    <SwiperSlide className="swiper-slide">
                      <img
                        className="rounded-[.4rem]"
                        alt="image"
                        src="/assets/img/photos/is3.jpg"
                        width="1540"
                        height="990"
                      />
                    </SwiperSlide>

                    {/*/.swiper-wrapper */}
                  </Swiper>
                  <div className="swiper-controls">
                    <div className="swiper-navigation">
                      <div className="swiper-button swiper-button-prev snbps4"></div>
                      <div className="swiper-button swiper-button-next snbns4"></div>
                    </div>
                    <div className="swiper-pagination spds4"></div>
                  </div>
                  {/* /.swiper */}
                </div>
                {/* /.swiper-container */}
              </div>
              <CodeSnippet
                paddingClass="pb-10 xl:pb-14 lg:pb-14 md:pb-14"
                code={`     &lt;div className&#x3D;&quot;swiper-container dots-over relative !z-10&quot;&gt;
                {&#x2F;* import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;; *&#x2F;}
                {&#x2F;* import { Navigation, Pagination } from &quot;swiper&#x2F;modules&quot;; *&#x2F;}
                  &lt;Swiper
                    className&#x3D;&quot;swiper&quot;
                    spaceBetween&#x3D;{5}
                    modules&#x3D;{[Navigation, Pagination]}
                    pagination&#x3D;{{
                      clickable: true,
                      el: &quot;.spds4&quot;,
                    }}
                    navigation&#x3D;{{
                      prevEl: &quot;.snbps4&quot;,
                      nextEl: &quot;.snbns4&quot;,
                    }}
                    autoHeight
                  &gt;
                    &lt;SwiperSlide className&#x3D;&quot;swiper-slide bg-overlay bg-overlay-400 rounded&quot;&gt;
                      &lt;img
                        alt&#x3D;&quot;image&quot;
                        src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;is1.jpg&quot;
                        width&#x3D;&quot;1540&quot;
                        height&#x3D;&quot;1026&quot;
                      &#x2F;&gt;
                      &lt;div className&#x3D;&quot;caption-wrapper p-14&quot;&gt;
                        &lt;div className&#x3D;&quot;caption bg-[rgba(255,255,255)] opacity-100 rounded px-4 py-3 !mt-auto animate__animated animate__slideInDown animate__delay-1s&quot;&gt;
                          &lt;h5 className&#x3D;&quot;!mb-0&quot;&gt;
                            Vivamus sagittis lacus augue
                          &lt;&#x2F;h5&gt;
                        &lt;&#x2F;div&gt;
                        {&#x2F;*&#x2F;.caption *&#x2F;}
                      &lt;&#x2F;div&gt;
                      {&#x2F;*&#x2F;.caption-wrapper *&#x2F;}
                    &lt;&#x2F;SwiperSlide&gt;
                    {&#x2F;*&#x2F;.swiper-slide *&#x2F;}
                    &lt;SwiperSlide className&#x3D;&quot;swiper-slide rounded&quot;&gt;
                      &lt;img
                        alt&#x3D;&quot;image&quot;
                        src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;is2.jpg&quot;
                        width&#x3D;&quot;1540&quot;
                        height&#x3D;&quot;1000&quot;
                      &#x2F;&gt;
                      &lt;div className&#x3D;&quot;caption-wrapper p-14&quot;&gt;
                        &lt;div className&#x3D;&quot;caption bg-[rgba(255,255,255)] opacity-100 rounded px-4 py-3 !mx-auto !mt-auto animate__animated animate__slideInDown animate__delay-1s&quot;&gt;
                          &lt;h5 className&#x3D;&quot;!mb-0&quot;&gt;
                            Vivamus sagittis lacus augue
                          &lt;&#x2F;h5&gt;
                        &lt;&#x2F;div&gt;
                        {&#x2F;*&#x2F;.caption *&#x2F;}
                      &lt;&#x2F;div&gt;
                      {&#x2F;*&#x2F;.caption-wrapper *&#x2F;}
                    &lt;&#x2F;SwiperSlide&gt;
                    {&#x2F;*&#x2F;.swiper-slide *&#x2F;}
                    &lt;SwiperSlide className&#x3D;&quot;swiper-slide&quot;&gt;
                      &lt;img
                        className&#x3D;&quot;rounded-[.4rem]&quot;
                        alt&#x3D;&quot;image&quot;
                        src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;is3.jpg&quot;
                        width&#x3D;&quot;1540&quot;
                        height&#x3D;&quot;990&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;SwiperSlide&gt;

                    {&#x2F;*&#x2F;.swiper-wrapper *&#x2F;}
                  &lt;&#x2F;Swiper&gt;
                  &lt;div className&#x3D;&quot;swiper-controls&quot;&gt;
                    &lt;div className&#x3D;&quot;swiper-navigation&quot;&gt;
                      &lt;div className&#x3D;&quot;swiper-button swiper-button-prev snbps4&quot;&gt;&lt;&#x2F;div&gt;
                      &lt;div className&#x3D;&quot;swiper-button swiper-button-next snbns4&quot;&gt;&lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                    &lt;div className&#x3D;&quot;swiper-pagination spds4&quot;&gt;&lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  {&#x2F;* &#x2F;.swiper *&#x2F;}
                &lt;&#x2F;div&gt;`}
              />
            </div>
            {/*/.card */}
          </section>
          <section id="snippet-5" className="wrapper pt-24">
            <h2 className="!mb-5 !leading-[1.35]">Thumbnail Slider</h2>
            <div className="card">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <Slider />
                {/* /.swiper-container */}
              </div>
              {/*/.card-body */}
              <CodeSnippet
                paddingClass="pb-10 xl:pb-14 lg:pb-14 md:pb-14"
                code={`


import { useState } from &quot;react&quot;;
import { Gallery, Item } from &quot;react-photoswipe-gallery&quot;;
import { Thumbs } from &quot;swiper&#x2F;modules&quot;;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;react&quot;;

const images &#x3D; [
  {
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;shs1.jpg&quot;,
    srcSet: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;shs1@2x.jpg 2x&quot;,
  },
  {
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;shs2.jpg&quot;,
    srcSet: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;shs2@2x.jpg 2x&quot;,
  },
  {
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;shs3.jpg&quot;,
    srcSet: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;shs3@2x.jpg 2x&quot;,
  },
  {
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;shs4.jpg&quot;,
    srcSet: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;shs4@2x.jpg 2x&quot;,
  },
];

export default function Slider({ firstImage &#x3D; &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;shs1.jpg&quot; }) {
  images[0].src &#x3D; firstImage;
  const [thumbSwiper, setThumbSwiper] &#x3D; useState(null);
  return (
    &lt;Gallery&gt;
      &lt;div
        className&#x3D;&quot;swiper-container swiper-thumbs-container&quot;
        data-margin&#x3D;&quot;10&quot;
        data-dots&#x3D;&quot;false&quot;
        data-nav&#x3D;&quot;true&quot;
        data-thumbs&#x3D;&quot;true&quot;
      &gt;
        &lt;Swiper
          modules&#x3D;{[Thumbs]}
          thumbs&#x3D;{{ swiper: thumbSwiper }}
          spaceBetween&#x3D;{10}
          className&#x3D;&quot;swiper&quot;
        &gt;
          {images.map((image, index) &#x3D;&gt; (
            &lt;SwiperSlide className&#x3D;&quot;swiper-slide group&quot; key&#x3D;{index}&gt;
              &lt;Item
                original&#x3D;{image.src}
                thumbnail&#x3D;{image.src}
                width&#x3D;&quot;610&quot;
                height&#x3D;&quot;655&quot;
              &gt;
                {({ ref, open }) &#x3D;&gt; (
                  &lt;figure className&#x3D;&quot;rounded-[0.4rem]&quot;&gt;
                    &lt;img
                      ref&#x3D;{ref}
                      className&#x3D;&quot;rounded-[0.4rem]&quot;
                      srcSet&#x3D;{image.srcSet}
                      alt&#x3D;&quot;image&quot;
                      src&#x3D;{image.src}
                      width&#x3D;&quot;610&quot;
                      height&#x3D;&quot;655&quot;
                    &#x2F;&gt;
                    &lt;a
                      className&#x3D;&quot;item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]&quot;
                      onClick&#x3D;{open}
                      data-gallery&#x3D;&quot;product-group&quot;
                    &gt;
                      &lt;i className&#x3D;&quot;uil uil-focus-add before:content-[&#39;\eb22&#39;]&quot;&gt;&lt;&#x2F;i&gt;
                    &lt;&#x2F;a&gt;
                  &lt;&#x2F;figure&gt;
                )}
              &lt;&#x2F;Item&gt;
            &lt;&#x2F;SwiperSlide&gt;
          ))}

          {&#x2F;* &lt;!--&#x2F;.swiper-wrapper --&gt; *&#x2F;}
        &lt;&#x2F;Swiper&gt;
        {&#x2F;* &lt;!-- &#x2F;.swiper --&gt; *&#x2F;}

        &lt;Swiper
          className&#x3D;&quot;swiper swiper-thumbs&quot;
          slidesPerView&#x3D;{5}
          spaceBetween&#x3D;{10}
          modules&#x3D;{[Thumbs]}
          onSwiper&#x3D;{setThumbSwiper}
        &gt;
          {images.map((image, index) &#x3D;&gt; (
            &lt;SwiperSlide key&#x3D;{index} className&#x3D;&quot;swiper-slide&quot;&gt;
              &lt;img
                srcSet&#x3D;{image.srcSet}
                className&#x3D;&quot;rounded-[.4rem]&quot;
                alt&#x3D;&quot;image&quot;
                src&#x3D;{image.src}
                width&#x3D;&quot;114&quot;
                height&#x3D;&quot;120&quot;
              &#x2F;&gt;
            &lt;&#x2F;SwiperSlide&gt;
          ))}

          {&#x2F;* &lt;!--&#x2F;.swiper-wrapper --&gt; *&#x2F;}
        &lt;&#x2F;Swiper&gt;
        {&#x2F;* &lt;!-- &#x2F;.swiper --&gt; *&#x2F;}
      &lt;&#x2F;div&gt;{&quot; &quot;}
    &lt;&#x2F;Gallery&gt;
  );
}`}
              />
              {/*/.card-footer */}
            </div>
            {/*/.card */}
          </section>
          <section id="instructions" className="wrapper py-24">
            {/*/.card */}
          </section>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
    </div>
  );
}
