import { Link } from "react-router-dom";
import React from "react";

export default function Hero() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pt-12 xl:pt-16 lg:pt-16 md:pt-16 pb-12 xl:pb-[15rem] lg:pb-[15rem] md:pb-[9rem] !text-center">
        <div className="flex flex-wrap mx-[-15px]">
          <div
            className="lg:w-8/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto"
            data-cues="slideInDown"
            data-group="page-title"
          >
            <h1 className="xl:!text-[3rem] !text-[calc(1.425rem_+_2.1vw)] !leading-[1.15] font-bold !mb-4 md:!px-20 lg:!px-0">
              We bring solutions to make life{" "}
              <span className="!relative z-[1] after:content-[''] after:absolute after:z-[-1] after:block after:[background-size:100%_100%] after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2/4 after:left-2/4 underline-3 style-3 primary">
                easier
              </span>
            </h1>
            <p className="lead !text-[1.2rem] leading-normal !mb-[1.75rem] md:mx-[4rem] lg:mx-[2.5rem] xl:mx-[2.5rem]">
              We are a creative company that focuses on long term relationships
              with customers.
            </p>
            <div>
              <Link
                to={`/blog`}
                className="btn btn-lg btn-orange !text-white !bg-[#f78b77] border-[#f78b77] hover:text-white hover:bg-[#f78b77] hover:!border-[#f78b77] active:text-white active:bg-[#f78b77] active:border-[#f78b77] disabled:text-white disabled:bg-[#f78b77] disabled:border-[#f78b77] !text-[.85rem] rounded !mb-5"
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
    </section>
  );
}
