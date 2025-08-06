import Footer24 from "@/components/footers/Footer24";
import Header25 from "@/components/headers/Header25";
import About from "@/components/homes/home-27/About";
import Blogs from "@/components/homes/home-27/Blogs";
import Hero from "@/components/homes/home-27/Hero";
import Pricing from "@/components/homes/home-27/Pricing";
import Process from "@/components/homes/home-27/Process";
import Services from "@/components/homes/home-27/Services";
import Solutions from "@/components/homes/home-27/Solutions";
import Testimonial from "@/components/homes/home-27/Testimonial";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 27 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage27() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-navy demo27">
        <div className="grow shrink-0">
          <Header25 />

          <>
            <Hero />
            {/* /section */}
            <Services />
            {/* /section */}
            <Process />
            {/* /section */}
            <Blogs />
            {/* /section */}
            <Solutions />
            {/* /section */}
            <section className="wrapper bg-[rgba(255,255,255)] opacity-100">
              <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
                <About />
                {/*/.row */}
                <Testimonial />
                {/* /.row */}
                <Pricing />
                {/* /.row */}
              </div>
              {/* /.container */}
            </section>
            {/* /section */}
          </>
        </div>
        <Footer24 />
      </div>
    </>
  );
}
