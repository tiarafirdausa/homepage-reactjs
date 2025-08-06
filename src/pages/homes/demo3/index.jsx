import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import About from "@/components/homes/home-3/About";
import Blogs from "@/components/homes/home-3/Blogs";
import Contact from "@/components/homes/home-3/Contact";
import Cta from "@/components/homes/home-3/Cta";
import Facts from "@/components/homes/home-3/Facts";
import Hero from "@/components/homes/home-3/Hero";
import Pricing from "@/components/homes/home-3/Pricing";
import Testimonials from "@/components/homes/home-3/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 03 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage3() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-aqua font-thicccboi demo3">
        <div className="font-THICCCBOI text-[.85rem]">
          <div className="grow shrink-0">
            <Header4 />
            <>
              <Hero />
              {/* /section */}
              <About />
              {/* /section */}
              <Cta />
              {/* /section */}
              <Blogs />
              {/* /section */}
              <Facts />
              {/* /section */}
              <section className="wrapper !bg-[#ffffff] angled upper-end lower-start relative border-0 before:top-[-4rem] before:content-[''] before:block before:absolute before:z-0 before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-y-transparent before:border-[#fefefe] before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:content-[''] after:block after:absolute after:z-0 after:border-l-[100vw] after:border-r-transparent after:border-b-[4rem] after:border-y-transparent after:border-[#fefefe] after:border-0 after:border-solid after:right-0">
                <div className="container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem] !relative">
                  <Testimonials />
                  {/* /div */}
                  <Pricing />
                  {/*/.row */}
                  <Contact />
                  {/*/.row */}
                </div>
                {/* /.container */}
              </section>
              {/* /section */}
            </>
          </div>
          <Footer3 />
        </div>
      </div>
    </>
  );
}
