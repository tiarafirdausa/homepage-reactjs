import ModalVideo from "@/components/common/ModalVideo";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="swiper-container swiper-hero dots-over relative z-10">
        <Swiper
          className="swiper h-full"
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{
            clickable: true,
            el: ".spd7",
          }}
          spaceBetween={0}
          speed={3000}
          autoplay={{
            delay: 6000,
          }}
          navigation={{
            prevEl: ".snbp7",
            nextEl: ".snbn7",
          }}
        >
          <SwiperSlide
            className="swiper-slide max-h-full bg-overlay bg-overlay-400 bg-[#21262c] opacity-100 bg-image !bg-cover !bg-[center_center] !h-[750px] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)]"
            style={{
              backgroundImage: "url(/assets/img/photos/bg7.jpg)",
            }}
          >
            <div className="container !h-full">
              <div className="flex flex-wrap mx-[-15px] !h-full">
                <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-7/12 lg:!ml-0 xl:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full text-center lg:text-left xl:text-left justify-center self-center items-start">
                  <h2 className="xl:!text-[2.8rem] !leading-[1.2] font-bold !text-[calc(1.405rem_+_1.86vw)] !mb-4 !text-white animate__animated animate__slideInDown animate__delay-1s">
                    We bring solutions to make life easier.
                  </h2>
                  <p className="lead text-[1.15rem] leading-normal !mb-7 !text-white animate__animated animate__slideInRight animate__delay-2s">
                    We are a creative company that focuses on long term
                    relationships with customers.
                  </p>
                  <div className="animate__animated animate__slideInUp animate__delay-3s">
                    <Link
                      to={`/blog`}
                      className="btn btn-lg btn-outline-white !text-white bg-[#ffffff] !border-white !border-[2px] hover:!text-[#343f52] hover:bg-[#ffffff] hover:border-white focus:shadow-[rgba(255,255,255,1)] active:!text-[#343f52] active:bg-[#ffffff] active:border-white disabled:text-white disabled:bg-transparent disabled:border-white !rounded-[50rem]"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                {/*/column */}
              </div>
              {/*/.row */}
            </div>
            {/*/.container */}
          </SwiperSlide>
          {/*/.swiper-slide */}
          <SwiperSlide
            className="swiper-slide max-h-full bg-overlay bg-overlay-400 bg-[#21262c] opacity-100 bg-image !bg-cover !bg-[center_center] !h-[750px] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)]"
            style={{
              backgroundImage: "url(/assets/img/photos/bg8.jpg)",
            }}
          >
            <div className="container !h-full">
              <div className="flex flex-wrap mx-[-15px] !h-full">
                <div className="md:w-11/12 lg:w-8/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center justify-center self-center">
                  <h2 className="xl:!text-[2.8rem] !leading-[1.2] font-bold !text-[calc(1.405rem_+_1.86vw)] !mb-4 !text-white animate__animated animate__slideInDown animate__delay-1s">
                    We are trusted by over a million customers.
                  </h2>
                  <p className="lead text-[1.15rem] leading-normal !mb-7 !text-white animate__animated animate__slideInRight animate__delay-2s">
                    Here a few reasons why our customers choose us.
                  </p>
                  <div className="animate__animated animate__slideInUp animate__delay-3s">
                    <a
                      onClick={() => setIsOpen(true)}
                      className="btn btn-circle btn-white btn-play ripple !mx-auto !mb-5 !relative z-[2] xl:!text-[2.3rem] !w-[3.5rem] !h-[3.5rem] !text-[calc(1.355rem_+_1.26vw)] hover:translate-y-0 inline-flex items-center justify-center leading-none p-0 !rounded-[100%] before:content-[''] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0 before:bg-[#ffffff] after:content-[''] after:block after:absolute after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:z-[-1] after:rounded-[50%] after:inset-0 after:bg-[#ffffff]"
                    >
                      <i className="icn-caret-right !ml-[0.15rem] !relative z-[2] before:content-['\e900'] !text-[calc(1.355rem_+_1.26vw)]" />
                    </a>
                  </div>
                </div>
                {/*/column */}
              </div>
              {/*/.row */}
            </div>
            {/*/.container */}
          </SwiperSlide>
          {/*/.swiper-slide */}
          <SwiperSlide
            className="swiper-slide max-h-full bg-overlay bg-overlay-400 bg-[#21262c] opacity-100 bg-image !bg-cover !bg-[center_center] !h-[750px] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)]"
            style={{
              backgroundImage: "url(/assets/img/photos/bg9.jpg)",
            }}
          >
            <div className="container !h-full">
              <div className="flex flex-wrap mx-[-15px] !h-full">
                <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-7/12 lg:!ml-[41.66666667%] xl:w-6/12 xl:!ml-[50%] xxl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xxl:!ml-[50%] text-center lg:text-left xl:text-left justify-center self-center items-start">
                  <h2 className="xl:!text-[2.8rem] !leading-[1.2] font-bold !text-[calc(1.405rem_+_1.86vw)] !mb-4 !text-white animate__animated animate__slideInDown animate__delay-1s">
                    Just sit and relax.
                  </h2>
                  <p className="lead text-[1.15rem] leading-normal !mb-7 !text-white animate__animated animate__slideInRight animate__delay-2s">
                    We make sure your spending is stress free so that you can
                    have the perfect control.
                  </p>
                  <div className="animate__animated animate__slideInUp animate__delay-3s">
                    <Link
                      to={`/contact`}
                      className="btn btn-lg btn-outline-white !text-white bg-[#ffffff] !border-white !border-[2px] hover:!text-[#343f52] hover:bg-[#ffffff] hover:border-white focus:shadow-[rgba(255,255,255,1)] active:!text-[#343f52] active:bg-[#ffffff] active:border-white disabled:text-white disabled:bg-transparent disabled:border-white !rounded-[50rem]"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
                {/*/column */}
              </div>
              {/*/.row */}
            </div>
            {/*/.container */}
          </SwiperSlide>
          {/*/.swiper-slide */}

          {/*/.swiper-wrapper */}
        </Swiper>
        <div className="swiper-controls">
          <div className="swiper-navigation">
            <div className="swiper-button swiper-button-prev snbp7"></div>
            <div className="swiper-button swiper-button-next snbn7"></div>
          </div>
          <div className="swiper-pagination spd7"></div>
        </div>
        {/* /.swiper */}
      </div>

      <ModalVideo
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        src={"/assets/media/movie.mp4"}
      />
    </>
  );
}
