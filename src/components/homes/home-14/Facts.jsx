import Counter from "@/components/common/Counter";
import { facts } from "@/data/facts";
import React from "react";

export default function Facts() {
  return (
    <section className="wrapper !bg-[#f6f3f9]">
      <div className="container py-[4.5rem] xl:pt-28 lg:pt-28 md:pt-28 xl:pb-36 lg:pb-36 md:pb-36">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] xl:!mt-0 lg:!mt-0 items-center">
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full text-center lg:text-left xl:text-left xl:!mt-0 lg:!mt-0">
            <h2 className="!text-[0.8rem] uppercase !text-[#a07cc5] !mb-3 !leading-[1.35] !tracking-[0.02rem]">
              Company Facts
            </h2>
            <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-bold !mb-3 xxl:!pr-20">
              We are proud of our projects
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
                  <h3 className="counter counter-lg xl:!text-[2.2rem] !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none !mb-2">
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
