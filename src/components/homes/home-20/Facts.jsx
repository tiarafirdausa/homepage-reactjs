import React from "react";

import { facts } from "@/data/facts";
import Counter from "@/components/common/Counter";
export default function Facts() {
  return (
    <>
      {" "}
      <div className="flex flex-wrap mx-[-15px] !text-center !mb-7">
        <div className="lg:w-11/12 xl:w-10/12 xxl:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
          <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
            Join Our Community
          </h2>
          <h3 className="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold lg:!px-14 xxl:!px-[4.5rem]">
            We are trusted by over 5000+ clients. Join them now and grow your
            business.
          </h3>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <div className="flex flex-wrap mx-[-15px] !mb-6">
        <div className="md:w-10/12 lg:w-9/12 xl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
          <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-20px] xl:!mt-0 lg:!mt-0 md:!mt-0">
            {facts.slice(0, 3).map((elm, i) => (
              <div
                key={i}
                className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[20px] xl:!mt-0 lg:!mt-0 md:!mt-0"
              >
                <h3 className="counter counter-lg xl:!text-[2.2rem] !text-[calc(1.35rem_+_1.2vw)] !leading-none !tracking-[normal] !mb-2 !text-[#747ed1]">
                  <Counter max={elm.number} />+
                </h3>
                <p className="!font-medium !mb-0">{elm.description}</p>
              </div>
            ))}
          </div>
          {/*/.row */}
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <figure className="m-0 p-0">
        <img
          className="w-full max-w-full !h-auto"
          srcSet="/assets/img/photos/about26@2x.png 2x"
          alt="image"
          src="/assets/img/photos/about26.png"
          width={1290}
          height={506}
        />
      </figure>
    </>
  );
}
