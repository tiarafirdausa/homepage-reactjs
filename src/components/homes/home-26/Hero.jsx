import React from "react";

import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="wrapper !bg-[#f0f0f8]">
      <div className="container pt-10 lg:pt-14 xl:!pt-14 xxl:!pt-10 lg:pb-10 xl:pb-10 xxl:pb-0">
        <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px] items-center text-center lg:text-left xl:text-left">
          <div
            className="lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[50px]"
            data-cues="slideInDown"
            data-group="page-title"
            data-delay={900}
          >
            <h1 className="xl:!text-[2.5rem] !text-[calc(1.375rem_+_1.5vw)] !leading-[1.15] font-semibold !mb-4 xl:!mr-5 xl:!mt-[-2.5rem] lg:!mt-[-2.5rem]">
              Grow Your Business with{" "}
              <br className="hidden md:block xl:!hidden lg:!hidden" />
              <span className="!text-[#605dba]">Our Marketing Solutions</span>
            </h1>
            <p className="lead !text-[1.2rem] !leading-[1.5] !mb-7 xxl:!pr-20">
              We help our clients to increase their website
              <br className="hidden md:block xl:!hidden lg:!hidden" />
              traffic, rankings and visibility in search results.
            </p>
            <div className="inline-flex !mr-2">
              <Link
                to={`/projects`}
                className="btn btn-lg btn-grape !text-white !bg-[#605dba] border-[#605dba] hover:text-white hover:bg-[#605dba] hover:!border-[#605dba] active:text-white active:bg-[#605dba] active:border-[#605dba] disabled:text-white disabled:bg-[#605dba] disabled:border-[#605dba] rounded"
              >
                Try it for Free
              </Link>
            </div>
            <div className="inline-flex">
              <Link
                to={`/projects`}
                className="btn btn-lg btn-outline-grape !text-[#605dba] bg-[#605dba] !border-[#605dba] !border-[2px] hover:!text-white hover:!bg-[#605dba] hover:!border-[#605dba] focus:shadow-[rgba(96,93,186,1)] active:!text-white active:bg-[#605dba] active:border-[#605dba] disabled:!text-white disabled:bg-transparent disabled:border-[#605dba] rounded"
              >
                Explore Now
              </Link>
            </div>
          </div>
          {/*/column */}
          <div className="w-10/12 md:w-7/12 lg:w-6/12 xl:w-5/12 !mx-auto flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-5 md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[50px]">
            <img
              className="max-w-full h-auto !mb-[-3.5rem] md:!mb-[-4.5rem] lg:!mb-[-9rem] xl:!mb-[-9rem]"
              srcSet="/assets/img/illustrations/3d11@2x.png 2x"
              data-cue="fadeIn"
              data-delay={300}
              alt="image"
              src="/assets/img/illustrations/3d11.png"
              width={800}
              height={1080}
            />
          </div>
          {/*/column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
      <figure className="m-0 p-0">
        <img
          className="w-full max-w-full !h-auto"
          alt="image"
          src="/assets/img/photos/clouds.png"
          width={3170}
          height={250}
        />
      </figure>
    </section>
  );
}
