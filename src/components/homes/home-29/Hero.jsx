import React from "react";

export default function Hero() {
  return (
    <section
      className="wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600 [background-size:100%] bg-[center_center] bg-no-repeat bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(255,255,255,.6)]"
      style={{ backgroundImage: "url(/assets/img/photos/bg23.png)" }}
    >
      <div className="container pt-24 xl:pt-32 lg:pt-32 md:pt-32 pb-9">
        <div className="flex flex-wrap mx-0 !mt-[-50px] items-center text-center lg:text-left xl:text-left">
          <div
            className="xl:w-6/12 lg:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] max-w-full !relative !mt-[50px]"
            data-cues="slideInDown"
            data-group="page-title"
            data-delay={700}
          >
            <img
              className="h-9 !absolute hidden xl:block lg:block"
              data-cue="fadeIn"
              data-delay={3000}
              style={{ top: "-9%", left: "-6%" }}
              alt="image"
              src="/assets/img/svg/doodle1.svg"
              width={74}
              height={72}
            />
            <img
              className="!h-[5rem] !absolute hidden xl:block lg:block"
              data-cue="fadeIn"
              data-delay={3000}
              style={{ bottom: "9%", right: "-22%" }}
              alt="image"
              src="/assets/img/svg/doodle2.svg"
              width={152}
              height={147}
            />
            <h1 className="xl:!text-[2.5rem] !text-[calc(1.375rem_+_1.5vw)] font-semibold !leading-[1.15] !mb-4">
              Manage all your bills, accounts and budgets in{" "}
              <span className="text-gradient gradient-7">one place.</span>
            </h1>
            <p className="lead !text-[1.2rem] !leading-[1.5] !font-normal !mb-7">
              Sandbox is available to download from both App Store and Google
              Play Store.
            </p>
            <div
              className="flex justify-center lg:!justify-start xl:!justify-start"
              data-cues="slideInDown"
              data-group="page-title-buttons"
              data-delay={1800}
            >
              <span className="inline-flex">
                <a href="#" className="!mr-2 inline-block">
                  <img
                    className="!h-[3rem] !rounded-[0.8rem]"
                    alt="image"
                    src="/assets/img/photos/button-appstore.svg"
                    width={123}
                    height={40}
                  />
                </a>
              </span>
              <span className="inline-flex">
                <a className="inline-block" href="#">
                  <img
                    className="!h-[3rem] !rounded-[0.8rem]"
                    alt="image"
                    src="/assets/img/photos/button-google-play.svg"
                    width={135}
                    height={40}
                  />
                </a>
              </span>
            </div>
          </div>
          {/* /column */}
          <div
            className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full !ml-auto !mb-[-10rem] xxl:!mb-[-15rem] !mt-[50px]"
            data-cues="slideInDown"
            data-delay={600}
          >
            <figure className="m-0 p-0">
              <img
                className="w-full max-w-full !h-auto"
                srcSet="/assets/img/photos/devices3@2x.png 2x"
                alt="image"
                src="/assets/img/photos/devices3.png"
                width={645}
                height={735}
              />
            </figure>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
      <div className="overflow-hidden" style={{ zIndex: 1 }}>
        <div className="divider !text-[#fefefe] mx-[-0.5rem]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <g fill="currentColor">
              <polygon points="1440 100 0 100 0 85 1440 0 1440 100" />
            </g>
          </svg>
        </div>
      </div>
      {/* /.overflow-hidden */}
    </section>
  );
}
