import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const slides = [
  { src: "/assets/img/photos/pp10.jpg", width: 900, height: 650 },
  { src: "/assets/img/photos/pp11.jpg", width: 900, height: 650 },
  { src: "/assets/img/photos/pp12.jpg", width: 900, height: 650 },
  { src: "/assets/img/photos/pp13.jpg", width: 900, height: 650 },
  { src: "/assets/img/photos/pp14.jpg", width: 900, height: 650 },
  { src: "/assets/img/photos/pp15.jpg", width: 900, height: 650 },
  { src: "/assets/img/photos/pp16.jpg", width: 900, height: 650 },
];
export default function ProjectDetails3() {
  return (
    <section className="wrapper !bg-[#ffffff] border-b-[rgba(164,174,198,0.2)] border-b border-solid">
      <div className="container pt-[4.5rem] xl:pt-24 lg:pt-24 md:pt-24 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
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
                  nibh, ut fermentum massa justo sit amet risus. Integer posuere
                  erat a ante venenatis. Etiam porta sem malesuada magna mollis
                  euismod. Aenean lacinia bibendum.
                </p>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Cras mattis
                  consectetur purus sit amet fermentum. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur et. Donec sed odio
                  dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum. Sed posuere consectetur est at lobortis.
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                  auctor.
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
        {/* /.row */}
      </div>
      {/* /.container */}
      <Gallery>
        <div className="container-fluid xl:!px-6 lg:!px-6 md:!px-6">
          <div className="swiper-container blog grid-view !mb-[7rem] xl:!mb-[9rem] lg:!mb-[9rem] md:!mb-[9rem]">
            <Swiper
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={30}
              className="swiper"
              modules={[Navigation, Pagination]}
              pagination={{
                clickable: true,
                el: ".spd78",
              }}
              navigation={{
                prevEl: ".snbp78",
                nextEl: ".snbn78",
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <Item
                    original={slide.src}
                    thumbnail={slide.src}
                    width={slide.width}
                    height={slide.height}
                  >
                    {({ ref, open }) => (
                      <a onClick={open}>
                        <figure className="rounded-[0.4rem]">
                          <img
                            ref={ref}
                            className="rounded-[0.4rem]"
                            alt="image"
                            src={slide.src}
                            width={slide.width}
                            height={slide.height}
                          />
                        </figure>
                      </a>
                    )}
                  </Item>
                </SwiperSlide>
              ))}
              {/*/.swiper-wrapper */}
            </Swiper>
            <div className="swiper-controls">
              <div className="swiper-navigation">
                <div className="swiper-button swiper-button-prev snbp78"></div>
                <div className="swiper-button swiper-button-next snbn78"></div>
              </div>
              <div className="swiper-pagination spd78"></div>
            </div>
            {/* /.swiper */}
          </div>
          {/* /.swiper-container */}
        </div>
      </Gallery>
      {/* /.container-fluid */}
    </section>
  );
}
