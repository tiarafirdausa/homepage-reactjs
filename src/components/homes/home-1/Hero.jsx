import React from "react";

import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="wrapper bg-gradient-yellow">
      <div className="container pt-10 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] pb-8 !text-center">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full">
            <figure className="m-0 p-0">
              <img
                className="w-auto"
                srcSet="/assets/img/illustrations/i2@2x.png 2x"
                alt="image"
                src="/assets/img/illustrations/i2.png"
                width={800}
                height={538}
              />
            </figure>
          </div>
          {/* /column */}
          <div className="md:w-10/12 lg:w-5/12 xl:w-5/12 md:!ml-[8.33333333%] lg:!ml-0 xl:!ml-0 flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full text-center lg:text-left xl:text-left">
            <h1 className="!text-[calc(1.375rem_+_1.5vw)] font-bold !leading-[1.15] xl:!text-[2.5rem] !mb-5 md:mx-[-1.25rem] lg:mx-0">
              Grow Your Business with Our Solutions.
            </h1>
            <p className="lead !text-[1.1rem] !leading-[1.55] !mb-7">
              We help our clients to increase their website traffic, rankings
              and visibility in search results.
            </p>
            <span>
              <Link
                to={`/contact`}
                className="btn btn-yellow !text-white !bg-[#fab758] border-[#fab758] hover:text-white hover:bg-[#fab758] hover:!border-[#fab758] active:text-white active:bg-[#fab758] active:border-[#fab758] disabled:text-white disabled:bg-[#fab758] disabled:border-[#fab758] !text-[.85rem] !rounded-[50rem] !mr-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
              >
                Try It For Free
              </Link>
            </span>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
