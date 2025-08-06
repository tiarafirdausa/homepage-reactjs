import { services } from "@/data/services";
import React from "react";

export default function Features2() {
  return (
    <section id="snippet-2" className="wrapper !bg-[#ffffff] ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="lg:w-8/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
            <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
              What We Do?
            </h2>
            <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-9">
              The service we offer is specifically designed to meet your needs.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] !mt-[-40px]">
          {services.map((elm, i) => (
            <div
              key={i}
              className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[40px] max-w-full"
            >
              <div
                className={`icon btn btn-block btn-lg ${elm.btnClass} pointer-events-none !mb-5`}
              >
                <i className={elm.iconClass} />
              </div>
              <h4>{elm.title}</h4>
              <p className="!mb-3">{elm.description}</p>
              <a
                href="#"
                className="more hover !text-[#fab758] focus:!text-[#fab758] hover:!text-[#fab758]"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}

      {/* /.container */}
    </section>
  );
}
