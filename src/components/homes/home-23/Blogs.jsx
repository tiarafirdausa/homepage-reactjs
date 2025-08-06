import { blogPosts2 } from "@/data/blogs";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export default function Blogs({ bgColor = "!bg-[#f3f8f5]" }) {
  return (
    <section className={"wrapper  " + bgColor}>
      <div className="overflow-hidden">
        <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
              <i className="icn-flower !text-[#7cb798] xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] opacity-25 before:content-['\e907']" />
              <h2 className="xl:!text-[1.7rem] !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] font-semibold !tracking-[normal] !text-center !mt-2 !mb-10">
                Here are the latest posts from my blog that grabbed the most
                attention.
              </h2>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
          <div
            className="swiper-container nav-bottom nav-color !mb-[4.5rem] relative z-10"
            data-margin={30}
            data-dots="false"
            data-nav="true"
            data-items-lg={3}
            data-items-md={2}
            data-items-xs={1}
          >
            <Swiper
              className="swiper overflow-visible pb-2"
              modules={[Navigation]}
              navigation={{
                prevEl: ".snbp28",
                nextEl: ".snbn28",
              }}
              spaceBetween={30}
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
            >
              {blogPosts2.map((blog, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <article>
                    <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                      <figure className="card-img-top overlay overlay-1 group">
                        <a href="#">
                          <img
                            srcSet={blog.srcSet}
                            alt="image"
                            src={blog.src}
                            width={410}
                            height={290}
                          />
                        </a>
                        <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                          <h5 className="from-top !mb-0 absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2/4 group-hover:-translate-y-2/4">
                            Read More
                          </h5>
                        </figcaption>
                      </figure>
                      <div className="card-body p-6">
                        <div className="post-header">
                          <div className="post-category !mb-[.4rem] uppercase !tracking-[0.02rem] !text-[#aab0bc]">
                            <a
                              href="#"
                              className="hover !text-[#7cb798]"
                              rel="category"
                            >
                              {blog.category}
                            </a>
                          </div>
                          {/* /.post-category */}
                          <h2 className="post-title h3 !mt-1 !mb-3 !text-[1.15rem] !font-semibold !tracking-[normal]">
                            <Link
                              className="!text-[#343f52] hover:!text-[#7cb798]"
                              to={`/blog-post`}
                            >
                              {blog.title}
                            </Link>
                          </h2>
                        </div>
                        {/* /.post-header */}
                        <div className="post-footer">
                          <ul className="!text-[0.75rem] !text-[#aab0bc] m-0 p-0 list-none flex !mb-0">
                            <li className="post-date inline-block">
                              <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                              <span>{blog.date}</span>
                            </li>
                            <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                              <a
                                className="!text-[#aab0bc] hover:!text-[#7cb798] hover:!border-[#7cb798]"
                                href="#"
                              >
                                <i className="uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-['\ea54']" />
                                {blog.commentsCount}
                              </a>
                            </li>
                          </ul>
                          {/* /.post-meta */}
                        </div>
                        {/* /.post-footer */}
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/* /.card */}
                  </article>
                  {/* /article */}
                </SwiperSlide>
              ))}

              {/*/.swiper-wrapper */}
            </Swiper>
            <div className="swiper-controls">
              <div className="swiper-navigation">
                <div className="swiper-button swiper-button-prev snbp28"></div>
                <div className="swiper-button swiper-button-next snbn28"></div>
              </div>
            </div>
            {/* /.swiper */}
          </div>
          {/* /.swiper-container */}
        </div>
        {/* /.container */}
      </div>
      {/* /.overflow-hidden */}
    </section>
  );
}
