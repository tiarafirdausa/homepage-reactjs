import { blogPosts3 } from "@/data/blogs";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className="swiper-container blog grid-view !mb-24 relative z-10">
      <Swiper
        className="swiper"
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: ".spd30",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          575: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 2,
          },
        }}
      >
        {blogPosts3.map((slide, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <figure className="overlay caption caption-overlay rounded !mb-0">
              <a href="#">
                <img
                  alt={slide.alt}
                  src={slide.src}
                  width={slide.width}
                  height={slide.height}
                />
              </a>
              <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                <span className="badge badge-lg bg-[rgba(255,255,255)] opacity-100 uppercase !mb-3">
                  {slide.badge}
                </span>
                <h2 className="post-title h3 !mt-1 !mb-3">
                  <Link
                    className="text-[#aab0bc] hover:!text-[#d16b86]"
                    to={`/blog-post`}
                  >
                    {slide.title}
                  </Link>
                </h2>
                <ul className="!text-[0.75rem] !text-[#aab0bc] m-0 p-0 list-none !mb-0">
                  <li className="post-date inline-block">
                    <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                    <span>{slide.date}</span>
                  </li>
                  <li className="post-author inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                    <a
                      className="!text-[#aab0bc] hover:!text-[#d16b86] hover:!border-[#d16b86]"
                      href="#"
                    >
                      <i className="uil uil-user pr-[0.2rem] align-[-.05rem] before:content-['\ed6f']" />
                      <span>By {slide.author}</span>
                    </a>
                  </li>
                  <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                    <a
                      className="!text-[#aab0bc] hover:!text-[#d16b86] hover:!border-[#d16b86]"
                      href="#"
                    >
                      <i className="uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-['\ea54']" />
                      {slide.commentsCount}
                      <span> Comments</span>
                    </a>
                  </li>
                </ul>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}

        {/*/.swiper-wrapper */}
      </Swiper>
      <div className="swiper-controls">
        <div className="swiper-pagination spd30"></div>
      </div>
      {/* /.swiper */}
    </div>
  );
}
