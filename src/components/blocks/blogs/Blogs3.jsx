import { blogPosts } from "@/data/blogs";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export default function Blogs3() {
  return (
    <section id="snippet-3" className="wrapper !bg-[#ffffff] ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <h2 className="!text-[.75rem] !leading-[1.35] uppercase !text-[#3f78e0] !text-center">
              Our News
            </h2>
            <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-6 !text-center">
              Here are the latest company news from our blog that got the most
              attention.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="!relative">
          <div
            className="shape bg-dot primary rellax !w-[7rem] !h-[10rem] !absolute z-[1] opacity-50 !bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)]"
            data-rellax-speed={1}
            style={{ top: 0, left: "-1.7rem" }}
          />
          <div className="swiper-container dots-closer blog grid-view !mb-6">
            <Swiper
              className="swiper"
              spaceBetween={0}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd5",
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
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {blogPosts.map((post, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="item-inner">
                    <article>
                      <div className="card">
                        <figure className="card-img-top overlay overlay-1 hover-scale group">
                          <a href="#">
                            <img
                              className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                              alt="image"
                              src={post.imageUrl}
                              width={560}
                              height={350}
                            />
                          </a>
                          <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                            <h5 className="from-top !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                              Read More
                            </h5>
                          </figcaption>
                        </figure>
                        <div className="card-body flex-[1_1_auto] !p-[1.75rem_1.75rem_1rem_1.75rem] max-md:!p-[40px_40px_20px]">
                          <div className="post-header">
                            <h2 className="post-title h3 !mt-1 !mb-3">
                              <Link
                                className="!text-[#343f52] hover:!text-[#747ed1]"
                                to={`/blog-post`} // Added directly in JSX
                              >
                                {post.title}
                              </Link>
                            </h2>
                          </div>
                          {/* /.post-header */}
                          <div className="!relative">
                            <p>{post.content}</p>
                          </div>
                          {/* /.post-content */}
                        </div>
                        {/*/.card-body */}
                        <div className="card-footer xl:!p-[1.25rem_1.75rem_1.25rem] lg:!p-[1.25rem_1.75rem_1.25rem] md:!p-[1.25rem_1.75rem_1.25rem] max-md:!p-[0.9rem_2rem]">
                          <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none flex !mb-0">
                            <li className="post-date inline-block">
                              <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                              <span>{post.date}</span>
                            </li>
                            <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                              <a
                                className="!text-[#aab0bc] hover:!text-[#747ed1] hover:!border-[#747ed1]"
                                href="#"
                              >
                                <i className="uil uil-file-alt !text-[.75rem] pr-[0.2rem] align-[-.05rem] before:content-['\eaec']" />
                                {post.category}
                              </a>
                            </li>
                          </ul>
                          {/* /.post-meta */}
                        </div>
                        {/* /.card-footer */}
                      </div>
                      {/* /.card */}
                    </article>
                    {/* /article */}
                  </div>
                  {/* /.item-inner */}
                </SwiperSlide>
              ))}

              {/*/.swiper-wrapper */}
            </Swiper>
            <div className="swiper-controls">
              <div className="swiper-pagination spd5 "></div>
            </div>
            {/* /.swiper */}
          </div>
          {/* /.swiper-container */}
        </div>
        {/* /.relative */}
      </div>
    </section>
  );
}
