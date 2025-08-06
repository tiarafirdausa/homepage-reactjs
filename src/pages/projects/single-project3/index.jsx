import Footer5 from "@/components/footers/Footer5";

import Header33 from "@/components/headers/Header33";
import ProjectDetails3 from "@/components/projects/ProjectDetails3";
import ProjectNavigation from "@/components/projects/ProjectNavigation";

import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Single Project 03 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function SingleProjectPage3() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="grow shrink-0">
        <Header33 />
        <section
          className="wrapper image-wrapper bg-image bg-overlay !text-white bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,0.5)]"
          style={{ backgroundImage: "url(/assets/img/photos/bg6.jpg)" }}
        >
          <div className="container pt-28 pb-14 xl:pt-36 lg:pt-36 md:pt-36 xl:pb-24 lg:pb-24 md:pb-24 !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="md:w-10/12 lg:w-8/12 xl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <div className="post-header">
                  <div className="inline-flex !mb-[.4rem] uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !text-white relative align-top !pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#ffffff]">
                    <a
                      href="#"
                      className="text-inherit hover:!text-white"
                      rel="category"
                    >
                      Identity
                    </a>
                  </div>
                  {/* /.post-category */}
                  <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-3 !text-white">
                    Commodo Dolor Bibendum Parturient Cursus Mollis
                  </h1>
                  <p className="lead !leading-[1.65] text-[.9rem] font-medium md:!px-14 lg:!px-14 xl:!px-20 xxl:!px-32">
                    Integer posuere erat a ante venenatis dapibus posuere.
                    Maecenas faucibus mollis interdum.
                  </p>
                </div>
                {/* /.post-header */}
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>

        <ProjectDetails3 />
        <ProjectNavigation />
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
