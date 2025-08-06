import { Link } from "react-router-dom";
import React from "react";

export default function Hero() {
  return (
    <section
      className="wrapper image-wrapper bg-cover bg-image bg-xs-none bg-[rgba(246,247,249,1)] bg-[center_center] bg-no-repeat bg-scroll relative z-0 max-sm:!bg-none md:min-h-[25rem] max-md:min-h-[20rem]"
      style={{ backgroundImage: "url(/assets/img/photos/bg37.jpg)" }}
    >
      <div className="container pt-28 pb-20 sm:!py-28 xxl:!py-40">
        <div className="flex flex-wrap mx-[-15px]">
          <div
            className="xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full max-sm:!text-center text-left"
            data-cues="slideInDown"
            data-group="page-title"
            data-interval={-200}
            data-delay={500}
          >
            <h2 className="xl:!text-[2.8rem] !text-[calc(1.405rem_+_1.86vw)] font-bold !leading-[1.2] !tracking-[-0.035em] !mb-4 !mt-0 xl:!mt-5 lg:!mt-5 xl:!pr-5 xxl:!pr-0">
              We bring solutions to make life{" "}
              <span className="underline-3 style-3 yellow !relative z-[1] after:content-[''] after:absolute after:z-[-1] after:block after:[background-size:100%_100%] after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2/4 after:left-2/4">
                easier
              </span>{" "}
            </h2>
            <p className="lead text-[1.15rem] !leading-[1.5] font-medium !mb-7 lg:!pr-5 xl:!pr-5 xxl:!pr-0">
              We are a creative company that focuses on long term relationships
              with customers.
            </p>
            <div>
              <Link
                to={`/blog`}
                className="btn btn-lg btn-navy !text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:!border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52] rounded"
              >
                Read More
              </Link>
            </div>
          </div>
          {/*/column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
