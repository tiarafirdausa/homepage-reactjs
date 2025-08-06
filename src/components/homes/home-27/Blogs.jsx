import { blogPosts } from "@/data/blogs";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <section className="wrapper bg-[rgba(255,255,255)] opacity-100">
      <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="lg:w-10/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
              Case Studies
            </h2>
            <h3 className="xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] !tracking-[-0.03em] !mb-10">
              Our awesome projects with creative ideas and great design.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="swiper-container blog grid-view !mb-10 relative z-10">
          <Swiper
            className="swiper"
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".spd31",
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
            {blogPosts.map((blog, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <article>
                  <figure className="overlay overlay-1 hover-scale rounded !mb-6 group">
                    <a href="#">
                      <img
                        className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                        alt="image"
                        src={blog.imageUrl}
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
                  <div className="post-header">
                    <h2 className="post-title h3 !mb-3 !text-[1.1rem] !leading-[1.4]">
                      <Link
                        className="!text-[#343f52] hover:!text-[#343f52]"
                        to={`/blog-post`}
                      >
                        {blog.title}
                      </Link>
                    </h2>
                  </div>
                  {/* /.post-header */}
                  <div className="post-footer">
                    <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none">
                      <li className="post-date inline-block">
                        <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                        <span>{blog.date}</span>
                      </li>
                      <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:mx-[0.6rem] before:my-0 before:rounded-[100%] before:bg-[#aab0bc] before:align-[0.15rem] !text-[.7rem]">
                        <a
                          className="!text-[#aab0bc] hover:!text-[#343f52]"
                          href="#"
                        >
                          <i className="uil uil-file-alt !text-[.75rem] pr-[0.2rem] align-[-.05rem] before:content-['\eaec']" />
                          {blog.category}
                        </a>
                      </li>
                    </ul>
                    {/* /.post-meta */}
                  </div>
                  {/* /.post-footer */}
                </article>
                {/* /article */}
              </SwiperSlide>
            ))}

            {/* /.swiper-wrapper */}
          </Swiper>
          <div className="swiper-controls">
            <div className="swiper-pagination spd31"></div>
          </div>
          {/* /.swiper */}
        </div>
        {/* /.swiper-container */}
      </div>
      {/* /.container */}
    </section>
  );
}
