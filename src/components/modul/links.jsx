import React, { useState, useEffect } from "react";
import { getLinks } from "@/services/linkService";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BASE_URL } from "@/config/url"; // Import BASE_URL

export default function Link({ title }) {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const data = await getLinks();
        setLinks(data.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch links:", err);
        setError("Failed to fetch links. Please try again later.");
        setLoading(false);
      }
    };
    fetchLinks();
  }, []);

  if (loading) {
    return (
      <section className="wrapper !bg-[#ffffff]">
        <div className="container py-20">
          <div>Memuat tautan...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="wrapper !bg-[#ffffff]">
        <div className="container py-20">
          <div>{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="links" className="wrapper !bg-[#ffffff]">
      <div className="container py-12 xl:!py-16 lg:!py-16 md:!py-16">
        <div className="flex flex-wrap mx-[-15px] !mb-3">
          <div className="md:w-10/12 lg:w-10/12 xl:w-9/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 409.6 356.2"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/team.svg"
              className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] !mb-4 m-[0_auto]"
            >
              <path
                className="lineal-fill"
                d="M265.2 180.7H144.4v-17.6c0-33.3 27-60.4 60.4-60.4s60.4 27 60.4 60.4v17.6z"
              />
              <path
                className="lineal-stroke"
                d="M265.2 191.7H144.4c-6.1 0-11.1-5-11.1-11.1V163c-.5-39.5 31.1-71.8 70.6-72.3s71.8 31.1 72.3 70.6v19.3c0 6.2-4.9 11.1-11 11.1zm-109.7-22.1h98.6v-6.5c.4-27.2-21.4-49.6-48.6-50s-49.6 21.4-50 48.6v7.9z"
              />
              <path
                className="lineal-fill"
                d="M250.4 56.7c0 25.2-20.4 45.6-45.6 45.6s-45.6-20.4-45.6-45.6 20.4-45.6 45.6-45.6c25.2 0 45.6 20.4 45.6 45.6z"
              />
              <path
                className="lineal-stroke"
                d="M204.8 113.3c-31.3 0-56.7-25.4-56.7-56.7S173.5-.1 204.8-.1s56.7 25.4 56.7 56.7c-.1 31.3-25.4 56.7-56.7 56.7zm0-91.2c-19.1 0-34.5 15.4-34.5 34.5s15.4 34.5 34.5 34.5 34.5-15.4 34.5-34.5c0-19-15.5-34.4-34.5-34.5zm193.7 334.1H296.8c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.7c-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.4-6 2.3-11.9 8.3-13.3 5.8-1.4 11.7 2.2 13.2 8 1.2 4.9 1.8 9.9 1.8 14.9v14.8c0 6.1-4.9 11.1-11.1 11.1z"
              />
              <path
                className="lineal-stroke"
                d="M347.6 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.2 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.3-27.3 27.4 0 15.1 12.3 27.3 27.4 27.3S375 256 375 241c0-15.1-12.3-27.3-27.4-27.4zM112.8 356.2H11.1c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1.2 10.9 5.3 10.7 11.4-.2 5.9-4.9 10.6-10.7 10.7-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.5-5.9 2.2-11.9 8.1-13.4s11.9 2.2 13.4 8.1c1.2 4.9 1.8 9.9 1.8 14.9v14.8c.1 6.1-4.9 11.1-11.1 11.1.1 0 .1 0 0 0z"
              />
              <path
                className="lineal-stroke"
                d="M61.9 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.1 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.2-27.3 27.4 0 15.1 12.2 27.4 27.4 27.4 15.1 0 27.3-12.2 27.3-27.3 0-15.2-12.3-27.4-27.4-27.5zm142.9 72.1c-6.1 0-11.1-5-11.1-11.1v-56.4c-.2-6.1 4.6-11.2 10.7-11.4 6.1-.2 11.2 4.6 11.4 10.7v57.1c.1 6.2-4.9 11.1-11 11.1z"
              />
              <path
                className="lineal-stroke"
                d="M279.5 285.7H130.1c-6.1.2-11.2-4.6-11.4-10.7s4.6-11.2 10.7-11.4h150.2c6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.8z"
              />
            </svg>
            <h2 className="!text-[.75rem] !leading-[1.35] uppercase !text-[#3f78e0] !text-center">
              {title}
            </h2>
            <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-6 !text-center">
              Daftar tautan eksternal yang terpercaya.
            </h3>
          </div>
        </div>
        <div className="!relative">
          <div
            className="shape bg-dot primary rellax !w-[7rem] !h-[10rem] !absolute z-[1] opacity-50 !bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)]"
            data-rellax-speed={1}
            style={{ top: 0, left: "-1.7rem" }}
          />
          <div className="swiper-container dots-closer blog grid-view !mb-6">
            <Swiper
              className="swiper"
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd13",
              }}
              spaceBetween={0}
              breakpoints={{
                0: { slidesPerView: 1 },
                575: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
                1400: { slidesPerView: 4 },
              }}
            >
              {links.map((link) => (
                <SwiperSlide className="swiper-slide" key={link.id}>
                  <div className="item-inner">
                    <div className="card">
                      <div className="card-body p-[40px]">
                        <img
                          className="rounded-[50%] !w-[5rem] !mb-4"
                          src={link.gambar ? `${BASE_URL}${link.gambar}` : 'placeholder.jpg'} // Use BASE_URL here
                          alt={link.judul}
                          width={100}
                          height={100}
                        />
                        <h4 className="!mb-1">
                          <a href={link.link} target="_blank" rel="noopener noreferrer">
                            {link.judul}
                          </a>
                        </h4>
                        <div className="!text-[0.65rem] !mb-2 uppercase !tracking-[0.02rem] font-bold !text-[#aab0bc]">
                          {link.kategori}
                        </div>
                        <p className="!mb-2">{link.keterangan}</p>
                        <nav className="nav social !mb-0">
                          <a
                            className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="uil uil-link-h before:content-['\ec53'] text-[1rem] !text-[#4470cf]" />
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-controls">
              <div className="swiper-pagination spd13"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}