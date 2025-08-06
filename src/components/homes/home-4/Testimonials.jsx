import { testimonials } from "@/data/testimonials";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-5">
      <div
        className="swiper-container dots-closer !mb-6"
        data-margin={30}
        data-dots="true"
      >
        <Swiper
          className="swiper"
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd37",
          }}
        >
          {testimonials.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <blockquote className="icon icon-top text-[1rem] !text-center relative pt-[3.75rem] p-0 border-0 !leading-[1.7] font-medium m-[0_0_1rem] before:translate-x-[-52%] before:left-2/4 before:content-['\201c'] before:!text-[#aab0bc] before:opacity-30 before:text-[6.5rem] before:font-normal before:absolute before:leading-none before:z-[1] before:top-0">
                <p>“{elm.quote}”</p>
                <div className="flex items-center justify-center !text-center">
                  <div className="info !pl-0">
                    <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                      {elm.name}
                    </h5>
                    <p className="!mb-0 !text-[.8rem]">{elm.title}</p>
                  </div>
                </div>
              </blockquote>
            </SwiperSlide>
          ))}

          {/*/.swiper-wrapper */}
        </Swiper>
        <div className="swiper-controls">
          <div className="swiper-pagination spd37"></div>
        </div>
        {/*/.swiper */}
      </div>
      {/* /.swiper-container */}
    </div>
  );
}
