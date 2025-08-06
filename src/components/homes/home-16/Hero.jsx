import React from "react";

import Counter from "@/components/common/Counter";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="wrapper bg-[rgba(246,247,249,1)]">
      <div className="container pt-14 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24">
        <div className="flex flex-wrap mx-[-15px] !mt-[-50px] xl:!mt-0 lg:!mt-0 items-center">
          <div
            className="md:w-8/12 lg:w-5/12 xl:w-5/12 w-full flex-[0_0_auto] !px-[15px] !mt-[50px] xl:!mt-0 lg:!mt-0 max-w-full flex !relative !mx-auto"
            data-cues="slideInDown"
            data-group="header"
          >
            <div className="img-mask mask-1">
              <img
                srcSet="/assets/img/photos/about17@2x.jpg 2x"
                alt="image"
                src="/assets/img/photos/about17.jpg"
                width={560}
                height={540}
              />
            </div>
            <div
              className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !absolute"
              style={{ bottom: "10%", right: "2%" }}
            >
              <div className="card-body py-4 px-5">
                <div className="flex flex-row items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 409.6 409.6"
                      data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/check.svg"
                      className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] !text-[#d16b86] text-pink !mx-auto !mr-3"
                    >
                      <path
                        className="lineal-stroke"
                        d="M204.8 409.6C91.9 409.6 0 317.7 0 204.8c0-49.9 18.2-98.1 51.2-135.5 4.4-5 12-5.5 17-1.1s5.5 12 1.1 17c-29.1 33-45.2 75.5-45.2 119.5 0 99.6 81.1 180.7 180.7 180.7s180.7-81.1 180.7-180.7S304.4 24.1 204.8 24.1c-27.3-.1-54.2 6.1-78.7 18-6 2.9-13.2.4-16.1-5.6-2.9-6-.4-13.2 5.6-16.1C143.4 6.9 173.9-.1 204.8 0c112.9 0 204.8 91.9 204.8 204.8s-91.9 204.8-204.8 204.8z"
                      />
                      <path
                        className="lineal-fill"
                        d="M349.4 204.8c0 79.8-64.7 144.6-144.6 144.6S60.2 284.6 60.2 204.8 125 60.2 204.8 60.2 349.4 125 349.4 204.8z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M204.8 361.4c-86.4 0-156.6-70.2-156.6-156.6S118.4 48.2 204.8 48.2s156.6 70.2 156.6 156.6-70.2 156.6-156.6 156.6zm0-289.1c-73.1 0-132.5 59.4-132.5 132.5s59.4 132.5 132.5 132.5 132.5-59.5 132.5-132.5S277.9 72.3 204.8 72.3z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M200.9 246.7c-8.8 0-17.2-3.5-23.5-9.7L145 204.5c-4.7-4.7-4.7-12.3 0-17s12.3-4.7 17 0l32.5 32.5c3.6 3.5 9.3 3.5 12.8 0l49.8-49.9c4.7-4.7 12.3-4.7 17 0s4.7 12.3 0 17L224.4 237c-6.2 6.2-14.7 9.7-23.5 9.7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="counter !mb-0 whitespace-nowrap">
                      <Counter max={250} />+
                    </h3>
                    <p className="!text-[0.7rem] leading-normal !mb-0 whitespace-nowrap">
                      Projects Done
                    </p>
                  </div>
                </div>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </div>
          {/*/column */}
          <div
            className="lg:w-6/12 lg:!ml-[8.33333333%] xl:w-6/12 xl:!ml-[8.33333333%] xxl:w-5/12 flex-[0_0_auto] !px-[15px] !mt-[50px] xl:!mt-0 lg:!mt-0 max-w-full text-center lg:text-left xl:text-left"
            data-cues="slideInDown"
            data-group="page-title"
            data-delay={600}
          >
            <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-5">
              I'm User Interface Designer &amp; Developer.
            </h1>
            <p className="lead text-[1.25rem] !leading-[1.5] !mb-7 md:!px-10 lg:!px-0">
              Hello! I'm Julia, a freelance user interface designer &amp;
              developer based in London. I’m very passionate about the work that
              I do.
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
                  className="btn btn-lg btn-pink !text-white !bg-[#d16b86] border-[#d16b86] hover:text-white hover:bg-[#d16b86] hover:!border-[#d16b86] active:text-white active:bg-[#d16b86] active:border-[#d16b86] disabled:text-white disabled:bg-[#d16b86] disabled:border-[#d16b86] !rounded-[50rem] !mr-2"
                >
                  See My Works
                </Link>
              </span>
              <span>
                <Link
                  to={`/contact`}
                  className="btn btn-lg btn-outline-pink !rounded-[50rem] !text-[#d16b86] !border-[#d16b86] hover:!bg-[#d16b86] hover:!text-white"
                >
                  Contact Me
                </Link>
              </span>
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
