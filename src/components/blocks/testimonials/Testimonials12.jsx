import { testimonials6 } from "@/data/testimonials";

import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials12() {
  return (
    <section id="snippet-12" className="wrapper !bg-[#ffffff] ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="md:w-10/12 lg:w-8/12 xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <div
              className="swiper-container dots-closer !text-center !mb-6 relative z-10"
              data-margin={30}
              data-dots="true"
            >
              <Swiper
                className="swiper"
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                  el: ".spdt12",
                }}
              >
                {testimonials6.map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <blockquote className="border-0 !text-[1rem] !leading-[1.7] !font-medium m-[0_0_1rem]">
                      <p>“{elm.quote}”</p>
                      <div className="flex items-center text-left justify-center">
                        <img
                          className="!rounded-[50%] !w-[3.5rem]"
                          src={elm.imageSrc}
                          alt="image"
                          width={100}
                          height={100}
                        />
                        <div className="info !pl-4">
                          <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                            {elm.name}
                          </h5>
                          <p className="!mb-0 text-[.85rem]">{elm.role}</p>
                        </div>
                      </div>
                    </blockquote>
                  </SwiperSlide>
                ))}

                {/*/.swiper-wrapper */}
              </Swiper>
              <div className="swiper-controls">
                <div className="swiper-pagination spdt12"></div>
              </div>
              {/* /.swiper */}
            </div>
            {/* /.swiper-container */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
    </section>
  );
}
