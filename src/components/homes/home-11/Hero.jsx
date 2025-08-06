import ModalVideo from "@/components/common/ModalVideo";

import { Link } from "react-router-dom";
import { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sliderItems = [
  {
    type: "image",
    imageSrc: "/assets/img/photos/about21.jpg",
    imageSrcSet: "/assets/img/photos/about21@2x.jpg 2x",
    width: 575,
    height: 550,
  },
  {
    type: "video",
    imageSrc: "/assets/img/photos/about22.jpg",
    imageSrcSet: "/assets/img/photos/about22@2x.jpg 2x",
    videoUrl: "/assets/media/movie.mp4",
    width: 575,
    height: 550,
  },
  {
    type: "image",
    imageSrc: "/assets/img/photos/about23.jpg",
    imageSrcSet: "/assets/img/photos/about23@2x.jpg 2x",
    width: 575,
    height: 550,
  },
];

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section
        className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 bg-content !text-white !bg-fixed bg-no-repeat bg-[center_center] bg-cover relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)]"
        style={{ backgroundImage: "url(/assets/img/photos/bg4.jpg)" }}
      >
        <div
          className="container pt-32 pb-24"
          style={{ zIndex: 5, position: "relative" }}
        >
          <div className="flex flex-wrap mx-0 !mt-[-70px] items-center">
            <div
              className="md:w-10/12 md:!ml-[8.33333333%] lg:!ml-0 lg:w-6/12 xl:!ml-0 xl:w-6/12 w-full flex-[0_0_auto] max-w-full content text-center lg:text-left xl:text-left !mt-[70px]"
              data-cues="slideInDown"
              data-group="page-title"
              data-delay={600}
            >
              <h1 className="xl:!text-[2.2rem] !text-[calc(1.345rem_+_1.14vw)] font-bold !leading-[1.25] !mb-5 !text-white">
                Crafting project specific solutions with expertise.
              </h1>
              <p className="lead text-[1.05rem] !leading-[1.5] font-medium !mb-7 xl:!pr-10">
                We’re a creative company that focuses on establishing long-term
                relationships with customers.
              </p>
              <div
                className="flex justify-center lg:!justify-start xl:!justify-start"
                data-cues="slideInDown"
                data-group="page-title-buttons"
                data-delay={900}
              >
                <span>
                  <Link
                    to={`/projects`}
                    className="btn btn-lg btn-white !rounded-[50rem] !mr-2"
                  >
                    Explore Now
                  </Link>
                </span>
                <span>
                  <Link
                    to={`/contact`}
                    className="btn btn-lg btn-outline-white !text-white bg-[#ffffff] !border-white !border-[2px] hover:!text-[#343f52] hover:bg-[#ffffff] hover:border-white focus:shadow-[rgba(255,255,255,1)] active:!text-[#343f52] active:bg-[#ffffff] active:border-white disabled:text-white disabled:bg-transparent disabled:border-white !rounded-[50rem]"
                  >
                    Contact Us
                  </Link>
                </span>
              </div>
            </div>
            {/*/column */}
            <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] !mt-[70px]">
              <div className="swiper-container dots-over !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] relative z-10">
                <Swiper
                  className="swiper"
                  spaceBetween={5}
                  modules={[Navigation, Pagination]}
                  pagination={{
                    clickable: true,
                    el: ".spd4",
                  }}
                  navigation={{
                    prevEl: ".snbp1",
                    nextEl: ".snbn1",
                  }}
                >
                  {sliderItems.map((item, index) => (
                    <SwiperSlide className="swiper-slide" key={index}>
                      {item.type === "image" ? (
                        <img
                          srcSet={item.imageSrcSet}
                          className="rounded-[.4rem] w-full h-auto"
                          alt="image"
                          src={item.imageSrc}
                          width={item.width}
                          height={item.height}
                        />
                      ) : (
                        <>
                          <a
                            className="btn btn-circle btn-white btn-play ripple !mx-auto !mb-5 !absolute z-[2] xl:!text-[2.3rem] !w-[3.5rem] !h-[3.5rem] !text-[calc(1.355rem_+_1.26vw)] hover:translate-y-0 inline-flex items-center justify-center leading-none !p-0 !rounded-[100%] before:content-[''] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0 before:bg-[#ffffff] after:content-[''] after:block after:absolute after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:z-[-1] after:rounded-[50%] after:inset-0 after:bg-[#ffffff]"
                            style={{
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              zIndex: 3,
                            }}
                            onClick={() => setIsOpen(true)}
                            data-gallery="hero"
                          >
                            <i className="icn-caret-right" />
                          </a>
                          <img
                            srcSet={item.imageSrcSet}
                            className="rounded-[.4rem] w-full h-auto"
                            alt="image"
                            src={item.imageSrc}
                            width={item.width}
                            height={item.height}
                          />
                        </>
                      )}
                    </SwiperSlide>
                  ))}
                  {/*/.swiper-wrapper */}
                </Swiper>
                <div className="swiper-controls">
                  <div className="swiper-navigation">
                    <div className="swiper-button swiper-button-prev snbp1"></div>
                    <div className="swiper-button swiper-button-next snbn1"></div>
                  </div>
                  <div className="swiper-pagination spd4"></div>
                </div>
                {/*/.swiper */}
              </div>
              {/* /.swiper-container */}
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      <ModalVideo
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        src={"/assets/media/movie.mp4"}
      />
    </>
  );
}
