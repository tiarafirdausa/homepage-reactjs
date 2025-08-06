import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Cta from "@/components/homes/home-1/Cta";
import Hero from "@/components/homes/home-1/Hero";
import Pricing from "@/components/homes/home-1/Pricing";
import Services from "@/components/homes/home-1/Services";
import Solutions from "@/components/homes/home-1/Solutions";
import Stratagy from "@/components/homes/home-1/Stratagy";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-1/Testimonials";

import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 01 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage1() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-yellow font-thicccboi">
        <div className="font-THICCCBOI text-[0.85rem]">
          <div className="grow shrink-0">
            <Header2 />

            <>
              {/* /header */}
              <Hero />
              {/* /section */}
              <Services />
              {/* /section */}
              <Cta />
              {/* /section */}
              <Stratagy />
              {/* /section */}
              <Team />
              {/* /section */}
              <Solutions />
              {/* /section */}
              <Testimonials />
              {/* /section */}
              <Pricing />
            </>
            <Footer1 />
          </div>
        </div>
      </div>
    </>
  );
}
