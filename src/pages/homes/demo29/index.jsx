import Footer26 from "@/components/footers/Footer26";
import Header27 from "@/components/headers/Header27";
import AppFeatures from "@/components/homes/home-29/AppFeatures";
import Cta from "@/components/homes/home-29/Cta";
import Faqs from "@/components/homes/home-29/Faqs";
import Features from "@/components/homes/home-29/Features";
import Hero from "@/components/homes/home-29/Hero";
import Testimonials from "@/components/homes/home-29/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 29 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage29() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-grape font-unicons demo29">
        <div className="grow shrink-0">
          <Header27 />
          <>
            <Hero />
            {/* /section */}
            <AppFeatures />
            {/* /section */}
            <Faqs />
            {/* /section */}
            <section className="wrapper !bg-[#ffffff]">
              <div className="container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]">
                <Features />
                <Testimonials />
                {/* /.grid-view */}
              </div>
              {/* /.container */}
            </section>
            {/* /section */}
            <Cta />
            {/* /section */}
          </>
        </div>
        <Footer26 />
      </div>
    </>
  );
}
