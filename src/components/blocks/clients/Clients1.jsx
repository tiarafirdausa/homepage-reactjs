import { brands } from "@/data/brands";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Clients1() {
  return (
    <section id="snippet-1" className="wrapper !bg-[#ffffff] ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <p className="text-center !mb-8">
          Trusted by over 2K+ clients across the world
        </p>
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
        {/* /.swiper-container */}
      </div>
      {/* /.container */}

      {/* /.container */}
    </section>
  );
}
