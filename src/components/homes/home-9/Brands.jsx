import React from "react";

import { brands } from "@/data/brands";
export default function Brands() {
  return (
    <>
      <h2 className="!text-[.75rem] !leading-[1.35] font-bold [word-spacing:0.1rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !text-center !mb-8">
        Trusted by Over 5000 Clients
      </h2>
      <div className="xl:!px-5 lg:!px-5 !mb-[4.5rem] xl:!mb-[9rem] lg:!mb-[9rem] md:!mb-[9rem]">
        <div className="flex flex-wrap mx-0 md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-40px] items-center">
          {brands.slice(0, 6).map((elm, i) => (
            <div
              key={i}
              className="w-4/12 xl:w-2/12 lg:w-2/12 md:w-2/12 flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[40px] max-w-full"
            >
              <figure className="px-5 md:!px-0 lg:!px-2 xl:!px-3 xxl:!px-4">
                <img
                  alt="image"
                  src={elm.src}
                  width={elm.width}
                  height={elm.height}
                />
              </figure>
            </div>
          ))}
        </div>
        {/*/.row */}
      </div>
    </>
  );
}
