import Footer13 from "@/components/footers/Footer13";
import Header16 from "@/components/headers/Header16";
import Contact from "@/components/homes/home-15/Contact";
import Cta from "@/components/homes/home-15/Cta";
import Facts from "@/components/homes/home-15/Facts";
import Features from "@/components/homes/home-15/Features";
import Hero from "@/components/homes/home-15/Hero";
import Process from "@/components/homes/home-15/Process";
import Team from "@/components/homes/home-15/Team";
import Testimonials from "@/components/homes/home-15/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 15 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage15() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="grow shrink-0">
        <Header16 />
        <>
          <section className="wrapper bg-[#21262c] opacity-100">
            <Hero />
            {/* /.swiper-container */}
          </section>
          <section className="wrapper !bg-[#ffffff] angled lower-end relative after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0">
            <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
              <Features />
              {/*/.row */}
              <Process />
              {/*/.row */}
            </div>
            {/* /.container */}
          </section>
          {/* /section */}
          <section className="wrapper !bg-[#edf2fc]">
            <div className="container pt-24 pb-[4.5rem] xl:pb-0 lg:pb-0 md:pb-0">
              <Testimonials />
              {/*/.row */}
            </div>
            {/* /.container */}
          </section>
          {/* /section */}
          <section className="wrapper !bg-[#ffffff]">
            <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
              <Team />
              {/* /.relative */}
            </div>
            {/* /.container */}
          </section>
          {/* /section */}
          <Facts />
          {/* /section */}
          <Contact />
          {/* /section */}
          <Cta />
        </>
        <Footer13 />
      </div>{" "}
    </>
  );
}
