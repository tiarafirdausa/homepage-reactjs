import Footer12 from "@/components/footers/Footer12";
import Header15 from "@/components/headers/Header15";
import Cta from "@/components/homes/home-14/Cta";
import Facts from "@/components/homes/home-14/Facts";
import Features from "@/components/homes/home-14/Features";
import Hero from "@/components/homes/home-14/Hero";
import Projects from "@/components/homes/home-14/Projects";
import Services from "@/components/homes/home-14/Services";
import Stratagy from "@/components/homes/home-14/Stratagy";
import Testimonials from "@/components/homes/home-14/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 14 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage14() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-violet font-thicccboi demo14">
        <div className="!font-THICCCBOI !text-[0.85rem]">
          <div className="grow shrink-0">
            <Header15 />
            <>
              <Hero />
              {/* /section */}
              <Services />
              {/* /section */}
              <Cta />
              {/* /section */}
              <Projects />
              {/* /section */}
              <Facts />
              {/* /section */}
              <section className="wrapper !bg-[#ffffff]">
                <div className="container py-[6rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
                  <Testimonials />
                  {/* /.grid-view */}
                  <Stratagy />
                  {/*/.row */}
                  <Features />
                  {/*/.row */}
                </div>
                {/* /.container */}
              </section>
            </>
          </div>
          <Footer12 />
        </div>
      </div>
    </>
  );
}
