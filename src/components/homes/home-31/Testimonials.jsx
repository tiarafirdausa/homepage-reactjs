import { testimonials } from "@/data/testimonials";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <div className="card !bg-[#edf2fc] !rounded-[0.8rem] !mb-24 xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem]">
      <div className="card-body py-[4.5rem] xl:!px-0 lg:!px-0 px-[40px]">
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="lg:w-9/12 xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <h2 className="!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase !text-[#aab0bc] !mb-3">
              Happy Customers
            </h2>
            <h3 className="!text-[calc(1.345rem_+_1.14vw)] font-semibold !leading-[1.2] xl:!text-[2.2rem] !tracking-[-0.03em] !mb-10 xxl:!px-10">
              Don't take our word for it. See what our
              <span className="!relative z-[1] style-1 primary before:content-[''] before:z-[-1] before:absolute before:opacity-100 before:block before:-translate-x-2/4 before:-translate-y-2/4 before:-rotate-1 before:w-[111%] before:h-[110%] before:rounded-[80%] before:border-t-0 before:border-[3px] before:border-solid before:border-[#3f78e0] before:left-2/4 before:!top-[52%] after:content-[''] after:z-[-1] after:absolute after:opacity-100 after:block after:[background-size:100%_100%] after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:-translate-x-2/4 after:-translate-y-2/4 after:-rotate-2 after:w-[107%] after:h-[111%] after:rounded-[80%] after:border-l-0 after:border-b-0 after:border-[3px] after:border-solid after:border-[#3f78e0] after:left-2/4 after:top-[52%] max-xl:before:!hidden max-xl:after:!hidden max-lg:before:!hidden max-lg:after:!hidden max-md:before:!hidden max-md:after:!hidden max-sm:before:!hidden max-sm:after:!hidden">
                <em>customers</em>
              </span>
              are saying about us.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] items-center">
          <div className="lg:w-5/12 xl:w-4/12 flex-[0_0_auto] !px-[15px] max-w-full !ml-auto hidden xl:!flex lg:!flex xl:!px-[35px] lg:!px-[20px]">
            <div className="img-mask mask-3">
              <img
                srcSet="/assets/img/photos/about13@2x.jpg 2x"
                alt="image"
                src="/assets/img/photos/about13.jpg"
                width={590}
                height={650}
              />
            </div>
          </div>
          {/*/column */}
          <div className="lg:w-6/12 xl:w-6/12 xxl:w-5/12 flex-[0_0_auto] !px-[15px] max-w-full !mr-auto xl:!px-[35px] lg:!px-[20px]">
            <div
              className="swiper-container dots-start dots-closer !mb-6 relative z-10"
              data-margin={30}
              data-dots="true"
            >
              <Swiper
                className="swiper"
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                  el: ".spd36",
                }}
              >
                {testimonials.map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3" />
                    <blockquote className="!pl-0 text-[1rem] !mb-0 border-0 !leading-[1.7] !font-normal m-[0_0_1rem]">
                      <p>“{elm.quote}”</p>
                      <div className="flex items-center text-left">
                        <div className="info !pl-0">
                          <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                            {elm.name}
                          </h5>
                          <p className="!mb-0 text-[.8rem]">{elm.title}</p>
                        </div>
                      </div>
                    </blockquote>
                  </SwiperSlide>
                ))}

                {/*/.swiper-wrapper */}
              </Swiper>
              <div className="swiper-controls">
                <div className="swiper-pagination spd36"></div>
              </div>
              {/* /.swiper */}
            </div>
            {/* /.swiper-container */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/*/.card-body */}
    </div>
  );
}
