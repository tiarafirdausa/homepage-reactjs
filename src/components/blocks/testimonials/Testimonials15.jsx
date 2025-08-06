import { testimonials3 } from "@/data/testimonials";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials15() {
  return (
    <section id="snippet-15" className="wrapper !bg-[#ffffff] ">
      <div
        className="wrapper image-wrapper bg-image bg-overlay !mb-14 xl:!mb-[4.5rem] lg:!mb-[4.5rem] md:!mb-[4.5rem] bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]"
        style={{ backgroundImage: "url(/assets/img/photos/bg35.jpg)" }}
      >
        <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
          <h2 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-4 !text-center !text-white">
            Happy Customers
          </h2>
          <div className="swiper-container dots-closer dots-light dots-light-75">
            <Swiper
              className="swiper"
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spdt15",
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
                  slidesPerView: 3,
                },
              }}
            >
              {testimonials3.map((elm, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <div className="item-inner">
                    <div className="card border-0 !bg-[rgba(255,255,255,.9)]">
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3" />
                        <blockquote className="!text-[0.85rem] !leading-[1.7] font-medium m-[0_0_1rem] !mb-0">
                          <p>“{elm.quote}”</p>
                          <div className="flex items-center text-left">
                            <div className="info p-0">
                              <h5 className="!mb-0">{elm.name}</h5>
                              <p className="!mb-0 text-[0.8rem]">{elm.role}</p>
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

              {/*/.swiper-wrapper */}
            </Swiper>
            <div className="swiper-controls">
              <div className="swiper-pagination spdt15"></div>
            </div>
            {/* /.swiper */}
          </div>
          {/* /.swiper-container */}
        </div>
        {/* /.container */}
      </div>
      {/* /.wrapper */}

      {/* /.container */}
    </section>
  );
}
