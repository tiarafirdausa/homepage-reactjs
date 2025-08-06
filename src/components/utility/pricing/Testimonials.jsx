import { testimonials3 } from "@/data/testimonials";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <div className="swiper-container dots-closer !mb-6">
      <Swiper
        className="swiper"
        breakpoints={{
          0: { slidesPerView: 1 },
          575: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: ".spdt1",
        }}
      >
        {testimonials3.map((elm, i) => (
          <SwiperSlide key={i} className="swiper-slide">
            <div className="item-inner">
              <div className="card">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <blockquote className="!text-[0.85rem] !leading-[1.7] font-medium !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                    <p>“{elm.quote}”</p>
                    <div className="flex items-center text-left">
                      <img
                        className="!rounded-[50%] !w-[3.5rem]"
                        alt="image"
                        src={elm.avatarSrc}
                        width={100}
                        height={100}
                      />
                      <div className="info !pl-4">
                        <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                          {elm.name}
                        </h5>
                        <p className="!mb-0 text-[.8rem]">{elm.role}</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/* /.item-inner */}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-controls">
        <div className="swiper-pagination spdt1"></div>
      </div>
      {/* /.swiper */}
    </div>
  );
}
