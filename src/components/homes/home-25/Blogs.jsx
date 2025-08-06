import React from "react";
import { Link } from "react-router-dom";

import { posts3, posts5, posts6 } from "@/data/blogs";
import { socialLinks } from "@/data/socials";
import Pagination from "@/components/common/Pagination";
export default function Blogs() {
  return (
    <>
      <div className="flex flex-wrap mx-[-15px] grid-view md:mx-[-20px] lg:mx-[-20px] xl:mx-[-25px] !mt-[-40px] xl:!mt-0 lg:!mt-0 !text-center">
        <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto md:!px-[20px] lg:!px-[20px] xl:!px-[25px] !mt-[40px] xl:!mt-0 lg:!mt-0">
          <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
            <figure className="card-img-top overlay overlay-1 group">
              <a href="#">
                <img
                  className="max-w-full h-auto"
                  alt="image"
                  src="/assets/img/photos/f1.jpg"
                  width={600}
                  height={420}
                />
              </a>
              <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                <h5 className="from-top !mb-0 !absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2/4 !text-white">
                  Read Details
                </h5>
              </figcaption>
            </figure>
            <div className="card-body p-5">
              <h4 className="!mb-0">About Me</h4>
            </div>
            {/*/.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/*/column */}
        <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto md:!px-[20px] lg:!px-[20px] xl:!px-[25px] !mt-[40px] xl:!mt-0 lg:!mt-0">
          <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
            <figure className="card-img-top overlay overlay-1 group">
              <a href="#">
                <img
                  className="max-w-full h-auto"
                  alt="image"
                  src="/assets/img/photos/f2.jpg"
                  width={600}
                  height={420}
                />
              </a>
              <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                <h5 className="from-top !mb-0 !absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2/4 !text-white">
                  See Destinations
                </h5>
              </figcaption>
            </figure>
            <div className="card-body p-5">
              <h4 className="!mb-0">Destinations</h4>
            </div>
            {/*/.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/*/column */}
        <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto md:!px-[20px] lg:!px-[20px] xl:!px-[25px] !mt-[40px] xl:!mt-0 lg:!mt-0">
          <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
            <figure className="card-img-top overlay overlay-1 group">
              <a href="#">
                <img
                  className="max-w-full h-auto"
                  alt="image"
                  src="/assets/img/photos/f3.jpg"
                  width={600}
                  height={420}
                />
              </a>
              <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                <h5 className="from-top !mb-0 !absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2/4 !text-white">
                  Follow Me
                </h5>
              </figcaption>
            </figure>
            <div className="card-body p-5">
              <h4 className="!mb-0">Instagram</h4>
            </div>
            {/*/.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
      <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[7rem]">
        <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full lg:!px-[20px] xl:!px-[35px] xl:!mt-0 lg:!mt-0">
          <div className="blog classic-view">
            {posts5.map((post) => (
              <article key={post.id} className="post !mb-8">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  {post.videoId ? (
                    <div className="card-img-top">
                      <div
                        className="player relative z-[2] rounded-[0.4rem]"
                        data-plyr-provider="youtube"
                        data-plyr-embed-id={post.videoId}
                      />
                    </div>
                  ) : (
                    <figure className="card-img-top overlay overlay-1 group">
                      <Link to={`/blog-post`}>
                        <img
                          alt="image"
                          src={post.image}
                          width={945}
                          height={555}
                        />
                      </Link>
                      <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                        <h5 className="from-top !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                          Read More
                        </h5>
                      </figcaption>
                    </figure>
                  )}
                  <div className="card-body flex-[1_1_auto] xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem] p-[40px]">
                    <div className="post-header !mb-[.9rem]">
                      <div className="post-category !mb-[.4rem] uppercase !tracking-[0.02rem] !text-[#aab0bc]">
                        <a
                          href="#"
                          className={`hover !text-[${post.categoryColor}] focus:!text-[${post.categoryColor}] hover:!text-[${post.categoryColor}]`}
                          rel="category"
                        >
                          {post.category}
                        </a>
                      </div>
                      <h2 className="post-title !mt-1 !leading-[1.35] !mb-0">
                        <Link
                          className="!text-[#343f52] focus:!text-[#343f52] hover:!text-[#343f52]"
                          to={`/blog-post`}
                        >
                          {post.title}
                        </Link>
                      </h2>
                    </div>
                    <div className="!relative">
                      <p>{post.content}</p>
                    </div>
                  </div>
                  <div className="card-footer xl:!p-[1.25rem_2.5rem_1.25rem] lg:!p-[1.25rem_2.5rem_1.25rem] md:!p-[1.25rem_2.5rem_1.25rem] p-[18px_40px]">
                    <ul className="!text-[.75rem] !text-[#aab0bc] m-0 p-0 list-none flex !mb-0">
                      <li className="post-date inline-block">
                        <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                        <span>{post.date}</span>
                      </li>
                      <li className="post-author inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                        <a
                          className="!text-[#aab0bc] hover:!text-[#d16b86] hover:!border-[#d16b86]"
                          href="#"
                        >
                          <i className="uil uil-user pr-[0.2rem] align-[-.05rem] before:content-['\ed6f']" />
                          <span>{post.author}</span>
                        </a>
                      </li>
                      <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                        <a
                          className="!text-[#aab0bc] hover:!text-[#d16b86] hover:!border-[#d16b86]"
                          href="#"
                        >
                          <i className="uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-['\ea54']" />
                          {post.comments}
                          <span> Comments</span>
                        </a>
                      </li>
                      <li className="post-likes !ml-auto inline-block">
                        <a
                          className="!text-[#aab0bc] hover:!text-[#d16b86] hover:!border-[#d16b86]"
                          href="#"
                        >
                          <i className="uil uil-heart-alt pr-[0.2rem] align-[-.05rem] before:content-['\eb60']" />
                          {post.likes}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            ))}
            {/* /.post */}
          </div>
          {/* /.blog */}
          <div className="blog itemgrid grid-view">
            <div className="flex flex-wrap mx-[-15px] isotope xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-40px] !mb-8">
              {posts6.map((post) => (
                <article
                  key={post.id}
                  className="item post xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[40px] !px-[15px] max-w-full"
                >
                  <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                    <figure className="card-img-top overlay overlay-1 group">
                      <a href="#">
                        <img
                          alt="image"
                          src={post.image}
                          width={600}
                          height={420}
                        />
                      </a>
                      <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                        <h5 className="from-top !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                          Read More
                        </h5>
                      </figcaption>
                    </figure>
                    <div className="card-body flex-[1_1_auto] !p-[1.75rem_1.75rem_1rem_1.75rem] max-md:!p-[40px_40px_20px]">
                      <div className="post-header">
                        <div className="post-category !mb-[.4rem] uppercase !tracking-[0.02rem] !text-[#aab0bc]">
                          <a
                            href="#"
                            className={`hover !text-[${post.categoryColor}] focus:!text-[${post.categoryColor}] hover:!text-[${post.categoryColor}]`}
                            rel="category"
                          >
                            {post.category}
                          </a>
                        </div>
                        <h2 className="post-title h3 !mt-1 !mb-3">
                          <Link
                            className="!text-[#343f52] focus:!text-[#343f52] hover:!text-[#343f52]"
                            to={`/blog-post`}
                          >
                            {post.title}
                          </Link>
                        </h2>
                      </div>
                      <div className="!relative">
                        <p>{post.content}</p>
                      </div>
                    </div>
                    <div className="card-footer xl:!p-[1.25rem_1.75rem_1.25rem] lg:!p-[1.25rem_1.75rem_1.25rem] md:!p-[1.25rem_1.75rem_1.25rem] p-[18px_40px]">
                      <ul className="!text-[.75rem] !text-[#aab0bc] m-0 p-0 list-none flex !mb-0">
                        <li className="post-date inline-block">
                          <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                          <span>{post.date}</span>
                        </li>
                        <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                          <a
                            className="!text-[#aab0bc] hover:!text-[#d16b86] hover:!border-[#d16b86]"
                            href="#"
                          >
                            <i className="uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-['\ea54']" />
                            {post.comments}
                          </a>
                        </li>
                        <li className="post-likes !ml-auto inline-block">
                          <a
                            className="!text-[#aab0bc] hover:!text-[#d16b86] hover:!border-[#d16b86]"
                            href="#"
                          >
                            <i className="uil uil-heart-alt pr-[0.2rem] align-[-.05rem] before:content-['\eb60']" />
                            {post.likes}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
              {/* /.post */}
            </div>
            {/* /.row */}
          </div>
          {/* /.blog */}
          <nav className="flex" aria-label="pagination">
            <ul className="pagination pagination-alt">
              <Pagination />
            </ul>
            {/* /.pagination */}
          </nav>
          {/* /nav */}
        </div>
        {/* /column */}
        <aside className="xl:w-4/12 lg:w-4/12 flex-[0_0_auto] !px-[15px] max-w-full sidebar !mt-8 lg:!px-[20px] xl:!px-[35px] xl:!mt-0 lg:!mt-0">
          <div className="widget">
            <h4 className="widget-title !mb-3">About Me</h4>
            <figure className="!rounded-[.4rem] !mb-4">
              <img
                className="max-w-full h-auto !rounded-[.4rem]"
                alt="image"
                src="/assets/img/photos/f1.jpg"
                width={600}
                height={420}
              />
            </figure>
            <p>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut fermentum. Nulla vitae elit libero, a pharetra augue.
              Donec id elit non mi porta gravida at eget metus.
            </p>
            <nav className="nav social">
              {socialLinks.map((elm, i) => (
                <a
                  key={i}
                  className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href={elm.href}
                >
                  <i
                    className={`uil ${elm.icon} before:content-[${elm.unicode}] !text-[${elm.color}] text-[1rem]`}
                  />
                </a>
              ))}
            </nav>
            {/* /.social */}
          </div>
          {/* /.widget */}
          <div className="widget !mt-[40px]">
            <h4 className="widget-title !mb-3">Popular Posts</h4>
            <ul className="m-0 p-0 after:content-[''] after:block after:h-0 after:clear-both after:invisible">
              {posts3.map((post, i) => (
                <li
                  key={post.id}
                  className={`clear-both block overflow-hidden ${
                    i !== 0 ? "!mt-4" : ""
                  }`}
                >
                  <figure className="!rounded-[.4rem] float-left w-14 !h-[4.5rem]">
                    <Link to={`/blog-post`}>
                      <img
                        className="!rounded-[.4rem]"
                        alt="image"
                        src={post.image}
                        width={100}
                        height={100}
                      />
                    </Link>
                  </figure>
                  <div className="!relative !ml-[4.25rem] !mb-0">
                    <h6 className="!mb-2">
                      <Link
                        className="!text-[#343f52] hover:!text-[#3f78e0]"
                        to={`/blog-post`}
                      >
                        {post.title}
                      </Link>
                    </h6>
                    <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none">
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
                          {post.comments}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
            {/* /.image-list */}
          </div>
          {/* /.widget */}
          <div className="widget !mt-[40px]">
            <h4 className="widget-title !mb-3">Categories</h4>
            <ul className="pl-0 list-none bullet-primary !text-inherit">
              <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:!text-[#d16b86] before:font-SansSerif">
                <a className="!text-[#60697b] hover:!text-[#d16b86]" href="#">
                  Teamwork (21)
                </a>
              </li>
              <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:!text-[#d16b86] before:font-SansSerif !mt-[.35rem]">
                <a className="!text-[#60697b] hover:!text-[#d16b86]" href="#">
                  Ideas (19)
                </a>
              </li>
              <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:!text-[#d16b86] before:font-SansSerif !mt-[.35rem]">
                <a className="!text-[#60697b] hover:!text-[#d16b86]" href="#">
                  Workspace (16)
                </a>
              </li>
              <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:!text-[#d16b86] before:font-SansSerif !mt-[.35rem]">
                <a className="!text-[#60697b] hover:!text-[#d16b86]" href="#">
                  Coding (7)
                </a>
              </li>
              <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:!text-[#d16b86] before:font-SansSerif !mt-[.35rem]">
                <a className="!text-[#60697b] hover:!text-[#d16b86]" href="#">
                  Meeting (12)
                </a>
              </li>
              <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:!text-[#d16b86] before:font-SansSerif !mt-[.35rem]">
                <a className="!text-[#60697b] hover:!text-[#d16b86]" href="#">
                  Business Tips (14)
                </a>
              </li>
            </ul>
          </div>
          {/* /.widget */}
          <div className="widget !mt-[40px]">
            <h4 className="widget-title !mb-3">Tags</h4>
            <ul className="pl-0 list-none tag-list">
              <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
                <a
                  href="#"
                  className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
                >
                  Still Life
                </a>
              </li>
              <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
                <a
                  href="#"
                  className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
                >
                  Urban
                </a>
              </li>
              <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
                <a
                  href="#"
                  className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
                >
                  Nature
                </a>
              </li>
              <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
                <a
                  href="#"
                  className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
                >
                  Landscape
                </a>
              </li>
              <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
                <a
                  href="#"
                  className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
                >
                  Macro
                </a>
              </li>
              <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
                <a
                  href="#"
                  className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
                >
                  Fun
                </a>
              </li>
              <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
                <a
                  href="#"
                  className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
                >
                  Workshop
                </a>
              </li>
              <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
                <a
                  href="#"
                  className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
                >
                  Photography
                </a>
              </li>
            </ul>
          </div>
          {/* /.widget */}
          <div className="widget !mt-[40px]">
            <h4 className="widget-title !mb-3">Archive</h4>
            <ul className="pl-0 list-none bullet-primary !text-inherit">
              <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif">
                <a className="!text-[#60697b] hover:!text-[#d16b86]" href="#">
                  February 2019
                </a>
              </li>
              <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
                <a className="!text-[#60697b] hover:!text-[#d16b86]" href="#">
                  January 2019
                </a>
              </li>
              <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
                <a className="!text-[#60697b] hover:!text-[#d16b86]" href="#">
                  December 2018
                </a>
              </li>
              <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
                <a className="!text-[#60697b] hover:!text-[#d16b86]" href="#">
                  November 2018
                </a>
              </li>
              <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
                <a className="!text-[#60697b] hover:!text-[#d16b86]" href="#">
                  October 2018
                </a>
              </li>
            </ul>
          </div>
          {/* /.widget */}
        </aside>
        {/* /column .sidebar */}
      </div>
    </>
  );
}
