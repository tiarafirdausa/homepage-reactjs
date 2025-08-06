import React from "react";

import ProgressCircle from "@/components/common/CircularProgress";
import { listFeatures } from "@/data/features";
export default function Features() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] items-center">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] xl:!order-2 lg:!order-2 !relative !mt-[50px]">
            <figure className="rounded-[0.4rem]">
              <img
                className="max-w-full h-auto rounded-[0.4rem]"
                srcSet="/assets/img/photos/about27@2x.jpg 2x"
                alt="image"
                src="/assets/img/photos/about27.jpg"
                width={625}
                height={590}
              />
            </figure>
            <div
              className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !absolute xl:block lg:block md:block max-sm:!hidden"
              style={{ top: "15%", left: "-7%" }}
            >
              <div className="card-body py-4 px-5">
                <div className="flex flex-row items-center">
                  <div>
                    <div className="icon btn btn-block btn-soft-primary pointer-events-none !mx-auto !mr-4 !w-[2.5rem] !h-[2.5rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0">
                      <i className="uil uil-users-alt before:content-['\ed70']" />
                    </div>
                  </div>
                  <div>
                    <h3 className="!text-[1.25rem] counter !leading-[1.4] !mb-0 whitespace-nowrap">
                      25000+
                    </h3>
                    <p className="!text-[0.8rem] leading-normal !mb-0 whitespace-nowrap">
                      Happy Clients
                    </p>
                  </div>
                </div>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
            <div
              className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !absolute !text-center xl:block lg:block md:block max-sm:!hidden"
              style={{ bottom: "10%", left: "-10%" }}
            >
              <div className="card-body p-6">
                <div className="progressbar semi-circle primary !relative !mb-3 !m-[0_auto_1rem] !w-[8.5rem] !h-[4.25rem]">
                  <ProgressCircle max={80} />
                </div>
                <h4 className="!mb-0">Time Saved</h4>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
            <h2 className="!text-[0.8rem] uppercase !text-[#3f78e0] !mb-3 !leading-[1.35] !tracking-[0.02rem]">
              What Makes Us Different?
            </h2>
            <h3 className="!text-[calc(1.325rem_+_0.9vw)] font-semibold xl:!text-[2rem] !leading-[1.2] !mb-5">
              We make spending stress free so you have the perfect control.
            </h3>
            <p className="!mb-6">
              Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper
              nulla non metus auctor fringilla. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac
              cursus. Integer posuere erat a ante venenatis.
            </p>
            <ul className="pl-0 list-none bullet-bg bullet-soft-primary">
              {listFeatures.map((elm, i) => (
                <li key={i} className="relative !pl-6">
                  <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                  {elm}
                </li>
              ))}
            </ul>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
