import React from "react";

import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="wrapper bg-gradient-purple">
      <div className="container py-[4.5rem] xl:pt-20 lg:pt-20 md:pt-20 xl:pb-32 lg:pb-32 md:pb-32">
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div
            className="xl:w-9/12 lg:w-9/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto"
            data-cues="zoomIn"
            data-group="welcome"
            data-interval={-200}
          >
            <h2 className="xl:!text-[2.5rem] !text-[calc(1.375rem_+_1.5vw)] !leading-[1.15] font-bold !mb-4">
              Creative. Smart. Awesome.
            </h2>
            <p className="lead !text-[1.2rem] leading-normal md:!px-5 xl:!px-20 xxl:!px-10 !mb-7">
              We are an award winning web &amp; mobile design agency that
              strongly believes in the power of creative ideas.
            </p>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div
          className="flex justify-center"
          data-cues="slideInDown"
          data-group="join"
          data-delay={900}
        >
          <span>
            <Link
              to={`/projects`}
              className="btn btn-lg btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] mx-1"
            >
              See Projects
            </Link>
          </span>
          <span>
            <Link
              to={`/contact`}
              className="btn btn-lg btn-outline-purple bg-[#747ed1]   hover:!border-[#747ed1] focus:shadow-[rgba(116,126,209,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:!text-[#747ed1] disabled:bg-transparent disabled:border-[#747ed1] !rounded-[50rem] !text-[#747ed1] !border-[#747ed1] hover:!bg-[#747ed1] hover:!text-white mx-1"
            >
              Contact Us
            </Link>
          </span>
        </div>
        {/* /div */}
        <div
          className="flex flex-wrap mx-[-15px] !mt-[3.5rem]"
          data-cue="fadeIn"
          data-delay={1600}
        >
          <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <figure className="m-0 p-0">
              <img
                className="max-w-full h-auto"
                srcSet="/assets/img/illustrations/i12@2x.png 2x"
                alt="image"
                src="/assets/img/illustrations/i12.png"
                width={800}
                height={573}
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
