import Footer6 from "@/components/footers/Footer6";
import Header7 from "@/components/headers/Header7";
import AppFeatures from "@/components/homes/home-6/AppFeatures";
import DownloadApp from "@/components/homes/home-6/DownloadApp";
import Faqs from "@/components/homes/home-6/Faqs";
import Hero from "@/components/homes/home-6/Hero";
import Testimonials from "@/components/homes/home-6/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Demo 6 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function DemoPage6() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-aqua font-thicccboi demo6">
        <div className="!font-THICCCBOI !text-[.85rem]">
          <div className="grow shrink-0">
            <Header7 />

            <>
              <Hero />
              {/* /section */}
              <AppFeatures />
              {/* /section */}
              <Faqs />
              {/* /section */}
              <Testimonials />
              {/* /section */}
              <DownloadApp />
            </>
          </div>
          <Footer6 />
        </div>
      </div>
    </>
  );
}
