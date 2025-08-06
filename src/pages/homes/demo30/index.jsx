import Footer27 from "@/components/footers/Footer27";
import Header28 from "@/components/headers/Header28";
import Testimonials from "@/components/homes/home-29/Testimonials";
import Banner from "@/components/homes/home-30/Banner";
import Demos from "@/components/homes/home-30/Demos";
import Features from "@/components/homes/home-30/Features";
import Hero from "@/components/homes/home-30/Hero";
import Pricing from "@/components/homes/home-30/Pricing";
import Process from "@/components/homes/home-30/Process";
import Services from "@/components/homes/home-30/Services";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 30 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage30() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-grape font-space demo30">
        <div className="!bg-[#f0f0f8]">
          <div className="grow shrink-0">
            <Header28 />
            <>
              <section className="wrapper overflow-hidden">
                <Hero />
                {/* /.container */}
                <Demos />
                {/* /.container */}
                <Services />
                {/* /.container */}
              </section>
              {/* /section */}
              <Process />
              {/* /section */}
              <Features />
              {/* /section */}
              <Banner />
              {/* /section */}
              <section className="overflow-hidden">
                <div className="container pt-24 xl:pt-32 lg:pt-32 md:pt-32 pb-40 xl:pb-60 lg:pb-60 md:pb-60">
                  <Testimonials />
                  {/*/.row */}
                  <Pricing />
                  {/*/.row */}
                </div>
                {/* /.container */}
              </section>
              {/* /section */}
            </>
          </div>
          <Footer27 />
          <div className="xl:pb-6 lg:pb-6 md:pb-6" />
        </div>
      </div>
    </>
  );
}
