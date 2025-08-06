import Counter from "@/components/common/Counter";
import { facts } from "@/data/facts";

import React from "react";

export default function About2() {
  return (
    <section id="snippet-2" className="wrapper !bg-[#ffffff]">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-70px] items-center">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[70px] !relative">
            <div
              className="btn btn-circle btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] pointer-events-none !absolute counter-wrapper  flex-col max-md:!hidden xl:!flex lg:!flex md:!flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%] z-10"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 170,
                height: 170,
              }}
            >
              <h3 className="!text-white !mb-1 !mt-[-0.5rem] relative z-[3]">
                <span className="counter counter-lg !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] leading-none !mb-2 xl:!text-[2.2rem] ">
                  <Counter max={20} />+
                </span>
              </h3>
              <p className="!text-[0.8rem] font-medium !mb-0">
                Year Experience
              </p>
            </div>
            <div className="flex flex-wrap mx-[-12.5px] !mt-[-25px] items-center">
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] max-w-full !mt-[25px]">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                  <div className="xl:w-10/12 xl:!ml-[16.66666667%] lg:w-10/12 lg:!ml-[16.66666667%] md:w-10/12 md:!ml-[16.66666667%] w-full flex-[0_0_auto] px-[12.5px] max-w-full !mt-[25px]">
                    <figure className="rounded-[0.4rem]">
                      <img
                        className="rounded-[0.4rem]"
                        srcSet="/assets/img/photos/ab1@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/ab1.jpg"
                        width="240"
                        height="245"
                      />
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="w-full flex-[0_0_auto] px-[12.5px] max-w-full !mt-[25px]">
                    <figure className="rounded-[0.4rem]">
                      <img
                        className="rounded-[0.4rem]"
                        srcSet="/assets/img/photos/ab2@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/ab2.jpg"
                        width="290"
                        height="225"
                      />
                    </figure>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] max-w-full !mt-[25px]">
                <figure className="rounded-[0.4rem]">
                  <img
                    className="rounded-[0.4rem]"
                    srcSet="/assets/img/photos/ab3@2x.jpg 2x"
                    alt="image"
                    src="/assets/img/photos/ab3.jpg"
                    width="290"
                    height="440"
                  />
                </figure>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[70px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 390.3"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/handshake.svg"
              className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] !mb-4"
            >
              <path
                className="lineal-stroke"
                d="M508.4 133.5L378.5 3.7c-4.9-4.9-12.8-4.9-17.6 0l-73.1 73.1-14.4-14.4c-4.9-4.9-12.8-4.9-17.6 0l-22.9 22.9-81.8-81.6c-4.9-4.9-12.8-4.9-17.6 0L3.7 133.5c-4.9 4.9-4.9 12.8 0 17.6L85.6 233c4.9 4.9 12.8 4.9 17.6 0l52.1-52.1 26.5 26.5c.3.3.6.6 1 .9 5 4 12.2 3.7 16.7-.9L256 151l120.7 120.6-13 13-103.6-103.4c-4.9-4.9-12.8-4.9-17.6 0-.3.3-.6.6-.9 1-4 5-3.7 12.2.9 16.7l123.8 123.8-13 13-123.8-123.9c-5-4.7-12.9-4.6-17.6.4-4.6 4.8-4.6 12.4 0 17.2L315.3 333l-13 13-7.7-7.7-95.9-95.8c-4.5-4.5-11.7-4.9-16.7-.9-.4.3-.7.5-1 .9-1.2 1.2-2.1 2.6-2.7 4.1-.3.7-.5 1.5-.7 2.3-.1.4-.1.8-.2 1.2-.4 3.7 1 7.4 3.6 10l43.5 43.5 43.5 43.5-13 13-115-115c-4.9-4.9-12.8-4.9-17.6 0-4.9 4.9-4.9 12.8 0 17.6l123.8 123.9c4.9 4.9 12.8 4.9 17.6 0l21.9-21.9 7.7 7.7c4.8 4.9 12.7 4.9 17.6 0l21.9-21.9 11.5 11.5c4.9 4.9 12.8 4.9 17.6 0l30.7-30.7c4.9-4.9 4.9-12.8 0-17.6l-11.5-11.5 21.9-21.9c4.9-4.9 4.9-12.8 0-17.6L264.8 124.5c-4.9-4.9-12.8-4.9-17.6 0l-56.6 56.6-9.2-9.2 83.1-83.1 14.4 14.4 3.1 3.2.4.4 126.3 126.3c4.9 4.9 12.8 4.9 17.6 0l81.9-81.9c5-4.9 5-12.8.2-17.7z"
              />
              <path
                className="lineal-fill"
                d="M30.106 142.324L142.323 30.107 206.6 94.382 94.382 206.6zm275.29-47.939l64.276-64.276 112.216 112.217-64.275 64.276z"
              />
            </svg>
            <h3 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-5">
              We are a creative company that focuses on establishing long-term
              relationships with customers.
            </h3>
            <p className="!mb-7">
              Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum
              nulla sed consectetur. Integer posuere erat a ante venenatis
              dapibus posuere velit aliquet. Vestibulum id ligula porta felis
              euismod semper. Vestibulum id ligula.
            </p>
            <div className="flex flex-wrap mx-[-15px] counter-wrapper !mt-[-30px]">
              {facts.slice(0, 3).map((elm, i) => (
                <div
                  key={i}
                  className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
                >
                  <h3 className="counter !text-[#3f78e0] xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2">
                    <Counter max={7518} />
                  </h3>
                  <p className="!text-[0.8rem] font-medium !mb-0">
                    {elm.description}
                  </p>
                </div>
              ))}

              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>

      {/* /.container */}
    </section>
  );
}
