import Footer8 from "@/components/footers/Footer8";
import Header9 from "@/components/headers/Header9";
import About from "@/components/homes/home-8/About";
import Brands from "@/components/homes/home-8/Brands";
import Faqs from "@/components/homes/home-8/Faqs";
import Hero from "@/components/homes/home-8/Hero";
import Pricing from "@/components/homes/home-8/Pricing";
import Team from "@/components/homes/home-8/Team";
import Testimonial from "@/components/homes/home-8/Testimonial";
import VideoSection from "@/components/homes/home-8/VideoSection";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 8 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage8() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-aqua font-dm demo8">
        <div className="[word-spacing:.05rem!important] font-Manrope text-[0.8rem] !leading-[1.7] font-medium">
          <div className="grow shrink-0">
            <Header9 />
            <section className="wrapper !bg-[#ffffff]">
              <div className="container">
                <Hero />
                {/*/.card */}
                <Brands />
                <About />
                {/*/.row */}
                <Testimonial />
                {/*/.card */}
                <Team />
                {/*/.row */}
                <VideoSection />
                {/*/.row */}
                <Pricing />
                {/*/.row */}
                <Faqs />
                {/*/.card */}
              </div>
              {/* /.container */}
            </section>
          </div>
          <Footer8 />
        </div>
      </div>
    </>
  );
}
