import { slidesData } from "@/data/testimonials";
import React from "react";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <div className="container py-[4.5rem] xl:!py-28 lg:!py-28 md:!py-28">
      <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-5 !text-white !text-center">
        Happy Customers
      </h2>
      <div className="flex flex-wrap mx-[-15px]">
        <div
          className="md:w-10/12 lg:w-8/12 xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto"
          data-cue="fadeIn"
        >
          <div className="swiper-container dots-light dots-closer !text-center !mb-6">
            <Swiper
              spaceBetween={30}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd6",
              }}
              className="swiper"
            >
              {slidesData.map((slide) => (
                <SwiperSlide className="swiper-slide" key={slide.id}>
                  <blockquote className="!pl-0 text-[1rem] !mb-0 border-0 !leading-[1.7] font-medium m-[0_0_1rem]">
                    <p>{slide.quote}</p>
                    <div className="flex items-center text-left justify-center">
                      <img
                        className="!rounded-[50%] !w-[3.5rem]"
                        srcSet={slide.imageSrcSet}
                        alt="image"
                        src={slide.imageSrc}
                        width={100}
                        height={100}
                      />
                      <div className="info !pl-4">
                        <h6 className="!mb-1 !text-white !leading-[1.55]">
                          {slide.name}
                        </h6>
                        <p className="!mb-0 text-[.8rem]">{slide.role}</p>
                      </div>
                    </div>
                  </blockquote>
                </SwiperSlide>
              ))}

              {/*/.swiper-wrapper */}
            </Swiper>
            <div className="swiper-controls">
              <div className="swiper-pagination spd6"></div>
            </div>
            {/*/.swiper */}
          </div>
          {/* /.swiper-container */}
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
    </div>
  );
}
