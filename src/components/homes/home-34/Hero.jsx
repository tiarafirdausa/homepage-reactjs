import React from "react";

import TypeWriter from "@/components/common/TypeWriter";
export default function Hero() {
  return (
    <section className="wrapper bg-gradient-purple max-w-screen overflow-clip">
      <div className="container pt-10 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem]">
        <div className="flex flex-wrap mx-[-5px] !mt-[-50px] items-center">
          <div
            className="md:w-10/12 md:!ml-[8.33333333%] lg:!ml-0 lg:w-5/12 xl:!ml-0 xl:w-5/12 w-full flex-[0_0_auto] max-w-full text-center lg:text-left xl:text-left order-2 lg:!order-none xl:!order-none px-[5px] !mt-[50px]"
            data-cues="slideInDown"
            data-group="page-title"
            data-delay={600}
          >
            <h1 className="!text-[calc(1.375rem_+_1.5vw)] font-bold !leading-[1.15] xl:!text-[2.5rem] !mb-5 md:mx-10 lg:mx-0">
              Create a powerful but effortless website for <br />
              <span
                className="typer !text-[#747ed1] whitespace-nowrap"
                data-delay={100}
              >
                <TypeWriter
                  strings={[
                    "your business.",
                    "your portfolio.",
                    "your startup.",
                    "digital marketing.",
                  ]}
                />
              </span>
              <span className="cursor !text-[#747ed1]" data-owner="typer" />
            </h1>
            <p className="lead !text-[1.15rem] !leading-[1.6] !font-medium !mb-7">
              Build your website in minutes with the help of amazing features of
              Sandbox React.js
            </p>
            <div
              className="flex justify-center xl:!justify-start lg:!justify-start !mb-4"
              data-cues="slideInDown"
              data-group="page-title-buttons"
              data-delay={900}
            >
              <span>
                <a
                  className="btn btn-lg btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] !mr-2 scroll"
                  href="#demos"
                >
                  Check Demos
                </a>
              </span>
            </div>
          </div>
          {/* /column */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full !ml-auto !relative px-[5px] !mt-[50px]">
            <div className="flex flex-wrap mx-[-10px] !mt-[-20px]">
              <div
                className="w-4/12 flex-[0_0_auto] px-[10px] max-w-full flex flex-col !ml-auto"
                data-cues="fadeIn"
                data-group="col-start"
                data-delay={900}
              >
                <div className="ml-auto !mt-6">
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    srcSet="/assets/img/demos/vc1@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/demos/vc1.jpg"
                    width={160}
                    height={100}
                  />
                </div>
                <div className="ml-auto !mt-4">
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    srcSet="/assets/img/demos/vc2@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/demos/vc2.jpg"
                    width={180}
                    height={220}
                  />
                </div>
                <div className="ml-auto !mt-4">
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    srcSet="/assets/img/demos/vc3@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/demos/vc3.jpg"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
              {/* /column */}
              <div
                className="w-4/12 flex-[0_0_auto] px-[10px] max-w-full"
                data-cues="fadeIn"
                data-group="col-middle"
              >
                <div>
                  <img
                    className="w-full max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    srcSet="/assets/img/demos/vc4@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/demos/vc4.jpg"
                    width={200}
                    height={150}
                  />
                </div>
                <div>
                  <img
                    className="w-full max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mt-4"
                    srcSet="/assets/img/demos/vc5@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/demos/vc5.jpg"
                    width={200}
                    height={180}
                  />
                </div>
                <div>
                  <img
                    className="w-full max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mt-4"
                    srcSet="/assets/img/demos/vc6@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/demos/vc6.jpg"
                    width={200}
                    height={150}
                  />
                </div>
              </div>
              {/* /column */}
              <div
                className="w-4/12 flex-[0_0_auto] px-[10px] max-w-full flex flex-col"
                data-cues="fadeIn"
                data-group="col-end"
                data-delay={900}
              >
                <div className="!mt-8">
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    srcSet="/assets/img/demos/vc7@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/demos/vc7.jpg"
                    width={180}
                    height={230}
                  />
                </div>
                <div className="!mt-4 !mb-10">
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    srcSet="/assets/img/demos/vc8@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/demos/vc8.jpg"
                    width={200}
                    height={190}
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
