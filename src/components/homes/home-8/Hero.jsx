import React from "react";

import Counter from "@/components/common/Counter";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className="card !bg-[#eff7fa] !rounded-[0.8rem] !mt-2 !mb-[4rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
      <div className="card-body xl:!p-[2.5rem] lg:!p-[2.5rem] md:!p-[2.5rem] xl:!py-12 xl:!px-20 p-[40px]">
        <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-[-20px] !mt-[-50px] items-center">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:px-0 lg:!px-[20px] !mt-[50px] max-w-full xl:!order-2 lg:!order-2 flex !relative">
            <img
              className="max-w-full h-auto !ml-auto !mx-auto xl:!mr-8 lg:!mr-8"
              srcSet="/assets/img/photos/co3@2x.png 2x"
              alt="image"
              data-cue="fadeIn"
              src="/assets/img/photos/co3.png"
              width={388}
              height={510}
            />
            <div data-cue="slideInRight" data-delay={300}>
              <div
                className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !absolute"
                style={{ bottom: "10%", right: "-3%" }}
              >
                <div className="card-body py-4 px-5">
                  <div className="flex flex-row items-center">
                    <div>
                      <div className="icon btn btn-circle btn-md btn-soft-aqua pointer-events-none !mx-auto !mr-[.75rem] !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]">
                        <i className="uil uil-users-alt before:content-['\ed70']" />
                      </div>
                    </div>
                    <div>
                      <h3 className="counter !mb-0 whitespace-nowrap">
                        <Counter max={25000} />+
                      </h3>
                      <p className="!text-[0.7rem] leading-normal !mb-0 whitespace-nowrap">
                        Happy Clients
                      </p>
                    </div>
                  </div>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/div */}
          </div>
          {/*/column */}
          <div
            className="xl:w-6/12 lg:w-6/12 flex-[0_0_auto] !px-[15px] xl:px-0 lg:!px-[20px] !mt-[50px] max-w-full text-center lg:text-left xl:text-left"
            data-cues="slideInDown"
            data-group="page-title"
            data-delay={600}
          >
            <h1 className="xl:!text-[2.4rem] !text-[calc(1.365rem_+_1.38vw)] !leading-[1.15] !font-DMSerif !font-normal !tracking-normal !mb-5 [word-spacing:normal!important]">
              Crafting project specific solutions with expertise.
            </h1>
            <p className="lead !text-[1.05rem] !leading-[1.5] font-medium !mb-7 xl:!pr-10">
              We're a company that focuses on establishing long-term
              relationships with customers.
            </p>
            <div
              className="flex justify-center lg:!justify-start xl:!justify-start"
              data-cues="slideInDown"
              data-group="page-title-buttons"
              data-delay={900}
            >
              <span>
                <Link
                  to={`/projects`}
                  className="btn btn-lg btn-aqua !text-white !bg-[#54a8c7] border-[#54a8c7] hover:text-white hover:bg-[#54a8c7] hover:!border-[#54a8c7] focus:shadow-[rgba(79,152,181,1)] active:text-white active:bg-[#54a8c7] active:border-[#54a8c7] disabled:text-white disabled:bg-[#54a8c7] disabled:border-[#54a8c7] !rounded-[50rem] !mr-2"
                >
                  Explore Now
                </Link>
              </span>
              <span>
                <Link
                  to={`/contact`}
                  className="btn btn-lg btn-outline-aqua !rounded-[50rem] !text-[#54a8c7] !border-[#54a8c7] hover:!bg-[#54a8c7] hover:!text-white"
                >
                  Contact Us
                </Link>
              </span>
            </div>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/*/.card-body */}
    </div>
  );
}
