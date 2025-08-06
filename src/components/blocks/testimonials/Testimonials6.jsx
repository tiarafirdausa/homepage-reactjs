import Counter from "@/components/common/Counter";
import { testimonials } from "@/data/testimonials";

import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials6() {
  return (
    <section id="snippet-6" className="wrapper !bg-[#ffffff] ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] items-center">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[30px] max-w-full !relative">
            <div
              className="shape bg-dot primary rellax !w-[8rem] !h-[8rem] absolute opacity-50 bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)]"
              data-rellax-speed={1}
              style={{ top: 0, left: "-1.4rem", zIndex: 0 }}
            />
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px] max-w-full">
                <figure className="rounded-[0.4rem] xl:!mt-10 lg:!mt-10 md:!mt-10 !relative">
                  <img
                    className="!rounded-[0.4rem]"
                    srcSet="/assets/img/photos/g5@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/g5.jpg"
                    width="350"
                    height="350"
                  />
                </figure>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px] max-w-full">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                  <div className="w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full xl:!order-2 lg:!order-2 md:!order-2">
                    <figure className="rounded-[0.4rem]">
                      <img
                        className="!rounded-[0.4rem]"
                        srcSet="/assets/img/photos/g6@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/g6.jpg"
                        width="375"
                        height="250"
                      />
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="xl:w-10/12 lg:w-10/12 md:w-10/12 w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full">
                    <div className="card !bg-[#e0e9fa] !text-center counter-wrapper">
                      <div className="card-body !py-12">
                        <h3 className="counter !whitespace-nowrap xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2">
                          <Counter max={5000} />+
                        </h3>
                        <p className="!mb-0 text-[0.8rem] font-medium">
                          Satisfied Customers
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.card */}
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[25px] max-w-full">
            <div
              className="swiper-container dots-closer !mb-6"
              data-margin={30}
              data-dots="true"
            >
              <Swiper
                className="swiper"
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                  el: ".spdt6",
                }}
              >
                {testimonials.map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <blockquote className="icon icon-top text-[1rem] !text-center relative pt-[3.75rem] p-0 border-0 !leading-[1.7] font-medium m-[0_0_1rem] before:translate-x-[-52%] before:left-2/4 before:content-['\201c'] before:!text-[#aab0bc] before:opacity-30 before:text-[6.5rem] before:font-normal before:absolute before:leading-none before:z-[1] before:top-0">
                      <p>“{elm.quote}”</p>
                      <div className="flex items-center justify-center !text-center">
                        <div className="info !pl-0">
                          <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                            {elm.name}
                          </h5>
                          <p className="!mb-0 text-[0.8rem]">{elm.title}</p>
                        </div>
                      </div>
                    </blockquote>
                  </SwiperSlide>
                ))}

                {/*/.swiper-wrapper */}
              </Swiper>
              <div className="swiper-controls">
                <div className="swiper-pagination spdt6"></div>
              </div>
              {/* /.swiper */}
            </div>
            {/* /.swiper-container */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}

      {/* /.container */}
    </section>
  );
}
