import Footer15 from "@/components/footers/Footer15";
import Header8 from "@/components/headers/Header8";
import Blogs from "@/components/homes/home-17/Blogs";
import Cta from "@/components/homes/home-17/Cta";
import Facts from "@/components/homes/home-17/Facts";
import Features from "@/components/homes/home-17/Features";
import Hero from "@/components/homes/home-17/Hero";
import Services from "@/components/homes/home-17/Services";
import StraTagy from "@/components/homes/home-17/StraTagy";
import Team from "@/components/homes/home-17/Team";
import Testimonials from "@/components/homes/home-17/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 17 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage17() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-navy demo17">
        <div className="grow shrink-0">
          <Header8 />
          <>
            {/* /header */}
            <Hero />
            {/* /section */}
            <section className="wrapper bg-[rgba(246,247,249,1)]">
              <div className="container">
                <div className="card !shadow-none my-[-4rem] xl:!my-[-7rem] lg:!my-[-7rem] md:!my-[-5rem]">
                  <div className="card-body p-[70px_40px] lg:!py-[4.5rem] lg:!px-12 xl:!py-24 xl:!px-16">
                    <Services />
                    {/*/.row */}
                    <StraTagy />
                    {/*/.row */}
                    <hr className="!my-[4.5rem] xl:!my-[6rem] lg:!my-[6rem] md:!my-[6rem]" />
                    <Facts />
                    {/* /.row */}
                    <Testimonials />
                    {/* /.card */}
                    <Blogs />
                    {/* /.swiper-container */}
                    <hr className="!my-[4.5rem] xl:!my-[6rem] lg:!my-[6rem] md:!my-[6rem]" />
                    <Team />
                    {/*/.row */}
                    <Features />
                    {/*/.row */}
                    <Cta />
                    {/* /.wrapper */}
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.card */}
              </div>
              {/* /.container */}
            </section>
          </>
        </div>
        <Footer15 />
      </div>
    </>
  );
}
