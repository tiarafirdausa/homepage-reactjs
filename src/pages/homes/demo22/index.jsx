import Footer19 from "@/components/footers/Footer19";
import Header20 from "@/components/headers/Header20";
import About from "@/components/homes/home-22/About";
import Facts from "@/components/homes/home-22/Facts";
import Hero from "@/components/homes/home-22/Hero";
import Pricing from "@/components/homes/home-22/Pricing";
import Projects from "@/components/homes/home-22/Projects";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 22 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage22() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-purple font-urbanist demo22">
        <div className="xl:!py-6 lg:!py-6 md:!py-6">
          <div className="grow shrink-0">
            <Header20 />
            <>
              <Hero />
              {/*/section */}
              <About />
              {/* /section */}
              <Facts />
              {/*/section */}
              <section className="wrapper !bg-[#ffffff]">
                <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
                  <Projects />
                  {/* /.swiper-container */}
                  <hr className="dark my-[4.5rem] xl:!my-[7rem] lg:!my-[7rem] md:!my-[7rem]" />
                  <div className="flex flex-wrap mx-[-15px] !text-center">
                    <div className="md:w-11/12 flex-[0_0_auto] !px-[15px] max-w-full lg:w-9/12 xl:w-8/12 !mx-auto">
                      <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
                        Our Pricing
                      </h2>
                      <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] !mb-10 xxl:!px-10">
                        We offer great prices, premium products and quality
                        service for your business.
                      </h3>
                    </div>
                    {/* /column */}
                  </div>
                  {/* /.row */}
                  <Pricing />
                  {/* /.row */}
                </div>
                {/* /.container */}
              </section>
              {/* /section */}
            </>
          </div>
          <Footer19 />
        </div>
      </div>
    </>
  );
}
