import { socialLinks } from "@/data/socials";
import { slidesData } from "@/data/team";

import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Team() {
  return (
    <section id="about" className="wrapper !bg-[#ffffff]">
      <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
            <h2 className="!text-[.75rem] uppercase text-line relative align-top !pl-[1.4rem] inline-flex !tracking-[0.02rem] !leading-[1.35] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0] !text-[#3f78e0] !mb-3">
              Meet the Team
            </h2>
            <h3 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-5">
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
                  el: ".spd80",
                }}
              >
                {slidesData.map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <img
                      className="rounded-[50%] w-40 !mx-auto !mb-4"
                      alt="image"
                      src={elm.imageSrc}
                      width={300}
                      height={300}
                    />
                    <h4 className="!mb-1">{elm.name}</h4>
                    <div className="!text-[0.65rem] uppercase !tracking-[0.02rem] font-bold !text-[#aab0bc] !mb-2">
                      {elm.role}
                    </div>
                    <p className="!mb-2">{elm.description}</p>
                    <nav className="nav social justify-center !text-center !mb-0">
                      {socialLinks.slice(0, 3).map((elm, i) => (
                        <a
                          className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                          href={elm.href}
                          key={i}
                        >
                          <i
                            className={`uil ${elm.icon} before:content-[${elm.unicode}] text-[1rem] !text-[${elm.color}]`}
                          />
                        </a>
                      ))}
                    </nav>
                    {/* /.social */}
                  </SwiperSlide>
                ))}

                {/*/.swiper-wrapper */}
              </Swiper>
              <div className="swiper-controls">
                <div className="swiper-pagination spd80"></div>
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
    </section>
  );
}
