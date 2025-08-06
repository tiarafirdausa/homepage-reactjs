import Footer14 from "@/components/footers/Footer14";
import Header17 from "@/components/headers/Header17";
import Hero from "@/components/homes/home-16/Hero";
import Projects from "@/components/homes/home-16/Projects";
import Services from "@/components/homes/home-16/Services";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 16 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage16() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-pink demo16">
        <div className="grow shrink-0">
          <Header17 />

          <>
            <Hero />
            {/* /section */}
            <Services />
            {/* /section */}
            <Projects />
            {/* /section */}
          </>
        </div>
        <Footer14 />
      </div>
    </>
  );
}
