import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BASE_URL } from "@/config/url";

export default function ProjectDetails3({ content, galleryImages = [] }) {
  const slides = galleryImages.map((img) => ({
    src: `${BASE_URL}${img.image_path}`,
    width: 900,
    height: 650,
  }));

  if (slides.length === 0) {
    return (
      <section className="wrapper !bg-[#ffffff] border-b-[rgba(164,174,198,0.2)] border-b border-solid">
        <div className="container pt-[4.5rem] xl:pt-24 lg:pt-24 md:pt-24 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </section>
    );
  }

  return (
    <section className="wrapper !bg-[#ffffff] border-b-[rgba(164,174,198,0.2)] border-b border-solid">
      <div className="container pt-[4.5rem] xl:pt-24 lg:pt-24 md:pt-24 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
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
