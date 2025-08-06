import React from "react";

import TypeWriter from "@/components/common/TypeWriter";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="wrapper !bg-[#edf2fc]">
      <div className="container pt-10 pb-14 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-28 lg:pb-28 md:pb-28">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
          <div
            className="md:w-10/12 md:!ml-[8.33333333%] lg:!ml-0 lg:w-5/12 xl:!ml-0 xl:w-5/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full lg:!mt-[-.5rem] xl:!mt-[-.5rem] text-center lg:text-left xl:text-left order-2 lg:!order-none xl:!order-none"
            data-cues="slideInDown"
            data-group="page-title"
            data-delay={600}
          >
            <h1 className="xl:!text-[2.6rem] !text-[calc(1.385rem_+_1.62vw)] !leading-[1.1] !font-DMSerif !font-normal !tracking-normal [word-spacing:normal!important] !mb-5 md:mx-10 lg:mx-0">
              Sandbox is effortless and powerful with <br />
              <span
                className="typer !text-[#3f78e0] whitespace-nowrap"
                data-delay={100}
              />
              <span className="cursor !text-[#3f78e0]" data-owner="typer">
                <TypeWriter
                  strings={[
                    "easy usage",
                    "fast transactions",
                    "secure payments",
                  ]}
                />
              </span>
            </h1>
            <p className="lead !text-[1.05rem] !leading-[1.6] font-medium !mb-7">
              Achieve your saving goals. Have all your recurring and one time
              expenses and incomes in one place.
            </p>
            <div
              className="flex justify-center lg:!justify-start xl:!justify-start"
              data-cues="slideInDown"
              data-group="page-title-buttons"
              data-delay={900}
            >
              <span>
                <Link
                  to={`/signup`}
                  className="btn btn-lg btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded !mr-2"
                >
                  Get Started
                </Link>
              </span>
              <span>
                <Link
                  to={`/signup`}
                  className="btn btn-lg btn-green !text-white !bg-[#45c4a0] border-[#45c4a0] hover:text-white hover:bg-[#45c4a0] hover:!border-[#45c4a0] active:text-white active:bg-[#45c4a0] active:border-[#45c4a0] disabled:text-white disabled:bg-[#45c4a0] disabled:border-[#45c4a0] rounded"
                >
                  Free Trial
                </Link>
              </span>
            </div>
          </div>
          {/* /column */}
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] max-w-full">
            <div className="flex flex-wrap mx-[-15px]">
              <div
                className="w-3/12 !ml-[8.33333333%] lg:!ml-0 lg:w-4/12 xl:!ml-0 xl:w-4/12 flex-[0_0_auto] !px-[15px] max-w-full flex flex-col"
                data-cues="zoomIn"
                data-group="col-start"
                data-delay={300}
              >
                <div className="ml-auto !mt-auto">
                  <img
                    className="!max-w-full h-auto rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    srcSet="/assets/img/photos/sa20@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/sa20.jpg"
                    width={125}
                    height={90}
                  />
                </div>
                <div className="ml-auto !mt-5 !mb-10">
                  <img
                    className="!max-w-full h-auto rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    srcSet="/assets/img/photos/sa18@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/sa18.jpg"
                    width={150}
                    height={166}
                  />
                </div>
              </div>
              {/* /column */}
              <div
                className="w-4/12 lg:w-5/12 xl:w-5/12 flex-[0_0_auto] !px-[15px] max-w-full"
                data-cue="zoomIn"
              >
                <div>
                  <img
                    className="w-full max-w-full h-auto rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    srcSet="/assets/img/photos/sa16@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/sa16.jpg"
                    width={285}
                    height={546}
                  />
                </div>
              </div>
              {/* /column */}
              <div
                className="w-3/12 flex-[0_0_auto] !px-[15px] max-w-full flex flex-col"
                data-cues="zoomIn"
                data-group="col-end"
                data-delay={300}
              >
                <div className="!mt-auto">
                  <img
                    className="!max-w-full h-auto rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    srcSet="/assets/img/photos/sa21@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/sa21.jpg"
                    width={125}
                    height={40}
                  />
                </div>
                <div className="!mt-5">
                  <img
                    className="!max-w-full h-auto rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    srcSet="/assets/img/photos/sa19@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/sa19.jpg"
                    width={150}
                    height={147}
                  />
                </div>
                <div className="!mt-5 !mb-10">
                  <img
                    className="!max-w-full h-auto rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    srcSet="/assets/img/photos/sa17@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/sa17.jpg"
                    width={175}
                    height={102}
                  />
                </div>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
