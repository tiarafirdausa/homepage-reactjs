import React from "react";

import { designItems } from "@/data/services";
export default function Services() {
  return (
    <section className="wrapper bg-gradient-sky">
      <div className="container pt-14 xl:pt-8 lg:pt-8 pb-[4.5rem] xl:pb-28 lg:pb-28 md:pb-28">
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
            <h2 className="!text-[0.8rem] uppercase !text-[#5eb9f0] !mb-3 !leading-[1.35] !tracking-[0.02rem]">
              What We Do?
            </h2>
            <h3 className="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] !mb-10 xxl:!px-10">
              The service we offer is specifically designed to meet your needs.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-60px] xxl:!px-5 !text-center items-end">
          {designItems.map((item, index) => (
            <div
              key={index}
              className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[60px]"
            >
              <div className="md:!px-20 lg:!px-3 xl:!px-3">
                <figure className="!mb-6">
                  <img
                    className="max-w-full h-auto"
                    srcSet={item.imgSrcSet}
                    alt={item.alt}
                    src={item.imgSrc}
                    width={item.width}
                    height={item.height}
                  />
                </figure>
                <h3>{item.title}</h3>
                <p className="!mb-2">{item.description}</p>
                <a href="#" className="more hover">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
