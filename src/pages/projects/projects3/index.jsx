import Footer5 from "@/components/footers/Footer5";

import Header32 from "@/components/headers/Header32";

import Projects3 from "@/components/projects/Projects3";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Projects 03 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function ProjectsPage3() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="grow shrink-0">
        <Header32
          parentClass="relative wrapper bg-soft-primary !bg-[#edf2fc]"
          navClass="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light"
        />
        <section className="wrapper !bg-[#ffffff]">
          <div className="container pt-10 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem]">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="lg:w-10/12 xl:w-10/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-0">
                  Check out some of our awesome projects with creative ideas.
                </h1>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>

        <Projects3 />
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
