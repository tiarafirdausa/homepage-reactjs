import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  {
    src: "/assets/img/photos/bp1.jpg",
    srcSet: "/assets/img/photos/bp1@2x.jpg 2x",
  },
  {
    src: "/assets/img/photos/bp2.jpg",
    srcSet: "/assets/img/photos/bp2@2x.jpg 2x",
  },
  {
    src: "/assets/img/photos/bp3.jpg",
    srcSet: "/assets/img/photos/bp3@2x.jpg 2x",
  },
  {
    src: "/assets/img/photos/bp4.jpg",
    srcSet: "/assets/img/photos/bp4@2x.jpg 2x",
  },
  {
    src: "/assets/img/photos/bp5.jpg",
    srcSet: "/assets/img/photos/bp5@2x.jpg 2x",
  },
  {
    src: "/assets/img/photos/bp6.jpg",
    srcSet: "/assets/img/photos/bp6@2x.jpg 2x",
  },
];

export default function FeaturesSlider() {
  return (
    <div className="container-fluid xl:!px-0 pb-24 xl:pb-32 lg:pb-32 md:pb-32">
      <div className="swiper-container swiper-auto relative z-10">
        <Swiper
          spaceBetween={40} // Equivalent to data-margin
          centeredSlides={true} // Equivalent to data-centered
          loop={true} // Equivalent to data-loop
          slidesPerView="auto" // Equivalent to data-items-auto
          className="swiper overflow-visible"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <figure className="!rounded-[0.8rem] shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px]">
                <img
                  className="!rounded-[.8rem]"
                  srcSet={image.srcSet}
                  alt=""
                  src={image.src}
                  width={850}
                  height={695}
                />
              </figure>
            </SwiperSlide>
          ))}
          {/*/.swiper-wrapper */}
        </Swiper>
        {/* /.swiper */}
      </div>
      {/* /.swiper-container */}
    </div>
  );
}
