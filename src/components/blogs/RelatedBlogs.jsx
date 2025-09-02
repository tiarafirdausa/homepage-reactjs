// src/components/blogs/RelatedBlogs.jsx
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BASE_URL } from "@/config/url";

export default function RelatedBlogs({ relatedPosts }) {
  if (!relatedPosts || relatedPosts.length === 0) {
    return null;
  }

  return (
    <>
      <hr />
      <h3 className="!mb-6">You Might Also Like</h3>
      <div className="swiper-container blog grid-view !mb-24 relative z-10">
        <Swiper
          className="swiper"
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spdb2",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            575: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {relatedPosts.map((post) => (
            <SwiperSlide key={post.id} className="swiper-slide">
              <article>
                <figure className="overlay overlay-1 hover-scale group rounded !mb-5">
                  <Link to={`/post/${post.slug}`}>
                    <img
                      className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                      alt={post.title}
                      src={`${BASE_URL}${post.featured_image}`}
                      width={560}
                      height={350}
                    />
                  </Link>
                  <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                    <h5 className="from-top !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                      Read More
                    </h5>
                  </figcaption>
                </figure>
                <div className="post-header !mb-[.9rem]">
                  <div className="inline-flex !mb-[.4rem] uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !text-[#aab0bc] relative align-top !pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0]">
                    <Link
                      to={`/categories/${post.category.slug}`}
                      className="hover"
                      rel="category"
                    >
                      {post.category.name}
                    </Link>
                  </div>
                  <h2 className="post-title h3 !mt-1 !mb-3">
                    <Link
                      className="!text-[#343f52] hover:!text-[#3f78e0]"
                      to={`/post/${post.slug}`}
                    >
                      {post.title}
                    </Link>
                  </h2>
                </div>
                <div className="post-footer">
                  <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none !mb-0">
                    <li className="post-date inline-block">
                      <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                      <span>
                        {new Date(post.published_at).toLocaleDateString()}
                      </span>
                    </li>
                  </ul>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-controls">
          <div className="swiper-pagination spdb2"></div>
        </div>
      </div>
    </>
  );
}