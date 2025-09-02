// src/components/Media.jsx

import React, { useState, useEffect } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Gallery, Item } from "react-photoswipe-gallery";
import { getMedia } from "@/services/mediaService";
import { BASE_URL } from "@/config/url";

const stripHtmlTags = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

export default function Media({ title }) {
  const [mediaCollections, setMediaCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await getMedia();
        const limitedData = response.data.slice(0, 10);
        setMediaCollections(limitedData);
      } catch (err) {
        setError("Failed to fetch media.");
        console.error("Error fetching media:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p>Loading media...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <>
      <section className="wrapper !bg-[#ffffff]">
        <div className="container py-12 xl:!py-16 lg:!py-16 md:!py-16">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="lg:w-10/12 xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
              <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
                {title}
              </h2>
              <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] !mb-10 xxl:!px-10">
                Jelajahi galeri kami untuk melihat dokumentasi visual dari
                proyek dan acara-acara kami.
              </h3>
            </div>
          </div>
          <div className="swiper-container grid-view relative !z-10 !mb-16">
            <Swiper
              className="swiper"
              spaceBetween={30}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd22",
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                575: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 2 },
                1200: { slidesPerView: 4 },
              }}
            >
              {mediaCollections.map((mediaCollection) => (
                <SwiperSlide
                  key={mediaCollection.id}
                  className="swiper-slide group"
                >
                  <Gallery>
                    {mediaCollection.featured_image && (
                      <Item
                        original={`${BASE_URL}${mediaCollection.original_featured_image}`} // Menggunakan original_featured_image di sini
                        thumbnail={`${BASE_URL}${mediaCollection.featured_image}`}
                        caption={mediaCollection.title}
                      >
                        {({ ref, open }) => (
                          <figure className="!rounded-[.4rem] !mb-6">
                            <img
                              className="!rounded-[.4rem] w-full h-full object-cover"
                              src={`${BASE_URL}${mediaCollection.featured_image}`}
                              alt={mediaCollection.title}
                              ref={ref}
                              onClick={open}
                            />
                            <a
                              className="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                              onClick={open}
                              data-gallery="projects-group"
                            >
                              <i className="uil uil-focus-add" />
                            </a>
                          </figure>
                        )}
                      </Item>
                    )}

                    {mediaCollection.media.map((media, index) => {
                      const isImage = media.url
                        .toLowerCase()
                        .match(/\.(jpeg|jpg|png|gif)$/);
                      const isVideo = media.url
                        .toLowerCase()
                        .match(/\.(mp4|webm|ogg)$/);
                      const originalUrl = `${BASE_URL}${media.url}`;

                      if (
                        index === 0 &&
                        mediaCollection.featured_image &&
                        media.url.endsWith(
                          mediaCollection.featured_image.split("/").pop()
                        )
                      ) {
                        return null;
                      }

                      if (isImage) {
                        return (
                          <div key={media.id} style={{ display: "none" }}>
                            <Item
                              original={originalUrl}
                              thumbnail={originalUrl}
                              caption={mediaCollection.title}
                            >
                              {({ ref, open }) => (
                                <img
                                  ref={ref}
                                  onClick={open}
                                  src={originalUrl}
                                  alt={mediaCollection.title}
                                />
                              )}
                            </Item>
                          </div>
                        );
                      }

                      if (isVideo) {
                        return (
                          <div key={media.id} style={{ display: "none" }}>
                            <Item
                              original={originalUrl}
                              content={
                                <div className="w-full h-full flex items-center justify-center">
                                  <video controls style={{ maxWidth: "100%" }}>
                                    <source
                                      src={originalUrl}
                                      type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                  </video>
                                </div>
                              }
                              thumbnail={originalUrl}
                              caption={mediaCollection.title}
                            >
                              {({ ref, open }) => (
                                <img
                                  ref={ref}
                                  onClick={open}
                                  src={originalUrl}
                                  alt={mediaCollection.title}
                                />
                              )}
                            </Item>
                          </div>
                        );
                      }

                      return null;
                    })}
                  </Gallery>
                  <div className="project-details flex justify-center flex-col">
                    <div className="post-header">
                      <h2 className="post-title h3 !text-[#343f52]">
                        {mediaCollection.title}
                      </h2>
                      <div className="!tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]">
                        {stripHtmlTags(mediaCollection.caption)}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-controls">
              <div className="swiper-pagination spd22"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}