import Contact3 from "@/components/contact/Contact3";
import Footer5 from "@/components/footers/Footer5";

import Header33 from "@/components/headers/Header33";

import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Contact 03 || Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose Reactjs Template with Tailwind CSS",
};
export default function ContactPage3() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="grow shrink-0">
        <Header33 />
        <section className="wrapper bg-[#21262c] opacity-100 !text-white">
          <div className="container pt-32 xl:pt-40 lg:pt-40 md:pt-40 pb-[12.5rem] xl:pb-[12.5rem] lg:pb-[12.5rem] md:pb-[12.5rem] !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-6/12 xxl:w-5/12 flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !text-white !mb-3">
                  Get in Touch
                </h1>
                <p className="lead !leading-[1.65] text-[0.9rem] font-medium xl:!px-10 xxl:!px-10">
                  Have any questions? Reach out to us from our contact form and
                  we will get back to you shortly.
                </p>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>

        <Contact3 />
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
