import React from "react";

import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="wrapper">
      <div className="container pt-12 xl:pt-16 lg:pt-16 md:pt-16 pb-36 xl:pb-28 lg:pb-28 md:pb-28 !text-center">
        <div className="flex flex-wrap mx-[-15px]">
          <div
            className="lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto"
            data-cues="slideInDown"
            data-group="page-title"
            data-delay={500}
          >
            <h1 className="xl:!text-[3.2rem] !text-[calc(1.445rem_+_2.34vw)] font-bold !leading-[1.15] !tracking-[-0.03em] !mb-4 md:!px-8 lg:!px-0">
              We bring rapid solutions for your{" "}
              <span className="!relative z-[1] style-1 primary before:content-[''] before:z-[-1] before:absolute before:opacity-100 before:block before:-translate-x-2/4 before:-translate-y-2/4 before:-rotate-1 before:w-[111%] before:h-[110%] before:rounded-[80%] before:border-t-0 before:border-[3px] before:border-solid before:border-[#3f78e0] before:left-2/4 before:!top-[52%] after:content-[''] after:z-[-1] after:absolute after:opacity-100 after:block after:[background-size:100%_100%] after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:-translate-x-2/4 after:-translate-y-2/4 after:-rotate-2 after:w-[107%] after:h-[111%] after:rounded-[80%] after:border-l-0 after:border-b-0 after:border-[3px] after:border-solid after:border-[#3f78e0] after:left-2/4 after:top-[52%] max-xl:before:!hidden max-xl:after:!hidden max-lg:before:!hidden max-lg:after:!hidden max-md:before:!hidden max-md:after:!hidden max-sm:before:!hidden max-sm:after:!hidden">
                <em>business</em>
              </span>
            </h1>
            <p className="lead !text-[1.2rem] !leading-[1.5] !mb-7">
              We are creative company that values quality and focuses on
              establishing long-term relationships with customers.
            </p>
            <div>
              <Link
                to={`/projects`}
                className="btn btn-lg btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded !mb-10 xxl:!mb-5"
              >
                See Projects
              </Link>
            </div>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px]">
          <div className="lg:w-10/12 xl:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mt-[3rem] !mb-[-12.5rem] relative z-[3]">
            <figure className="m-0 p-0">
              <img
                className="max-w-full h-auto"
                srcSet="/assets/img/illustrations/i28@2x.png 2x"
                alt="image"
                src="/assets/img/illustrations/i28.png"
                width={960}
                height={630}
              />
            </figure>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
      <div className="overflow-hidden">
        <div className="divider !text-[#f2f3fb] mx-[-0.5rem]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70">
            <path
              fill="currentColor"
              d="M1440,70H0V45.16a5762.49,5762.49,0,0,1,1440,0Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
