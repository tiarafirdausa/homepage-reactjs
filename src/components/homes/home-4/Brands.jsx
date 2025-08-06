import React from "react";

import { brands } from "@/data/brands";
export default function Brands() {
  return (
    <div className="lg:!px-5 xl:!px-5 !mb-24 xl:!mb-60 lg:!mb-60 md:!mb-60">
      <div className="flex flex-wrap mx-0 md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-40px] items-center">
        {brands.slice(0, 6).map((elm, i) => (
          <div
            key={i}
            className="w-4/12 xl:w-2/12 lg:w-2/12 md:w-2/12 flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !mt-[40px] max-w-full"
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
  );
}
