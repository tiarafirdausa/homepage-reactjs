import Cta from "@/components/career/Cta";
import Features2 from "@/components/career/Features2";
import Jobs2 from "@/components/career/Jobs2";
import Footer5 from "@/components/footers/Footer5";
import Header32 from "@/components/headers/Header32";

import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Career 02 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function CareerPage2() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="grow shrink-0">
        <Header32
          parentClass="relative wrapper bg-soft-primary !bg-[#edf2fc]"
          navClass="navbar navbar-expand-lg center-nav transparent navbar-light"
        />
        <section className="wrapper !bg-[#edf2fc] !relative">
          <div className="container pt-10 pb-28 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-5">
                <h1 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.3]">
                  Join Our Team
                </h1>
                <h3 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-6">
                  Join our team to help shape the future of development.
                </h3>
                <a
                  href="#"
                  className="btn btn-lg btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                >
                  Explore Positions
                </a>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
          <div className="overflow-hidden">
            <div className="divider !text-[#fefefe] mx-[-0.5rem]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
                <path
                  fill="currentColor"
                  d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z"
                />
              </svg>
            </div>
          </div>
        </section>
        <section className="wrapper !bg-[#ffffff]">
          <div className="container pb-20 xl:pb-28 lg:pb-28 md:pb-28">
            <Features2 />
            <hr className="!my-14 xl:!my-28 lg:!my-28 md:!my-28" />
            <Jobs2 />
          </div>
        </section>
        <Cta />
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
