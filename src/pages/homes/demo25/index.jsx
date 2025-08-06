import Footer22 from "@/components/footers/Footer22";
import Header23 from "@/components/headers/Header23";
import Blogs from "@/components/homes/home-25/Blogs";
import Hero from "@/components/homes/home-25/Hero";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 25 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage25() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-pink font-urbanist demo25">
        <div className="grow shrink-0">
          <Header23 />
          <section className="wrapper bg-[rgba(246,247,249,1)]">
            <div className="container pt-10 pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24">
              <Hero />
              {/* /.swiper-container */}
              <div className="flex flex-wrap mx-[-15px]">
                <div className="lg:w-full xl:w-10/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
                  <h2 className="xl:!text-[1.7rem] !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] font-semibold !text-center !mt-4 !mb-10">
                    Hello! I'm Caitlyn. Welcome to my blog. Here on this blog
                    you will be able to find travel diary with traveling tips.
                  </h2>
                </div>
                {/*/column */}
              </div>
              {/*/.row */}
              <Blogs />
              {/* /.row */}
            </div>
            {/* /.container */}
          </section>
        </div>
        <Footer22 />
      </div>
    </>
  );
}
