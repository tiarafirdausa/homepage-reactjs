import { projects } from "@/data/projects";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Projects() {
  return (
    <div className="swiper-container blog grid-view !mb-[7rem] xl:!mb-[9rem] lg:!mb-[9rem] md:!mb-[9rem]">
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination]}
        pagination={{
          clickable: true,
          el: ".spd19",
        }}
        navigation={{
          prevEl: ".snbp19",
          nextEl: ".snbn19",
        }}
        spaceBetween={30}
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
      >
        {projects.map((image, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <figure className="rounded-[0.4rem]">
              <img
                className="!rounded-[0.4rem]"
                alt={image.alt}
                width={image.width}
                height={image.height}
                src={image.src}
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* /.swiper */}
      <div className="swiper-controls">
        <div className="swiper-navigation">
          <div className="swiper-button swiper-button-prev snbp19"></div>
          <div className="swiper-button swiper-button-next snbn19"></div>
        </div>
        <div className="swiper-pagination spd19"></div>
      </div>
    </div>
  );
}
