import { testimonials } from "@/data/testimonials";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <div className="card !bg-[rgba(246,247,249)] !mb-[4.5rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
      <div className="flex flex-wrap mx-0">
        <div
          className="lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] max-w-full image-wrapper bg-image rounded-t-[0.4rem] rounded-lg-start bg-cover bg-[center_center] bg-no-repeat bg-scroll relative z-0 xl:rounded-tl-[0.4rem] xl:rounded-tr-none xl:rounded-br-none xl:rounded-bl-[0.4rem] lg:rounded-tl-[0.4rem] lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-[0.4rem] md:min-h-[25rem] max-md:min-h-[25rem]"
          style={{
            backgroundImage: "url(/assets/img/photos/tm1.jpg)",
          }}
        />
        {/*/column */}
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full">
          <div className="!p-10 xl:!p-16">
            <div className="swiper-container dots-closer !mb-6">
              <Swiper
                className="swiper"
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                  el: ".spd15",
                }}
              >
                {testimonials.map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <blockquote className="icon icon-top text-[1rem] !text-center relative pt-[3.75rem] p-0 border-0 !leading-[1.7] font-medium m-[0_0_1rem] before:translate-x-[-52%] before:left-2/4 before:content-['\201c'] before:!text-[#aab0bc] before:opacity-30 before:text-[6.5rem] before:font-normal before:absolute before:leading-none before:z-[1] before:top-0">
                      <p>“{elm.quote}”</p>
                      <div className="flex items-center justify-center !text-center">
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
                <div className="swiper-pagination spd15"></div>
              </div>
              {/* /.swiper */}
            </div>
            {/* /.swiper-container */}
          </div>
          {/*/div */}
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
    </div>
  );
}
