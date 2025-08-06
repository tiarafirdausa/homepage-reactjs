import Footer16 from "@/components/footers/Footer16";
import Header14 from "@/components/headers/Header14";
import Banner from "@/components/homes/home-19/Banner";
import Features from "@/components/homes/home-19/Features";
import Features2 from "@/components/homes/home-19/Features2";
import Hero from "@/components/homes/home-19/Hero";
import Projects from "@/components/homes/home-19/Projects";
import Services from "@/components/homes/home-19/Services";
import Testimonials from "@/components/homes/home-19/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 19 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage19() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-violet font-urbanist demo19">
        <div className="!font-Urbanist !text-[0.85rem]">
          <div className="grow shrink-0">
            <Header14 />

            <>
              <Hero />
              {/* /section */}
              <section className="wrapper !bg-[#ffffff]">
                <div className="container pb-20 xl:pb-[7rem] lg:pb-[7rem] md:pb-[7rem]">
                  <Services />
                  {/*/.row */}
                  <Features />
                  {/* /.tab-content */}
                </div>
                {/* /.container */}
              </section>
              {/* /section */}
              <Banner />
              {/* /section */}
              <section className="wrapper !bg-[#ffffff]">
                <div className="container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]">
                  <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mt-[-12.5rem] xl:!mt-[-17.5rem] lg:!mt-[-17.5rem] md:!mt-[-17.5rem]">
                    <div className="flex flex-wrap mx-0">
                      <div
                        className="lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] max-w-full image-wrapper bg-image rounded-t-[0.4rem] rounded-lg-start bg-cover bg-[center_center] bg-no-repeat bg-scroll relative z-0 xl:rounded-tl-[0.4rem] xl:rounded-tr-none xl:rounded-br-none xl:rounded-bl-[0.4rem] lg:rounded-tl-[0.4rem] lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-[0.4rem] md:min-h-[25rem] max-md:min-h-[25rem]"
                        style={{
                          backgroundImage: "url(/assets/img/photos/tm2.jpg)",
                        }}
                      />
                      {/*/column */}
                      <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full">
                        <div className="!p-10 md:!p-3rem lg:!p-[4.5rem_4rem] xl:!p-[4.5rem_4rem]">
                          <Testimonials />
                          {/* /.swiper-container */}
                        </div>
                        {/*/div */}
                      </div>
                      {/*/column */}
                    </div>
                    {/*/.row */}
                  </div>
                  {/* /.card */}
                  <Projects />
                  {/* /.swiper-container */}
                  <Features2 />
                  {/*/.row */}
                </div>
                {/* /.container */}
              </section>
              {/* /section */}
            </>
          </div>
        </div>
        <Footer16 />
      </div>
    </>
  );
}
