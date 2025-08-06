import { blogPosts4, slidesData } from "@/data/blogs";

import { Link } from "react-router-dom";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Blogs4() {
  return (
    <section id="snippet-4" className="wrapper !bg-[#ffffff] ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px] items-center !mb-10">
          <div className="md:w-8/12 lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!pr-40">
            <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-0">
              Company news from our blog that got the most attention.
            </h2>
          </div>
          {/*/column */}
          <div className="md:w-4/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-auto lg:!ml-auto md:!ml-auto xl:!text-right lg:!text-right md:!text-right !mt-5 xl:!mt-0 lg:!mt-0 md:!mt-0">
            <a href="#" className="btn btn-soft-primary !rounded-[50rem] !mb-0">
              View All News
            </a>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap xl:mx-[-30px] lg:mx-[-20px] mx-[-15px] !mt-[-50px] blog grid-view">
          <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] xl:!px-[30px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
            {blogPosts4.map((post) => (
              <article key={post.id} className="post !mb-8">
                <div className="post-slider rounded !mb-6">
                  <div className="swiper-container dots-over relative !z-10">
                    <Swiper
                      className="swiper"
                      modules={[Pagination]}
                      pagination={{
                        clickable: true,
                        el: `.spdb${post.id}`,
                      }}
                    >
                      {post.images.map((image, index) => (
                        <SwiperSlide key={index} className="swiper-slide">
                          <img
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            src={image.src}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="swiper-controls">
                      <div className={`swiper-pagination spdb${post.id}`}></div>
                    </div>
                  </div>
                </div>
                <div className="post-header !mb-5">
                  <div className="inline-flex !mb-[.4rem] uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !text-[#aab0bc] relative align-top !pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0]">
                    <a href="#" className="hover" rel="category">
                      {post.category}
                    </a>
                  </div>
                  <h2 className="post-title !mt-1 !mb-4">
                    <Link
                      className="!text-[#343f52] hover:!text-[#3f78e0]"
                      to={`/blog-post`}
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none !mb-0">
                    <li className="post-date inline-block">
                      <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                      <span>{post.date}</span>
                    </li>
                    <li className="post-author inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                      <a
                        className="!text-[#aab0bc] hover:!text-[#3f78e0] hover:!border-[#3f78e0]"
                        href="#"
                      >
                        <i className="uil uil-user pr-[0.2rem] align-[-.05rem] before:content-['\ed6f']" />
                        <span>By {post.author}</span>
                      </a>
                    </li>
                    <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                      <a
                        className="!text-[#aab0bc] hover:!text-[#3f78e0] hover:!border-[#3f78e0]"
                        href="#"
                      >
                        <i className="uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-['\ea54']" />
                        {post.comments}
                        <span> Comments</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="!relative">
                  <p>{post.description}</p>
                </div>
              </article>
            ))}
            {/* /.post */}
          </div>
          {/* /column */}
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[30px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
            <div className="flex flex-wrap mx-[-15px] !mt-[-50px]">
              {slidesData.slice(0, 2).map((post, i) => (
                <div
                  key={i}
                  className="max-lg:w-6/12 max-md:w-full w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px]"
                >
                  <article className="post">
                    <figure className="overlay overlay-1 hover-scale group rounded !mb-5">
                      <a href="#">
                        <img
                          className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                          src={post.imageSrc}
                          alt="image"
                          width={560}
                          height={350}
                        />
                      </a>
                      <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                        <h5 className="from-top !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                          Read More
                        </h5>
                      </figcaption>
                    </figure>
                    <div className="post-header">
                      <div className="inline-flex !mb-[.4rem] uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !text-[#aab0bc] relative align-top !pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0]">
                        <a href="#" className="hover" rel="category">
                          {post.category}
                        </a>
                      </div>
                      {/* /.post-category */}
                      <h2 className="post-title h3 !mt-1 !mb-3">
                        <Link
                          className="!text-[#343f52] hover:!text-[#3f78e0]"
                          to={`/blog-post`}
                        >
                          {post.title}
                        </Link>
                      </h2>
                    </div>
                    {/* /.post-header */}
                    <div className="post-footer">
                      <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none !mb-0">
                        <li className="post-date inline-block">
                          <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                          <span>{post.date}</span>
                        </li>
                        <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                          <a
                            className="!text-[#aab0bc] hover:!text-[#3f78e0] hover:!border-[#3f78e0]"
                            href="#"
                          >
                            <i className="uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-['\ea54']" />
                            4
                          </a>
                        </li>
                      </ul>
                      {/* /.post-meta */}
                    </div>
                    {/* /.post-footer */}
                  </article>
                  {/* /.post */}
                </div>
              ))}
            </div>
            {/* /.row */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}

      {/* /.container */}
    </section>
  );
}
