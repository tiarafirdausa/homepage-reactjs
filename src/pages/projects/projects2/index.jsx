import Footer5 from "@/components/footers/Footer5";

import Header32 from "@/components/headers/Header32";

import Projects2 from "@/components/projects/Projects2";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Projects 02 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function ProjectsPage2() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="grow shrink-0">
        <Header32
          parentClass="relative wrapper bg-soft-primary !bg-[#edf2fc]"
          navClass="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light"
        />
        <section className="wrapper !bg-[#ffffff]">
          <div className="container pt-10 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="md:w-8/12 lg:w-7/12 xl:w-6/12 xxl:w-5/12 flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-3">
                  Projects
                </h1>
                <p className="lead !text-[1.05rem] !leading-[1.6] lg:!px-10 xl:!px-10 xxl:!px-8">
                  Check out some of our awesome projects with creative ideas and
                  great design.
                </p>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>

        <Projects2 />
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
