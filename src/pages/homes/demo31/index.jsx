import Footer28 from "@/components/footers/Footer28";
import Header29 from "@/components/headers/Header29";
import Brands from "@/components/homes/home-31/Brands";
import Facts from "@/components/homes/home-31/Facts";
import Hero from "@/components/homes/home-31/Hero";
import Projects from "@/components/homes/home-31/Projects";
import Services from "@/components/homes/home-31/Services";
import Testimonials from "@/components/homes/home-31/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 31 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage31() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="font-space demo31">
        <div className="grow shrink-0">
          <Header29 />

          <>
            <Hero />
            {/* /section */}
            <section className="wrapper bg-gradient-primary">
              <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
                <Brands />
                {/* /.swiper-container */}
                <Services />
                {/* /.row */}
              </div>
              {/* /.container */}
            </section>
            {/* /section */}
            <section className="wrapper !bg-[#ffffff]">
              <div className="container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]">
                <Testimonials />
                {/*/.card */}
                <Projects />
                {/* /.row */}
                <Facts />
                {/* /.row */}
              </div>
              {/* /.container */}
              <div className="overflow-hidden">
                <div className="divider !text-[#f2f3fb] mx-[-0.5rem]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70">
                    <path
                      fill="currentColor"
                      d="M1440,70H0V45.16a5762.49,5762.49,0,0,1,1440,0Z"
                    />
                  </svg>
                </div>
              </div>
            </section>
            {/* /section */}
          </>
        </div>
        <Footer28 />
      </div>
    </>
  );
}
