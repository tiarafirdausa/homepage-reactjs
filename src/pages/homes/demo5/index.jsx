import Footer5 from "@/components/footers/Footer5";
import Header6 from "@/components/headers/Header6";
import VideoSection from "@/components/homes/home-5/VideoSection";
import Features from "@/components/homes/home-5/Features";
import Hero from "@/components/homes/home-5/Hero";
import Testimonials from "@/components/homes/home-5/Testimonials";
import React from "react";
import Brands from "@/components/homes/home-5/Brands";
import Pricing from "@/components/homes/home-5/Pricing";
import Cta from "@/components/homes/home-5/Cta";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 5 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage5() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="grow shrink-0">
        <Header6 />

        <>
          <Hero />
          <Features />
          {/* /section */}
          <VideoSection />
          {/* /section */}
          <section className="wrapper !bg-[#ffffff]">
            <div className="container py-[4.5rem] xl:!py-28 lg:!py-28 md:!py-28">
              <Testimonials />
              {/*/.row */}
              <Brands />
              {/* /div */}
            </div>
            {/* /.container */}
          </section>
          {/* /section */}
          <Pricing />
          {/* /section */}
          <Cta />
        </>
      </div>
      <Footer5 />
    </>
  );
}
