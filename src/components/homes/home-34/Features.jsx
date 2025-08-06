import React from "react";

export default function Features() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pb-12 xl:pb-[4.5rem] lg:pb-[4.5rem] md:pb-[4.5rem]">
        <div className="flex flex-wrap mx-[-15px] lg:mx-[-20px] xl:mx-0 !mt-[-50px] items-center !mb-[4.5rem] xl:!mb-[6rem] lg:!mb-[6rem] md:!mb-[6rem]">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !relative lg:!px-[20px] xl:px-0 !mt-[50px]">
            <div
              className="shape !rounded-[.4rem] !bg-[#f2f3fb] rellax !block !absolute"
              data-rellax-speed={0}
              style={{
                top: "50%",
                left: "50%",
                width: "50%",
                height: "60%",
                transform: "translate(-50%, -50%)",
                zIndex: 0,
              }}
            />
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px] !relative">
              <div className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]">
                <img
                  className="max-w-full h-auto !rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5"
                  data-cue="fadeIn"
                  data-delay={300}
                  srcSet="/assets/img/demos/fe1@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/demos/fe1.jpg"
                  width={300}
                  height={174}
                />
                <img
                  className="max-w-full h-auto !rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto] !ml-auto"
                  data-cue="fadeIn"
                  data-delay={600}
                  srcSet="/assets/img/demos/fe2@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/demos/fe2.jpg"
                  width={258}
                  height={265}
                />
              </div>
              {/* /column */}
              <div className="w-6/12 flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]">
                <img
                  className="max-w-full h-auto !rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] my-5"
                  data-cue="fadeIn"
                  data-delay={900}
                  srcSet="/assets/img/demos/fe3@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/demos/fe3.jpg"
                  width={300}
                  height={181}
                />
                <img
                  className="max-w-full h-auto !rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto]"
                  data-cue="fadeIn"
                  data-delay={1200}
                  srcSet="/assets/img/demos/fe4@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/demos/fe4.jpg"
                  width={258}
                  height={265}
                />
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/*/column */}
          <div
            className="lg:w-6/12 xl:w-5/12 xxl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!px-[20px] xl:px-0 !mt-[50px]"
            data-cues="slideInRight"
            data-delay={1500}
            data-group="features-1"
          >
            <div className="flex flex-row !mb-7">
              <div>
                <div className="icon btn btn-circle pointer-events-none btn-soft-purple !mt-1 !mr-4 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]">
                  <i className="uil uil-images before:content-['\eb95']" />
                </div>
              </div>
              <div>
                <h4 className="!mb-1">Modern Portfolio Layouts</h4>
                <p className="!mb-0">
                  Build and manage an eye-catching and impressive portfolio fast
                  and without effort.
                </p>
              </div>
            </div>
            <div className="flex flex-row !mb-7">
              <div>
                <div className="icon btn btn-circle pointer-events-none btn-soft-purple !mt-1 !mr-4 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]">
                  <i className="uil uil-calendar-alt before:content-['\e9ba']" />
                </div>
              </div>
              <div>
                <h4 className="!mb-1">Useful Blog Layouts</h4>
                <p className="!mb-0">
                  Create an attractive and stunning journal to tell the world
                  your wonderful stories.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <div className="icon btn btn-circle pointer-events-none btn-soft-purple !mt-1 !mr-4 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]">
                  <i className="uil uil-star before:content-['\eceb']" />
                </div>
              </div>
              <div>
                <h4 className="!mb-1">Cool Features &amp; Elements</h4>
                <p className="!mb-0">
                  Sandbox includes amazing features and elements to create rich
                  and attractive pages.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] lg:mx-[-20px] xl:mx-0 !mt-[-50px] items-center !mb-24 xl:!mb-60 lg:!mb-60 md:!mb-60">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[8.33333333%] !relative xl:!order-2 lg:!order-2 lg:!px-[20px] xl:px-0 !mt-[50px]">
            <div
              className="shape !rounded-[.4rem] !bg-[#f2f3fb] rellax !block !absolute"
              data-rellax-speed={0}
              style={{
                top: "50%",
                left: "50%",
                width: "50%",
                height: "60%",
                transform: "translate(-50%, -50%)",
                zIndex: 0,
              }}
            />
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px] !relative">
              <div className="w-5/12 flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]">
                <img
                  className="max-w-full h-auto !rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] my-5 flex !ml-auto"
                  data-cue="fadeIn"
                  data-delay={300}
                  srcSet="/assets/img/demos/fe5@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/demos/fe5.jpg"
                  width={250}
                  height={177}
                />
                <img
                  className="max-w-full h-auto !rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto] !ml-auto"
                  data-cue="fadeIn"
                  data-delay={600}
                  srcSet="/assets/img/demos/fe6@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/demos/fe6.jpg"
                  width={212}
                  height={235}
                />
              </div>
              {/* /column */}
              <div className="w-7/12 flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]">
                <img
                  className="max-w-full h-auto !rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-5"
                  data-cue="fadeIn"
                  data-delay={900}
                  srcSet="/assets/img/demos/fe7@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/demos/fe7.jpg"
                  width={350}
                  height={163}
                />
                <img
                  className="max-w-full h-auto !rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex w-11/12 flex-[0_0_auto]"
                  data-cue="fadeIn"
                  data-delay={1200}
                  srcSet="/assets/img/demos/fe8@2x.jpg 2x"
                  alt="image"
                  src="/assets/img/demos/fe8.jpg"
                  width={335}
                  height={225}
                />
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/*/column */}
          <div
            className="lg:w-6/12 xl:w-5/12 xxl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xxl:!ml-[8.33333333%] lg:!px-[20px] xl:px-0 !mt-[50px]"
            data-cues="slideInLeft"
            data-delay={1500}
            data-group="features-2"
          >
            <div className="flex flex-row !mb-7">
              <div>
                <div className="icon btn btn-circle pointer-events-none btn-soft-purple !mt-1 !mr-4 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]">
                  <i className="uil uil-web-grid-alt before:content-['\ed94']" />
                </div>
              </div>
              <div>
                <h4 className="!mb-1">13 Headers &amp; 5 Footers</h4>
                <p className="!mb-0">
                  Choose from various gorgeous header and footer styles to serve
                  you best for your needs.
                </p>
              </div>
            </div>
            <div className="flex flex-row !mb-7">
              <div>
                <div className="icon btn btn-circle pointer-events-none btn-soft-purple !mt-1 !mr-4 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]">
                  <i className="uil uil-palette before:content-['\ec3a']" />
                </div>
              </div>
              <div>
                <h4 className="!mb-1">Color &amp; Font Options</h4>
                <p className="!mb-0">
                  You can either use the included color and fonts or easily add
                  your own choices.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <div className="icon btn btn-circle pointer-events-none btn-soft-purple !mt-1 !mr-4 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]">
                  <i className="uil uil-tablet before:content-['\ed0d']" />
                </div>
              </div>
              <div>
                <h4 className="!mb-1">Fully Responsive Layout</h4>
                <p className="!mb-0">
                  Sandbox adapts to different screen sizes therefore it is
                  compatible with any device.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
      <div className="overflow-hidden">
        <div className="divider !text-[#f2f3fb] mx-[-0.5rem]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path
              fill="currentColor"
              d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
            />
          </svg>
        </div>
      </div>
      {/* /.overflow-hidden */}
    </section>
  );
}
