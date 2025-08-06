import { features2 } from "@/data/features";

import React from "react";

export default function About8() {
  return (
    <section id="snippet-11" className="wrapper !bg-[#ffffff]  ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px] max-sm:!mt-[-50px] !mt-[-80px] md:mx-[-20px] xl:mx-[-35px] items-center !mb-10 xl:!mb-14 lg:!mb-14 md:!mb-14">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[80px]">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                <figure className="rounded-[0.4rem]">
                  <img
                    className="rounded-[0.4rem]"
                    srcSet="/assets/img/photos/g12@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/g12.jpg"
                    width={293}
                    height={260}
                  />
                </figure>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !self-end !mt-[25px]">
                <figure className="rounded-[0.4rem]">
                  <img
                    className="rounded-[0.4rem]"
                    srcSet="/assets/img/photos/g13@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/g13.jpg"
                    width={293}
                    height={235}
                  />
                </figure>
              </div>
              {/*/column */}
              <div className="w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                <figure className="!rounded-[.4rem] xl:!mx-5 lg:!mx-5 md:!mx-5">
                  <img
                    className="!rounded-[.4rem]"
                    srcSet="/assets/img/photos/g11@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/g11.jpg"
                    width={560}
                    height={285}
                  />
                </figure>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[80px]">
            <h2 className="!text-[0.8rem] uppercase !text-[#3f78e0] !mb-3 !leading-[1.35] !tracking-[0.02rem]">
              Who Are We?
            </h2>
            <h3 className="xl:!text-[2rem] !leading-[1.2] !text-[calc(1.325rem_+_0.9vw)] font-semibold !mb-5">
              Company that believes in the power of creative strategy.
            </h3>
            <p className="!mb-6">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum
              nulla sed.
            </p>
            <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-30px]">
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                <h3 className="counter counter-lg !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none xl:!text-[2.2rem] !mb-1">
                  99.7%
                </h3>
                <h5 className="!mb-0">Customer Satisfaction</h5>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                <h3 className="counter counter-lg !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none xl:!text-[2.2rem] !mb-1">
                  12x
                </h3>
                <h5 className="!mb-0">Revenue Growth</h5>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] !mb-7 xl:!mb-9 lg:!mb-9 md:!mb-9">
          {features2.map((column, index) => (
            <div
              key={index}
              className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[30px]"
            >
              <div className="flex flex-row">
                <div>
                  <div className="icon btn btn-block pointer-events-none btn-soft-primary !mr-4 !w-10 !h-10">
                    <span className="number text-[0.9rem] table-cell text-center align-middle font-bold mx-auto my-0">
                      {column.number}
                    </span>
                  </div>
                </div>
                <div>
                  <h3>{column.title}</h3>
                  <p className="!mb-2">{column.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*/.row */}
        <div className="text-center">
          <a
            href="#"
            className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0]"
          >
            More Details
          </a>
        </div>
      </div>
    </section>
  );
}
