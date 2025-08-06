import React from "react";
import { Link } from "react-router-dom";

import { blogPosts } from "@/data/blogs";
export default function Blogs() {
  return (
    <section className="wrapper bg-[rgba(246,247,249,1)]">
      <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="llg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <h2 className="!text-[0.8rem] uppercase !text-[#3f78e0] !mb-3 !leading-[1.35] !tracking-[0.02rem]">
              Case Studies
            </h2>
            <h3 className="xl:!text-[2rem] !leading-[1.2] !text-[calc(1.325rem_+_0.9vw)] font-semibold !mb-10">
              Check out some of our awesome projects with creative ideas and
              great design.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] grid-view !mt-[-30px]">
          {blogPosts.slice(0, 3).map((elm, i) => (
            <div
              key={i}
              className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
            >
              <article>
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <figure className="card-img-top overlay overlay-1 hover-scale group">
                    <a href="#">
                      <img
                        className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                        alt="image"
                        src={elm.imageUrl}
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
                  <div className="card-body flex-[1_1_auto] !p-[1.75rem_1.75rem_1rem_1.75rem] max-md:!p-[40px_40px_20px]">
                    <div className="post-header">
                      <h2 className="post-title h3 !mt-1 !mb-3">
                        <Link
                          className="!text-[#343f52] hover:!text-[#3f78e0]"
                          to={`/blog-post`}
                        >
                          {elm.title}
                        </Link>
                      </h2>
                    </div>
                    {/* /.post-header */}
                    <div className="!relative">
                      <p>{elm.content}</p>
                    </div>
                    {/* /.post-content */}
                  </div>
                  {/*/.card-body */}
                  <div className="card-footer xl:!p-[1.25rem_1.75rem_1.25rem] lg:!p-[1.25rem_1.75rem_1.25rem] md:!p-[1.25rem_1.75rem_1.25rem] max-md:!p-[0.9rem_2rem]">
                    <ul className="!text-[0.75rem] !text-[#aab0bc] m-0 p-0 list-none flex !mb-0">
                      <li className="post-date inline-block">
                        <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                        <span>{elm.date}</span>
                      </li>
                      <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                        <a
                          className="!text-[#aab0bc] hover:!text-[#3f78e0] hover:!border-[#3f78e0]"
                          href="#"
                        >
                          <i className="uil uil-file-alt !text-[.75rem] pr-[0.2rem] align-[-.05rem] before:content-['\eaec']" />
                          {elm.category}
                        </a>
                      </li>
                    </ul>
                    {/* /.post-meta */}
                  </div>
                  {/* /.card-footer */}
                </div>
                {/* /.card */}
              </article>
              {/* /article */}
            </div>
          ))}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
