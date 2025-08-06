import Counter from "@/components/common/Counter";
import { facts } from "@/data/facts";
import React from "react";

export default function Facts() {
  return (
    <div className="flex flex-wrap mx-[-15px] xl:!-translate-y-2/4 lg:!-translate-y-2/4 md:!-translate-y-2/4 !mb-[4.5rem] xl:!mb-7 lg:!mb-7 md:!mb-7">
      <div className="xl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
        <div
          className="card image-wrapper bg-full bg-image bg-overlay bg-cover bg-[center_center] bg-no-repeat !bg-scroll !relative z-0 before:rounded-[0.4rem] before:bg-[rgba(30,34,40,.4)] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0"
          style={{
            backgroundImage: "url(/assets/img/photos/bg2.jpg)",
          }}
        >
          <div className="card-body p-[2.25rem] xl:!p-[2.5rem]">
            <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-40px] !text-center !text-white">
              {facts.map((elm, i) => (
                <div
                  key={i}
                  className="w-6/12 xl:w-3/12 lg:w-3/12 flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]"
                >
                  <h3 className="counter counter-lg !text-white xl:!text-[2.2rem] !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none !mb-2">
                    <Counter max={elm.number} />
                  </h3>
                  <p className="!m-0">{elm.description}</p>
                </div>
              ))}
            </div>
            {/*/.row */}
          </div>
          {/*/.card-body */}
        </div>
        {/*/.card */}
      </div>
      {/* /column */}
    </div>
  );
}
