import Footer21 from "@/components/footers/Footer21";
import Header22 from "@/components/headers/Header22";
import About from "@/components/homes/home-24/About";
import Hero from "@/components/homes/home-24/Hero";
import Pricing from "@/components/homes/home-24/Pricing";
import Projects from "@/components/homes/home-24/Projects";
import Services from "@/components/homes/home-24/Services";
import Testimonials from "@/components/homes/home-24/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 24 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage24() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-yellow font-urbanist demo24">
        <div className="onepage home-onepage">
          <div className="grow shrink-0">
            <Header22 />
            <>
              <Hero />
              {/* /section */}
              <Services />
              {/* /section */}
              <div
                className="wrapper image-wrapper bg-image bg-overlay !text-white !bg-fixed bg-no-repeat bg-[center_center] bg-cover relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]"
                style={{ backgroundImage: "url(/assets/img/photos/bg34.jpg)" }}
              >
                <div className="container py-[6rem] xl:!py-[9rem] lg:!py-[9rem] md:!py-[9rem] !text-center">
                  <h2 className="xl:!text-[2.5rem] !text-[calc(1.375rem_+_1.5vw)] !leading-[1.15] font-semibold !text-white !mb-0">
                    I take photographs with
                    <br className="hidden xl:block lg:block md:block" />
                    creativity, concept &amp; passion
                  </h2>
                </div>
                {/* /.container */}
              </div>
              {/* /.wrapper */}
              <Projects />
              {/* /section */}
              <Testimonials />
              {/* /section */}
              <About />
              {/* /section */}
              <Pricing />
              {/* /section */}
            </>
          </div>
          <Footer21 />
        </div>
      </div>
    </>
  );
}
