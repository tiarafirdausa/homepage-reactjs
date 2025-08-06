import Footer29 from "@/components/footers/Footer29";
import Header30 from "@/components/headers/Header30";
import About from "@/components/homes/home-33/About";
import Cta from "@/components/homes/home-33/Cta";
import Hero from "@/components/homes/home-33/Hero";
import Services from "@/components/homes/home-33/Services";
import Testimonials from "@/components/homes/home-33/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 33 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage33() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="font-space color-navy demo33">
        <div className="grow shrink-0">
          <Header30 />

          <>
            <Hero />
            {/* /section */}
            <Services />
            {/* /section */}
            <Testimonials />
            {/* /section */}
            <About />
            {/* /section */}
            <Cta />
            {/* /section */}
          </>
        </div>{" "}
        <Footer29 />{" "}
      </div>
    </>
  );
}
