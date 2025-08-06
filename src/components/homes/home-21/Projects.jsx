import { projects2 } from "@/data/projects";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export default function Projects({ isWave = true }) {
  return (
    <>
      <div className="overflow-hidden">
        <div className="container pt-14 xl:pt-7 lg:pt-7 pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
              <h2 className="!text-[0.8rem] uppercase !text-[#5eb9f0] !mb-3 !leading-[1.35] !tracking-[0.02rem]">
                Latest Projects
              </h2>
              <h3 className="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] !mb-10">
                Check out some of our awesome projects with creative ideas and
                great design.
              </h3>
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
          <div
            className="swiper-container grid-view nav-bottom nav-color !mb-[4.5rem] relative z-10"
            data-margin={30}
            data-dots="false"
            data-nav="true"
            data-items-md={2}
            data-items-xs={1}
          >
            <Swiper
              className="swiper overflow-visible"
              spaceBetween={30}
              modules={[Navigation]}
              navigation={{
                prevEl: ".snbp21",
                nextEl: ".snbn21",
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              {projects2.map((slide, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <figure className="!rounded-[.4rem] !mb-7">
                    <Link to={`/single-project`}>
                      <img
                        srcSet={slide.srcSet}
                        alt={slide.alt}
                        src={slide.src}
                        width={slide.width}
                        height={slide.height}
                      />
                    </Link>
                  </figure>
                  <div className="project-details flex justify-center flex-col">
                    <div className="post-header">
                      <h2 className="post-title h3">
                        <Link
                          to={`/single-project`}
                          className="!text-[#343f52] hover:!text-[#5eb9f0]"
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
              <div className="swiper-navigation">
                <div className="swiper-button swiper-button-prev snbp21"></div>
                <div className="swiper-button swiper-button-next snbn21"></div>
              </div>
            </div>
            {/* /.swiper */}
          </div>
          {/* /.swiper-container */}
        </div>
        {/* /.container */}
        {isWave && (
          <div className="divider !text-[#f0f8fe] mx-[-0.5rem]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
              <path
                fill="currentColor"
                d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
              />
            </svg>
          </div>
        )}
      </div>
    </>
  );
}
