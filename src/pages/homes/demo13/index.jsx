import Footer11 from "@/components/footers/Footer11";
import Header14 from "@/components/headers/Header14";
import About from "@/components/homes/home-13/About";
import Brand from "@/components/homes/home-13/Brand";
import Hero from "@/components/homes/home-13/Hero";
import Pricing from "@/components/homes/home-13/Pricing";
import Projects from "@/components/homes/home-13/Projects";
import Testimonials from "@/components/homes/home-13/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 13 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage13() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-purple demo13">
        <div className="grow shrink-0">
          <Header14 />

          <>
            <Hero />
            {/* /section */}
            <About />
            {/* /section */}
            <section
              className="wrapper image-wrapper bg-image bg-overlay bg-overlay-300 !text-white !bg-fixed bg-no-repeat bg-[center_center] bg-cover relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.3)]"
              style={{ backgroundImage: "url(/assets/img/photos/bg2.jpg)" }}
            >
              <Testimonials />
              {/* /.container */}
            </section>
            {/* /section */}
            <section className="wrapper !bg-[#ffffff]">
              <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
                <div className="flex flex-wrap mx-[-15px] items-center !mb-7">
                  <div className="md:w-8/12 lg:w-8/12 xl:w-7/12 xxl:w-6/12 flex-[0_0_auto] !px-[15px] max-w-full xl:!pr-28 lg:!pr-28">
                    <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
                      Recent Projects
                    </h2>
                    <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
                      We love to turn ideas into
                      <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(116,126,209,.12)]">
                        beautiful things
                      </span>
                      .
                    </p>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
                <Projects />
                {/* /.projects-tiles */}
              </div>
              {/* /.container */}
            </section>
            {/* /section */}
            <Brand />
            {/* /section */}
            <Pricing />
            {/* /section */}
          </>
        </div>
        <Footer11 />
      </div>
    </>
  );
}
