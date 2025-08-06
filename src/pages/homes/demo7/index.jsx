import Footer7 from "@/components/footers/Footer7";
import Header8 from "@/components/headers/Header8";
import About from "@/components/homes/home-7/About";
import Faqs from "@/components/homes/home-7/Faqs";
import Features from "@/components/homes/home-7/Features";
import Hero from "@/components/homes/home-7/Hero";
import Projects from "@/components/homes/home-7/Projects";
import Testimonials from "@/components/homes/home-7/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 7 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage7() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-purple font-thicccboi demo7">
        <div className="!font-THICCCBOI !text-[.85rem]">
          <div className="grow shrink-0">
            <Header8 />

            <>
              <Hero />
              {/* /section */}
              <section className="wrapper !bg-[#ffffff]">
                <About />
                {/* /.container */}
                <Projects />
                {/* /.overflow-hidden */}
              </section>
              {/* /section */}
              <section className="wrapper !bg-[#ffffff]">
                <div className="container pb-8 xl:pb-10 lg:pb-10">
                  <Features />
                  {/*/.row */}
                  <Faqs />
                  {/*/.row */}
                  <Testimonials />
                  {/* /.grid-view */}
                </div>
                {/* /.container */}
              </section>
            </>
          </div>
          <Footer7 />
        </div>
      </div>
    </>
  );
}
