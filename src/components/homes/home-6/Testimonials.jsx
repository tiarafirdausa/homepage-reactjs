import { testimonials3 } from "@/data/testimonials";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-8/12 lg:!ml-[16.66666667%] xl:w-8/12 xl:!ml-[16.66666667%] w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
            <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
              Happy Customers
            </h2>
            <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-bold !mb-6 xl:!px-10 xxl:!px-20">
              Don't take our word for it. See what customers are saying about
              us.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div data-cue="fadeIn">
          <div className="swiper-container dots-closer !mb-6">
            <Swiper
              spaceBetween={0}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd38",
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
              className="swiper"
            >
              {testimonials3.map((slide) => (
                <SwiperSlide className="swiper-slide" key={slide.id}>
                  <div className="item-inner">
                    <div className="card">
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3" />
                        <blockquote className="!text-[.9rem] !leading-[1.7] font-medium !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                          <p>{slide.quote}</p>
                          <div className="flex items-center text-left">
                            <img
                              className="!rounded-[50%] !w-[3.5rem]"
                              srcSet={slide.avatarSrcSet}
                              alt="image"
                              src={slide.avatarSrc}
                              width={100}
                              height={100}
                            />
                            <div className="info !pl-4">
                              <h5 className="!mb-0 !text-[0.95rem] !leading-[1.5]">
                                {slide.name}
                              </h5>
                              <p className="!mb-0 !text-[.85rem]">
                                {slide.role}
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card */}
                  </div>
                  {/* /.item-inner */}
                </SwiperSlide>
              ))}
              {/* /.swiper-wrapper */}
            </Swiper>
            <div className="swiper-controls">
              <div className="swiper-pagination spd38"></div>
            </div>
            {/* /.swiper */}
          </div>
          {/* /.swiper-container */}
        </div>
        {/* /div */}
      </div>
      {/* /.container */}
    </section>
  );
}
