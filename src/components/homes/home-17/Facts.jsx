import Counter from "@/components/common/Counter";
import { facts } from "@/data/facts";
import React from "react";

export default function Facts() {
  return (
    <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] xl:!mt-0 lg:!mt-0 !mb-12 items-end">
      <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] xl:!mt-0 lg:!mt-0 max-w-full">
        <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
          Company Facts
        </h2>
        <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-0">
          We are proud of our works
        </h3>
      </div>
      {/* /column */}
      <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full xl:!mt-2 lg:!mt-2">
        <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-30px] !text-center">
          {facts.slice(0, 3).map((elm, i) => (
            <div
              key={i}
              className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] !mt-[30px] max-w-full"
            >
              <h3 className="counter counter-lg xl:!text-[2.2rem] !text-[calc(1.345rem_+_1.14vw)] !leading-none !tracking-[normal] !mb-2">
                <Counter max={elm.number} />+
              </h3>
              <p className="!mb-0">{elm.description}</p>
            </div>
          ))}
        </div>
        {/*/.row */}
      </div>
      {/* /column */}
    </div>
  );
}
