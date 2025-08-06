import Footer9 from "@/components/footers/Footer9";
import Header12 from "@/components/headers/Header12";
import About from "@/components/homes/home-11/About";
import Blogs from "@/components/homes/home-11/Blogs";
import Facts from "@/components/homes/home-11/Facts";
import Features from "@/components/homes/home-11/Features";
import Hero from "@/components/homes/home-11/Hero";
import Pricing from "@/components/homes/home-11/Pricing";
import Services from "@/components/homes/home-11/Services";
import Testimonials from "@/components/homes/home-11/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 11 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage11() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-purple demo11">
        <div className="grow shrink-0">
          <Header12 />
          <>
            <Hero />
            {/* /section */}
            <section className="wrapper !bg-[#ffffff]">
              <div className="container py-[4.5rem] xl:!py-28 lg:!py-28 md:!py-28">
                <Services />
                {/*/.row */}
                <Features />
                {/*/.row */}
              </div>
              {/* /.container */}
            </section>
            {/* /section */}
            <section className="wrapper bg-[rgba(246,247,249,1)]">
              <div className="container py-[4.5rem] xl:pt-0 lg:pt-0 md:pt-0 xl:pb-24 lg:pb-24 md:pb-24">
                <Facts />
                <Blogs />
              </div>
              {/* /.container */}
            </section>
            {/* /section */}
            <About />
            {/* /section */}
            <section className="wrapper bg-[rgba(246,247,249,1)]">
              <div className="container py-[4.5rem] xl:pt-0 lg:pt-0 md:pt-0 xl:pb-28 lg:pb-28 md:pb-28">
                <Testimonials />
                {/* /.row */}
                <Pricing />
                {/* /.row */}
              </div>
              {/* /.container */}
            </section>
          </>
        </div>
        <Footer9 />
      </div>
    </>
  );
}
