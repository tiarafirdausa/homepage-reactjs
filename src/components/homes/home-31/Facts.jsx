import React from "react";

import { facts2 } from "@/data/facts";
import Counter from "@/components/common/Counter";
export default function Facts() {
  return (
    <>
      {" "}
      <div className="flex flex-wrap mx-[-15px] !text-center !mb-7">
        <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
          <h2 className="!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase !text-[#aab0bc] !mb-3">
            Join Our Community
          </h2>
          <h3 className="!text-[calc(1.345rem_+_1.14vw)] font-semibold !leading-[1.2] xl:!text-[2.2rem] !tracking-[-0.03em] !mb-[10]">
            We are
            <span className="!relative z-[1] style-1 primary before:content-[''] before:z-[-1] before:absolute before:opacity-100 before:block before:-translate-x-2/4 before:-translate-y-2/4 before:-rotate-1 before:w-[111%] before:h-[110%] before:rounded-[80%] before:border-t-0 before:border-[3px] before:border-solid before:border-[#3f78e0] before:left-2/4 before:!top-[52%] after:content-[''] after:z-[-1] after:absolute after:opacity-100 after:block after:[background-size:100%_100%] after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:-translate-x-2/4 after:-translate-y-2/4 after:-rotate-2 after:w-[107%] after:h-[111%] after:rounded-[80%] after:border-l-0 after:border-b-0 after:border-[3px] after:border-solid after:border-[#3f78e0] after:left-2/4 after:top-[52%] max-xl:before:!hidden max-xl:after:!hidden max-lg:before:!hidden max-lg:after:!hidden max-md:before:!hidden max-md:after:!hidden max-sm:before:!hidden max-sm:after:!hidden">
              <em>trusted</em>
            </span>
            by over 50000+ clients. Join them now and grow your business.
          </h3>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <div className="flex flex-wrap mx-[-15px] !mb-8">
        <div className="md:w-10/12 lg:w-9/12 xl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
          <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-20px] xl:!mt-0 lg:!mt-0 md:!mt-0">
            {facts2.map((stat, index) => (
              <div
                key={index}
                className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[20px] xl:!mt-0 lg:!mt-0 md:!mt-0"
              >
                <h3 className="counter counter-lg !text-[calc(1.35rem_+_1.2vw)] !tracking-[normal] !leading-none !mb-2 xl:!text-[2.25rem] !text-[#3f78e0]">
                  <Counter max={stat.number} />
                  {stat.suffix}
                </h3>
                <p className="!mb-0">{stat.label}</p>
              </div>
            ))}
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <div
        className="flex flex-wrap mx-[-15px] !relative"
        style={{ zIndex: 1 }}
      >
        <div className="lg:w-10/12 xl:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mt-[3rem] xl:!mb-[-15rem] lg:!mb-[-15rem] md:!mb-[-15rem] sm:!mb-[-10rem]">
          <figure className="m-0 p-0">
            <img
              className="max-w-full h-auto"
              srcSet="/assets/img/illustrations/i32@2x.png 2x"
              alt="image"
              src="/assets/img/illustrations/i32.png"
              width={960}
              height={635}
            />
          </figure>
        </div>
        {/* /column */}
      </div>
    </>
  );
}
