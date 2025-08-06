import Footer16 from "@/components/footers/Footer16";
import Header5 from "@/components/headers/Header5";
import About from "@/components/homes/home-18/About";
import Blogs from "@/components/homes/home-18/Blogs";
import Contact from "@/components/homes/home-18/Contact";
import Facts from "@/components/homes/home-18/Facts";
import Features from "@/components/homes/home-18/Features";
import Hero from "@/components/homes/home-18/Hero";
import Testimonials from "@/components/homes/home-18/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 18 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage18() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-grape font-urbanist">
        <div className="!font-urbanist !text-[.85rem]">
          <div className="grow shrink-0">
            <Header5 />
            <>
              <Hero />
              {/* /section */}
              <Features />
              {/* /section */}
              <section className="wrapper !bg-[#ffffff]">
                <div className="container-card">
                  <Facts />
                  {/*/.card */}
                </div>
                {/* /.container-card */}
                <div className="container">
                  <Testimonials />
                  {/* /.grid-view */}
                  <Blogs />
                  {/* /.swiper-container */}
                  <About />
                  {/*/.row */}
                  <Contact />
                  {/*/.row */}
                </div>
                {/* /.container */}
              </section>
              {/* /section */}
            </>
          </div>
          <Footer16 />
        </div>
      </div>
    </>
  );
}
