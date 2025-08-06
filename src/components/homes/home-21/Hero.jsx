import React from "react";

import AnimatedText from "@/components/common/AnimatedText";
import { brands } from "@/data/brands";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pt-10 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24 !text-center">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] xl:!mt-0 !mb-[4.5rem] items-center">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] xl:!mt-0 max-w-full xl:!order-2 lg:!order-2">
            <figure className="m-0 p-0">
              <img
                className="img-auto"
                srcSet="/assets/img/illustrations/i21@2x.png 2x"
                alt="image"
                src="/assets/img/illustrations/i21.png"
                width={800}
                height={559}
              />
            </figure>
          </div>
          {/* /column */}
          <div className="md:w-10/12 md:!ml-[8.33333333%] lg:!ml-0 lg:w-5/12 xl:!ml-0 xl:w-5/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] xl:!mt-0 max-w-full text-center lg:text-left xl:text-left">
            <h1 className="xl:!text-[2.7rem] !text-[calc(1.395rem_+_1.74vw)] !leading-[1.15] !mb-5 md:mx-[-1.25rem] lg:mx-0 !mt-7">
              A digital agency
              <br className="xl:!hidden lg:!hidden md:!hidden" />
              specializing on
              <br className="xl:!hidden lg:!hidden md:!hidden" />
              <span className="rotator-fade !text-[#5eb9f0]">
                <AnimatedText
                  strings={["mobile design", "web design", "3D animation"]}
                />
              </span>
            </h1>
            <p className="lead !text-[1.1rem] !leading-[1.55] font-medium !mb-7">
              We are an award winning design agency that strongly believes in
              the power of creative ideas.
            </p>
            <span>
              <Link
                to={`/signup`}
                className="btn btn-lg btn-sky !text-white !bg-[#5eb9f0] border-[#5eb9f0] hover:text-white hover:!bg-[#5eb9f0] hover:!border-[#5eb9f0] focus:shadow-[rgba(88,167,216,1)] active:text-white active:!bg-[#5eb9f0] active:border-[#5eb9f0] disabled:text-white disabled:!bg-[#5eb9f0] disabled:border-[#5eb9f0] !rounded-[50rem] !mr-2"
              >
                Get Started
              </Link>
            </span>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <p className="text-center !mb-8">
          Trusted by over 2K+ clients across the world
        </p>
        <div className="flex flex-wrap mx-[-15px] row-cols-4 row-cols-md-4 row-cols-lg-7 row-cols-xl-7 !mt-[-50px] !mb-2 items-center justify-center">
          {/*/column */}
          {brands.slice(0, 6).map((elm, i) => (
            <div
              key={i}
              className="w-1/4 xl:w-[14.2857142857%] lg:w-[14.2857142857%] md:w-1/4 flex-[0_0_auto] !px-[15px] !mt-[50px] max-w-full"
            >
              <img
                className="md:!px-[0.75rem] lg:!px-0 xl:!px-[0.5rem] xxl:!px-[1.25rem]"
                alt="image"
                src={elm.src}
                width={elm.width}
                height={elm.height}
              />
            </div>
          ))}

          {/*/column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
      <div className="overflow-hidden">
        <div className="divider !text-[#f0f8fe] mx-[-0.5rem]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path
              fill="currentColor"
              d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
            />
          </svg>
        </div>
      </div>
      {/* /.overflow-hidden */}
    </section>
  );
}
