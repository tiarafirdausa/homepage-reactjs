import { testimonials } from "@/data/testimonials";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials8() {
  return (
    <section id="snippet-8" className="wrapper !bg-[#ffffff] ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-0 lg:pb-0 md:pb-20">
        <div className="flex flex-wrap mx-[-15px] lg:mx-[-20px] xl:mx-0 items-center">
          <div className="md:w-5/12 lg:w-5/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] lg:!px-[20px] xl:px-0 max-w-full xl:!ml-[8.33333333%] max-lg:!hidden xl:!flex lg:!flex !relative !self-end">
            <div
              className="shape !rounded-[50%] !bg-[#e0e9fa] rellax !w-[12.5rem] !h-[12.5rem] hidden xl:block lg:block z-[1] absolute"
              data-rellax-speed={1}
              style={{ top: "7rem", left: "1rem" }}
            />
            <figure className="relative z-[2]">
              <img
                className="w-full max-w-full !h-auto"
                srcSet="/assets/img/photos/co1@2x.png 2x"
                alt="image"
                src="/assets/img/photos/co1.png"
                width={455}
                height={620}
              />
            </figure>
          </div>
          {/*/column */}
          <div className="md:w-7/12 lg:w-6/12 xl:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] !px-[15px] lg:!px-[20px] xl:px-0 max-w-full xl:!ml-[8.33333333%]">
            <div className="swiper-container dots-start dots-closer xl:!mt-10 lg:!mt-10 md:!mt-10 xl:!mb-20 lg:!mb-20 md:!mb-20 relative !z-10">
              <Swiper
                className="swiper"
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                  el: ".spd8",
                }}
              >
                {testimonials.map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <blockquote className="icon relative p-0 border-0 text-[1rem] !leading-[1.7] font-medium m-[0_0_1rem] before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                      <p>“{elm.quote}”</p>
                      <div className="flex items-center text-left">
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
                <div className="swiper-pagination spd8"></div>
              </div>
              {/* /.swiper */}
            </div>
            {/* /.swiper-container */}
          </div>
          {/*/column */}
        </div>
      </div>
    </section>
  );
}
