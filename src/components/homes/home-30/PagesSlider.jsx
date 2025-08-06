import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  {
    src: "/assets/img/photos/ma8.jpg",
    srcSet: "/assets/img/photos/ma8@2x.jpg 2x",
  },
  {
    src: "/assets/img/photos/ma9.jpg",
    srcSet: "/assets/img/photos/ma9@2x.jpg 2x",
  },
  {
    src: "/assets/img/photos/ma10.jpg",
    srcSet: "/assets/img/photos/ma10@2x.jpg 2x",
  },
  {
    src: "/assets/img/photos/ma11.jpg",
    srcSet: "/assets/img/photos/ma11@2x.jpg 2x",
  },
  {
    src: "/assets/img/photos/ma12.jpg",
    srcSet: "/assets/img/photos/ma12@2x.jpg 2x",
  },
  {
    src: "/assets/img/photos/ma13.jpg",
    srcSet: "/assets/img/photos/ma13@2x.jpg 2x",
  },
  {
    src: "/assets/img/photos/ma14.jpg",
    srcSet: "/assets/img/photos/ma14@2x.jpg 2x",
  },
];

const images2 = [
  {
    src: "/assets/img/photos/ma1.jpg",
    srcSet: "/assets/img/photos/ma1@2x.jpg 2x",
  },
  {
    src: "/assets/img/photos/ma2.jpg",
    srcSet: "/assets/img/photos/ma2@2x.jpg 2x",
  },
  {
    src: "/assets/img/photos/ma3.jpg",
    srcSet: "/assets/img/photos/ma3@2x.jpg 2x",
  },
  {
    src: "/assets/img/photos/ma4.jpg",
    srcSet: "/assets/img/photos/ma4@2x.jpg 2x",
  },
  {
    src: "/assets/img/photos/ma5.jpg",
    srcSet: "/assets/img/photos/ma5@2x.jpg 2x",
  },
  {
    src: "/assets/img/photos/ma6.jpg",
    srcSet: "/assets/img/photos/ma6@2x.jpg 2x",
  },
  {
    src: "/assets/img/photos/ma7.jpg",
    srcSet: "/assets/img/photos/ma7@2x.jpg 2x",
  },
];

export default function PagesSlider() {
  return (
    <>
      {" "}
      <div className="swiper-container swiper-auto swiper-auto-xs !mb-8 relative !z-10">
        <Swiper
          centeredSlides
          loop
          slidesPerView={"auto"}
          modules={[Autoplay]}
          autoplay
          spaceBetween={40}
          speed={7000}
          initialSlide={1}
          className="swiper overflow-visible pointer-events-none ticker"
        >
          {images.map((image, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <figure className="rounded-[0.8rem] shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px]">
                <img
                  className="!rounded-[.8rem]"
                  srcSet={image.srcSet}
                  src={image.src}
                  alt=""
                  width={600}
                  height={450}
                />
              </figure>
            </SwiperSlide>
          ))}

          {/*/.swiper-wrapper */}
        </Swiper>
        {/* /.swiper */}
      </div>
      {/* /.swiper-container */}
      <div className="swiper-container swiper-auto swiper-auto-xs relative !z-10">
        <Swiper
          className="swiper overflow-visible pointer-events-none ticker"
          centeredSlides
          loop
          slidesPerView={"auto"}
          modules={[Autoplay]}
          spaceBetween={40}
          autoplay={{
            reverseDirection: true,
          }}
          speed={7000}
          initialSlide={1}
        >
          {images2.map((image, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <figure className="rounded-[0.8rem] shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px]">
                <img
                  className="!rounded-[.8rem]"
                  srcSet={image.srcSet}
                  alt=""
                  src={image.src}
                  width={600}
                  height={450}
                />
              </figure>
            </SwiperSlide>
          ))}

          {/*/.swiper-wrapper */}
        </Swiper>
        {/* /.swiper */}
      </div>
    </>
  );
}
