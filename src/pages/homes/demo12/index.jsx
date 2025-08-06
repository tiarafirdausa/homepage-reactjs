import Footer10 from "@/components/footers/Footer10";

import Header13 from "@/components/headers/Header13";
import About from "@/components/homes/home-12/About";
import Contact from "@/components/homes/home-12/Contact";
import Facts from "@/components/homes/home-12/Facts";
import Hero from "@/components/homes/home-12/Hero";
import Projects from "@/components/homes/home-12/Projects";
import Testimonials from "@/components/homes/home-12/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 12 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage12() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-orange demo12">
        <div className="grow shrink-0">
          <Header13 />
          <>
            <Hero />
            {/* /section */}
            <About />
            {/* /section */}
            <Facts />
            {/* /section */}
            <section className="wrapper !bg-[#ffffff]">
              <div className="container py-[4.5rem] xl:!p-[6rem_15px_7rem] lg:!p-[6rem_15px_7rem] md:!p-[6rem_15px_7rem]">
                <Testimonials />
                {/* /.grid-view */}
                <Projects />
                {/* /.projects-tiles */}
              </div>
              {/* /.container */}
            </section>
            {/* /section */}
            <Contact />
            {/* /section */}
          </>
        </div>
        <Footer10 />
      </div>
    </>
  );
}
