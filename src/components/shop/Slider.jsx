import { useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  {
    src: "/assets/img/photos/shs1.jpg",
    srcSet: "/assets/img/photos/shs1@2x.jpg 2x",
  },
  {
    src: "/assets/img/photos/shs2.jpg",
    srcSet: "/assets/img/photos/shs2@2x.jpg 2x",
  },
  {
    src: "/assets/img/photos/shs3.jpg",
    srcSet: "/assets/img/photos/shs3@2x.jpg 2x",
  },
  {
    src: "/assets/img/photos/shs4.jpg",
    srcSet: "/assets/img/photos/shs4@2x.jpg 2x",
  },
];

export default function Slider({ firstImage = "/assets/img/photos/shs1.jpg" }) {
  images[0].src = firstImage;
  const [thumbSwiper, setThumbSwiper] = useState(null);
  return (
    <Gallery>
      <div
        className="swiper-container swiper-thumbs-container"
        data-margin="10"
        data-dots="false"
        data-nav="true"
        data-thumbs="true"
      >
        <Swiper
          modules={[Thumbs]}
          thumbs={{ swiper: thumbSwiper }}
          spaceBetween={10}
          className="swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide className="swiper-slide group" key={index}>
              <Item
                original={image.src}
                thumbnail={image.src}
                width="610"
                height="655"
              >
                {({ ref, open }) => (
                  <figure className="rounded-[0.4rem]">
                    <img
                      ref={ref}
                      className="rounded-[0.4rem]"
                      srcSet={image.srcSet}
                      alt="image"
                      src={image.src}
                      width="610"
                      height="655"
                    />
                    <a
                      className="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                      onClick={open}
                      data-gallery="product-group"
                    >
                      <i className="uil uil-focus-add before:content-['\eb22']"></i>
                    </a>
                  </figure>
                )}
              </Item>
            </SwiperSlide>
          ))}

          {/* <!--/.swiper-wrapper --> */}
        </Swiper>
        {/* <!-- /.swiper --> */}

        <Swiper
          className="swiper swiper-thumbs"
          slidesPerView={5}
          spaceBetween={10}
          modules={[Thumbs]}
          onSwiper={setThumbSwiper}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <img
                srcSet={image.srcSet}
                className="rounded-[.4rem]"
                alt="image"
                src={image.src}
                width="114"
                height="120"
              />
            </SwiperSlide>
          ))}

          {/* <!--/.swiper-wrapper --> */}
        </Swiper>
        {/* <!-- /.swiper --> */}
      </div>{" "}
    </Gallery>
  );
}
