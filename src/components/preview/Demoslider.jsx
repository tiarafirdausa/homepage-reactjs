import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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

export default function Demoslider() {
  return (
    <>
      <div className="swiper-container swiper-auto swiper-auto-xs !mb-8 relative !z-10">
        <Swiper
          spaceBetween={40} // Equivalent to data-margin
          centeredSlides={true} // Equivalent to data-centered
          loop={true} // Equivalent to data-loop
          slidesPerView="auto" // Equivalent to data-items-auto
          autoplay={{ delay: 1, disableOnInteraction: false }} // Equivalent to data-autoplay & data-autoplaytime
          speed={7000} // Equivalent to data-speed
          modules={[Autoplay]}
          className="swiper overflow-visible pointer-events-none ticker"
        >
          {images.map((image, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <figure className="!rounded-[0.8rem] shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px]">
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
      {/* /.swiper-container */}
      <div className="swiper-container swiper-auto swiper-auto-xs !mb-8 relative !z-10">
        <Swiper
          spaceBetween={40} // Equivalent to data-margin
          centeredSlides={true} // Equivalent to data-centered
          loop={true} // Equivalent to data-loop
          slidesPerView="auto" // Equivalent to data-items-auto
          autoplay={{ delay: 1, disableOnInteraction: false }} // Equivalent to data-autoplay & data-autoplaytime
          speed={7000} // Equivalent to data-speed
          modules={[Autoplay]}
          className="swiper overflow-visible pointer-events-none ticker"
          dir="rtl"
        >
          {images2.map((image, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <figure className="!rounded-[0.8rem] shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px]">
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
