import { projects } from "@/data/projects";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export default function Demos() {
  return (
    <div className="container-fluid xl:!px-0 pt-24 xl:pt-32 lg:pt-32 md:pt-32 pb-32 xl:pb-40 lg:pb-40 md:pb-40">
      <div className="swiper-container swiper-auto nav-color nav-bottom nav-far relative !z-10">
        <Swiper
          className="swiper overflow-visible"
          spaceBetween={40}
          slidesPerView={"auto"}
          centeredSlides
          modules={[Navigation]}
          navigation={{
            prevEl: ".snbp35",
            nextEl: ".snbn35",
          }}
          loop
          initialSlide={1}
        >
          {projects.map((slide, index) => (
            <SwiperSlide className="swiper-slide group" key={index}>
              <figure className="rounded-[0.8rem] shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px]">
                <img
                  className="!rounded-[0.8rem]"
                  srcSet={slide.srcSet}
                  alt={slide.alt}
                  src={slide.src}
                  width={slide.width}
                  height={slide.height}
                />
                <Link
                  className="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-[ease-in-out] opacity-0 !text-white shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-base flex items-center justify-center rounded-[100%] right-0 bottom-4 !bg-[rgba(96,93,186,.9)] group-hover:opacity-100 group-hover:right-4"
                  to={`/single-project`} // Link added directly here
                >
                  <i className="uil uil-arrow-up-right before:content-['\e950']" />
                </Link>
              </figure>
            </SwiperSlide>
          ))}
          {/*/.swiper-wrapper */}
        </Swiper>
        <div className="swiper-controls">
          <div className="swiper-navigation">
            <div className="swiper-button swiper-button-prev snbp35"></div>
            <div className="swiper-button swiper-button-next snbn35"></div>
          </div>
        </div>
        {/* /.swiper */}
      </div>
      {/* /.swiper-container */}
    </div>
  );
}
