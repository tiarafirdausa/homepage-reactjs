import Footer30 from "@/components/footers/Footer30";

import Header13 from "@/components/headers/Header13";
import Banner from "@/components/homes/home-34/Banner";
import Cta from "@/components/homes/home-34/Cta";
import Facts from "@/components/homes/home-34/Facts";
import Features from "@/components/homes/home-34/Features";
import Hero from "@/components/homes/home-34/Hero";
import InnerPages from "@/components/homes/home-34/InnerPages";
import Projects from "@/components/homes/home-34/Projects";
import Tools from "@/components/homes/home-34/Tools";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 34 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage34() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-purple font-thicccboi demo34">
        <div className="grow shrink-0">
          <Header13 />
          <>
            <Hero />
            {/* /section */}
            <Projects />
            {/* /section */}
            <Facts />
            {/* /section */}
            <Features />
            {/* /section */}
            <Tools />
            {/* /section */}
            <InnerPages />
            {/* /section */}
            <Banner />
            {/* /section */}
            <Cta />
            {/* /section */}
          </>
        </div>
        <Footer30 />
      </div>
    </>
  );
}
