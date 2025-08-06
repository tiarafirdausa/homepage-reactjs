import React from "react";

import { services } from "@/data/services";
export default function Services() {
  return (
    <section className="wrapper bg-[#262b32] opacity-100 !text-[#cacaca]">
      <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
        <figure
          className="!rounded-[.4rem] xl:!mt-[-17.5rem] lg:!mt-[-17.5rem] md:!mt-[-12.5rem] !mb-[4.5rem]"
          data-cue="slideInDown"
          data-delay={900}
        >
          <img
            className="!rounded-[.4rem]"
            srcSet="/assets/img/photos/about15@2x.jpg 2x"
            alt="image"
            src="/assets/img/photos/about15.jpg"
            width={1200}
            height={581}
          />
        </figure>
        <div className="flex flex-wrap mx-[-15px]">
          <div className="md:w-10/12 lg:w-8/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
            <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-bold !text-white !mb-[2.5rem]">
              The service we offer is specifically designed to meet your needs.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div
          className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-40px] !text-center"
          data-cues="slideInDown"
          data-group="services"
        >
          {services.map((feature, index) => (
            <div
              key={index}
              className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[40px] max-w-full"
            >
              <div className="icon btn btn-circle btn-lg btn-orange !text-white !bg-[#f78b77] border-[#f78b77] hover:text-white hover:bg-[#f78b77] hover:!border-[#f78b77] active:text-white active:bg-[#f78b77] active:border-[#f78b77] disabled:text-white disabled:bg-[#f78b77] disabled:border-[#f78b77] pointer-events-none !mb-5 xl:!text-[1.3rem] !w-[3rem] !h-[3rem] lg:!text-[calc(1.255rem_+_0.06vw)] md:!text-[calc(1.255rem_+_0.06vw)] max-md:!text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                <i className={feature.iconClass} />
              </div>
              <h4 className="!text-white !text-[1rem] !leading-[1.45]">
                {feature.title}
              </h4>
              <p className="!mb-3">{feature.description}</p>
            </div>
          ))}
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
