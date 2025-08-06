import { testimonials6 } from "@/data/testimonials";

import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials5() {
  return (
    <section id="snippet-5" className="wrapper !bg-[#ffffff] ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3 !text-center">
          Happy Customers
        </h2>
        <p className="lead text-[0.9rem] font-medium !leading-[1.65] !text-center !mb-6 md:!px-24 lg:!px-0">
          Customer satisfaction is our major goal. See what our customers are
          saying about us.
        </p>
        <div className="!relative">
          <div
            className="shape !rounded-[50%] !bg-[#fff8ee] rellax !w-[6rem] !h-[6rem] absolute z-[1]"
            data-rellax-speed={1}
            style={{ bottom: "0.5rem", right: "-1.7rem" }}
          />
          <div
            className="shape bg-dot primary rellax !w-[6rem] !h-[6rem] bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] absolute z-[1] opacity-50"
            data-rellax-speed={1}
            style={{ top: "-1rem", left: "-1.7rem" }}
          />
          <div className="swiper-container dots-closer !mb-6 relative z-10">
            <Swiper
              className="swiper"
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
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spdt5",
              }}
            >
              {testimonials6.map((testimonial) => (
                <SwiperSlide className="swiper-slide" key={testimonial.id}>
                  <div className="item-inner">
                    <div className="card">
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <blockquote className="!text-[0.85rem] !leading-[1.7] font-medium !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                          <p>“{testimonial.quote}”</p>
                          <div className="flex items-center text-left">
                            <img
                              className="!rounded-[50%] !w-[3.5rem]"
                              srcSet={testimonial.imageSrcSet}
                              alt="image"
                              src={testimonial.imageSrc}
                              width="100"
                              height="100"
                            />
                            <div className="info !pl-4">
                              <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                {testimonial.name}
                              </h5>
                              <p className="!mb-0 text-[.85rem]">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/* /.card */}
                  </div>
                  {/* /.item-inner */}
                </SwiperSlide>
              ))}

              {/*/.swiper-wrapper */}
            </Swiper>
            <div className="swiper-controls">
              <div className="swiper-pagination spdt5"></div>
            </div>
            {/* /.swiper */}
          </div>
          {/* /.swiper-container */}
        </div>
        {/* /.relative */}
      </div>
      {/* /.container */}

      {/* /.container */}
    </section>
  );
}
