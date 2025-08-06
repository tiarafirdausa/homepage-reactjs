import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const slides = [
  {
    src: "/assets/img/photos/pp7.jpg",
    width: 1600,
    height: 912,
    caption: "Vivamus sagittis lacus augue",
    captionClass: "!ml-auto !mt-auto",
  },
  {
    src: "/assets/img/photos/pp8.jpg",
    width: 1600,
    height: 1011,
    caption: "Vivamus sagittis lacus augue",
    captionClass: "!mx-auto !mt-auto",
  },
  {
    src: "/assets/img/photos/pp9.jpg",
    width: 1600,
    height: 980,
    caption: "Vivamus sagittis lacus augue",
    captionClass: "!mt-auto",
  },
];

export default function ProjectDetails2() {
  return (
    <div className="wrapper !bg-[#ffffff] border-b-[rgba(164,174,198,0.2)] border-b border-solid">
      <div className="container !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24">
        <article>
          <Gallery>
            <div className="post-slider !mb-8 xl:!mb-14 lg:!mb-14 md:!mb-14">
              <div className="swiper-container dots-over relative !z-10">
                <Swiper
                  spaceBetween={5}
                  modules={[Navigation, Pagination]}
                  autoHeight
                  pagination={{
                    clickable: true,
                    el: ".spd77",
                  }}
                  navigation={{
                    prevEl: ".snbp77",
                    nextEl: ".snbn77",
                  }}
                  className="swiper"
                >
                  {slides.map((slide, index) => (
                    <SwiperSlide
                      key={index}
                      className="swiper-slide !rounded-[.4rem]"
                    >
                      <Item
                        original={slide.src}
                        thumbnail={slide.src}
                        width={slide.width}
                        height={slide.height}
                      >
                        {({ ref, open }) => (
                          <a onClick={open} href="#">
                            <img
                              ref={ref}
                              className="!rounded-[.4rem]"
                              alt="image"
                              src={slide.src}
                              width={slide.width}
                              height={slide.height}
                            />
                            <div className="caption-wrapper p-14">
                              <div
                                className={`caption bg-[rgba(255,255,255)] opacity-100 !rounded-[.4rem] px-4 py-3 ${slide.captionClass} animate__animated animate__slideInDown animate__delay-1s`}
                              >
                                <h5 className="!mb-0">{slide.caption}</h5>
                              </div>
                              {/*/.caption */}
                            </div>{" "}
                          </a>
                        )}
                      </Item>
                      {/*/.caption-wrapper */}
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-controls">
                  <div className="swiper-navigation">
                    <div className="swiper-button swiper-button-prev snbp77"></div>
                    <div className="swiper-button swiper-button-next snbn77"></div>
                  </div>
                  <div className="swiper-pagination spd77"></div>
                </div>
                {/* /.swiper */}
              </div>
              {/* /.swiper-container */}
            </div>
          </Gallery>
          {/* /.post-slider */}
          <div className="flex flex-wrap mx-[-15px]">
            <div className="xl:w-10/12 xl:!ml-[8.33333333%] lg:w-10/12 lg:!ml-[8.33333333%] w-full flex-[0_0_auto] !px-[15px] max-w-full">
              <h2 className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !mb-4">
                About the Project
              </h2>
              <div className="flex flex-wrap mx-0">
                <div className="xl:w-9/12 lg:w-9/12 md:w-9/12 w-full flex-[0_0_auto] max-w-full">
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Fusce
                    dapibus, tellus ac cursus commodo, tortor mauris condimentum
                    nibh, ut fermentum massa justo sit amet risus. Integer
                    posuere erat a ante venenatis. Etiam porta sem malesuada
                    magna mollis euismod. Aenean lacinia bibendum.
                  </p>
                  <p>
                    Donec id elit non mi porta gravida at eget metus. Cras
                    mattis consectetur purus sit amet fermentum. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare
                    sem lacinia quam venenatis vestibulum. Sed posuere
                    consectetur est at lobortis. Vivamus sagittis lacus vel
                    augue laoreet rutrum faucibus dolor auctor.
                  </p>
                </div>
                {/*/column */}
                <div className="xl:w-2/12 lg:w-2/12 md:w-2/12 w-full flex-[0_0_auto] max-w-full !ml-auto">
                  <ul className="pl-0 list-none">
                    <li>
                      <h5 className="!mb-1">Date</h5>
                      <p>17 May 2018</p>
                    </li>
                    <li>
                      <h5 className="!mb-1">Client Name</h5>
                      <p>Cool House</p>
                    </li>
                  </ul>
                  <a href="#" className="more hover">
                    See Project
                  </a>
                </div>
                {/*/column */}
              </div>
              {/*/.row */}
            </div>
            {/* /column */}
          </div>
          {/*/.row */}
        </article>
        {/* /.project */}
      </div>
      {/* /.container */}
    </div>
  );
}
