import { testimonials } from "@/data/testimonials";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay !text-white bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]"
      style={{ backgroundImage: "url(/assets/img/photos/bg32.jpg)" }}
    >
      <div className="container py-[4.5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem] !text-center">
        <i className="icn-flower !text-white xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] opacity-50 before:content-['\e907'] font-CustomFont" />
        <div className="flex flex-wrap mx-[-15px] !mt-3">
          <div className="xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <div
              className="swiper-container dots-light dots-closer !mb-6 relative z-10"
              data-margin={30}
              data-dots="true"
            >
              <Swiper
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                  el: ".spd26",
                }}
                className="swiper"
              >
                {testimonials.map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <blockquote className="border-0 text-[1.2rem] !mb-0 m-[0_0_1rem] !leading-[1.7] font-medium">
                      <p>
                        “Fusce dapibus tellus ac cursus commodo, tortor mauris
                        condimentum nibh fermentum massa, justo sit amet vivamus
                        sagittis lacus vel augue laoreet rutrum faucibus dolor
                        auctor. Cras mattis consectetur purus.”
                      </p>
                      <div className="flex items-center text-left justify-center">
                        <div className="info p-0">
                          <h6 className="!mb-0 !text-white !text-[.9rem] !tracking-[normal] font-semibold">
                            Julia &amp; David
                          </h6>
                        </div>
                      </div>
                    </blockquote>
                  </SwiperSlide>
                ))}
                {/*/.swiper-wrapper */}
              </Swiper>
              <div className="swiper-controls">
                <div className="swiper-pagination spd26"></div>
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
  );
}
