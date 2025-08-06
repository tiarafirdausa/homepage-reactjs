import { testimonials } from "@/data/testimonials";
import React from "react";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials11() {
  return (
    <section id="snippet-11" className="wrapper !bg-[#ffffff] ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px] !text-white !text-center">
          <div className="xl:w-10/12 flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-[4.5rem] xl:!mb-[-1.5rem] lg:!mb-[-1.5rem]">
            <div
              className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 [background-size:100%] bg-[center_center] bg-no-repeat !bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:rounded-[0.4rem] before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)]"
              style={{ backgroundImage: "url(/assets/img/photos/bg2.jpg)" }}
            >
              <div className="card-body p-9 xl:!p-14">
                <div className="flex flex-wrap mx-0">
                  <div className="xxl:w-9/12 w-full flex-[0_0_auto] max-w-full !mx-auto">
                    <div
                      className="swiper-container dots-light dots-closer !mb-6 relative z-10"
                      data-margin={30}
                      data-dots="true"
                    >
                      <Swiper
                        className="swiper"
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{
                          clickable: true,
                          el: ".spdt11",
                        }}
                      >
                        {testimonials.map((elm, i) => (
                          <SwiperSlide key={i} className="swiper-slide">
                            <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3" />
                            <blockquote className="!border-0 text-[1rem] !mb-2">
                              <p>“{elm.quote}”</p>
                              <div className="flex items-center justify-center !text-center">
                                <div className="info !pl-0">
                                  <h5 className="!mb-1 !text-white">
                                    {elm.name}
                                  </h5>
                                  <p className="!mb-0 text-[0.8rem]">
                                    {elm.title}
                                  </p>
                                </div>
                              </div>
                            </blockquote>
                          </SwiperSlide>
                        ))}

                        {/*/.swiper-wrapper */}
                      </Swiper>
                      <div className="swiper-controls">
                        <div className="swiper-pagination spdt11"></div>
                      </div>
                      {/* /.swiper */}
                    </div>
                    {/* /.swiper-container */}
                  </div>
                  {/* /column */}
                </div>
                {/* /.row */}
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
    </section>
  );
}
