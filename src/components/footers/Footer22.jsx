import React from "react";
import { Link } from "react-router-dom";

import { posts4 } from "@/data/blogs";
import { socialLinks } from "@/data/socials";
import { footerLinks, footerLinks2 } from "@/data/footerLinks";
export default function Footer22() {
  return (
    <footer className="bg-[#21262c] opacity-100 !text-[#cacaca]">
      <div className="container py-16 xl:!py-20 lg:!py-20 md:!py-20">
        <div className="flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0">
          <div className="md:w-4/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <h4 className="widget-title !text-white !mb-3">Popular Posts</h4>
            <ul className="m-0 p-0 after:content-[''] after:block after:h-0 after:clear-both after:invisible">
              {posts4.map((post, index) => (
                <li
                  key={post.id}
                  className={`clear-both block overflow-hidden ${
                    index !== 0 ? "!mt-5" : ""
                  }`}
                >
                  <figure className="float-left !w-[3.5rem] !h-[3.5rem] rounded-[0.4rem]">
                    <Link to={`/blog-post`}>
                      <img
                        className="rounded-[0.4rem]"
                        alt="image"
                        src={post.image}
                        width={140}
                        height={140}
                      />
                    </Link>
                  </figure>
                  <div className="!relative !ml-[4.25rem] !mb-0">
                    <h6 className="!mb-2">
                      <Link
                        className="!text-white hover:!text-[#d16b86]"
                        to={`/blog-post`}
                      >
                        {post.title}
                      </Link>
                    </h6>
                    <ul className="!text-[0.75rem] !text-[#cacaca] m-0 p-0 list-none">
                      <li className="post-date inline-block">
                        <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                        <span>{post.date}</span>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
            {/* /.image-list */}
          </div>
          {/* /column */}
          <div className="md:w-4/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <div className="widget">
              <h4 className="widget-title !text-white !mb-3">Tags</h4>
              <ul className="pl-0 list-none tag-list">
                <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
                  <a
                    href="#"
                    className="btn btn-soft-ash !text-white btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
                  >
                    Still Life
                  </a>
                </li>
                <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
                  <a
                    href="#"
                    className="btn btn-soft-ash !text-white btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
                  >
                    Urban
                  </a>
                </li>
                <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
                  <a
                    href="#"
                    className="btn btn-soft-ash !text-white btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
                  >
                    Nature
                  </a>
                </li>
                <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
                  <a
                    href="#"
                    className="btn btn-soft-ash !text-white btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
                  >
                    Landscape
                  </a>
                </li>
              </ul>
            </div>
            {/* /.widget */}
            <div className="widget">
              <h4 className="widget-title !text-white !mb-3">Categories</h4>
              <ul className="pl-0 list-none text-inherit bullet-white">
                <li className="relative !pl-4 before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:text-white before:font-SansSerif">
                  <a className="!text-[#cacaca] hover:!text-[#d16b86]" href="#">
                    Lifestyle (21)
                  </a>
                </li>
                <li className="!mt-[0.35rem] relative !pl-4 before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:text-white before:font-SansSerif">
                  <a className="!text-[#cacaca] hover:!text-[#d16b86]" href="#">
                    Photography (19)
                  </a>
                </li>
                <li className="!mt-[0.35rem] relative !pl-4 before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:text-white before:font-SansSerif">
                  <a className="!text-[#cacaca] hover:!text-[#d16b86]" href="#">
                    Journal (16)
                  </a>
                </li>
              </ul>
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
          <div className="md:w-4/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <div className="widget">
              <h4 className="widget-title !text-white !mb-3">Get in Touch</h4>
              <address className="xl:!pr-20 xxl:!pr-28 not-italic !leading-[inherit] block !mb-4">
                Moonshine St. 14/05 Light City, London, United Kingdom
              </address>
              <a
                className="!text-[#cacaca] hover:!text-[#d16b86]"
                href="mailto:first.last@email.com"
              >
                info@email.com
              </a>
              <br />
              00 (123) 456 78 90
            </div>
            {/* /.widget */}
            <div className="widget !mt-[1rem]">
              <h4 className="widget-title !text-white !mb-3">Elsewhere</h4>
              <nav className="nav social social-white">
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
          </div>
          {/* /column */}
          <div className="md:w-4/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <div className="widget">
              <h4 className="widget-title !text-white !mb-3">Learn More</h4>
              <ul className="pl-0 list-none text-inherit !mb-0">
                {footerLinks.slice(0, 3).map((elm, i) => (
                  <li className={i != 0 ? "!mt-[0.35rem]" : ""} key={i}>
                    <Link
                      className="!text-[#cacaca] hover:!text-[#d16b86]"
                      to={elm.href}
                    >
                      {elm.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* /.widget */}
            <div className="widget !mt-[1rem]">
              <h4 className="widget-title !text-white !mb-3">Need Help?</h4>
              <ul className="pl-0 list-none text-inherit !mb-0">
                {footerLinks2.slice(0, 3).map((elm, i) => (
                  <li key={i} className={i != 0 ? "!mt-[0.35rem]" : ""}>
                    <Link
                      className="!text-[#cacaca] hover:!text-[#d16b86]"
                      to={elm.href}
                    >
                      {elm.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
        </div>
        {/*/.row */}
        <p className="!mt-6 !mb-0 !text-center">
          © {new Date().getFullYear()} Sandbox. All rights reserved.
        </p>
      </div>
      {/* /.container */}
    </footer>
  );
}
