import ModalVideo from "@/components/common/ModalVideo";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getPosts } from "@/services/postService";
import { BASE_URL } from "@/config/url";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [heroSlides, setHeroSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroPosts = async () => {
      try {
        const response = await getPosts({ perPage: 3 });
        setHeroSlides(response.data);
      } catch (error) {
        console.error("Gagal mengambil data postingan untuk hero:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHeroPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
          {heroSlides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide max-h-full bg-overlay bg-overlay-400 bg-[#21262c] opacity-100 bg-image !bg-cover !bg-[center_center] !h-[750px] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)]"
              style={{
                backgroundImage: `url(${BASE_URL}${slide.featured_image})`,
              }}
            >
              <div className="container !h-full">
                <div className="flex flex-wrap mx-[-15px] !h-full">
                  <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-7/12 lg:!ml-0 xl:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full text-center lg:text-left xl:text-left justify-center self-center items-start">
                    <h2 className="xl:!text-[2.8rem] !leading-[1.2] font-bold !text-[calc(1.405rem_+_1.86vw)] !mb-4 !text-white animate__animated animate__slideInDown animate__delay-1s">
                      {slide.title}
                    </h2>
                    <p
                      className="lead text-[1.15rem] leading-normal !mb-7 !text-white animate__animated animate__slideInRight animate__delay-2s"
                      dangerouslySetInnerHTML={{ __html: slide.excerpt }}
                    />
                    <div className="animate__animated animate__slideInUp animate__delay-3s">
                      <Link
                        to={`/blog`}
                        className="btn btn-lg btn-outline-white !text-white bg-[#ffffff] !border-white !border-[2px] hover:!text-[#343f52] hover:bg-[#ffffff] hover:border-white focus:shadow-[rgba(255,255,255,1)] active:!text-[#343f52] active:bg-[#ffffff] active:border-white disabled:text-white disabled:bg-transparent disabled:border-white !rounded-[50rem]"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-controls">
          <div className="swiper-navigation">
            <div className="swiper-button swiper-button-prev snbp7"></div>
            <div className="swiper-button swiper-button-next snbn7"></div>
          </div>
          <div className="swiper-pagination spd7"></div>
        </div>
      </div>
      <ModalVideo
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        src={"/assets/media/movie.mp4"}
      />
    </>
  );
}