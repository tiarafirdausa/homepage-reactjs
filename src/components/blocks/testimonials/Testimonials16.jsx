import { testimonials } from "@/data/testimonials";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials16() {
  return (
    <>
      <section id="snippet-16" className="wrapper !bg-[#ffffff] ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div className="card !bg-[#edf2fc] !rounded-[0.8rem]">
            <div className="card-body py-[4.5rem] xl:!px-0 lg:!px-0 px-[40px]">
              <div className="flex flex-wrap mx-[-15px] !text-center">
                <div className="lg:w-8/12 xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%]">
                  <h2 className="!text-[0.8rem] uppercase !text-[#605dba] !mb-3 !leading-[1.35] !tracking-[0.02rem]">
                    Happy Customers
                  </h2>
                  <h3 className="xl:!text-[1.8rem] !text-[calc(1.305rem_+_0.66vw)] !leading-[1.3] font-semibold !mb-10 xxl:!px-10">
                    Don't take our word for it. See what customers are saying
                    about us.
                  </h3>
                </div>
                {/* /column */}
              </div>
              {/* /.row */}
              <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] items-center">
                <div className="lg:w-5/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !ml-auto hidden xl:!flex lg:!flex xl:!px-[35px] lg:!px-[20px]">
                  <div className="img-mask mask-3">
                    <img
                      srcSet="/assets/img/photos/about28@2x.jpg 2x"
                      alt="image"
                      src="/assets/img/photos/about28.jpg"
                      width="385"
                      height="360"
                    />
                  </div>
                </div>
                {/*/column */}
                <div className="lg:w-6/12 xl:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mr-auto xl:!px-[35px] lg:!px-[20px]">
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
                        el: ".spdt16",
                      }}
                    >
                      {testimonials.map((elm, i) => (
                        <SwiperSlide key={i} className="swiper-slide">
                          <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:!text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3" />
                          <blockquote className="!pl-0 !text-[1rem] !leading-[1.7] font-medium m-[0_0_1rem] !mb-0">
                            <p>“{elm.quote}”</p>
                            <div className="flex items-center text-left">
                              <div className="info !pl-0">
                                <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                  {elm.name}
                                </h5>
                                <p className="!mb-0 text-[0.8rem]">
                                  {elm.title}
                                </p>
                              </div>
                            </div>
                          </blockquote>
                        </SwiperSlide>
                      ))}
                      {/*/.swiper-wrapper */}
                    </Swiper>
                    <div className="swiper-controls">
                      <div className="swiper-pagination spdt16"></div>
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
          {/*/.card */}
        </div>
      </section>
    </>
  );
}
