import { brands } from "@/data/brands";
import { testimonials } from "@/data/testimonials";

import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="wrapper bg-[rgba(246,247,249,1)]">
      <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] !mb-20 items-center">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[70px] max-w-full xl:!order-2 lg:!order-2">
            <figure className="m-0 p-0">
              <img
                className="w-auto"
                srcSet="/assets/img/illustrations/i4@2x.png 2x"
                alt="image"
                src="/assets/img/illustrations/i4.png"
                width={800}
                height={533}
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[70px] max-w-full xl:!mt-[4.5rem] lg:!mt-[4.5rem]">
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
                  el: ".spd79",
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
                          <p className="!mb-0 text-[0.8rem]">{elm.title}</p>
                        </div>
                      </div>
                    </blockquote>
                  </SwiperSlide>
                ))}

                {/*/.swiper-wrapper */}
              </Swiper>
              <div className="swiper-controls">
                <div className="swiper-pagination spd79"></div>
              </div>
              {/* /.swiper */}
            </div>
            {/* /.swiper-container */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="xl:!px-5 lg:!px-5">
          <div className="flex flex-wrap mx-0 md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-40px] items-center">
            {brands.slice(0, 6).map((elm, i) => (
              <div
                key={i}
                className="w-4/12 xl:w-2/12 lg:w-2/12 md:w-2/12 flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[40px] max-w-full"
              >
                <figure className="px-5 md:!px-0 lg:!px-2 xl:!px-3 xxl:!px-4">
                  <img
                    alt="image"
                    src={elm.src}
                    width={elm.width}
                    height={elm.height}
                  />
                </figure>
              </div>
            ))}
          </div>
          {/*/.row */}
        </div>
        {/* /div */}
      </div>
      {/* /.container */}
    </section>
  );
}
