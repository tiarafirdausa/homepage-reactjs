import { testimonials2 } from "@/data/testimonials";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <div className="flex flex-wrap mx-[-15px] !text-center">
      <div className="xl:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
        <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] xl:!mt-[-6rem] lg:!mt-[-6rem] md:!mt-[-6rem] !mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
          <div className="card-body p-9 xl:!p-14">
            <div className="flex flex-wrap mx-0">
              <div className="xxl:w-9/12 w-full flex-[0_0_auto] max-w-full !mx-auto">
                <div className="swiper-container dots-closer !mb-6 relative z-10">
                  <Swiper
                    modules={[Pagination]}
                    pagination={{
                      clickable: true,
                      el: ".spt3",
                    }}
                    className="swiper"
                  >
                    {testimonials2.map((testimonial, index) => (
                      <SwiperSlide className="swiper-slide" key={index}>
                        <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3" />
                        <blockquote className="!border-0 text-[1rem] !mb-2">
                          <p>{testimonial.quote}</p>
                          <div className="flex items-center text-left justify-center">
                            <img
                              className="!rounded-[50%] !w-[3.5rem]"
                              srcSet={testimonial.imageSrcSet}
                              alt="image"
                              src={testimonial.imageSrc}
                              width={100}
                              height={100}
                            />
                            <div className="info !pl-4">
                              <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                {testimonial.name}
                              </h5>
                              <p className="!mb-0 text-[.8rem]">
                                {testimonial.title}
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </SwiperSlide>
                    ))}
                    {/*/.swiper-wrapper */}
                  </Swiper>
                  {/*/.swiper */}{" "}
                  <div className="swiper-controls">
                    <div className="swiper-pagination spt3"></div>
                  </div>
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
  );
}
