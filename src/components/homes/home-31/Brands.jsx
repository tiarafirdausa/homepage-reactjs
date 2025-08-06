import { brands } from "@/data/brands";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Brands() {
  return (
    <>
      <h2 className="!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase !text-[#aab0bc] !mb-8 !text-center">
        Trusted by over 5000 clients
      </h2>
      <div className="swiper-container clients !mb-36 relative z-10">
        <Swiper
          spaceBetween={30}
          loop
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
          }}
          breakpoints={{
            0: { slidesPerView: 3 },
            575: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 6,
            },
            1400: {
              slidesPerView: 7,
            },
          }}
          speed={5000}
          className="swiper pointer-events-none ticker"
        >
          {brands.map((image, index) => (
            <SwiperSlide className="swiper-slide px-5" key={index}>
              <img
                className="!w-full !h-auto"
                alt="image"
                src={image.src}
                width={image.width}
                height={image.height}
              />
            </SwiperSlide>
          ))}

          {/*/.swiper-wrapper */}
        </Swiper>
        {/* /.swiper */}
      </div>
    </>
  );
}
