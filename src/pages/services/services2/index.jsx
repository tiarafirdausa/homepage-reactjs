import Cta from "@/components/common/Cta";
import Footer5 from "@/components/footers/Footer5";
import Header32 from "@/components/headers/Header32";
import Pricing from "@/components/homes/home-5/Pricing";
import Features from "@/components/services/Features";
import Services from "@/components/services/Services";
import VideoSection from "@/components/services/VideoSection";

import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Services 02 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function ServicesPage2() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="grow shrink-0">
        <Header32
          parentClass="relative wrapper bg-soft-primary !bg-[#edf2fc]"
          navClass="navbar navbar-expand-lg center-nav transparent navbar-light"
        />
        <section
          className="wrapper image-wrapper bg-image bg-overlay !text-white bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]"
          style={{ backgroundImage: "url(/assets/img/photos/bg1.jpg)" }}
        >
          <div className="container pt-36 xl:pt-[12.5rem] lg:pt-[12.5rem] md:pt-[12.5rem] pb-32 xl:pb-40 lg:pb-40 md:pb-40 !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="md:w-10/12 lg:w-8/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !text-white !mb-3">
                  Our Services
                </h1>
                <p className="lead text-[1.05rem] !leading-[1.6] font-medium md:!px-3 lg:!px-7 xl:!px-9 xxl:!px-10">
                  We are a creative company that focuses on establishing
                  long-term relationships with customers.
                </p>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        <Services />
        <VideoSection />
        <Features />

        <Pricing />
        <Cta />
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
