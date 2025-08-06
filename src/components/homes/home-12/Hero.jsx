import React from "react";

import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="wrapper !bg-[#fef4f2]">
      <div className="container pt-10 pb-20 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-40 lg:pb-40 md:pb-40">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] !mb-5 items-center">
          <div
            className="md:w-10/12 md:!ml-[8.33333333%] lg:!ml-0 lg:w-5/12 xl:!ml-0 xl:w-5/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full text-center lg:text-left xl:text-left order-2 lg:!order-none xl:!order-none"
            data-cues="slideInDown"
            data-group="page-title"
            data-delay={600}
          >
            <h1 className="xl:!text-[2.4rem] !text-[calc(1.375rem_+_1.5vw)] font-bold !leading-[1.2] !mb-5 md:mx-[-1.25rem] lg:mx-0 xl:mx-0">
              Creative. Smart. Awesome.
            </h1>
            <p className="lead !text-[1.05rem] !leading-[1.6] font-medium !mb-7">
              We specialize in web, mobile and identity design. We love to turn
              ideas into beautiful things.
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
                  className="btn btn-orange !text-white !bg-[#f78b77] border-[#f78b77] hover:text-white hover:bg-[#f78b77] hover:!border-[#f78b77] active:text-white active:bg-[#f78b77] active:border-[#f78b77] disabled:text-white disabled:bg-[#f78b77] disabled:border-[#f78b77] rounded !mr-2"
                >
                  See Projects
                </Link>
              </span>
              <span>
                <Link
                  to={`/blog`}
                  className="btn btn-yellow !text-white !bg-[#fab758] border-[#fab758] hover:text-white hover:bg-[#fab758] hover:!border-[#fab758] active:text-white active:bg-[#fab758] active:border-[#fab758] disabled:text-white disabled:bg-[#fab758] disabled:border-[#fab758] rounded"
                >
                  Learn More
                </Link>
              </span>
            </div>
          </div>
          {/* /column */}
          <div
            className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full"
            data-cue="slideInDown"
          >
            <figure className="m-0 p-0">
              <img
                className="w-auto"
                srcSet="/assets/img/illustrations/i6@2x.png 2x"
                alt="image"
                src="/assets/img/illustrations/i6.png"
                width={800}
                height={499}
              />
            </figure>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
