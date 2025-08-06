import Faqs from "@/components/career/Faqs";
import Features from "@/components/career/Features";
import Jobs from "@/components/career/Jobs";
import Testimonials from "@/components/career/Teatimonials";
import Footer5 from "@/components/footers/Footer5";
import Header32 from "@/components/headers/Header32";

import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Career || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function CareerPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="grow shrink-0">
        <Header32
          parentClass="relative wrapper bg-soft-primary !bg-[#edf2fc]"
          navClass="navbar navbar-expand-lg center-nav transparent navbar-light"
        />
        <section className="wrapper !bg-[#edf2fc]">
          <div className="container pt-10 pb-[8rem] md:!pb-[10rem] xl:!pt-[4.5rem] lg:!pt-[4.5rem] md:!pt-[4.5rem] xl:!pb-[12.5rem] lg:!pb-[12.5rem] !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-12">
                <h1 className="!text-[.75rem] uppercase !text-[#3f78e0] !tracking-[0.02rem] !mb-3 !leading-[1.3]">
                  Join Our Team
                </h1>
                <h3 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem]">
                  We bring solutions to make life easier for our customers.
                </h3>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        <Features />
        <Testimonials />
        <Jobs />
        <Faqs />
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
