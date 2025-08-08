import { Swiper, SwiperSlide } from "swiper/react";
import Pagination1 from "../common/Pagination";
import { Navigation, Pagination } from "swiper/modules";
import { BASE_URL } from "@/config/url";
import { Link } from "react-router-dom";

export default function Blogs({
  parentClass = "xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto",
  marginTop = true,
  posts,
  totalPages,
  activePage,
  onPageChange,
}) {
  return (
    <div className={parentClass}>
      <div className={`blog classic-view ${marginTop ? "!mt-[-7rem]" : ""} `}>
        {posts &&
          posts.map((post) => (
            <article key={post.id} className="post !mb-8">
              <div className="card">
                {post.featured_image ? (
                  <figure className="card-img-top overlay overlay-1 hover-scale group">
                    <Link
                      className="!text-[#343f52] hover:!text-[#3f78e0]"
                      to={`/post/${post.slug}`}
                    >
                      <img
                        className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                        alt="image"
                        src={`${BASE_URL}${post.featured_image}`}
                        width={960}
                        height={600}
                      />
                    </Link>
                    <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                      <h5 className="from-top !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                        Read More
                      </h5>
                    </figcaption>
                  </figure>
                ) : post.gallery_images && post.gallery_images.length > 0 ? (
                  <div className="post-slider card-img-top">
                    <div className="swiper-container dots-over relative !z-10">
                      <Swiper
                        className="swiper"
                        modules={[Navigation, Pagination]}
                        pagination={{ clickable: true, el: ".spdb1" }}
                        navigation={{ prevEl: ".snbpb1", nextEl: ".snbnb1" }}
                      >
                        {post.gallery_images.map((img, index) => (
                          <SwiperSlide key={index} className="swiper-slide">
                            <img
                              className="w-full h-auto"
                              alt="image"
                              src={`${BASE_URL}${img.image_path}`}
                              width={960}
                              height={600}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      <div className="swiper-controls">
                        <div className="swiper-navigation">
                          <div className="swiper-button swiper-button-prev snbpb1"></div>
                          <div className="swiper-button swiper-button-next snbnb1"></div>
                        </div>
                        <div className="swiper-pagination spdb1"></div>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="card-body flex-[1_1_auto] p-[40px] xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem] max-md:pb-4">
                  <div className="post-header !mb-[.9rem]">
                    <div className="inline-flex !mb-[.4rem] uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !text-[#aab0bc] relative align-top !pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0]">
                      <a
                        href={`/${post.category.slug}`}
                        className="hover"
                        rel="category"
                      >
                        {post.category.name}
                      </a>
                    </div>
                    <h2 className="post-title !mt-1 !leading-[1.35] !mb-0">
                      <Link
                        className="!text-[#343f52] hover:!text-[#3f78e0]"
                        to={`/post/${post.slug}`}
                      >
                        {post.title}
                      </Link>
                    </h2>
                  </div>
                  <div className="!relative">
                    <div
                      className="!relative"
                      dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    />
                  </div>
                </div>

                <div className="card-footer xl:!p-[1.25rem_2.5rem_1.25rem] lg:!p-[1.25rem_2.5rem_1.25rem] md:!p-[1.25rem_2.5rem_1.25rem] p-[18px_40px]">
                  <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none flex !mb-0">
                    <li className="post-date inline-block">
                      <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                      <span>
                        {new Date(post.published_at).toLocaleDateString()}
                      </span>
                    </li>
                    <li className="post-author inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                      <a
                        className="!text-[#aab0bc] hover:!text-[#3f78e0] hover:!border-[#3f78e0]"
                        href="#"
                      >
                        <i className="uil uil-user pr-[0.2rem] align-[-.05rem] before:content-['\ed6f']" />
                        <span>{post.author_name}</span>
                      </a>
                    </li>
                    <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                      <a
                        className="!text-[#aab0bc] hover:!text-[#3f78e0] hover:!border-[#3f78e0]"
                        href="#"
                      >
                        <i className="uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-['\ea54']" />
                        <span> Comments</span>
                      </a>
                    </li>
                    <li className="post-likes !ml-auto inline-block">
                      <a
                        className="!text-[#aab0bc] hover:!text-[#3f78e0] hover:!border-[#3f78e0]"
                        href="#"
                      >
                        <i className="uil uil-heart-alt pr-[0.2rem] align-[-.05rem] before:content-['\eb60']" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          ))}
      </div>
      {/* /.blog */}
      <div className="wrapper">
        <div className="container py-8">
          <nav className="flex justify-center" aria-label="pagination">
            <Pagination1 
              totalPages={totalPages} 
              activePage={activePage}
              onPageChange={onPageChange}
            />
          </nav>
        </div>
      </div>
    </div>
  );
}
