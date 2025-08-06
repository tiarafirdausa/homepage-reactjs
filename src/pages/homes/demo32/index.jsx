import Header16 from "@/components/headers/Header16";
import About from "@/components/homes/home-32/About";
import Blogs from "@/components/homes/home-32/Blogs";
import Features from "@/components/homes/home-32/Features";
import FeaturesTab from "@/components/homes/home-32/FeaturesTab";
import Hero from "@/components/homes/home-32/Hero";
import Services from "@/components/homes/home-32/Services";
import Team from "@/components/homes/home-32/Team";
import Testimonials from "@/components/homes/home-32/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 32 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage32() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="font-space demo32">
        <div className="box-layout">
          <div className="content-wrapper !bg-[rgba(254,254,254,1)] grow shrink-0">
            <Header16 />
            <>
              <Hero />
              {/* /section */}
              <About />
              {/* /section */}
              <Services />
              {/* /section */}
              <Features />
              {/* /section */}
              <Blogs />
              {/* /section */}
              <FeaturesTab />
              {/* /section */}
              <Team />
              {/* /section */}
              <section className="wrapper gradient-8 !relative before:content-[''] before:absolute before:w-full before:h-full before:bg-cover before:pointer-events-none before:left-0 before:top-0 before:bg-no-repeat before:bg-[center_center] before:bg-[url(/assets/img/photos/lines.png)]">
                <div className="container py-20 xl:pt-0 lg:pt-0 md:pt-0 xl:pb-28 lg:pb-28 md:pb-28 !text-center">
                  <Testimonials />
                  {/* /.row */}
                  <div className="flex flex-wrap mx-[-15px]">
                    <div className="lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
                      <h2 className="!text-[0.8rem] !leading-[1.35] !tracking-[0.02rem] uppercase !text-white !mb-3">
                        Join Our Community
                      </h2>
                      <h3 className="!text-[calc(1.325rem_+_0.9vw)] font-semibold !leading-[1.2] xl:!text-[2rem] !text-white !mb-6">
                        We are
                        <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[10%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[4%] motion-reduce:after:transition-none after:bg-[#3f78e0] after:!bg-[linear-gradient(45deg,#08aeea_0,#2af598_100%)]">
                          <em>trusted</em>
                        </span>
                        by over 5000+ clients. Join them now and grow your
                        business.
                      </h3>
                      <a href="#" className="btn btn-white">
                        Join Us
                      </a>
                    </div>
                    {/* /column */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.container */}
              </section>
              {/* /section */}
            </>
          </div>
        </div>
      </div>
    </>
  );
}
