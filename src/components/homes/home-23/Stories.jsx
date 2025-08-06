import { slidesData } from "@/data/stories";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Stories() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="overflow-hidden">
        <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
              <i className="icn-flower !text-[#7cb798] xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] opacity-25 before:content-['\e907']" />
              <h2 className="xl:!text-[1.7rem] !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] font-semibold !tracking-[normal] !text-center !mt-2 !mb-10">
                Some of wonderful love stories
                <br className="hidden xl:block lg:block md:block" />I witnessed
                and had the chance to capture
              </h2>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
          <div
            className="swiper-container grid-view nav-bottom nav-color !mb-[4.5rem] !text-center relative z-10"
            data-margin={30}
            data-dots="false"
            data-nav="true"
            data-items-md={2}
            data-items-xs={1}
          >
            <Swiper
              className="swiper overflow-visible !pb-2"
              modules={[Navigation]}
              navigation={{
                prevEl: ".snbp27",
                nextEl: ".snbn27",
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
              }}
            >
              {slidesData.map((slide, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                    <figure className="card-img-top overlay overlay-1 group">
                      <a href="#">
                        <img
                          className="max-w-full h-auto"
                          srcSet={slide.srcSet}
                          alt={slide.alt}
                          src={slide.src}
                          width={630}
                          height={440}
                        />
                      </a>
                      <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                        <h5 className="from-top !mb-0 absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2/4 group-hover:-translate-y-2/4">
                          View Gallery
                        </h5>
                      </figcaption>
                    </figure>
                    <div className="card-body p-6">
                      <h3 className="!text-[1.05rem] !mb-1 font-semibold !tracking-[normal]">
                        {slide.title}
                      </h3>
                      <ul className="!text-[#aab0bc] m-0 p-0 list-none text-[0.8rem] flex justify-center !mb-0">
                        <li className="inline-block">{slide.photosCount}</li>
                        <li className="inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                          {slide.category}
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/*/.swiper-wrapper */}
            </Swiper>
            <div className="swiper-controls">
              <div className="swiper-navigation">
                <div className="swiper-button swiper-button-prev snbp27"></div>
                <div className="swiper-button swiper-button-next snbn27"></div>
              </div>
            </div>
            {/* /.swiper */}
          </div>
          {/* /.swiper-container */}
        </div>
        {/* /.container */}
      </div>
      {/* /.overflow-hidden */}
    </section>
  );
}
