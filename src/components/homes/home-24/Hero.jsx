import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Gallery, Item } from "react-photoswipe-gallery";
const slidesData = [
  {
    src: "/assets/img/photos/cf1.jpg",
    alt: "image 1",
    width: 1200,
    height: 800,
    href: "/assets/img/photos/cf1.jpg",
  },
  {
    src: "/assets/img/photos/cf2.jpg",
    alt: "image 2",
    width: 1200,
    height: 800,
    href: "/assets/img/photos/cf2.jpg",
  },
  {
    src: "/assets/img/photos/cf3.jpg",
    alt: "image 3",
    width: 1200,
    height: 800,
    href: "/assets/img/photos/cf3.jpg",
  },
  {
    src: "/assets/img/photos/cf4.jpg",
    alt: "image 4",
    width: 1200,
    height: 800,
    href: "/assets/img/photos/cf4.jpg",
  },
  {
    src: "/assets/img/photos/cf5.jpg",
    alt: "image 5",
    width: 1200,
    height: 800,
    href: "/assets/img/photos/cf5.jpg",
  },
  {
    src: "/assets/img/photos/cf6.jpg",
    alt: "image 6",
    width: 1200,
    height: 800,
    href: "/assets/img/photos/cf6.jpg",
  },
];
export default function Hero() {
  return (
    <section id="home">
      <div className="wrapper bg-[rgba(246,247,249,1)] overflow-hidden">
        <div className="container-fluid xl:!px-0 pt-6 pb-10">
          <Gallery>
            <div className="swiper-container swiper-auto relative z-10">
              <Swiper
                className="swiper overflow-visible"
                modules={[Navigation, Pagination]}
                pagination={{
                  clickable: true,
                  el: ".spd29",
                }}
                navigation={{
                  prevEl: ".snbp29",
                  nextEl: ".snbn29",
                }}
                spaceBetween={30}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  575: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  992: {
                    slidesPerView: "auto",
                  },
                }}
                centeredSlides
                initialSlide={1}
                loop
              >
                {slidesData.map((slide, index) => (
                  <SwiperSlide className="swiper-slide group" key={index}>
                    <Item
                      original={slide.src}
                      thumbnail={slide.src}
                      width={slide.width}
                      height={slide.height}
                    >
                      {({ ref, open }) => (
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="rounded-[0.4rem]"
                            alt={slide.alt}
                            src={slide.src}
                            width={slide.width}
                            height={slide.height}
                            ref={ref}
                          />
                          <a
                            className="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                            onClick={open}
                            data-gallery="gallery-group"
                          >
                            <i className="uil uil-focus-add before:content-['\eb22']" />
                          </a>
                        </figure>
                      )}
                    </Item>
                  </SwiperSlide>
                ))}
                {/*/.swiper-wrapper */}
              </Swiper>
              {/* /.swiper */}
              <div className="swiper-controls">
                <div className="swiper-navigation">
                  <div className="swiper-button swiper-button-prev snbp29"></div>
                  <div className="swiper-button swiper-button-next snbn29"></div>
                </div>
                <div className="swiper-pagination spd29"></div>
              </div>
            </div>
          </Gallery>
          {/* /.swiper-container */}
        </div>
        {/* /.cotnainer */}
      </div>
      {/* /.overflow-hidden */}
    </section>
  );
}
