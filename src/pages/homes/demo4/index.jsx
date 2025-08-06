import Footer4 from "@/components/footers/Footer4";
import Header5 from "@/components/headers/Header5";
import About from "@/components/homes/home-4/About";
import About2 from "@/components/homes/home-4/About2";
import Brands from "@/components/homes/home-4/Brands";
import Cta from "@/components/homes/home-4/Cta";
import Hero from "@/components/homes/home-4/Hero";
import Team from "@/components/homes/home-4/Team";

import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 4 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage4() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-violet font-dm demo4">
        <div className="!font-Manrope !text-[0.8rem] !font-medium !leading-[1.7] !text-[#60697b] bg-[#fefefe]">
          <div className="grow shrink-0">
            <Header5 />
            <>
              <Hero />
              {/* /section */}
              <About />
              {/* /section */}
              <Cta />
              {/* /section */}
              <section className="wrapper !bg-[#ffffff]">
                <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
                  <Team />
                  {/*/.row */}
                  <hr className="!mt-15 xl:!mt-[8rem] lg:!mt-[8rem] md:!mt-[8rem] !mb-[4.5rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]" />
                  <About2 />
                  {/*/.row */}
                  <Brands />
                  {/* /div */}
                </div>
                {/* /.container */}
              </section>
            </>
          </div>
          <Footer4 />
        </div>
      </div>
    </>
  );
}
