import { slidesData } from "@/data/team";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Team() {
  return (
    <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] !mb-24 md:!mb-[7rem] xl:!mb-40 items-center">
      <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
        <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
          MEET THE TEAM
        </h2>
        <h3 className="!text-[calc(1.305rem_+_0.66vw)] !font-normal font-DMSerif xl:!text-[1.8rem] !leading-[1.2] !mb-[1.25rem]">
          Save your time and money by choosing our professional team.
        </h3>
        <p>
          Donec id elit non mi porta gravida at eget metus. Morbi leo risus,
          porta ac consectetur ac, vestibulum at eros tempus porttitor.
        </p>
        <a
          href="#"
          className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mt-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
        >
          See All Members
        </a>
      </div>
      {/*/column */}
      <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
        <div className="swiper-container !text-center !mb-6">
          <Swiper
            className="swiper"
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".spd20",
            }}
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
            {slidesData.map((elm, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <img
                  className="rounded-[50%] w-40 !mx-auto !mb-4"
                  alt="image"
                  width={300}
                  srcSet={elm.imageSrcSet}
                  height={300}
                  src={elm.imageSrc}
                />
                <h4 className="!mb-1">{elm.name}</h4>
                <div className="!text-[0.65rem] uppercase !tracking-[0.02rem] font-bold !text-[#aab0bc] !mb-2">
                  {elm.role}
                </div>
                <p className="!mb-2">{elm.description}</p>
                <nav className="nav social justify-center !text-center !mb-0">
                  <a
                    className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                    href="#"
                  >
                    <i className="uil uil-twitter before:content-['\ed59'] text-[1rem] !text-[#5daed5]" />
                  </a>
                  <a
                    className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                    href="#"
                  >
                    <i className="uil uil-slack before:content-['\ecdd'] text-[1rem] !text-[#d4135c]" />
                  </a>
                  <a
                    className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                    href="#"
                  >
                    <i className="uil uil-linkedin before:content-['\ebd1'] text-[1rem] !text-[#3393c1]" />
                  </a>
                </nav>
                {/* /.social */}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-controls">
            <div className="swiper-pagination spd20"></div>
          </div>
          {/* /.swiper */}
        </div>
        {/* /.swiper-container */}
      </div>
      {/*/column */}
    </div>
  );
}
