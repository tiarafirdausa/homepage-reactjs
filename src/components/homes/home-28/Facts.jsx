import Counter from "@/components/common/Counter";
import React from "react";

export default function Facts() {
  return (
    <section className="wrapper bg-gradient-blend">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-14 xl:pb-32 lg:pb-32 md:pb-32">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] xl:!mt-0 lg:!mt-0">
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full text-center lg:text-left xl:text-left xl:!px-[35px] lg:!px-[20px] !mt-[50px] xl:!mt-0 lg:!mt-0">
            <h3 className="xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] font-semibold !leading-[1.2] !mb-3 xxl:!pr-20">
              I am <em>proud</em> of my results
            </h3>
            <p className="lead !text-[1.05rem] !leading-[1.55] !font-normal !mb-0 xxl:!pr-10">
              I bring solutions to make life easier for our customers.
            </p>
          </div>
          {/* /column */}
          <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] !mt-[50px] xl:!mt-2 lg:!mt-2">
            <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-30px] !text-center">
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256.1 256.01"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/target.svg"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-purple-aqua !mb-3 m-[0_auto]"
                >
                  <path
                    className="fill-secondary"
                    d="M178.66 79.37L166.93 91.1a76.68 76.68 0 014.91 11.52 85.77 85.77 0 0114.93-1.28h1.39a93.65 93.65 0 00-9.5-21.97zM0 128a96.1 96.1 0 00109.65 95 82.93 82.93 0 01-5.65-15.42 67 67 0 01-8 .43A80 80 0 0196 48a79 79 0 0137 9.17l11.73-11.73A94.73 94.73 0 0096 32a96.14 96.14 0 00-96 96z"
                  />
                  <path
                    className="fill-secondary"
                    d="M37.33 128A58.78 58.78 0 0096 186.68a47.26 47.26 0 005.44-.32A82.71 82.71 0 01103 170a37.32 37.32 0 01-7 .64 42.67 42.67 0 010-85.34 32.88 32.88 0 018 .84l12.91-12.91a57 57 0 00-20.91-4A58.81 58.81 0 0037.33 128z"
                  />
                  <path
                    className="fill-secondary"
                    d="M96 106.68A21.33 21.33 0 10117.33 128 21.39 21.39 0 0096 106.68zm0 26.66a5.33 5.33 0 115.33-5.33 5.28 5.28 0 01-5.33 5.33z"
                  />
                  <path
                    className="fill-primary"
                    d="M96.1 136a8 8 0 01-5.67-13.65L159.76 53a8 8 0 0111.31 11.31l-69.33 69.33A8 8 0 0196.1 136z"
                  />
                  <path
                    className="fill-primary"
                    d="M194.77 64H168.1a8 8 0 01-8-8V29.34a8.08 8.08 0 012.33-5.67l21.33-21.33A8 8 0 01197.42 8v18.68h18.68a8 8 0 015.66 13.66l-21.33 21.33a8 8 0 01-5.66 2.33zm-8 53.34a69.34 69.34 0 1069.33 69.34 69.4 69.4 0 00-69.33-69.34zm29.87 56.11L182 210.78a8 8 0 01-11.09.64l-18.67-16a8 8 0 1110.41-12.15l12.84 11 29.44-31.69a8 8 0 0111.74 10.88z"
                  />
                </svg>
                <h3 className="counter xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2">
                  <Counter max={1000} />+
                </h3>
                <p className="!mb-0">Completed Projects</p>
              </div>
              {/*/column */}
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 152.88 256"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/medal.svg"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-purple-aqua !mb-3 m-[0_auto]"
                >
                  <path
                    className="fill-primary"
                    d="M132.91 110.53l19-73.84A29.28 29.28 0 00123.6 0h-15.15v96.61a89.88 89.88 0 0124.46 13.92zM76.45 90.67a90.68 90.68 0 0116 1.51V0h-32v92.16a90.68 90.68 0 0116-1.49zM20 110.5a90.15 90.15 0 0124.45-13.89V0H29.3A29.25 29.25 0 001 36.66z"
                  />
                  <path
                    className="fill-secondary"
                    d="M76.45 106.67a74.67 74.67 0 1074.67 74.66 74.75 74.75 0 00-74.67-74.66zm0 112a37.34 37.34 0 1137.33-37.34 37.38 37.38 0 01-37.33 37.34z"
                  />
                </svg>
                <h3 className="counter xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2">
                  <Counter max={12} />
                </h3>
                <p className="!mb-0">Awards Won</p>
              </div>
              {/*/column */}
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/employees.svg"
                  className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-purple-aqua !mb-3 m-[0_auto]"
                >
                  <path
                    className="fill-secondary"
                    d="M72.11 86.51l-3.52-21 1.41-1.4-4.36-4.48a24.12 24.12 0 01-5.78-24.43c.11-.32.2-.53.32-.85l-1.4-.21-9-18.88a8 8 0 00-14.49 0l-8.88 19-19.69 3.07a8 8 0 00-6.29 5.44 7.94 7.94 0 001.92 8.11l14.51 14.83-3.42 21A8.07 8.07 0 0021.33 96a8.33 8.33 0 004-1l17.49-9.81 17.6 9.6a8.2 8.2 0 008.53-.43 8 8 0 003.21-7.89zm183.46-44.06a7.85 7.85 0 00-6.4-5.33l-19.73-3-9-18.88a8 8 0 00-14.5 0l-8.86 19-1.17.21c0 .11.11.21.11.32a23.76 23.76 0 01-5.44 24.32L185.81 64l1.71 1.71-3.41 21A8.07 8.07 0 00192 96a8.33 8.33 0 004-1l17.49-9.81 17.6 9.6a8.2 8.2 0 008.53-.43 8.06 8.06 0 003.2-7.89l-3.52-21 14.51-14.92a8.09 8.09 0 001.81-8.13z"
                  />
                  <path
                    className="fill-primary"
                    d="M100.18 106.67a8 8 0 01-7.91-9.25l4.61-28.8L77 48.37a8 8 0 014.46-13.51l27.09-4.22 12.11-26a8 8 0 017.2-4.64 8 8 0 017.23 4.58l12.29 25.9 27.12 4.05A8 8 0 01179.09 48l-19.78 20.38 4.8 28.77a8 8 0 01-11.74 8.34l-24.19-13.25-24.12 13.42a7.94 7.94 0 01-3.88 1z"
                  />
                  <circle
                    className="fill-secondary"
                    cx="42.67"
                    cy={160}
                    r="21.33"
                  />
                  <path
                    className="fill-secondary"
                    d="M71.15 196.27A44.71 44.71 0 0053.34 232v2.67H8a8.06 8.06 0 01-8-8v-5.33A29.32 29.32 0 0129.33 192H56a29.13 29.13 0 0115.15 4.27z"
                  />
                  <circle
                    className="fill-secondary"
                    cx="213.33"
                    cy={160}
                    r="21.33"
                  />
                  <path
                    className="fill-secondary"
                    d="M256 221.33v5.33a8.07 8.07 0 01-8 8h-45.33V232a44.69 44.69 0 00-17.81-35.73A29.07 29.07 0 01200 192h26.67A29.32 29.32 0 01256 221.33z"
                  />
                  <circle
                    className="fill-primary"
                    cx={128}
                    cy="154.67"
                    r={32}
                  />
                  <path
                    className="fill-primary"
                    d="M157.33 202.67H98.66A29.35 29.35 0 0069.33 232v16a8 8 0 008 8h101.33a8 8 0 008-8v-16a29.35 29.35 0 00-29.33-29.33z"
                  />
                </svg>
                <h3 className="counter xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2">
                  <Counter max={99} />
                  .7%
                </h3>
                <p className="!mb-0">Customer Satisfaction</p>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
      <div className="overflow-hidden">
        <div className="divider !text-[#fefefe] mx-[-0.5rem]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 92.26">
            <path
              fill="currentColor"
              d="M1206,21.2c-60-5-119-36.92-291-5C772,51.11,768,48.42,708,43.13c-60-5.68-108-29.92-168-30.22-60,.3-147,27.93-207,28.23-60-.3-122-25.94-182-36.91S30,5.93,0,16.2V92.26H1440v-87l-30,5.29C1348.94,22.29,1266,26.19,1206,21.2Z"
            />
          </svg>
        </div>
      </div>
      {/* /.overflow-hidden */}
    </section>
  );
}
