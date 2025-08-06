import JobDescription from "@/components/career/JobDescription";

import Jobs3 from "@/components/career/Jobs3";
import Footer5 from "@/components/footers/Footer5";
import Header32 from "@/components/headers/Header32";

import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Career Job || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function CareerJobPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="grow shrink-0">
        <Header32
          parentClass="relative wrapper bg-soft-primary !bg-[#edf2fc]"
          navClass="navbar navbar-expand-lg center-nav transparent navbar-light"
        />
        <section className="wrapper !bg-[#edf2fc]">
          <div className="container pt-10 pb-36 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-40 lg:pb-40 md:pb-40 !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="md:w-10/12 lg:w-10/12 xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <div className="post-header">
                  <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-5">
                    Multimedia Artist &amp; Animator
                  </h1>
                  <ul className="!text-[#aab0bc] m-0 p-0 list-none text-[0.85rem] !mb-5">
                    <li className="inline-block">
                      <i className="uil uil-clock pr-[0.2rem] align-[-.05rem] before:content-['\e9ee']" />
                      Full time
                    </li>
                    <li className="inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0_.4rem] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                      <i className="uil uil-location-arrow pr-[0.2rem] align-[-.05rem] before:content-['\ebd9']" />
                      Manchester, UK
                    </li>
                    <li className="inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0_.4rem] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                      <i className="uil uil-building pr-[0.2rem] align-[-.05rem] before:content-['\e9b3']" />
                      Design Department
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

        <JobDescription />
        <Jobs3 />
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
