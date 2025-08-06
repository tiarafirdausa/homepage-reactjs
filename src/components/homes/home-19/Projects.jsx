import { slidesData } from "@/data/projects";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Gallery, Item } from "react-photoswipe-gallery";
export default function Projects() {
  return (
    <>
      <div className="flex flex-wrap mx-[-15px] !mt-[7rem]">
        <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
          <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
            Latest Projects
          </h2>
          <h3 className="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold !mb-10">
            Check out some of our awesome projects with{" "}
            <span className="!relative z-[2] after:content-[''] after:absolute after:z-[-1] after:block after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2/4 after:left-2/4 style-2 yellow">
              creative
            </span>{" "}
            ideas and great design.
          </h3>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <Gallery>
        <div className="swiper-container grid-view relative !z-10">
          <Swiper
            className="swiper"
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
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".spd17",
            }}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide className="swiper-slide group" key={index}>
                <Item
                  original={slide.fullImageSrc}
                  thumbnail={slide.fullImageSrc}
                  width={410}
                  height={440}
                >
                  {({ ref, open }) => (
                    <figure className="!rounded-[.4rem] !mb-6">
                      <img
                        className="!rounded-[.4rem]"
                        srcSet={slide.imageSrcSet}
                        alt="image"
                        src={slide.imageSrc}
                        width={410}
                        height={440}
                        ref={ref}
                      />
                      <a
                        className="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                        onClick={open}
                        data-gallery="projects-group"
                      >
                        <i className="uil uil-focus-add before:content-['\eb22']" />
                      </a>
                    </figure>
                  )}
                </Item>
                <div className="project-details flex justify-center flex-col">
                  <div className="post-header">
                    <h2 className="post-title h3">
                      <Link
                        to={`/single-project`} // Link added directly here
                        className="!text-[#343f52] hover:!text-[#3f78e0]"
                      >
                        {slide.title}
                      </Link>
                    </h2>
                    <div className="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]">
                      {slide.category}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/*/.swiper-slide */}

            {/*/.swiper-wrapper */}
          </Swiper>
          <div className="swiper-controls">
            <div className="swiper-pagination spd17"></div>
          </div>
          {/* /.swiper */}
        </div>{" "}
      </Gallery>
    </>
  );
}
