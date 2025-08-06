import { projects3 } from "@/data/projects";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="overflow-hidden">
      <div className="container pb-9 xl:pb-[4.5rem] lg:pb-[4.5rem] md:pb-[4.5rem]">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
            <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-bold !mb-8">
              Our Recent Projects
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="swiper-container grid-view nav-bottom nav-color !mb-[4.5rem] !relative z-10">
          <Swiper
            className="swiper overflow-visible"
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              575: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            modules={[Navigation]}
            navigation={{
              prevEl: ".snbp40",
              nextEl: ".snbn40",
            }}
          >
            {projects3.map((slide, index) => (
              <SwiperSlide className="swiper-slide group" key={index}>
                <figure className="rounded-[0.4rem]">
                  <img
                    className="rounded-[0.4rem]"
                    alt="image"
                    src={slide.src}
                    width={slide.width}
                    height={slide.height}
                  />
                  <Link
                    className="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-[ease-in-out] opacity-0 !text-white shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-base flex items-center justify-center rounded-[100%] right-0 bottom-4 !bg-[rgba(116,126,209,.9)] group-hover:opacity-100 group-hover:right-4 hover:!bg-[#747ed1]"
                    to={`/single-project`}
                  >
                    <i className="uil uil-link before:content-['\ebcd']" />
                  </Link>
                </figure>
              </SwiperSlide>
            ))}

            {/*/.swiper-wrapper */}
          </Swiper>
          <div className="swiper-controls">
            <div className="swiper-navigation">
              <div className="swiper-button swiper-button-prev snbp40"></div>
              <div className="swiper-button swiper-button-next snbn40"></div>
            </div>
          </div>
          {/*/.swiper */}
        </div>
        {/* /.swiper-container */}
      </div>
      {/* /.container */}
    </div>
  );
}
