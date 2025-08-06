import React from "react";

export default function Cta() {
  return (
    <section
      className="wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600 [background-size:100%] bg-[center_center] bg-no-repeat bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(255,255,255,.6)]"
      style={{ backgroundImage: "url(/assets/img/photos/bg23.png)" }}
    >
      <div className="overflow-hidden" style={{ zIndex: 1 }}>
        <div className="divider divider-alt !text-[#fefefe] mx-[-0.5rem]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <g fill="currentColor">
              <polygon points="1440 100 0 15 0 0 1440 0 1440 100" />
            </g>
          </svg>
        </div>
      </div>
      {/* /.overflow-hidden */}
      <div className="container pt-10 xl:pt-10 lg:pt-10 md:pt-16 pb-8 xl:pb-10 lg:pb-10 md:pb-10 text-center xl:text-left lg:text-left">
        <div className="flex flex-wrap mx-0 !mt-[-50px]">
          <div className="md:w-10/12 md:!ml-[8.33333333%] lg:!ml-0 lg:w-6/12 xl:!ml-0 xl:w-5/12 w-full flex-[0_0_auto] max-w-full !relative !mt-[50px]">
            <img
              className="!h-[5rem] !absolute hidden xl:block lg:block"
              style={{ bottom: "36%", right: "-25%" }}
              alt="image"
              src="/assets/img/svg/doodle2.svg"
              width={152}
              height={147}
            />
            <img
              className="!h-[4.5rem] !absolute hidden xl:block lg:block"
              style={{ top: "-20%", left: "-25%" }}
              alt="image"
              src="/assets/img/svg/doodle6.svg"
              width={976}
              height={117}
            />
            <h2 className="!text-[calc(1.325rem_+_0.9vw)] font-semibold !leading-[1.2] xl:!text-[2rem] !mb-4">
              Manage all your bills, accounts &amp; budgets in
              <span className="text-gradient gradient-7">one place.</span>
            </h2>
            <p className="lead !text-[1.2rem] !leading-[1.5] !font-normal !mb-7">
              Sandbox is available to download from both App Store and Google
              Play Store.
            </p>
            <div className="flex justify-center xl:!justify-start lg:!justify-start">
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
                <a href="#" className="inline-block">
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
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full !ml-auto !mt-lg-n15 xl:!mt-[-10rem] lg:!mt-[-5rem] !mt-[50px]">
            <figure className="m-0 p-0">
              <img
                className="w-full max-w-full !h-auto"
                srcSet="/assets/img/photos/devices6@2x.png 2x"
                alt="image"
                src="/assets/img/photos/devices6.png"
                width={645}
                height={725}
              />
            </figure>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
