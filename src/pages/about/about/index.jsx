import Footer11 from "@/components/footers/Footer11";

import Header32 from "@/components/headers/Header32";

import Contact from "@/components/homes/home-15/Contact";

import Facts from "@/components/homes/home-15/Facts";
import Features from "@/components/homes/home-15/Features";

import Process from "@/components/homes/home-15/Process";
import Team from "@/components/homes/home-15/Team";
import Testimonials from "@/components/homes/home-15/Testimonials";

import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "About || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};

export default function AboutPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="grow shrink-0">
        <Header32
          parentClass="relative wrapper bg-gray !bg-[rgba(246,247,249)]"
          navClass="navbar navbar-expand-lg center-nav transparent navbar-light"
        />
        <section className="wrapper bg-[rgba(246,247,249,1)]">
          <div className="container pt-10 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-4">
                  Hello! This is Sandbox
                </h1>
                <p className="lead text-[1.05rem] !leading-[1.6] font-medium !mb-0">
                  A company turning ideas into beautiful things.
                </p>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
          <figure className="absoute" style={{ bottom: 0, left: 0, zIndex: 2 }}>
            <img
              alt="image"
              src="/assets/img/photos/bg12.jpg"
              width={2800}
              height={1000}
            />
          </figure>
        </section>
        <>
          <section className="wrapper !bg-[#ffffff] angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0">
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

          <div className="wrapper !bg-[#ffffff] angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0"></div>
        </>
      </div>
      <Footer11 hasMarginTop={false} />
    </>
  );
}
