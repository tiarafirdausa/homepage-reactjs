import BlogSingle from "@/components/blogs/BlogSingle";
import Footer5 from "@/components/footers/Footer5";
import Header34 from "@/components/headers/Header34";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blog Post || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function BlogPostPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="grow shrink-0">
        <Header34
          parentClass="relative wrapper bg-soft-primary !bg-[#edf2fc]"
          navClass="navbar navbar-expand-lg center-nav navbar-light transparent xl:pt-[6px] lg:pt-[6px]"
        />
        <section className="wrapper !bg-[#edf2fc]">
          <div className="container pt-10 pb-36 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-40 lg:pb-40 md:pb-40 !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="md:w-10/12 lg:w-10/12 xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <div className="post-header !mb-[.9rem]">
                  <div className="inline-flex uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !text-[#aab0bc] !mb-[0.4rem] text-line relative align-top !pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0]">
                    <a href="#" className="hover" rel="category">
                      Teamwork
                    </a>
                  </div>
                  {/* /.post-category */}
                  <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-4">
                    Commodo Dolor Bibendum Parturient Cursus Mollis
                  </h1>
                  <ul className="!text-[0.8rem] !text-[#aab0bc] m-0 p-0 list-none !mb-5">
                    <li className="post-date inline-block">
                      <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                      <span>5 Jul 2022</span>
                    </li>
                    <li className="post-author inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0_.4rem] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                      <a
                        className="!text-[0.8rem] !text-[#aab0bc] hover:!text-[#3f78e0] hover:!border-[#3f78e0]"
                        href="#"
                      >
                        <i className="uil uil-user pr-[0.2rem] align-[-.05rem] before:content-['\ed6f']" />
                        <span>By Sandbox</span>
                      </a>
                    </li>
                    <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0_.4rem] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                      <a
                        className="!text-[0.8rem] !text-[#aab0bc] hover:!text-[#3f78e0] hover:!border-[#3f78e0]"
                        href="#"
                      >
                        <i className="uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-['\ea54']" />
                        3<span> Comments</span>
                      </a>
                    </li>
                    <li className="post-likes inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0_.4rem] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                      <a
                        className="!text-[0.8rem] !text-[#aab0bc] hover:!text-[#3f78e0] hover:!border-[#3f78e0]"
                        href="#"
                      >
                        <i className="uil uil-heart-alt pr-[0.2rem] align-[-.05rem] before:content-['\eb60']" />
                        3<span> Likes</span>
                      </a>
                    </li>
                  </ul>
                  {/* /.post-meta */}
                </div>
                {/* /.post-header */}
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        <section className="wrapper !bg-[#ffffff]">
          <div className="container !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <BlogSingle />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
