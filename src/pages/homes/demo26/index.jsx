import Footer23 from "@/components/footers/Footer23";
import Header24 from "@/components/headers/Header24";
import About from "@/components/homes/home-26/About";
import Analize from "@/components/homes/home-26/Analize";
import Cta from "@/components/homes/home-26/Cta";
import Hero from "@/components/homes/home-26/Hero";
import Pricing from "@/components/homes/home-26/Pricing";
import Testimonials from "@/components/homes/home-26/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 26 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage26() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-grape font-urbanist demo26">
        <div className="grow shrink-0">
          <Header24 />
          <>
            <Hero />
            {/* /section */}
            <section className="wrapper bg-[rgba(255,255,255)] opacity-100">
              <div className="container pt-20 pb-20 xl:pb-28 lg:pb-28 md:pb-28">
                <div className="flex flex-wrap mx-[-15px] !text-center">
                  <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-10/12 lg:!ml-[8.33333333%] xl:w-10/12 xl:!ml-[8.33333333%] xxl:w-8/12 xxl:!ml-[16.66666667%] flex-[0_0_auto] !px-[15px] max-w-full">
                    <h2 className="!text-[0.8rem] uppercase !text-[#605dba] !mb-3 !leading-[1.35 !tracking-[0.02rem]">
                      What We Do?
                    </h2>
                    <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-semibold !mb-9">
                      The full service we are offering is specifically designed
                      to meet your business needs.
                    </h3>
                  </div>
                  {/* /column */}
                </div>
                {/* /.row */}
                <About />
                {/*/.row */}
                <Testimonials />
                {/*/.card */}
                <Pricing />
                {/*/.row */}
                <Cta />
                {/*/.row */}
              </div>
              {/* /.container */}
            </section>
            {/* /section */}
            <Analize />
            {/* /section */}
          </>
        </div>
        <Footer23 />
      </div>
    </>
  );
}
