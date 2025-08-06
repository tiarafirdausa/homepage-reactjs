import Counter from "@/components/common/Counter";
import { facts } from "@/data/facts";

import React from "react";

export default function About3() {
  return (
    <section id="snippet-3" className="wrapper !bg-[#ffffff]  ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-2 lg:pb-2 md:pb-[5rem]">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full">
            <figure className="rounded-[0.4rem]">
              <img
                className="rounded-[0.4rem]"
                srcSet="/assets/img/photos/about5@2x.jpg 2x"
                alt="image"
                src="/assets/img/photos/about5.jpg"
                width={1200}
                height={650}
              />
            </figure>
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <div
                  className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 !text-white !mt-[-1.25rem] xl:!mt-0 lg:!mt-0 xl:-translate-y-2/4 lg:-translate-y-2/4 bg-cover bg-[center_center] bg-no-repeat !bg-scroll !relative z-0 before:rounded-[0.4rem] before:bg-[rgba(30,34,40,.4)] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0"
                  style={{
                    backgroundImage: "url(/assets/img/photos/bg2.jpg)",
                  }}
                >
                  <div className="card-body p-[2.25rem] xl:!p-[2.5rem]">
                    <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-20px] !text-center">
                      {facts.map((item, index) => (
                        <div
                          key={index}
                          className="w-6/12 xl:w-3/12 lg:w-3/12 flex-[0_0_auto] !px-[15px] max-w-full !mt-[20px]"
                        >
                          <h3 className="counter counter-lg !text-white xl:!text-[2.2rem] !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none !mb-2">
                            <Counter max={item.number} />
                          </h3>
                          <p className="!text-[0.8rem] font-medium !mb-0 !text-white">
                            {item.description}
                          </p>
                        </div>
                      ))}
                      {/*/column */}
                    </div>
                    {/*/.row */}
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.card */}
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /column */}
        </div>

        {/*/.row */}
      </div>
      {/* /.container */}

      {/* /.container */}
    </section>
  );
}
