import Footer5 from "@/components/footers/Footer5";
import Header10 from "@/components/headers/Header10";

import Brands from "@/components/homes/home-9/Brands";
import Faqs from "@/components/homes/home-9/Faqs";
import Features from "@/components/homes/home-9/Features";
import Hero from "@/components/homes/home-9/Hero";
import Process from "@/components/homes/home-9/Process";
import Prricing from "@/components/homes/home-9/Prricing";
import Testimonials from "@/components/homes/home-9/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 9 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage9() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="font-dm demo9">
        <div className="[word-spacing:.05rem!important] font-Manrope text-[0.8rem] !leading-[1.7] font-medium">
          <div className="grow shrink-0">
            <Header10 />
            <>
              <Hero />
              {/* /section */}
              <section className="wrapper !bg-[#ffffff]">
                <div className="container py-[4.5rem] xl:pt-28 lg:pt-28 md:pt-28 xl:pb-[22.5rem] lg:pb-[22.5rem] md:pb-[22.5rem]">
                  <Brands />
                  {/* /div */}
                  <Features />
                  {/* /.tab-content */}
                </div>
                {/* /.container */}
              </section>
              {/* /section */}
              <Testimonials />
              {/* /section */}
              <section className="wrapper !bg-[#ffffff]">
                <div className="container py-[4.5rem] xl:!py-28 lg:!py-28 md:!py-28">
                  <Process />
                  {/*/.row */}
                  <Prricing />
                  {/*/.row */}
                </div>
                {/* /.container */}
              </section>
              {/* /section */}
              <Faqs />
            </>
          </div>
        </div>
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
