import React from "react";
import Testimonials from "./Testimonials";

export default function About2() {
  return (
    <>
      <h3 className="xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !leading-[1.2] font-DMSerif !font-normal tracking-normal !mb-3 !text-center">
        What People Say About Us
      </h3>
      <p className="lead !text-[1.05rem] !leading-[1.6] !mb-10 !text-center">
        Don't take our word for it. See what customers are saying about us.
      </p>
      <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] !mb-[4.5rem] items-center">
        <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[30px] max-w-full !relative">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full">
              <figure className="!rounded-[.4rem] xl:!mt-10 lg:!mt-10 md:!mt-10 !relative">
                <img
                  className="!rounded-[.4rem]"
                  srcSet="/assets/img/photos/g5@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/photos/g5.jpg"
                  width={350}
                  height={350}
                />
              </figure>
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full">
              <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                <div className="w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full xl:!order-2 lg:!order-2 md:!order-2">
                  <figure className="rounded-[0.4rem]">
                    <img
                      className="rounded-[0.4rem]"
                      srcSet="/assets/img/photos/g6@2x.jpg 2x"
                      alt="image"
                      src="/assets/img/photos/g6.jpg"
                      width={375}
                      height={250}
                    />
                  </figure>
                </div>
                {/*/column */}
                <div className="xl:w-10/12 lg:w-10/12 md:w-10/12 w-full flex-[0_0_auto] px-[12.5px] !mt-[25px] max-w-full">
                  <div className="card !bg-[#f0eaf6] !text-center">
                    <div className="card-body !py-12 !px-[2rem] counter-wrapper">
                      <h3 className="counter !whitespace-nowrap xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2">
                        5000+
                      </h3>
                      <p className="!mb-0 text-[0.8rem] font-medium">
                        Satisfied Customers
                      </p>
                    </div>
                    {/*/.card-body */}
                  </div>
                  {/*/.card */}
                </div>
                {/*/column */}
              </div>
              {/*/.row */}
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/*/column */}
        <Testimonials />
        {/*/column */}
      </div>
    </>
  );
}
