import { Link } from "react-router-dom";
import React from "react";

export default function Hero() {
  return (
    <section style={{ backgroundImage: "url(/assets/img/photos/bg16.png)" }}>
      <div className="container pt-28 pb-36 xl:pt-32 lg:pt-32 md:pt-32 xl:pb-28 lg:pb-28 md:pb-28 !text-center">
        <div className="flex flex-wrap mx-[-15px]">
          <div
            className="lg:w-8/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto"
            data-cues="slideInDown"
            data-group="page-title"
          >
            <h1 className="xl:!text-[3rem] !text-[calc(1.425rem_+_2.1vw)] font-semibold !leading-[1.15] !text-white !mb-4 md:!px-20 lg:!px-0 xl:!px-0">
              We bring solutions to make life{" "}
              <span className="!relative z-[2] after:content-[''] after:absolute after:z-[-1] after:block after:bg-no-repeat after:bg-bottom after:bottom-0 after:w-[110%] after:h-[0.3em] after:-translate-x-2/4 after:left-2/4 style-2 yellow">
                easier
              </span>
            </h1>
            <p className="lead !text-[1.2rem] !text-white !leading-[1.5] font-medium !mb-7 md:mx-[4rem] lg:mx-[2.5rem] xl:mx-[2.5rem]">
              We are a creative company that focuses on long term relationships
              with customers.
            </p>
            <div>
              <Link
                to={`/blog`}
                className="btn btn-white rounded !mb-10 xxl:!mb-5"
              >
                Read More
              </Link>
            </div>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
      <div className="overflow-hidden">
        <div className="divider !text-[#fefefe] mx-[-0.5rem]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
            <path fill="currentColor" d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
