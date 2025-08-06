import { testimonials } from "@/data/testimonials";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <div
      className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mt-[-8rem] xl:!mt-[-17.5rem] lg:!mt-[-17.5rem] md:!mt-[-17.5rem] !mb-[4.5rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem]"
      data-cue="slideInDown"
    >
      <div className="flex flex-wrap mx-0">
        <div
          className="lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] max-w-full image-wrapper bg-image rounded-t-[0.4rem] rounded-lg-start bg-cover bg-[center_center] bg-no-repeat bg-scroll relative z-0 xl:rounded-tl-[0.4rem] xl:rounded-tr-none xl:rounded-br-none xl:rounded-bl-[0.4rem] lg:rounded-tl-[0.4rem] lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-[0.4rem] md:min-h-[25rem] max-md:min-h-[25rem]"
          style={{
            backgroundImage: "url(/assets/img/photos/tm1.jpg)",
          }}
        />
        {/*/column */}
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full">
          <div className="!p-10 md:!p-12 xl:!p-[4rem] lg:!p-[4rem]">
            <div className="swiper-container dots-closer !mb-6">
              <Swiper
                className="swiper"
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                  el: ".spt1",
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <blockquote className="icon icon-top text-[1rem] !text-center relative pt-[3.75rem] p-0 border-0 !leading-[1.7] font-medium m-[0_0_1rem] before:translate-x-[-52%] before:left-2/4 before:content-['\201c'] before:!text-[#aab0bc] before:opacity-30 before:text-[6.5rem] before:font-normal before:absolute before:leading-none before:z-[1] before:top-0">
                      <p>{testimonial.quote}</p>
                      <div className="flex items-center justify-center !text-center">
                        <div className="info !pl-0">
                          <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                            {testimonial.name}
                          </h5>
                          <p className="!mb-0 text-[.85rem]">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </blockquote>
                  </SwiperSlide>
                ))}
                {/*/.swiper-slide */}

                {/*/.swiper-wrapper */}
              </Swiper>
              <div className="swiper-controls">
                <div className="swiper-pagination spt1"></div>
              </div>
              {/* /.swiper */}
            </div>
            {/* /.swiper-container */}
          </div>
          {/*/div */}
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
    </div>
  );
}
