import Footer5 from "@/components/footers/Footer5";
import Header11 from "@/components/headers/Header11";
import About from "@/components/homes/home-10/About";
import Brands from "@/components/homes/home-10/Brands";
import Facts from "@/components/homes/home-10/Facts";
import Features from "@/components/homes/home-10/Features";
import Hero from "@/components/homes/home-10/Hero";
import Services from "@/components/homes/home-10/Services";
import Testimonials from "@/components/homes/home-10/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 10 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage10() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-orange font-thicccboi demo10">
        <div className="!font-THICCCBOI !text-[0.85rem]">
          <div className="grow shrink-0">
            <Header11 />
            <>
              <Hero />
              {/* /section */}
              <Services />
              {/* /section */}
              <Features />
              {/* /section */}
              <Facts />
              {/* /section */}
              <section className="wrapper !bg-[#ffffff]">
                <div className="container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]">
                  <Testimonials />
                  {/* /.card */}
                  <About />
                  {/*/.row */}
                  <Brands />
                  {/* /div */}
                </div>
                {/* /.container */}
              </section>
              {/* /section */}
            </>
          </div>
        </div>
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
