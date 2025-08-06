import React from "react";

export default function Stratagy() {
  return (
    <>
      <div className="flex flex-wrap mx-[-15px] !mb-8 !text-center">
        <div className="lg:w-8/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
          <h2 className="!text-[0.8rem] uppercase !text-[#a07cc5] !mb-3 !leading-[1.35] !tracking-[0.02rem]">
            Company Strategy
          </h2>
          <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-bold">
            Just sit and relax while we take care of your business needs.
          </h3>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] !mb-[4.5rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] items-center">
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full !relative">
          <div
            className="shape bg-dot leaf rellax !w-[7rem] !h-[8rem] !absolute z-[1] opacity-50"
            data-rellax-speed={1}
            style={{ bottom: "-2rem", left: "-0.7rem" }}
          />
          <figure className="rounded-[0.4rem] relative z-[2]">
            <img
              className="rounded-[0.4rem]"
              srcSet="/assets/img/photos/about20@2x.jpg 2x"
              alt="image"
              src="/assets/img/photos/about20.jpg"
              width={650}
              height={525}
            />
          </figure>
        </div>
        {/*/column */}
        <div className="xl:w-6/12 lg:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full">
          <h3 className="xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !leading-[1.3] font-bold !mb-7">
            Our Working Process
          </h3>
          <div className="flex flex-row !mb-5">
            <div>
              <span className="icon btn btn-circle btn-soft-violet pointer-events-none !mr-5 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]">
                <span className="number text-[0.9rem]">1</span>
              </span>
            </div>
            <div>
              <h4 className="!mb-1 !text-[1rem] !leading-[1.45]">
                Collect Ideas
              </h4>
              <p className="!mb-0">
                Nulla vitae elit libero pharetra augue dapibus. Praesent commodo
                cursus. Sed posuere consectetur.
              </p>
            </div>
          </div>
          <div className="flex flex-row !mb-5">
            <div>
              <span className="icon btn btn-circle btn-soft-violet pointer-events-none !mr-5 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]">
                <span className="number text-[0.9rem]">2</span>
              </span>
            </div>
            <div>
              <h4 className="!mb-1 !text-[1rem] !leading-[1.45]">
                Data Analysis
              </h4>
              <p className="!mb-0">
                Vivamus sagittis lacus vel augue laoreet. Etiam porta sem
                malesuada magna est at lobortis nulla auctor.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <span className="icon btn btn-circle btn-soft-violet pointer-events-none !mr-5 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]">
                <span className="number text-[0.9rem]">3</span>
              </span>
            </div>
            <div>
              <h4 className="!mb-1 !text-[1rem] !leading-[1.45]">
                Finalize Product
              </h4>
              <p className="!mb-0">
                Cras mattis consectetur purus sit amet. Aenean lacinia bibendum
                nulla sed. Donec ullamcorper metus.
              </p>
            </div>
          </div>
        </div>
        {/*/column */}
      </div>
    </>
  );
}
