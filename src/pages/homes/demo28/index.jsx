import Footer25 from "@/components/footers/Footer25";
import Header26 from "@/components/headers/Header26";
import About from "@/components/homes/home-28/About";
import Contact from "@/components/homes/home-28/Contact";
import Expertise from "@/components/homes/home-28/Expertise";
import Facts from "@/components/homes/home-28/Facts";
import Hero from "@/components/homes/home-28/Hero";
import Projects from "@/components/homes/home-28/Projects";
import Testimonials from "@/components/homes/home-28/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 28 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage28() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-purple font-space demo28">
        <div className="grow shrink-0">
          <Header26 />
          <>
            <Hero />
            {/* /section */}
            <section className="wrapper">
              <div className="container pt-14 xl:pt-0 lg:pt-0 md:pt-0 pb-24 xl:pb-32 lg:pb-32 md:pb-32">
                <Projects />
                {/* /.grid */}
                <Expertise />
                {/* /.row */}
              </div>
              {/* /.container */}
            </section>
            {/* /section */}
            <Facts />
            {/* /section */}
            <section className="wrapper">
              <div className="container pt-14 xl:pt-0 lg:pt-0 md:pt-0 pb-20 xl:pb-28 lg:pb-28 md:pb-28">
                <Testimonials />
                {/* /.grid */}
                <About />
                {/* /.row */}
              </div>
              {/* /.container */}
            </section>
            {/* /section */}
            <Contact />
            {/* /section */}
          </>
        </div>
        <Footer25 />
      </div>
    </>
  );
}
