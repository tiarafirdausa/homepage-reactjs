import Counter from "@/components/common/Counter";
import { facts } from "@/data/facts";
import React from "react";

export default function Facts() {
  return (
    <section className="wrapper !bg-[#edf2fc]">
      <div className="container py-[4.5rem] xl:pt-28 lg:pt-28 md:pt-28 xl:pb-[12.5rem] lg:pb-[12.5rem] md:pb-[12.5rem]">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] xl:!mt-0 lg:!mt-0 !mb-2 items-end">
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] xl:!mt-0 lg:!mt-0 max-w-full">
            <h2 className="!text-[0.8rem] uppercase inline-flex !leading-[1.35] text-line relative align-top !pl-[1.4rem] !tracking-[0.02rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#54a8c7] !text-[#54a8c7] !mb-3">
              Company Facts
            </h2>
            <h3 className="!text-[calc(1.315rem_+_0.78vw)] font-bold xl:!text-[1.9rem] !leading-[1.25] !mb-0 xxl:!pr-20">
              We are proud of our works
            </h3>
          </div>
          {/* /column */}
          <div className="lg:w-8/12 xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full xl:!mt-2 lg:!mt-2">
            <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-30px] !text-center">
              {facts.slice(0, 3).map((elm, i) => (
                <div
                  key={i}
                  className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] !mt-[30px] max-w-full"
                >
                  <h3 className="counter counter-lg !text-[calc(1.35rem_+_1.2vw)] !tracking-[normal] !leading-none !mb-[.5rem] xl:!text-[2.25rem]">
                    <Counter max={elm.number} />+
                  </h3>
                  <p className="font-medium !mb-0">{elm.description}</p>
                </div>
              ))}

              {/*/column */}
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
