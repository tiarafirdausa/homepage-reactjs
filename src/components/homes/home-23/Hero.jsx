import { useState } from "react";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slidesData = [
  {
    backgroundImage: "url(/assets/img/photos/bg28.jpg)",
  },
  {
    backgroundImage: "url(/assets/img/photos/bg29.jpg)",
  },
  {
    backgroundImage: "url(/assets/img/photos/bg30.jpg)",
  },
  {
    backgroundImage: "url(/assets/img/photos/bg31.jpg)",
  },
];
const slidesData2 = [
  {
    src: "/assets/img/photos/bg28-th.jpg",
    srcSet: "/assets/img/photos/bg28-th@2x.jpg 2x",
    alt: "image 1",
    width: 50,
    height: 50,
  },
  {
    src: "/assets/img/photos/bg29-th.jpg",
    srcSet: "/assets/img/photos/bg29-th@2x.jpg 2x",
    alt: "image 2",
    width: 50,
    height: 50,
  },
  {
    src: "/assets/img/photos/bg30-th.jpg",
    srcSet: "/assets/img/photos/bg30-th@2x.jpg 2x",
    alt: "image 3",
    width: 50,
    height: 50,
  },
  {
    src: "/assets/img/photos/bg31-th.jpg",
    srcSet: "/assets/img/photos/bg31-th@2x.jpg 2x",
    alt: "image 4",
    width: 50,
    height: 50,
  },
];

export default function Hero() {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <section className="wrapper bg-[#21262c] opacity-100">
      <div className="swiper-container swiper-thumbs-container swiper-fullscreen nav-dark relative z-10">
        <Swiper
          className="swiper"
          modules={[Navigation, Thumbs, Autoplay]}
          navigation={{
            prevEl: ".snbp24",
            nextEl: ".snbn24",
          }}
          spaceBetween={0}
          speed={3000}
          autoplay={{
            delay: 3000,
          }}
          slidesPerView={1}
          thumbs={{ swiper: swiperRef }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide bg-overlay bg-overlay-400 bg-[#21262c] opacity-100 bg-image !bg-cover !bg-[center_center] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)]"
              style={{
                backgroundImage: slide.backgroundImage,
              }}
            />
          ))}
          {/*/.swiper-wrapper */}
        </Swiper>
        {/* /.swiper */}
        <Swiper
          className="swiper swiper-thumbs"
          onSwiper={setSwiperRef}
          modules={[Thumbs]}
          spaceBetween={10}
        >
          {slidesData2.map((slide, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <img
                srcSet={slide.srcSet}
                alt={slide.alt}
                src={slide.src}
                width={slide.width}
                height={slide.height}
              />
            </SwiperSlide>
          ))}
          {/*/.swiper-wrapper */}
        </Swiper>
        <div className="swiper-controls">
          <div className="swiper-navigation">
            <div className="swiper-button swiper-button-prev snbp24"></div>
            <div className="swiper-button swiper-button-next snbn24"></div>
          </div>
        </div>
        {/* /.swiper */}
        <div className="swiper-static">
          <div className="container !h-full flex items-center justify-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="lg:w-8/12 xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mt-[-2.5rem] !text-center">
                <h1 className="!text-[0.95rem] uppercase !tracking-[.05rem] !leading-[1.3] font-semibold !text-white !mb-3 animate__animated animate__zoomIn animate__delay-1s">
                  I'm Julia Sandbox
                </h1>
                <h2 className="xl:!text-[3rem] !text-[calc(1.425rem_+_2.1vw)] !leading-[1.15] font-semibold !tracking-[normal] !text-white !mb-0 animate__animated animate__zoomIn animate__delay-2s">
                  couples &amp; wedding photographer
                </h2>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.swiper-static */}
      </div>
      {/* /.swiper-container */}
    </section>
  );
}
