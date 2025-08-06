import { testimonials } from "@/data/testimonials";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <div
      className="swiper-container dots-closer !mb-6 relative !z-10"
      data-margin={30}
      data-dots="true"
    >
      <Swiper
        className="swiper"
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: ".spd12",
        }}
        spaceBetween={30}
      >
        {testimonials.map((elm, i) => (
          <SwiperSlide key={i} className="swiper-slide !text-center">
            <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mt-4 !mb-3" />
            <blockquote className="border-0 text-[1.05rem] !text-center !mb-[20px]">
              <p>“{elm.quote}”</p>
              <div className="flex items-center justify-center !text-center">
                <div className="info !pl-0">
                  <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                    {elm.name}
                  </h5>
                  <p className="!mb-0 text-[.85rem]">{elm.title}</p>
                </div>
              </div>
            </blockquote>
          </SwiperSlide>
        ))}

        {/*/.swiper-wrapper */}
      </Swiper>
      <div className="swiper-controls">
        <div className="swiper-pagination spd12"></div>
      </div>
      {/* /.swiper */}
    </div>
  );
}
