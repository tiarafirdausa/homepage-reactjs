import Counter from "@/components/common/Counter";
import { facts } from "@/data/facts";
import React from "react";

export default function Facts() {
  return (
    <section className="wrapper bg-[#262b32] opacity-100 !text-[#cacaca]">
      <div className="container py-[4.5rem] xl:pt-28 lg:pt-28 md:pt-28 xl:pb-[12.5rem] lg:pb-[12.5rem] md:pb-[12.5rem]">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] xl:!mt-0 lg:!mt-0 !mb-2 items-center">
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] xl:!mt-0 lg:!mt-0 max-w-full">
            <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-bold !text-white !mb-3 xxl:!pr-20">
              We are proud of our projects
            </h3>
            <p className="lead !text-[1.1rem] !leading-[1.55] font-medium !mb-0 xxl:!pr-10">
              We bring solutions to make life easier for our customers.
            </p>
          </div>
          {/* /column */}
          <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full xl:!mt-2 lg:!mt-2">
            <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-30px] !text-center">
              {facts.slice(0, 3).map((elm, i) => (
                <div
                  key={i}
                  className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] !mt-[30px] max-w-full"
                >
                  <h3 className="counter counter-lg !text-white xl:!text-[2.2rem] !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none !mb-2">
                    <Counter max={elm.number} />+
                  </h3>
                  <p className="font-medium !mb-0">{elm.description}</p>
                </div>
              ))}
            </div>
            {/*/.row */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
