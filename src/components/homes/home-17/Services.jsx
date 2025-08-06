import { services } from "@/data/services";
import React from "react";

export default function Services() {
  return (
    <>
      {" "}
      <div className="flex flex-wrap mx-[-15px] !text-center">
        <div className="lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
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
      <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-40px] !mb-[4.5rem] xl:!mb-[6rem] lg:!mb-[6rem] md:!mb-[6rem] !text-center">
        {services.slice(0, 3).map((elm, i) => (
          <div
            key={i}
            className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[40px] max-w-full"
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
              className="more hover !text-[#747ed1] focus:!text-[#747ed1] hover:!text-[#747ed1]"
            >
              Learn More
            </a>
          </div>
        ))}

        {/*/column */}
      </div>
    </>
  );
}
